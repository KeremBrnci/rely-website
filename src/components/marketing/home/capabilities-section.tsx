import type { CSSProperties } from "react";

import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import { homeCapabilities } from "@/content/marketing/home-capabilities";
import { cardAccentColorVar, getCardAccent } from "@/config/marketing/card-accents";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function CapabilitiesSection() {
  const { intro, capabilities } = homeCapabilities;

  return (
    <MarketingSection id="capabilities" {...homeMarketingSectionShell.capabilities}>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-x-16 xl:gap-x-20">
        {/* Sol (~%40): sabit (sticky) editorial başlık — küçültülmüş ölçek */}
        <div className="lg:sticky lg:top-28 lg:self-start">
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
        </div>

        {/* Sağ (~%60): numaralı liste — sadece başlık görünür, hover/focus'ta açıklama açılır */}
        <ul>
          {capabilities.map((capability, index) => (
            <li
              key={capability.id}
              tabIndex={0}
              style={
                { "--accent": cardAccentColorVar[getCardAccent(index)] } as CSSProperties
              }
              className={cn(
                "group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-4 md:gap-x-5",
                "border-t border-[color:var(--marketing-border-subtle)] py-4 first:border-t-0 md:py-5",
                "cursor-default rounded-[3px] outline-none",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]",
              )}
            >
              <span className="font-sans text-[0.875rem] font-semibold tabular-nums leading-none text-[color:var(--accent)] md:text-[0.9375rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className={cn(
                    "font-heading text-[1.1875rem] font-semibold leading-[1.2] tracking-[var(--tracking-editorial)] md:text-[1.3125rem]",
                    "text-[color:var(--marketing-foreground-strong)] transition-colors duration-200",
                    "group-hover:text-[color:var(--accent)] group-focus-within:text-[color:var(--accent)]",
                  )}
                >
                  {capability.title}
                </h3>
                {/* grid-rows 0fr → 1fr: yükseklik animasyonu (JS'siz, smooth) */}
                <div
                  className={cn(
                    "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out",
                    "group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[46ch] text-pretty pt-2 text-[14px] leading-[1.5] tracking-[-0.1px] text-[color:var(--marketing-body-muted)]">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MarketingSection>
  );
}
