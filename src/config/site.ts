const PRODUCTION_SITE_URL = "https://relysubs.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const fallback =
    process.env.NODE_ENV === "production" ? PRODUCTION_SITE_URL : "http://localhost:3000";
  if (!raw) return fallback;
  try {
    return new URL(raw).href.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: "Rely Subs",
  logoSrc: "/brand/logo-standard.svg",
  markSrc: "/brand/ms-icon-310x310.png",
  description:
    "E-ticaret abonelik altyapısı: abonelik planları, otomatik tahsilat, ödeme kurtarma ve müşteri portalı. Mevcut e-ticaret mağazanızla uyumlu tekrarlayan gelir platformu.",
  footerTagline:
    "Modern ticaret markaları için tekrarlayan gelir altyapısı.",
  url: resolveSiteUrl(),
  /** Sosyal önizleme — 1200×630 önerilir; yoksa marka ikonu kullanılır */
  ogImage: "/brand/ms-icon-310x310.png",
  links: {
    /** Ürün dokümantasyonu — help.relysubs.com */
    helpCenter: "https://help.relysubs.com/",
    /** Kanonik profiller — relysubs.com footer ile uyumlu */
    x: "https://x.com/relysubs",
    linkedin: "https://www.linkedin.com/company/relysubs",
    instagram: "https://www.instagram.com/relysubs",
  },
} as const;

export const siteSocialLinks = [
  { id: "x", label: "X (Twitter)", href: siteConfig.links.x },
  { id: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin },
  { id: "instagram", label: "Instagram", href: siteConfig.links.instagram },
] as const;

export type SiteConfig = typeof siteConfig;
