/**
 * Fiyatlandırma sayfası içeriği (TR) — kanonik `/fiyatlandirma`.
 * Plan ve özellikler RELY Subs dokümantasyonundaki gerçek yeteneklere dayanır
 * (bkz. docs/rely-product-reference.md). Sunum: components/marketing/pricing/*.
 */

import type {
  PricingComparisonGroup,
  PricingComparisonRow,
} from "@/components/sections/pricing/pricing-comparison-matrix";
import type { PricingFaqItem } from "@/components/marketing/pricing/pricing-page-faq";

import { routes } from "@/config/routes";
import {
  marketingAutoBillingIncludeLabel,
  marketingCardStorageFaqAnswer,
  marketingEnterprisePricingContactLabel,
  marketingPlatformMonthlyFee,
  marketingPlatformPricingFaqAnswer,
  marketingSetupComparisonLabel,
  marketingSetupReadyPhrase,
  marketingSetupSelfServiceLabel,
  marketingSubscriberMigrationFaqAnswer,
} from "@/config/marketing/copy";

function cmpRow(
  id: string,
  feature: string,
  starter: PricingComparisonRow["values"][string],
  enterprise: PricingComparisonRow["values"][string],
): PricingComparisonRow {
  return { id, feature, values: { starter, enterprise } };
}

/** Sadece planlar arasında gerçekten fark olan satırlar. */
const planDifferenceRows: PricingComparisonRow[] = [
  cmpRow(
    "cmp-diff-0",
    "Platform ücreti",
    `${marketingPlatformMonthlyFee} / ay`,
    marketingEnterprisePricingContactLabel,
  ),
  cmpRow("cmp-diff-1", "Komisyon", "%1,39'dan başlayan oranlar", "Hacme göre özel oran"),
  cmpRow("cmp-diff-2", "Önerilen abone hacmi", "Başlangıç ve büyüme", "Yüksek hacim"),
  cmpRow("cmp-diff-3", "Panel kullanıcıları", "1 kullanıcı", "Çoklu kullanıcı + roller"),
  cmpRow("cmp-diff-4", "Kurulum", marketingSetupComparisonLabel, "Eşlik edilen kurulum"),
  cmpRow("cmp-diff-5", "Mevcut abonelik taşıma", "Kendi ekibiniz", "Destekli veri taşıma"),
  cmpRow("cmp-diff-6", "Destek kanalı", "E-posta (iş günü)", "Öncelikli + özel temsil"),
  cmpRow("cmp-diff-7", "SLA", "Standart", "Özel SLA"),
  cmpRow("cmp-diff-8", "Özel entegrasyon / API ihtiyaçları", false, "Talep üzerine"),
];

const planDifferenceGroup: PricingComparisonGroup[] = [
  {
    id: "grp-diff",
    title: "Ölçek, destek ve kurulum",
    defaultOpen: true,
    rows: planDifferenceRows,
  },
];

const platformIncludes = [
  "Abonelik planları: standart, ön ödemeli, dinamik",
  "Haftalık, aylık ve yıllık sıklık + indirim kuralları",
  "Paketler, koleksiyonlar ve hediye çekleri",
  "Kendi domaininizde markalı abonelik sitesi",
  "Duraklatma, iptal ve abonelik olay geçmişi",
  marketingAutoBillingIncludeLabel,
  "Başarısız ödeme kurtarma ve kart güncelleme bağlantısı",
  "Otomatik sipariş oluşturma ve sipariş takibi",
  "E-posta ve SMS bildirimleri (Mailgun / NetGSM)",
  "Merkezi yönetim paneli (abonelik, müşteri, ödeme)",
  "E-ticaret altyapınızla entegrasyon",
  "Müşteri paneli: plan, adres, teslimat güncelleme",
] as const;

const extraServices = [
  "Özel frontend geliştirme",
  "ERP & CRM entegrasyonları",
  "Özel API entegrasyonu",
  "Öncelikli destek paketi",
  "B2B abonelik kurguları",
  "Abonelik geçiş ve kurulum hizmeti",
] as const;

const pricingNotes = [
  "Üçüncü taraf uygulama ücretleri müşteriye aittir.",
  "Özel geliştirmeler ayrıca fiyatlandırılır.",
  "Kurumsal ihtiyaçlar için özel teklif hazırlanır.",
] as const;

