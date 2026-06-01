import type { Metadata } from "next";

import { PricingPage } from "@/components/marketing/pages/pricing-page";
import { pricingPageMetadata } from "@/lib/seo";

export const metadata: Metadata = pricingPageMetadata;

export default function FiyatlandirmaPage() {
  return <PricingPage />;
}
