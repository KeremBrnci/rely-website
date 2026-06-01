import type { Metadata } from "next";

import { BlogListPage } from "@/components/marketing/blog/blog-list-page";
import { blogListPageMetadata } from "@/lib/seo";

export const metadata: Metadata = blogListPageMetadata;

export default function BlogPage() {
  return <BlogListPage />;
}
