/**
 * Türkçe navigasyon — `routes` ile eşlenik.
 */

import { featuresMenuFooterItems } from "@/config/marketing/features-menu";
import { footerSectorItems } from "@/config/marketing/sectors-menu";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  /** Header açılır menü türü. */
  megaMenu?: "features" | "sectors";
};

export type FooterLinkColumn = {
  label: string;
  items: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { title: "Ürün", href: routes.product },
  { title: "Özellikler", href: routes.features.plans, megaMenu: "features" },
  { title: "Fiyatlandırma", href: routes.pricingTr },
  { title: "Referanslar", href: routes.references },
  { title: "Sektörler", href: routes.subscriptions.coffee, megaMenu: "sectors" },
  { title: "İletişim", href: routes.contact },
];

export const footerColumns: FooterLinkColumn[] = [
  {
    label: "Ürün",
    items: [
      { title: "Platform", href: routes.product },
      { title: "Fiyatlandırma", href: routes.pricingTr },
      { title: "Entegrasyonlar", href: routes.features.integrations },
      { title: "Otomatik Tahsilat", href: routes.features.billing },
      { title: "Abonelik Planları", href: routes.features.plans },
    ],
  },
  {
    label: "Sektörler",
    items: footerSectorItems.map((item) => ({
      title: item.title,
      href: item.href,
    })),
  },
  {
    label: "Özellikler",
    items: featuresMenuFooterItems,
  },
  {
    label: "Kaynaklar",
    items: [
      { title: "Blog", href: routes.blog },
      { title: "Ürün rehberi", href: siteConfig.links.helpCenter },
      { title: "E-ticaret abonelik", href: routes.ecommerceSubscription },
      { title: "Referanslar", href: routes.references },
      { title: "İletişim", href: routes.contact },
    ],
  },
];

export const footerLegalLinks: NavItem[] = [
  { title: "Gizlilik", href: routes.privacy },
  { title: "Şartlar", href: routes.terms },
];

/** @deprecated Use `footerColumns` and `footerLegalLinks`. */
export const footerNavigation = [
  ...footerColumns,
  { label: "Yasal", items: footerLegalLinks },
];
