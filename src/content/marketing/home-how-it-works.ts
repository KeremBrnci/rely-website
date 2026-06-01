/**
 * Ana sayfa — "Nasıl çalışır" kurulum akışı (#how-it-works).
 * Merchant'ın "bunu nasıl kuracağım?" sorusunu yanıtlayan kısa süreç.
 */

import type { HomeFeatureIcon } from "@/content/marketing/home";

export type HomeHowItWorksStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: HomeFeatureIcon;
};

export const homeHowItWorks = {
  intro: {
    eyebrow: "Nasıl çalışır",
    title: "Dört adımda canlıya geçin",
    titleEmphasis: "canlıya geçin",
    description:
      "Karmaşık kurulum yok, geliştirici gerekmez. Mağazanızı bağlayın, planlarınızı belirleyin; gerisini RELY otomatik yönetir.",
    align: "center" as const,
  },
  steps: [
    {
      id: "hiw-connect",
      step: "01",
      icon: "workflow",
      title: "Mağazanızı bağlayın",
      description: "E-ticaret mağazanızı RELY'e bağlayın; ürün ve sipariş akışı senkron kalır.",
    },
    {
      id: "hiw-select",
      step: "02",
      icon: "layers",
      title: "Abonelik ürünlerini seçin",
      description: "Hangi ürünlerin abonelikle satılacağını belirleyin.",
    },
    {
      id: "hiw-rules",
      step: "03",
      icon: "gauge",
      title: "Planları belirleyin",
      description: "Ürünlerinizi veya paketlerinizi satmak istediğiniz süreleri ve indirimleri tanımlayın.",
    },
    {
      id: "hiw-automate",
      step: "04",
      icon: "globe",
      title: "RELY otomatik yönetsin",
      description: "Yenilemeler, tahsilatlar ve gelir kurtarma otomatik çalışır.",
    },
  ] satisfies HomeHowItWorksStep[],
} as const;
