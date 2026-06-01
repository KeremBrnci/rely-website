/**
 * Ana sayfa — abonelik yaşam döngüsü (#lifecycle).
 * Ürünün değeri panelde değil, süreçte: sipariş → yenileme → tahsilat → kargo.
 */

export type HomeLifecycleNode = {
  id: string;
  title: string;
  description: string;
  caption?: string;
};

export const homeLifecycle = {
  intro: {
    eyebrow: "Abonelik akışı",
    title: "Siparişten teslimata, her döngü otomatik",
    titleEmphasis: "her döngü otomatik",
    description:
      "Müşteri bir kez abone olur; her döngüde tahsilat, sipariş planlanır ve sisteminize aktarılır. Siz operasyonla değil, büyümeyle ilgilenirsiniz.",
    align: "center" as const,
  },
  nodes: [
    {
      id: "lc-order",
      title: "Abonelik başlar",
      description:
        "Müşteri ilk siparişini verir; ürün, teslimat periyodu ve ödeme bilgileri kaydedilir.",
    },
    {
      id: "lc-wait",
      caption: "Belirlenen periyot",
      title: "Yenileme tarihi gelir",
      description:
        "Belirlenen teslimat aralığı dolduğunda RELY yeni döngüyü otomatik başlatır.",
    },
    {
      id: "lc-charge",
      title: "Ödeme alınır",
      description:
        "Kayıtlı karttan tahsilat yapılır; başarısız ödemelerde kurtarma akışı devreye girer.",
    },
    {
      id: "lc-create",
      title: "Sipariş oluşturulur",
      description:
        "Başarılı tahsilat sonrası yeni sipariş otomatik olarak e-ticaret altyapısına aktarılır.",
    },
    {
      id: "lc-ship",
      title: "Teslimat yapılır",
      description:
        "Marka siparişi hazırlar, kargoya verir ve abonelik bir sonraki döngüye geçer.",
    },
  ] satisfies HomeLifecycleNode[],
} as const;
