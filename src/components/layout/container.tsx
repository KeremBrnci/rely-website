import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = ComponentProps<"div"> & {
  /** When false, children span full width inside outer padding (e.g. bleed media). */
  constrained?: boolean;
};

export function Container({
  className,
  constrained = true,
  ...props
}: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(
        "mx-auto w-full px-gutter-x lg:px-gutter-x-lg",
        constrained && "max-w-[var(--container-max-width)]",
        className,
      )}
      {...props}
    />
  );
}
