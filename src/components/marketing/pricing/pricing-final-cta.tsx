import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { pricingMarketingSectionShell } from "@/config/marketing/pricing-section-shell";
import { pricingPageContent } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

export function PricingFinalCta() {
  const { finalCta } = pricingPageContent;

  return (
    <MarketingSection id="final-cta" {...pricingMarketingSectionShell.finalCta}>
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.03em] text-white">
            {finalCta.title}
          </h2>
          <p className="mt-5 max-w-[34rem] text-pretty text-[15px] leading-[1.7] text-white/75 md:text-base">
            {finalCta.subtitle}
          </p>

          <Link
            href={finalCta.primary.href}
            scroll={!finalCta.primary.href.includes("#")}
            className={cn(
              "mt-8 inline-flex h-12 min-w-[12rem] items-center justify-center rounded-shell px-8 md:mt-10",
              "font-sans text-[15px] font-semibold tracking-tight",
              "bg-white text-[color:var(--marketing-primary)]",
              "transition-opacity duration-300 ease-out hover:opacity-92",
            )}
          >
            {finalCta.primary.label}
          </Link>

          <ul className="mt-8 flex max-w-xl flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3">
            {finalCta.footnotes.map((text) => (
              <li key={text} className="flex items-center gap-2 text-[13px] leading-[19px] text-white/65">
                <Check className="size-3.5 shrink-0 text-white/90" strokeWidth={2.5} aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </MarketingSection>
  );
}
