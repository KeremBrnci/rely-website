"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { marketingHeaderCtas, mainNavigation } from "@/config";
import { featuresMenu } from "@/config/marketing/features-menu";
import { sectorsMenuGroups } from "@/config/marketing/sectors-menu";
import { cn } from "@/lib/utils";

export type SiteHeaderMobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const mobileNavLinkClassName = cn(
  "flex min-h-11 items-center rounded-shell px-3",
  "font-sans text-[16px] font-medium leading-[1.45] tracking-[-0.02em]",
  "text-[color:var(--marketing-foreground-strong)]",
  "transition-colors duration-200",
  "hover:bg-[color:var(--marketing-soft-blue)]",
  "active:bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_85%,var(--marketing-primary))]",
);

const mobileSubLinkClassName = cn(
  "flex min-h-10 items-center rounded-[0.75rem] px-3 py-2",
  "text-[15px] font-medium leading-snug tracking-[-0.02em]",
  "text-[color:var(--marketing-body-readable)]",
  "hover:bg-[color:var(--marketing-soft-blue)]",
);

type MobileAccordionKey = "features" | "sectors" | null;

export function SiteHeaderMobileNav({ open, onClose }: SiteHeaderMobileNavProps) {
  const [expanded, setExpanded] = useState<MobileAccordionKey>(null);
  const activeExpanded = open ? expanded : null;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const toggle = (key: MobileAccordionKey) => {
    setExpanded((current) => (current === key ? null : key));
  };

  return (
    <>
      <button
        type="button"
        aria-label="Menüyü kapat"
        className="fixed inset-0 z-40 bg-[#06182a]/25 backdrop-blur-[2px] lg:hidden"
        onClick={onClose}
      />
      <nav
        id="mobile-main-nav"
        aria-label="Mobil ana menü"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex flex-col lg:hidden",
          "top-[var(--site-header-offset)]",
          "border-t border-[color:var(--marketing-border-subtle)]",
          "bg-[color:var(--marketing-surface-elevated)] shadow-elevation-overlay",
          "overscroll-contain",
        )}
      >
        <div className="flex-1 overflow-y-auto px-gutter-x pb-6 pt-4 sm:px-gutter-x-lg">
          <ul className="flex flex-col gap-1">
            {mainNavigation.map((item) => {
              if (item.megaMenu === "features") {
                return (
                  <MobileMegaAccordion
                    key={item.title}
                    title={item.title}
                    expanded={activeExpanded === "features"}
                    onToggle={() => toggle("features")}
                  >
                    {featuresMenu.map((group) => (
                      <li key={group.label} className="min-w-0">
                        <p className="mb-1.5 px-3 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
                          {group.label}
                        </p>
                        <ul className="flex flex-col gap-0.5">
                          {group.items.map((menuItem) => (
                            <li key={menuItem.title}>
                              <Link
                                href={menuItem.href}
                                className={mobileSubLinkClassName}
                                onClick={onClose}
                              >
                                {menuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </MobileMegaAccordion>
                );
              }

              if (item.megaMenu === "sectors") {
                return (
                  <MobileMegaAccordion
                    key={item.title}
                    title={item.title}
                    expanded={activeExpanded === "sectors"}
                    onToggle={() => toggle("sectors")}
                  >
                    {sectorsMenuGroups.map((group) => (
                      <li key={group.label} className="min-w-0">
                        <p className="mb-1.5 px-3 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
                          {group.label}
                        </p>
                        <ul className="flex flex-col gap-0.5">
                          {group.items.map((menuItem) => (
                            <li key={menuItem.title}>
                              <Link
                                href={menuItem.href}
                                className={mobileSubLinkClassName}
                                onClick={onClose}
                              >
                                {menuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </MobileMegaAccordion>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} className={mobileNavLinkClassName} onClick={onClose}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={cn(
            "shrink-0 border-t border-[color:var(--marketing-border-subtle)]",
            "bg-[color:var(--marketing-background)] px-gutter-x py-4 sm:px-gutter-x-lg",
            "pb-[max(1rem,env(safe-area-inset-bottom))]",
          )}
        >
          <Link
            href={marketingHeaderCtas.primary.href}
            onClick={onClose}
            className={cn(
              "inline-flex h-12 w-full items-center justify-center rounded-shell",
              "bg-[color:var(--marketing-primary)] text-[15px] font-medium text-white",
              "transition-colors hover:bg-[color:var(--marketing-primary-hover)]",
            )}
          >
            {marketingHeaderCtas.primary.label}
          </Link>
        </div>
      </nav>
    </>
  );
}

function MobileMegaAccordion({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <li className="min-w-0">
      <button
        type="button"
        aria-expanded={expanded}
        className={cn(
          mobileNavLinkClassName,
          "w-full justify-between gap-2",
          expanded && "bg-[color:var(--marketing-soft-blue)]",
        )}
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform duration-200",
            expanded && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      {expanded ? (
        <ul className="mt-1 flex flex-col gap-3 border-l-2 border-[color:var(--marketing-soft-blue)] py-2 pl-3 ml-3">
          {children}
        </ul>
      ) : null}
    </li>
  );
}
