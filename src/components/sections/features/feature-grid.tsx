import type { ComponentProps } from "react";

import { Grid } from "@/components/layout/grid";
import type { LayoutGap } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import {
  FeatureCard,
  type FeatureCardProps,
} from "@/components/sections/features/feature-card";
import type { FeatureItemData } from "@/components/sections/types";

export type FeatureGridProps = ComponentProps<"div"> & {
  items: FeatureItemData[];
  columns?: 2 | 3 | 4;
  gap?: LayoutGap;
  variant?: "card" | "plain";
  cardLayout?: FeatureCardProps["layout"];
};

export function FeatureGrid({
  items,
  columns = 3,
  gap = "md",
  variant = "card",
  cardLayout = "stack",
  className,
  ...props
}: FeatureGridProps) {
  return (
    <Grid
      data-slot="feature-grid"
      cols={columns}
      gap={gap}
      className={cn(className)}
      {...props}
    >
      {items.map((item, index) => (
        <FeatureCard
          key={item.id}
          item={item}
          variant={variant}
          layout={cardLayout}
          iconAccentIndex={index}
        />
      ))}
    </Grid>
  );
}
