import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { BlogArticleBody } from "@/components/marketing/blog/blog-article-body";
import { BlogArticleHero } from "@/components/marketing/blog/blog-article-hero";
import { BlogArticleToc, BlogArticleTocMobile } from "@/components/marketing/blog/blog-article-toc";
import { BlogRelatedPosts } from "@/components/marketing/blog/blog-related-posts";
import { Container } from "@/components/layout/container";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { PageSeo } from "@/components/seo/page-seo";
import { extractBlogHeadings, getRelatedBlogPosts } from "@/config/marketing/blog-ui";
import { routes } from "@/config/routes";
import type { BlogPost } from "@/content/blog/types";
import { blogPostsMeta } from "@/content/blog/post-meta";
import { blogPostBreadcrumbs } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function BlogDetailPage({ post }: { post: BlogPost }) {
  const pathname = `${routes.blog}/${post.slug}`;
  const tocItems = extractBlogHeadings(post.sections);
  const relatedPosts = getRelatedBlogPosts(post, blogPostsMeta);

  return (
    <>
      <PageSeo
        pathname={pathname}
        titleSegment={post.title}
        description={post.description}
        variant="article"
        publishedAt={post.publishedAt}
        breadcrumbs={blogPostBreadcrumbs(post.title, post.slug)}
      />
      <BlogArticleHero post={post} />

      <MarketingSection
        spacing="lg"
        background="default"
        className={cn(
          "border-b border-[color:var(--marketing-section-divider)]",
          "bg-[color:var(--marketing-background)]",
        )}
      >
        <Container className="max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,42rem)] lg:gap-14 lg:justify-center">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <BlogArticleToc items={tocItems} />
              </div>
            </aside>

            <article className="min-w-0">
              <BlogArticleTocMobile items={tocItems} />
              <BlogArticleBody sections={post.sections} />
            </article>
          </div>
        </Container>
      </MarketingSection>

      <MarketingSection
        spacing="lg"
        background="default"
        className={cn(
          "border-b border-[color:var(--marketing-section-divider)]",
          "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_22%,var(--marketing-background))]",
        )}
      >
        <Container className="max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,42rem)] lg:gap-14 lg:justify-center">
            <div className="hidden lg:block" aria-hidden />
            <div className="min-w-0">
              <h2 className="font-heading text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-snug text-[color:var(--marketing-foreground-strong)]">
                Uygulama kontrol listesi
              </h2>
              <p className="mt-3 max-w-[40rem] text-[15px] leading-[1.65] text-[color:var(--marketing-body-muted)]">
                Bu yazıyı operasyon ekibinizle paylaşın; aşağıdaki maddeleri bir sonraki sprint
                planına taşıyın.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {post.checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] px-4 py-3.5"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[color:var(--marketing-primary)]"
                      aria-hidden
                    />
                    <span className="text-pretty text-[14px] leading-[1.55] text-[color:var(--marketing-body-readable)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={routes.contact}
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-shell px-6",
                    "font-sans text-[15px] font-medium text-white",
                    "bg-[color:var(--marketing-primary)] hover:bg-[color:var(--marketing-primary-hover)]",
                    "transition-colors duration-300",
                  )}
                >
                  Demo Talep Et
                </Link>
                <Link
                  href={routes.product}
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-1.5 rounded-shell border px-6",
                    "font-sans text-[15px] font-medium",
                    "border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)]",
                    "text-[color:var(--marketing-foreground-strong)] hover:bg-[color:var(--marketing-soft-blue)]",
                    "transition-colors duration-300",
                  )}
                >
                  Ürünü inceleyin
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </MarketingSection>

      <BlogRelatedPosts posts={relatedPosts} />
    </>
  );
}
