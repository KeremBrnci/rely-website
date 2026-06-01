import type { Metadata } from "next";

/** Marka ve varsayılan SEO sabitleri */
export const SEO_BRAND = "Rely Subs" as const;

/** Arama ve schema için birincil ifadeler — title/description’da doğal kullanım. */
export const SEO_KEYWORD_PHRASES = {
  primary: "e-ticaret abonelik altyapısı",
  secondary: "e-ticaret abonelik sistemi",
  tertiary: "abonelik e-ticaret",
} as const;

/** Kanonik `<title>` segmentleri — sayfa başına benzersiz olmalı. */
export const SEO_PAGE_TITLE_SEGMENTS = {
  home: "E-ticaret Abonelik Altyapısı",
  product: "Abonelik Platformu",
} as const;

export const SEO_DEFAULT_DESCRIPTION =
  "E-ticaret abonelik altyapısı: mevcut mağazanıza abonelik planları, otomatik tahsilat, ödeme kurtarma ve müşteri portalı ekleyin. Tekrarlayan gelir için RELY Subs." as const;

export const SEO_LOCALE = "tr_TR" as const;

export const SEO_SITE_NAME = SEO_BRAND;

/** Kanonik pazarlama sayfaları — `<meta name="robots" content="index, follow">`. */
export const SEO_ROBOTS_INDEX_FOLLOW: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

/** Redirect, 404 veya giriş gibi indekslenmemesi gereken sayfalar. */
export const SEO_ROBOTS_NOINDEX: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};
