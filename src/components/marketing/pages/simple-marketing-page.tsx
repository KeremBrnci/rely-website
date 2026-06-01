import { Container } from "@/components/layout/container";
import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { cn } from "@/lib/utils";

export type SimpleMarketingPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

/** Tek kolon metin sayfaları — iletişim, blog girişi vb. */
export function SimpleMarketingPage({
  eyebrow,
  title,
  description,
  className,
}: SimpleMarketingPageProps) {
  return (
    <MarketingSection
      spacing="xl"
      background="muted"
      className={cn(
        "border-b border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)]",
        className,
      )}
    >
      <Container className="max-w-3xl">
        {eyebrow ? <InfrastructureEyebrow className="mb-1">{eyebrow}</InfrastructureEyebrow> : null}
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:mt-5 md:text-4xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-4 text-pretty text-lg leading-relaxed">{description}</p>
      </Container>
    </MarketingSection>
  );
}
