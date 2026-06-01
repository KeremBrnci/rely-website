import {
  HERO_WAVE_VIEWBOX,
  buildHeroWaveLayers,
} from "@/lib/hero-wave-geometry";

const layers = buildHeroWaveLayers();
const { width, height } = HERO_WAVE_VIEWBOX;

const toneColor: Record<"navy" | "soft", string> = {
  navy: "var(--hero-wave-stroke)",
  soft: "var(--hero-wave-stroke-soft)",
};

/** Kod ile üretilen hero wave + mesh gradient arka planı. */
export function HeroWaveBackground() {
  return (
    <div className="rely-hero-waves" aria-hidden>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="rely-hero-waves__svg"
        shapeRendering="geometricPrecision"
      >
        <defs>
          <radialGradient id="rely-hero-mesh-a" cx="22%" cy="16%" r="60%">
            <stop offset="0%" stopColor="var(--hero-wave-stroke-soft)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--hero-wave-stroke-soft)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="rely-hero-mesh-b" cx="84%" cy="78%" r="64%">
            <stop offset="0%" stopColor="var(--hero-wave-stroke)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--hero-wave-stroke)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="rely-hero-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
            <stop offset="18%" stopColor="#fff" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#fff" stopOpacity="1" />
            <stop offset="86%" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="rely-hero-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
            <rect width={width} height={height} fill="url(#rely-hero-fade)" />
          </mask>
        </defs>

        {/* Mesh gradient backdrop — çok hafif */}
        <rect width={width} height={height} fill="url(#rely-hero-mesh-a)" />
        <rect width={width} height={height} fill="url(#rely-hero-mesh-b)" />

        {/* Akış çizgileri — kenarlarda yumuşayan mask */}
        <g mask="url(#rely-hero-mask)">
          {layers.map((layer) => (
            <g key={layer.id} className={`rely-hero-wave-layer ${layer.anim}`}>
              {layer.lines.map((line, index) => (
                <path
                  key={`${layer.id}-${index}`}
                  d={line.d}
                  className="rely-hero-wave-line"
                  stroke={toneColor[line.tone]}
                  strokeWidth={line.strokeWidth}
                  opacity={line.opacity}
                />
              ))}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
