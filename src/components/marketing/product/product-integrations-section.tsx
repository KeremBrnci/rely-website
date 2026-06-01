import type { ComponentType } from "react";

import { Bell, CreditCard, Store } from "lucide-react";

import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  cardAccentVarClassName,
  getCardAccent,
} from "@/config/marketing/card-accents";
import { productMarketingSectionShell } from "@/config/marketing/product-section-shell";
import {
  productPage,
  type ProductIntegrationGroupIcon,
} from "@/content/marketing/product-page";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

const groupIcon: Record<ProductIntegrationGroupIcon, ComponentType<{ className?: string }>> = {
  store: Store,
  card: CreditCard,
  bell: Bell,
};

export function ProductIntegrationsSection() {
  const { eyebrow, title, titleEmphasis, description, groups } =
    productPage.integrations;

  return (
    <MarketingSection id="integrations" {...productMarketingSectionShell.integrations}>
      <div className="mb-9 flex max-w-[44rem] flex-col gap-2.5 md:mb-12 md:gap-3">
        <InfrastructureEyebrow>{eyebrow}</InfrastructureEyebrow>
        <h2
          className={cn(
            textRoleClassName["heading-xl"],
            "text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
          )}
        >
          <HeadlineEmphasis text={title} phrase={titleEmphasis} />
        </h2>
        <p className="text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {groups.map((group, index) => {
          const Icon = groupIcon[group.icon];
          const accent = getCardAccent(index);
          return (
            <div
              key={group.id}
              className={cn(
                "rely-card flex flex-col rounded-shell bg-[color:var(--marketing-surface-elevated)] p-6 md:p-7",
                cardAccentVarClassName[accent],
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)]">
                  <Icon className="size-5 text-[color:var(--rely-card-accent)]" />
                </span>
                <p className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--marketing-body-muted)]">
                  {group.label}
                </p>
              </div>

              <ul className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)] px-4 py-3"
                  >
                    <p className="font-heading text-[0.9375rem] font-semibold leading-tight tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-pretty text-[13px] leading-[1.5] tracking-[-0.1px] text-[color:var(--marketing-body-muted)]">
                      {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </MarketingSection>
  );
}
