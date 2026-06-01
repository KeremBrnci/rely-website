import type { HomeIntelligenceStat } from "@/content/marketing/home-revenue-intelligence";
import {
  cardAccentVarClassName,
  type CardAccent,
} from "@/config/marketing/card-accents";
import { cn } from "@/lib/utils";

const deltaToneClassName = {
  positive: "text-[color:var(--rely-card-accent,var(--marketing-primary))]",
  neutral: "text-[#3f4d5c]",
  negative: "text-[#b45309]",
} as const;

export type IntelligenceStatCardProps = {
  stat: HomeIntelligenceStat;
  accent?: CardAccent;
  className?: string;
};

export function IntelligenceStatCard({
  stat,
  accent = "navy",
  className,
}: IntelligenceStatCardProps) {
  return (
    <article
      data-slot="intelligence-stat-card"
      className={cn(
        "rely-card rounded-shell",
        "bg-[color:var(--marketing-surface-elevated)] p-4 md:p-[1.125rem]",
        cardAccentVarClassName[accent],
        className,
      )}
    >
      <p
        className={cn(
          "font-sans text-[0.6875rem] font-medium uppercase leading-tight tracking-[0.06em]",
          "text-[#506680]",
        )}
      >
        {stat.label}
      </p>
      <p
        className={cn(
          "mt-2 font-sans text-[1.375rem] font-semibold leading-none tracking-[-0.03em] text-[#0f172a]",
          "md:text-[1.5rem]",
        )}
      >
        {stat.value}
      </p>
      <p
        className={cn(
          "mt-1.5 font-sans text-[0.8125rem] leading-snug tracking-[-0.01em]",
          deltaToneClassName[stat.deltaTone],
        )}
      >
        {stat.delta}
      </p>
    </article>
  );
}
