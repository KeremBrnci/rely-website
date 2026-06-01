import Link from "next/link";

import { Container } from "@/components/layout/container";
import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { HeroGlow } from "@/components/marketing/hero-glow";
import { pricingMarketingSectionShell } from "@/config/marketing/pricing-section-shell";
import { pricingPageContent } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

export function PricingPageHero() {
  const { hero } = pricingPageContent;

  return (
    <MarketingSection id="hero" {...pricingMarketingSectionShell.hero}>
      <HeroGlow preset="pricing" />

      <Container className="relative z-10 flex flex-col items-center py-[clamp(3.5rem,8vh,6rem)] text-center">
        <InfrastructureEyebrow>{hero.eyebrow}</InfrastructureEyebrow>
        <h1
          className={cn(
            "mt-5 max-w-[20ch] text-balance font-heading font-bold tracking-[-0.035em]",
            "text-[clamp(2rem,4.2vw,3.125rem)] leading-[1.1]",
            "text-[color:var(--marketing-foreground-strong)]",
          )}
        >
          <HeadlineEmphasis text={hero.title} phrase={hero.titleEmphasis} />
        </h1>
        <p className="mt-5 max-w-[42rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={hero.primaryCta.href}
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-shell px-6",
              "font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-white",
              "bg-[color:var(--marketing-primary)]",
              "transition-colors duration-300 ease-out hover:bg-[color:var(--marketing-primary-hover)]",
            )}
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-shell border px-6",
              "font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.02em]",
              "border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)]",
              "text-[color:var(--marketing-foreground-strong)]",
              "transition-colors duration-300 ease-out hover:bg-[color:var(--marketing-soft-blue)]",
            )}
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </Container>
    </MarketingSection>
  );
}
