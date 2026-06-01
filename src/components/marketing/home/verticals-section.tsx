import type { CSSProperties, ComponentType } from "react";

import Link from "next/link";
import {
  Apple,
  Coffee,
  CupSoda,
  Dumbbell,
  HeartPulse,
  PawPrint,
  Pill,
  ShoppingBasket,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import { InfrastructureEyebrow } from "@/components/sections/headings/infrastructure-eyebrow";
import { MarketingSection } from "@/components/sections/shell/marketing-section";
import { cardAccentColorVar, getCardAccent } from "@/config/marketing/card-accents";
import { homeMarketingSectionShell } from "@/config/marketing/home-section-shell";
import {
  homeVerticals,
  type HomeVertical,
  type HomeVerticalIcon,
} from "@/content/marketing/home-verticals";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

const verticalIcon: Record<HomeVerticalIcon, ComponentType<{ className?: string }>> = {
  coffee: Coffee,
  beauty: Sparkles,
  supplements: Pill,
  petFood: PawPrint,
  food: UtensilsCrossed,
  wellness: HeartPulse,
  snacks: Apple,
  grocery: ShoppingBasket,
  beverage: CupSoda,
  protein: Dumbbell,
};

function VerticalCard({ item, index }: { item: HomeVertical; index: number }) {
  const Icon = verticalIcon[item.icon];
  const accent = cardAccentColorVar[getCardAccent(index)];

  const fallbackBackground = `radial-gradient(125% 100% at 78% 8%, color-mix(in oklab, ${accent} 42%, transparent), transparent 62%), linear-gradient(155deg, #11314a 0%, #0a1f30 100%)`;

  const inner = (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 ease-out",
          "group-hover:scale-[1.05]",
        )}
        style={
          {
            backgroundImage: item.image
              ? `url(${item.image})`
              : fallbackBackground,
          } as CSSProperties
        }
      />
      <span
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#06182a]/90 via-[#06182a]/35 to-transparent"
      />
      <Icon className="pointer-events-none absolute right-4 top-4 z-[2] size-9 text-white/15 md:size-10" />
      <div className="relative z-[2] p-5 md:p-6">
        <h3 className="font-heading text-[1.0625rem] font-semibold leading-tight tracking-[var(--tracking-editorial)] text-white md:text-[1.1875rem]">
          {item.name}
        </h3>
        <p className="mt-1.5 max-w-[34ch] text-pretty text-[13px] leading-snug text-white/75">
          {item.stat}
        </p>
      </div>
    </>
  );

  const baseClassName = cn(
    "group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl",
    "ring-1 ring-[color:var(--marketing-border-subtle)] transition-[box-shadow,outline-color]",
    "outline outline-1 outline-transparent",
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          baseClassName,
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]",
          "hover:outline-[color:color-mix(in_oklab,var(--accent)_55%,transparent)]",
        )}
        style={{ "--accent": accent } as CSSProperties}
      >
        {inner}
      </Link>
    );
  }

  return <div className={baseClassName}>{inner}</div>;
}

export function VerticalsSection() {
  const { intro, items } = homeVerticals;

  return (
    <MarketingSection id="verticals" {...homeMarketingSectionShell.verticals}>
      <div className="mb-7 flex flex-col gap-2.5 md:mb-10 md:gap-3">
        <InfrastructureEyebrow>{intro.eyebrow}</InfrastructureEyebrow>
        <h2
          className={cn(
            textRoleClassName["heading-xl"],
            "text-balance text-[clamp(1.625rem,2.1vw,2.125rem)] leading-[1.14]",
          )}
        >
          {intro.title}
        </h2>
        <p className="max-w-[44rem] text-pretty text-[15px] leading-[1.7] tracking-[-0.01em] text-[color:var(--marketing-body-muted)] md:text-base">
          {intro.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <VerticalCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </MarketingSection>
  );
}
