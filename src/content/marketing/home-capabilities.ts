/**
 * Ana sayfa — yetenekler bento bölümü (#capabilities).
 * Müşteri yorumları yerine RELY'in öne çıkan özelliklerini anlatır.
 */

import type { HomeFeatureIcon } from "@/content/marketing/home";

export type HomeCapabilitySize = "wide" | "compact";
export type HomeCapabilityTone = "surface" | "tint";

export type HomeCapability = {
  id: string;
  title: string;
  description: string;
  icon: HomeFeatureIcon;
  size: HomeCapabilitySize;
  tone: HomeCapabilityTone;
};

export const homeCapabilities = {
  intro: {
    eyebrow: "Neden RELY",
    title: "Genel bir abonelik aracı değil; operasyonunuz için kurulmuş altyapı",
    titleEmphasis: "operasyonunuz için kurulmuş altyapı",
    description:
      "RELY, tekrarlayan gelir sağlamak isteyen e-ticaret markaları için baştan abonelik operasyonu olarak tasarlandı. Sonradan eklenen bir modül değil.",
    align: "center" as const,
  },
  capabilities: [
    {
      id: "cap-native",
      title: "Abonelik için kuruldu, sonradan eklenmedi",
      description:
        "Tek seferlik satış aracına iliştirilmiş bir eklenti değil; baştan abonelik operasyonu için inşa edildi.",
      icon: "layers",
      size: "wide",
      tone: "surface",
    },
    {
      id: "cap-shopify-native",
      title: "Mevcut e-ticaret altyapınızla çalışır",
      description:
        "Mağazanızı yeniden kurmadan, mevcut ürün ve ödeme akışınızın üzerine abonelik katmanı ekler.",
      icon: "workflow",
      size: "wide",
      tone: "surface",
    },
    {
      id: "cap-less-ops",
      title: "Operasyonel yükü azaltır",
      description:
        "Yenileme, başarısız ödeme ve müşteri taleplerini otomatikleştirir; ekibiniz tek tek takip etmek zorunda kalmaz.",
      icon: "shield",
      size: "wide",
      tone: "surface",
    },
    {
      id: "cap-measurable",
      title: "Tekrarlayan geliri ölçülebilir kılar",
      description:
        "Aylık tekrarlayan gelir, abone kaybı ve elde tutmayı tek yerde gösterir; gelir tahmini varsayıma değil veriye dayanır.",
      icon: "gauge",
      size: "compact",
      tone: "tint",
    },
    {
      id: "cap-scales",
      title: "Süreçleri yeniden kurmadan ölçeklenir",
      description:
        "Abone sayınız büyüdükçe yeni araçlara geçmeden aynı altyapıda ilerlersiniz.",
      icon: "sparkles",
      size: "compact",
      tone: "tint",
    },
    {
      id: "cap-real-ops",
      title: "Gerçek satıcı operasyonuna göre tasarlandı",
      description:
        "İadeler, istisnalar ve kenar durumlar dahil; günlük operasyonun gerçeğine göre kurgulandı.",
      icon: "globe",
      size: "wide",
      tone: "surface",
    },
  ] satisfies HomeCapability[],
} as const;
