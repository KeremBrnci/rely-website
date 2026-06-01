/**
 * Header "Özellikler" mega-menüsü — müşteri faydası ve sonuç odaklı kısa kartlar.
 * Hedef: Shopify merchant, DTC marka ve abonelik yöneticileri.
 * Sunum: components/layout/site-header.tsx.
 */

import { routes } from "@/config/routes";

export type FeatureMenuIcon =
  | "plan"
  | "bundle"
  | "voucher"
  | "dunning"
  | "pause"
  | "automation"
  | "integrations"
  | "portal"
  | "scale";

export type FeatureMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: FeatureMenuIcon;
};

export type FeatureMenuGroup = {
  label: string;
  items: FeatureMenuItem[];
};

/** 3 sütun — sütun başına 3 sonuç odaklı kart. */
export const featuresMenu: FeatureMenuGroup[] = [
  {
    label: "Teklif",
    items: [
      {
        title: "Abonelik Modelleri",
        description: "Tek seferlik, tekrar eden ve ön ödemeli satışlar.",
        href: routes.features.plans,
        icon: "plan",
      },
      {
        title: "Paket Satışları",
        description: "Sepet değerini artıran esnek ürün paketleri.",
        href: routes.features.bundles,
        icon: "bundle",
      },
      {
        title: "İlk Sipariş Teklifleri",
        description: "Yeni müşterileri aboneliğe dönüştürün.",
        href: routes.features.vouchers,
        icon: "voucher",
      },
    ],
  },
  {
    label: "Elde tutma",
    items: [
      {
        title: "Ödeme Kurtarma",
        description: "Başarısız ödemeleri otomatik geri kazanın.",
        href: routes.features.recovery,
        icon: "dunning",
      },
      {
        title: "Abonelik Koruma",
        description: "İptal yerine alternatif teklifler sunun.",
        href: routes.features.pause,
        icon: "pause",
      },
      {
        title: "Müşteri Portalı",
        description: "Müşteriler aboneliklerini kendileri yönetsin.",
        href: routes.product,
        icon: "portal",
      },
    ],
  },
  {
    label: "Altyapı",
    items: [
      {
        title: "Otomatik Tahsilat",
        description: "Her döngüde ödeme ve sipariş otomatik oluşur.",
        href: routes.features.billing,
        icon: "automation",
      },
      {
        title: "E-ticaret mağaza entegrasyonu",
        description: "Shopify ve İkas ile mevcut mağazanıza dakikalar içinde bağlanın.",
        href: routes.features.integrations,
        icon: "integrations",
      },
      {
        title: "Ölçeklenebilir Yapı",
        description: "Binlerce aktif aboneliği sorunsuz yönetin.",
        href: routes.product,
        icon: "scale",
      },
    ],
  },
];

/** Footer — öne çıkan özellikler (header mega-menünün kısaltılmış listesi). */
export const featuresMenuFooterItems: Pick<FeatureMenuItem, "title" | "href">[] = [
  { title: "Abonelik Modelleri", href: routes.features.plans },
  { title: "Paket Satışları", href: routes.features.bundles },
  { title: "Ödeme Kurtarma", href: routes.features.recovery },
  { title: "Abonelik Koruma", href: routes.features.pause },
  { title: "İlk Sipariş Teklifleri", href: routes.features.vouchers },
];
