/**
 * Fiyatlandırma sayfası içeriği (TR) — kanonik `/fiyatlandirma`.
 * Tek ürün: RELY Platform. Fark: hizmet seviyesi (Platform vs Enterprise).
 * Copy ilkesi: özellik değil, operasyon ve iş sonucu.
 */

import type {
  PricingComparisonGroup,
  PricingComparisonRow,
} from "@/components/sections/pricing/pricing-comparison-matrix";
import type { PricingFaqItem } from "@/components/marketing/pricing/pricing-page-faq";

import { routes } from "@/config/routes";
import {
  marketingCardStorageFaqAnswer,
  marketingEnterprisePricingContactLabel,
  marketingPlatformMonthlyFee,
  marketingSetupReadyPhrase,
  marketingSuccessFeeOnlySubscriptionRevenue,
  marketingSuccessFeeSummaryLabel,
  marketingSuccessFeeTiers,
} from "@/config/marketing/copy";

export type PricingValueItem = {
  id: string;
  title: string;
  body: string;
};

function cmpRow(
  id: string,
  feature: string,
  platform: PricingComparisonRow["values"][string],
  enterprise: PricingComparisonRow["values"][string],
): PricingComparisonRow {
  return { id, feature, values: { platform, enterprise } };
}

const serviceDifferenceRows: PricingComparisonRow[] = [
  cmpRow("svc-0", "Platform ücreti", `${marketingPlatformMonthlyFee} / ay`, marketingEnterprisePricingContactLabel),
  cmpRow("svc-1", "Başarı Payı", marketingSuccessFeeSummaryLabel, "Hacme göre özel oran"),
  cmpRow("svc-2", "Canlıya geçiş", "Rehberli kurulum", "Dedicated onboarding"),
  cmpRow("svc-3", "Hesap sahipliği", "Standart destek", "Technical Account Manager"),
  cmpRow("svc-4", "Hizmet seviyesi anlaşması", "Standart yanıt süresi", "Özel SLA"),
  cmpRow("svc-5", "Destek önceliği", "İş günü e-posta", "Öncelikli destek"),
  cmpRow("svc-6", "Ekip hazırlığı", "Dokümantasyon", "Ekibe özel eğitim"),
  cmpRow("svc-7", "Veri taşıma", "Rehberli self-servis", "Migration desteği"),
  cmpRow("svc-8", "Geliştirme sırası", "Standart öncelik", "Custom geliştirme önceliği"),
];

const serviceDifferenceGroup: PricingComparisonGroup[] = [
  {
    id: "grp-service",
    title: "Hizmet seviyesi",
    defaultOpen: true,
    rows: serviceDifferenceRows,
  },
];

const platformCapabilities: PricingValueItem[] = [
  {
    id: "subscription-ops",
    title: "Abonelikleri tek yerden yönetin",
    body: "Plan, sıklık, duraklatma ve iptal süreçlerini dağınık tablolar yerine tek operasyon panelinde toplayın.",
  },
  {
    id: "auto-billing",
    title: "Otomatik tahsilat",
    body: "Yenileme tarihinde ödemeler otomatik alınır. Sipariş süreci manuel müdahale olmadan ilerler.",
  },
  {
    id: "retry",
    title: "Başarısız ödemeleri geri kazanın",
    body: "Kart reddi ve geçici hatalarda yeniden deneme akışı çalışır. İstek dışı abonelik kaybını azaltırsınız.",
  },
  {
    id: "portal",
    title: "Müşteri self-servis portalı",
    body: "Aboneler adres, plan ve kart bilgilerini kendileri günceller. Destek talebi hacmi düşer.",
  },
  {
    id: "integrations",
    title: "Mevcut sistemlerinizle bağlanın",
    body: "Shopify, İkas, Ticimax ve T-Soft mağazalarınızla ürün ve sipariş senkronu kurulur. Mağaza değiştirmeniz gerekmez.",
  },
  {
    id: "payments",
    title: "Ödeme altyapınızı koruyun",
    body: "Kart saklama destekleyen mevcut sanal POS’unuzla çalışın. Tahsilat sağlayıcınız üzerinden devam eder.",
  },
  {
    id: "api",
    title: "Operasyonu sistemlerinize bağlayın",
    body: "API ve webhook’larla ERP, CRM ve iç araçlarınıza abonelik olaylarını aktarın.",
  },
  {
    id: "analytics",
    title: "Tekrarlayan geliri izleyin",
    body: "Abonelik cirosu, yenileme ve kayıp sinyallerini operasyon kararlarına bağlayacak görünürlük sağlayın.",
  },
];

