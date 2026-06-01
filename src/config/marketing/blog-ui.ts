/**
 * Blog liste ve detay UI — kategori accent eşlemesi ve yardımcılar.
 */

import type { CardAccent } from "@/config/marketing/card-accents";
import type { BlogPostMeta, BlogPostSection } from "@/content/blog/types";

const categoryAccentMap: Record<string, CardAccent> = {
  Operasyon: "navy",
  Strateji: "indigo",
  Gelir: "teal",
  Tahsilat: "amber",
  Shopify: "indigo",
  "E-ticaret": "indigo",
  "Doğrudan satış": "indigo",
  "Elde tutma": "rose",
  Sektör: "teal",
  Metrikler: "amber",
  D2C: "indigo",
  Büyüme: "teal",
  Trend: "rose",
};

export function getBlogCategoryAccent(category: string): CardAccent {
  return categoryAccentMap[category] ?? "navy";
}

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function extractBlogHeadings(
  sections: BlogPostSection[],
): { id: string; text: string }[] {
  return sections
    .map((block, index) =>
      block.type === "h2" ? { id: `bolum-${index}`, text: block.text } : null,
    )
    .filter((item): item is { id: string; text: string } => item !== null);
}

export function getRelatedBlogPosts(
  current: BlogPostMeta,
  all: BlogPostMeta[],
  limit = 3,
): BlogPostMeta[] {
  const sameCategory = all.filter(
    (p) => p.slug !== current.slug && p.category === current.category,
  );
  const pool = sameCategory.length >= limit ? sameCategory : all.filter((p) => p.slug !== current.slug);
  return pool.slice(0, limit);
}

export function sortBlogPostsByDate(posts: BlogPostMeta[]): BlogPostMeta[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogCategories(posts: BlogPostMeta[]): string[] {
  const set = new Set(posts.map((p) => p.category));
  return [...set].sort((a, b) => a.localeCompare(b, "tr"));
}
