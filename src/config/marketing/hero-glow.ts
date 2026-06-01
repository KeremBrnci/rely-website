/**
 * Alt sayfa hero glow presetleri — renk, konum ve yoğunluk sayfa tipine göre değişir.
 */

export type HeroGlowBlob = {
  /** Tailwind positioning (absolute). */
  position: string;
  size: string;
  color: string;
  opacity?: number;
  blur?: string;
};

export type HeroGlowPreset = {
  blobs: HeroGlowBlob[];
};

export type HeroGlowKey =
  | "default"
  | "product"
  | "pricing"
  | "contact"
  | "references"
  | "blog"
  | "seo"
  | "solution-acquire"
  | "solution-value"
  | "solution-retention"
  | "solution-reward"
  | "solution-efficiency"
  | "feature-plans"
  | "feature-bundles"
  | "feature-vouchers"
  | "feature-recovery"
  | "feature-pause"
  | "feature-billing"
  | "feature-integrations"
  | "vertical-coffee"
  | "vertical-beauty"
  | "vertical-supplements"
  | "vertical-petFood"
  | "vertical-mealKits"
  | "vertical-wellness"
  | "vertical-subscriptionBoxes"
  | "vertical-healthySnacks"
  | "vertical-grocery"
  | "vertical-specialtyPantry"
  | "vertical-householdEssentials"
  | "vertical-functionalBeverages"
  | "vertical-protein";

const primary = "color-mix(in srgb, var(--marketing-primary) 44%, transparent)";
const teal = "color-mix(in srgb, var(--marketing-accent-teal) 48%, transparent)";
const amber = "color-mix(in srgb, var(--marketing-accent-amber) 42%, transparent)";
const indigo = "color-mix(in srgb, var(--marketing-accent-indigo) 40%, transparent)";
const rose = "color-mix(in srgb, var(--marketing-accent-rose) 38%, transparent)";
const softBlue = "color-mix(in srgb, var(--marketing-soft-blue) 88%, var(--marketing-primary) 8%)";
const warm = "var(--marketing-glow-warm)";

