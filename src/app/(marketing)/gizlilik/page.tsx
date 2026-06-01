import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/marketing/legal/legal-document-page";
import { routes } from "@/config/routes";
import { privacyPage } from "@/content/marketing/legal-pages";
import { privacyPageMetadata } from "@/lib/seo";

export const metadata: Metadata = privacyPageMetadata;

export default function GizlilikPage() {
  return <LegalDocumentPage document={privacyPage} pathname={routes.privacy} />;
}
