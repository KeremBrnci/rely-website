import type { ComponentProps } from "react";

import { Grid } from "@/components/layout/grid";
import { getCardAccent } from "@/config/marketing/card-accents";
import { cn } from "@/lib/utils";

import { StatItem } from "@/components/sections/stats/stat-item";
import type { StatItemData } from "@/components/sections/types";

export type StatsGridProps = ComponentProps<"div"> & {
  items: StatItemData[];
  columns?: 2 | 3 | 4;
  /** Değerleri accent paletiyle dönüşümlü renklendir. */
  colorizeAccents?: boolean;
};

export function StatsGrid({
  items,
  columns = 4,
  colorizeAccents = false,
  className,
  ...props
}: StatsGridProps) {
  return (
    <div
      data-slot="stats-grid"
      className={cn(
        "overflow-hidden rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)]",
        className,
      )}
      {...props}
    >
      <Grid
        cols={columns}
        className="gap-0 divide-y divide-[color:var(--marketing-border-subtle)] md:divide-x md:divide-y-0"
      >
        {items.map((item, index) => (
          <StatItem
            key={item.id}
            item={item}
            accent={colorizeAccents ? getCardAccent(index) : undefined}
            className="md:py-10"
          />
        ))}
      </Grid>
    </div>
  );
}
