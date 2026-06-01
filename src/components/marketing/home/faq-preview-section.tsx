import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import { textRoleClassName } from "@/design-system/tokens";
import { homeFaq } from "@/content/marketing/home";
import { cn } from "@/lib/utils";

export function FaqPreviewSection() {
  const { intro, items } = homeFaq;

  return (
    <MarketingSection id="faq" {...homeMarketingSectionShell.faq}>
      {/* Dengeli 2 kolon editorial split */}
      <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-x-20 lg:gap-y-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <InfrastructureEyebrow>{intro.eyebrow}</InfrastructureEyebrow>
          <h2
            className={cn(
              textRoleClassName["heading-xl"],
              "mt-4 text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
            )}
          >
            {intro.title}
          </h2>
          <p className="mt-5 max-w-[30rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
            {intro.description}
          </p>
        </div>

        <Accordion
          multiple
          defaultValue={items[0] ? [items[0].id] : []}
          className="w-full border-t border-[color:var(--marketing-border-subtle)]"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-[color:var(--marketing-border-subtle)]"
            >
              <AccordionTrigger
                className={cn(
                  "py-4 text-left text-[15px] font-medium leading-snug tracking-[-0.01em]",
                  "md:py-5 md:text-base",
                )}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className={cn(
                    "max-w-[52ch] text-pretty text-[14.5px] leading-[1.65] tracking-[-0.01em]",
                    "text-[color:var(--marketing-body-muted)] md:text-[15px] md:leading-[1.7]",
                    "pb-5 md:pb-6",
                  )}
                >
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MarketingSection>
  );
}
