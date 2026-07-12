import type { MetadataRoute } from "next";

import { getSiteBaseUrl } from "@/lib/seo/site-index";

/** Yalnızca indekslenmemesi gereken path önekleri. */
const DISALLOW_PATHS = ["/api/"] as const;

/** GEO: yapay zeka arama ve özet motorları — site genelinde tarama izni. */
const AI_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const base = getSiteBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [...DISALLOW_PATHS],
      },
      ...AI_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: ["/"],
        disallow: [...DISALLOW_PATHS],
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
