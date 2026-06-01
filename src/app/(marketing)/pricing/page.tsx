import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { routes } from "@/config/routes";
import { SEO_ROBOTS_NOINDEX } from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Yönlendiriliyor…",
  robots: SEO_ROBOTS_NOINDEX,
};

/** Eski `/pricing` → kanonik `/fiyatlandirma`. */
export default function PricingLegacyRedirect() {
  redirect(routes.pricingTr);
}