export const heroGlowPresets: Record<HeroGlowKey, HeroGlowPreset> = {
  default: {
    blobs: [
      {
        position: "-bottom-24 -right-16",
        size: "size-[min(26rem,65vw)]",
        color: primary,
        opacity: 0.82,
      },
    ],
  },
  product: {
    blobs: [
      {
        position: "-bottom-28 -left-20",
        size: "size-[min(22rem,55vw)]",
        color: teal,
        opacity: 0.7,
      },
      {
        position: "-top-16 right-[8%]",
        size: "size-[min(18rem,42vw)]",
        color: softBlue,
        opacity: 0.55,
        blur: "blur-[64px]",
      },
    ],
  },
  pricing: {
    blobs: [
      {
        position: "-bottom-20 left-1/2 -translate-x-1/3",
        size: "size-[min(30rem,72vw)]",
        color: indigo,
        opacity: 0.65,
        blur: "blur-[80px]",
      },
      {
        position: "-top-12 -right-12",
        size: "size-[min(14rem,36vw)]",
        color: amber,
        opacity: 0.45,
        blur: "blur-[56px]",
      },
    ],
  },
  contact: {
    blobs: [
      {
        position: "-bottom-20 -left-16",
        size: "size-[min(24rem,58vw)]",
        color: amber,
        opacity: 0.62,
      },
      {
        position: "top-[12%] -right-14",
        size: "size-[min(16rem,38vw)]",
        color: teal,
        opacity: 0.5,
        blur: "blur-[64px]",
      },
    ],
  },
  references: {
    blobs: [
      {
        position: "-bottom-24 right-[5%]",
        size: "size-[min(26rem,62vw)]",
        color: rose,
        opacity: 0.58,
      },
      {
        position: "-top-10 left-[10%]",
        size: "size-[min(15rem,35vw)]",
        color: indigo,
        opacity: 0.48,
        blur: "blur-[60px]",
      },
    ],
  },
  blog: {
    blobs: [
      {
        position: "-top-20 left-1/2 -translate-x-1/2",
        size: "size-[min(28rem,70vw)]",
        color: softBlue,
        opacity: 0.6,
        blur: "blur-[76px]",
      },
    ],
  },
  seo: {
    blobs: [
      {
        position: "-bottom-28 -right-24",
        size: "size-[min(28rem,68vw)]",
        color: teal,
        opacity: 0.72,
      },
      {
        position: "top-[8%] -left-12",
        size: "size-[min(20rem,48vw)]",
        color: primary,
        opacity: 0.55,
        blur: "blur-[68px]",
      },
    ],
  },

  "solution-acquire": {
    blobs: [
      { position: "-bottom-24 -right-20", size: "size-[min(24rem,60vw)]", color: teal, opacity: 0.68 },
      { position: "top-[15%] left-[5%]", size: "size-[min(12rem,30vw)]", color: amber, opacity: 0.4, blur: "blur-[52px]" },
    ],
  },
  "solution-value": {
    blobs: [
      { position: "-bottom-20 left-1/4", size: "size-[min(26rem,64vw)]", color: indigo, opacity: 0.62 },
    ],
  },
  "solution-retention": {
    blobs: [
      { position: "-bottom-28 -right-16", size: "size-[min(26rem,62vw)]", color: primary, opacity: 0.75 },
      { position: "-top-14 right-[20%]", size: "size-[min(14rem,34vw)]", color: rose, opacity: 0.42, blur: "blur-[58px]" },
    ],
  },
  "solution-reward": {
    blobs: [
      { position: "-bottom-22 -left-20", size: "size-[min(22rem,54vw)]", color: amber, opacity: 0.65 },
      { position: "-bottom-10 -right-10", size: "size-[min(18rem,44vw)]", color: rose, opacity: 0.48, blur: "blur-[64px]" },
    ],
  },
  "solution-efficiency": {
    blobs: [
      { position: "-bottom-24 right-[12%]", size: "size-[min(25rem,60vw)]", color: teal, opacity: 0.7 },
    ],
  },

  "feature-plans": {
    blobs: [{ position: "-bottom-24 -right-18", size: "size-[min(24rem,58vw)]", color: primary, opacity: 0.78 }],
  },
  "feature-bundles": {
    blobs: [
      { position: "-bottom-26 -left-18", size: "size-[min(22rem,52vw)]", color: amber, opacity: 0.6 },
      { position: "top-[10%] -right-8", size: "size-[min(13rem,32vw)]", color: teal, opacity: 0.45, blur: "blur-[56px]" },
    ],
  },
  "feature-vouchers": {
    blobs: [{ position: "-bottom-20 right-[18%]", size: "size-[min(26rem,62vw)]", color: rose, opacity: 0.58 }],
  },
  "feature-recovery": {
    blobs: [{ position: "-bottom-24 -left-16", size: "size-[min(26rem,62vw)]", color: rose, opacity: 0.6 }],
  },
  "feature-pause": {
    blobs: [
      { position: "-bottom-26 right-[6%]", size: "size-[min(24rem,56vw)]", color: softBlue, opacity: 0.7 },
      { position: "top-[18%] -left-10", size: "size-[min(12rem,28vw)]", color: indigo, opacity: 0.4, blur: "blur-[54px]" },
    ],
  },
  "feature-billing": {
    blobs: [{ position: "-bottom-28 -right-20", size: "size-[min(27rem,64vw)]", color: teal, opacity: 0.72 }],
  },
  "feature-integrations": {
    blobs: [
      { position: "-bottom-22 left-1/2 -translate-x-1/2", size: "size-[min(30rem,72vw)]", color: indigo, opacity: 0.58, blur: "blur-[78px]" },
      { position: "-top-10 -right-16", size: "size-[min(14rem,34vw)]", color: amber, opacity: 0.42, blur: "blur-[56px]" },
    ],
  },

  "vertical-coffee": {
    blobs: [
      { position: "-bottom-28 -right-20", size: "size-[min(26rem,62vw)]", color: warm, opacity: 0.75 },
      { position: "-bottom-8 -left-12", size: "size-[min(16rem,38vw)]", color: amber, opacity: 0.5, blur: "blur-[60px]" },
    ],
  },
  "vertical-beauty": {
    blobs: [
      { position: "-bottom-24 right-[10%]", size: "size-[min(26rem,60vw)]", color: rose, opacity: 0.62 },
      { position: "top-[12%] -left-14", size: "size-[min(14rem,34vw)]", color: softBlue, opacity: 0.48, blur: "blur-[58px]" },
    ],
  },
  "vertical-supplements": {
    blobs: [
      { position: "-bottom-26 -left-18", size: "size-[min(24rem,58vw)]", color: teal, opacity: 0.68 },
      { position: "-top-14 -right-10", size: "size-[min(15rem,36vw)]", color: primary, opacity: 0.45, blur: "blur-[62px]" },
    ],
  },
  "vertical-petFood": {
    blobs: [
      { position: "-bottom-24 -right-16", size: "size-[min(25rem,58vw)]", color: amber, opacity: 0.65 },
      { position: "top-[20%] left-[6%]", size: "size-[min(13rem,32vw)]", color: teal, opacity: 0.42, blur: "blur-[54px]" },
    ],
  },
  "vertical-mealKits": {
    blobs: [
      { position: "-bottom-28 left-[8%]", size: "size-[min(28rem,66vw)]", color: amber, opacity: 0.7 },
      { position: "-bottom-12 -right-14", size: "size-[min(17rem,40vw)]", color: teal, opacity: 0.52, blur: "blur-[64px]" },
    ],
  },
  "vertical-wellness": {
    blobs: [
      { position: "-bottom-22 right-[5%]", size: "size-[min(26rem,62vw)]", color: indigo, opacity: 0.6 },
      { position: "-top-16 left-1/3", size: "size-[min(18rem,44vw)]", color: rose, opacity: 0.45, blur: "blur-[68px]" },
    ],
  },
  "vertical-subscriptionBoxes": {
    blobs: [
      { position: "-bottom-24 left-[6%]", size: "size-[min(28rem,66vw)]", color: rose, opacity: 0.62 },
      { position: "-top-14 -right-10", size: "size-[min(16rem,38vw)]", color: indigo, opacity: 0.42, blur: "blur-[64px]" },
    ],
  },
  "vertical-healthySnacks": {
    blobs: [
      { position: "-bottom-26 left-[6%]", size: "size-[min(26rem,62vw)]", color: teal, opacity: 0.65 },
      { position: "-top-12 -right-12", size: "size-[min(14rem,34vw)]", color: amber, opacity: 0.42, blur: "blur-[58px]" },
    ],
  },
  "vertical-grocery": {
    blobs: [
      { position: "-bottom-28 -right-16", size: "size-[min(28rem,66vw)]", color: amber, opacity: 0.68 },
      { position: "top-[18%] left-[4%]", size: "size-[min(13rem,32vw)]", color: teal, opacity: 0.4, blur: "blur-[54px]" },
    ],
  },
  "vertical-specialtyPantry": {
    blobs: [
      { position: "-bottom-26 left-[5%]", size: "size-[min(28rem,66vw)]", color: amber, opacity: 0.64 },
      { position: "-top-14 right-[10%]", size: "size-[min(16rem,38vw)]", color: rose, opacity: 0.4, blur: "blur-[58px]" },
    ],
  },
  "vertical-householdEssentials": {
    blobs: [
      { position: "-bottom-28 right-[6%]", size: "size-[min(28rem,66vw)]", color: indigo, opacity: 0.58 },
      { position: "-top-12 left-[8%]", size: "size-[min(14rem,34vw)]", color: softBlue, opacity: 0.42, blur: "blur-[56px]" },
    ],
  },
  "vertical-functionalBeverages": {
    blobs: [
      { position: "-bottom-24 right-[8%]", size: "size-[min(26rem,60vw)]", color: indigo, opacity: 0.58 },
      { position: "-top-14 -left-10", size: "size-[min(15rem,36vw)]", color: softBlue, opacity: 0.45, blur: "blur-[60px]" },
    ],
  },
  "vertical-protein": {
    blobs: [
      { position: "-bottom-26 -left-14", size: "size-[min(24rem,58vw)]", color: teal, opacity: 0.68 },
      { position: "-top-12 -right-8", size: "size-[min(15rem,36vw)]", color: primary, opacity: 0.44, blur: "blur-[62px]" },
    ],
  },
};

export function getSolutionHeroGlow(
  key: "acquire" | "value" | "retention" | "reward" | "efficiency",
): HeroGlowKey {
  return `solution-${key}` as HeroGlowKey;
}

export function getFeatureHeroGlow(
  key:
    | "plans"
    | "bundles"
    | "vouchers"
    | "recovery"
    | "pause"
    | "billing"
    | "integrations",
): HeroGlowKey {
  return `feature-${key}` as HeroGlowKey;
}

export function getVerticalHeroGlow(key: import("@/config/marketing/vertical-assets").SubscriptionVerticalKey): HeroGlowKey {
  return `vertical-${key}` as HeroGlowKey;
}
