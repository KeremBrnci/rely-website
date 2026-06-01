import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/pages/solution-page";
import { solutionPageMetadata } from "@/lib/seo";

export const metadata: Metadata = solutionPageMetadata("retention");

export default function RetentionSolutionPage() {
  return <SolutionPage solution="retention" />;
}
