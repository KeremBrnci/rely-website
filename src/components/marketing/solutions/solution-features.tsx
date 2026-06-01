import { FeatureIcon } from "@/components/marketing/home/feature-icon";
import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { MarketingRichText } from "@/components/marketing/marketing-rich-text";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  cardAccentVarClassName,
  getCardAccent,
} from "@/config/marketing/card-accents";
import {
  solutionMarketingSectionShell,
  type SolutionMarketingSectionShell,
} from "@/config/marketing/solution-section-shell";
import type { SolutionContent } from "@/content/marketing/solutions";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function SolutionFeatures({
  features,
  id = "features",
  sectionShell = solutionMarketingSectionShell.features,
}: {
  features: SolutionContent["features"];
  id?: string;
  sectionShell?: SolutionMarketingSectionShell;
}) {
  const { intro, items } = features;

  return (
    <MarketingSection id={id} {...sectionShell}>
      <div className="mb-9 flex max-w-[44rem] flex-col gap-2.5 md:mb-12 md:gap-3">
        <InfrastructureEyebrow>{intro.eyebrow}</InfrastructureEyebrow>
        <h2
          className={cn(
            textRoleClassName["heading-xl"],
            "text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
          )}
        >
          <HeadlineEmphasis text={intro.title} phrase={intro.titleEmphasis} />
        </h2>
        <p className="text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
          {intro.description}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {items.map((item, index) => {
          const accent = getCardAccent(index);
          return (
            <li
              key={item.id}
              className={cn(
                "rely-card flex flex-col rounded-shell bg-[color:var(--marketing-surface-elevated)] p-6 md:p-7",
                cardAccentVarClassName[accent],
              )}
            >
              <span className="flex size-11 items-center justify-center rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)]">
                <FeatureIcon
                  name={item.icon}
                  className="size-6 stroke-[1.5] text-[color:var(--rely-card-accent)]"
                />
              </span>
              <h3 className="mt-5 font-heading text-[1.0625rem] font-semibold leading-[1.25] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.125rem]">
                {item.title}
              </h3>
              <p className="mt-2 text-pretty text-[14px] leading-[1.6] tracking-[-0.1px] text-[color:var(--marketing-body-muted)]">
                <MarketingRichText text={item.description} />
              </p>
            </li>
          );
        })}
      </ul>
    </MarketingSection>
  );
}
