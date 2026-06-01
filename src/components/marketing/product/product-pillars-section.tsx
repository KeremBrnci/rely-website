import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { FeatureIcon } from "@/components/marketing/home/feature-icon";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  cardAccentChipClassName,
  cardAccentVarClassName,
  getCardAccent,
} from "@/config/marketing/card-accents";
import { productMarketingSectionShell } from "@/config/marketing/product-section-shell";
import { productPage } from "@/content/marketing/product-page";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function ProductPillarsSection() {
  const { intro, items } = productPage.pillars;

  return (
    <MarketingSection id="platform" {...productMarketingSectionShell.pillars}>
      <div className="mb-9 flex max-w-[44rem] flex-col gap-2.5 md:mb-11 md:gap-3">
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

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((item, index) => {
          const accent = getCardAccent(index);

          return (
            <li key={item.id} className="h-full">
              <article
                className={cn(
                  "rely-card group flex h-full min-h-[12.25rem] flex-col rounded-shell",
                  "border border-[color:var(--marketing-border-subtle)]",
                  "bg-[color:var(--marketing-surface-elevated)] p-6 md:p-7",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                  "hover:-translate-y-0.5",
                  "hover:shadow-[0_14px_44px_color-mix(in_oklab,var(--rely-card-accent)_14%,transparent)]",
                  cardAccentVarClassName[accent],
                )}
              >
                <span
                  className={cn(
                    "inline-flex size-11 shrink-0 items-center justify-center rounded-shell",
                    cardAccentChipClassName[accent],
                  )}
                  aria-hidden
                >
                  <FeatureIcon name={item.icon} className="size-5 stroke-[1.5]" />
                </span>

                <h3
                  className={cn(
                    "mt-5 min-h-[2.75rem] font-heading text-[1.0625rem] font-semibold leading-[1.25]",
                    "tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]",
                    "transition-colors duration-300 group-hover:text-[color:var(--rely-card-accent)]",
                    "md:text-[1.125rem]",
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={cn(
                    "mt-2 min-h-[2.75rem] flex-1 text-pretty text-[14px] leading-[1.55] tracking-[-0.01em]",
                    "text-[color:var(--marketing-body-muted)] line-clamp-2 md:text-[15px] md:leading-[1.5]",
                  )}
                >
                  {item.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </MarketingSection>
  );
}
