import type { FeatureItemData } from "@/components/sections/types";
import type { HomeFeatureIcon } from "@/content/marketing/home";

import { FeatureIcon } from "@/components/marketing/home/feature-icon";

export function buildFeatureItems(
  entries: ReadonlyArray<{
    id: string;
    title: string;
    description: string;
    icon: HomeFeatureIcon;
  }>,
): FeatureItemData[] {
  return entries.map((entry) => ({
    id: entry.id,
    title: entry.title,
    description: entry.description,
    icon: <FeatureIcon name={entry.icon} />,
  }));
}
