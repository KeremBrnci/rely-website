import type { ComponentProps } from "react";

import { Stack } from "@/components/layout/stack";
import {
  cardAccentColorVar,
  type CardAccent,
} from "@/config/marketing/card-accents";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import type { StatItemData } from "@/components/sections/types";

export type StatItemProps = ComponentProps<"div"> & {
  item: StatItemData;
  accent?: CardAccent;
};

export function StatItem({ item, accent, className, ...props }: StatItemProps) {
  const { label, value, hint } = item;

  return (
    <Stack
      data-slot="stat-item"
      gap="sm"
      className={cn("px-6 py-8 md:px-8 md:py-10", className)}
      {...props}
    >
      <div
        className={cn(
          textRoleClassName.caption,
          "font-sans uppercase tracking-eyebrow text-[color:var(--marketing-body-muted)]",
        )}
      >
        {label}
      </div>
      <div
        className={textRoleClassName.stat}
        style={accent ? { color: cardAccentColorVar[accent] } : undefined}
      >
        {value}
      </div>
      {hint ? (
        <div
          className={cn(
            textRoleClassName["body-sm"],
            "text-[color:var(--marketing-body-muted)]",
          )}
        >
          {hint}
        </div>
      ) : null}
    </Stack>
  );
}
