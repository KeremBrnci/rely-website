import type { ComponentProps, ElementType, ReactNode } from "react";

import { Stack } from "@/components/layout/stack";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { InfrastructureRule } from "@/components/sections/headings/infrastructure-rule";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export type SectionIntroProps = Omit<ComponentProps<"div">, "title"> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  actions?: ReactNode;
  /** Heading level for the title — default `h2` for section landmarks. */
  titleAs?: Extract<ElementType, "h2" | "h3">;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "start",
  actions,
  titleAs: TitleTag = "h2",
  className,
  ...props
}: SectionIntroProps) {
  return (
    <Stack
      data-slot="section-intro"
      gap="md"
      className={cn(
        "max-w-[40rem]",
        align === "center" && "mx-auto max-w-[44rem] items-center text-center",
        align === "start" && "items-start text-left",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <InfrastructureEyebrow align={align}>{eyebrow}</InfrastructureEyebrow>
      ) : null}
      <TitleTag
        className={cn(
          textRoleClassName["heading-xl"],
          align === "center" && "max-w-[20ch] text-balance",
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <div
          className={cn(
            textRoleClassName["body-lg"],
            "max-w-[36rem] text-pretty text-[color:var(--marketing-body-muted)]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </div>
      ) : null}
      <InfrastructureRule
        className={cn("pt-1", align === "center" ? "max-w-md mx-auto" : "max-w-lg")}
      />
      {actions ? (
        <div className={align === "center" ? "flex justify-center" : undefined}>
          {actions}
        </div>
      ) : null}
    </Stack>
  );
}
