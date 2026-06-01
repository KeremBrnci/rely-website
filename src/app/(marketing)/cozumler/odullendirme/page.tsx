import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/pages/solution-page";
import { solutionPageMetadata } from "@/lib/seo";

export const metadata: Metadata = solutionPageMetadata("reward");

export default function RewardSolutionPage() {
  return <SolutionPage solution="reward" />;
}
