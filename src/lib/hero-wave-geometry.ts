/**
 * Hero wave field — kod ile üretilen, akan gelir akışlarını çağrıştıran
 * pürüzsüz sinüs çizgileri. Her katman birkaç paralel ince çizgiden oluşur;
 * hareket CSS transform ile (GPU) yapılır.
 */

export type HeroWaveTone = "navy" | "soft";

export type HeroWaveLine = {
  d: string;
  opacity: number;
  strokeWidth: number;
  tone: HeroWaveTone;
};

export type HeroWaveLayer = {
  id: string;
  /** CSS animasyon sınıfı (yatay/dikey, farklı süreler). */
  anim: string;
  lines: HeroWaveLine[];
};

export const HERO_WAVE_VIEWBOX = { width: 1440, height: 760 } as const;

/** Çizgiler viewBox'ı taşar; yatay/dikey kayma kenarda boşluk açmaz. */
const X_START = -320;
const X_END = HERO_WAVE_VIEWBOX.width + 320;
const SAMPLES = 16;

type LayerConfig = {
  id: string;
  anim: string;
  tone: HeroWaveTone;
  baseY: number;
  amplitude: number;
  wavelength: number;
  phase: number;
  strokeWidth: number;
  opacity: number;
  /** Paralel çizgi dikey offsetleri (band hissi). */
  offsets: number[];
};

/**
 * Sinüs eğrisini, tanjant tutamaçlı kübik bézier ile pürüzsüz çizer.
 * (Köşeli/kıvrımsız akış için derivative = A·k·cos kullanılır.)
 */
function buildWavePath(
  baseY: number,
  amplitude: number,
  wavelength: number,
  phase: number,
): string {
  const k = (Math.PI * 2) / wavelength;
  const dx = (X_END - X_START) / SAMPLES;

  const pts = Array.from({ length: SAMPLES + 1 }, (_, i) => {
    const x = X_START + i * dx;
    const angle = k * x + phase;
    return {
      x,
      y: baseY + amplitude * Math.sin(angle),
      slope: amplitude * k * Math.cos(angle),
    };
  });

  let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`;
  for (let i = 1; i <= SAMPLES; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const c1x = p0.x + dx / 3;
    const c1y = p0.y + (p0.slope * dx) / 3;
    const c2x = p1.x - dx / 3;
    const c2y = p1.y - (p1.slope * dx) / 3;
    d +=
      ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}` +
      ` ${c2x.toFixed(2)} ${c2y.toFixed(2)}` +
      ` ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`;
  }
  return d;
}

/** Akış bandları — yukarı doğru hafif yükselerek "büyüyen gelir" hissi. */
const LAYERS: LayerConfig[] = [
  {
    id: "stream-1",
    anim: "rely-hero-wave--xa",
    tone: "soft",
    baseY: 250,
    amplitude: 26,
    wavelength: 1320,
    phase: 0.4,
    strokeWidth: 1,
    opacity: 0.12,
    offsets: [-17, 0, 17],
  },
  {
    id: "stream-2",
    anim: "rely-hero-wave--ya",
    tone: "navy",
    baseY: 338,
    amplitude: 34,
    wavelength: 1520,
    phase: 1.25,
    strokeWidth: 1.25,
    opacity: 0.17,
    offsets: [-19, 0, 19],
  },
  {
    id: "stream-3",
    anim: "rely-hero-wave--xb",
    tone: "soft",
    baseY: 432,
    amplitude: 30,
    wavelength: 1180,
    phase: 2.35,
    strokeWidth: 1,
    opacity: 0.13,
    offsets: [-15, 0, 15],
  },
  {
    id: "stream-4",
    anim: "rely-hero-wave--yb",
    tone: "navy",
    baseY: 524,
    amplitude: 40,
    wavelength: 1700,
    phase: 0.85,
    strokeWidth: 1,
    opacity: 0.1,
    offsets: [-21, 0, 21],
  },
  {
    id: "stream-5",
    anim: "rely-hero-wave--xc",
    tone: "soft",
    baseY: 606,
    amplitude: 24,
    wavelength: 1260,
    phase: 3.1,
    strokeWidth: 0.75,
    opacity: 0.08,
    offsets: [-13, 0, 13],
  },
];

export function buildHeroWaveLayers(): HeroWaveLayer[] {
  return LAYERS.map((layer) => {
    const mid = (layer.offsets.length - 1) / 2;
    const lines: HeroWaveLine[] = layer.offsets.map((dy, index) => {
      const distance = mid === 0 ? 0 : Math.abs(index - mid) / mid;
      const opacityScale = 1 - distance * 0.5;
      const widthScale = 1 - distance * 0.25;
      return {
        d: buildWavePath(layer.baseY + dy, layer.amplitude, layer.wavelength, layer.phase),
        opacity: Number((layer.opacity * opacityScale).toFixed(3)),
        strokeWidth: Number((layer.strokeWidth * widthScale).toFixed(3)),
        tone: layer.tone,
      };
    });
    return { id: layer.id, anim: layer.anim, lines };
  });
}
