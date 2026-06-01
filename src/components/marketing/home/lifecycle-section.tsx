"use client";

import { useEffect, useRef, useState } from "react";

import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import { homeLifecycle } from "@/content/marketing/home-lifecycle";
import {
  cardAccentChipClassName,
  cardAccentVarClassName,
  getCardAccent,
} from "@/config/marketing/card-accents";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function SubscriptionLifecycleSection() {
  const { intro, nodes } = homeLifecycle;
  const listRef = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <MarketingSection id="lifecycle" {...homeMarketingSectionShell.lifecycle}>
      {/* Split: metin solda, şema sağa kaydırılmış */}
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,23rem)_minmax(0,1fr)] lg:gap-x-20 xl:gap-x-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <InfrastructureEyebrow>{intro.eyebrow}</InfrastructureEyebrow>
          <h2
            className={cn(
              textRoleClassName["heading-xl"],
              "mt-4 text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
            )}
          >
            <HeadlineEmphasis text={intro.title} phrase={intro.titleEmphasis} />
          </h2>
          <p className="mt-5 max-w-[30rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
            {intro.description}
          </p>
        </div>

        <ol ref={listRef} className="rely-flow relative lg:pt-1">
          <span className="rely-flow-rail" aria-hidden />
          <span className="rely-flow-pulse" aria-hidden />

          {nodes.map((node, index) => {
            const accent = getCardAccent(index);
            return (
              <li
                key={node.id}
                className={cn(
                  "rely-step group relative flex gap-6 pb-9 last:pb-0",
                  visible && "is-visible",
                  cardAccentVarClassName[accent],
                )}
                style={
                  { "--rely-step-delay": `${index * 100}ms` } as React.CSSProperties
                }
              >
                <span
                  className={cn(
                    "relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-full",
                    "text-[0.8125rem] font-semibold tabular-nums leading-none",
                    "border border-[color:color-mix(in_oklab,var(--rely-card-accent)_38%,transparent)]",
                    "ring-4 ring-[color:var(--marketing-background)]",
                    "transition-transform duration-300 ease-out group-hover:scale-[1.08]",
                    cardAccentChipClassName[accent],
                  )}
                >
                  {index + 1}
                </span>

                <div className="pt-1">
                  {node.caption ? (
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[color:color-mix(in_oklab,var(--rely-card-accent)_12%,transparent)] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--rely-card-accent)]">
                      <span className="size-1 rounded-full bg-current" aria-hidden />
                      {node.caption}
                    </span>
                  ) : null}
                  <h3 className="font-heading text-[1.125rem] font-bold leading-[1.3] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)] transition-colors duration-200 group-hover:text-[color:var(--rely-card-accent)]">
                    {node.title}
                  </h3>
                  <p className="mt-1.5 max-w-[48ch] text-pretty text-[14px] leading-[1.55] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] line-clamp-2 md:text-[14.5px]">
                    {node.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </MarketingSection>
  );
}
