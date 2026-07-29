"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import type { PricingValueItem } from "@/content/marketing/pricing-page";
import { cn } from "@/lib/utils";

const PREVIEW_COUNT = 3;

type PricingPlanFeatureListProps = {
  intro: string;
  items: readonly PricingValueItem[];
  enterpriseNote?: string;
};

function FeatureItem({ item }: { item: PricingValueItem }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check
        className="mt-0.5 size-[1.05rem] shrink-0 text-[color:var(--marketing-primary)]"
        aria-hidden
      />
      <div className="min-w-0">
        <p className="text-[14px] font-semibold leading-[1.4] text-[color:var(--marketing-foreground-strong)]">
          {item.title}
        </p>
        <p className="mt-1 text-pretty text-[13px] leading-[1.55] text-[color:var(--marketing-body-muted)]">
          {item.body}
        </p>
      </div>
    </li>
  );
}

export function PricingPlanFeatureList({
  intro,
  items,
  enterpriseNote,
}: PricingPlanFeatureListProps) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = items.length > PREVIEW_COUNT;
  const previewItems = items.slice(0, PREVIEW_COUNT);
  const restItems = items.slice(PREVIEW_COUNT);

  return (
    <div className="mt-8 flex flex-col">
      {/* Not alanı her kartta rezerve: kapalıyken butonlar aynı hizada kalır */}
      <div className="min-h-[2.75rem]">
        {enterpriseNote ? (
          <p className="text-pretty text-[13px] leading-[1.55] text-[color:var(--marketing-body-muted)]">
            {enterpriseNote}
          </p>
        ) : null}
      </div>

      <p className="mt-8 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
        {intro}
      </p>

      <ul className="mt-4 flex flex-col gap-5 border-t border-[color:var(--marketing-border-subtle)] pt-5">
        {previewItems.map((item) => (
          <FeatureItem key={item.id} item={item} />
        ))}
      </ul>

      {canExpand ? (
        <>
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-500 ease-in-out",
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <ul
                className={cn(
                  "flex flex-col gap-5 pt-5",
                  !expanded && "pointer-events-none",
                )}
                aria-hidden={!expanded}
              >
                {restItems.map((item) => (
                  <FeatureItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className={cn(
                "inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-shell px-3",
                "font-sans text-[13.5px] font-medium leading-none tracking-[-0.01em]",
                "text-[color:var(--marketing-primary)]",
                "transition-colors duration-200 hover:bg-[color:var(--marketing-soft-blue)]",
              )}
            >
              {expanded ? "Daha az göster" : "Devamını gör"}
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 transition-transform duration-500 ease-in-out",
                  expanded && "rotate-180",
                )}
                aria-hidden
              />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
