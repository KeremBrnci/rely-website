/**
 * Tüm indekslenebilir sayfa `<title>` segmentlerinin benzersiz olduğunu doğrular.
 * Kullanım: npm run audit:titles
 */

import { blogPostsMeta } from "../src/content/blog/post-meta";
import { contactPageMeta } from "../src/content/marketing/contact-page";
import { ecommerceSubscriptionMeta } from "../src/content/marketing/ecommerce-subscription-system";
import { featuresContent, featuresOrder } from "../src/content/marketing/features";
import { homeMeta } from "../src/content/marketing/home";
import { privacyPage, termsPage } from "../src/content/marketing/legal-pages";
import { pricingPageMeta } from "../src/content/marketing/pricing-page";
import { productPageMeta } from "../src/content/marketing/product-page";
import { referencesPageMeta } from "../src/content/marketing/references-page";
import { solutionsContent, solutionsOrder } from "../src/content/marketing/solutions";
import {
  getSubscriptionVerticalBySlug,
  subscriptionVerticalSlugToKey,
  type SubscriptionVerticalSlug,
} from "../src/content/marketing/subscription-verticals";
import { buildSeoTitle, normalizeTitleSegment } from "../src/lib/seo/title";

type TitleEntry = { path: string; segment: string; full: string };

const entries: TitleEntry[] = [];

function add(path: string, raw: string): void {
  const segment = normalizeTitleSegment(raw);
  entries.push({ path, segment, full: buildSeoTitle(segment) });
}

add("/", homeMeta.title);
add("/urun", productPageMeta.title);
add("/fiyatlandirma", pricingPageMeta.title);
add("/iletisim", contactPageMeta.title);
add("/referanslar", referencesPageMeta.title);
add("/blog", "Blog");
add("/e-ticaret-abonelik-sistemi", ecommerceSubscriptionMeta.title);
add("/gizlilik", privacyPage.meta.title);
add("/sartlar", termsPage.meta.title);

for (const key of featuresOrder) {
  add(featuresContent[key].href, featuresContent[key].meta.title);
}
for (const key of solutionsOrder) {
  add(solutionsContent[key].href, solutionsContent[key].meta.title);
}
for (const slug of Object.keys(subscriptionVerticalSlugToKey) as SubscriptionVerticalSlug[]) {
  const vertical = getSubscriptionVerticalBySlug(slug);
  add(vertical.href, vertical.meta.title);
}
for (const post of blogPostsMeta) {
  add(`/blog/${post.slug}`, post.title);
}

const byFullLower = new Map<string, TitleEntry[]>();

for (const entry of entries) {
  const key = entry.full.toLowerCase();
  const list = byFullLower.get(key) ?? [];
  list.push(entry);
  byFullLower.set(key, list);
}

const duplicates = [...byFullLower.entries()].filter(([, list]) => list.length > 1);

if (duplicates.length > 0) {
  console.error("Duplicate page titles found:\n");
  for (const [title, list] of duplicates) {
    console.error(`  ${title}`);
    for (const { path } of list) console.error(`    - ${path}`);
  }
  process.exit(1);
}

console.log(`OK: ${entries.length} pages, ${byFullLower.size} unique titles.`);
