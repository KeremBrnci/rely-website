import type { HomeCapability } from "@/content/marketing/home-capabilities";
import {
  cardAccentChipClassName,
  cardAccentVarClassName,
  type CardAccent,
} from "@/config/marketing/card-accents";
import { cn } from "@/lib/utils";

import { FeatureIcon } from "./feature-icon";

export type CapabilityCardProps = {
  capability: HomeCapability;
  accent?: CardAccent;
  className?: string;
};

export function CapabilityCard({
  capability,
  accent = "navy",
  className,
}: CapabilityCardProps) {
  const { title, description, icon, size } = capability;
  const isWide = size === "wide";

  return (
    <article
      data-slot="capability-card"
      data-size={size}
      className={cn(
        "rely-card group flex h-full flex-col rounded-shell",
        "bg-[color:var(--marketing-surface-elevated)] p-6 md:p-7",
        cardAccentVarClassName[accent],
        isWide && "md:p-8",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-11 shrink-0 items-center justify-center rounded-shell",
          cardAccentChipClassName[accent],
        )}
        aria-hidden
      >
        <FeatureIcon name={icon} className="size-5 stroke-[1.5]" />
      </span>

      <h3
        className={cn(
          "mt-6 font-heading font-semibold leading-[1.2] tracking-[var(--tracking-editorial)]",
          "text-[color:var(--marketing-foreground-strong)]",
          isWide ? "text-[1.375rem] md:text-[1.5rem]" : "text-[1.25rem]",
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "mt-3 text-pretty text-[15px] leading-[1.65] tracking-[-0.2px]",
          "text-[color:var(--marketing-body-muted)]",
          isWide ? "max-w-[42ch]" : "max-w-[34ch]",
        )}
      >
        {description}
      </p>
    </article>
  );
}
