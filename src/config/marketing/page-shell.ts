/**
 * Sayfa üstü — sabit header ile hizalama (tüm pazarlama sayfaları).
 */

import { cn } from "@/lib/utils";

/** `#hero` bölümleri — SolutionHero / ürün / ana sayfa ile aynı ofset. */
export const marketingHeroHeaderOffsetClassName = "pt-[var(--site-header-offset)]";

/**
 * Hero olmayan ilk bölüm — globals.css ile de uygulanır; shell’de tekrar
 * kullanmak için (ör. yasal sayfa üst bandı).
 */
export const marketingPageTopClearanceClassName = cn(
  marketingHeroHeaderOffsetClassName,
  "pb-[clamp(1.5rem,3vw,2.5rem)]",
);

/** Pre-footer CTA üstü — main son bölüm ile koyu band arasında boşluk. */
export const marketingPreFooterGapClassName =
  "mt-[var(--marketing-pre-footer-gap)]";
