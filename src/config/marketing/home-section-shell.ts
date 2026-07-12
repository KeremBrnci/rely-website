/**
 * Homepage `MarketingSection` shells — rhythm, surfaces, and transitions for `/`.
 * Maps to Rely Website Design System homepage frame (Figma node `1:1659`).
 */

import type { SectionProps } from "@/components/sections/section";
import { marketingFaqSectionPaddingClassName } from "@/config/marketing/faq-section-shell";
import { cn } from "@/lib/utils";

export type HomeMarketingSectionShell = Pick<
  SectionProps,
  "spacing" | "background" | "contained" | "className"
>;

export const homeMarketingSectionShell = {
  hero: {
    contained: false,
    spacing: "none",
    background: "muted",
    className: cn(
      "relative isolate flex flex-col overflow-hidden",
      "max-lg:min-h-0 lg:min-h-[min(94svh,56rem)]",
      "[background:var(--marketing-page-hero-gradient)]",
      /* Header payı; lg+ içerik nav ile alt çizgi arasında dikey ortalanır */
      "pt-[var(--site-header-offset)] max-lg:pb-10 sm:max-lg:pb-12",
    ),
  } satisfies HomeMarketingSectionShell,

  trustedBrands: {
    spacing: "none",
    background: "default",
    className: cn(
      "border-b border-[color:var(--marketing-section-divider)] bg-background",
      "py-12 md:py-16",
    ),
  } satisfies HomeMarketingSectionShell,

  capabilities: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
    ),
  } satisfies HomeMarketingSectionShell,

  verticals: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
    ),
  } satisfies HomeMarketingSectionShell,

  howItWorks: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_26%,var(--marketing-background))]",
    ),
  } satisfies HomeMarketingSectionShell,

  lifecycle: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
    ),
  } satisfies HomeMarketingSectionShell,

  revenueIntelligence: {
    spacing: "xl",
    background: "default",
    contained: false,
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24 overflow-hidden",
      "border-y border-[color:color-mix(in_oklab,white_12%,transparent)]",
      "rely-product-band",
    ),
  } satisfies HomeMarketingSectionShell,

  setup: {
    spacing: "xl",
    background: "default",
    className: cn(
      "scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_24%,var(--marketing-background))]",
    ),
  } satisfies HomeMarketingSectionShell,

  faq: {
    spacing: "none",
    background: "default",
    className: cn(
      "scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:var(--marketing-background)]",
      marketingFaqSectionPaddingClassName,
    ),
  } satisfies HomeMarketingSectionShell,
} as const;
