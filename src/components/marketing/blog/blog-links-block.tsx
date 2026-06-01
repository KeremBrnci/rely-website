import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { MarketingRichText } from "@/components/marketing/marketing-rich-text";
import type { MarketingLinkItem } from "@/content/marketing/link-types";
import { cn } from "@/lib/utils";

type BlogLinksBlockProps = {
  title: string;
  items: MarketingLinkItem[];
};

export function BlogLinksBlock({ title, items }: BlogLinksBlockProps) {
  return (
    <div className="rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_16%,var(--marketing-surface-elevated))] p-5 md:p-6">
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--marketing-body-muted)]">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => {
          const isExternal =
            item.href.startsWith("http://") || item.href.startsWith("https://");

          return (
            <li key={`${item.href}-${item.label}`}>
              <Link
                href={item.href}
                className={cn(
                  "group flex items-start justify-between gap-3 rounded-[0.75rem] px-3 py-2.5",
                  "transition-colors hover:bg-[color:color-mix(in_oklab,var(--marketing-primary)_8%,transparent)]",
                )}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="min-w-0">
                  <span className="block font-sans text-[14px] font-medium leading-snug text-[color:var(--marketing-foreground-strong)] group-hover:text-[color:var(--marketing-primary)]">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-1 block text-pretty text-[13px] leading-[1.55] text-[color:var(--marketing-body-muted)]">
                      {item.description}
                    </span>
                  ) : null}
                </span>
                <ArrowUpRight
                  className="mt-0.5 size-4 shrink-0 text-[color:var(--marketing-body-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--marketing-primary)]"
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function BlogRichTextParagraph({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={className}>
      <MarketingRichText text={text} />
    </p>
  );
}
