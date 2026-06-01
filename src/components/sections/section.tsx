import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { Container } from "@/components/layout/container";
import { sectionSpacingClassName, type SectionSpacing } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    background: {
      default: "bg-background",
      muted: "bg-muted/40",
      accent: "bg-accent/30",
    },
    spacing: {
      none: sectionSpacingClassName.none,
      sm: sectionSpacingClassName.sm,
      md: sectionSpacingClassName.md,
      lg: sectionSpacingClassName.lg,
      xl: sectionSpacingClassName.xl,
    } satisfies Record<SectionSpacing, string>,
  },
  defaultVariants: {
    background: "default",
    spacing: "md",
  },
});

export type SectionProps = ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    contained?: boolean;
  };

export function Section({
  className,
  background,
  spacing,
  contained = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ background, spacing }), className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
