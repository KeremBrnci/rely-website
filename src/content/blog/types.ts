/**
 * Blog içerik modeli — liste ve detay sayfaları.
 */

export type BlogLinkItem = import("@/content/marketing/link-types").MarketingLinkItem;

export type BlogPostSection =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "links"; title: string; items: BlogLinkItem[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readingTimeMinutes: number;
  category: string;
  sections: BlogPostSection[];
  checklist: string[];
};

export type BlogPostMeta = Pick<
  BlogPost,
  | "slug"
  | "title"
  | "description"
  | "excerpt"
  | "publishedAt"
  | "readingTimeMinutes"
  | "category"
>;
