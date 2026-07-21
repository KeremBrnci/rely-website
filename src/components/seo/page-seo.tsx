import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  ContactPageJsonLd,
  FaqPageJsonLd,
  type FaqSchemaItem,
  ProductJsonLd,
  WebPageJsonLd,
  WebSiteJsonLd,
  buildSeoTitle,
  normalizeTitleSegment,
} from "@/lib/seo";
import type { BreadcrumbItem } from "@/lib/seo/breadcrumbs";

type PageSeoProps = {
  pathname: string;
  titleSegment: string;
  description: string;
  variant?: "default" | "product" | "contact" | "article";
  publishedAt?: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FaqSchemaItem[];
};

export function PageSeo({
  pathname,
  titleSegment,
  description,
  variant = "default",
  publishedAt,
  breadcrumbs,
  faq,
}: PageSeoProps) {
  const segment = normalizeTitleSegment(titleSegment);
  const title = buildSeoTitle(segment);

  return (
    <>
      <WebPageJsonLd pathname={pathname} title={title} description={description} />
      {variant === "product" ? <ProductJsonLd /> : null}
      {variant === "contact" ? <ContactPageJsonLd /> : null}
      {variant === "article" && publishedAt ? (
        <ArticleJsonLd
          pathname={pathname}
          title={title}
          description={description}
          publishedAt={publishedAt}
        />
      ) : null}
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <BreadcrumbJsonLd items={breadcrumbs} />
      ) : null}
      {faq && faq.length > 0 ? <FaqPageJsonLd items={faq} /> : null}
    </>
  );
}

export function HomePageSeo() {
  return <WebSiteJsonLd />;
}
