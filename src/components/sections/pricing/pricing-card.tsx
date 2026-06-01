import type { ComponentProps } from "react";

import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import type { PricingPlanData } from "@/components/sections/types";

export type PricingCardProps = ComponentProps<"div"> & {
  plan: PricingPlanData;
};

export function PricingCard({ plan, className, ...props }: PricingCardProps) {
  const { name, description, price, interval, features, highlighted, cta } = plan;

  return (
    <div
      data-slot="pricing-card"
      className={cn(
        "flex h-full flex-1 flex-col rounded-shell border p-stack-lg shadow-elevation-raised",
        highlighted
          ? "border-primary shadow-elevation-overlay ring-1 ring-primary/15"
          : "border-border",
        className,
      )}
      {...props}
    >
      <Stack gap="sm">
        <div className={textRoleClassName["heading-md"]}>{name}</div>
        {description ? (
          <div
            className={cn(
              textRoleClassName["body-sm"],
              "text-muted-foreground",
            )}
          >
            {description}
          </div>
        ) : null}
        <Cluster gap="sm" justify="start" className="items-baseline">
          <span className={textRoleClassName["heading-xl"]}>{price}</span>
          {interval ? (
            <span
              className={cn(
                textRoleClassName["body-sm"],
                "text-muted-foreground",
              )}
            >
              {interval}
            </span>
          ) : null}
        </Cluster>
      </Stack>

      <ul
        className={cn(
          textRoleClassName["body-sm"],
          "text-muted-foreground mt-stack-md flex flex-1 flex-col gap-stack-xs",
        )}
      >
        {features.map((feature, index) => (
          <li key={`${plan.id}-feature-${index}`}>{feature}</li>
        ))}
      </ul>

      <div className="mt-stack-lg">{cta}</div>
    </div>
  );
}
