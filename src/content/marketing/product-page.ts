/**
 * Ürün sayfası içeriği (TR) — /urun.
 * Sunum bileşenleri `components/marketing/product/*`.
 */

import { routes } from "@/config/routes";
import {
  marketingCardStorageFaqAnswer,
  marketingPaymentProvidersFaqAnswer,
  marketingSetupReadyPhrase,
} from "@/config/marketing/copy";
import type { HomeFeatureIcon } from "@/content/marketing/home";
import type { PricingFaqItem } from "@/components/marketing/pricing/pricing-page-faq";
import { SEO_PAGE_TITLE_SEGMENTS } from "@/lib/seo/constants";

export const productPageMeta = {
  title: SEO_PAGE_TITLE_SEGMENTS.product,
  description:
    "Abonelik e-ticaret altyapısı: planlar, otomatik tahsilat, başarısız ödeme kurtarma ve müşteri portalı. Shopify, İkas ve mevcut mağazanızla uyumlu tekrarlayan gelir platformu.",
} as const;

export type ProductPillar = {
  id: string;
  icon: HomeFeatureIcon;
  title: string;
  description: string;
};

export type ProductModule = {
  id: string;
  icon: HomeFeatureIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export const productPage = {
  hero: {
    eyebrow: "E-ticaret abonelik altyapısı",
    title: "Tekrarlayan gelir oluşturmanın en kolay yolu",
    titleEmphasis: "en kolay yolu",
    subtitle:
      "RELY; Shopify, İkas ve diğer e-ticaret altyapılarına bağlanarak abonelik satışlarını, otomatik tahsilatları ve müşteri yönetimini tek platformda toplar.",
    primaryCta: { label: "Demo Talep Et", href: routes.contact },
    secondaryCta: { label: "Ürünü İncele", href: "#platform" },
    highlights: [
      "Mevcut e-ticaret altyapınızla uyumlu",
      "Tek seferlik ve abonelikli satış",
      "Otomatik tahsilat ve sipariş yönetimi",
    ],
  },
  pillars: {
    intro: {
      eyebrow: "Platform",
      title: "Abonelik operasyonunuzu uçtan uca yönetin",
      titleEmphasis: "uçtan uca",
      description:
        "Tekliften tahsilata, müşteri portalından operasyon paneline — her kart tek bir iş problemini çözer.",
    },
    items: [
      {
        id: "pillar-offers",
        icon: "workflow",
        title: "Abonelik Teklifleri",
        description:
          "Tek seferlik, tekrar eden ve ön ödemeli satış modelleri oluşturun.",
      },
      {
        id: "pillar-portal",
        icon: "sparkles",
        title: "Abonelik Yönetim Ekranı",
        description:
          "Müşteriler aboneliklerini destek ekibine ihtiyaç duymadan kendileri yönetir.",
      },
      {
        id: "pillar-billing",
        icon: "layers",
        title: "Otomatik Tahsilat",
        description: "Ödemeleri ve yenilemeleri otomatik yönetin.",
      },
      {
        id: "pillar-recovery",
        icon: "shield",
        title: "Ödeme Kurtarma",
        description: "Başarısız ödemeleri geri kazanarak kayıpları azaltın.",
      },
      {
        id: "pillar-operations",
        icon: "gauge",
        title: "Merkezi Yönetim",
        description:
          "Abonelikleri, müşterileri ve siparişleri tek panelden yönetin.",
      },
      {
        id: "pillar-integrations",
        icon: "globe",
        title: "Mevcut Altyapınızla Çalışır",
        description:
          "Kullandığınız e-ticaret altyapısına bağlanarak mevcut operasyonunuza uyum sağlar.",
      },
    ] satisfies ProductPillar[],
  },
  modules: {
    intro: {
      eyebrow: "Nasıl çalışır",
      title: "Tekrarlayan gelir için ihtiyacınız olan tüm araçlar",
      titleEmphasis: "tüm araçlar",
      description:
        "Abonelik satışlarından otomatik tahsilata, müşteri yönetiminden gelir korumaya kadar tüm operasyonlarınızı tek platformdan yönetin.",
    },
    items: [
      {
        id: "module-plans",
        icon: "workflow",
        eyebrow: "Planlar",
        title: "Abonelik tekliflerinizi dakikalar içinde oluşturun",
        description:
          "Tek seferlik satışları tekrar eden gelire dönüştürün. Farklı teslimat sıklıkları, indirimler ve abonelik modelleriyle müşterilerinize esnek seçenekler sunun.",
        points: [
          "Standart, ön ödemeli ve dinamik abonelik modelleri",
          "Haftalık, aylık veya özel teslimat periyotları",
          "Ürüne özel indirim ve abonelik kuralları",
        ],
      },
      {
        id: "module-portal",
        icon: "sparkles",
        eyebrow: "Müşteri portalı",
        title: "Müşterileriniz aboneliklerini kendileri yönetsin",
        description:
          "Teslimat tarihlerini değiştirsin, ürün eklesin, adres güncellesin veya aboneliğini duraklatsın. Destek ekibiniz üzerindeki operasyon yükünü azaltın.",
        points: [
          "Teslimat ve abonelik ayarlarını güncelleme",
          "Adres ve ödeme bilgilerini yönetme",
          "Duraklatma, atlama ve iptal işlemleri",
        ],
      },
      {
        id: "module-billing",
        icon: "layers",
        eyebrow: "Tahsilat",
        title: "Ödemeleri otomatik yönetin",
        description:
          "Yenileme tarihlerini takip edin, tahsilatları otomatik gerçekleştirin ve tekrar eden sipariş süreçlerini manuel iş yükü olmadan yönetin.",
        points: [
          "Otomatik kart tahsilatı",
          "Tekrarlayan sipariş oluşturma",
          "Yenileme ve ödeme takibi",
        ],
      },
      {
        id: "module-recovery",
        icon: "shield",
        eyebrow: "Gelir koruma",
        title: "Başarısız ödemelerden kaynaklanan kayıpları azaltın",
        description:
          "Kart sorunları nedeniyle kaybedilen abonelikleri otomatik kurtarma akışlarıyla geri kazanın.",
        points: [
          "Otomatik yeniden deneme",
          "Kart güncelleme akışları",
          "Tahsilat kurtarma senaryoları",
        ],
      },
      {
        id: "module-operations",
        icon: "gauge",
        eyebrow: "Operasyon",
        title: "Tüm abonelik operasyonunu tek panelden yönetin",
        description:
          "Müşterileri, siparişleri, tahsilatları ve abonelik performansını tek bir ekrandan takip edin.",
        points: [
          "Merkezi yönetim paneli",
          "Sipariş ve müşteri yönetimi",
          "Operasyonel görünürlük",
        ],
      },
      {
        id: "module-integrations",
        icon: "globe",
        eyebrow: "Entegrasyonlar",
        title: "Mevcut e-ticaret altyapınızla çalışır",
        description:
          "RELY mevcut mağazanıza bağlanır ve mevcut operasyonunuzu değiştirmeden abonelik katmanını ekler.",
        points: [
          "Shopify, İkas ve diğer altyapılarla uyumlu",
          "Mevcut ürün ve sipariş yapısıyla çalışır",
          "Hızlı kurulum ve canlıya geçiş",
        ],
      },
    ] satisfies ProductModule[],
  },
  integrations: {
    eyebrow: "Entegrasyonlar",
    title: "Mevcut altyapınızın üzerine kurulur",
    titleEmphasis: "üzerine kurulur",
    description:
      "RELY Subs; e-ticaret, ödeme ve bildirim sağlayıcılarınıza bağlanır. Kullandığınız altyapıyı koruyarak, API ve hazır bağlantılarla canlıya alırsınız.",
    groups: [
      {
        id: "ecommerce",
        icon: "store",
        label: "E-ticaret",
        items: [
          { name: "Shopify", note: "Örnek: API anahtarı ve bildirim bağlantısı" },
          { name: "İkas", note: "Örnek: API anahtarı" },
          { name: "Ticimax", note: "Örnek: mağaza bağlantısı" },
          { name: "Diğer altyapılar", note: "API ile özel entegrasyon" },
        ],
      },
      {
        id: "payment",
        icon: "card",
        label: "Ödeme",
        items: [
          { name: "Craftgate", note: "Kart saklama + tekrarlayan tahsilat" },
          { name: "İyzico", note: "Kart saklama + tekrarlayan tahsilat" },
          {
            name: "Diğer sanal POS'lar",
            note: "Kart saklama destekleyen tüm ödeme kuruluşları",
          },
        ],
      },
      {
        id: "messaging",
        icon: "bell",
        label: "Bildirim",
        items: [
          { name: "Mailgun", note: "Otomatik e-posta bildirimleri" },
          { name: "NetGSM", note: "SMS ile abonelik hatırlatmaları" },
        ],
      },
    ],
  },
  faq: {
    title: "Ürün hakkında",
    items: [
      {
        id: "product-faq-store",
        question: "RELY mevcut mağazamla çalışır mı?",
        answer:
          "Evet. RELY; Shopify ve İkas dâhil desteklenen e-ticaret altyapılarına bağlanır. Ürünlerinizi senkronize eder; abonelik operasyonlarını mevcut mağazanızı değiştirmeden yönetirsiniz.",
      },
      {
        id: "product-faq-setup",
        question: "Kurulum ne kadar sürer?",
        answer:
          `Hızlı Başlangıç akışıyla çoğu mağaza ${marketingSetupReadyPhrase} olur: mağazayı bağlar, planları tanımlar ve tahsilatı kurarsınız.`,
      },
      {
        id: "product-faq-mixed-sale",
        question: "Tek seferlik ve abonelik birlikte satılabilir mi?",
        answer:
          "Evet. Aynı üründe tek seferlik satın alma ile abonelik seçeneğini birlikte sunabilir; müşteri ödeme ekranında tercihini kendisi yapar.",
      },
      {
        id: "product-faq-portal",
        question: "Müşteriler aboneliklerini kendileri yönetebilir mi?",
        answer:
          "Evet. Müşteri portalından teslimat tarihini değiştirebilir, ürün ekleyebilir, adres güncelleyebilir; aboneliğini duraklatabilir veya iptal edebilir.",
      },
      {
        id: "product-faq-payments",
        question: "Hangi ödeme altyapılarıyla çalışıyor?",
        answer: marketingPaymentProvidersFaqAnswer,
      },
      {
        id: "product-faq-card",
        question: "Kart bilgileri nasıl saklanıyor?",
        answer: marketingCardStorageFaqAnswer,
      },
    ] satisfies PricingFaqItem[],
  },
} as const;

export type ProductIntegrationGroupIcon = "store" | "card" | "bell";
