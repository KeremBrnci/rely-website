/**
 * Referanslar sayfası (TR) — /referanslar.
 */

import { routes } from "@/config/routes";

export const referencesPageMeta = {
  title: "Referanslar",
  description:
    "RELY ile tekrar eden gelir modelinizi hayata geçirin. Shopify, İkas ve e-ticaret altyapınıza entegre abonelik operasyonu, otomatik tahsilat ve markalı abonelik deneyimi.",
} as const;

export const referencesPageContent = {
  hero: {
    eyebrow: "Referanslar",
    title: "Tekrar eden gelir modelinizi hayata geçirin",
    titleEmphasis: "hayata geçirin",
    subtitle:
      "RELY; Shopify, İkas ve diğer e-ticaret altyapılarına bağlanarak abonelik satışlarını, otomatik tahsilatları ve tekrar eden sipariş operasyonlarını tek platformdan yönetmenizi sağlar.",
    primaryCta: { label: "Demo Talep Edin", href: routes.contact },
    secondaryCta: { label: "Ürünü inceleyin", href: routes.product },
  },
  conversion: {
    badge: "Abonelik Ekosistemi",
    advantages: [
      "Tek seferlik ve abonelikli satışları birlikte yönetin",
      "Otomatik tahsilat ve ödeme kurtarma akışları oluşturun",
      "Shopify, İkas ve özel e-ticaret altyapılarıyla entegre çalışın",
      "Markanıza özel abonelik deneyimi sunun",
    ],
    cta: { label: "Demo Talep Edin", href: routes.contact },
    ctaSubtext: "Markanız için uygun abonelik modelini birlikte değerlendirelim.",
  },
} as const;
