import type { PreFooterGlowBlob } from "@/config/marketing/pre-footer-cta-variant";
import { cn } from "@/lib/utils";

export function PreFooterCtaGlow({ glows }: { glows: PreFooterGlowBlob[] }) {
  return (
    <>
      {glows.map((blob, index) => (
        <div
          key={index}
          aria-hidden
          className={cn(
            "pointer-events-none absolute rounded-full",
            blob.position,
            blob.size,
            blob.blur ?? "blur-[80px]",
          )}
          style={{
            backgroundColor: blob.color,
            opacity: blob.opacity ?? 0.5,
          }}
        />
      ))}
    </>
  );
}
