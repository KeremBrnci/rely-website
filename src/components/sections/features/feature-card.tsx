import type { ComponentProps } from "react";

import { Stack } from "@/components/layout/stack";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import type { FeatureItemData } from "@/components/sections/types";

function marketingIconWellClass(index: number) {
  const phase = index % 3;
  if (phase === 0) {
    return "border-[color:var(--marketing-primary)] [&_svg]:text-[color:var(--marketing-primary)]";
  }
  if (phase === 1) {
    return "border-[color:color-mix(in_oklab,var(--marketing-primary)_45%,var(--marketing-border-subtle))] [&_svg]:text-[color:var(--marketing-primary)]";
  }
  return "border-[color:var(--marketing-border-subtle)] [&_svg]:text-[color:var(--marketing-body-muted)]";
}

export type FeatureCardProps = ComponentProps<"article"> & {
  item: FeatureItemData;
  variant?: "card" | "plain";
  /** `split`: icon + copy row on larger breakpoints — denser, DS-style feature rows. */
  layout?: "stack" | "split";
  /** Rotates gradient wells on marketing-style split cards (0-based). */
  iconAccentIndex?: number;
};

export function FeatureCard({
  item,
  variant = "card",
  layout = "stack",
  iconAccentIndex = 0,
  className,
  ...props
}: FeatureCardProps) {
  const { icon, title, description } = item;

  const marketingSplitCard = variant === "card" && layout === "split";

  const iconWrap = icon ? (
    <div
      className={cn(
        marketingSplitCard &&
          cn(
            "flex size-10 shrink-0 items-center justify-center rounded-shell border bg-[color:var(--marketing-background)]",
            marketingIconWellClass(iconAccentIndex),
          ),
        !marketingSplitCard &&
          cn(
            "text-foreground [&_svg]:size-8",
            layout === "split" && "[&_svg]:size-7 sm:mt-0.5",
          ),
      )}
      aria-hidden
    >
      <span className={cn(marketingSplitCard && "[&_svg]:size-7")}>
        {icon}
      </span>
    </div>
  ) : null;

  const heading = marketingSplitCard ? (
    <h3 className="font-heading text-base font-semibold leading-6 tracking-tight text-[color:var(--marketing-foreground-strong)]">
      {title}
    </h3>
  ) : (
    <h3 className={textRoleClassName["heading-md"]}>{title}</h3>
  );

  const body = (
    <div
      className={cn(
        textRoleClassName["body-sm"],
        marketingSplitCard
          ? "text-[color:var(--marketing-body-muted)]"
          : "text-muted-foreground",
      )}
    >
      {description}
    </div>
  );

  return (
    <article
      data-slot="feature-card"
      data-layout={layout}
      className={cn(
        marketingSplitCard &&
          "rounded-shell border border-[color:var(--marketing-border-subtle)] border-t-[3px] border-t-[color:var(--marketing-primary)] bg-[color:var(--marketing-surface-elevated)] p-7",
        variant === "card" &&
          !marketingSplitCard &&
          "border-border bg-card text-card-foreground rounded-shell border p-stack-lg shadow-elevation-raised",
        variant === "plain" &&
          layout === "stack" &&
          "p-stack-xs",
        variant === "plain" &&
          layout === "split" &&
          "border-border/70 bg-muted/30 rounded-shell border p-stack-md",
        layout === "split" && "flex flex-col gap-stack-md sm:flex-row sm:items-start",
        className,
      )}
      {...props}
    >
      {layout === "stack" ? (
        <Stack gap="sm">
          {iconWrap}
          {heading}
          {body}
        </Stack>
      ) : (
        <>
          {iconWrap}
          <Stack gap="xs" className="min-w-0 flex-1">
            {heading}
            {body}
          </Stack>
        </>
      )}
    </article>
  );
}
