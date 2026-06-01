"use client";

import { useMemo, useState } from "react";

import { BlogPostCard } from "@/components/marketing/blog/blog-post-card";
import type { BlogPostMeta } from "@/content/blog/types";
import { getBlogCategories, sortBlogPostsByDate } from "@/config/marketing/blog-ui";
import { cn } from "@/lib/utils";

type BlogListGridProps = {
  posts: BlogPostMeta[];
};

export function BlogListGrid({ posts }: BlogListGridProps) {
  const sorted = useMemo(() => sortBlogPostsByDate(posts), [posts]);
  const categories = useMemo(() => getBlogCategories(sorted), [sorted]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeCategory) return sorted;
    return sorted.filter((post) => post.category === activeCategory);
  }, [activeCategory, sorted]);

  const [featured, ...rest] = filtered;
  const showFeatured = !activeCategory && featured;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-[13px] text-[color:var(--marketing-body-muted)]">
          <span className="font-semibold text-[color:var(--marketing-foreground-strong)]">
            {filtered.length}
          </span>{" "}
          yazı
          {activeCategory ? ` · ${activeCategory}` : null}
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Blog kategorileri"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === null}
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full px-3.5 py-1.5 font-sans text-[13px] font-medium transition-colors",
              activeCategory === null
                ? "bg-[color:var(--marketing-primary)] text-white"
                : "border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] text-[color:var(--marketing-body-readable)] hover:border-[color:color-mix(in_oklab,var(--marketing-primary)_24%,var(--marketing-border-subtle))]",
            )}
          >
            Tümü
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-3.5 py-1.5 font-sans text-[13px] font-medium transition-colors",
                activeCategory === category
                  ? "bg-[color:var(--marketing-primary)] text-white"
                  : "border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] text-[color:var(--marketing-body-readable)] hover:border-[color:color-mix(in_oklab,var(--marketing-primary)_24%,var(--marketing-border-subtle))]",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {showFeatured ? (
        <div className="mt-8">
          <BlogPostCard post={featured} variant="featured" />
        </div>
      ) : null}

      <ul
        className={cn(
          "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
          showFeatured ? "mt-5" : "mt-8",
        )}
      >
        {(showFeatured ? rest : filtered).map((post) => (
          <li key={post.slug} className="relative flex">
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-[15px] text-[color:var(--marketing-body-muted)]">
          Bu kategoride henüz yazı yok.
        </p>
      ) : null}
    </div>
  );
}
