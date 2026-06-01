import type { Metadata } from "next";

import { ReferencesPage } from "@/components/marketing/references/references-page";
import { referencesPageMetadata } from "@/lib/seo";

export const metadata: Metadata = referencesPageMetadata;

export default function ReferanslarPage() {
  return <ReferencesPage />;
}
