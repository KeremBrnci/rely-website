import type { ReactNode } from "react";

import { Stack } from "@/components/layout/stack";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import type { MarketingSectionProps } from "@/components/sections/shell/marketing-section";
import { cn } from "@/lib/utils";

export type CtaBandProps = Omit<MarketingSectionProps, "children"> & {
  children: ReactNode;
  /** Centers content — typical for bottom-of-page CTAs. */
  align?: "center" | "start";
};

/**
 * CTA section shell: marketing section + constrained, rhythm-safe inner column.
 * Pass `SectionIntro`, actions, and supporting copy as `children`.
 */
export function CtaBand({
  children,
  align = "center",
  className,
  ...sectionProps
}: CtaBandProps) {
  return (
    <MarketingSection className={cn(className)} {...sectionProps}>
      <Stack
        data-slot="cta-band-inner"
        gap="md"
        className={cn(
          "max-w-3xl",
          align === "center" && "mx-auto items-center text-center",
          align === "start" && "items-start text-start",
        )}
      >
        {children}
      </Stack>
    </MarketingSection>
  );
}
