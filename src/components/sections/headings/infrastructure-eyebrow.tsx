import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type InfrastructureEyebrowProps = ComponentProps<"div"> & {
  children: ReactNode;
  align?: "start" | "center";
};

const lineClassName =
  "h-px w-6 shrink-0 bg-[color:var(--marketing-eyebrow-line)] sm:w-7";

/** Section label — flanked by horizontal rules (site-wide eyebrow pattern). */
export function InfrastructureEyebrow({
  children,
  align = "start",
  className,
  ...props
}: InfrastructureEyebrowProps) {
  return (
    <div
      data-slot="infrastructure-eyebrow"
      className={cn(
        "flex w-fit max-w-full items-center gap-1.5",
        align === "center" && "mx-auto",
        className,
      )}
      {...props}
    >
      <span className={lineClassName} aria-hidden />
      <span className="rely-section-eyebrow-label shrink-0">{children}</span>
      <span className={lineClassName} aria-hidden />
    </div>
  );
}

/** @alias InfrastructureEyebrow */
export const SectionEyebrow = InfrastructureEyebrow;
