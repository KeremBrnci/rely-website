import Link from "next/link";
import { Check } from "lucide-react";

import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/layout/container";
import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { HeroGlow } from "@/components/marketing/hero-glow";
import { productMarketingSectionShell } from "@/config/marketing/product-section-shell";
import { productPage } from "@/content/marketing/product-page";
import { cn } from "@/lib/utils";

export function ProductHero() {
  const { hero } = productPage;

  return (
    <MarketingSection id="hero" {...productMarketingSectionShell.hero}>
      <HeroGlow preset="product" />
      <Container className="relative z-10 flex flex-col items-center py-[clamp(4rem,9vh,7rem)] text-center">
        <div className="flex items-center gap-2.5">
          <BrandMark size="md" />
          <InfrastructureEyebrow>{hero.eyebrow}</InfrastructureEyebrow>
        </div>

        <h1
          className={cn(
            "mt-6 max-w-[20ch] text-balance font-heading font-bold tracking-[-0.035em]",
            "text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.1]",
            "text-[color:var(--marketing-foreground-strong)]",
          )}
        >
          <HeadlineEmphasis text={hero.title} phrase={hero.titleEmphasis} />
        </h1>

        <p className="mt-5 max-w-[44rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
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

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
          {hero.highlights.map((highlight) => (
            <li
              key={highlight}
              className="inline-flex items-center gap-2 font-sans text-[13.5px] tracking-[-0.01em] text-[color:var(--marketing-body-muted)]"
            >
              <Check
                className="size-4 shrink-0 text-[color:var(--marketing-primary)]"
                aria-hidden
              />
              {highlight}
            </li>
          ))}
        </ul>
      </Container>
    </MarketingSection>
  );
}
