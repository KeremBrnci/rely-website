import { Container } from "@/components/layout/container";
import { BlogListGrid } from "@/components/marketing/blog/blog-list-grid";
import { SolutionHero } from "@/components/marketing/solutions/solution-hero";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { routes } from "@/config/routes";
import { PageSeo } from "@/components/seo/page-seo";
import { blogPostsMeta } from "@/content/blog/post-meta";
import { blogListBreadcrumbs } from "@/lib/seo";
import { cn } from "@/lib/utils";

const listHero = {
  eyebrow: "Blog",
  title: "Abonelik operasyonları ve tekrarlayan gelir",
  titleEmphasis: "tekrarlayan gelir",
  subtitle:
    "E-ticaret abonelik, otomatik tahsilat, abone yönetimi ve büyüme üzerine uygulanabilir Türkçe rehberler — operatör perspektifinden.",
  primaryCta: { label: "Demo Talep Et", href: routes.contact },
  secondaryCta: { label: "Ürünü inceleyin", href: routes.product },
};

export function BlogListPage() {
  return (
    <>
      <PageSeo
        pathname={routes.blog}
        titleSegment="Blog"
        description="E-ticaret abonelik, tekrarlayan gelir, otomatik tahsilat ve abone yönetimi üzerine Türkçe rehberler ve uygulanabilir ipuçları."
        breadcrumbs={blogListBreadcrumbs()}
      />
      <SolutionHero hero={listHero} glow="blog" />
      <MarketingSection
        spacing="lg"
        background="default"
        className={cn(
          "border-b border-[color:var(--marketing-section-divider)]",
          "bg-[color:var(--marketing-background)]",
        )}
      >
        <Container>
          <InfrastructureEyebrow>Yazılar</InfrastructureEyebrow>
          <p className="mt-3 max-w-[40rem] text-pretty text-[15px] leading-[1.7] text-[color:var(--marketing-body-muted)]">
            Gelir büyümesi, abone tutma ve abonelik operasyonlarına odaklanan içerikler. Genel eğitim
            değil; sahada uygulanabilir çerçeveler.
          </p>
          <div className="mt-10">
            <BlogListGrid posts={blogPostsMeta} />
          </div>
        </Container>
      </MarketingSection>
    </>
  );
}
