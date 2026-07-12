import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_LOCALE,
  SEO_ROBOTS_INDEX_FOLLOW,
  SEO_ROBOTS_NOINDEX,
  SEO_SITE_NAME,
} from "@/lib/seo/constants";
import { buildSeoTitle, normalizeTitleSegment } from "@/lib/seo/title";

export type PageSeoInput = {
  /** `Rely Subs | …` içindeki sağ segment veya ham başlık (normalize edilir). */
  title: string;
  description: string;
  /** Kanonik path, örn. `/urun` */
  pathname: string;
  /** openGraph.type — varsayılan `website` */
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /** Ham başlık kullan (normalize etme). */
  rawTitle?: boolean;
};

function resolveCanonicalUrl(pathname: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function createPageMetadata(input: PageSeoInput): Metadata {
  const segment = input.rawTitle ? input.title.trim() : normalizeTitleSegment(input.title);
  const fullTitle = buildSeoTitle(segment);
  const description = input.description.trim() || SEO_DEFAULT_DESCRIPTION;
  const canonical = resolveCanonicalUrl(input.pathname);
  const ogType = input.ogType ?? "website";
  const ogImageUrl = `${siteConfig.url.replace(/\/$/, "")}${siteConfig.ogImage}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: input.pathname,
    },
    openGraph: {
      type: ogType,
      locale: SEO_LOCALE,
      url: canonical,
      siteName: SEO_SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: `${SEO_SITE_NAME} — e-ticaret abonelik altyapısı`,
        },
      ],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: input.noIndex ? SEO_ROBOTS_NOINDEX : SEO_ROBOTS_INDEX_FOLLOW,
  };
}

export function createMetadataFromMeta(
  meta: { title: string; description: string },
  pathname: string,
  options?: Omit<PageSeoInput, "title" | "description" | "pathname">,
): Metadata {
  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    pathname,
    ...options,
  });
}
