import type { Metadata } from "next";

import { FeaturePage } from "@/components/marketing/pages/feature-page";
import { featurePageMetadata } from "@/lib/seo";

export const metadata: Metadata = featurePageMetadata("integrations");

export default function IntegrationsFeaturePage() {
  return <FeaturePage feature="integrations" />;
}
