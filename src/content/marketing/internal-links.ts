/**
 * Sektör ve özellik sayfaları iç linkleme — çapraz bağlantılar, blog ve platform sayfaları.
 */

import { routes } from "@/config/routes";
import { blogPostHref } from "@/content/blog/internal-links";
import { blogPostsMeta } from "@/content/blog/post-meta";
import type { FeatureContent, FeatureKey } from "@/content/marketing/features";
import { featuresContent } from "@/content/marketing/features";
import type {
  MarketingInternalLinks,
  MarketingLinkGroup,
  MarketingLinkItem,
} from "@/content/marketing/link-types";
import type {
  SubscriptionVerticalContent,
  SubscriptionVerticalKey,
  SubscriptionVerticalSlug,
} from "@/content/marketing/subscription-verticals";
import {
  subscriptionVerticalSlugToKey,
  subscriptionVerticalsContent,
} from "@/content/marketing/subscription-verticals";

const blogTitleBySlug = Object.fromEntries(blogPostsMeta.map((post) => [post.slug, post.title]));

const sectorHrefByKey: Record<SubscriptionVerticalKey, string> = {
  coffee: routes.subscriptions.coffee,
  beauty: routes.subscriptions.beauty,
  supplements: routes.subscriptions.supplements,
  petFood: routes.subscriptions.petFood,
  mealKits: routes.subscriptions.mealKits,
  wellness: routes.subscriptions.wellness,
  subscriptionBoxes: routes.subscriptions.subscriptionBoxes,
  healthySnacks: routes.subscriptions.healthySnacks,
  grocery: routes.subscriptions.grocery,
  specialtyPantry: routes.subscriptions.specialtyPantry,
  householdEssentials: routes.subscriptions.householdEssentials,
  functionalBeverages: routes.subscriptions.functionalBeverages,
  protein: routes.subscriptions.protein,
};

function sectorLabel(key: SubscriptionVerticalKey): string {
  return subscriptionVerticalsContent[key].meta.title.replace(/\s*—\s*RELY Subs\s*$/, "");
}

function featureLabel(key: FeatureKey): string {
  return featuresContent[key].meta.title.replace(/\s*—\s*RELY Subs özellikleri\s*$/, "");
}

function sectorLink(key: SubscriptionVerticalKey, description?: string): MarketingLinkItem {
  return { href: sectorHrefByKey[key], label: sectorLabel(key), description };
}

function featureLink(key: FeatureKey, description?: string): MarketingLinkItem {
  return { href: featuresContent[key].href, label: featureLabel(key), description };
}

function blogLink(slug: string, description?: string): MarketingLinkItem {
  return {
    href: blogPostHref(slug),
    label: blogTitleBySlug[slug] ?? slug,
    description,
  };
}

function standardPlatformLinks(): MarketingLinkItem[] {
  return [
    {
      href: routes.product,
      label: "Abonelik platformu",
      description: "Planlar, tahsilat, müşteri portalı ve operasyon paneli.",
    },
    {
      href: routes.pricingTr,
      label: "Fiyatlandırma",
      description: "Platform ücreti ve komisyon yapısı.",
    },
    {
      href: routes.contact,
      label: "Demo talep edin",
      description: "Ekibimizle iletişime geçin.",
    },
  ];
}