const enterpriseServices: PricingValueItem[] = [
  {
    id: "onboarding",
    title: "Dedicated onboarding",
    body: "Canlıya geçiş planı, entegrasyon adımları ve kabul kriterleri sizin ekibinizle birlikte yürütülür.",
  },
  {
    id: "tam",
    title: "Technical Account Manager",
    body: "Teknik ve operasyonel konular için sabit bir muhatap. Escalation süresi kısalır.",
  },
  {
    id: "sla",
    title: "SLA",
    body: "Yanıt ve çözüm süreleri yazılı hizmet seviyesiyle tanımlanır. Operasyon riski ölçülebilir hale gelir.",
  },
  {
    id: "priority",
    title: "Öncelikli destek",
    body: "Kritik dönemlerde (kampanya, yenileme yoğunluğu, taşıma) destek kuyruğunda öncelik alırsınız.",
  },
  {
    id: "training",
    title: "Ekibe özel eğitim",
    body: "E-ticaret, müşteri hizmetleri ve operasyon ekiplerine rol bazlı eğitim verilir.",
  },
  {
    id: "migration",
    title: "Migration desteği",
    body: "Mevcut abonelik ve müşteri verilerinin taşınması planlanır, test edilir ve kontrollü şekilde canlıya alınır.",
  },
  {
    id: "custom",
    title: "Custom geliştirme önceliği",
    body: "Kurumsal entegrasyon ve özel iş kuralları ürün backlog’unda önceliklendirilir.",
  },
];

const pricingFaqItems: PricingFaqItem[] = [
  {
    id: "pf-1",
    question: "Neden platform ücreti ve Başarı Payı birlikte?",
    answer:
      "Platform ücreti abonelik altyapısının sabit kısmını karşılar: yönetim paneli, tahsilat akışları, müşteri portalı, entegrasyonlar ve ürün bakımı. Başarı Payı yalnızca RELY üzerinden oluşan abonelik cirosuna bağlanır. Abonelik hacminiz arttıkça oran kademeli düşer.",
  },
  {
    id: "pf-2",
    question: "Tek seferlik siparişlerden pay alınır mı?",
    answer: `Hayır. ${marketingSuccessFeeOnlySubscriptionRevenue}`,
  },
  {
    id: "pf-3",
    question: "Başarı Payı hangi siparişlere uygulanır?",
    answer:
      "Yalnızca RELY üzerinden oluşan abonelik cirosundan alınır. Yenileme tahsilatları ve abonelik siparişleri bu kapsamdadır. Mevcut mağazanızdaki tek seferlik siparişler kapsama girmez.",
  },
  {
    id: "pf-4",
    question: "Mağaza değiştirmek gerekir mi?",
    answer:
      "Hayır. Shopify, İkas, Ticimax veya T-Soft mağazanız yerinde kalır. Abonelik planları, tahsilat ve müşteri portalı RELY üzerinden yönetilir.",
  },
  {
    id: "pf-5",
    question: "Hangi platformlar destekleniyor?",
    answer:
      "Shopify, İkas, Ticimax ve T-Soft. Ürün ve sipariş senkronu mevcut operasyonunuzu bozmadan kurulur. Entegrasyon kapsamı görüşmede netleştirilir.",
  },
  {
    id: "pf-6",
    question: "Kart bilgileri nerede saklanır?",
    answer: marketingCardStorageFaqAnswer,
  },
  {
    id: "pf-7",
    question: "Enterprise farkı nedir?",
    answer:
      "Ürün yetenekleri aynıdır. Enterprise’da fark hizmet seviyesindedir: dedicated onboarding, Technical Account Manager, SLA, öncelikli destek, ekibe özel eğitim, migration desteği ve custom geliştirme önceliği. Fiyatlandırma özel teklifle belirlenir.",
  },
  {
    id: "pf-8",
    question: "Canlıya geçiş ne kadar sürer?",
    answer: `Hazırlık düzeyine göre değişir. Hızlı başlangıçta birçok mağaza ${marketingSetupReadyPhrase} hale gelir. Mevcut abone taşıma veya özel entegrasyon varsa süre birlikte planlanır.`,
  },
];

export const pricingPageMeta = {
  title: "Fiyatlandırma",
  description: `RELY Subs abonelik altyapısı: aylık ${marketingPlatformMonthlyFee} platform ücreti ve yalnızca abonelik cirosuna uygulanan kademeli Başarı Payı. Tek seferlik siparişlerden pay alınmaz.`,
} as const;

