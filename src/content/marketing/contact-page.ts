/**
 * İletişim sayfası içeriği (TR) — /iletisim.
 */

import { routes } from "@/config/routes";
import {
  marketingPaymentProvidersShortLabel,
  marketingSetupQuickStartLabel,
} from "@/config/marketing/copy";

export const contactPageMeta = {
  title: "İletişim",
  description:
    "Demo talebi veya genel sorularınız için RELY Subs ekibiyle iletişime geçin. E-ticaret altyapınızla uyumlu abonelik çözümü.",
} as const;

export const contactPageContent = {
  hero: {
    eyebrow: "İletişim",
    title: "Demo talep edin veya bize yazın",
    titleEmphasis: "Demo talep edin",
    subtitle:
      "Abonelik altyapınızı birlikte değerlendirelim. Formu doldurun; satış ekibimiz iş günü içinde size dönüş yapar.",
    primaryCta: { label: "Formu doldurun", href: "#iletisim-form" },
    secondaryCta: { label: "Fiyatlandırmayı görün", href: routes.pricingTr },
  },
  form: {
    title: "Formu doldurun",
    description: "Demo için mağaza bilgilerinizi paylaşın; genel sorularınızda konuyu kısaca belirtin.",
    requestTypes: {
      demo: { label: "Demo talebi", description: "Ürün turu ve size özel teklif" },
      contact: { label: "İletişim", description: "Genel soru, ortaklık veya destek" },
    },
    fields: {
      name: { label: "Ad soyad", placeholder: "Adınız Soyadınız" },
      email: { label: "E-posta", placeholder: "ornek@sirket.com" },
      company: { label: "Şirket / mağaza", placeholder: "Marka veya mağaza adı" },
      phone: { label: "Telefon", placeholder: "+90 5XX XXX XX XX (isteğe bağlı)" },
      platform: {
        label: "E-ticaret altyapısı",
        placeholder: "Seçin",
        options: [
          { value: "shopify", label: "Shopify" },
          { value: "ikas", label: "İkas" },
          { value: "ticimax", label: "Ticimax" },
          { value: "other", label: "Diğer" },
          { value: "none", label: "Henüz yok / planlama aşamasında" },
        ],
      },
      message: {
        label: "Mesajınız",
        placeholder:
          "Demo için: aylık sipariş hacmi, abonelik hedefiniz. İletişim için: konuyu kısaca yazın.",
      },
    },
    submit: "Gönder",
    submitting: "Gönderiliyor…",
    successTitle: "Talebiniz alındı",
    successMessage:
      "Teşekkürler. Ekibimiz en kısa sürede e-posta adresiniz üzerinden size dönüş yapacak.",
    errorMessage: "Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
  },
  sidebar: {
    title: "Doğrudan ulaşın",
    email: {
      label: "E-posta",
      value: "contact@relysubs.com",
      href: "mailto:contact@relysubs.com",
    },
    address: {
      label: "Adres",
      lines: ["Büyükdere Cad. Quasar No:76", "Şişli / İstanbul"],
    },
    responseNote: "İş günlerinde genellikle 24 saat içinde yanıt veriyoruz.",
    highlights: [
      "E-ticaret altyapınızla uyumlu entegrasyon",
      marketingSetupQuickStartLabel,
      marketingPaymentProvidersShortLabel,
    ],
  },
  faq: {
    title: "Sık sorulan sorular",
    items: [
      {
        id: "contact-faq-1",
        question: "Demo ne kadar sürer?",
        answer:
          "Genellikle 30 dakikalık bir ürün turu ve mağazanıza özel kurulum önerisi. Takvim linki talep ederseniz e-posta ile paylaşılır.",
      },
      {
        id: "contact-faq-2",
        question: "Hangi e-ticaret altyapılarını destekliyorsunuz?",
        answer:
          "RELY, kullandığınız e-ticaret altyapısına bağlanır. Formda altyapınızı belirtin; kurulum ve uyumluluk adımlarını ekibimiz netleştirir.",
      },
      {
        id: "contact-faq-3",
        question: "Kurulum ve canlıya alma süreci nasıl işler?",
        answer:
          `Ödeme kuruluşunuzu (kart saklama destekleyen sanal POS) ve mağaza bağlantısını kurduktan sonra planlarınızı tanımlarsınız. Ekibimiz ilk abonelik akışını birlikte doğrular.`,
      },
      {
        id: "contact-faq-4",
        question: "Fiyatlandırma sayfasındaki planlar dışında özel teklif alabilir miyim?",
        answer:
          "Kurumsal hacim veya çoklu marka yapıları için formdan «İletişim» seçerek özel teklif talep edebilirsiniz.",
      },
    ],
  },
} as const;
