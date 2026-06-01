/**
 * FAQ bölümleri — sayfalar arası tutarlı dikey ritim (özellikle pre-footer CTA öncesi).
 */

import type { SectionProps } from "@/components/sections/section";
import { cn } from "@/lib/utils";

export type FaqMarketingSectionShell = Pick<
  SectionProps,
  "spacing" | "background" | "contained" | "className"
>;

/**
 * FAQ dikey padding — `spacing: none` → `py-section-y-none` ile çakışmaması için `!` kullanılır.
 * Pre-footer boşluğu: `marketingPreFooterGapClassName` (layout).
 */
export const marketingFaqSectionPaddingClassName = cn(
  "!pt-[clamp(3.25rem,5.5vw,5rem)]",
  "!pb-[clamp(3rem,5vw,4.5rem)]",
);

/** Ortalanmış başlık + accordion (fiyatlandırma, sektör, iletişim). */
export const marketingFaqSectionShell = {
  spacing: "none",
  background: "default",
  contained: false,
  className: cn(
    "relative isolate scroll-mt-20 md:scroll-mt-24",
    "bg-[color:var(--marketing-background)]",
    marketingFaqSectionPaddingClassName,
  ),
} satisfies FaqMarketingSectionShell;

/** Ana sayfa — 2 kolon editorial FAQ. */
export const marketingFaqEditorialSectionShell = {
  spacing: "none",
  background: "default",
  contained: true,
  className: cn(
    "relative isolate scroll-mt-20 md:scroll-mt-24",
    "border-b border-[color:var(--marketing-section-divider)]",
    "bg-[color:var(--marketing-background)]",
    marketingFaqSectionPaddingClassName,
  ),
} satisfies FaqMarketingSectionShell;

/** FAQ içeriği — başlık ile accordion arası. */
export const marketingFaqContentClassName = "flex flex-col gap-12 md:gap-14";
