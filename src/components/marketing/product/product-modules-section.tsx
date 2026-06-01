import { Check } from "lucide-react";

import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { FeatureIcon } from "@/components/marketing/home/feature-icon";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  cardAccentVarClassName,
  getCardAccent,
} from "@/config/marketing/card-accents";
import { productMarketingSectionShell } from "@/config/marketing/product-section-shell";
import {
  stepsSectionIntroClassName,
  stepsSectionIntroDescriptionClassName,
  stepsSectionIntroEyebrowClassName,
  stepsSectionIntroTitleClassName,
} from "@/config/marketing/steps-section-layout";
import {
  productPage,
  type ProductModule,
} from "@/content/marketing/product-page";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

function ModuleRow({ module, index }: { module: ProductModule; index: number }) {
  const accent = getCardAccent(index);
  const reversed = index % 2 === 1;

  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-y-8 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20",
        cardAccentVarClassName[accent],
      )}
    >
      <div className={cn(reversed && "lg:order-2")}>
        <span className="inline-flex items-center gap-2 rounded-full bg-[color:color-mix(in_oklab,var(--rely-card-accent)_12%,transparent)] px-3 py-1 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--rely-card-accent)]">
          {module.eyebrow}
        </span>
        <h3 className="mt-4 text-balance font-heading text-[clamp(1.375rem,1.7vw,1.75rem)] font-semibold leading-[1.18] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]">
          {module.title}
        </h3>
        <p className="mt-4 max-w-[34rem] text-pretty text-[15px] leading-[1.65] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] line-clamp-3 md:text-base md:leading-[1.6]">
          {module.description}
        </p>
      </div>

      <div
        className={cn(
          "rely-card rounded-shell bg-[color:var(--marketing-surface-elevated)] p-6 md:p-7",
          reversed && "lg:order-1",
        )}
      >
        <div className="flex items-center gap-3 border-b border-[color:var(--marketing-border-subtle)] pb-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)]">
            <FeatureIcon
              name={module.icon}
              className="size-5 stroke-[1.5] text-[color:var(--rely-card-accent)]"
            />
          </span>
          <p className="font-sans text-[0.8125rem] font-medium uppercase tracking-[0.06em] text-[color:var(--marketing-body-muted)]">
            {module.eyebrow}
          </p>
        </div>

        <ul className="mt-4 space-y-2.5">
          {module.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)] px-3.5 py-3"
            >
              <Check
                className="size-4 shrink-0 text-[color:var(--rely-card-accent)]"
                aria-hidden
              />
              <span className="text-pretty text-[14px] leading-[1.45] tracking-[-0.1px] text-[color:var(--marketing-foreground-strong)]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProductModulesSection() {
  const { intro, items } = productPage.modules;

  return (
    <MarketingSection id="how-it-works" {...productMarketingSectionShell.modules}>
      <div
        className={cn(
          stepsSectionIntroClassName,
          "mb-12 max-w-[44rem] md:mb-16",
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

      <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
        {items.map((module, index) => (
          <ModuleRow key={module.id} module={module} index={index} />
        ))}
      </div>
    </MarketingSection>
  );
}
