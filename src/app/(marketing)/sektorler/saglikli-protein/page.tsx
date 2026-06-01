import type { Metadata } from "next";

import { SubscriptionVerticalPage } from "@/components/marketing/pages/subscription-vertical-page";
import { subscriptionVerticalPageMetadata } from "@/lib/seo";

const slug = "saglikli-protein" as const;

export const metadata: Metadata = subscriptionVerticalPageMetadata(slug);

export default function ProteinSubscriptionsPage() {
  return <SubscriptionVerticalPage slug={slug} />;
}
