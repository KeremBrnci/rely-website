import type { MetadataRoute } from "next";

import {
  getSiteBaseUrl,
  getSiteUrlEntries,
  type SiteUrlChangeFrequency,
} from "@/lib/seo/site-index";

function toSitemapChangeFrequency(
  value: SiteUrlChangeFrequency,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  return value;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteBaseUrl();
  const fallbackModified = new Date();

  return getSiteUrlEntries().map((entry) => ({
    url: entry.path === "/" ? `${base}/` : `${base}${entry.path}`,
    lastModified: entry.lastModified
      ? new Date(`${entry.lastModified}T12:00:00Z`)
      : fallbackModified,
    changeFrequency: toSitemapChangeFrequency(entry.changeFrequency),
    priority: entry.priority,
  }));
}
