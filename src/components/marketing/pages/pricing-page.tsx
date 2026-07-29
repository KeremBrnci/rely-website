import { PricingFinalCta } from "@/components/marketing/pricing/pricing-final-cta";
import { PricingPageFaq } from "@/components/marketing/pricing/pricing-page-faq";
import { PricingPageHero } from "@/components/marketing/pricing/pricing-page-hero";
import { PricingPlanCards } from "@/components/marketing/pricing/pricing-plan-cards";
import { PricingServiceComparison } from "@/components/marketing/pricing/pricing-service-comparison";
import { PricingSuccessFee } from "@/components/marketing/pricing/pricing-success-fee";
import { PricingWhyRely } from "@/components/marketing/pricing/pricing-why-rely";
import { PageSeo } from "@/components/seo/page-seo";
import { routes } from "@/config/routes";
import { pricingPageContent, pricingPageMeta } from "@/content/marketing/pricing-page";
import { faqItemsToSchema, pricingBreadcrumbs } from "@/lib/seo";

export function PricingPage() {
  const { faq } = pricingPageContent;

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
      <PricingPlanCards />
      <PricingWhyRely />
      <PricingSuccessFee />
      <PricingServiceComparison />
      <PricingPageFaq title={faq.title} items={[...faq.items]} />
      <PricingFinalCta />
    </>
  );
}
