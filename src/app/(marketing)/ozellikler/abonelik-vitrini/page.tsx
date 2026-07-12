import type { Metadata } from "next";

import { FeaturePage } from "@/components/marketing/pages/feature-page";
import { featurePageMetadata } from "@/lib/seo";

export const metadata: Metadata = featurePageMetadata("storefront");

export default function StorefrontFeaturePage() {
  return <FeaturePage feature="storefront" />;
}
