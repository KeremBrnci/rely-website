import Link from "next/link";

import { footerLegalLinks, siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "./container";
import { FooterAiSummaryBand } from "./footer-ai-summary-band";
import { FooterSocialLinks } from "./footer-social-links";
import { SiteFooterColumns } from "./site-footer-columns";
import { SiteLogo } from "./site-logo";

const footerLinkClassName = cn(
  "inline-block max-w-full text-[14px] leading-[1.6] tracking-[-0.02em] sm:text-[15px] sm:leading-[1.65]",
  "text-[color:var(--marketing-foreground-strong)]",
  "transition-colors duration-300 ease-out",
  "hover:text-[color:var(--marketing-primary)]",
);

export type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-[color:var(--marketing-border-subtle)]",
        "bg-[color:var(--marketing-background)]",
        "pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 gap-10 sm:gap-12",
            "lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-x-16 xl:gap-x-28",
            "lg:items-start",
          )}
        >
          <div className="min-w-0 max-w-md lg:max-w-[22rem]">
            <SiteLogo className="h-[1.625rem] sm:h-[1.75rem] md:h-8" />
            <p
              className={cn(
                "mt-5 text-pretty font-sans text-[1.0625rem] font-normal leading-snug tracking-[-0.02em] sm:mt-6 sm:text-[1.125rem] md:text-[1.1875rem]",
                "text-[color:var(--marketing-foreground-strong)]",
              )}
            >
              {siteConfig.footerTagline}
            </p>

            <FooterSocialLinks className="mt-4 sm:mt-5" />
          </div>

          <SiteFooterColumns />
        </div>

        <FooterAiSummaryBand className="mt-12 sm:mt-16 md:mt-20 lg:mt-24" />

        <div
          className={cn(
            "mt-10 flex flex-col gap-4 border-t border-[color:var(--marketing-border-subtle)] pt-6 sm:mt-12 sm:gap-5 sm:pt-8",
            "md:mt-14 md:flex-row md:items-center md:justify-between md:pt-9",
          )}
        >
          <p
            className={cn(
              "flex flex-wrap items-center gap-2 text-[13px] leading-[1.55] tracking-[-0.02em] sm:text-[14px]",
              "text-[color:var(--marketing-body-muted)]",
            )}
          >
            <BrandMark size="xs" />© {year} {siteConfig.name}. Tüm hakları
            saklıdır.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
            {footerLegalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    footerLinkClassName,
                    "text-[13px] text-[color:var(--marketing-body-muted)] sm:text-[14px]",
                    "hover:text-[color:var(--marketing-primary)]",
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
