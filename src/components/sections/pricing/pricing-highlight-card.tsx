import type { ComponentProps, ReactNode } from "react";

import type { PricingIncludesGridProps } from "@/components/sections/pricing/pricing-includes-grid";
import {
  PricingIncludesGrid,
  PricingIncludesTriGrid,
} from "@/components/sections/pricing/pricing-includes-grid";
import { cn } from "@/lib/utils";

export type PricingHighlightBadgeTone = "cerulean" | "navy" | "purple";

export type PricingLeadStyle = "price" | "headline";

export type PricingHighlightCardProps = ComponentProps<"div"> & {
  badge: { label: string; tone: PricingHighlightBadgeTone };
  planLabel: ReactNode;
  price?: ReactNode;
  priceSuffix?: ReactNode;
  microLine?: ReactNode;
  description: ReactNode;
  includesTitle: ReactNode;
  includesItems: PricingIncludesGridProps["items"];
  includesVariant: PricingIncludesGridProps["variant"];
  /** `three`: görseldeki popüler kart üç sütun ızgara. */
  includesColumns?: 2 | 3;
  /** Koyu kart tik rengi. */
  includesCheckTone?: PricingIncludesGridProps["checkTone"];
  /** `headline`: Kurumsal kart — büyük başlık, fiyat satırı yok. */
  leadStyle?: PricingLeadStyle;
  cta: ReactNode;
  variant: "dark" | "light";
};

export function PricingHighlightCard({
  badge,
  planLabel,
  price,
  priceSuffix,
  microLine,
  description,
  includesTitle,
  includesItems,
  includesVariant,
  includesColumns = 2,
  includesCheckTone,
  leadStyle = "price",
  cta,
  variant,
  className,
  ...props
}: PricingHighlightCardProps) {
  const isDark = variant === "dark";

  const badgeClass =
    badge.tone === "cerulean"
      ? "bg-[color:var(--marketing-soft-blue)] text-[color:var(--marketing-primary)]"
      : badge.tone === "purple"
        ? "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_75%,white)] text-[color:var(--marketing-primary)]"
        : "bg-[color:var(--marketing-primary)] text-white";

  const defaultCheck = isDark && badge.tone === "cerulean" ? "cyan" : "muted";
  const checkTone = includesCheckTone ?? defaultCheck;

  return (
    <div
      data-slot="pricing-highlight-card"
      className={cn(
        "relative isolate rounded-shell p-[9.375px] shadow-[0_0_30px_rgba(0,0,0,0.05)]",
        isDark ? "bg-[color:var(--marketing-pricing-dark)]" : "bg-white",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute left-[30px] top-0 z-10 inline-flex -translate-y-1/2 rounded-shell px-[15px] py-[3.75px]",
          badgeClass,
        )}
      >
        <span className="text-[11.3px] font-bold leading-[15px]">{badge.label}</span>
      </div>

      <div
        className={cn(
          "flex flex-col gap-[30px] rounded-shell border border-dashed px-[22.5px] py-[21.5px] lg:flex-row lg:items-stretch",
          isDark
            ? "border-[color:var(--marketing-pricing-dark-dash)]"
            : "border-[color:var(--marketing-border-subtle)]",
        )}
      >
        <div className="flex w-full min-w-0 shrink-0 flex-col justify-center lg:w-[280px] lg:max-w-[320px]">
          {leadStyle === "headline" ? (
            <h3
              className={cn(
                "text-[clamp(1.375rem,3.6vw,1.875rem)] font-bold leading-tight tracking-[-0.02em]",
                isDark ? "text-white" : "text-[color:var(--marketing-foreground-strong)]",
              )}
            >
              {planLabel}
            </h3>
          ) : (
            <div className="text-[18.8px] font-semibold leading-[26px] tracking-[-0.3px]">
              <span
                className={cn(
                  isDark ? "text-white" : "text-[color:var(--marketing-foreground-strong)]",
                )}
              >
                {planLabel}
              </span>
            </div>
          )}

          {leadStyle === "price" && price !== undefined && price !== null && price !== "" ? (
            <div className="mt-px flex flex-wrap items-baseline gap-x-[3.75px] gap-y-1">
              <span
                className={cn(
                  "text-[33.8px] font-bold leading-[38px] tracking-[-0.3px]",
                  isDark ? "text-white" : "text-[color:var(--marketing-foreground-strong)]",
                )}
              >
                {price}
              </span>
              {priceSuffix ? (
                <span className="text-[13.1px] font-normal leading-[19px] text-[color:var(--marketing-body-muted)]">
                  {priceSuffix}
                </span>
              ) : null}
            </div>
          ) : null}

          {microLine ? (
            <p
              className={cn(
                "mt-[10px] text-[11.3px] leading-5 tracking-[-0.3px]",
                isDark
                  ? "text-[color:var(--marketing-pricing-muted-on-dark)]"
                  : "text-[color:var(--marketing-body-muted)]",
              )}
            >
              {microLine}
            </p>
          ) : null}

          <div
            className={cn(
              leadStyle === "headline" ? "mt-4" : "mt-[10.57px]",
              "text-[13.1px] leading-[18px] tracking-[-0.3px]",
              isDark
                ? "text-[color:var(--marketing-pricing-muted-on-dark)]"
                : "text-[color:var(--marketing-body-muted)]",
            )}
          >
            {description}
          </div>

          <div className="mt-[18.75px] pt-[6px]">{cta}</div>
        </div>

        <div
          className={cn(
            "h-px w-full shrink-0 lg:hidden",
            isDark ? "bg-[color:var(--marketing-pricing-dark-dash)]" : "bg-[color:var(--marketing-border-subtle)]",
          )}
          aria-hidden
        />

        <div
          className={cn(
            "hidden w-px shrink-0 self-stretch lg:block",
            isDark ? "bg-[color:var(--marketing-pricing-dark-dash)]" : "bg-[color:var(--marketing-border-subtle)]",
          )}
          aria-hidden
        />

        <div className="flex min-w-0 flex-1 flex-col gap-[11.25px] lg:gap-[11.24px]">
          <p
            className={cn(
              "text-[13.1px] font-medium leading-[23px] tracking-[-0.3px]",
              isDark ? "text-white" : "text-[color:var(--marketing-foreground-strong)]",
            )}
          >
            {includesTitle}
          </p>
          {includesColumns === 3 ? (
            <PricingIncludesTriGrid
              variant={includesVariant}
              items={includesItems}
              checkTone={checkTone === "cyan" ? "cyan" : "muted"}
            />
          ) : (
            <PricingIncludesGrid
              variant={includesVariant}
              items={includesItems}
              checkTone={checkTone}
            />
          )}
        </div>
      </div>
    </div>
  );
}
