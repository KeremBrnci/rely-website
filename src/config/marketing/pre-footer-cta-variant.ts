import { routes } from "@/config/routes";
import { preFooterCta } from "@/content/marketing/pre-footer-cta";

export type PreFooterCtaVariantKey =
  | "home"
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
  | "vertical-protein"
  | "default";

export type PreFooterGlowBlob = {
  position: string;
  size: string;
  color: string;
  opacity?: number;
  blur?: string;
};

export type PreFooterCtaCopy = {
  title: string;
  titleEmphasis: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export type PreFooterCtaVariantPreset = {
  /** `data-variant` — CSS surface + emphasis overrides */
  key: PreFooterCtaVariantKey;
  glows: PreFooterGlowBlob[];
  /** Metin yoksa global `preFooterCta` kullanılır. */
  copy?: Partial<PreFooterCtaCopy>;
};

const primaryGlow = "color-mix(in srgb, var(--marketing-primary) 55%, transparent)";
const tealGlow = "color-mix(in srgb, var(--marketing-accent-teal) 50%, transparent)";
const amberGlow = "color-mix(in srgb, var(--marketing-accent-amber) 48%, transparent)";
const indigoGlow = "color-mix(in srgb, var(--marketing-accent-indigo) 46%, transparent)";
const roseGlow = "color-mix(in srgb, var(--marketing-accent-rose) 44%, transparent)";
const softBlueGlow = "color-mix(in srgb, var(--marketing-soft-blue) 38%, transparent)";

function blob(
  position: string,
  size: string,
  color: string,
  opacity = 0.55,
  blur = "blur-[80px]",
): PreFooterGlowBlob {
  return { position, size, color, opacity, blur };
}

export const preFooterCtaVariants: Record<PreFooterCtaVariantKey, PreFooterCtaVariantPreset> = {
  home: {
    key: "home",
    glows: [
      blob("-bottom-32 left-1/2 -translate-x-1/2", "size-[min(36rem,90vw)]", primaryGlow, 0.42),
      blob("top-[8%] -right-20", "size-[min(18rem,42vw)]", softBlueGlow, 0.35, "blur-[64px]"),
    ],
  },
  default: {
    key: "default",
    glows: [
      blob("-bottom-28 left-[12%]", "size-[min(28rem,68vw)]", primaryGlow, 0.38),
      blob("-top-20 -right-16", "size-[min(16rem,38vw)]", tealGlow, 0.32, "blur-[58px]"),
    ],
  },
  product: {
    key: "product",
    glows: [
      blob("-bottom-24 right-[8%]", "size-[min(32rem,78vw)]", primaryGlow, 0.5),
      blob("top-[12%] -left-24", "size-[min(20rem,48vw)]", softBlueGlow, 0.4),
    ],
    copy: {
      subtitle:
        "Planları, paketleri ve abonelik sitesini tek yerden yönetin. Ücretsiz deneyin, kurulumu birlikte tamamlayalım.",
    },
  },
  pricing: {
    key: "pricing",
    glows: [
      blob("-bottom-36 left-1/2 -translate-x-1/2", "size-[min(40rem,95vw)]", tealGlow, 0.48),
      blob("-top-16 right-[10%]", "size-[min(14rem,34vw)]", softBlueGlow, 0.38, "blur-[56px]"),
    ],
    copy: {
      subtitle:
        "Başlangıç veya kurumsal — size uygun planı seçin. Ücretsiz deneyin, ölçeklendikçe aynı platformda kalın.",
      primary: { label: "Ücretsiz dene", href: routes.pricingTr },
    },
  },
  contact: {
    key: "contact",
    glows: [
      blob("-bottom-30 left-[6%]", "size-[min(30rem,72vw)]", tealGlow, 0.52),
      blob("top-[18%] -right-12", "size-[min(17rem,40vw)]", amberGlow, 0.36, "blur-[62px]"),
    ],
    copy: {
      subtitle:
        "Demo veya teknik görüşme planlayın. Ekibimiz kurulum ve entegrasyon sorularınızda yanınızda.",
      primary: { label: "Ücretsiz dene", href: routes.pricingTr },
      secondary: { label: "Ürünü incele", href: routes.product },
    },
  },
  references: {
    key: "references",
    glows: [
      blob("-bottom-26 right-[15%]", "size-[min(28rem,66vw)]", indigoGlow, 0.45),
      blob("-top-14 left-[8%]", "size-[min(15rem,36vw)]", primaryGlow, 0.35, "blur-[60px]"),
    ],
  },
  blog: {
    key: "blog",
    glows: [
      blob("-bottom-28 left-[20%]", "size-[min(26rem,62vw)]", indigoGlow, 0.4),
      blob("top-[10%] -right-20", "size-[min(18rem,44vw)]", roseGlow, 0.34, "blur-[68px]"),
    ],
    copy: {
      subtitle:
        "Abonelik operasyonları hakkında yazılarımızı okuyun; hazır olduğunuzda platformu ücretsiz deneyin.",
    },
  },
  seo: {
    key: "seo",
    glows: [
      blob("-bottom-32 right-[5%]", "size-[min(34rem,82vw)]", primaryGlow, 0.46),
      blob("top-[14%] left-[4%]", "size-[min(16rem,38vw)]", tealGlow, 0.38),
    ],
    copy: {
      subtitle:
        "E-ticaret abonelik altyapınızı tek platformda toplayın. Ücretsiz deneyin, canlıya birlikte çıkalım.",
    },
  },
  "solution-acquire": {
    key: "solution-acquire",
    glows: [
      blob("-bottom-28 left-[10%]", "size-[min(30rem,70vw)]", tealGlow, 0.5),
      blob("-top-18 -right-14", "size-[min(16rem,38vw)]", primaryGlow, 0.38),
    ],
    copy: {
      title: "Yeni aboneler kazanırken birlikte büyüyelim",
      titleEmphasis: "birlikte büyüyelim",
      subtitle: "Dönüşüm hunisini ve ilk sipariş deneyimini güçlendirin; büyümeyi birlikte ölçelim.",
    },
  },
  "solution-value": {
    key: "solution-value",
    glows: [
      blob("-bottom-30 right-[8%]", "size-[min(32rem,74vw)]", amberGlow, 0.48),
      blob("top-[16%] left-[6%]", "size-[min(14rem,34vw)]", tealGlow, 0.36),
    ],
    copy: {
      title: "Abone değerini birlikte yükseltelim",
      titleEmphasis: "birlikte yükseltelim",
      subtitle: "AOV ve çapraz satışı artırın; segment bazlı teklifleri tek panelden yönetin.",
    },
  },
  "solution-retention": {
    key: "solution-retention",
    glows: [
      blob("-bottom-32 left-1/2 -translate-x-1/2", "size-[min(34rem,80vw)]", primaryGlow, 0.44),
      blob("-top-20 -right-10", "size-[min(18rem,42vw)]", roseGlow, 0.38),
    ],
    copy: {
      title: "Aboneleri elde tutarken birlikte büyüyelim",
      titleEmphasis: "birlikte büyüyelim",
      subtitle: "Abone kaybı ve iptal nedenlerini görün; kurtarma akışlarıyla aboneleri geri kazanın.",
    },
  },
  "solution-reward": {
    key: "solution-reward",
    glows: [
      blob("-bottom-26 -right-12", "size-[min(28rem,66vw)]", roseGlow, 0.46),
      blob("top-[12%] left-[12%]", "size-[min(16rem,38vw)]", amberGlow, 0.4),
    ],
    copy: {
      title: "Sadakati ödüllendirirken birlikte büyüyelim",
      titleEmphasis: "birlikte büyüyelim",
      subtitle: "Sadakat ve hediye çekleriyle tekrar siparişi artırın; kampanyaları tek yerden yönetin.",
    },
  },
  "solution-efficiency": {
    key: "solution-efficiency",
    glows: [
      blob("-bottom-28 left-[4%]", "size-[min(30rem,72vw)]", indigoGlow, 0.45),
      blob("top-[20%] -right-16", "size-[min(17rem,40vw)]", tealGlow, 0.42),
    ],
    copy: {
      title: "Operasyon verimliliğini birlikte artıralım",
      titleEmphasis: "birlikte artıralım",
      subtitle: "Operasyon ekibinin yükünü azaltın; otomasyon ve entegrasyonlarla ölçeklenin.",
    },
  },
  "feature-plans": {
    key: "feature-plans",
    glows: [blob("-bottom-28 right-[6%]", "size-[min(30rem,72vw)]", primaryGlow, 0.46)],
  },
  "feature-bundles": {
    key: "feature-bundles",
    glows: [blob("-bottom-26 left-[8%]", "size-[min(28rem,68vw)]", tealGlow, 0.48)],
  },
  "feature-vouchers": {
    key: "feature-vouchers",
    glows: [blob("-bottom-30 right-[10%]", "size-[min(32rem,76vw)]", roseGlow, 0.44)],
  },
  "feature-recovery": {
    key: "feature-recovery",
    glows: [blob("-bottom-28 left-[14%]", "size-[min(30rem,72vw)]", amberGlow, 0.46)],
  },
  "feature-pause": {
    key: "feature-pause",
    glows: [blob("-bottom-30 right-[12%]", "size-[min(28rem,68vw)]", softBlueGlow, 0.44)],
  },
  "feature-billing": {
    key: "feature-billing",
    glows: [blob("-bottom-32 left-[6%]", "size-[min(34rem,80vw)]", primaryGlow, 0.48)],
  },
  "feature-integrations": {
    key: "feature-integrations",
    glows: [blob("-bottom-26 right-[8%]", "size-[min(28rem,66vw)]", indigoGlow, 0.46)],
  },
  "vertical-coffee": {
    key: "vertical-coffee",
    glows: [
      blob("-bottom-28 -right-14", "size-[min(30rem,72vw)]", amberGlow, 0.5),
      blob("top-[14%] left-[8%]", "size-[min(14rem,34vw)]", primaryGlow, 0.36),
    ],
    copy: {
      title: "Kahve aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Tekrarlayan kahve siparişlerini otomatikleştirin; markanıza özel planlarla büyüyün.",
    },
  },
  "vertical-beauty": {
    key: "vertical-beauty",
    glows: [blob("-bottom-30 left-[10%]", "size-[min(32rem,76vw)]", roseGlow, 0.48)],
    copy: {
      title: "Güzellik aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Rutin kutuları ve yenileme döngülerini tek panelden yönetin.",
    },
  },
  "vertical-supplements": {
    key: "vertical-supplements",
    glows: [blob("-bottom-28 right-[6%]", "size-[min(30rem,74vw)]", tealGlow, 0.5)],
    copy: {
      title: "Takviye aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Periyot ve dozaj planlarını netleştirin; tahsilat ve kargo akışını otomatikleştirin.",
    },
  },
  "vertical-petFood": {
    key: "vertical-petFood",
    glows: [blob("-bottom-26 -right-10", "size-[min(28rem,68vw)]", amberGlow, 0.48)],
    copy: {
      title: "Pet aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Mama ve aksesuar tekrar siparişlerini öngörülebilir gelire dönüştürün.",
    },
  },
  "vertical-mealKits": {
    key: "vertical-mealKits",
    glows: [blob("-bottom-32 left-[4%]", "size-[min(34rem,82vw)]", amberGlow, 0.52)],
    copy: {
      title: "Yemek kutusu aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Haftalık menü ve teslimat slotlarını esnek planlarla yönetin.",
    },
  },
  "vertical-wellness": {
    key: "vertical-wellness",
    glows: [
      blob("-bottom-28 right-[8%]", "size-[min(30rem,72vw)]", indigoGlow, 0.46),
      blob("-top-16 left-1/4", "size-[min(16rem,38vw)]", roseGlow, 0.36),
    ],
    copy: {
      title: "Wellness aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Rutin programları abonelik modeline taşıyın; tahsilat ve teslimatı otomatikleştirin.",
    },
  },
  "vertical-subscriptionBoxes": {
    key: "vertical-subscriptionBoxes",
    glows: [
      blob("-bottom-24 left-[6%]", "size-[min(30rem,72vw)]", roseGlow, 0.48),
      blob("-top-14 -right-10", "size-[min(16rem,38vw)]", indigoGlow, 0.36),
    ],
    copy: {
      title: "Abonelik kutunuzu birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Aylık keşif kutularında plan, kürasyon ve tahsilatı tek panelden yönetin.",
    },
  },
  "vertical-healthySnacks": {
    key: "vertical-healthySnacks",
    glows: [blob("-bottom-28 right-[6%]", "size-[min(30rem,74vw)]", tealGlow, 0.5)],
    copy: {
      title: "Atıştırmalık aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Kutu ve bar aboneliklerini planlayın; tahsilat ve teslimatı otomatikleştirin.",
    },
  },
  "vertical-grocery": {
    key: "vertical-grocery",
    glows: [blob("-bottom-32 left-[4%]", "size-[min(34rem,82vw)]", amberGlow, 0.52)],
    copy: {
      title: "Market aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Temel sepet ve yenileme planlarını tek panelden yönetin.",
    },
  },
  "vertical-specialtyPantry": {
    key: "vertical-specialtyPantry",
    glows: [
      blob("-bottom-28 left-[5%]", "size-[min(32rem,78vw)]", amberGlow, 0.5),
      blob("-top-14 right-[8%]", "size-[min(16rem,38vw)]", roseGlow, 0.36),
    ],
    copy: {
      title: "Özel tüketim aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Tahin, pekmez ve kuruyemiş setlerini planlayın; tahsilat ve teslimatı otomatikleştirin.",
    },
  },
  "vertical-householdEssentials": {
    key: "vertical-householdEssentials",
    glows: [blob("-bottom-32 right-[4%]", "size-[min(34rem,82vw)]", indigoGlow, 0.5)],
    copy: {
      title: "Ev tüketim aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Deterjan ve temizlik paketlerinde düzenli yenilemeyi otomatikleştirin.",
    },
  },
  "vertical-functionalBeverages": {
    key: "vertical-functionalBeverages",
    glows: [blob("-bottom-28 right-[8%]", "size-[min(30rem,72vw)]", indigoGlow, 0.46)],
    copy: {
      title: "İçecek aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Bitki çayı, meyve suyu ve sağlıklı içecek planlarını markanıza göre kurgulayın.",
    },
  },
  "vertical-protein": {
    key: "vertical-protein",
    glows: [blob("-bottom-28 right-[6%]", "size-[min(30rem,74vw)]", tealGlow, 0.5)],
    copy: {
      title: "Protein aboneliğinizi birlikte büyütelim",
      titleEmphasis: "birlikte büyütelim",
      subtitle: "Gramaj, aroma ve program paketlerini netleştirin; yenilemeyi otomatikleştirin.",
    },
  },
};

const solutionPathToKey: Record<string, PreFooterCtaVariantKey> = {
  [routes.solutions.acquire]: "solution-acquire",
  [routes.solutions.value]: "solution-value",
  [routes.solutions.retention]: "solution-retention",
  [routes.solutions.reward]: "solution-reward",
  [routes.solutions.efficiency]: "solution-efficiency",
};

const featurePathToKey: Record<string, PreFooterCtaVariantKey> = {
  [routes.features.plans]: "feature-plans",
  [routes.features.bundles]: "feature-bundles",
  [routes.features.vouchers]: "feature-vouchers",
  [routes.features.recovery]: "feature-recovery",
  [routes.features.pause]: "feature-pause",
  [routes.features.billing]: "feature-billing",
  [routes.features.integrations]: "feature-integrations",
};

const verticalPathToKey: Record<string, PreFooterCtaVariantKey> = {
  [routes.subscriptions.coffee]: "vertical-coffee",
  [routes.subscriptions.beauty]: "vertical-beauty",
  [routes.subscriptions.supplements]: "vertical-supplements",
  [routes.subscriptions.petFood]: "vertical-petFood",
  [routes.subscriptions.mealKits]: "vertical-mealKits",
  [routes.subscriptions.wellness]: "vertical-wellness",
  [routes.subscriptions.subscriptionBoxes]: "vertical-subscriptionBoxes",
  [routes.subscriptions.healthySnacks]: "vertical-healthySnacks",
  [routes.subscriptions.grocery]: "vertical-grocery",
  [routes.subscriptions.specialtyPantry]: "vertical-specialtyPantry",
  [routes.subscriptions.householdEssentials]: "vertical-householdEssentials",
  [routes.subscriptions.functionalBeverages]: "vertical-functionalBeverages",
  [routes.subscriptions.protein]: "vertical-protein",
};

export function resolvePreFooterCtaVariant(pathname: string): PreFooterCtaVariantPreset {
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (normalized === routes.home) return preFooterCtaVariants.home;
  if (normalized === routes.product) return preFooterCtaVariants.product;
  if (normalized === routes.pricingTr || normalized === routes.pricingLegacy) {
    return preFooterCtaVariants.pricing;
  }
  if (normalized === routes.contact) return preFooterCtaVariants.contact;
  if (normalized === routes.references) return preFooterCtaVariants.references;
  if (normalized === routes.blog) return preFooterCtaVariants.blog;
  if (normalized === routes.ecommerceSubscription) return preFooterCtaVariants.seo;

  const solution = solutionPathToKey[normalized];
  if (solution) return preFooterCtaVariants[solution];

  const feature = featurePathToKey[normalized];
  if (feature) return preFooterCtaVariants[feature];

  const vertical = verticalPathToKey[normalized];
  if (vertical) return preFooterCtaVariants[vertical];

  return preFooterCtaVariants.default;
}

export function mergePreFooterCopy(
  preset: PreFooterCtaVariantPreset,
): PreFooterCtaCopy {
  const base = preFooterCta;
  const override = preset.copy ?? {};
  return {
    title: override.title ?? base.title,
    titleEmphasis: override.titleEmphasis ?? base.titleEmphasis,
    subtitle: override.subtitle ?? base.subtitle,
    primary: { ...base.primary, ...override.primary },
    secondary: { ...base.secondary, ...override.secondary },
  };
}
