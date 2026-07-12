/**
 * Marketing routes — single source for nav, footer, and links.
 */

export const routes = {
  home: "/",
  /** Ürün sayfası (TR kanonik). */
  product: "/urun",
  /** Kanonik fiyatlandırma (`/pricing` → 301). */
  pricingTr: "/fiyatlandirma",
  /** Eski path — yalnızca redirect ve pathname eşlemesi için. */
  pricingLegacy: "/pricing",
  /** Kanonik iletişim (`/contact` → 301). */
  contact: "/iletisim",
  blog: "/blog",
  /** Müşteri hikayeleri ve demo CTA — /referanslar. */
  references: "/referanslar",
  /** Sektör (abonelik dikeyi) sayfaları — kanonik TR slug’lar. */
  subscriptions: {
    coffee: "/sektorler/kahve",
    petFood: "/sektorler/pet-mamasi",
    beauty: "/sektorler/guzellik",
    supplements: "/sektorler/takviye",
    mealKits: "/sektorler/yemek-kiti",
    wellness: "/sektorler/wellness",
    subscriptionBoxes: "/sektorler/abonelik-kutulari",
    healthySnacks: "/sektorler/saglikli-atistirmaliklar",
    grocery: "/sektorler/market-ihtiyaclari",
    specialtyPantry: "/sektorler/ozel-tuketim-urunleri",
    householdEssentials: "/sektorler/ev-tuketim-urunleri",
    functionalBeverages: "/sektorler/saglikli-icecekler",
    protein: "/sektorler/saglikli-protein",
  },
  /** Sonuç odaklı çözüm sayfaları. */
  solutions: {
    acquire: "/cozumler/abone-kazanin",
    value: "/cozumler/abone-degeri",
    retention: "/cozumler/elde-tutma",
    reward: "/cozumler/odullendirme",
    efficiency: "/cozumler/operasyon-verimliligi",
  },
  /** Özellik detay sayfaları (header "Özellikler" mega-menüsü). */
  features: {
    plans: "/ozellikler/abonelik-planlari",
    bundles: "/ozellikler/paketler",
    vouchers: "/ozellikler/hediye-cekleri",
    storefront: "/ozellikler/abonelik-vitrini",
    management: "/ozellikler/abonelik-yonetimi",
    notifications: "/ozellikler/bildirimler",
    recovery: "/ozellikler/odeme-kurtarma",
    pause: "/ozellikler/duraklatma-iptal",
    billing: "/ozellikler/otomatik-tahsilat",
    integrations: "/ozellikler/entegrasyonlar",
  },
  /** SEO kanonik — mevcut relysubs.com sayfası ile aynı path. */
  ecommerceSubscription: "/e-ticaret-abonelik-sistemi",
  privacy: "/gizlilik",
  terms: "/sartlar",
} as const;
