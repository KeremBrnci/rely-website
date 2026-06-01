import { Info, Plus } from "lucide-react";

import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { textRoleClassName } from "@/design-system/tokens";
import type { pricingPageContent } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

type PricingAddOnsSectionProps = {
  addOns: (typeof pricingPageContent)["addOns"];
};

export function PricingAddOnsSection({ addOns }: PricingAddOnsSectionProps) {
  return (
    <section aria-labelledby="pricing-addons-heading">
      <div className="flex max-w-[44rem] flex-col gap-2.5">
        <InfrastructureEyebrow>Ek hizmetler</InfrastructureEyebrow>
        <h2
          id="pricing-addons-heading"
          className={cn(
            textRoleClassName["heading-xl"],
            "text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
          )}
        >
          {addOns.title}
        </h2>
        <p className="text-pretty text-[15px] leading-[1.65] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
          {addOns.description}
        </p>
      </div>

      <div className="rely-card mt-8 rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] p-6 md:p-8">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {addOns.services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-2.5 text-pretty text-[14px] leading-[1.5] text-[color:var(--marketing-body-readable)]"
            >
              <span className="mt-0.5 inline-flex size-[1.375rem] shrink-0 items-center justify-center rounded-full bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_75%,var(--marketing-background))] text-[color:var(--marketing-primary)]">
                <Plus className="size-3 stroke-[2.5]" aria-hidden />
              </span>
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "mt-6 rounded-shell border border-[color:var(--marketing-border-subtle)]",
          "bg-[color:color-mix(in_oklab,var(--marketing-surface-band)_55%,var(--marketing-background))] p-5 md:p-6",
        )}
      >
        <p className="mb-3 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
          Bilgi
        </p>
        <ul className="flex flex-col gap-2.5">
          {addOns.notes.map((note) => (
            <li
              key={note}
              className="flex items-start gap-2.5 text-pretty text-[13.5px] leading-[1.55] text-[color:var(--marketing-body-muted)]"
            >
              <Info
                className="mt-0.5 size-[0.95rem] shrink-0 text-[color:var(--marketing-primary)]"
                aria-hidden
              />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
