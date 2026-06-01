import type { HomeSetupStep } from "@/content/marketing/home-setup";
import {
  cardAccentChipClassName,
  cardAccentVarClassName,
  type CardAccent,
} from "@/config/marketing/card-accents";
import { cn } from "@/lib/utils";

export type SetupStepCardProps = {
  step: HomeSetupStep;
  accent?: CardAccent;
  className?: string;
};

function SetupTitleAccent({ children }: { children: string }) {
  return (
    <span className="font-semibold text-[color:var(--marketing-primary)]">{children}</span>
  );
}

export function SetupStepCard({ step, accent = "navy", className }: SetupStepCardProps) {
  const { index, label, title, description } = step;

  return (
    <article
      data-slot="setup-step-card"
      className={cn(
        "rely-card group flex h-full min-h-[16.5rem] flex-col rounded-shell",
        "bg-[color:var(--marketing-surface-elevated)] p-6 md:p-7",
        cardAccentVarClassName[accent],
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-full",
          "text-[0.8125rem] font-semibold tabular-nums leading-none tracking-[0.02em]",
          cardAccentChipClassName[accent],
        )}
      >
        {index}
      </span>

      <p
        className={cn(
          "mt-6 font-sans text-[0.6875rem] font-medium uppercase leading-none tracking-[0.12em]",
          "text-[color:var(--marketing-body-muted)]",
        )}
      >
        {label}
      </p>

      <h3
        className={cn(
          "mt-2.5 text-balance font-heading text-[1.25rem] font-semibold leading-[1.25]",
          "tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]",
        )}
      >
        {title.before}
        <SetupTitleAccent>{title.accent}</SetupTitleAccent>
        {title.after ?? null}
      </h3>

      <p className="mt-auto pt-5 text-pretty text-[15px] leading-[1.65] tracking-[-0.2px] text-[color:var(--marketing-body-muted)]">
        {description}
      </p>
    </article>
  );
}
