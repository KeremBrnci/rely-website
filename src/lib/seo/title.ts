import { SEO_BRAND } from "@/lib/seo/constants";

/**
 * Tam tarayıcı başlığı: `Rely Subs | {segment}`
 * Anasayfa örneği: buildSeoTitle("E-ticaret Abonelik Altyapısı")
 */
export function buildSeoTitle(titleSegment: string): string {
  const segment = titleSegment.trim();
  if (!segment) return SEO_BRAND;
  if (segment.startsWith(`${SEO_BRAND} |`)) return segment;
  return `${SEO_BRAND} | ${segment}`;
}

/** İçerik dosyalarındaki uzun başlıklardan sayfa segmenti çıkarır. */
export function normalizeTitleSegment(rawTitle: string): string {
  return rawTitle
    .replace(/\s*—\s*RELY Subs.*$/i, "")
    .replace(/\s*—\s*Rely Subs.*$/i, "")
    .replace(/\s*·\s*Rely Subs.*$/i, "")
    .replace(/\s*·\s*Rely.*$/i, "")
    .replace(/^Rely\s*—\s*/i, "")
    .replace(/^RELY Subs\s*—\s*/i, "")
    .trim();
}
