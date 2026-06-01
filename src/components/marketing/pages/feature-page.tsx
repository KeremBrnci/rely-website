import { SolutionFeatures } from "@/components/marketing/solutions/solution-features";
import { getFeatureHeroGlow } from "@/config/marketing/hero-glow";
import { SolutionHero } from "@/components/marketing/solutions/solution-hero";
import { SolutionOutcome } from "@/components/marketing/solutions/solution-outcome";
import { SolutionSteps } from "@/components/marketing/solutions/solution-steps";
import { MarketingInternalLinksSection } from "@/components/marketing/marketing-internal-links-section";
import { PageSeo } from "@/components/seo/page-seo";
import type { FeatureKey } from "@/content/marketing/features";
import { getFeatureContent } from "@/content/marketing/internal-links";
import { featureBreadcrumbs } from "@/lib/seo";

export function FeaturePage({ feature }: { feature: FeatureKey }) {
  const content = getFeatureContent(feature);

  return (
    <>
      <PageSeo
        pathname={content.href}
        titleSegment={content.meta.title}
        description={content.meta.description}
        breadcrumbs={featureBreadcrumbs(content.meta.title, content.href)}
      />
      <SolutionHero hero={content.hero} glow={getFeatureHeroGlow(feature)} />
      <SolutionOutcome outcome={content.outcome} />
      <SolutionFeatures features={content.features} />
      <SolutionSteps steps={content.steps} />
      <MarketingInternalLinksSection internalLinks={content.internalLinks} />
    </>
  );
}
