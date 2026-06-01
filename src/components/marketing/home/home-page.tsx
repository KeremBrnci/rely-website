import { CapabilitiesSection } from "@/components/marketing/home/capabilities-section";
import { FaqPreviewSection } from "@/components/marketing/home/faq-preview-section";
import { HeroSection } from "@/components/marketing/home/hero-section";
import { HowItWorksSection } from "@/components/marketing/home/how-it-works-section";
import { RevenueIntelligenceSection } from "@/components/marketing/home/revenue-intelligence-section";
import { SubscriptionLifecycleSection } from "@/components/marketing/home/lifecycle-section";
import { TrustedBrandsSection } from "@/components/marketing/home/trusted-brands-section";
import { VerticalsSection } from "@/components/marketing/home/verticals-section";
import { HomePageSeo, PageSeo } from "@/components/seo/page-seo";
import { routes } from "@/config/routes";
import { homeFaq, homeMeta } from "@/content/marketing/home";
import { faqItemsToSchema, homeBreadcrumb } from "@/lib/seo";

export function HomePage() {
  return (
    <>
      <HomePageSeo />
      <PageSeo
        pathname={routes.home}
        titleSegment={homeMeta.title}
        description={homeMeta.description}
        breadcrumbs={homeBreadcrumb()}
        faq={faqItemsToSchema(homeFaq.items)}
      />
      <HeroSection />
      <TrustedBrandsSection />
      <CapabilitiesSection />
      <HowItWorksSection />
      <SubscriptionLifecycleSection />
      <VerticalsSection />
      <RevenueIntelligenceSection />
      <FaqPreviewSection />
    </>
  );
}
