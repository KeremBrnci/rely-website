import Link from "next/link";

import { BlogArticleBody } from "@/components/marketing/blog/blog-article-body";
import { Container } from "@/components/layout/container";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { companyLegal, formatCompanyAddress } from "@/config/company";
import { marketingHeroHeaderOffsetClassName } from "@/config/marketing/page-shell";
import { routes } from "@/config/routes";
import type { LegalDocument } from "@/content/marketing/legal-pages";
import { PageSeo } from "@/components/seo/page-seo";
import { legalBreadcrumbs } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function LegalDocumentPage({
  document,
  pathname,
}: {
  document: LegalDocument;
  pathname: string;
}) {
  return (
    <>
      <PageSeo
        pathname={pathname}
        titleSegment={document.meta.title}
        description={document.meta.description}
        breadcrumbs={legalBreadcrumbs(document.meta.title, pathname)}
      />
      <MarketingSection
        id="hero"
        spacing="none"
        background="muted"
        contained={false}
        className={cn(
          "border-b border-[color:var(--marketing-section-divider)]",
          "bg-[color:var(--marketing-page-hero-bg)]",
          marketingHeroHeaderOffsetClassName,
        )}
      >
        <Container className="max-w-3xl py-[clamp(3rem,6vh,4.5rem)]">
          <InfrastructureEyebrow>{document.eyebrow}</InfrastructureEyebrow>
          <h1
            className={cn(
              "mt-5 text-balance font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em]",
              "text-[color:var(--marketing-foreground-strong)]",
            )}
          >
            {document.title}
          </h1>
          <p className="mt-4 max-w-[42rem] text-pretty text-[15px] leading-[1.7] text-[color:var(--marketing-body-muted)] md:text-base">
            {document.subtitle}
          </p>
          <p className="mt-3 font-sans text-[13px] text-[color:var(--marketing-body-muted)]">
            Son güncelleme: {document.lastUpdated}
          </p>
        </Container>
      </MarketingSection>

      <MarketingSection
        spacing="lg"
        background="default"
        className="bg-[color:var(--marketing-background)]"
      >
        <Container className="max-w-3xl">
          <BlogArticleBody sections={document.sections} />

          <aside
            className={cn(
              "mt-12 rounded-[1.25rem] border border-[color:var(--marketing-border-subtle)]",
              "bg-[color:var(--marketing-surface-band)] p-5 md:p-6",
            )}
          >
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-eyebrow-foreground)]">
              Veri sorumlusu / hizmet sağlayıcı
            </p>
            <p className="mt-2 font-heading text-[1.0625rem] font-semibold leading-snug text-[color:var(--marketing-foreground-strong)]">
              {companyLegal.legalName}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--marketing-body-readable)]">
              {formatCompanyAddress()}
            </p>
            <dl className="mt-4 grid gap-2 text-[13px] leading-snug text-[color:var(--marketing-body-muted)] sm:grid-cols-2">
              <div>
                <dt className="font-medium text-[color:var(--marketing-foreground-strong)]">
                  Vergi dairesi / no
                </dt>
                <dd>
                  {companyLegal.taxOffice} – {companyLegal.taxNumber}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[color:var(--marketing-foreground-strong)]">
                  Ticaret sicil no
                </dt>
                <dd>{companyLegal.tradeRegistryNumber}</dd>
              </div>
              <div>
                <dt className="font-medium text-[color:var(--marketing-foreground-strong)]">
                  MERSİS
                </dt>
                <dd>{companyLegal.mersis}</dd>
              </div>
              <div>
                <dt className="font-medium text-[color:var(--marketing-foreground-strong)]">
                  E-posta
                </dt>
                <dd>
                  <a
                    href={`mailto:${companyLegal.contactEmail}`}
                    className="text-[color:var(--marketing-primary)] hover:underline"
                  >
                    {companyLegal.contactEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <p className="mt-8 text-[14px] text-[color:var(--marketing-body-muted)]">
            <Link href={routes.privacy} className="hover:text-[color:var(--marketing-primary)]">
              Gizlilik
            </Link>
            {" · "}
            <Link href={routes.terms} className="hover:text-[color:var(--marketing-primary)]">
              Kullanım şartları
            </Link>
            {" · "}
            <Link href={routes.contact} className="hover:text-[color:var(--marketing-primary)]">
              İletişim
            </Link>
          </p>
        </Container>
      </MarketingSection>
    </>
  );
}
