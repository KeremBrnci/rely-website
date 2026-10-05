import type { CSSProperties } from "react";

import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import {
  stepsSectionIntroDescriptionClassName,
  stepsSectionIntroEyebrowClassName,
  stepsSectionIntroSplitClassName,
  stepsSectionIntroTitleClassName,
} from "@/config/marketing/steps-section-layout";
import { homeHowItWorks } from "@/content/marketing/home-how-it-works";
import { cardAccentColorVar, getCardAccent } from "@/config/marketing/card-accents";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import { HomeDemoRequestCta } from "./home-demo-request-cta";

export function HowItWorksSection() {
  const { intro, steps } = homeHowItWorks;

  return (
    <MarketingSection id="how-it-works" {...homeMarketingSectionShell.howItWorks}>
      <div className={stepsSectionIntroSplitClassName}>
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <InfrastructureEyebrow className={stepsSectionIntroEyebrowClassName}>
            {intro.eyebrow}
          </InfrastructureEyebrow>
          <h2
            className={cn(
              textRoleClassName["heading-xl"],
              stepsSectionIntroTitleClassName,
              "mt-4 max-w-[18ch] text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
            )}
          >
            <HeadlineEmphasis text={intro.title} phrase={intro.titleEmphasis} />
          </h2>
        </div>
        <p
          className={cn(
            stepsSectionIntroDescriptionClassName,
            "max-w-[32rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base lg:pb-1",
          )}
        >
          {intro.description}
        </p>
      </div>

      <ol
        className={cn(
          "mt-10 grid grid-cols-1 overflow-hidden rounded-[22px] lg:mt-12 lg:grid-cols-4",
          "border border-[color:color-mix(in_oklab,var(--marketing-border-subtle)_70%,transparent)]",
          "bg-[color:color-mix(in_oklab,#ffffff_62%,transparent)]",
          "divide-y divide-[color:color-mix(in_oklab,var(--marketing-border-subtle)_70%,transparent)]",
          "lg:divide-x lg:divide-y-0",
        )}
      >
        {steps.map((step, index) => {
          const accent = cardAccentColorVar[getCardAccent(index)];

          return (
            <li
              key={step.id}
              className={cn(
                "flex flex-col p-7 md:p-8 lg:p-9",
                step.managedByRely &&
                  "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_55%,transparent)]",
              )}
              style={{ "--step-accent": accent } as CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span className="font-sans text-[12px] font-semibold tabular-nums tracking-[0.08em] text-[color:var(--step-accent)]">
                  {step.step}
                </span>
                <span
                  aria-hidden
                  className="h-[2px] w-6 rounded-full bg-[color:var(--step-accent)]"
                />
              </div>

              <h3 className="mt-5 font-heading text-[1.125rem] font-semibold leading-[1.28] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.1875rem]">
                <HeadlineEmphasis text={step.title} phrase={step.titleEmphasis} />
              </h3>
              <p className="mt-2 max-w-[30ch] text-pretty text-[14.5px] leading-[1.6] tracking-[-0.01em] text-[color:var(--marketing-body-muted)]">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="mt-9 flex justify-center">
        <HomeDemoRequestCta />
      </div>
    </MarketingSection>
  );
}
