import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetailPage } from "@/components/marketing/blog/blog-detail-page";
import { getBlogPost } from "@/content/blog/get-post";
import { blogPostSlugs } from "@/content/blog/post-meta";
import { blogPostPageMetadata } from "@/lib/seo";
import { SEO_ROBOTS_NOINDEX } from "@/lib/seo/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPostSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = blogPostPageMetadata(slug);
  if (!metadata) {
    return {
      title: "Rely Subs | Yazı bulunamadı",
      robots: SEO_ROBOTS_NOINDEX,
    };
  }
  return metadata;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogDetailPage post={post} />;
}
