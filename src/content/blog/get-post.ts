import type { BlogPost } from "@/content/blog/types";
import { blogArticles } from "@/content/blog/articles";
import { enrichBlogSections } from "@/content/blog/internal-links";
import { blogPostsMeta } from "@/content/blog/post-meta";

export function getAllBlogPosts(): BlogPost[] {
  return blogPostsMeta
    .map((meta) => {
      const body = blogArticles[meta.slug];
      if (!body) return null;
      return {
        ...meta,
        sections: enrichBlogSections(body.sections, meta.slug),
        checklist: body.checklist,
      };
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const meta = blogPostsMeta.find((p) => p.slug === slug);
  if (!meta) return undefined;
  const body = blogArticles[slug];
  if (!body) return undefined;
  return {
    ...meta,
    sections: enrichBlogSections(body.sections, slug),
    checklist: body.checklist,
  };
}
