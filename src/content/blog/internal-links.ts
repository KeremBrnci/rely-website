/**
 * Blog iç linkleme — yazılar arası, ürün / fiyat / iletişim sayfalarına çapraz bağlantılar.
 */

import { routes } from "@/config/routes";
import { blogPostsMeta } from "@/content/blog/post-meta";
import type { BlogLinkItem, BlogPostSection } from "@/content/blog/types";

const titleBySlug = Object.fromEntries(blogPostsMeta.map((post) => [post.slug, post.title]));

export function blogPostHref(slug: string): string {
  return `${routes.blog}/${slug}`;
}

/** Her yazı için 3 ilgili blog yazısı (çift yönlü ağ). */
const blogRelatedSlugs: Record<string, string[]> = {
  "tekrar-eden-gelir-nedir": [
    "mrr-tekrarlayan-gelir-hesaplama",
    "tek-seferlik-satistan-tekrarlayan-gelire-gecis",
    "reklam-yerine-mevcut-musteri-degeri",
  ],
  "reklam-yerine-mevcut-musteri-degeri": [
    "ltv-nasil-artirilir",
    "tekrar-eden-gelir-nedir",
    "2026-eticaret-buyume-kanali-abonelik",
  ],
  "tek-seferlik-satistan-tekrarlayan-gelire-gecis": [
    "mrr-tekrarlayan-gelir-hesaplama",
    "shopify-abonelik-oncesi",
    "2026-eticaret-buyume-kanali-abonelik",
  ],
  "abonelik-urun-kategorileri": [
    "kahve-takviye-kozmetik-abonelik",
    "subscription-box-is-modeli",
    "tek-seferlik-satistan-tekrarlayan-gelire-gecis",
  ],
  "ltv-nasil-artirilir": [
    "reklam-yerine-mevcut-musteri-degeri",
    "mrr-tekrarlayan-gelir-hesaplama",
    "churn-azaltma-10-yol",
  ],
  "basarisiz-odemeler-gelir-kaybi": [
    "churn-azaltma-10-yol",
    "mrr-tekrarlayan-gelir-hesaplama",
    "shopify-abonelik-oncesi",
  ],
  "shopify-abonelik-oncesi": [
    "tek-seferlik-satistan-tekrarlayan-gelire-gecis",
    "basarisiz-odemeler-gelir-kaybi",
    "abonelik-ilk-1000-musteri",
  ],
  "churn-azaltma-10-yol": [
    "basarisiz-odemeler-gelir-kaybi",
    "abonelik-musteri-sadakati",
    "ltv-nasil-artirilir",
  ],
  "kahve-takviye-kozmetik-abonelik": [
    "abonelik-urun-kategorileri",
    "subscription-box-is-modeli",
    "abonelik-musteri-sadakati",
  ],
  "mrr-tekrarlayan-gelir-hesaplama": [
    "tekrar-eden-gelir-nedir",
    "ltv-nasil-artirilir",
    "tek-seferlik-satistan-tekrarlayan-gelire-gecis",
  ],
  "abonelik-musteri-sadakati": [
    "churn-azaltma-10-yol",
    "ltv-nasil-artirilir",
    "subscription-commerce-d2c",
  ],
  "subscription-commerce-d2c": [
    "tek-seferlik-satistan-tekrarlayan-gelire-gecis",
    "2026-eticaret-buyume-kanali-abonelik",
    "abonelik-ilk-1000-musteri",
  ],
  "subscription-box-is-modeli": [
    "abonelik-urun-kategorileri",
    "kahve-takviye-kozmetik-abonelik",
    "abonelik-ilk-1000-musteri",
  ],
  "abonelik-ilk-1000-musteri": [
    "shopify-abonelik-oncesi",
    "subscription-commerce-d2c",
    "2026-eticaret-buyume-kanali-abonelik",
  ],
  "2026-eticaret-buyume-kanali-abonelik": [
    "tek-seferlik-satistan-tekrarlayan-gelire-gecis",
    "mrr-tekrarlayan-gelir-hesaplama",
    "subscription-commerce-d2c",
  ],
};

/** Yazıya özel ek platform linkleri. */
const blogExtraPlatformLinks: Record<string, BlogLinkItem[]> = {
  "basarisiz-odemeler-gelir-kaybi": [
    {
      href: routes.features.recovery,
      label: "Ödeme kurtarma",
      description: "Başarısız tahsilatları otomatik geri kazanın.",
    },
  ],
  "churn-azaltma-10-yol": [
    {
      href: routes.features.pause,
      label: "Duraklatma ve iptal yönetimi",
      description: "İptal yerine duraklatma sunarak abone kaybını azaltın.",
    },
  ],
  "shopify-abonelik-oncesi": [
    {
      href: routes.features.integrations,
      label: "Entegrasyonlar",
      description: "Shopify, İkas ve diğer e-ticaret platformlarıyla mağaza bağlantısı.",
    },
  ],
  "abonelik-ilk-1000-musteri": [
    {
      href: routes.features.vouchers,
      label: "Hediye çekleri",
      description: "İlk abonelik dönüşümü için kampanya kodları.",
    },
  ],
};

