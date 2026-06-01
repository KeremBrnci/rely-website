import { SolutionFeatures } from "@/components/marketing/solutions/solution-features";
import { getSolutionHeroGlow } from "@/config/marketing/hero-glow";
import { SolutionHero } from "@/components/marketing/solutions/solution-hero";
import { SolutionOutcome } from "@/components/marketing/solutions/solution-outcome";
import { SolutionSteps } from "@/components/marketing/solutions/solution-steps";
import { PageSeo } from "@/components/seo/page-seo";
import {
  solutionsContent,
  type SolutionKey,
} from "@/content/marketing/solutions";
import { solutionBreadcrumbs } from "@/lib/seo";

export function SolutionPage({ solution }: { solution: SolutionKey }) {
  const content = solutionsContent[solution];

  return (
    <>
      <PageSeo
        pathname={content.href}
        titleSegment={content.meta.title}
        description={content.meta.description}
        breadcrumbs={solutionBreadcrumbs(content.meta.title, content.href)}
      />
      <SolutionHero hero={content.hero} glow={getSolutionHeroGlow(solution)} />
      <SolutionOutcome outcome={content.outcome} />
      <SolutionFeatures features={content.features} />
      <SolutionSteps steps={content.steps} />
    </>
  );
}
