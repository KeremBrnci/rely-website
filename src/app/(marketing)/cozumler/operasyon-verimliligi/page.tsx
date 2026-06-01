import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/pages/solution-page";
import { solutionPageMetadata } from "@/lib/seo";

export const metadata: Metadata = solutionPageMetadata("efficiency");

export default function EfficiencySolutionPage() {
  return <SolutionPage solution="efficiency" />;
}
