"use client";

import { useEffect, useRef, useState } from "react";

import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import {
  stepsSectionIntroDescriptionClassName,
  stepsSectionIntroEyebrowClassName,
  stepsSectionIntroSplitClassName,
  stepsSectionIntroTitleClassName,
  stepsSectionItemClassName,
  stepsSectionItemDescriptionClassName,
  stepsSectionItemRowClassName,
} from "@/config/marketing/steps-section-layout";
import { homeHowItWorks } from "@/content/marketing/home-how-it-works";
import {
  cardAccentVarClassName,
  getCardAccent,
} from "@/config/marketing/card-accents";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import { HowItWorksStepIcon } from "./how-it-works-step-icon";

export function HowItWorksSection() {
  const { intro, steps } = homeHowItWorks;
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
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <MarketingSection id="how-it-works" {...homeMarketingSectionShell.howItWorks}>
      {/* Sol hizalı, split başlık */}
      <div className={stepsSectionIntroSplitClassName}>
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <InfrastructureEyebrow className={stepsSectionIntroEyebrowClassName}>
            {intro.eyebrow}
          </InfrastructureEyebrow>
          <h2
            className={cn(
              textRoleClassName["heading-xl"],
              stepsSectionIntroTitleClassName,
              "mt-4 max-w-[16ch] text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
            )}
          >
            <HeadlineEmphasis text={intro.title} phrase={intro.titleEmphasis} />
          </h2>
        </div>
        <p
          className={cn(
            stepsSectionIntroDescriptionClassName,
            "max-w-[32rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base lg:pb-1",
          )}
        >
          {intro.description}
        </p>
      </div>

      {/* Bağlı yatay akış: daire ikon + kesik çizgi konnektör */}
      <ol
        ref={listRef}
        className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0"
      >
        {steps.map((step, index) => {
          const accent = getCardAccent(index);
          const isLast = index === steps.length - 1;
          return (
            <li
              key={step.id}
              className={cn(
                "rely-step relative flex flex-col",
                stepsSectionItemClassName,
                visible && "is-visible",
              )}
              style={{ "--rely-step-delay": `${index * 110}ms` } as React.CSSProperties}
            >
              <div className={cn("flex items-center", stepsSectionItemRowClassName)}>
                <HowItWorksStepIcon step={step.step} icon={step.icon} accent={accent} />

                {!isLast ? (
                  <span
                    aria-hidden
                    className={cn(
                      "hidden h-[var(--rely-step-icon-size,4.75rem)] flex-1 items-center pl-3 lg:flex",
                      cardAccentVarClassName[accent],
                    )}
                    style={
                      { "--rely-dot-delay": `${index * 0.55}s` } as React.CSSProperties
                    }
                  >
                    <span className="rely-step-line relative w-full border-t border-dashed border-[color:var(--marketing-border-subtle)]">
                      <span className="rely-step-dot" />
                    </span>
                  </span>
                ) : null}
              </div>

              <h3 className="mt-6 font-heading text-[1.125rem] font-semibold leading-[1.25] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]">
                {step.title}
              </h3>
              <p
                className={cn(
                  stepsSectionItemDescriptionClassName,
                  "mt-2.5 max-w-[26ch] text-pretty text-[14.5px] leading-[1.6] tracking-[-0.1px] text-[color:var(--marketing-body-muted)]",
                )}
              >
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </MarketingSection>
  );
}
