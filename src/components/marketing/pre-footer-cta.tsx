"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/brand/brand-mark";
import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { PreFooterCtaGlow } from "@/components/marketing/pre-footer-cta-glow";
import {
  mergePreFooterCopy,
  resolvePreFooterCtaVariant,
} from "@/config/marketing/pre-footer-cta-variant";
import { routes } from "@/config/routes";
import { marketingPreFooterGapClassName } from "@/config/marketing/page-shell";
import { cn } from "@/lib/utils";

export type MarketingPreFooterCtaProps = {
  className?: string;
};

export function MarketingPreFooterCta({ className }: MarketingPreFooterCtaProps) {
  const pathname = usePathname();
  if (pathname === routes.references) {
    return null;
  }

  const preset = resolvePreFooterCtaVariant(pathname);
  const { title, titleEmphasis, subtitle, primary, secondary } = mergePreFooterCopy(preset);

  return (
    <section
      data-slot="pre-footer-cta"
      data-variant={preset.key}
      className={cn(
        marketingPreFooterGapClassName,
        "relative isolate overflow-hidden text-white",
        "border-t border-[color:color-mix(in_oklab,white_10%,#181818)]",
        "rely-pre-footer-surface",
        "py-[clamp(4.5rem,12vw,6.75rem)] md:py-[8.625rem] lg:py-[9.75rem]",
        className,
      )}
    >
      <PreFooterCtaGlow glows={preset.glows} />
      <Container className="relative z-10">
        <Stack gap="lg" className="mx-auto max-w-3xl items-center text-center">
          <Stack gap="md" className="items-center">
            <BrandMark size="lg" className="mb-1" />
            <h2
              className={cn(
                "text-balance font-sans font-bold tracking-[-0.03em] text-white",
                "text-[clamp(1.875rem,4.2vw,3.125rem)] leading-[1.12]",
              )}
            >
              <HeadlineEmphasis text={title} phrase={titleEmphasis} />
            </h2>
            <p
              className={cn(
                "max-w-2xl text-pretty font-sans text-[15px] leading-[1.65] tracking-[-0.02em]",
                "text-[color:var(--marketing-pricing-muted-on-dark)] md:text-base md:leading-relaxed",
              )}
            >
              {subtitle}
            </p>
          </Stack>

          <Cluster
            gap="sm"
            justify="center"
            className="w-full max-w-md flex-col pt-1 sm:max-w-none sm:flex-row"
          >
            <Link
              href={primary.href}
              className={cn(
                "inline-flex h-11 w-full items-center justify-center rounded-shell px-6 sm:w-auto",
                "font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-white",
                "bg-[color:var(--marketing-primary)]",
                "transition-colors duration-300 ease-out hover:bg-[color:var(--marketing-primary-hover)]",
                "pre-footer-cta-primary",
              )}
            >
              {primary.label}
            </Link>
            <Link
              href={secondary.href}
              className={cn(
                "inline-flex h-11 w-full items-center justify-center rounded-shell border px-6 sm:w-auto",
                "font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-white",
                "border-[color:color-mix(in_oklab,white_28%,transparent)] bg-transparent",
                "transition-colors duration-300 ease-out hover:bg-[color:color-mix(in_oklab,white_6%,transparent)]",
                "pre-footer-cta-secondary",
              )}
            >
              {secondary.label}
            </Link>
          </Cluster>
        </Stack>
      </Container>
    </section>
  );
}
