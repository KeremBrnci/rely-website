import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { MarketingRichText } from "@/components/marketing/marketing-rich-text";
import {
  solutionMarketingSectionShell,
  type SolutionMarketingSectionShell,
} from "@/config/marketing/solution-section-shell";
import type { SolutionContent } from "@/content/marketing/solutions";

export function SolutionOutcome({
  outcome,
  id = "outcome",
  sectionShell = solutionMarketingSectionShell.outcome,
}: {
  outcome: SolutionContent["outcome"];
  id?: string;
  sectionShell?: SolutionMarketingSectionShell;
}) {
  return (
    <MarketingSection id={id} {...sectionShell}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <div className="rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] p-7 md:p-8">
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
            {outcome.problemLabel}
          </p>
          <p className="mt-3 text-pretty font-heading text-[clamp(1.125rem,1.5vw,1.375rem)] font-medium leading-[1.4] tracking-[-0.01em] text-[color:var(--marketing-body-muted)]">
            {outcome.problem}
          </p>
        </div>

        <div className="rounded-shell border border-[color:color-mix(in_oklab,var(--marketing-primary)_24%,var(--marketing-border-subtle))] bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_40%,white)] p-7 md:p-8">
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-primary)]">
            {outcome.solutionLabel}
          </p>
          <p className="mt-3 text-pretty font-heading text-[clamp(1.125rem,1.5vw,1.375rem)] font-semibold leading-[1.4] tracking-[-0.01em] text-[color:var(--marketing-foreground-strong)]">
            <MarketingRichText text={outcome.solution} />
          </p>
        </div>
      </div>
    </MarketingSection>
  );
}
