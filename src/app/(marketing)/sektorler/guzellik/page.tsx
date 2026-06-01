import type { Metadata } from "next";

import { SubscriptionVerticalPage } from "@/components/marketing/pages/subscription-vertical-page";
import { subscriptionVerticalPageMetadata } from "@/lib/seo";

const slug = "beauty" as const;

export const metadata: Metadata = subscriptionVerticalPageMetadata(slug);

export default function BeautySubscriptionsPage() {
  return <SubscriptionVerticalPage slug={slug} />;
}