/** Sektör sayfası hero altına eklenecek doğal cümleler. */
const verticalHeroLinkSuffix: Record<SubscriptionVerticalKey, string> = {
  coffee:
    " Plan ve tahsilat için [abonelik planları](/ozellikler/abonelik-planlari) ile [otomatik tahsilat](/ozellikler/otomatik-tahsilat) özelliklerine bakın.",
  beauty:
    " İlk abone dönüşümünde [hediye çekleri](/ozellikler/hediye-cekleri) ve [abonelik planları](/ozellikler/abonelik-planlari) işinize yarar.",
  supplements:
    " Düzenli yenileme için [otomatik tahsilat](/ozellikler/otomatik-tahsilat) ve [ödeme kurtarma](/ozellikler/odeme-kurtarma) kritik.",
  petFood:
    " Tekrarlayan mama siparişlerinde [paketler](/ozellikler/paketler) ve [otomatik tahsilat](/ozellikler/otomatik-tahsilat) öne çıkar.",
  mealKits:
    " Haftalık menülerde [abonelik planları](/ozellikler/abonelik-planlari) ile [paket satışları](/ozellikler/paketler) birlikte çalışır.",
  wellness:
    " Rutin programlar için [abonelik planları](/ozellikler/abonelik-planlari) ve [duraklatma](/ozellikler/duraklatma-iptal) esnekliği.",
  subscriptionBoxes:
    " Kutu kurgusu için [paketler](/ozellikler/paketler) ve [hediye çekleri](/ozellikler/hediye-cekleri); [abonelik kutusu rehberi](/blog/subscription-box-is-modeli).",
  healthySnacks:
    " Kutu aboneliklerinde [paketler](/ozellikler/paketler) ve sıklık yönetimi [abonelik planları](/ozellikler/abonelik-planlari) ile kurulur.",
  grocery:
    " Tekrarlayan market siparişlerinde [otomatik tahsilat](/ozellikler/otomatik-tahsilat) ve [entegrasyonlar](/ozellikler/entegrasyonlar) şart.",
  specialtyPantry:
    " Gurme setler için [paketler](/ozellikler/paketler) ve [hediye çekleri](/ozellikler/hediye-cekleri); [ürün kategorileri rehberi](/blog/abonelik-urun-kategorileri).",
  householdEssentials:
    " Düzenli yenilemede [otomatik tahsilat](/ozellikler/otomatik-tahsilat) ve [ödeme kurtarma](/ozellikler/odeme-kurtarma) kritik.",
  functionalBeverages:
    " Periyodik teslimat için [abonelik planları](/ozellikler/abonelik-planlari) ve [mağaza entegrasyonu](/ozellikler/entegrasyonlar) hız kazandırır.",
  protein:
    " Sporcu besinlerinde [paketler](/ozellikler/paketler) ve abone kaybını [duraklatma yönetimi](/ozellikler/duraklatma-iptal) ile azaltın.",
};

/** Özellik sayfası hero altına eklenecek cümleler. */
const featureHeroLinkSuffix: Record<FeatureKey, string> = {
  plans:
    " Sektör örnekleri: [kahve](/sektorler/kahve) ve [takviye](/sektorler/takviye) abonelikleri. [Fiyatlandırmayı](/fiyatlandirma) inceleyin.",
  bundles:
    " [Abonelik kutuları](/sektorler/abonelik-kutulari) ve [yemek kitleri](/sektorler/yemek-kiti) paket satışından en çok faydalanır.",
  vouchers:
    " İlk 1000 abone için [blog rehberimiz](/blog/abonelik-ilk-1000-musteri) ve [demo talebi](/iletisim) bir sonraki adım.",
  storefront:
    " Self-servis yönetim [abonelik yönetimi](/ozellikler/abonelik-yonetimi) ve [bildirimler](/ozellikler/bildirimler) ile tamamlanır.",
  management:
    " Müşteri tarafı [abonelik vitrini](/ozellikler/abonelik-vitrini); operasyon [otomatik tahsilat](/ozellikler/otomatik-tahsilat) ile birleşir.",
  notifications:
    " Başarısız ödemede [ödeme kurtarma](/ozellikler/odeme-kurtarma) ve kart güncelleme akışı birlikte çalışır.",
  recovery:
    " [Başarısız ödemeler rehberi](/blog/basarisiz-odemeler-gelir-kaybi) ile birlikte [otomatik tahsilat](/ozellikler/otomatik-tahsilat) okuyun.",
  pause:
    " Elde tutma stratejisi için [abone kaybını azaltma yazısı](/blog/churn-azaltma-10-yol) ve [ödeme kurtarma](/ozellikler/odeme-kurtarma) tamamlayıcıdır.",
  billing:
    " Mağaza bağlantısı [entegrasyonlar](/ozellikler/entegrasyonlar); abonelik kurmadan önce [hazırlık rehberi](/blog/shopify-abonelik-oncesi).",
  integrations:
    " Kurulum sonrası [ürün sayfamızdaki](/urun) modüller ve [fiyatlandırma](/fiyatlandirma) netleşir.",
};

