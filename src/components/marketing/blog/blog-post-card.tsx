import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogCategoryBadge } from "@/components/marketing/blog/blog-category-badge";
import { cardAccentVarClassName } from "@/config/marketing/card-accents";
import { formatBlogDate, getBlogCategoryAccent } from "@/config/marketing/blog-ui";
import type { BlogPostMeta } from "@/content/blog/types";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

type BlogPostCardProps = {
  post: BlogPostMeta;
  variant?: "default" | "featured";
};

export function BlogPostCard({ post, variant = "default" }: BlogPostCardProps) {
  const accent = getBlogCategoryAccent(post.category);
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(
        "rely-card group relative flex flex-col overflow-hidden rounded-shell",
        "bg-[color:var(--marketing-surface-elevated)]",
        cardAccentVarClassName[accent],
        isFeatured ? "md:flex-row md:items-stretch" : "h-full",
      )}
    >
      {isFeatured ? (
        <div
          className={cn(
            "hidden shrink-0 md:flex md:w-[38%]",
            "border-r border-[color:var(--marketing-border-subtle)]",
            "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_32%,var(--marketing-surface-elevated))]",
            "flex-col justify-between p-8 lg:p-10",
          )}
        >
          <BlogCategoryBadge category={post.category} />
          <div className="mt-auto space-y-2 pt-8">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[color:var(--marketing-body-muted)]">
              Öne çıkan yazı
            </p>
            <p className="font-heading text-[2rem] font-bold leading-none tracking-[-0.04em] text-[color:var(--marketing-primary)]">
              {post.readingTimeMinutes}
              <span className="ml-1 text-[1rem] font-semibold tracking-normal text-[color:var(--marketing-body-muted)]">
                dk
              </span>
            </p>
          </div>
        </div>
      ) : null}

      <div className={cn("flex flex-1 flex-col", isFeatured ? "p-7 md:p-9 lg:p-10" : "p-6 md:p-7")}>
        {!isFeatured ? (
          <div className="flex flex-wrap items-center gap-2.5">
            <BlogCategoryBadge category={post.category} />
            <span className="font-sans text-[12px] text-[color:var(--marketing-body-muted)]">
              {post.readingTimeMinutes} dk okuma
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3 md:hidden">
            <BlogCategoryBadge category={post.category} />
            <span className="font-sans text-[12px] text-[color:var(--marketing-body-muted)]">
              {post.readingTimeMinutes} dk okuma
            </span>
          </div>
        )}

        <time
          dateTime={post.publishedAt}
          className={cn(
            "block font-sans text-[12px] font-medium text-[color:var(--marketing-body-muted)]",
            isFeatured ? "mt-4 md:mt-0" : "mt-4",
          )}
        >
          {formatBlogDate(post.publishedAt)}
        </time>

        <h2
          className={cn(
            "mt-3 font-heading font-semibold leading-snug tracking-[var(--tracking-editorial)]",
            "text-[color:var(--marketing-foreground-strong)] transition-colors group-hover:text-[color:var(--marketing-primary)]",
            isFeatured
              ? "text-[clamp(1.5rem,2.5vw,2rem)] md:max-w-[28ch]"
              : "text-[1.25rem] md:text-[1.375rem]",
          )}
        >
          <Link href={`${routes.blog}/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h2>

        <p
          className={cn(
            "mt-3 flex-1 text-pretty leading-[1.65] text-[color:var(--marketing-body-muted)]",
            isFeatured ? "max-w-[52ch] text-[15px] md:text-base" : "text-[14px]",
          )}
        >
          {post.excerpt}
        </p>

        <p className="mt-5 inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-[color:var(--marketing-primary)]">
          Devamını oku
          <ArrowRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </p>
      </div>
    </article>
  );
}
