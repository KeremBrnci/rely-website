import { companyLegal, formatCompanyAddress } from "@/config/company";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { geoKnowsAbout } from "@/lib/seo/geo";
import { SEO_BRAND, SEO_KEYWORD_PHRASES } from "@/lib/seo/constants";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const organizationId = `${siteConfig.url}#organization`;

export function OrganizationJsonLd() {
  const { address } = companyLegal;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": organizationId,
        name: companyLegal.legalName,
        alternateName: [
          SEO_BRAND,
          companyLegal.brandName,
          SEO_KEYWORD_PHRASES.primary,
          SEO_KEYWORD_PHRASES.secondary,
          "RELY Subs",
        ],
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.logoSrc}`,
        email: companyLegal.contactEmail,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.line1,
          addressLocality: address.district,
          addressRegion: address.city,
          addressCountry: "TR",
        },
        sameAs: [
          siteConfig.links.x,
          siteConfig.links.linkedin,
          siteConfig.links.instagram,
        ],
        knowsAbout: [...geoKnowsAbout],
        taxID: companyLegal.taxNumber,
        identifier: [
          {
            "@type": "PropertyValue",
            name: "MERSİS",
            value: companyLegal.mersis,
          },
          {
            "@type": "PropertyValue",
            name: "Ticaret Sicil No",
            value: companyLegal.tradeRegistryNumber,
          },
        ],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: SEO_BRAND,
        alternateName: [
          SEO_KEYWORD_PHRASES.primary,
          SEO_KEYWORD_PHRASES.secondary,
          SEO_KEYWORD_PHRASES.tertiary,
          "RELY Subs",
        ],
        description: siteConfig.description,
        inLanguage: "tr-TR",
        publisher: { "@id": organizationId },
      }}
    />
  );
}

export function WebPageJsonLd({
  pathname,
  title,
  description,
}: {
  pathname: string;
  title: string;
  description: string;
}) {
  const url = `${siteConfig.url.replace(/\/$/, "")}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${siteConfig.url}#website` },
        about: { "@id": organizationId },
        publisher: { "@id": organizationId },
      }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const url = `${siteConfig.url}${routes.product}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SEO_BRAND,
        alternateName: [
          SEO_KEYWORD_PHRASES.primary,
          SEO_KEYWORD_PHRASES.secondary,
          "Abonelik E-ticaret Platformu",
        ],
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url,
        description: siteConfig.description,
        offers: {
          "@type": "Offer",
          priceCurrency: "TRY",
          description: "Hacme göre komisyon ve kuruma özel teklif",
          availability: "https://schema.org/InStock",
        },
        provider: { "@id": organizationId },
      }}
    />
  );
}

export function ArticleJsonLd({
  pathname,
  title,
  description,
  publishedAt,
  modifiedAt,
}: {
  pathname: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
}) {
  const url = `${siteConfig.url.replace(/\/$/, "")}${pathname}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: publishedAt,
        dateModified: modifiedAt ?? publishedAt,
        inLanguage: "tr-TR",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@id": organizationId },
        publisher: {
          "@type": "Organization",
          "@id": organizationId,
          name: companyLegal.legalName,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${siteConfig.logoSrc}`,
          },
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; pathname: string }[];
}) {
  const base = siteConfig.url.replace(/\/$/, "");

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${base}${item.pathname.startsWith("/") ? item.pathname : `/${item.pathname}`}`,
        })),
      }}
    />
  );
}

/** İletişim sayfası — Organization postal address tekrar kullanımı */
export type FaqSchemaItem = {
  question: string;
  answer: string;
};

export function FaqPageJsonLd({ items }: { items: FaqSchemaItem[] }) {
  if (items.length === 0) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function ContactPageJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${siteConfig.url}${routes.contact}`,
        name: "İletişim",
        description: "RELY Subs demo ve destek iletişimi",
        mainEntity: { "@id": organizationId },
      }}
    />
  );
}

export { formatCompanyAddress };
