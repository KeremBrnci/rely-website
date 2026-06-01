import type { Metadata } from "next";

import { ContactPage } from "@/components/marketing/contact/contact-page";
import { contactPageMetadata } from "@/lib/seo";

export const metadata: Metadata = contactPageMetadata;

export default function IletisimPage() {
  return <ContactPage />;
}
