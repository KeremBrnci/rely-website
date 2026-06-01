import { ProductHero } from "@/components/marketing/product/product-hero";
import { ProductIntegrationsSection } from "@/components/marketing/product/product-integrations-section";
import { ProductModulesSection } from "@/components/marketing/product/product-modules-section";
import { ProductPillarsSection } from "@/components/marketing/product/product-pillars-section";
import { PricingPageFaq } from "@/components/marketing/pricing/pricing-page-faq";
import { PageSeo } from "@/components/seo/page-seo";
import { routes } from "@/config/routes";
import { productPage, productPageMeta } from "@/content/marketing/product-page";
import { productBreadcrumbs, faqItemsToSchema } from "@/lib/seo";

export function ProductPage() {
  const { faq } = productPage;

  return (
    <>
      <PageSeo
        pathname={routes.product}
        titleSegment={productPageMeta.title}
        description={productPageMeta.description}
        variant="product"
        breadcrumbs={productBreadcrumbs()}
        faq={faqItemsToSchema(faq.items)}
      />
      <ProductHero />
      <ProductPillarsSection />
      <ProductModulesSection />
      <ProductIntegrationsSection />
      <PricingPageFaq title={faq.title} items={faq.items} />
    </>
  );
}
