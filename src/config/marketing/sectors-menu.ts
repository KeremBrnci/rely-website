/**
 * Header "Sektörler" mega-menüsü — abonelik modeline uygun dikeyler.
 * Hedef: B2C DTC markalar; kısa başlık + tek satır sonuç odaklı açıklama.
 * Sunum: components/layout/site-header.tsx.
 */

import { routes } from "@/config/routes";
import type { HomeVerticalIcon } from "@/content/marketing/home-verticals";

export type SectorMenuItem = {
  title: string;
  href: string;
  description: string;
  icon: HomeVerticalIcon;
};

export type SectorMenuGroup = {
  label: string;
  items: SectorMenuItem[];
};

/** 4 sütun — sütun başına 3 sektör kartı. */
export const sectorsMenuGroups: SectorMenuGroup[] = [
  {
    label: "Gıda & içecek",
    items: [
      {
        title: "Kahve Abonelikleri",
        description: "Taze kavrulmuş kahveler düzenli teslim edilir.",
        href: routes.subscriptions.coffee,
        icon: "coffee",
      },
      {
        title: "Hazır Yemek ve Yemek Kiti",
        description: "Haftalık yemek planlarını otomatik yönetin.",
        href: routes.subscriptions.mealKits,
        icon: "food",
      },
      {
        title: "Fonksiyonel İçecekler",
        description: "Bitki çayı, kombucha ve sağlıklı içecekler.",
        href: routes.subscriptions.functionalBeverages,
        icon: "beverage",
      },
    ],
  },
  {
    label: "Sağlık & wellness",
    items: [
      {
        title: "Takviye Ürünleri",
        description: "Vitamin ve destek ürünlerinde düzenli yenileme.",
        href: routes.subscriptions.supplements,
        icon: "supplements",
      },
      {
        title: "Protein & Sporcu Besinleri",
        description: "Protein tozu ve sporcu ürünleri için abonelik.",
        href: routes.subscriptions.protein,
        icon: "protein",
      },
      {
        title: "Kişisel Bakım Rutinleri",
        description: "Günlük kullanım ürünlerinde kesintisiz tedarik.",
        href: routes.subscriptions.beauty,
        icon: "beauty",
      },
    ],
  },
  {
    label: "Atıştırmalık & gourmet",
    items: [
      {
        title: "Sağlıklı Atıştırmalıklar",
        description: "Protein bar, granola ve kuruyemiş kutuları.",
        href: routes.subscriptions.healthySnacks,
        icon: "snacks",
      },
      {
        title: "Abonelik Kutuları",
        description: "Aylık keşif ve sürpriz ürün deneyimleri.",
        href: routes.subscriptions.subscriptionBoxes,
        icon: "wellness",
      },
      {
        title: "Özel Tüketim Ürünleri",
        description: "Tahin, pekmez, kuruyemiş ve gurme kiler ürünleri.",
        href: routes.subscriptions.specialtyPantry,
        icon: "snacks",
      },
    ],
  },
  {
    label: "Ev & pet",
    items: [
      {
        title: "Pet Ürünleri",
        description: "Mama ve bakım ürünlerinde otomatik teslimat.",
        href: routes.subscriptions.petFood,
        icon: "petFood",
      },
      {
        title: "Ev Tüketim Ürünleri",
        description: "Deterjan, bulaşık ve temizlik malzemelerinde yenileme.",
        href: routes.subscriptions.householdEssentials,
        icon: "grocery",
      },
      {
        title: "Market Alışverişleri",
        description: "Temel gıda ve sık tüketilen market ürünleri.",
        href: routes.subscriptions.grocery,
        icon: "grocery",
      },
    ],
  },
];

/** Düz liste — header mega-menü dışı tüketiciler için. */
export const sectorsMenu: SectorMenuItem[] = sectorsMenuGroups.flatMap(
  (group) => group.items,
);

/** Footer — öne çıkan dikeyler (tam liste header menüde). */
export const footerSectorItems: Pick<SectorMenuItem, "title" | "href">[] = [
  { title: "Kahve Abonelikleri", href: routes.subscriptions.coffee },
  { title: "Takviye Ürünleri", href: routes.subscriptions.supplements },
  { title: "Kişisel Bakım Rutinleri", href: routes.subscriptions.beauty },
  { title: "Pet Ürünleri", href: routes.subscriptions.petFood },
  { title: "Sağlıklı Atıştırmalıklar", href: routes.subscriptions.healthySnacks },
];
