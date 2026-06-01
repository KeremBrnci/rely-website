import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { HeadlineEmphasis } from "@/components/marketing/headline-emphasis";
import { SolutionHero } from "@/components/marketing/solutions/solution-hero";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { cardAccentVarClassName, getCardAccent } from "@/config/marketing/card-accents";
import { marketingFaqSectionPaddingClassName } from "@/config/marketing/faq-section-shell";
import { PageSeo } from "@/components/seo/page-seo";
import { routes } from "@/config/routes";
import {
  ecommerceSubscriptionMeta,
  ecommerceSubscriptionPage,
  type EcommerceSubscriptionSection,
} from "@/content/marketing/ecommerce-subscription-system";
import { textRoleClassName } from "@/design-system/tokens";
import { ecommerceSeoBreadcrumbs, faqItemsToSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

const sectionShell = cn(
  "relative isolate scroll-mt-20 md:scroll-mt-24",
  "border-b border-[color:var(--marketing-section-divider)]",
);

function InlineCtaBand() {
  const { inlineCta } = ecommerceSubscriptionPage;
  return (
    <MarketingSection
      spacing="lg"
      background="default"
      className={cn(
        sectionShell,
        "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_26%,var(--marketing-background))]",
      )}
    >
      <div className="mx-auto flex max-w-[44rem] flex-col items-center text-center">
        <h2
          className={cn(
            textRoleClassName["heading-xl"],
            "text-balance text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.2]",
          )}
        >
          {inlineCta.title}
        </h2>
        <p className="mt-4 max-w-[36rem] text-pretty text-[15px] leading-[1.7] text-[color:var(--marketing-body-muted)]">
          {inlineCta.description}
        </p>
        <Link
          href={inlineCta.cta.href}
          className={cn(
            "mt-7 inline-flex h-11 items-center justify-center rounded-shell px-6",
            "font-sans text-[15px] font-medium text-white",
            "bg-[color:var(--marketing-primary)] hover:bg-[color:var(--marketing-primary-hover)]",
            "transition-colors duration-300",
          )}
        >
          {inlineCta.cta.label}
        </Link>
      </div>
    </MarketingSection>
  );
}

function EditorialSection({
  section,
  variant = "default",
}: {
  section: EcommerceSubscriptionSection & { paragraphsAfterBullets?: string[] };
  variant?: "default" | "muted";
}) {
  return (
    <MarketingSection
      id={section.id}
      spacing="lg"
      background="default"
      className={cn(
        sectionShell,
        variant === "muted"
          ? "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_18%,var(--marketing-background))]"
          : "bg-[color:var(--marketing-background)]",
      )}
    >
      <article
        className={cn(
          "mx-auto grid max-w-[52rem] grid-cols-1 gap-6 md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-x-10",
          section.id === "how-it-works" &&
            "max-lg:justify-items-center max-lg:text-center",
        )}
      >
        <p
          className={cn(
            "font-heading text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-[color:color-mix(in_oklab,var(--marketing-primary)_55%,transparent)] md:pt-1",
            section.id === "how-it-works" && "max-lg:mx-auto",
          )}
          aria-hidden
        >
          {section.number}.
        </p>
        <div>
          <h2
            className={cn(
              textRoleClassName["heading-xl"],
              "text-balance text-[clamp(1.375rem,2vw,1.875rem)] leading-[1.2]",
            )}
          >
            {section.title}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-pretty text-[15px] leading-[1.75] tracking-[-0.01em] text-[color:var(--marketing-body-readable)] md:text-base"
              >
                {p}
              </p>
            ))}
          </div>
          {section.bullets?.length ? (
            <ul
              className={cn(
                "mt-5 flex flex-col gap-3 border-l-2 border-[color:color-mix(in_oklab,var(--marketing-primary)_25%,transparent)] pl-5",
                section.id === "how-it-works" &&
                  "max-lg:mx-auto max-lg:max-w-[34rem] max-lg:border-l-0 max-lg:pl-0 max-lg:items-center",
              )}
            >
              {section.bullets.map((item) => (
                <li
                  key={item.slice(0, 48)}
                  className="text-pretty text-[14px] leading-[1.65] text-[color:var(--marketing-body-readable)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {section.paragraphsAfterBullets?.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="mt-4 text-pretty text-[15px] leading-[1.75] text-[color:var(--marketing-body-readable)]"
            >
              {p}
            </p>
          ))}
          {section.links?.length ? (
            <ul className="mt-6 flex flex-col gap-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-[color:var(--marketing-primary)] transition-colors hover:text-[color:var(--marketing-primary-hover)]"
                  >
                    {link.label}
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </article>
    </MarketingSection>
  );
}

export function EcommerceSubscriptionPage() {
  const { hero, sections, sectors, faq, closingCta, seoProse, breadcrumb } =
    ecommerceSubscriptionPage;

  const heroForSolution = {
    eyebrow: hero.eyebrow,
    title: hero.title,
    titleEmphasis: hero.titleEmphasis,
    subtitle: hero.subtitle,
    primaryCta: hero.primaryCta,
    secondaryCta: hero.secondaryCta,
  };

  return (
    <>
      <PageSeo
        pathname={routes.ecommerceSubscription}
        titleSegment={ecommerceSubscriptionMeta.title}
        description={ecommerceSubscriptionMeta.description}
        breadcrumbs={ecommerceSeoBreadcrumbs()}
        faq={faqItemsToSchema(faq.items)}
      />
      <SolutionHero hero={heroForSolution} glow="seo" />

      {/* Breadcrumb + istatistikler */}
      <MarketingSection
        spacing="md"
        background="default"
        className={cn(sectionShell, "bg-[color:var(--marketing-background)]")}
      >
        <Container>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-body-muted)]">
            / {breadcrumb} /
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
            {hero.stats.map((stat) => (
              <li
                key={stat.id}
                className="rely-card rounded-shell bg-[color:var(--marketing-surface-elevated)] px-4 py-5 text-center md:px-5 md:py-6"
              >
                <p className="font-heading text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.03em] text-[color:var(--marketing-primary)]">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-sans text-[12px] leading-snug text-[color:var(--marketing-body-muted)] md:text-[13px]">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </MarketingSection>

      <EditorialSection section={sections[0]} />
      <EditorialSection section={sections[1]} variant="muted" />
      <EditorialSection section={sections[2]} />

      <InlineCtaBand />

      <EditorialSection section={sections[3]} variant="muted" />

      {/* Sektör kartları — 04. bölümün devamı */}
      <MarketingSection
        spacing="lg"
        background="default"
        className={cn(
          sectionShell,
          "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_18%,var(--marketing-background))]",
        )}
      >
        <ul className="mx-auto grid max-w-[56rem] grid-cols-1 gap-4 sm:grid-cols-2">
          {sectors.map((sector, index) => {
            const accent = getCardAccent(index);
            return (
            <li
              key={sector.id}
              className={cn(
                "rely-card flex flex-col rounded-shell bg-[color:var(--marketing-surface-elevated)] p-6 md:p-7",
                cardAccentVarClassName[accent],
              )}
            >
              <h3 className="font-heading text-[1.0625rem] font-semibold leading-tight text-[color:var(--marketing-foreground-strong)]">
                {sector.title}
              </h3>
              <p className="mt-3 text-pretty text-[14px] leading-[1.65] text-[color:var(--marketing-body-muted)]">
                {sector.description}
              </p>
            </li>
            );
          })}
        </ul>
      </MarketingSection>

      <EditorialSection section={sections[4]} />
      <EditorialSection section={sections[5]} variant="muted" />
      <EditorialSection section={sections[6]} />
      <EditorialSection section={sections[7]} variant="muted" />

      {/* FAQ */}
      <MarketingSection
        id="faq"
        spacing="none"
        background="default"
        className={cn(
          sectionShell,
          "bg-[color:var(--marketing-background)]",
          marketingFaqSectionPaddingClassName,
        )}
      >
        <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-x-20 lg:gap-y-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <InfrastructureEyebrow>{faq.eyebrow}</InfrastructureEyebrow>
            <h2
              className={cn(
                textRoleClassName["heading-xl"],
                "mt-4 text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
              )}
            >
              <HeadlineEmphasis text={faq.title} phrase="sorular" />
            </h2>
          </div>
          <Accordion
            multiple
            defaultValue={[]}
            className="w-full border-t border-[color:var(--marketing-border-subtle)]"
          >
            {faq.items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-[color:var(--marketing-border-subtle)]"
              >
                <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-[color:var(--marketing-foreground-strong)] hover:no-underline md:py-6 md:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-pretty text-[14px] leading-[1.65] text-[color:var(--marketing-body-muted)] md:pb-7">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MarketingSection>

      {/* Kapanış CTA */}
      <MarketingSection
        spacing="xl"
        background="default"
        contained={false}
        className={cn(
          sectionShell,
          "rely-product-band border-y border-[color:color-mix(in_oklab,white_12%,transparent)]",
        )}
      >
        <Container className="flex flex-col items-center py-4 text-center">
          <h2
            className={cn(
              textRoleClassName["heading-xl"],
              "max-w-[22ch] text-balance text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] text-white",
            )}
          >
            <HeadlineEmphasis
              text={closingCta.title}
              phrase="daha kârlı"
              className="text-[color:var(--marketing-soft-blue)]"
            />
          </h2>
          <p className="mt-4 max-w-[40rem] text-pretty text-[15px] leading-[1.7] text-[color:color-mix(in_oklab,white_75%,transparent)]">
            {closingCta.description}
          </p>
          <Link
            href={closingCta.cta.href}
            className={cn(
              "mt-8 inline-flex h-11 items-center justify-center rounded-shell px-7",
              "bg-white font-sans text-[15px] font-medium text-[color:var(--marketing-primary)]",
              "transition-colors hover:bg-[color:var(--marketing-soft-blue)]",
            )}
          >
            {closingCta.cta.label}
          </Link>
        </Container>
      </MarketingSection>

      {/* SEO metin bloğu */}
      <MarketingSection
        spacing="lg"
        background="default"
        className={cn(sectionShell, "bg-[color:var(--marketing-background)]")}
      >
        <article className="mx-auto max-w-[44rem]">
          <h2 className="font-heading text-[1.25rem] font-semibold leading-snug tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]">
            {seoProse.title}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {seoProse.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="text-pretty text-[14px] leading-[1.7] text-[color:var(--marketing-body-muted)]"
              >
                {p}
              </p>
            ))}
          </div>
        </article>
      </MarketingSection>
    </>
  );
}
