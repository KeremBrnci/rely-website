import { Section, type SectionProps } from "../section";

export type MarketingSectionProps = SectionProps;

/** Marketing-facing alias for the base section shell (analytics hooks, consistent data-slot). */
export function MarketingSection(props: MarketingSectionProps) {
  return <Section data-slot="marketing-section" {...props} />;
}
