/**
 * Ana sayfa içeriği (TR). Sunum bileşenleri `components/marketing/home/*`.
 */

import { routes } from "@/config/routes";
import { SEO_PAGE_TITLE_SEGMENTS } from "@/lib/seo/constants";

export const homeMeta = {
  title: SEO_PAGE_TITLE_SEGMENTS.home,
  description:
    "RELY Subs, mevcut e-ticaret altyapınıza abonelik e-ticaret katmanı ekler: planlar, otomatik tahsilat, ödeme kurtarma ve müşteri portalı tek panelde. Tekrarlayan gelir oluşturun.",
} as const;

export const homeHero = {
  eyebrow: "E-ticaret abonelik altyapısı",
  title: "Mevcut mağazanıza abonelik modeli ekleyin. Tekrarlayan gelir oluşturun.",
  titleEmphasis: "Tekrarlayan gelir",
  subtitle:
    "RELY, mevcut e-ticaret altyapınızı değiştirmeden üzerine abonelik katmanı ekler; abonelik planları, otomatik tahsilat ve yenilemeleri tek panelden yönetirsiniz.",
  primaryCta: { label: "Demo talep et", href: routes.pricingTr },
  secondaryCta: { label: "Ürünü incele", href: routes.product },
} as const;

export const homeHeroMedia: { src: string; alt: string } | null = null;

export type HomeTrustedBrand = {
  id: string;
  name: string;
  href: string;
  src: string;
  /** Servet = 1 — optik ağırlık ölçeği (en-boy oranı korunur). */
  opticalScale: number;
  /** 1 = varsayılan; <1 yumuşatır (Netflix gibi yoğun wordmark). */
  opticalOpacity?: number;
  /** İnce optik baseline kaydırması (ör. "0.125rem", "-1px"). */
  opticalTranslateY?: string;
  /** İsteğe bağlı: geniş/wordmark logolar için slot genişliği. */
  slotMaxWidth?: string;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
};

export const homeTrustedBrands: {
  title: string;
  brands: HomeTrustedBrand[];
} = {
  title: "Abonelik modeliyle büyüyen markalar",
  brands: [
    {
      id: "portakalbahcem",
      name: "Portakal Bahçem",
      href: "https://www.portakalbahcem.com/",
      src: "/images/logos/portakalbahcem.png",
      opticalScale: 0.97,
      opticalTranslateY: "0.0625rem",
      intrinsicWidth: 306,
      intrinsicHeight: 147,
    },
    {
      id: "servet",
      name: "Servet",
      href: "https://servet.com/",
      src: "/images/logos/servet.png",
      opticalScale: 1,
      intrinsicWidth: 300,
      intrinsicHeight: 117,
    },
    {
      id: "hasanbey",
      name: "Hasanbey Çiftliği",
      href: "https://hasanbey.com/",
      src: "/images/logos/hasanbey-v2.png",
      opticalScale: 1.12,
      opticalTranslateY: "0",
      intrinsicWidth: 896,
      intrinsicHeight: 256,
    },
    {
      id: "silva",
      name: "Silva",
      href: "https://silva.com.tr/",
      src: "/images/logos/silva-v2.png",
      opticalScale: 0.86,
      opticalTranslateY: "0.03125rem",
      intrinsicWidth: 852,
      intrinsicHeight: 385,
    },
    {
      id: "egricayir",
      name: "Eğriçayır",
      href: "https://www.egricayir.com/",
      src: "/images/logos/egricayir.png",
      opticalScale: 0.96,
      opticalTranslateY: "0.03125rem",
      intrinsicWidth: 162,
      intrinsicHeight: 37,
    },
  ],
};

export type HomeFeatureIcon =
  | "layers"
  | "gauge"
  | "shield"
  | "workflow"
  | "globe"
  | "sparkles";

export type HomeFeatureEntry = {
  id: string;
  title: string;
  description: string;
  icon: HomeFeatureIcon;
};

export const homeFaq = {
  intro: {
    eyebrow: "SSS",
    title: "Sık sorulan sorular",
    description:
      "RELY'nin mağazanızla nasıl çalıştığını, abonelik operasyonunu ve tahsilatı kısa cevaplarla özetledik. Daha fazlası için ekibimizle görüşebilirsiniz.",
    align: "center" as const,
  },
  items: [
    {
      id: "faq-store",
      question: "RELY mevcut mağazamla çalışır mı?",
      answer:
        "Evet. RELY; Shopify ve İkas dâhil desteklenen e-ticaret altyapılarına bağlanır. Ürünlerinizi senkronize eder ve abonelik operasyonlarını ayrı bir panel üzerinden yönetmenizi sağlar.",
    },
    {
      id: "faq-theme",
      question: "Mağazamı veya temamı değiştirmem gerekir mi?",
      answer:
        "Hayır. Mevcut mağazanızı kullanmaya devam edersiniz. RELY abonelik katmanını mevcut yapınıza ekler ve mevcut operasyonunuzu bozmaz.",
    },
    {
      id: "faq-storefront",
      question: "Abonelik sitesi ayrı mı çalışıyor?",
      answer:
        "Evet. Abonelik deneyimi markanıza özel subdomain veya özel domain üzerinde çalışabilir. Böylece abonelik müşterilerinizi ayrı bir deneyimle yönetebilirsiniz.",
    },
    {
      id: "faq-only-subscription",
      question: "Sadece abonelik mi satabilirim?",
      answer:
        "Hayır. İsterseniz tek seferlik satın alma ve abonelik seçeneklerini aynı ürün üzerinde birlikte sunabilirsiniz.",
    },
    {
      id: "faq-self-service",
      question: "Müşteriler aboneliklerini yönetebilir mi?",
      answer:
        "Evet. Müşteriler teslimat tarihlerini değiştirebilir, ürün ekleyebilir, aboneliklerini duraklatabilir veya iptal edebilir.",
    },
    {
      id: "faq-failed-payments",
      question: "Başarısız ödemelerde ne olur?",
      answer:
        "RELY otomatik yeniden deneme, kart güncelleme ve ödeme kurtarma akışlarıyla başarısız tahsilatları geri kazanmaya yardımcı olur.",
    },
  ],
};

