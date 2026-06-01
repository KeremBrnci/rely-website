import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { stackGapClassName, type StackGap } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      "3xs": stackGapClassName["3xs"],
      "2xs": stackGapClassName["2xs"],
      xs: stackGapClassName.xs,
      sm: stackGapClassName.sm,
      md: stackGapClassName.md,
      lg: stackGapClassName.lg,
      xl: stackGapClassName.xl,
      "2xl": stackGapClassName["2xl"],
    } satisfies Record<StackGap, string>,
  },
  defaultVariants: {
    gap: "md",
  },
});

export type StackProps = ComponentProps<"div"> &
  VariantProps<typeof stackVariants>;

export function Stack({ className, gap, ...props }: StackProps) {
  return (
    <div
      data-slot="stack"
      className={cn(stackVariants({ gap }), className)}
      {...props}
    />
  );
}
