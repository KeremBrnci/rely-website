import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { footerAiSummary } from "@/config/marketing/footer-ai-summary";
import { cn } from "@/lib/utils";

import { FooterAiProviderIcon } from "./footer-ai-provider-icons";

export type FooterAiSummaryBandProps = {
  className?: string;
};

export function FooterAiSummaryBand({ className }: FooterAiSummaryBandProps) {
  return (
    <div
      data-slot="footer-ai-summary"
      className={cn("flex flex-col items-center text-center", className)}
    >
      <BrandMark size="sm" className="mb-3 opacity-90" />
      <InfrastructureEyebrow align="center">{footerAiSummary.eyebrow}</InfrastructureEyebrow>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:mt-6">
        {footerAiSummary.providers.map((provider) => (
          <Link
            key={provider.id}
            href={provider.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={provider.title}
            title={provider.title}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-shell",
              "border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)]",
              "text-[color:var(--marketing-body-muted)]",
              "transition-[border-color,color,box-shadow] duration-300 ease-out",
              "hover:border-[color:color-mix(in_oklab,var(--marketing-primary)_28%,var(--marketing-border-subtle))]",
              "hover:text-[color:var(--marketing-primary)] hover:shadow-elevation-surface",
            )}
          >
            <FooterAiProviderIcon id={provider.id} className="size-4 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