const pricingFaqItems: PricingFaqItem[] = [
  {
    id: "pf-1",
    question: "RELY nasıl fiyatlandırılır?",
    answer: marketingPlatformPricingFaqAnswer,
  },
  {
    id: "pf-2",
    question: "Mevcut mağazamı değiştirmem gerekir mi?",
    answer:
    "Hayır. RELY, kullandığınız e-ticaret altyapısının üzerine eklenir; platform değiştirmeden abonelik katmanını ayrı bir subdomain ile entegre ederek yönetirsiniz.",
  },
  {
    id: "pf-3",
    question: "Kurulum ne kadar sürer?",
    answer:
      `Hızlı Başlangıç akışıyla çoğu mağaza ${marketingSetupReadyPhrase} olur: platformu bağlar, ürünleri içe aktarır, planı ve ödeme altyapısını kurarsınız. Kurumsal pakette ekibimiz kurulum ve taşımada eşlik eder.`,
  },
  {
    id: "pf-4",
    question: "Kart bilgileri nasıl saklanıyor?",
    answer: marketingCardStorageFaqAnswer,
  },
  {
    id: "pf-5",
    question: "Mevcut abonelerimi taşıyabilir miyim?",
    answer: marketingSubscriberMigrationFaqAnswer,
  },
];

export const pricingPageMeta = {
  title: "Fiyatlandırma",
  description: `E-ticaret abonelik altyapısı fiyatlandırması: aylık ${marketingPlatformMonthlyFee} platform ücreti ve %1,39'dan başlayan komisyon. Tüm abonelik özellikleri her planda; ölçek ve destek Kurumsal pakette genişler.`,
} as const;

export const pricingPageContent = {
  hero: {
    eyebrow: "Fiyatlandırma",
    title: "İşinizle birlikte büyüyen şeffaf fiyatlandırma",
    titleEmphasis: "şeffaf fiyatlandırma",
    subtitle: `Aylık ${marketingPlatformMonthlyFee} platform ücreti ve abonelik tahsilatına göre komisyon. Gizli kalem yok; ister yeni başlayın ister ölçeklenin.`,
    primaryCta: { label: "Demo talep et", href: routes.contact },
    secondaryCta: { label: "Ürünü inceleyin", href: routes.product },
  },

  plans: [
    {
      id: "starter",
      name: "Başlangıç",
      tagline: "Aboneliğe başlamak ve kendi hızınızda büyümek için.",
      priceNote: marketingPlatformMonthlyFee,
      priceSubnote: "Aylık platform ücreti + %1,39'dan başlayan komisyon (başarılı tahsilat).",
      featured: false,
      cta: { label: "Demo talep et", href: routes.contact },
      features: [
        "Tüm platform özellikleri",
        marketingSetupSelfServiceLabel,
        "1 panel kullanıcısı",
        "E-posta destek (iş günü)",
      ],
    },
    {
      id: "enterprise",
      name: "Kurumsal",
      tagline: "Yüksek hacim, taşıma ve özel operasyon ihtiyaçları için.",
      priceNote: marketingEnterprisePricingContactLabel,
      priceSubnote: "Hacim, komisyon ve SLA ihtiyacınıza göre özel teklif sunulur.",
      featured: true,
      cta: { label: "İletişime geçin", href: routes.contact },
      features: [
        "Başlangıçtaki tüm platform özellikleri",
        "Çoklu kullanıcı ve gelişmiş yetkiler",
        "Eşlik edilen kurulum ve destekli veri taşıma",
        "Öncelikli destek ve özel SLA",
        "Özel entegrasyon talepleri",
      ],
    },
  ],

  includes: {
    title: "Tüm planlarda dahil",
    description:
      "Abonelik planlarından tahsilata, abonelik sitesinden bildirimlere kadar çekirdek altyapı her iki pakette de aynıdır. Aşağıdaki liste ek ücretli modül değil, platformun parçasıdır.",
    items: platformIncludes,
  },

  comparison: {
    title: "Planlar arasındaki fark",
    description:
      "İki plan arasındaki ayrım özellik listesinde değil; ölçek, kurulum desteği ve operasyonel SLA'da görünür.",
    featureLabel: "ÖZELLİK",
    plans: [
      { id: "starter", label: "BAŞLANGIÇ" },
      { id: "enterprise", label: "KURUMSAL" },
    ],
    groups: planDifferenceGroup,
  },

  addOns: {
    title: "Ek hizmetler",
    description:
      "Platform paketinin dışında, operasyon ve entegrasyon ihtiyaçlarınıza göre eklenebilir hizmetler. Kapsam ve ücret, ihtiyacınıza göre ayrı teklif olarak netleşir.",
    services: extraServices,
    notes: pricingNotes,
  },

  faq: {
    title: "Sıkça sorulan sorular",
    items: pricingFaqItems,
  },
} as const;
