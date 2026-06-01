import type { Metadata } from "next";

import { EcommerceSubscriptionPage } from "@/components/marketing/seo/ecommerce-subscription-page";
import { ecommerceSeoPageMetadata } from "@/lib/seo";

export const metadata: Metadata = ecommerceSeoPageMetadata;

export default function EcommerceSubscriptionSystemPage() {
  return <EcommerceSubscriptionPage />;
}
