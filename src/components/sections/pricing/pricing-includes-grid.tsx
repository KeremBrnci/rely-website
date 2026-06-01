import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export type PricingIncludesVariant = "on-dark" | "on-light";

export type PricingCheckTone = "muted" | "cyan";

export type PricingIncludesGridProps = {
  items: string[];
  variant: PricingIncludesVariant;
  /** Karanlık kartta görseldeki turkuaz tikler için `cyan`. */
  checkTone?: PricingCheckTone;
  className?: string;
};

function checkClassName(variant: PricingIncludesVariant, checkTone: PricingCheckTone) {
  if (checkTone === "cyan") {
    return "text-[color:var(--marketing-soft-blue)]";
  }
  return "text-[color:var(--marketing-body-muted)]";
}

function labelClassName(variant: PricingIncludesVariant) {
  return variant === "on-dark"
    ? "text-[color:var(--marketing-pricing-muted-on-dark)]"
    : "text-[color:var(--marketing-body-muted)]";
}

function FeatureItem({
  label,
  variant,
  checkTone,
}: {
  label: string;
  variant: PricingIncludesVariant;
  checkTone: PricingCheckTone;
}) {
  return (
    <li className="flex items-start gap-[7.5px] text-[13.1px] leading-[19px] tracking-[-0.3px]">
      <span className="mt-[1.875px] inline-flex shrink-0">
        <Check
          className={cn("size-[11px]", checkClassName(variant, checkTone))}
          strokeWidth={2.5}
          aria-hidden
        />
      </span>
      <span className={labelClassName(variant)}>{label}</span>
    </li>
  );
}

function PricingIncludesColumn({
  slice,
  rowKeyPrefix,
  variant,
  checkTone,
}: {
  slice: string[];
  rowKeyPrefix: string;
  variant: PricingIncludesVariant;
  checkTone: PricingCheckTone;
}) {
  return (
    <ul className="flex min-w-0 flex-1 flex-col gap-y-2 lg:gap-y-[10px]">
      {slice.map((label, i) => (
        <FeatureItem
          key={`${rowKeyPrefix}-${i}`}
          label={label}
          variant={variant}
          checkTone={checkTone}
        />
      ))}
    </ul>
  );
}

export function PricingIncludesGrid({
  items,
  variant,
  checkTone = "muted",
  className,
}: PricingIncludesGridProps) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <div
      data-slot="pricing-includes-grid"
      className={cn(
        "flex flex-col gap-y-2 sm:flex-row sm:gap-x-8 sm:gap-y-[8px]",
        className,
      )}
    >
      <ul className="flex min-w-0 flex-1 flex-col gap-y-2 sm:gap-y-[8px]">
        {left.map((label, i) => (
          <FeatureItem key={`l-${i}`} label={label} variant={variant} checkTone={checkTone} />
        ))}
      </ul>
      <ul className="flex min-w-0 flex-1 flex-col gap-y-2 sm:gap-y-[8px]">
        {right.map((label, i) => (
          <FeatureItem key={`r-${i}`} label={label} variant={variant} checkTone={checkTone} />
        ))}
      </ul>
    </div>
  );
}

export type PricingIncludesTriGridProps = {
  items: string[];
  variant: PricingIncludesVariant;
  checkTone?: PricingCheckTone;
  className?: string;
};

/** Görseldeki koyu kart: üç sütunlu özellik listesi. */
export function PricingIncludesTriGrid({
  items,
  variant,
  checkTone = "cyan",
  className,
}: PricingIncludesTriGridProps) {
  const n = items.length;
  const perCol = Math.max(1, Math.ceil(n / 3));
  const col1 = items.slice(0, perCol);
  const col2 = items.slice(perCol, perCol * 2);
  const col3 = items.slice(perCol * 2);

  return (
    <div
      data-slot="pricing-includes-tri-grid"
      className={cn(
        "flex flex-col gap-y-3 sm:flex-row sm:gap-x-6 lg:gap-x-8",
        className,
      )}
    >
      <PricingIncludesColumn slice={col1} rowKeyPrefix="c1" variant={variant} checkTone={checkTone} />
      <PricingIncludesColumn slice={col2} rowKeyPrefix="c2" variant={variant} checkTone={checkTone} />
      <PricingIncludesColumn slice={col3} rowKeyPrefix="c3" variant={variant} checkTone={checkTone} />
    </div>
  );
}
