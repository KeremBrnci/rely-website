import Link from "next/link";
import { Check } from "lucide-react";

import { PricingPageFaq } from "@/components/marketing/pricing/pricing-page-faq";
import { PricingPageHero } from "@/components/marketing/pricing/pricing-page-hero";
import { PricingFeaturesSection } from "@/components/marketing/pricing/pricing-features-section";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { PageSeo } from "@/components/seo/page-seo";
import { routes } from "@/config/routes";
import { pricingPageContent, pricingPageMeta } from "@/content/marketing/pricing-page";
import { faqItemsToSchema, pricingBreadcrumbs } from "@/lib/seo";
import { cn } from "@/lib/utils";

const sectionShell = cn(
  "relative isolate scroll-mt-20 md:scroll-mt-24",
  "border-b border-[color:var(--marketing-section-divider)]",
  "bg-[color:var(--marketing-background)]",
);

export function PricingPage() {
  const { plans, includes, comparison, addOns, faq } = pricingPageContent;

  return (
    <>
      <PageSeo
        pathname={routes.pricingTr}
        titleSegment={pricingPageMeta.title}
        description={pricingPageMeta.description}
        breadcrumbs={pricingBreadcrumbs()}
        faq={faqItemsToSchema(faq.items)}
      />
      <PricingPageHero />

      <MarketingSection id="plans" spacing="lg" background="default" className={sectionShell}>
        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <li
              key={plan.id}
              className={cn(
                "rely-card relative flex flex-col rounded-shell bg-[color:var(--marketing-surface-elevated)] p-7 md:p-8",
                plan.featured &&
                  "ring-1 ring-[color:color-mix(in_oklab,var(--marketing-primary)_30%,transparent)]",
              )}
            >
              {plan.featured ? (
                <span className="absolute right-6 top-7 inline-flex items-center rounded-full bg-[color:var(--marketing-soft-blue)] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--marketing-primary)]">
                  Önerilen
                </span>
              ) : null}

              <h2 className="font-heading text-[1.375rem] font-semibold leading-tight tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]">
                {plan.name}
              </h2>
              <p className="mt-2 text-pretty text-[14px] leading-[1.55] text-[color:var(--marketing-body-muted)]">
                {plan.tagline}
              </p>

              <p className="mt-6 font-heading text-[1.625rem] font-bold tracking-[-0.02em] text-[color:var(--marketing-foreground-strong)]">
                {plan.priceNote}
              </p>
              <p className="mt-1 font-sans text-[12.5px] text-[color:var(--marketing-body-muted)]">
                {plan.priceSubnote}
              </p>

              <Link
                href={plan.cta.href}
                className={cn(
                  "mt-6 inline-flex h-11 w-full items-center justify-center rounded-shell px-6",
                  "font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.02em]",
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

              <ul className="mt-7 flex flex-col gap-3 border-t border-[color:var(--marketing-border-subtle)] pt-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-pretty text-[14px] leading-[1.5] text-[color:var(--marketing-body-readable)]"
                  >
                    <Check
                      className="mt-0.5 size-[1.05rem] shrink-0 text-[color:var(--marketing-primary)]"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </MarketingSection>

      <MarketingSection
        id="features"
        spacing="lg"
        background="default"
        className={cn(sectionShell, "pb-[clamp(2.5rem,4vw,3.5rem)]")}
      >
        <PricingFeaturesSection includes={includes} comparison={comparison} addOns={addOns} />
      </MarketingSection>

      <PricingPageFaq title={faq.title} items={[...faq.items]} />
    </>
  );
}
