"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { footerColumns, type NavItem } from "@/config";
import { cn } from "@/lib/utils";

const footerLinkClassName = cn(
  "inline-block max-w-full text-[14px] leading-[1.6] tracking-[-0.02em] sm:text-[15px] sm:leading-[1.65]",
  "text-[color:var(--marketing-foreground-strong)]",
  "transition-colors duration-300 ease-out",
  "hover:text-[color:var(--marketing-primary)]",
);

function isExternalFooterHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function FooterNavLink({ item }: { item: NavItem }) {
  if (isExternalFooterHref(item.href)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={footerLinkClassName}
      >
        {item.title}
      </a>
    );
  }

  return (
    <Link href={item.href} className={footerLinkClassName}>
      {item.title}
    </Link>
  );
}

const footerColumnLabelClassName = cn(
  "font-sans text-[0.6875rem] font-medium uppercase leading-none tracking-eyebrow",
  "text-[color:var(--marketing-primary)]",
);

export function SiteFooterColumns() {
  return (
    <>
      <Accordion
        multiple
        defaultValue={[]}
        className={cn(
          "w-full border-t border-[color:var(--marketing-border-subtle)] lg:hidden",
        )}
      >
        {footerColumns.map((column) => (
          <AccordionItem
            key={column.label}
            value={column.label}
            className="border-b border-[color:var(--marketing-border-subtle)]"
          >
            <AccordionTrigger
              className={cn(
                "min-h-12 items-center py-4 hover:no-underline",
                "**:data-[slot=accordion-trigger-icon]:text-[color:var(--marketing-primary)]",
              )}
            >
              <span className={footerColumnLabelClassName}>{column.label}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <ul className="flex flex-col gap-3 sm:gap-3.5">
                {column.items.map((item) => (
                  <li key={`${column.label}-${item.title}`} className="min-w-0">
                    <FooterNavLink item={item} />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div
        className={cn(
          "hidden min-w-0 gap-x-6 gap-y-10 lg:grid",
          "lg:grid-cols-4 lg:gap-x-8 xl:gap-x-14",
        )}
      >
        {footerColumns.map((column) => (
          <div key={column.label} className="min-w-0">
            <p className={footerColumnLabelClassName}>{column.label}</p>
            <ul className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5 md:gap-4">
              {column.items.map((item) => (
                <li key={`${column.label}-${item.title}`} className="min-w-0">
                  <FooterNavLink item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
