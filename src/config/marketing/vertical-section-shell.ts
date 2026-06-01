/**
 * Sektör (abonelik dikeyi) sayfaları — section kabukları.
 */

import type { SectionProps } from "@/components/sections/section";
import { solutionMarketingSectionShell } from "@/config/marketing/solution-section-shell";
import { cn } from "@/lib/utils";

export type VerticalMarketingSectionShell = Pick<
  SectionProps,
  "spacing" | "background" | "contained" | "className"
>;

export const verticalMarketingSectionShell = {
  hero: solutionMarketingSectionShell.hero,
  whyUsed: solutionMarketingSectionShell.outcome,
  advantages: solutionMarketingSectionShell.features,
  whyRely: {
    spacing: "lg",
    background: "default",
    className: cn(
      "relative isolate scroll-mt-20 md:scroll-mt-24",
      "border-b border-[color:var(--marketing-section-divider)]",
      "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_18%,var(--marketing-background))]",
    ),
  } satisfies VerticalMarketingSectionShell,
} as const;
