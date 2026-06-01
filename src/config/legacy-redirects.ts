/**
 * relysubs.com legacy URL → yeni site (301).
 * Kaynak: sitemap-blog.xml, sitemap-pages.xml (Şubat 2026).
 */

/** Relative import — `next.config.ts` bu dosyayı yüklerken `@/` alias çözülmez. */
import { routes } from "./routes";

type LegacyRedirectEntry = {
  source: string;
  destination: string;
};

type LegacyRedirect = LegacyRedirectEntry & {
  permanent: true;
};

/** Eski blog yazıları → yeni yazı, sektör veya ilgili sayfa. */
const legacyBlogRedirects: LegacyRedirectEntry[] = [
  {
    source: "/blog/abonelik-ekonomisinde-musteri-sadakati",
    destination: "/blog/abonelik-musteri-sadakati",
  },
  {
    source: "/blog/headless-abonelik-sistemlerinin-avantajlari",
    destination: routes.product,
  },
  {
    source: "/blog/ltv-musteri-yasam-boyu-degeri-hesaplama",
    destination: "/blog/ltv-nasil-artirilir",
  },
  {
    source: "/blog/abonelik-modeli-ile-ciro-artirma-stratejileri",
    destination: "/blog/mrr-tekrarlayan-gelir-hesaplama",
  },
  {
    source: "/blog/rely-subs-urun-incelemesi-headless-altyapi",
    destination: routes.product,
  },
  {
    source: "/blog/kahve-markalari-icin-abonelik-rehberi",
    destination: routes.subscriptions.coffee,
  },
  {
    source: "/blog/kozmetik-sektorunde-tekrarlayan-satis-stratejileri",
    destination: routes.subscriptions.beauty,
  },
  {
    source: "/blog/supplement-pazarinda-abonelik-otomasyonu",
    destination: routes.subscriptions.supplements,
  },
  {
    source: "/blog/pet-ekosisteminde-abonelik-ve-sadakat",
    destination: routes.subscriptions.petFood,
  },
  {
    source: "/blog/e-ticaret-abonelik-sistemi-kurma-rehberi",
    destination: routes.ecommerceSubscription,
  },
  {
    source: "/blog/isletmeler-icin-dogru-abonelik-sistemi",
    destination: routes.product,
  },
  {
    source: "/blog/shopify-magazalari-icin-abonelik-cozumleri",
    destination: "/blog/shopify-abonelik-oncesi",
  },
  {
    source: "/blog/tekrari-odeme-sistemlerinin-teknik-altyapisi",
    destination: routes.features.billing,
  },
  {
    source: "/blog/aylik-odeme-sistemi-ile-finansal-istikrar",
    destination: "/blog/mrr-tekrarlayan-gelir-hesaplama",
  },
  {
    source: "/blog/e-ticaret-tekrari-odeme-sistemi-avantajlari",
    destination: routes.ecommerceSubscription,
  },
  {
    source: "/blog/abonelikle-satis-artirma-ve-musteri-bagliligi",
    destination: routes.solutions.acquire,
  },
];

/** Anahtar kelime landing URL'leri → kanonik sayfalar (301). */
const keywordSeoRedirects: LegacyRedirectEntry[] = [
  {
    source: "/e-ticaret-abonelik",
    destination: routes.ecommerceSubscription,
  },
  {
    source: "/abonelik-e-ticaret",
    destination: routes.ecommerceSubscription,
  },
  {
    source: "/e-ticaret-abonelik-altyapisi",
    destination: routes.product,
  },
  {
    source: "/abonelik-e-ticaret-altyapisi",
    destination: routes.product,
  },
  {
    source: "/abonelik-altyapisi",
    destination: routes.product,
  },
  {
    source: "/e-ticaret-abonelik-yazilimi",
    destination: routes.ecommerceSubscription,
  },
];

/** Eski pazarlama / SEO landing sayfaları. */
const legacyPageRedirects: LegacyRedirectEntry[] = [
  {
    source: "/abonelik-sistemi",
    destination: routes.product,
  },
  {
    source: "/hakkimizda",
    destination: routes.product,
  },
  {
    source: "/cozumler",
    destination: routes.solutions.acquire,
  },
  {
    source: "/entegrasyonlar",
    destination: routes.features.integrations,
  },
  {
    source: "/is-ortakligi",
    destination: routes.contact,
  },
  {
    source: "/kahve-abonelik-sistemi",
    destination: routes.subscriptions.coffee,
  },
  {
    source: "/kozmetik-abonelik-altyapisi",
    destination: routes.subscriptions.beauty,
  },
  {
    source: "/supplement-abonelik-yazilimi",
    destination: routes.subscriptions.supplements,
  },
  {
    source: "/pet-urunleri-abonelik-sistemi",
    destination: routes.subscriptions.petFood,
  },
  {
    source: "/gida-abonelik-sistemi",
    destination: routes.subscriptions.grocery,
  },
  {
    source: "/vitamin-abonelik-sistemi",
    destination: routes.subscriptions.supplements,
  },
  {
    source: "/protein-tozu-abonelik-sistemi",
    destination: routes.subscriptions.protein,
  },
  {
    source: "/su-abonelik-sistemi",
    destination: routes.ecommerceSubscription,
  },
  {
    source: "/temizlik-urunu-abonelik-sistemi",
    destination: routes.subscriptions.householdEssentials,
  },
  {
    source: "/bebek-bezi-abonelik-sistemi",
    destination: routes.ecommerceSubscription,
  },
  {
    source: "/shopify-abonelik",
    destination: "/blog/shopify-abonelik-oncesi",
  },
  {
    source: "/pricing",
    destination: routes.pricingTr,
  },
];

/** Eski İngilizce path’ler → yeni Türkçe kanonik URL’ler. */
const englishPathRedirects: LegacyRedirectEntry[] = [
  {
    source: "/subscriptions/coffee",
    destination: routes.subscriptions.coffee,
  },
  {
    source: "/subscriptions/beauty",
    destination: routes.subscriptions.beauty,
  },
  {
    source: "/subscriptions/supplements",
    destination: routes.subscriptions.supplements,
  },
  {
    source: "/subscriptions/pet-food",
    destination: routes.subscriptions.petFood,
  },
  {
    source: "/subscriptions/meal-kits",
    destination: routes.subscriptions.mealKits,
  },
  {
    source: "/subscriptions/wellness",
    destination: routes.subscriptions.wellness,
  },
  {
    source: "/subscriptions/subscription-boxes",
    destination: routes.subscriptions.subscriptionBoxes,
  },
  {
    source: "/subscriptions/abonelik-kutulari",
    destination: routes.subscriptions.subscriptionBoxes,
  },
  {
    source: "/subscriptions/:path*",
    destination: routes.product,
  },
  {
    source: "/ozellikler/storefront",
    destination: routes.product,
  },
  {
    source: "/ozellikler/abonelik-vitrini",
    destination: routes.product,
  },
  {
    source: "/ozellikler/abonelik-yonetimi",
    destination: routes.product,
  },
  {
    source: "/ozellikler/bildirimler",
    destination: routes.product,
  },
];

export const legacyRedirects: LegacyRedirect[] = [
  ...keywordSeoRedirects,
  ...legacyBlogRedirects,
  ...legacyPageRedirects,
  ...englishPathRedirects,
].map((entry) => ({ ...entry, permanent: true as const }));
