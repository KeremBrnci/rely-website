import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import {
  pricingSectionDescriptionClassName,
  pricingSectionIntroClassName,
  pricingSectionTitleClassName,
} from "@/config/marketing/pricing-section-shell";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

type PricingSectionIntroProps = {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
};

export function PricingSectionIntro({
  eyebrow,
  title,
  titleEmphasis,
  description,
  className,
  descriptionClassName,
}: PricingSectionIntroProps) {
  const showEyebrow = eyebrow.trim().length > 0;

  return (
    <div className={cn(pricingSectionIntroClassName, className)}>
      {showEyebrow ? (
        <InfrastructureEyebrow align="center">{eyebrow}</InfrastructureEyebrow>
      ) : null}
      <h2
        className={cn(
          textRoleClassName["heading-xl"],
          pricingSectionTitleClassName,
          !showEyebrow && "mt-0",
        )}
      >
        {titleEmphasis ? (
          <HeadlineEmphasis text={title} phrase={titleEmphasis} />
        ) : (
          title
        )}
      </h2>
      <p className={cn(pricingSectionDescriptionClassName, descriptionClassName)}>
        {description}
      </p>
    </div>
  );
}
