/**
 * Ana sayfa kurulum / süreç bölümü (SSS üstü).
 */

export type HomeSetupStep = {
  id: string;
  index: string;
  label: string;
  title: { before: string; accent: string; after?: string };
  description: string;
};

export const homeSetup = {
  badge: "Kurulum",
  title: { before: "Büyük etki, sizin tarafınızda ", accent: "minimal efor." },
  description:
    "Rely ile kurulum genelde şöyle ilerler: mevcut ticaret altyapınıza bağlanır, abonelik kurallarını birlikte netleştirir, ardından müşterilerinize sunarsınız. Çoğu ekip iki haftadan kısa sürede canlıya geçer.",
  steps: [
    {
      id: "setup-integration",
      index: "01",
      label: "Entegrasyon",
      title: {
        before: "Mağazanıza ",
        accent: "sorunsuz bağlanın",
      },
      description:
        "Ödeme, katalog ve müşteri verilerini mevcut platformunuzla senkronize ederiz — ek bir altyapı kurmanıza gerek kalmaz.",
    },
    {
      id: "setup-policy",
      index: "02",
      label: "Politika",
      title: {
        before: "Kuralları ",
        accent: "birlikte",
        after: " tanımlayın",
      },
      description:
        "Planlar, denemeler, yenileme ve tahsilat akışlarını operasyon ekibinizle hizalarız; herkes aynı playbook üzerinde çalışır.",
    },
    {
      id: "setup-launch",
      index: "03",
      label: "Yayın",
      title: {
        before: "Rely ",
        accent: "canlıda",
        after: " çalışır",
      },
      description:
        "Müşteri portalı ve gelir görünürlüğü açılır; ekibiniz abonelikleri tek kontrol yüzeyinden yönetmeye başlar.",
    },
  ] satisfies HomeSetupStep[],
} as const;
