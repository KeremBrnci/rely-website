import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { PricingAddOnsSection } from "@/components/marketing/pricing/pricing-add-ons-section";
import { PricingComparisonMatrix } from "@/components/sections/pricing/pricing-comparison-matrix";
import { PricingIncludesTriGrid } from "@/components/sections/pricing/pricing-includes-grid";
import { textRoleClassName } from "@/design-system/tokens";
import type { pricingPageContent } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

type PricingFeaturesSectionProps = {
  includes: (typeof pricingPageContent)["includes"];
  comparison: (typeof pricingPageContent)["comparison"];
  addOns: (typeof pricingPageContent)["addOns"];
};

export function PricingFeaturesSection({
  includes,
  comparison,
  addOns,
}: PricingFeaturesSectionProps) {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-12 md:gap-16">
      <section aria-labelledby="pricing-includes-heading">
        <div className="flex max-w-[44rem] flex-col gap-2.5">
          <InfrastructureEyebrow>Platform</InfrastructureEyebrow>
          <h2
            id="pricing-includes-heading"
            className={cn(
              textRoleClassName["heading-xl"],
              "text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
            )}
          >
            {includes.title}
          </h2>
          <p className="text-pretty text-[15px] leading-[1.65] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
            {includes.description}
          </p>
        </div>

        <div className="rely-card mt-8 rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] p-6 md:p-8">
          <PricingIncludesTriGrid
            items={[...includes.items]}
            variant="on-light"
            checkTone="muted"
          />
        </div>
      </section>

      <PricingAddOnsSection addOns={addOns} />

      <section aria-labelledby="pricing-diff-heading">
        <div className="flex max-w-[44rem] flex-col gap-2.5">
          <InfrastructureEyebrow>Plan farkı</InfrastructureEyebrow>
          <h2
            id="pricing-diff-heading"
            className={cn(
              textRoleClassName["heading-xl"],
              "text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
            )}
          >
            {comparison.title}
          </h2>
          <p className="text-pretty text-[15px] leading-[1.65] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
            {comparison.description}
          </p>
        </div>

        <div className="mt-8">
          <PricingComparisonMatrix
            variant="flat"
            featureLabel={comparison.featureLabel}
            plans={[...comparison.plans]}
            groups={[...comparison.groups]}
          />
        </div>
      </section>
    </div>
  );
}
