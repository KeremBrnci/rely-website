import { Grid } from "@/components/layout/grid";
import { Stack } from "@/components/layout/stack";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import { homeSetup } from "@/content/marketing/home-setup";
import { getCardAccent } from "@/config/marketing/card-accents";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import { SetupStepCard } from "./setup-step-card";

export function SetupSection() {
  const { badge, title, description, steps } = homeSetup;

  return (
    <MarketingSection id="setup" {...homeMarketingSectionShell.setup}>
      <Stack gap="2xl" className="md:gap-[4.5rem]">
        <div
          className={cn(
            "grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
            "lg:items-start lg:gap-x-16 xl:gap-x-20",
          )}
        >
          <Stack gap="md" className="max-w-xl">
            <InfrastructureEyebrow>{badge}</InfrastructureEyebrow>

            <h2
              className={cn(
                textRoleClassName["heading-xl"],
                "max-w-[16ch] text-balance text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.08]",
              )}
            >
              {title.before}
              <span className="font-semibold text-[color:var(--marketing-primary)]">
                {title.accent}
              </span>
            </h2>
          </Stack>

          <p
            className={cn(
              "max-w-md font-sans text-[15px] leading-[1.7] tracking-[-0.02em] lg:pt-10",
              "text-[color:var(--marketing-body-muted)] md:text-base md:leading-[1.75]",
            )}
          >
            {description}
          </p>
        </div>

        <Grid cols={3} gap="md" className="gap-5 md:gap-6">
          {steps.map((step, index) => (
            <SetupStepCard
              key={step.id}
              step={step}
              accent={getCardAccent(index)}
            />
          ))}
        </Grid>
      </Stack>
    </MarketingSection>
  );
}
