/**
 * Ana sayfa — abonelik dikeyleri (sektörler) bölümü.
 * Her kart: sektör adı + kısa istatistik + opsiyonel görsel/sayfa linki.
 */

import { routes } from "@/config/routes";

export type HomeVerticalIcon =
  | "coffee"
  | "beauty"
  | "supplements"
  | "petFood"
  | "food"
  | "wellness"
  | "snacks"
  | "grocery"
  | "beverage"
  | "protein";

export type HomeVertical = {
  id: string;
  name: string;
  stat: string;
  icon: HomeVerticalIcon;
  /** Varsa ilgili dikey sayfasına link. */
  href?: string;
  /** Varsa kart arka plan görseli (yoksa markalı gradyan kullanılır). */
  image?: string;
};

export const homeVerticals = {
  intro: {
    eyebrow: "Sektörler",
    title: "Her sektöre uygun abonelik altyapısı",
    description:
      "RELY, farklı sektörlerin satın alma alışkanlıklarına göre uyarlanmış akışlar ve en iyi uygulamalarla aboneliği destekler.",
  },
  items: [
    {
      id: "vert-coffee",
      name: "Kahve",
      stat: "Esnek teslimat sunulduğunda kahve aboneleri belirgin şekilde daha uzun kalıyor.",
      icon: "coffee",
      href: routes.subscriptions.coffee,
      image: "/images/verticals/coffee.webp",
    },
    {
      id: "vert-beauty",
      name: "Güzellik & Cilt Bakımı",
      stat: "Aboneler, kutusunu kişiselleştirebildiği markaları tercih ediyor.",
      icon: "beauty",
      href: routes.subscriptions.beauty,
      image: "/images/verticals/beauty.webp",
    },
    {
      id: "vert-supplements",
      name: "Takviye & Vitaminler",
      stat: "Müşteriler tek tek sipariş yerine düzenli aboneliği tercih ediyor.",
      icon: "supplements",
      href: routes.subscriptions.supplements,
      image: "/images/verticals/supplements.webp",
    },
    {
      id: "vert-pet",
      name: "Pet Mamaları ve Bakım",
      stat: "Pet sahipleri için otomatik teslimat en pratik satın alma yolu.",
      icon: "petFood",
      href: routes.subscriptions.petFood,
      image: "/images/verticals/pet-food.webp",
    },
    {
      id: "vert-food",
      name: "Gıda ve Yemek Kiti",
      stat: "Haftalık menü ve esnek teslimatla yemek kiti aboneleri düzenli kalır.",
      icon: "food",
      href: routes.subscriptions.mealKits,
      image: "/images/verticals/food.webp",
    },
    {
      id: "vert-wellness",
      name: "Wellness",
      stat: "Düzenli kullanım alışkanlığı, wellness ürünlerini aboneliğe çok uygun kılar.",
      icon: "wellness",
      href: routes.subscriptions.wellness,
      image: "/images/verticals/wellness.webp",
    },
    {
      id: "vert-snacks",
      name: "Sağlıklı Atıştırmalıklar",
      stat: "Protein bar ve kutu abonelikleri, düzenli tüketimle sadakati yükseltir.",
      icon: "snacks",
      href: routes.subscriptions.healthySnacks,
      image: "/images/verticals/healthy-snacks-bars-hero.webp",
    },
    {
      id: "vert-grocery",
      name: "Market & Ev İhtiyaçları",
      stat: "Temel gıda ve sarf ürünlerinde yenileme aboneliği operasyonu sadeleştirir.",
      icon: "grocery",
      href: routes.subscriptions.grocery,
      image: "/images/verticals/grocery.webp",
    },
    {
      id: "vert-beverage",
      name: "Sağlıklı İçecekler",
      stat: "Bitki çayı, meyve suyu ve sağlıklı içeceklerde ritim abonelikle korunur.",
      icon: "beverage",
      href: routes.subscriptions.functionalBeverages,
      image: "/images/verticals/functional-beverages.webp",
    },
  ] satisfies HomeVertical[],
} as const;
