"use client";

import { useEffect, useRef, useState } from "react";

import {
  HERO_WAVE_IMAGE_HEIGHT,
  HERO_WAVE_IMAGE_SRC,
  HERO_WAVE_IMAGE_WIDTH,
} from "@/config/marketing/hero-wave-asset";

const IMAGE_SRC = HERO_WAVE_IMAGE_SRC;
const IMAGE_WIDTH = HERO_WAVE_IMAGE_WIDTH;
const IMAGE_HEIGHT = HERO_WAVE_IMAGE_HEIGHT;
const IMAGE_ASPECT = IMAGE_WIDTH / IMAGE_HEIGHT;

/** Mobilde animasyonlu canvas kayma yapar; yalnızca statik görsel kullanılır */
const MOBILE_STATIC_WAVE_MEDIA = "(max-width: 1023px)";

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2 uRepeat;
  uniform vec2 uOffset;
  uniform float uTime;

  varying vec2 vUv;

  void main() {
    vec2 tuv = vUv * uRepeat + uOffset;

    // Animasyonu ilk ~1.2sn'de 0'dan rampala: ilk kare statik görselle birebir aynı
    float ramp = clamp(uTime / 1.2, 0.0, 1.0);

    // Yavaş yatay süzülme (sağa-sola)
    tuv.x += sin(uTime * 0.18) * 0.012 * ramp;

    // İpeksi akış için ince bükülme
    vec2 d;
    d.x = sin(tuv.y * 8.0 + uTime * 0.7) * 0.0045 * ramp;
    d.y = cos(tuv.x * 6.0 - uTime * 0.55) * 0.0045 * ramp;

    // Kutu dışı (clamp) bölgeleri şeffaf bırak
    vec2 s = tuv + d;
    if (s.x < 0.0 || s.x > 1.0 || s.y < 0.0 || s.y > 1.0) {
      discard;
    }

    gl_FragColor = texture2D(uTexture, s);
  }
`;

// Stripe fallback ölçülerini (breakpoint başına) takip eder
function fallbackBox(viewportWidth: number) {
  if (viewportWidth >= 1264) {
    return { width: 1392, height: 927 };
  }
  if (viewportWidth >= 640) {
    return { width: 1248, height: 831 };
  }
  const width = Math.min(viewportWidth * 0.92, 520);
  const height = width / IMAGE_ASPECT;
  return { width, height };
}

/** Statik <img> ile aynı hizalama: mobilde hafif sağa kaydırılmış merkez */
function fallbackOffsetX(
  viewportWidth: number,
  containerWidth: number,
  boxWidth: number,
) {
  if (viewportWidth >= 640) {
    return 1 - containerWidth / boxWidth;
  }
  const imageLeft = containerWidth * 0.5 - boxWidth * 0.92;
  return -imageLeft / boxWidth;
}

export function HeroWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mobileStaticOnly = window.matchMedia(
      MOBILE_STATIC_WAVE_MEDIA,
    ).matches;
    // Mobil + reduced-motion: three.js hiç indirilmez; statik LCP görseli kalır
    if (reduceMotion || mobileStaticOnly) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const THREE = await import("three");
      if (cancelled || !canvasRef.current) return;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
      } catch {
        return;
      }

      renderer.setClearColor(0x000000, 0);
      THREE.ColorManagement.enabled = false;
      renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const uniforms = {
        uTexture: { value: null as InstanceType<typeof THREE.Texture> | null },
        uRepeat: { value: new THREE.Vector2(1, 1) },
        uOffset: { value: new THREE.Vector2(0, 0) },
        uTime: { value: 0 },
      };

      const geometry = new THREE.PlaneGeometry(2, 2);
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        uniforms,
        transparent: true,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const setSize = () => {
        const parent = canvas.parentElement;
        const w = parent?.clientWidth || window.innerWidth;
        const h = parent?.clientHeight || window.innerHeight;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(w, h, false);

        const { width: boxW, height: boxH } = fallbackBox(window.innerWidth);
        uniforms.uRepeat.value.set(w / boxW, h / boxH);
        uniforms.uOffset.value.set(
          fallbackOffsetX(window.innerWidth, w, boxW),
          0.5 - h / (2 * boxH),
        );
      };
      setSize();

      const loader = new THREE.TextureLoader();
      let textureReady = false;
      loader.load(IMAGE_SRC, (texture) => {
        if (cancelled) {
          texture.dispose();
          return;
        }
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        uniforms.uTexture.value = texture;
        textureReady = true;
        renderer.render(scene, camera);
        setDrawn(true);
      });

      const clock = new THREE.Clock();
      let raf = 0;
      let running = false;
      let resizeRaf = 0;

      const loop = () => {
        if (!running) return;
        uniforms.uTime.value = clock.getElapsedTime();
        if (textureReady) renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };

      const start = () => {
        if (running) return;
        running = true;
        raf = requestAnimationFrame(loop);
      };

      const stop = () => {
        running = false;
        cancelAnimationFrame(raf);
      };

      start();

      const onResize = () => {
        cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(setSize);
      };
      window.addEventListener("resize", onResize);

      const onVisibility = () => {
        if (document.hidden) stop();
        else start();
      };
      document.addEventListener("visibilitychange", onVisibility);

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) start();
          else stop();
        },
        { threshold: 0 },
      );
      io.observe(canvas);

      cleanup = () => {
        stop();
        cancelAnimationFrame(resizeRaf);
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisibility);
        io.disconnect();
        uniforms.uTexture.value?.dispose();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      className={`rely-hero-wave${drawn ? " rely-hero-wave--drawn" : ""}`}
      aria-hidden
    >
      <div className="rely-hero-wave__layout">
        <div className="rely-hero-wave__contents">
          <canvas
            ref={canvasRef}
            className="rely-hero-wave__canvas"
            aria-hidden="true"
          />
          <div className="rely-hero-wave__static">
            <picture>
              <img
                src={IMAGE_SRC}
                alt=""
                aria-hidden="true"
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>
      </div>
      <span className="rely-hero-wave__veil" />
    </div>
  );
}
