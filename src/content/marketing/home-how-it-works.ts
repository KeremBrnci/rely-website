/**
 * Ana sayfa — "Nasıl çalışır" kurulum akışı (#how-it-works).
 * İlk üç adım merchant kurulumu, son adım RELY'nin devraldığı operasyon.
 */

export type HomeHowItWorksStep = {
  id: string;
  step: string;
  title: string;
  /** Başlıkta brand blue ile vurgulanacak ifade (başlığın alt dizesi olmalı). */
  titleEmphasis?: string;
  description: string;
  /** RELY'nin operasyonu devraldığı adım — subtle tint ile ayrışır. */
  managedByRely?: boolean;
};

export const homeHowItWorks = {
  intro: {
    eyebrow: "Nasıl çalışır",
    title: "3 adımda kurun. Gerisini RELY yönetsin.",
    titleEmphasis: "Gerisini RELY yönetsin.",
    description:
      "Mağazanızı bağlayın, abonelik modelinizi oluşturun. Yenileme ve tahsilat operasyonunu RELY otomatik yönetsin.",
    align: "center" as const,
  },
  steps: [
    {
      id: "hiw-connect",
      step: "01",
      title: "Mağazanızı bağlayın",
      description:
        "Mağazanızı RELY'e bağlayın, ürün ve sipariş akışınızı senkronize edin.",
    },
    {
      id: "hiw-select",
      step: "02",
      title: "Ürünlerinizi seçin",
      description: "Abonelikle sunacağınız ürünleri ve paketleri belirleyin.",
    },
    {
      id: "hiw-rules",
      step: "03",
      title: "Planınızı oluşturun",
      description: "Periyot, fiyat ve abonelik avantajlarınızı tanımlayın.",
    },
    {
      id: "hiw-automate",
      step: "04",
      title: "Gerisini RELY yönetsin",
      titleEmphasis: "RELY",
      description: "Yenilemeler, tahsilatlar ve ödeme süreçleri otomatik ilerlesin.",
      managedByRely: true,
    },
  ] satisfies HomeHowItWorksStep[],
} as const;
