import type { BlogPost, BlogPostMeta, BlogPostSection } from "@/content/blog/types";

export function buildBlogPost(
  meta: BlogPostMeta,
  sections: BlogPostSection[],
  checklist: string[],
): BlogPost {
  return { ...meta, sections, checklist };
}