export const pricingPageContent = {
  hero: {
    eyebrow: "E-Ticaret Abonelik Altyapısı",
    title: "Markanızı Abonelik Modeliyle Büyütün",
    titleEmphasis: "Abonelik Modeliyle",
    subtitle:
      "Shopify, İkas, Ticimax veya T-Soft mağazanız yerinde kalır. Abonelik yönetimi, otomatik tahsilat, müşteri portalı ve ödeme kurtarmayı mevcut operasyonunuza ekleyin.",
    primaryCta: { label: "Demo Talep Et", href: routes.contactForm },
    secondaryCta: { label: "Platformu Yakından İncele", href: routes.product },
  },

  plansIntro: {
    eyebrow: "Tek ürün",
    title: "Tek Platform. İhtiyacınıza Uygun Hizmet Seviyesi.",
    titleEmphasis: "İhtiyacınıza Uygun Hizmet Seviyesi.",
    description:
      "Abonelik altyapısı tüm müşteriler için aynıdır. İhtiyacınıza göre hizmet seviyenizi seçebilir; onboarding, destek ve SLA kapsamınızı genişletebilirsiniz.",
  },
  plans: [
    {
      id: "platform",
      name: "RELY Platform",
      tagline:
        "Orta ve büyük ölçekli e-ticaret ekipleri için abonelik operasyonunun tamamı.",
      priceNote: marketingPlatformMonthlyFee,
      pricePeriod: "/ ay",
      priceSubnote: `+ ${marketingSuccessFeeSummaryLabel}`,
      priceDetail:
        "Platform ücreti altyapıyı ve sürekli ürün bakımını kapsar. Başarı Payı yalnızca RELY abonelik cirosuna uygulanır.",
      featured: true,
      badge: "Tek ürün",
      cta: { label: "Abonelik modelinizi planlayalım", href: routes.contactForm },
      featureIntro: "Abonelik Yönetimini Basitleştirin",
      capabilities: platformCapabilities,
      services: [] as PricingValueItem[],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tagline:
        "Yüksek hacim, taşıma ve kurumsal yönetişim ihtiyacı olan ekipler için hizmet katmanı.",
      priceNote: marketingEnterprisePricingContactLabel,
      pricePeriod: "",
      priceSubnote: "RELY Platform’un tamamı + yükseltilmiş hizmet seviyesi.",
      priceDetail:
        "Ürün yetenekleri değişmez. Dedicated onboarding, hesap yönetimi, SLA ve migration kapsamı genişler.",
      featured: false,
      badge: "Hizmet seviyesi",
      cta: { label: "Enterprise kapsamını konuşalım", href: routes.contactForm },
      featureIntro: "Enterprise hizmet katmanı",
      capabilities: [] as PricingValueItem[],
      services: enterpriseServices,
    },
  ],

  successFee: {
    eyebrow: "Başarı Payı",
    title: "Büyümenize Uyum Sağlayan Fiyatlandırma",
    titleEmphasis: "Uyum Sağlayan",
    description:
        "Platform ücreti, RELY'nin abonelik altyapısını ve tüm platform hizmetlerini kapsar. Başarı Payı ise yalnızca RELY üzerinden yönetilen abonelik cirosu için uygulanır. Abonelik hacminiz büyüdükçe başarı payı kademeli olarak azalır.",
    highlight: {
      eyebrow: "",
      title: "Yalnızca Abonelik Geliriniz Üzerinden Ücretlendirilirsiniz",
      body: "Başarı Payı yalnızca RELY üzerinden yönetilen abonelik cirosuna uygulanır. Mevcut mağazanızdaki tek seferlik siparişler bu hesaplamaya hiçbir zaman dahil edilmez.",
    },
    table: {
      revenueLabel: "RELY Üzerinden Oluşan Abonelik Geliri",
      rateLabel: "Başarı Payı",
    },
    tiers: marketingSuccessFeeTiers,
    rationale: {
      title: "Neden bu fiyatlandırma modeli?",
      body: "Platform ücreti, RELY'nin abonelik altyapısını ve platform hizmetlerini kapsar. Başarı Payı ise yalnızca RELY üzerinden yönetilen abonelik cirosu için uygulanır. Böylece ücretlendirme, abonelik operasyonunuz büyüdükçe ölçeklenirken tek seferlik satışlarınız bu hesaplamaya dahil edilmez.",
    },
    pillars: [
      {
        id: "platform-fee",
        label: "Platform Ücreti",
        title: "Platform Ücreti Neleri Kapsar?",
        body: "Dashboard, müşteri portalı, API ve webhook’lar, mağaza entegrasyonları, güvenlik, güncellemeler, ürün geliştirmeleri ve teknik destek bu sabit ücretin kapsamındadır. Abonelik operasyonunun sürekli çalışan katmanını finanse eder.",
      },
      {
        id: "success-fee",
        label: "Başarı Payı",
        title: "Başarı Payı Nasıl Çalışır?",
        body: "Başarı Payı yalnızca RELY üzerinden yönetilen abonelik cirosuna uygulanır. Abonelik hacmi büyüdükçe oran düşer. Ücretlendirme, büyümeyle birlikte ölçeklenir.",
      },
      {
        id: "why-model",
        label: "Neden Bu Model?",
        title: "Neden İki Ayrı Ücretlendirme Var?",
        body: "Platform ücreti sürekli çalışan SaaS altyapısını finanse eder. Başarı Payı ise yalnızca oluşturulan abonelik operasyonunun büyüklüğüne bağlıdır. Maliyet ile elde edilen değer daha dengeli hale gelir.",
      },
    ],
    scenario: {
      title: "Örnek Senaryo",
      steps: [
        {
          id: "volume",
          title: "Abonelik cirosu",
          body: "Mağazanız aylık 2 milyon TL abonelik cirosu üretiyor.",
        },
        {
          id: "tier",
          title: "İlgili dilim",
          body: "Başarı Payı, bu hacmin düştüğü dilime göre uygulanır.",
        },
        {
          id: "excluded",
          title: "Kapsam dışı",
          body: "Tek seferlik mağaza siparişleri hesaplamaya dahil edilmez.",
        },
      ],
    },
  },

  comparison: {
    eyebrow: "Karşılaştırma",
    title: "Fark ürün değil, hizmet seviyesidir",
    titleEmphasis: "hizmet seviyesidir",
    description:
      "Her iki tarafta da aynı abonelik altyapısı vardır. Tablo; canlıya geçiş, hesap yönetimi, SLA ve migration farkını gösterir.",
    featureLabel: "HİZMET",
    plans: [
      { id: "platform", label: "RELY PLATFORM" },
      { id: "enterprise", label: "ENTERPRISE" },
    ],
    groups: serviceDifferenceGroup,
  },

  why: {
    eyebrow: "Neden RELY?",
    title: "Büyümenizi Destekleyen Altyapı",
    titleEmphasis: "Operasyonel Kazanımlar",
    description:
      "Abonelik altyapısı seçimi yalnızca fiyatla yapılmaz. Operasyonel sürdürülebilirlik, entegrasyon riski, müşteri deneyimi ve gelir modelinin şeffaflığı kararın merkezindedir.",
    items: [
      {
        id: "keep-ops",
        title: "Mevcut Operasyonunuzu Koruyun",
        body: "Shopify, İkas, Ticimax veya T-Soft altyapınızı değiştirmeden abonelik modelini devreye alın. Mağaza migrasyonu olmadan abonelik katmanı eklenir.",
        accent: "Migration riski oluşmaz.",
      },
      {
        id: "success-aligned",
        title: "Ücretlendirme Başarıya Bağlıdır",
        body: "Yalnızca oluşturduğunuz abonelik gelirinden ücretlendirilirsiniz. Tek seferlik satışlarınız hiçbir zaman Başarı Payı’na dahil edilmez.",
        accent: "Maliyet, ürettiğiniz abonelik cirosuna bağlanır.",
      },
      {
        id: "recurring",
        title: "Tekrarlayan Gelir Oluşturun",
        body: "Abonelikler planlı yenilenir, tahsilatlar takvime bağlanır. Aylık gelir daha öngörülebilir hale gelir; finansal planlama güçlenir.",
        accent: "Reklam bağımlılığını azaltır.",
      },
      {
        id: "recovery",
        title: "Başarısız Tahsilatların Etkisini Azaltın",
        body: "Kart reddi ve geçici hatalarda abonelik sessizce düşmez. Kurtarma akışı çalışır; gelir kaybı operasyonel olarak sınırlanır.",
        accent: "İstek dışı churn azalır.",
      },
      {
        id: "support",
        title: "Destek Operasyonunu Hafifletin",
        body: "Müşteriler plan, adres, kart ve teslimat bilgisini self-servis yönetir. Destek ekibi istisna ve deneyim konularına odaklanır.",
        accent: "Ticket hacmi düşer.",
      },
      {
        id: "metrics",
        title: "Abonelik Performansını Ölçün",
        body: "MRR, LTV, churn ve yenileme oranını tek panelden izleyin. Abonelik performansını operasyon kararlarına bağlayın.",
        accent: "Raporlama görünürlüğü artar.",
      },
    ],
  },

  faq: {
    title: "Sıkça sorulan sorular",
    items: pricingFaqItems,
  },

  finalCta: {
    title: "Abonelik operasyonunuzu birlikte değerlendirelim",
    titleEmphasis: "birlikte değerlendirelim",
    subtitle: "Platform veya Enterprise kapsamını mağaza ve hizmet ihtiyacınıza göre netleştirelim.",
    primary: { label: "Görüşme planlayın", href: routes.contactForm },
    footnotes: [
      "Tek seferlik siparişlerden pay alınmaz",
      "Shopify, İkas, Ticimax, T-Soft",
      "Ürün aynı · hizmet seviyesi seçilir",
    ],
  },
} as const;
