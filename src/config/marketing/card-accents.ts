/**
 * Paylaşılan kart accent paleti — navy markayı destekleyen uyumlu renkler.
 * Kart numara/ikon çiplerinde ve hover kenarında index'e göre dönüşümlü kullanılır.
 */

export type CardAccent = "navy" | "teal" | "amber" | "indigo" | "rose";

export const cardAccentOrder: CardAccent[] = [
  "navy",
  "teal",
  "amber",
  "indigo",
  "rose",
];

export function getCardAccent(index: number): CardAccent {
  return cardAccentOrder[index % cardAccentOrder.length] ?? "navy";
}

/** Çip arka planı + ikon/numara rengi (dolu çip — soluk değil). */
export const cardAccentChipClassName: Record<CardAccent, string> = {
  navy: "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_70%,#ffffff)] text-[color:var(--marketing-primary)]",
  teal: "bg-[color:var(--marketing-accent-teal-soft)] text-[color:var(--marketing-accent-teal)]",
  amber: "bg-[color:var(--marketing-accent-amber-soft)] text-[color:var(--marketing-accent-amber)]",
  indigo: "bg-[color:var(--marketing-accent-indigo-soft)] text-[color:var(--marketing-accent-indigo)]",
  rose: "bg-[color:var(--marketing-accent-rose-soft)] text-[color:var(--marketing-accent-rose)]",
};

/** Accent rengin ham CSS değişkeni (inline style / metin rengi için). */
export const cardAccentColorVar: Record<CardAccent, string> = {
  navy: "var(--marketing-primary)",
  teal: "var(--marketing-accent-teal)",
  amber: "var(--marketing-accent-amber)",
  indigo: "var(--marketing-accent-indigo)",
  rose: "var(--marketing-accent-rose)",
};

/** Kartın `--rely-card-accent` CSS değişkenini set eder (animasyonlu border + hover). */
export const cardAccentVarClassName: Record<CardAccent, string> = {
  navy: "[--rely-card-accent:var(--marketing-primary)]",
  teal: "[--rely-card-accent:var(--marketing-accent-teal)]",
  amber: "[--rely-card-accent:var(--marketing-accent-amber)]",
  indigo: "[--rely-card-accent:var(--marketing-accent-indigo)]",
  rose: "[--rely-card-accent:var(--marketing-accent-rose)]",
};
