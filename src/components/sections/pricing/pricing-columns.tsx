import type { ComponentProps } from "react";

import { Grid } from "@/components/layout/grid";
import type { LayoutGap } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import { PricingCard } from "@/components/sections/pricing/pricing-card";
import type { PricingPlanData } from "@/components/sections/types";

export type PricingColumnsProps = ComponentProps<"div"> & {
  plans: PricingPlanData[];
  columns?: 2 | 3;
  gap?: LayoutGap;
};

export function PricingColumns({
  plans,
  columns = 3,
  gap = "lg",
  className,
  ...props
}: PricingColumnsProps) {
  return (
    <Grid
      data-slot="pricing-columns"
      cols={columns === 2 ? 2 : 3}
      gap={gap}
      className={cn(className)}
      {...props}
    >
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </Grid>
  );
}
