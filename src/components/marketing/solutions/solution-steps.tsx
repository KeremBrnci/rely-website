import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { MarketingRichText } from "@/components/marketing/marketing-rich-text";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  cardAccentColorVar,
  getCardAccent,
} from "@/config/marketing/card-accents";
import { solutionMarketingSectionShell } from "@/config/marketing/solution-section-shell";
import {
  stepsSectionIntroClassName,
  stepsSectionIntroDescriptionClassName,
  stepsSectionIntroEyebrowClassName,
  stepsSectionIntroTitleClassName,
  stepsSectionItemClassName,
  stepsSectionItemDescriptionClassName,
} from "@/config/marketing/steps-section-layout";
import type { SolutionContent } from "@/content/marketing/solutions";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

export function SolutionSteps({ steps }: { steps: SolutionContent["steps"] }) {
  const { intro, items } = steps;

  return (
    <MarketingSection id="steps" {...solutionMarketingSectionShell.steps}>
      <div
        className={cn(
          stepsSectionIntroClassName,
          "mb-9 max-w-[44rem] md:mb-12",
          "max-lg:mx-auto max-lg:w-full",
        )}
      >
        <InfrastructureEyebrow className={stepsSectionIntroEyebrowClassName}>
          {intro.eyebrow}
        </InfrastructureEyebrow>
        <h2
          className={cn(
            textRoleClassName["heading-xl"],
            stepsSectionIntroTitleClassName,
            "text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
          )}
        >
          <HeadlineEmphasis text={intro.title} phrase={intro.titleEmphasis} />
        </h2>
        <p
          className={cn(
            stepsSectionIntroDescriptionClassName,
            "text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base",
          )}
        >
          {intro.description}
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3 max-lg:max-w-[28rem] max-lg:mx-auto max-lg:w-full">
        {items.map((step, index) => (
          <li
            key={step.id}
            className={cn(
              "border-t border-[color:var(--marketing-border-subtle)] pt-5",
              stepsSectionItemClassName,
              "max-lg:flex max-lg:flex-col",
            )}
            style={{ "--accent": cardAccentColorVar[getCardAccent(index)] } as CSSProperties}
          >
            <span className="font-heading text-[2rem] font-semibold leading-none tracking-[-0.03em] text-[color:var(--accent)] tabular-nums">
              {step.step}
            </span>
            <h3 className="mt-4 font-heading text-[1.0625rem] font-semibold leading-[1.25] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.125rem]">
              {step.title}
            </h3>
            <p
              className={cn(
                stepsSectionItemDescriptionClassName,
                "mt-2 max-w-[34ch] text-pretty text-[14px] leading-[1.6] tracking-[-0.1px] text-[color:var(--marketing-body-muted)]",
              )}
            >
              <MarketingRichText text={step.description} />
            </p>
          </li>
        ))}
      </ol>
    </MarketingSection>
  );
}
