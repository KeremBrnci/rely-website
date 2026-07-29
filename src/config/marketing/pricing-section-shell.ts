/**
 * Fiyatlandırma sayfası bölüm kabukları.
 * Not: Section `spacing: none` → `py-section-y-none` uygular; özel padding için `!` gerekir
 * (bkz. faq-section-shell).
 */

import type { SectionProps } from "@/components/sections/section";
import { marketingHeroHeaderOffsetClassName } from "@/config/marketing/page-shell";
import { cn } from "@/lib/utils";

export type PricingMarketingSectionShell = Pick<
  SectionProps,
  "spacing" | "background" | "contained" | "className"
>;

/** Bölümler arası nefes: üst + alt ayrı, `!` ile none spacing override */
const sectionRhythm = cn(
  "border-t border-[color:var(--marketing-border-subtle)]",
  "bg-[color:var(--marketing-background)]",
  "!pt-[clamp(5.5rem,11vw,8.5rem)]",
  "!pb-[clamp(5.5rem,11vw,8.5rem)]",
);

export const pricingMarketingSectionShell = {
  hero: {
    spacing: "none",
    background: "default",
    contained: false,
    className: cn(
      "relative isolate overflow-hidden",
      "[background:var(--marketing-page-hero-gradient)]",
      marketingHeroHeaderOffsetClassName,
      "!pb-[clamp(3.25rem,6vh,5rem)]",
    ),
  } satisfies PricingMarketingSectionShell,

  plans: {
    spacing: "none",
    background: "default",
    contained: true,
    className: cn(
      "bg-[color:var(--marketing-background)]",
      "!pt-[clamp(2.5rem,5vw,3.5rem)]",
      "!pb-[clamp(5.5rem,11vw,8.5rem)]",
    ),
  } satisfies PricingMarketingSectionShell,

  section: {
    spacing: "none",
    background: "default",
    contained: true,
    className: sectionRhythm,
  } satisfies PricingMarketingSectionShell,

  finalCta: {
    spacing: "none",
    background: "default",
    contained: false,
    className: cn(
      "bg-[color:var(--marketing-primary)] text-white",
      "!pt-[clamp(4.5rem,9vw,6.5rem)]",
      "!pb-[clamp(4.5rem,9vw,6.5rem)]",
    ),
  } satisfies PricingMarketingSectionShell,

  trust: {
    spacing: "none",
    background: "default",
    contained: false,
    className: cn(
      "bg-[color:var(--marketing-primary)] text-white",
      "!py-14 md:!py-[72px]",
    ),
  } satisfies PricingMarketingSectionShell,
} as const;

export const pricingSectionIntroClassName = "mx-auto max-w-[40rem] text-center";
export const pricingSectionTitleClassName =
  "mt-5 text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.22]";
export const pricingSectionDescriptionClassName =
  "mx-auto mt-5 max-w-[34rem] text-pretty text-[15px] leading-[1.75] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:mt-6 md:text-base";
export const pricingSectionBodyClassName = "mt-12 md:mt-14";
