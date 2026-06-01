import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { pricingMarketingSectionShell } from "@/config/marketing/pricing-section-shell";
import { cn } from "@/lib/utils";

export type PricingTrustBannerProps = {
  body: string;
  cta: { label: string; href: string };
  className?: string;
};

export function PricingTrustBanner({ body, cta, className }: PricingTrustBannerProps) {
  return (
    <MarketingSection {...pricingMarketingSectionShell.trust} className={cn(className)}>
      <Container className="flex flex-col items-center gap-5 text-center md:gap-6">
        <p className="max-w-[36rem] text-pretty text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white md:text-[18px] md:leading-[1.6]">
          {body}
        </p>
        <Link
          href={cta.href}
          className="inline-flex items-center gap-2 text-[15px] font-medium text-white/95 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          {cta.label}
          <ArrowRight className="size-4 shrink-0" aria-hidden />
        </Link>
      </Container>
    </MarketingSection>
  );
}
