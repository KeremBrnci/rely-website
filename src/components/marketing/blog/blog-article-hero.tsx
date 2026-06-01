import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { BlogCategoryBadge } from "@/components/marketing/blog/blog-category-badge";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { formatBlogDate } from "@/config/marketing/blog-ui";
import { marketingHeroHeaderOffsetClassName } from "@/config/marketing/page-shell";
import { routes } from "@/config/routes";
import type { BlogPost } from "@/content/blog/types";
import { cn } from "@/lib/utils";

type BlogArticleHeroProps = {
  post: BlogPost;
};

export function BlogArticleHero({ post }: BlogArticleHeroProps) {
  return (
    <MarketingSection
      id="hero"
      spacing="none"
      background="muted"
      contained={false}
      className={cn(
        "border-b border-[color:var(--marketing-section-divider)]",
        "bg-[color:var(--marketing-page-hero-bg)]",
        marketingHeroHeaderOffsetClassName,
      )}
    >
      <Container className="max-w-[48rem] py-[clamp(2.5rem,6vh,4rem)]">
        <Link
          href={routes.blog}
          className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[color:var(--marketing-primary)] transition-colors hover:text-[color:var(--marketing-primary-hover)]"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Blog
        </Link>

        <div className="mt-6">
          <BlogCategoryBadge category={post.category} />
        </div>

        <h1
          className={cn(
            "mt-5 text-balance font-heading text-[clamp(1.875rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em]",
            "text-[color:var(--marketing-foreground-strong)]",
          )}
        >
          {post.title}
        </h1>

        <p className="mt-4 max-w-[42rem] text-pretty text-[15px] leading-[1.7] text-[color:var(--marketing-body-muted)] md:text-base">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[13px] text-[color:var(--marketing-body-muted)]">
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="size-3.5" aria-hidden />
            {post.readingTimeMinutes} dk okuma
          </span>
          <span>RELY Subs</span>
        </div>
      </Container>
    </MarketingSection>
  );
}
