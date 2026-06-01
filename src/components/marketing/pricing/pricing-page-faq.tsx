import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import {
  marketingFaqContentClassName,
  marketingFaqSectionShell,
} from "@/config/marketing/faq-section-shell";
import { cn } from "@/lib/utils";

export type PricingFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type PricingPageFaqProps = {
  title: string;
  items: PricingFaqItem[];
  className?: string;
};

export function PricingPageFaq({ title, items, className }: PricingPageFaqProps) {
  return (
    <MarketingSection {...marketingFaqSectionShell} className={cn(className)}>
      <Container className={marketingFaqContentClassName}>
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight tracking-[-0.02em] text-[color:var(--marketing-foreground-strong)]">
          {title}
        </h2>

        <Accordion
          multiple
          defaultValue={[]}
          className={cn(
            "mx-auto w-full max-w-3xl overflow-hidden rounded-shell border border-[color:var(--marketing-border-subtle)]",
            "bg-[color:var(--marketing-surface-elevated)] shadow-elevation-surface",
          )}
        >
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={cn(
                "border-[color:var(--marketing-border-subtle)] px-5 md:px-6",
                index === items.length - 1 && "border-b-0",
              )}
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-[color:var(--marketing-foreground-strong)] hover:no-underline md:py-6 md:text-[17px]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pb-6 text-[15px] leading-relaxed tracking-[-0.01em] md:pb-7">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </MarketingSection>
  );
}
