import type { CSSProperties } from "react";

import Image from "next/image";
import Link from "next/link";

import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import {
  homeTrustedBrands,
  type HomeTrustedBrand,
} from "@/content/marketing/home";
import { cn } from "@/lib/utils";

function TrustedBrandLogoItems({ brands }: { brands: HomeTrustedBrand[] }) {
  return brands.map((brand) => (
    <li
      key={brand.id}
      className="rely-trusted-brand-slot"
      style={
        {
          "--logo-optical-scale": String(brand.opticalScale),
          "--logo-optical-opacity": String(brand.opticalOpacity ?? 1),
          "--logo-optical-translate-y": brand.opticalTranslateY ?? "0",
          ...(brand.slotMaxWidth
            ? { "--logo-slot-max-width": brand.slotMaxWidth }
            : {}),
        } as CSSProperties
      }
    >
      <Link
        href={brand.href}
        target="_blank"
        rel="noopener noreferrer"
        title={brand.name}
        className="rely-trusted-brand-logo-link flex size-full items-center justify-center"
      >
        <span className="rely-trusted-brand-logo-wrap">
          <Image
            src={brand.src}
            alt={brand.name}
            width={brand.intrinsicWidth ?? 160}
            height={brand.intrinsicHeight ?? 48}
            sizes="148px"
            className="rely-trusted-brand-logo"
          />
        </span>
      </Link>
    </li>
  ));
}

export function TrustedBrandsSection() {
  const { brands, title } = homeTrustedBrands;

  return (
    <MarketingSection
      {...homeMarketingSectionShell.trustedBrands}
      className={cn(homeMarketingSectionShell.trustedBrands.className, "overflow-x-clip")}
    >
      <div className="flex w-full flex-col">
        <div className="mb-7 flex w-full flex-col items-start gap-2.5 px-gutter-x md:mb-10 md:gap-3 lg:px-0">
          <InfrastructureEyebrow>REFERANSLAR</InfrastructureEyebrow>

          <h2
            className={cn(
              "font-heading font-medium leading-none tracking-[var(--tracking-editorial)]",
              "text-[length:clamp(0.875rem,1.6vw,1.3125rem)]",
              "text-[color:var(--marketing-foreground-strong)] opacity-[0.92]",
            )}
          >
            {title}
          </h2>
        </div>

        {/* Mobil / tablet: yalnızca kayan tek satır (8 logo) */}
        <div className="rely-trusted-brand-marquee block lg:hidden">
          <div className="rely-trusted-brand-marquee__viewport">
            <ul
              className="rely-trusted-brand-marquee__track"
              aria-label="İş ortaklarımız"
            >
              <TrustedBrandLogoItems brands={brands} />
            </ul>
          </div>
        </div>

        {/* Desktop: statik sıra — mobilde tamamen gizli */}
        <ul
          className="rely-trusted-brand-cloud hidden min-h-[3.125rem] lg:flex"
          aria-label="İş ortaklarımız"
        >
          <TrustedBrandLogoItems brands={brands} />
        </ul>
      </div>
    </MarketingSection>
  );
}
