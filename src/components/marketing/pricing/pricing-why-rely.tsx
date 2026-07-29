import { Check } from "lucide-react";

import { PricingSectionIntro } from "@/components/marketing/pricing/pricing-section-intro";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  pricingMarketingSectionShell,
  pricingSectionBodyClassName,
} from "@/config/marketing/pricing-section-shell";
import { pricingPageContent } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

export function PricingWhyRely() {
  const { why } = pricingPageContent;

  return (
    <MarketingSection id="why-rely" {...pricingMarketingSectionShell.section}>
      <div className="mx-auto max-w-[1100px]">
        <PricingSectionIntro
          eyebrow={why.eyebrow}
          title={why.title}
          titleEmphasis={why.titleEmphasis}
          description={why.description}
        />

        <ul
          className={cn(
            pricingSectionBodyClassName,
            "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8",
          )}
        >
          {why.items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "group rounded-shell border border-[color:var(--marketing-border-subtle)]",
                "bg-[color:var(--marketing-surface-elevated)] p-7 md:p-8",
                "shadow-[0_1px_0_color-mix(in_oklab,var(--marketing-foreground-strong)_4%,transparent)]",
                "transition-[border-color,box-shadow,transform] duration-300 ease-out",
                "hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--marketing-primary)_28%,var(--marketing-border-subtle))]",
                "hover:shadow-[0_12px_28px_-16px_color-mix(in_oklab,var(--marketing-primary)_35%,transparent)]",
              )}
            >
              <span
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-full",
                  "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_70%,white)]",
                  "transition-colors duration-300 group-hover:bg-[color:var(--marketing-soft-blue)]",
                )}
              >
                <Check
                  className="size-4 text-[color:var(--marketing-primary)]"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </span>
              <h3 className="mt-5 font-heading text-[1.1875rem] font-semibold leading-[1.25] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] md:text-[1.25rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-[14px] leading-[1.65] text-[color:var(--marketing-body-muted)] md:text-[14.5px]">
                {item.body}
              </p>
              {"accent" in item && item.accent ? (
                <p className="mt-4 text-[13px] font-medium leading-snug tracking-[-0.01em] text-[color:var(--marketing-primary)]">
                  {item.accent}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </MarketingSection>
  );
}
