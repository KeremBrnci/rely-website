import type { FaqSchemaItem } from "@/lib/seo/schema";

/** Sayfa içeriğindeki SSS maddelerini FAQPage JSON-LD için dönüştürür. */
export function faqItemsToSchema(
  items: ReadonlyArray<{ question: string; answer: string }>,
): FaqSchemaItem[] {
  return items.map(({ question, answer }) => ({ question, answer }));
}
