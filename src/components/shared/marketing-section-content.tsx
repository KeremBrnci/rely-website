import type { ReactNode } from "react";

import { Stack } from "@/components/layout/stack";
import type { StackGap } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export type MarketingSectionContentProps = {
  /** Intro block (e.g. `SectionIntro`) — optional. */
  intro?: ReactNode;
  /** Primary section body (grids, cards, etc.). */
  children: ReactNode;
  /** Vertical rhythm between intro and body. */
  gap?: StackGap;
  className?: string;
};

/** Consistent vertical rhythm: optional intro + main body inside any section shell. */
export function MarketingSectionContent({
  intro,
  children,
  gap = "2xl",
  className,
}: MarketingSectionContentProps) {
  return (
    <Stack data-slot="marketing-section-content" gap={gap} className={cn(className)}>
      {intro}
      {children}
    </Stack>
  );
}
