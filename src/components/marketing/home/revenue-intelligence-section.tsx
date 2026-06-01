import { Container } from "@/components/layout/container";
import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import { homeRevenueIntelligence } from "@/content/marketing/home-revenue-intelligence";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import { RevenueIntelligenceDashboardPreview } from "./revenue-intelligence-dashboard-preview";

const deltaToneClassName = {
  positive: "text-[#7fb8ee]",
  neutral: "text-[#8ea6bd]",
  negative: "text-[#f0b072]",
} as const;

export function RevenueIntelligenceSection() {
  const { intro, stats } = homeRevenueIntelligence;

  return (
    <MarketingSection id="intelligence" {...homeMarketingSectionShell.revenueIntelligence}>
      {/* Standart genişlik (diğer section'lar gibi) — bant full-bleed kalır */}
      <Container>
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-[minmax(0,23rem)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-20">
          {/* Sol: ince rail — koyu zemin metin token'ları */}
          <div className="rely-on-dark">
            <InfrastructureEyebrow>{intro.eyebrow}</InfrastructureEyebrow>
            <h2
              className={cn(
                textRoleClassName["heading-xl"],
                "mt-4 text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
              )}
            >
              <HeadlineEmphasis text={intro.title} phrase={intro.titleEmphasis} />
            </h2>
            <p className="mt-5 max-w-[30rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
              {intro.description}
            </p>

            <dl className="mt-8 border-t border-[color:var(--marketing-border-subtle)]">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex items-baseline justify-between gap-4 border-b border-[color:var(--marketing-border-subtle)] py-3.5"
                >
                  <dt className="font-sans text-[0.8125rem] leading-snug text-[color:var(--marketing-body-muted)]">
                    {stat.label}
                  </dt>
                  <dd className="flex items-baseline gap-2.5 text-right">
                    <span className="font-sans text-[1.0625rem] font-semibold tabular-nums tracking-[-0.02em] text-[color:var(--marketing-foreground-strong)]">
                      {stat.value}
                    </span>
                    <span
                      className={cn(
                        "font-sans text-[0.75rem] tabular-nums",
                        deltaToneClassName[stat.deltaTone],
                      )}
                    >
                      {stat.delta}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sağ: büyük, baskın ürün görseli — koyu zeminde öne çıkar */}
          <RevenueIntelligenceDashboardPreview
            className={cn(
              "w-full lg:max-w-none",
              "ring-1 ring-white/10",
              "shadow-[0_42px_90px_-36px_rgba(3,14,26,0.75)]",
            )}
          />
        </div>
      </Container>
    </MarketingSection>
  );
}
