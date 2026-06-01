import type { ComponentProps } from "react";

import { Grid } from "@/components/layout/grid";
import type { LayoutGap } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import { TestimonialQuote } from "@/components/sections/testimonials/testimonial-quote";
import type { TestimonialData } from "@/components/sections/types";

export type TestimonialGridProps = ComponentProps<"div"> & {
  items: TestimonialData[];
  columns?: 2 | 3;
  gap?: LayoutGap;
  variant?: "card" | "plain";
};

export function TestimonialGrid({
  items,
  columns = 2,
  gap = "md",
  variant = "card",
  className,
  ...props
}: TestimonialGridProps) {
  return (
    <Grid
      data-slot="testimonial-grid"
      cols={columns === 3 ? 3 : 2}
      gap={gap}
      className={cn(className)}
      {...props}
    >
      {items.map((item) => (
        <TestimonialQuote key={item.id} testimonial={item} variant={variant} />
      ))}
    </Grid>
  );
}
