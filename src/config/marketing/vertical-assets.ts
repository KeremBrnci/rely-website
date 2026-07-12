/**
 * Sektör sayfaları ve nav menüsü — ortak ikon ve görsel yolları.
 */

import type { HomeVerticalIcon } from "@/content/marketing/home-verticals";

export type SubscriptionVerticalKey =
  | "coffee"
  | "beauty"
  | "supplements"
  | "petFood"
  | "mealKits"
  | "wellness"
  | "subscriptionBoxes"
  | "healthySnacks"
  | "grocery"
  | "specialtyPantry"
  | "householdEssentials"
  | "functionalBeverages"
  | "protein";

export type VerticalImage = {
  src: string;
  alt: string;
};

export type VerticalPackagePreview = {
  planName: string;
  frequency: string;
  nextDelivery: string;
  badge?: string;
  note?: string;
  /** Kart üst şerit ve vurgu rengi */
  accentVar: string;
};

export type VerticalAssets = {
  icon: HomeVerticalIcon;
  heroImage: VerticalImage;
  /** Paket önizleme kartında kullanılan görsel (hero’dan farklı açı). */
  packageImage: VerticalImage;
  packagePreview: VerticalPackagePreview;
};

export const verticalAssetsByKey: Record<SubscriptionVerticalKey, VerticalAssets> = {
  coffee: {
    icon: "coffee",
    heroImage: {
      src: "/images/verticals/coffee.webp",
      alt: "Kahve aboneliği — taze kavrum ve demleme anı",
    },
    packageImage: {
      src: "/images/verticals/coffee-package.webp",
      alt: "Kahve abonelik paketi — çekirdek ve öğütülmüş kahve teslimatı",
    },
    packagePreview: {
      planName: "250 g kavrum kutusu",
      frequency: "2 haftada bir",
      nextDelivery: "12 Haziran",
      badge: "Aktif",
      accentVar: "var(--marketing-accent-amber)",
      note: "Öğütme tercihi ve adres müşteri portalından güncellenir.",
    },
  },
  beauty: {
    icon: "beauty",
    heroImage: {
      src: "/images/verticals/beauty.webp",
      alt: "Güzellik abonelik kutusu — cilt bakımı ürünleri unboxing",
    },
    packageImage: {
      src: "/images/verticals/beauty-package.webp",
      alt: "Güzellik abonelik paketi — serum, krem ve maske minileri",
    },
    packagePreview: {
      planName: "Aylık güzellik kutusu",
      frequency: "Her ay",
      nextDelivery: "8 Temmuz",
      badge: "Üst paket",
      accentVar: "var(--marketing-accent-rose)",
      note: "Kutu içeriği plana göre abonelik sitesinde seçilir.",
    },
  },
  supplements: {
    icon: "supplements",
    heroImage: {
      src: "/images/verticals/supplements.webp",
      alt: "Takviye aboneliği — vitamin ve kapsül ürünleri",
    },
    packageImage: {
      src: "/images/verticals/supplements-package.webp",
      alt: "Takviye abonelik paketi — amber şişeler ve program düzeni",
    },
    packagePreview: {
      planName: "60 günlük program paketi",
      frequency: "Aylık",
      nextDelivery: "21 Haziran",
      badge: "Program",
      accentVar: "var(--marketing-accent-teal)",
      note: "Dozaj ve süre plan tanımında sabitlenir.",
    },
  },
  petFood: {
    icon: "petFood",
    heroImage: {
      src: "/images/verticals/pet-food.webp",
      alt: "Pet mama aboneliği — düzenli kibble teslimatı",
    },
    packageImage: {
      src: "/images/verticals/pet-food-package.webp",
      alt: "Pet mama abonelik paketi — mama torbası ve kap",
    },
    packagePreview: {
      planName: "12 kg mama paketi",
      frequency: "4 haftada bir",
      nextDelivery: "5 Haziran",
      badge: "Aktif",
      accentVar: "var(--marketing-accent-amber)",
      note: "Ağırlık bandı değişince paket portalden yükseltilebilir.",
    },
  },
  mealKits: {
    icon: "food",
    heroImage: {
      src: "/images/verticals/food.webp",
      alt: "Yemek kiti aboneliği — taze malzemeler ve haftalık menü",
    },
    packageImage: {
      src: "/images/verticals/food-package.webp",
      alt: "Yemek kiti abonelik paketi — malzemeler ve tarif kartı",
    },
    packagePreview: {
      planName: "Haftalık menü kutusu",
      frequency: "Her hafta",
      nextDelivery: "Pazartesi",
      badge: "2 kişilik",
      accentVar: "var(--marketing-accent-amber)",
      note: "Menü ve teslimat günü plana bağlıdır.",
    },
  },
  wellness: {
    icon: "wellness",
    heroImage: {
      src: "/images/verticals/wellness.webp",
      alt: "Wellness aboneliği — yoga, fitness ve günlük rutin ürünleri",
    },
    packageImage: {
      src: "/images/verticals/wellness-package.webp",
      alt: "Wellness abonelik paketi — matcha, journal ve rutin aksesuarları",
    },
    packagePreview: {
      planName: "30 günlük rutin kutusu",
      frequency: "Aylık",
      nextDelivery: "14 Temmuz",
      badge: "Rutin",
      accentVar: "var(--marketing-accent-indigo)",
      note: "Program paketleri tek abonelikte birleştirilir.",
    },
  },
  subscriptionBoxes: {
    icon: "wellness",
    heroImage: {
      src: "/images/verticals/subscription-boxes.webp",
      alt: "Abonelik kutusu — aylık keşif ve sürpriz ürün unboxing",
    },
    packageImage: {
      src: "/images/verticals/subscription-boxes-package.webp",
      alt: "Abonelik kutusu paketi — kurdeleli hediye kutusu teslimatı",
    },
    packagePreview: {
      planName: "Aylık keşif kutusu",
      frequency: "Her ay",
      nextDelivery: "5 Temmuz",
      badge: "Keşif",
      accentVar: "var(--marketing-accent-rose)",
      note: "Kutu içeriği plana göre abonelik sitesinde seçilir.",
    },
  },
  healthySnacks: {
    icon: "snacks",
    heroImage: {
      src: "/images/verticals/healthy-snacks-bars-hero.webp",
      alt: "Sağlıklı atıştırmalık aboneliği — protein bar, krokan bar ve granola",
    },
    packageImage: {
      src: "/images/verticals/healthy-snacks-bars-package.webp",
      alt: "Atıştırmalık abonelik paketi — protein bar, krokan bar ve kuruyemiş",
    },
    packagePreview: {
      planName: "Aylık bar kutusu",
      frequency: "Her ay",
      nextDelivery: "18 Haziran",
      badge: "Protein",
      accentVar: "var(--marketing-accent-teal)",
      note: "Protein bar, krokan bar ve kuruyemiş plana göre değişir.",
    },
  },
  grocery: {
    icon: "grocery",
    heroImage: {
      src: "/images/verticals/grocery.webp",
      alt: "Market aboneliği — temel gıda ve ev ihtiyaçları sepeti",
    },
    packageImage: {
      src: "/images/verticals/grocery-package.webp",
      alt: "Market abonelik paketi — bez çanta ve temel ürünler",
    },
    packagePreview: {
      planName: "Temel market sepeti",
      frequency: "4 haftada bir",
      nextDelivery: "Cuma",
      badge: "Yenileme",
      accentVar: "var(--marketing-accent-amber)",
      note: "Sepet içeriği portalden güncellenebilir.",
    },
  },
  specialtyPantry: {
    icon: "snacks",
    heroImage: {
      src: "/images/verticals/specialty-pantry.webp",
      alt: "Özel tüketim ürünleri — tahin, pekmez ve kuruyemiş aboneliği",
    },
    packageImage: {
      src: "/images/verticals/specialty-pantry-package.webp",
      alt: "Özel tüketim abonelik paketi — tahin, pekmez ve kuruyemiş seti",
    },
    packagePreview: {
      planName: "Aylık gurme kiler paketi",
      frequency: "Her ay",
      nextDelivery: "12 Haziran",
      badge: "Gurme",
      accentVar: "var(--marketing-accent-amber)",
      note: "Ürün çeşitleri plana göre rotasyonla güncellenir.",
    },
  },
  householdEssentials: {
    icon: "grocery",
    heroImage: {
      src: "/images/verticals/household-essentials.webp",
      alt: "Ev tüketim ürünleri — deterjan ve temizlik malzemeleri aboneliği",
    },
    packageImage: {
      src: "/images/verticals/household-essentials-package.webp",
      alt: "Ev tüketim abonelik paketi — deterjan ve temizlik ürünleri",
    },
    packagePreview: {
      planName: "Aylık temizlik paketi",
      frequency: "4 haftada bir",
      nextDelivery: "Perşembe",
      badge: "Ev bakımı",
      accentVar: "var(--marketing-accent-indigo)",
      note: "Ürün miktarı ve marka tercihi portalden ayarlanır.",
    },
  },
  functionalBeverages: {
    icon: "beverage",
    heroImage: {
      src: "/images/verticals/functional-beverages.webp",
      alt: "Fonksiyonel içecek aboneliği — detoks çayı, kombucha ve soğuk içecekler",
    },
    packageImage: {
      src: "/images/verticals/functional-beverages-package.webp",
      alt: "İçecek abonelik paketi — cam şişelerde fonksiyonel içecekler",
    },
    packagePreview: {
      planName: "Aylık detoks çayı paketi",
      frequency: "Aylık",
      nextDelivery: "9 Haziran",
      badge: "İçecek",
      accentVar: "var(--marketing-accent-indigo)",
      note: "Çeşit ve paket hacmi plan tanımında sabitlenir.",
    },
  },
  protein: {
    icon: "protein",
    heroImage: {
      src: "/images/verticals/protein.webp",
      alt: "Protein aboneliği — whey tozu ve spor beslenmesi",
    },
    packageImage: {
      src: "/images/verticals/protein-package.webp",
      alt: "Protein abonelik paketi — toz kutu ve shaker",
    },
    packagePreview: {
      planName: "2 kg whey program",
      frequency: "Aylık",
      nextDelivery: "25 Haziran",
      badge: "Spor",
      accentVar: "var(--marketing-accent-teal)",
      note: "Aroma ve gramaj portalden değiştirilebilir.",
    },
  },
};