/** İlk paragrafa eklenecek doğal inline link cümlesi (markdown). */
const blogInlineLinkSuffix: Record<string, string> = {
  "tekrar-eden-gelir-nedir":
    " Hesaplama için [MRR rehberine](/blog/mrr-tekrarlayan-gelir-hesaplama) ve geçiş planı için [tek seferlik satıştan tekrarlayan gelire](/blog/tek-seferlik-satistan-tekrarlayan-gelire-gecis) yazısına bakın.",
  "reklam-yerine-mevcut-musteri-degeri":
    " LTV kaldıraçları için [müşteri yaşam boyu değeri rehberini](/blog/ltv-nasil-artirilir) ve [ürün sayfamızı](/urun) inceleyebilirsiniz.",
  "tek-seferlik-satistan-tekrarlayan-gelire-gecis":
    " Altyapı seçimi için [abonelik platformumuzu](/urun) ve [fiyatlandırmayı](/fiyatlandirma) inceleyebilirsiniz.",
  "abonelik-urun-kategorileri":
    " Sektör örnekleri için [kahve, takviye ve kozmetik rehberimize](/blog/kahve-takviye-kozmetik-abonelik) de bakın.",
  "ltv-nasil-artirilir":
    " Metrik takibi için [MRR hesaplama rehberi](/blog/mrr-tekrarlayan-gelir-hesaplama) ile birlikte okuyun.",
  "basarisiz-odemeler-gelir-kaybi":
    " Operasyonel çözüm: [ödeme kurtarma](/ozellikler/odeme-kurtarma) ve [otomatik tahsilat](/ozellikler/otomatik-tahsilat).",
  "shopify-abonelik-oncesi":
    " Kurulum öncesi [ürün sayfamızdaki](/urun) modülleri ve [iletişim](/iletisim) formunu kullanın.",
  "churn-azaltma-10-yol":
    " Elde tutma araçları [ürün platformunda](/urun) duraklatma ve ödeme kurtarma ile desteklenir.",
  "kahve-takviye-kozmetik-abonelik":
    " Dikey sayfalarımız: [kahve](/sektorler/kahve), [takviye](/sektorler/takviye) ve [güzellik](/sektorler/guzellik) abonelikleri.",
  "mrr-tekrarlayan-gelir-hesaplama":
    " Geçiş planı: [tek seferlik satıştan tekrarlayan gelire](/blog/tek-seferlik-satistan-tekrarlayan-gelire-gecis) rehberi.",
  "abonelik-musteri-sadakati":
    " Sadakati korurken [abone kaybını azaltma](/blog/churn-azaltma-10-yol) yazısı tamamlayıcı okumadır.",
  "subscription-commerce-d2c":
    " Türkiye odaklı genel bakış: [e-ticaret abonelik sistemi](/e-ticaret-abonelik-sistemi) sayfamız.",
  "subscription-box-is-modeli":
    " Kutu modeli için [uygun ürün kategorileri](/blog/abonelik-urun-kategorileri) rehberini okuyun.",
  "abonelik-ilk-1000-musteri":
    " İlk aboneleri aldıktan sonra [demo talep ederek](/iletisim) ölçek planınızı netleştirin.",
  "2026-eticaret-buyume-kanali-abonelik":
    " Büyüme kanalı olarak abonelik altyapısı: [RELY Subs ürünü](/urun) ve [fiyatlandırma](/fiyatlandirma).",
};

function standardPlatformLinks(slug: string): BlogLinkItem[] {
  const base: BlogLinkItem[] = [
    {
      href: routes.product,
      label: "Abonelik platformu",
      description: "Planlar, tahsilat, müşteri portalı ve operasyon paneli.",
    },
    {
      href: routes.ecommerceSubscription,
      label: "E-ticaret abonelik sistemi",
      description: "Abonelik modeli ve tekrarlayan gelir rehberi.",
    },
    {
      href: routes.pricingTr,
      label: "Fiyatlandırma",
      description: "Platform ücreti ve komisyon yapısı.",
    },
    {
      href: routes.contact,
      label: "Demo talep edin",
      description: "Ekibimizle iletişime geçin.",
    },
  ];

  const extra = blogExtraPlatformLinks[slug] ?? [];
  return [...base, ...extra];
}

function relatedPostLinks(slug: string): BlogLinkItem[] {
  const related = blogRelatedSlugs[slug] ?? [];
  return related.map((relatedSlug) => ({
    href: blogPostHref(relatedSlug),
    label: titleBySlug[relatedSlug] ?? relatedSlug,
  }));
}

export function buildBlogInternalLinkSections(slug: string): BlogPostSection[] {
  const platformItems = standardPlatformLinks(slug);
  const relatedItems = relatedPostLinks(slug);

  if (platformItems.length === 0 && relatedItems.length === 0) {
    return [];
  }

  const sections: BlogPostSection[] = [];

  if (platformItems.length > 0) {
    sections.push(
      { type: "h2", text: "RELY Subs kaynakları" },
      { type: "links", title: "Platform ve iletişim", items: platformItems },
    );
  }

  if (relatedItems.length > 0) {
    sections.push(
      { type: "h2", text: "İlgili okumalar" },
      { type: "links", title: "Blog yazıları", items: relatedItems },
    );
  }

  return sections;
}

export function injectBlogInlineLinks(
  sections: BlogPostSection[],
  slug: string,
): BlogPostSection[] {
  const suffix = blogInlineLinkSuffix[slug];
  if (!suffix) return sections;

  let injected = false;
  return sections.map((section) => {
    if (injected || section.type !== "p") return section;
    injected = true;
    return { ...section, text: `${section.text}${suffix}` };
  });
}

export function enrichBlogSections(
  sections: BlogPostSection[],
  slug: string,
): BlogPostSection[] {
  const withInline = injectBlogInlineLinks(sections, slug);
  return [...withInline, ...buildBlogInternalLinkSections(slug)];
}
