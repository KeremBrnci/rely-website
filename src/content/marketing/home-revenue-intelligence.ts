/**
 * Ana sayfa — gelir zekası / analitik bölümü.
 */

export type HomeIntelligenceStat = {
  id: string;
  label: string;
  value: string;
  delta: string;
  deltaTone: "positive" | "neutral" | "negative";
};

export const homeRevenueIntelligence = {
  intro: {
    eyebrow: "Gelir zekası",
    title: "Tekrarlayan geliri tahminle değil, veriyle yönetin.",
    titleEmphasis: "veriyle yönetin",
    description:
      "RELY; MRR, aktif abonelik, kurtarılan gelir ve abone değerini tek panelde gösterir. Abonelik gelirinizi net bir şekilde takip eder, kararlarınızı veriye dayandırırsınız.",
  },
  stats: [
    {
      id: "stat-mrr",
      label: "Aylık Tekrarlayan Gelir (MRR)",
      value: "₺12.450.000",
      delta: "+%18,6",
      deltaTone: "positive",
    },
    {
      id: "stat-active",
      label: "Aktif Abonelik",
      value: "63.700",
      delta: "+%14,2",
      deltaTone: "positive",
    },
    {
      id: "stat-recovery",
      label: "Kurtarılan Gelir",
      value: "₺1.090.000",
      delta: "+%23,4",
      deltaTone: "positive",
    },
    {
      id: "stat-ltv",
      label: "Ortalama Abone Değeri (LTV)",
      value: "₺2.870",
      delta: "+%6,7",
      deltaTone: "positive",
    },
  ] satisfies HomeIntelligenceStat[],
} as const;
