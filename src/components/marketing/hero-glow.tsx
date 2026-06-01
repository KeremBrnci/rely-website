import {
  heroGlowPresets,
  type HeroGlowKey,
} from "@/config/marketing/hero-glow";
import { cn } from "@/lib/utils";

export function HeroGlow({ preset = "default" }: { preset?: HeroGlowKey }) {
  const { blobs } = heroGlowPresets[preset];

  return (
    <>
      {blobs.map((blob, index) => (
        <div
          key={`${preset}-${index}`}
          aria-hidden
          className={cn(
            "pointer-events-none absolute rounded-full",
            blob.position,
            blob.size,
            blob.blur ?? "blur-[72px]",
          )}
          style={{
            backgroundColor: blob.color,
            opacity: blob.opacity ?? 0.75,
          }}
        />
      ))}
    </>
  );
}