const verticalRelatedSectors: Record<SubscriptionVerticalKey, SubscriptionVerticalKey[]> = {
  coffee: ["functionalBeverages", "healthySnacks"],
  beauty: ["supplements", "subscriptionBoxes"],
  supplements: ["beauty", "protein"],
  petFood: ["grocery"],
  mealKits: ["grocery", "healthySnacks"],
  wellness: ["beauty", "supplements"],
  subscriptionBoxes: ["wellness", "beauty"],
  healthySnacks: ["protein", "subscriptionBoxes"],
  grocery: ["petFood", "mealKits"],
  specialtyPantry: ["healthySnacks", "grocery"],
  householdEssentials: ["grocery", "petFood"],
  functionalBeverages: ["coffee", "protein"],
  protein: ["supplements", "healthySnacks"],
};

const verticalRelatedFeatures: Record<SubscriptionVerticalKey, FeatureKey[]> = {
  coffee: ["plans", "billing"],
  beauty: ["vouchers", "plans"],
  supplements: ["plans", "recovery"],
  petFood: ["billing", "bundles"],
  mealKits: ["plans", "bundles"],
  wellness: ["plans", "pause"],
  subscriptionBoxes: ["bundles", "vouchers"],
  healthySnacks: ["bundles", "plans"],
  grocery: ["billing", "integrations"],
  specialtyPantry: ["bundles", "vouchers"],
  householdEssentials: ["billing", "recovery"],
  functionalBeverages: ["plans", "billing"],
  protein: ["bundles", "pause"],
};

const verticalRelatedBlog: Record<SubscriptionVerticalKey, string[]> = {
  coffee: ["kahve-takviye-kozmetik-abonelik"],
  beauty: ["kahve-takviye-kozmetik-abonelik"],
  supplements: ["abonelik-urun-kategorileri", "kahve-takviye-kozmetik-abonelik"],
  petFood: ["subscription-box-is-modeli"],
  mealKits: ["abonelik-urun-kategorileri"],
  wellness: ["abonelik-musteri-sadakati"],
  subscriptionBoxes: ["subscription-box-is-modeli"],
  healthySnacks: ["abonelik-urun-kategorileri"],
  grocery: ["subscription-commerce-d2c"],
  specialtyPantry: ["abonelik-urun-kategorileri"],
  householdEssentials: ["subscription-commerce-d2c"],
  functionalBeverages: ["kahve-takviye-kozmetik-abonelik"],
  protein: ["abonelik-urun-kategorileri"],
};

const featureRelatedFeatures: Record<FeatureKey, FeatureKey[]> = {
  plans: ["bundles", "billing"],
  bundles: ["plans", "vouchers"],
  vouchers: ["plans", "bundles"],
  storefront: ["management", "notifications"],
  management: ["storefront", "billing"],
  notifications: ["recovery", "billing"],
  recovery: ["billing", "pause"],
  pause: ["recovery", "billing"],
  billing: ["recovery", "integrations"],
  integrations: ["billing", "plans"],
};

const featureRelatedSectors: Record<FeatureKey, SubscriptionVerticalKey[]> = {
  plans: ["coffee", "supplements"],
  bundles: ["subscriptionBoxes", "mealKits"],
  vouchers: ["beauty", "subscriptionBoxes"],
  storefront: ["coffee", "beauty"],
  management: ["grocery", "petFood"],
  notifications: ["supplements", "householdEssentials"],
  recovery: ["supplements", "coffee"],
  pause: ["protein", "beauty"],
  billing: ["grocery", "householdEssentials", "petFood"],
  integrations: ["coffee", "grocery"],
};

const featureRelatedBlog: Record<FeatureKey, string[]> = {
  plans: ["tek-seferlik-satistan-tekrarlayan-gelire-gecis"],
  bundles: ["subscription-box-is-modeli"],
  vouchers: ["abonelik-ilk-1000-musteri"],
  storefront: ["shopify-abonelik-oncesi"],
  management: ["churn-azaltma-10-yol"],
  notifications: ["basarisiz-odemeler-gelir-kaybi"],
  recovery: ["basarisiz-odemeler-gelir-kaybi"],
  pause: ["churn-azaltma-10-yol"],
  billing: ["mrr-tekrarlayan-gelir-hesaplama"],
  integrations: ["shopify-abonelik-oncesi"],
};

