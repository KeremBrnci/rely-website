import type { Metadata } from "next";

import { FeaturePage } from "@/components/marketing/pages/feature-page";
import { featurePageMetadata } from "@/lib/seo";

export const metadata: Metadata = featurePageMetadata("pause");

export default function PauseFeaturePage() {
  return <FeaturePage feature="pause" />;
}
