import Link from "next/link";
import { Check, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/marketing/contact/contact-form";
import { SolutionHero } from "@/components/marketing/solutions/solution-hero";
import { VerticalPageFaq } from "@/components/marketing/verticals/vertical-page-faq";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { PageSeo } from "@/components/seo/page-seo";
import { routes } from "@/config/routes";
import { contactPageContent, contactPageMeta } from "@/content/marketing/contact-page";
import { contactBreadcrumbs, faqItemsToSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function ContactPage() {
  const { hero, sidebar, faq } = contactPageContent;

  return (
    <>
      <PageSeo
        pathname={routes.contact}
        titleSegment={contactPageMeta.title}
        description={contactPageMeta.description}
        variant="contact"
        breadcrumbs={contactBreadcrumbs()}
        faq={faqItemsToSchema(faq.items)}
      />
      <SolutionHero hero={hero} glow="contact" />

      <MarketingSection
        id="iletisim-form"
        spacing="lg"
        background="default"
        className={cn(
          "scroll-mt-24 border-b border-[color:var(--marketing-section-divider)]",
          "bg-[color:var(--marketing-background)]",
        )}
      >
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_22rem]">
            <ContactForm />

            <aside className="flex flex-col gap-6 lg:pt-2">
              <div>
                <InfrastructureEyebrow>{sidebar.title}</InfrastructureEyebrow>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {sidebar.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-[color:var(--marketing-body-muted)]"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-[color:var(--marketing-primary)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[14px] leading-[1.65] text-[color:var(--marketing-body-muted)]">
                  {sidebar.responseNote}
                </p>
              </div>

              <div className="rely-card rounded-shell bg-[color:var(--marketing-surface-elevated)] p-6">
                <div className="flex gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-shell bg-[color:var(--marketing-soft-blue)] text-[color:var(--marketing-primary)]">
                    <Mail className="size-[1.1rem]" aria-hidden />
                  </span>
                  <div>
                    <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[color:var(--marketing-body-muted)]">
                      {sidebar.email.label}
                    </p>
                    <Link
                      href={sidebar.email.href}
                      className="mt-1 block font-heading text-[1rem] font-semibold text-[color:var(--marketing-primary)] transition-colors hover:text-[color:var(--marketing-primary-hover)]"
                    >
                      {sidebar.email.value}
                    </Link>
                  </div>
                </div>

                <div className="mt-6 flex gap-3 border-t border-[color:var(--marketing-border-subtle)] pt-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-shell bg-[color:var(--marketing-soft-blue)] text-[color:var(--marketing-primary)]">
                    <MapPin className="size-[1.1rem]" aria-hidden />
                  </span>
                  <div>
                    <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[color:var(--marketing-body-muted)]">
                      {sidebar.address.label}
                    </p>
                    {sidebar.address.lines.map((line) => (
                      <p
                        key={line}
                        className="mt-1 text-[14px] leading-[1.55] text-[color:var(--marketing-body-readable)]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </MarketingSection>

      <VerticalPageFaq title={faq.title} items={faq.items} />
    </>
  );
}
