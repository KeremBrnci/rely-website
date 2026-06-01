import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/pages/solution-page";
import { solutionPageMetadata } from "@/lib/seo";

export const metadata: Metadata = solutionPageMetadata("value");

export default function ValueSolutionPage() {
  return <SolutionPage solution="value" />;
}
