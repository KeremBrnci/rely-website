/**
 * Çözüm sayfası `MarketingSection` kabukları — `/cozumler/*` için ritim ve yüzeyler.
 * Ana sayfa/ürün tasarım diliyle hizalıdır.
 */

import type { SectionProps } from "@/components/sections/section";
import { cn } from "@/lib/utils";

export type SolutionMarketingSectionShell = Pick<
  SectionProps,
  "spacing" | "background" | "contained" | "className"
>;

export const solutionMarketingSectionShell = {
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
  } satisfies SolutionMarketingSectionShell,

  outcome: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_26%,var(--marketing-background))]",
    ),
  } satisfies SolutionMarketingSectionShell,

  features: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
    ),
  } satisfies SolutionMarketingSectionShell,

  steps: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
    ),
  } satisfies SolutionMarketingSectionShell,
} as const;
