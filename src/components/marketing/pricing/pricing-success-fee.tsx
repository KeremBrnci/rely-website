import { PricingSectionIntro } from "@/components/marketing/pricing/pricing-section-intro";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  pricingMarketingSectionShell,
  pricingSectionBodyClassName,
} from "@/config/marketing/pricing-section-shell";
import { pricingPageContent } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

export function PricingSuccessFee() {
  const { successFee } = pricingPageContent;

  return (
    <MarketingSection id="success-fee" {...pricingMarketingSectionShell.section}>
      <div className="mx-auto max-w-[1100px]">
        <PricingSectionIntro
          eyebrow={successFee.eyebrow}
          title={successFee.title}
          titleEmphasis={successFee.titleEmphasis}
          description={successFee.description}
          className="max-w-[44rem]"
          descriptionClassName="max-w-[42rem]"
        />

        <aside
          className={cn(
            pricingSectionBodyClassName,
            "relative overflow-hidden rounded-shell border",
            "border-[color:color-mix(in_oklab,var(--marketing-primary)_28%,var(--marketing-border-subtle))]",
            "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_55%,white)]",
            "px-7 py-7 md:px-10 md:py-9",
            "shadow-[0_18px_40px_-28px_color-mix(in_oklab,var(--marketing-primary)_45%,transparent)]",
          )}
          aria-label="Ücretlendirme kapsamı"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[color:var(--marketing-primary)]"
            aria-hidden
          />
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--marketing-primary)]">
            {successFee.highlight.eyebrow}
          </p>
          <p className="mt-3 max-w-[40rem] font-heading text-[1.1875rem] font-semibold leading-[1.3] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.3125rem]">
            {successFee.highlight.title}
          </p>
          <p className="mt-3 max-w-[42rem] text-pretty text-[15px] leading-[1.7] text-[color:var(--marketing-body-readable)] md:text-base">
            {successFee.highlight.body}
          </p>
        </aside>

        <div
          className={cn(
            "mt-12 overflow-hidden rounded-shell border border-[color:var(--marketing-border-subtle)]",
            "bg-[color:var(--marketing-surface-elevated)] shadow-elevation-surface md:mt-14",
          )}
        >
          <div className="grid grid-cols-[1.55fr_0.7fr] gap-4 border-b border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-band)] px-5 py-4 md:px-8 md:py-5">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
              {successFee.table.revenueLabel}
            </p>
            <p className="text-right font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
              {successFee.table.rateLabel}
            </p>
          </div>
          <ul>
            {successFee.tiers.map((tier, index) => (
              <li
                key={tier.range}
                className={cn(
                  "group grid grid-cols-[1.55fr_0.7fr] items-center gap-4 px-5 py-4 md:px-8 md:py-[1.15rem]",
                  "border-l-2 border-l-transparent",
                  "transition-[background-color,border-color] duration-200 ease-out",
                  index !== successFee.tiers.length - 1 &&
                    "border-b border-b-[color:var(--marketing-border-subtle)]",
                  "hover:border-l-[color:var(--marketing-primary)]",
                  "hover:bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_40%,white)]",
                )}
              >
                <span className="text-[14px] leading-snug text-[color:var(--marketing-body-readable)] group-hover:text-[color:var(--marketing-foreground-strong)] md:text-[15px]">
                  {tier.range}
                </span>
                <span className="text-right font-heading text-[1.3125rem] font-semibold tabular-nums tracking-[-0.02em] text-[color:var(--marketing-primary)] md:text-[1.4375rem]">
                  {tier.rate}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            "mt-8 rounded-shell border border-[color:var(--marketing-border-subtle)]",
            "bg-[color:var(--marketing-surface-elevated)] px-6 py-6 md:mt-10 md:px-8 md:py-7",
          )}
        >
          <h3 className="font-heading text-[1.125rem] font-semibold leading-snug tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.1875rem]">
            {successFee.rationale.title}
          </h3>
          <p className="mt-3 text-pretty text-[14.5px] leading-[1.7] text-[color:var(--marketing-body-muted)] md:text-[15px]">
            {successFee.rationale.body}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-7">
          {successFee.pillars.map((pillar) => (
            <li
              key={pillar.id}
              className={cn(
                "rounded-shell border border-[color:var(--marketing-border-subtle)]",
                "bg-[color:var(--marketing-surface-elevated)] p-7 md:p-8",
                "shadow-[0_1px_0_color-mix(in_oklab,var(--marketing-foreground-strong)_4%,transparent)]",
                "transition-[border-color,box-shadow,transform] duration-300 ease-out",
                "hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--marketing-primary)_28%,var(--marketing-border-subtle))]",
                "hover:shadow-[0_14px_30px_-18px_color-mix(in_oklab,var(--marketing-primary)_32%,transparent)]",
              )}
            >
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-primary)]">
                {pillar.label}
              </p>
              <h3 className="mt-3 font-heading text-[1.125rem] font-semibold leading-[1.3] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.1875rem]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-pretty text-[14px] leading-[1.65] text-[color:var(--marketing-body-muted)]">
                {pillar.body}
              </p>
            </li>
          ))}
        </ul>

        <div
          className={cn(
            "mt-12 rounded-shell border border-[color:var(--marketing-border-subtle)]",
            "bg-[color:color-mix(in_oklab,var(--marketing-surface-band)_65%,white)]",
            "px-6 py-8 md:mt-14 md:px-10 md:py-10",
          )}
        >
          <h3 className="text-center font-heading text-[1.25rem] font-semibold tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.375rem]">
            {successFee.scenario.title}
          </h3>
          <div className="relative mt-8 md:mt-10">
            <div
              className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-4 hidden h-px bg-[color:var(--marketing-border-subtle)] md:block"
              aria-hidden
            />
            <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
              {successFee.scenario.steps.map((step, index) => (
                <li key={step.id} className="flex flex-col md:items-center md:text-center">
                  <span
                    className={cn(
                      "relative z-10 inline-flex size-8 items-center justify-center rounded-full",
                      "bg-[color:var(--marketing-primary)] font-heading text-[13px] font-semibold text-white",
                      "ring-[6px] ring-[color:color-mix(in_oklab,var(--marketing-surface-band)_65%,white)]",
                    )}
                  >
                    {index + 1}
                  </span>
                  <p className="mt-4 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
                    {step.title}
                  </p>
                  <p className="mt-2 max-w-[22rem] text-pretty text-[15px] leading-[1.6] text-[color:var(--marketing-foreground-strong)] md:mx-auto">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </MarketingSection>
  );
}
