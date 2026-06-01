import Link from "next/link";

import { HeroWaveCanvas } from "@/components/marketing/home/hero-wave-canvas";
import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";

import { Cluster } from "@/components/layout/cluster";
import { Container } from "@/components/layout/container";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import { BrandMark } from "@/components/brand/brand-mark";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { homeHero } from "@/content/marketing/home";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <MarketingSection id="hero" {...homeMarketingSectionShell.hero}>
      <HeroWaveCanvas />

      <Container
        className={cn(
          "relative z-10 flex w-full flex-col",
          "max-lg:pt-2 sm:max-lg:pt-3",
          "lg:mt-auto lg:pt-8",
          "pb-[clamp(2rem,4vh,5.5rem)] sm:pb-[clamp(2.5rem,5vh,5.5rem)]",
        )}
      >
        <div
          className={cn(
            "grid grid-cols-1 gap-x-[clamp(2rem,4.5vw,3.5rem)] gap-y-8",
            "lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-end lg:gap-y-0",
          )}
        >
          <div className="flex flex-col gap-4 lg:gap-[1.125rem]">
            <div className="flex items-center gap-2.5">
              <BrandMark size="md" />
              <InfrastructureEyebrow>{homeHero.eyebrow}</InfrastructureEyebrow>
            </div>
            <h1 className="rely-hero-title max-w-[22ch]">
              <HeadlineEmphasis text={homeHero.title} phrase={homeHero.titleEmphasis} />
            </h1>
          </div>

          <div className="flex max-w-[27.5rem] flex-col gap-5 lg:gap-[1.375rem] lg:pb-0.5">
            <p
              className={cn(
                "text-pretty text-[15px] leading-[1.65] tracking-[-0.25px]",
                "text-[color:var(--marketing-body-readable)]",
              )}
            >
              {homeHero.subtitle}
            </p>
            <Cluster gap="md" className="flex-wrap justify-start gap-x-6 gap-y-2.5 pt-0.5">
              <Link
                href={homeHero.primaryCta.href}
                className={cn(
                  "inline-flex items-center gap-2 text-[15px] font-medium leading-[26px] tracking-[-0.3px]",
                  "text-[color:var(--marketing-primary)] underline decoration-[color:var(--marketing-primary)]/50 underline-offset-[0.22em]",
                  "transition-colors hover:text-[color:var(--marketing-primary-hover)] hover:decoration-[color:var(--marketing-primary-hover)]",
                )}
              >
                {homeHero.primaryCta.label}
                <ArrowUpRight className="size-4 shrink-0 opacity-90" aria-hidden />
              </Link>
              <Link
                href={homeHero.secondaryCta.href}
                className={cn(
                  "inline-flex items-center gap-2 text-[15px] font-medium leading-[26px] tracking-[-0.3px]",
                  "text-[color:var(--marketing-body-muted)] underline decoration-[color:var(--marketing-body-muted)]/70 underline-offset-[0.22em]",
                  "transition-colors hover:text-[color:var(--marketing-foreground-strong)] hover:decoration-[color:var(--marketing-foreground-strong)]/80",
                )}
              >
                {homeHero.secondaryCta.label}
                <ArrowUpRight className="size-4 shrink-0 opacity-90" aria-hidden />
              </Link>
            </Cluster>
          </div>
        </div>

        <div
          className="mt-[clamp(2rem,4.25vh,3.25rem)] h-px w-full bg-[color:var(--marketing-border-subtle)]"
          aria-hidden
        />
      </Container>
    </MarketingSection>
  );
}
