/**
 * Ürün sayfası `MarketingSection` kabukları — `/urun` için ritim, yüzey ve geçişler.
 * Ana sayfa tasarım diliyle hizalıdır (`home-section-shell`).
 */

import type { SectionProps } from "@/components/sections/section";
import { cn } from "@/lib/utils";

export type ProductMarketingSectionShell = Pick<
  SectionProps,
  "spacing" | "background" | "contained" | "className"
>;

export const productMarketingSectionShell = {
  hero: {
    contained: false,
    spacing: "none",
    background: "default",
    className: cn(
      "relative isolate overflow-hidden",
      "[background:var(--marketing-page-hero-gradient)]",
      "border-b border-[color:var(--marketing-section-divider)]",
      "pt-[var(--site-header-offset)]",
    ),
  } satisfies ProductMarketingSectionShell,

  pillars: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
    ),
  } satisfies ProductMarketingSectionShell,

  modules: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_26%,var(--marketing-background))]",
    ),
  } satisfies ProductMarketingSectionShell,

  integrations: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
    ),
  } satisfies ProductMarketingSectionShell,
} as const;
