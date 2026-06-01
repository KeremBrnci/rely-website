import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { layoutGapClassName, type LayoutGap } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

const clusterVariants = cva("flex flex-row flex-wrap items-center", {
  variants: {
    gap: {
      xs: layoutGapClassName.xs,
      sm: layoutGapClassName.sm,
      md: layoutGapClassName.md,
      lg: layoutGapClassName.lg,
    } satisfies Record<LayoutGap, string>,
    justify: {
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
      end: "justify-end",
    },
  },
  defaultVariants: {
    gap: "sm",
    justify: "start",
  },
});

export type ClusterProps = ComponentProps<"div"> &
  VariantProps<typeof clusterVariants>;

export function Cluster({ className, gap, justify, ...props }: ClusterProps) {
  return (
    <div
      data-slot="cluster"
      className={cn(clusterVariants({ gap, justify }), className)}
      {...props}
    />
  );
}
