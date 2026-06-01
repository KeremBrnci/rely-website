import type { Metadata } from "next";

import { SubscriptionVerticalPage } from "@/components/marketing/pages/subscription-vertical-page";
import { subscriptionVerticalPageMetadata } from "@/lib/seo";

const slug = "abonelik-kutulari" as const;

export const metadata: Metadata = subscriptionVerticalPageMetadata(slug);

export default function SubscriptionBoxesPage() {
  return <SubscriptionVerticalPage slug={slug} />;
}
