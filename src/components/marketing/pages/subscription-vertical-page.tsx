import { preload } from "react-dom";

import { SolutionFeatures } from "@/components/marketing/solutions/solution-features";
import { getVerticalHeroGlow } from "@/config/marketing/hero-glow";
import { subscriptionVerticalSlugToKey } from "@/content/marketing/subscription-verticals";
import { SolutionHero } from "@/components/marketing/solutions/solution-hero";
import { SolutionOutcome } from "@/components/marketing/solutions/solution-outcome";
import { VerticalImagerySection } from "@/components/marketing/verticals/vertical-imagery-section";
import { VerticalPageFaq } from "@/components/marketing/verticals/vertical-page-faq";
import { MarketingInternalLinksSection } from "@/components/marketing/marketing-internal-links-section";
import { verticalMarketingSectionShell } from "@/config/marketing/vertical-section-shell";
import { PageSeo } from "@/components/seo/page-seo";
import {
  getSubscriptionVerticalBySlug,
  type SubscriptionVerticalSlug,
} from "@/content/marketing/subscription-verticals";
import { enrichVerticalContent } from "@/content/marketing/internal-links";
import { faqItemsToSchema, sectorBreadcrumbs } from "@/lib/seo";

export function SubscriptionVerticalPage({ slug }: { slug: SubscriptionVerticalSlug }) {
  const content = enrichVerticalContent(getSubscriptionVerticalBySlug(slug), slug);

  preload(content.visuals.heroImage.src, { as: "image", fetchPriority: "high" });

  return (
    <>
      <PageSeo
        pathname={content.href}
        titleSegment={content.meta.title}
        description={content.meta.description}
        breadcrumbs={sectorBreadcrumbs(content.meta.title, content.href)}
        faq={faqItemsToSchema(content.faq.items)}
      />
      <SolutionHero
        hero={content.hero}
        glow={getVerticalHeroGlow(subscriptionVerticalSlugToKey[slug])}
      />
      <VerticalImagerySection visuals={content.visuals} />
      <SolutionOutcome
        id="why-subscription"
        outcome={content.whyUsed}
        sectionShell={verticalMarketingSectionShell.whyUsed}
      />
      <SolutionFeatures
        id="advantages"
        features={content.advantages}
        sectionShell={verticalMarketingSectionShell.advantages}
      />
      <SolutionFeatures
        id="why-rely"
        features={content.whyRely}
        sectionShell={verticalMarketingSectionShell.whyRely}
      />
      <MarketingInternalLinksSection internalLinks={content.internalLinks} />
      <VerticalPageFaq title={content.faq.title} items={content.faq.items} />
    </>
  );
}
