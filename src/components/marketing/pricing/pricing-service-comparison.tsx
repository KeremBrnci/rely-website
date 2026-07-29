import { PricingSectionIntro } from "@/components/marketing/pricing/pricing-section-intro";
import { PricingComparisonMatrix } from "@/components/sections/pricing/pricing-comparison-matrix";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  pricingMarketingSectionShell,
  pricingSectionBodyClassName,
} from "@/config/marketing/pricing-section-shell";
import { pricingPageContent } from "@/content/marketing/pricing-page";

export function PricingServiceComparison() {
  const { comparison } = pricingPageContent;

  return (
    <MarketingSection id="comparison" {...pricingMarketingSectionShell.section}>
      <div className="mx-auto max-w-[960px]">
        <PricingSectionIntro
          eyebrow={comparison.eyebrow}
          title={comparison.title}
          titleEmphasis={comparison.titleEmphasis}
          description={comparison.description}
        />

        <div className={pricingSectionBodyClassName}>
          <PricingComparisonMatrix
            variant="flat"
            featureLabel={comparison.featureLabel}
            plans={[...comparison.plans]}
            groups={[...comparison.groups]}
          />
        </div>
      </div>
    </MarketingSection>
  );
}
