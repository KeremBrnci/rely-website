import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PreFooterCtaGlow } from "@/components/marketing/pre-footer-cta-glow";
import { SolutionHero } from "@/components/marketing/solutions/solution-hero";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { PageSeo } from "@/components/seo/page-seo";
import { preFooterCtaVariants } from "@/config/marketing/pre-footer-cta-variant";
import { routes } from "@/config/routes";
import { referencesPageContent, referencesPageMeta } from "@/content/marketing/references-page";
import { referencesBreadcrumbs } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function ReferencesPage() {
  const { hero, conversion } = referencesPageContent;

  return (
    <>
      <PageSeo
        pathname={routes.references}
        titleSegment={referencesPageMeta.title}
        description={referencesPageMeta.description}
        breadcrumbs={referencesBreadcrumbs()}
      />
      <SolutionHero hero={hero} glow="references" />

      <MarketingSection
        spacing="md"
        background="default"
        className={cn(
          "relative isolate overflow-hidden border-b border-[color:var(--marketing-section-divider)]",
          "rely-pre-footer-surface text-white",
        )}
        data-variant="references"
      >
        <PreFooterCtaGlow glows={preFooterCtaVariants.references.glows} />

        <Container className="relative z-10 py-[clamp(2.5rem,5vw,3.5rem)]">
          <div className="mx-auto w-full max-w-[52rem]">
            <p
              className={cn(
                "font-sans text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.16em]",
                "text-[color:color-mix(in_oklab,var(--marketing-soft-blue)_88%,white)]",
              )}
            >
              {conversion.badge}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-7 md:gap-3.5">
              {conversion.advantages.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-start gap-3 rounded-shell border px-4 py-3.5",
                    "border-[color:color-mix(in_oklab,white_12%,transparent)]",
                    "bg-[color:color-mix(in_oklab,white_5%,transparent)]",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                      "bg-[color:color-mix(in_oklab,var(--marketing-primary)_35%,transparent)]",
                      "text-[color:var(--marketing-soft-blue)]",
                    )}
                    aria-hidden
                  >
                    <Check className="size-3 stroke-[2.75]" />
                  </span>
                  <span className="text-pretty text-[14px] leading-[1.55] tracking-[-0.01em] text-white/92 md:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-9">
              <Link
                href={conversion.cta.href}
                className={cn(
                  "inline-flex h-12 items-center justify-center gap-2 rounded-shell px-8",
                  "font-sans text-[16px] font-semibold leading-none tracking-[-0.02em] text-white",
                  "bg-[color:var(--marketing-primary)] shadow-[0_12px_32px_color-mix(in_oklab,var(--marketing-primary)_38%,transparent)]",
                  "transition-colors duration-300 ease-out hover:bg-[color:var(--marketing-primary-hover)]",
                )}
              >
                {conversion.cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <p className="mt-4 max-w-md text-pretty text-[13.5px] leading-[1.6] text-[color:var(--marketing-pricing-muted-on-dark)] md:text-[14px]">
                {conversion.ctaSubtext}
              </p>
            </div>
          </div>
        </Container>
      </MarketingSection>
    </>
  );
}
