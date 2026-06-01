import Link from "next/link";

import { cn } from "@/lib/utils";

type BlogArticleTocProps = {
  items: { id: string; text: string }[];
  className?: string;
};

export function BlogArticleToc({ items, className }: BlogArticleTocProps) {
  if (items.length < 2) return null;

  return (
    <nav aria-label="İçindekiler" className={className}>
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
        İçindekiler
      </p>
      <ol className="mt-4 flex flex-col gap-2.5 border-l border-[color:var(--marketing-border-subtle)] pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className={cn(
                "block text-pretty font-sans text-[13px] leading-snug",
                "text-[color:var(--marketing-body-muted)] transition-colors",
                "hover:text-[color:var(--marketing-primary)]",
              )}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Mobil — içindekiler özeti */
export function BlogArticleTocMobile({ items }: BlogArticleTocProps) {
  if (items.length < 2) return null;

  return (
    <details className="mb-8 rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] px-4 py-3 lg:hidden">
      <summary className="cursor-pointer list-none font-sans text-[13px] font-semibold text-[color:var(--marketing-foreground-strong)] [&::-webkit-details-marker]:hidden">
        İçindekiler
      </summary>
      <ol className="mt-3 flex flex-col gap-2 border-t border-[color:var(--marketing-border-subtle)] pt-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="block text-[13px] leading-snug text-[color:var(--marketing-body-muted)] hover:text-[color:var(--marketing-primary)]"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ol>
    </details>
  );
}
