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
    title:
      "Abonelik satışından fazlası. Tüm abonelik operasyonunuz tek altyapıda.",
    titleEmphasis: "Tüm abonelik operasyonunuz tek altyapıda.",
    description:
      "RELY; abonelik oluşturma, tekrarlayan tahsilat, sipariş, ödeme kurtarma ve müşteri yönetimini mevcut e-ticaret altyapınızla birlikte çalışan tek bir sistemde birleştirir.",
    align: "center" as const,
  },
  capabilities: [
    {
      id: "cap-native",
      title: "Abonelik için kuruldu, sonradan eklenmedi",
      description:
        "Tek seferlik satış sistemine sonradan eklenen bir özellik değil; tahsilattan siparişe kadar tüm abonelik yaşam döngüsü için geliştirildi.",
      icon: "layers",
      size: "wide",
      tone: "surface",
    },
    {
      id: "cap-shopify-native",
      title: "Mevcut mağazanızla birlikte çalışır",
      description:
        "E-ticaret altyapınızı yeniden kurmadan abonelik modeline geçebilirsiniz. RELY mevcut mağazanıza entegre olur ve abonelik operasyonunu ayrı bir katman olarak yönetir.",
      icon: "workflow",
      size: "wide",
      tone: "surface",
    },
    {
      id: "cap-billing-to-order",
      title: "Tahsilattan siparişe süreci otomatik yönetir",
      description:
        "Yenileme tarihleri, tekrarlayan tahsilatlar ve aboneliğe bağlı siparişler otomatik yürütülür. Ekibinizin her yenilemeyi manuel takip etmesi gerekmez.",
      icon: "shield",
      size: "wide",
      tone: "surface",
    },
    {
      id: "cap-dunning",
      title: "Başarısız ödemeleri gelire geri kazandırır",
      description:
        "Başarısız tahsilatlar otomatik olarak yeniden denenir. Ödeme sorunlarının abonelik kaybına dönüşmesini azaltan kurtarma süreçleri devreye girer.",
      icon: "shield",
      size: "wide",
      tone: "surface",
    },
    {
      id: "cap-portal",
      title: "Müşteriniz aboneliğini kendisi yönetir",
      description:
        "Müşteriler abonelik, kart ve adres bilgilerini kendi hesaplarından yönetebilir. Rutin işlemler için destek ekibine ihtiyaç azalır.",
      icon: "globe",
      size: "compact",
      tone: "tint",
    },
    {
      id: "cap-scales",
      title: "Abonelik büyür, operasyon aynı hızda büyümez",
      description:
        "Abone ve sipariş hacmi arttıkça aynı oranda manuel iş ve operasyon ekibi oluşturmak zorunda kalmadan ölçeklenebilirsiniz.",
      icon: "sparkles",
      size: "compact",
      tone: "tint",
    },
  ] satisfies HomeCapability[],
} as const;
