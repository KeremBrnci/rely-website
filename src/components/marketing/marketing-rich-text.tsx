import Link from "next/link";
import { Fragment, type ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

type MarketingRichTextProps = {
  text: string;
  className?: string;
};

export function MarketingRichText({ text, className }: MarketingRichTextProps) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    const [full, label, href] = match;
    const start = match.index;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    parts.push(
      <Link
        key={`link-${key++}`}
        href={href}
        className="font-medium text-[color:var(--marketing-primary)] underline decoration-[color:color-mix(in_oklab,var(--marketing-primary)_35%,transparent)] underline-offset-[3px] transition-colors hover:text-[color:var(--marketing-primary-hover)] hover:decoration-[color:var(--marketing-primary)]"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </Link>,
    );

    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 1 && typeof parts[0] === "string") {
    return <span className={className}>{parts[0]}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </span>
  );
}

export function MarketingRichTextParagraph({
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
