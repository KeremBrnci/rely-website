import Link from "next/link";

import { PricingPlanFeatureList } from "@/components/marketing/pricing/pricing-plan-feature-list";
import { PricingSectionIntro } from "@/components/marketing/pricing/pricing-section-intro";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  pricingMarketingSectionShell,
  pricingSectionBodyClassName,
} from "@/config/marketing/pricing-section-shell";
import { pricingPageContent } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

export function PricingPlanCards() {
  const { plansIntro, plans } = pricingPageContent;

  return (
    <MarketingSection id="plans" {...pricingMarketingSectionShell.plans}>
      <div className="mx-auto max-w-[1100px]">
        <PricingSectionIntro
          eyebrow={plansIntro.eyebrow}
          title={plansIntro.title}
          titleEmphasis={plansIntro.titleEmphasis}
          description={plansIntro.description}
        />

        <ul
          className={cn(
            pricingSectionBodyClassName,
            "grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8",
          )}
        >
          {plans.map((plan) => {
            const items = plan.capabilities.length > 0 ? plan.capabilities : plan.services;

            return (
              <li
                key={plan.id}
                className={cn(
                  "rely-card relative flex flex-col rounded-shell bg-[color:var(--marketing-surface-elevated)] p-8 md:p-10",
                  plan.featured &&
                    "ring-1 ring-[color:color-mix(in_oklab,var(--marketing-primary)_28%,transparent)]",
                )}
              >
                {plan.badge ? (
                  <span
                    className={cn(
                      "absolute right-7 top-8 inline-flex items-center rounded-full px-2.5 py-1",
                      "font-sans text-[0.625rem] font-semibold uppercase tracking-[0.1em]",
                      plan.featured
                        ? "bg-[color:var(--marketing-soft-blue)] text-[color:var(--marketing-primary)]"
                        : "bg-[color:var(--marketing-surface-band)] text-[color:var(--marketing-body-muted)]",
                    )}
                  >
                    {plan.badge}
                  </span>
                ) : null}

                <h3 className="pr-24 font-heading text-[1.5rem] font-semibold leading-tight tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.625rem]">
                  {plan.name}
                </h3>
                <p className="mt-2 max-w-[38ch] text-pretty text-[14px] leading-[1.55] text-[color:var(--marketing-body-muted)] md:text-[15px]">
                  {plan.tagline}
                </p>

                <div className="mt-8 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <p className="font-heading text-[2.25rem] font-bold leading-none tracking-[-0.03em] text-[color:var(--marketing-foreground-strong)] md:text-[2.5rem]">
                    {plan.priceNote}
                  </p>
                  {plan.pricePeriod ? (
                    <span className="font-sans text-[15px] text-[color:var(--marketing-body-muted)]">
                      {plan.pricePeriod}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-pretty text-[13px] leading-[1.55] text-[color:var(--marketing-body-muted)] md:text-[13.5px]">
                  {plan.priceSubnote}
                </p>
                <p className="mt-2 text-pretty text-[13px] leading-[1.55] text-[color:var(--marketing-body-readable)]">
                  {plan.priceDetail}
                </p>

                <Link
                  href={plan.cta.href}
                  scroll={!plan.cta.href.includes("#")}
                  className={cn(
                    "mt-8 inline-flex h-12 w-full items-center justify-center rounded-shell px-6 text-center",
                    "font-sans text-[14px] font-medium leading-[1.35] tracking-[-0.02em] sm:text-[15px]",
                    "transition-colors duration-300 ease-out",
                    plan.featured
                      ? "bg-[color:var(--marketing-primary)] text-white hover:bg-[color:var(--marketing-primary-hover)]"
                      : cn(
                          "border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)]",
                          "text-[color:var(--marketing-foreground-strong)] hover:bg-[color:var(--marketing-soft-blue)]",
                        ),
                  )}
                >
                  {plan.cta.label}
                </Link>

                <PricingPlanFeatureList
                  intro={plan.featureIntro}
                  items={items}
                  enterpriseNote={
                    plan.id === "enterprise"
                      ? "RELY Platform’un tüm operasyon yeteneklerini içerir. Aşağıdakiler hizmet seviyesini yükseltir."
                      : undefined
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    </MarketingSection>
  );
}
