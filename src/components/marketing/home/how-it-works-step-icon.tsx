import type { HomeFeatureIcon } from "@/content/marketing/home";
import {
  cardAccentVarClassName,
  type CardAccent,
} from "@/config/marketing/card-accents";
import { cn } from "@/lib/utils";

import { FeatureIcon } from "./feature-icon";

export type HowItWorksStepIconProps = {
  step: string;
  icon: HomeFeatureIcon;
  accent: CardAccent;
  className?: string;
};

export function HowItWorksStepIcon({
  step,
  icon,
  accent,
  className,
}: HowItWorksStepIconProps) {
  return (
    <div
      className={cn("rely-step-icon-box", cardAccentVarClassName[accent], className)}
    >
      <span className="rely-step-icon-box__orbit" aria-hidden>
        <span className="rely-step-icon-box__orbit-track" />
      </span>
      <span className="rely-step-icon-box__surface">
        <FeatureIcon
          name={icon}
          className="size-7 stroke-[1.5] text-[color:var(--rely-card-accent)]"
        />
      </span>
      <span className="rely-step-badge rely-step-icon-box__badge">{step}</span>
    </div>
  );
}
