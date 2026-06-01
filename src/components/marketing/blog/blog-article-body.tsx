import { BlogLinksBlock, BlogRichTextParagraph } from "@/components/marketing/blog/blog-links-block";
import { BlogRichText } from "@/components/marketing/blog/blog-rich-text";
import type { BlogPostSection } from "@/content/blog/types";
import { cn } from "@/lib/utils";

export function BlogArticleBody({ sections }: { sections: BlogPostSection[] }) {
  return (
    <div className="blog-article-body flex flex-col gap-5">
      {sections.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={`${index}-${block.text}`}
                id={`bolum-${index}`}
                className="mt-10 scroll-mt-28 border-t border-[color:var(--marketing-border-subtle)] pt-10 font-heading text-[clamp(1.375rem,2vw,1.75rem)] font-semibold leading-[1.2] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] first:mt-0 first:border-t-0 first:pt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={`${index}-${block.text}`}
                className="mt-6 font-heading text-[1.125rem] font-semibold leading-snug tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]"
              >
                {block.text}
              </h3>
            );
          case "p": {
            const isFirstParagraph =
              index === 0 || sections.slice(0, index).every((b) => b.type !== "p");
            return (
              <BlogRichTextParagraph
                key={`${index}-${block.text.slice(0, 24)}`}
                text={block.text}
                className={cn(
                  "text-pretty leading-[1.75] tracking-[-0.01em] text-[color:var(--marketing-body-readable)]",
                  isFirstParagraph
                    ? "text-[16px] text-[color:var(--marketing-foreground-strong)] md:text-[17px]"
                    : "text-[15px] md:text-base",
                )}
              />
            );
          }
          case "ul":
            return (
              <ul
                key={`${index}-ul`}
                className={cn(
                  "flex flex-col gap-2.5 rounded-shell",
                  "border border-[color:var(--marketing-border-subtle)] bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_14%,var(--marketing-surface-elevated))]",
                  "px-5 py-4 md:px-6 md:py-5",
                )}
              >
                {block.items.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex gap-3 text-pretty text-[15px] leading-[1.65] text-[color:var(--marketing-body-readable)]"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--marketing-primary)]"
                      aria-hidden
                    />
                    <span className="min-w-0 text-[15px] leading-[1.65] text-[color:var(--marketing-body-readable)]">
                      <BlogRichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "links":
            return (
              <BlogLinksBlock
                key={`${index}-${block.title}`}
                title={block.title}
                items={block.items}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
