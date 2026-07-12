import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";

import { GoogleAnalyticsProvider } from "@/components/analytics/google-analytics-provider";
import { siteConfig } from "@/config";
import {
  SEO_BRAND,
  SEO_DEFAULT_DESCRIPTION,
  SEO_PAGE_TITLE_SEGMENTS,
  SEO_ROBOTS_INDEX_FOLLOW,
} from "@/lib/seo/constants";
import { buildSeoTitle } from "@/lib/seo/title";

import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: buildSeoTitle(SEO_PAGE_TITLE_SEGMENTS.home),
    template: `%s`,
  },
  description: SEO_DEFAULT_DESCRIPTION,
  applicationName: SEO_BRAND,
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    siteName: SEO_BRAND,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: SEO_BRAND,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.ogImage],
  },
  robots: SEO_ROBOTS_INDEX_FOLLOW,
  alternates: {
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLMs" },
        { url: "/llms-full.txt", title: "LLMs Full" },
        { url: "/ai.txt", title: "AI" },
      ],
      "application/xml": [{ url: "/sitemap.xml", title: "Sitemap" }],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${baiJamjuree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
