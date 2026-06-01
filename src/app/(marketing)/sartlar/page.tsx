import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/marketing/legal/legal-document-page";
import { routes } from "@/config/routes";
import { termsPage } from "@/content/marketing/legal-pages";
import { termsPageMetadata } from "@/lib/seo";

export const metadata: Metadata = termsPageMetadata;

export default function SartlarPage() {
  return <LegalDocumentPage document={termsPage} pathname={routes.terms} />;
}
