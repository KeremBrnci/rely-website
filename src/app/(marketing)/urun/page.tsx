import type { Metadata } from "next";

import { ProductPage } from "@/components/marketing/pages/product-page";
import { productPageMetadata } from "@/lib/seo";

export const metadata: Metadata = productPageMetadata;

export default function UrunPage() {
  return <ProductPage />;
}
