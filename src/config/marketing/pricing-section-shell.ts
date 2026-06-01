/**
 * Fiyatlandırma sayfası bölüm kabukları — görsel referansa göre dikey ritim ve yüzeyler.
 */

import type { SectionProps } from "@/components/sections/section";
import { marketingHeroHeaderOffsetClassName } from "@/config/marketing/page-shell";
import { cn } from "@/lib/utils";

export type PricingMarketingSectionShell = Pick<
  SectionProps,
  "spacing" | "background" | "contained" | "className"
>;

export const pricingMarketingSectionShell = {
  hero: {
    spacing: "none",
    background: "default",
    contained: false,
    className: cn(
      "relative isolate overflow-hidden",
      "border-b border-[color:var(--marketing-section-divider)]",
      "[background:var(--marketing-page-hero-gradient)]",
      marketingHeroHeaderOffsetClassName,
      "pb-[clamp(3.5rem,8vh,6rem)]",
    ),
  } satisfies PricingMarketingSectionShell,

  cardsAndCompare: {
    spacing: "none",
    background: "default",
    contained: false,
    className: cn(
      "border-b border-[color:var(--marketing-border-subtle)]",
      "bg-[color:var(--marketing-surface-band)]",
      /* Üst: kart bloğu öncesi Figma ~100px; alt: tablo + boşluk için biraz daha ferah */
      "pb-[100px] pt-[72px] md:pb-[120px] md:pt-[100px]",
    ),
  } satisfies PricingMarketingSectionShell,

  trust: {
    spacing: "none",
    background: "default",
    contained: false,
    className: cn(
      "border-b border-[color:var(--marketing-primary-deep)]",
      "bg-[color:var(--marketing-primary)] text-white",
      "py-14 md:py-[72px]",
    ),
  } satisfies PricingMarketingSectionShell,

} as const;
