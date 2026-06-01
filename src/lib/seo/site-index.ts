/**
 * Kanonik public URL envanteri — sitemap, robots ve llms üretimi için tek kaynak.
 */

import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { blogPostsMeta } from "@/content/blog/post-meta";
import { featuresContent, featuresOrder, type FeatureKey } from "@/content/marketing/features";
import { solutionsContent, solutionsOrder, type SolutionKey } from "@/content/marketing/solutions";
import {
  getSubscriptionVerticalBySlug,
  subscriptionVerticalSlugToKey,
  type SubscriptionVerticalSlug,
} from "@/content/marketing/subscription-verticals";

export type SiteUrlChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SiteUrlEntry = {
  path: string;
  title: string;
  description?: string;
  priority: number;
  changeFrequency: SiteUrlChangeFrequency;
  /** Sitemap lastModified — ISO tarih veya "now". */
  lastModified?: string;
  group: "core" | "feature" | "solution" | "sector" | "blog" | "legal" | "seo";
  /** true ise sitemap ve indeksleme dışı (ör. placeholder sayfalar). */
  noIndex?: boolean;
};

export const subscriptionVerticalSlugs = Object.keys(
  subscriptionVerticalSlugToKey,
) as SubscriptionVerticalSlug[];

const featureKeys = featuresOrder as FeatureKey[];
const solutionKeys = solutionsOrder as SolutionKey[];

const SEO_CONTENT_LAST_MODIFIED = "2026-06-02";

function coreEntries(): SiteUrlEntry[] {
  return [
    {
      path: routes.home,
      title: "Ana sayfa",
      priority: 1,
      changeFrequency: "weekly",
      lastModified: SEO_CONTENT_LAST_MODIFIED,
      group: "core",
    },
    {
      path: routes.product,
      title: "Ürün",
      priority: 0.92,
      changeFrequency: "weekly",
      lastModified: SEO_CONTENT_LAST_MODIFIED,
      group: "core",
    },
    {
      path: routes.pricingTr,
      title: "Fiyatlandırma",
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: SEO_CONTENT_LAST_MODIFIED,
      group: "core",
    },
    {
      path: routes.contact,
      title: "İletişim",
      priority: 0.8,
      changeFrequency: "monthly",
      group: "core",
    },
    {
      path: routes.blog,
      title: "Blog",
      priority: 0.75,
      changeFrequency: "weekly",
      group: "core",
    },
    {
      path: routes.references,
      title: "Referanslar",
      priority: 0.7,
      changeFrequency: "monthly",
      group: "core",
      noIndex: true,
    },
    {
      path: routes.ecommerceSubscription,
      title: "E-ticaret abonelik sistemi",
      priority: 0.95,
      changeFrequency: "monthly",
      lastModified: SEO_CONTENT_LAST_MODIFIED,
      group: "seo",
    },
    {
      path: routes.privacy,
      title: "Gizlilik",
      priority: 0.3,
      changeFrequency: "yearly",
      group: "legal",
    },
    {
      path: routes.terms,
      title: "Şartlar",
      priority: 0.3,
      changeFrequency: "yearly",
      group: "legal",
    },
  ];
}

function featureEntries(): SiteUrlEntry[] {
  return featureKeys.map((key) => {
    const content = featuresContent[key];
    return {
      path: content.href,
      title: content.meta.title,
      description: content.meta.description,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      group: "feature" as const,
    };
  });
}

function solutionEntries(): SiteUrlEntry[] {
  return solutionKeys.map((key) => {
    const content = solutionsContent[key];
    return {
      path: content.href,
      title: content.meta.title,
      description: content.meta.description,
      priority: 0.75,
      changeFrequency: "monthly" as const,
      group: "solution" as const,
    };
  });
}

function sectorEntries(): SiteUrlEntry[] {
  return subscriptionVerticalSlugs.map((slug) => {
    const content = getSubscriptionVerticalBySlug(slug);
    return {
      path: content.href,
      title: content.meta.title,
      description: content.meta.description,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      group: "sector" as const,
    };
  });
}

function blogEntries(): SiteUrlEntry[] {
  return blogPostsMeta.map((post) => ({
    path: `${routes.blog}/${post.slug}`,
    title: post.title,
    description: post.description,
    priority: 0.65,
    changeFrequency: "monthly" as const,
    lastModified: post.publishedAt,
    group: "blog" as const,
  }));
}

/** Tüm kanonik path kayıtları (noIndex dahil — llms tam envanter). */
export function getAllSiteUrlEntries(): SiteUrlEntry[] {
  return [
    ...coreEntries(),
    ...featureEntries(),
    ...solutionEntries(),
    ...sectorEntries(),
    ...blogEntries(),
  ];
}

/** Sitemap ve indeksleme için noIndex hariç kanonik path'ler. */
export function getSiteUrlEntries(): SiteUrlEntry[] {
  return getAllSiteUrlEntries().filter((entry) => !entry.noIndex);
}

export function getSiteBaseUrl(): string {
  return siteConfig.url.replace(/\/$/, "");
}

export function toAbsoluteUrl(path: string): string {
  const base = getSiteBaseUrl();
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** llms.txt / llms-full.txt için gruplu URL listesi. */
export function getSiteUrlEntriesByGroup(
  group: SiteUrlEntry["group"],
): SiteUrlEntry[] {
  return getSiteUrlEntries().filter((entry) => entry.group === group);
}
