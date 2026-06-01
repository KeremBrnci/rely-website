import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/layout";
import { MarketingPreFooterCta } from "@/components/marketing/pre-footer-cta";
import { SEO_ROBOTS_INDEX_FOLLOW } from "@/lib/seo/constants";
import { OrganizationJsonLd } from "@/lib/seo/schema";

/** Tüm pazarlama sayfalarında varsayılan index/follow (sayfa metadata ile birleşir). */
export const metadata: Metadata = {
  robots: SEO_ROBOTS_INDEX_FOLLOW,
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrganizationJsonLd />
      <SiteHeader />
      <main className="marketing-main rely-marketing-canvas flex flex-1 flex-col">
        {children}
      </main>
      <MarketingPreFooterCta />
      <SiteFooter />
    </>
  );
}
