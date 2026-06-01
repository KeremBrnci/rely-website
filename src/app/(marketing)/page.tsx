import type { Metadata } from "next";

import { HomePage } from "@/components/marketing/home/home-page";
import { homePageMetadata } from "@/lib/seo";

export const metadata: Metadata = homePageMetadata;

export default function MarketingHomePage() {
  return <HomePage />;
}
