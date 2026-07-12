import type { Metadata } from "next";

import { FeaturePage } from "@/components/marketing/pages/feature-page";
import { featurePageMetadata } from "@/lib/seo";

export const metadata: Metadata = featurePageMetadata("notifications");

export default function NotificationsFeaturePage() {
  return <FeaturePage feature="notifications" />;
}