function buildVerticalInternalLinks(key: SubscriptionVerticalKey): MarketingInternalLinks {
  const groups: MarketingLinkGroup[] = [
    { title: "Platform", items: standardPlatformLinks() },
  ];

  const sectors = verticalRelatedSectors[key] ?? [];
  if (sectors.length > 0) {
    groups.push({
      title: "İlgili sektörler",
      items: sectors.map((sectorKey) => sectorLink(sectorKey)),
    });
  }

  const features = verticalRelatedFeatures[key] ?? [];
  if (features.length > 0) {
    groups.push({
      title: "Öne çıkan özellikler",
      items: features.map((featureKey) => featureLink(featureKey)),
    });
  }

  const blogs = verticalRelatedBlog[key] ?? [];
  if (blogs.length > 0) {
    groups.push({
      title: "Blog",
      items: blogs.map((slug) => blogLink(slug)),
    });
  }

  return { groups };
}

function buildFeatureInternalLinks(key: FeatureKey): MarketingInternalLinks {
  const groups: MarketingLinkGroup[] = [
    { title: "Platform", items: standardPlatformLinks() },
  ];

  const features = featureRelatedFeatures[key] ?? [];
  if (features.length > 0) {
    groups.push({
      title: "İlgili özellikler",
      items: features.map((featureKey) => featureLink(featureKey)),
    });
  }

  const sectors = featureRelatedSectors[key] ?? [];
  if (sectors.length > 0) {
    groups.push({
      title: "Örnek sektörler",
      items: sectors.map((sectorKey) => sectorLink(sectorKey)),
    });
  }

  const blogs = featureRelatedBlog[key] ?? [];
  if (blogs.length > 0) {
    groups.push({
      title: "Blog",
      items: blogs.map((slug) => blogLink(slug)),
    });
  }

  return { groups };
}

export type EnrichedSubscriptionVerticalContent = SubscriptionVerticalContent & {
  internalLinks: MarketingInternalLinks;
};

export type EnrichedFeatureContent = FeatureContent & {
  internalLinks: MarketingInternalLinks;
};

export function enrichVerticalContent(
  content: SubscriptionVerticalContent,
  slug: SubscriptionVerticalSlug,
): EnrichedSubscriptionVerticalContent {
  const key = subscriptionVerticalSlugToKey[slug];
  const heroSuffix = verticalHeroLinkSuffix[key] ?? "";

  return {
    ...content,
    hero: {
      ...content.hero,
      subtitle: `${content.hero.subtitle}${heroSuffix}`,
    },
    whyUsed: {
      ...content.whyUsed,
      solution: appendSolutionLink(content.whyUsed.solution, key, "vertical"),
    },
    internalLinks: buildVerticalInternalLinks(key),
  };
}

export function enrichFeatureContent(
  content: FeatureContent,
  feature: FeatureKey,
): EnrichedFeatureContent {
  const heroSuffix = featureHeroLinkSuffix[feature] ?? "";

  return {
    ...content,
    hero: {
      ...content.hero,
      subtitle: `${content.hero.subtitle}${heroSuffix}`,
    },
    outcome: {
      ...content.outcome,
      solution: appendSolutionLink(content.outcome.solution, feature, "feature"),
    },
    internalLinks: buildFeatureInternalLinks(feature),
  };
}

function appendSolutionLink(
  solution: string,
  key: SubscriptionVerticalKey | FeatureKey,
  kind: "vertical" | "feature",
): string {
  if (kind === "vertical") {
    const verticalKey = key as SubscriptionVerticalKey;
    const productPhrase =
      verticalKey === "grocery" ||
      verticalKey === "householdEssentials" ||
      verticalKey === "petFood"
        ? " [Ürün sayfamızda](/urun) operasyon modüllerini inceleyin."
        : " Detaylı kurulum için [iletişim](/iletisim) formundan demo talep edin.";
    return `${solution}${productPhrase}`;
  }

  const featureKey = key as FeatureKey;
  if (
    featureKey === "integrations" ||
    featureKey === "billing" ||
    featureKey === "storefront" ||
    featureKey === "management"
  ) {
    return `${solution} Tüm modüller [abonelik platformu](/urun) sayfasında özetlenir.`;
  }
  return `${solution} [Fiyatlandırma](/fiyatlandirma) ve [ürün](/urun) sayfalarından devam edin.`;
}

export function getFeatureContent(feature: FeatureKey): EnrichedFeatureContent {
  return enrichFeatureContent(featuresContent[feature], feature);
}
