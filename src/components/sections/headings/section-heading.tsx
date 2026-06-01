import type { ComponentProps, ElementType, ReactNode } from "react";

import { Stack } from "@/components/layout/stack";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export type SectionHeadingProps = Omit<ComponentProps<"div">, "title"> & {
  title: ReactNode;
  description?: ReactNode;
  /** Use inside columns or nested blocks — default `h3`. */
  titleAs?: Extract<ElementType, "h3" | "h4">;
  /** Typography emphasis for dense layouts. */
  size?: "md" | "sm";
};

export function SectionHeading({
  title,
  description,
  titleAs: TitleTag = "h3",
  size = "md",
  className,
  ...props
}: SectionHeadingProps) {
  const titleClass =
    size === "md"
      ? textRoleClassName["heading-lg"]
      : textRoleClassName["heading-md"];

  return (
    <Stack data-slot="section-heading" gap="2xs" className={cn(className)} {...props}>
      <TitleTag className={titleClass}>{title}</TitleTag>
      {description ? (
        <div className={cn(textRoleClassName["body-sm"], "text-muted-foreground")}>
          {description}
        </div>
      ) : null}
    </Stack>
  );
}
