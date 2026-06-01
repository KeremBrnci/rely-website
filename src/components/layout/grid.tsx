import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { layoutGapClassName, type LayoutGap } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

const gridVariants = cva("grid", {
  variants: {
    gap: {
      xs: layoutGapClassName.xs,
      sm: layoutGapClassName.sm,
      md: layoutGapClassName.md,
      lg: layoutGapClassName.lg,
    } satisfies Record<LayoutGap, string>,
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },
  },
  defaultVariants: {
    gap: "md",
    cols: 3,
  },
});

export type GridProps = ComponentProps<"div"> &
  VariantProps<typeof gridVariants>;

export function Grid({ className, gap, cols, ...props }: GridProps) {
  return (
    <div
      data-slot="grid"
      className={cn(gridVariants({ gap, cols }), className)}
      {...props}
    />
  );
}
