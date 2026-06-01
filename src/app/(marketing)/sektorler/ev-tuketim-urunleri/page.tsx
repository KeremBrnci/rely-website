import type { Metadata } from "next";

import { SubscriptionVerticalPage } from "@/components/marketing/pages/subscription-vertical-page";
import { subscriptionVerticalPageMetadata } from "@/lib/seo";

const slug = "ev-tuketim-urunleri" as const;

export const metadata: Metadata = subscriptionVerticalPageMetadata(slug);

export default function HouseholdEssentialsPage() {
  return <SubscriptionVerticalPage slug={slug} />;
}
