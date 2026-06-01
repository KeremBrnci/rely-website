import Image from "next/image";
import type { CSSProperties } from "react";

import { Container } from "@/components/layout/container";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { VerticalSubscriptionPackage } from "@/components/marketing/verticals/vertical-subscription-package";
import type { VerticalAssets } from "@/config/marketing/vertical-assets";
import { cn } from "@/lib/utils";

export function VerticalImagerySection({ visuals }: { visuals: VerticalAssets }) {
  const { heroImage, packagePreview } = visuals;

  return (
    <MarketingSection
      spacing="md"
      background="default"
      className={cn(
        "border-b border-[color:var(--marketing-section-divider)]",
        "bg-[color:var(--marketing-background)]",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-5",
            "md:items-stretch",
          )}
        >
          <figure
            className={cn(
              "relative isolate overflow-hidden rounded-[1.25rem]",
              "ring-1 ring-[color:var(--marketing-border-subtle)]",
              "aspect-[16/10] md:aspect-[16/9]",
            )}
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 768px) 65vw, 92vw"
              className="object-cover"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182a]/55 via-transparent to-transparent"
            />
          </figure>

          <VerticalSubscriptionPackage
            image={visuals.packageImage}
            preview={packagePreview}
            className="md:min-h-0"
            style={
              {
                "--vertical-package-accent": packagePreview.accentVar,
              } as CSSProperties
            }
          />
        </div>
      </Container>
    </MarketingSection>
  );
}
