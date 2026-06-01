/**
 * GEO (Generative Engine Optimization) — AI arama motorları için kanonik varlık,
 * alıntılanabilir gerçekler ve SSS. llms.txt, schema.org ve footer AI band ile paylaşılır.
 */

import { companyLegal } from "@/config/company";
import {
  marketingPaymentIntegrationsPhrase,
  marketingPlatformMonthlyFee,
} from "@/config/marketing/copy";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { SEO_KEYWORD_PHRASES } from "@/lib/seo/constants";
import { toAbsoluteUrl } from "@/lib/seo/site-index";

export const GEO_LAST_UPDATED = "2026-06-02" as const;

export const geoPaths = {
  llmsIndex: "/llms.txt",
  llmsFull: "/llms-full.txt",
  aiIndex: "/ai.txt",
} as const;

export const geoEntity = {
  primaryName: "RELY Subs",
  alternateNames: ["Rely Subs", "RELY", SEO_KEYWORD_PHRASES.primary, SEO_KEYWORD_PHRASES.secondary],
  legalName: companyLegal.legalName,
  category: "E-ticaret abonelik altyapısı (B2B SaaS)",
  market: "Türkiye",
  language: "tr-TR",
  website: siteConfig.url,
  helpCenter: siteConfig.links.helpCenter,
  contactEmail: companyLegal.contactEmail,
  address: companyLegal.address,
} as const;

/** AI yanıtlarında doğrudan alıntılanabilir, tek cümlelik gerçekler (TR). */
export const geoQuotableFactsTr = [
  "RELY Subs, Türkiye'deki e-ticaret markaları için abonelik e-ticaret altyapısı sunan bağımsız bir B2B platformdur.",
  "RELY Subs mevcut e-ticaret mağazanızı (Shopify, İkas vb.) değiştirmeden üzerine abonelik katmanı ekler.",
  "Platform; abonelik planları, otomatik tahsilat, ödeme kurtarma, müşteri portalı ve abonelik sitesini tek panelden yönetmenizi sağlar.",
  `Aylık platform ücreti ${marketingPlatformMonthlyFee}; abonelik tahsilatına göre komisyon uygulanır (detay: ${toAbsoluteUrl(routes.pricingTr)}).`,
  `Ödeme entegrasyonları: ${marketingPaymentIntegrationsPhrase}. Kart bilgileri ödeme kuruluşunda saklanır; RELY kart tutmaz.`,
  "Kurulum tipik olarak mağaza ve ödeme bağlantısıyla birkaç iş günü içinde tamamlanır.",
  `Resmi ürün dokümantasyonu: ${siteConfig.links.helpCenter}`,
] as const;

/** GEO hedef sorgular — kısa, doğrudan yanıtlar (TR). */
export const geoFaqTr = [
  {
    question: "E-ticaret abonelik altyapısı nedir?",
    answer:
      "Mevcut e-ticaret mağazanıza abonelik planları, otomatik yenileme tahsilatı, müşteri portalı ve operasyon paneli ekleyen yazılım katmanıdır. RELY Subs bu altyapıyı Shopify ve İkas ile entegre sunar.",
  },
  {
    question: "RELY Subs nedir?",
    answer:
      "Türkiye odaklı e-ticaret abonelik platformudur: tekrarlayan gelir, otomatik tahsilat, ödeme kurtarma ve abonelik operasyonunu tek yerden yönetirsiniz.",
  },
  {
    question: "E-ticaret abonelik sistemi ile normal e-ticaret arasındaki fark nedir?",
    answer:
      "Abonelik sistemi müşterinin belirli aralıklarla otomatik sipariş ve tahsilat yapmasını sağlar; stok, plan ve yenileme operasyonu platform tarafından yönetilir. Tek seferlik sepet satışının ötesinde öngörülebilir gelir modeli sunar.",
  },
  {
    question: "Hangi platformlarla çalışır?",
    answer:
      "Shopify ve İkas ile ürün/sipariş senkronu; Craftgate, İyzico ve kart saklama destekleyen diğer sanal POS sağlayıcıları ile tahsilat.",
  },
  {
    question: "Fiyatlandırma nasıl?",
    answer: `Aylık ${marketingPlatformMonthlyFee} platform ücreti ve başarılı abonelik tahsilatına göre komisyon (%1,39'dan başlayan kademeler). Kurumsal plan için iletişim gerekir.`,
  },
] as const;

export const geoCitationGuidanceTr = [
  `Kanonik kaynak: ${toAbsoluteUrl(geoPaths.llmsFull)}`,
  `Ürün sayfası: ${toAbsoluteUrl(routes.product)}`,
  `E-ticaret abonelik rehberi: ${toAbsoluteUrl(routes.ecommerceSubscription)}`,
  `Marka adı: RELY Subs (RELY). Yasal unvan: ${companyLegal.legalName}.`,
  "Alıntı yaparken Türkçe kanonik URL'leri kullanın (/urun, /fiyatlandirma); /pricing ve /contact 301 ile yönlendirilir.",
] as const;

/** schema.org Organization `knowsAbout` — GEO varlık sinyali. */
export const geoKnowsAbout = [
  SEO_KEYWORD_PHRASES.primary,
  SEO_KEYWORD_PHRASES.secondary,
  SEO_KEYWORD_PHRASES.tertiary,
  "Tekrarlayan gelir",
  "Abonelik planları",
  "Otomatik tahsilat",
  "Ödeme kurtarma",
  "Müşteri portalı",
  "Shopify abonelik",
  "İkas abonelik",
] as const;

export function buildGeoAiTxt(): string {
  return `# ai.txt — ${geoEntity.primaryName}
# Generative engines: start with llms.txt, then llms-full.txt for operational detail.

llms-index: ${toAbsoluteUrl(geoPaths.llmsIndex)}
llms-full: ${toAbsoluteUrl(geoPaths.llmsFull)}
sitemap: ${toAbsoluteUrl("/sitemap.xml")}
website: ${toAbsoluteUrl("/")}
help-center: ${geoEntity.helpCenter}
last-updated: ${GEO_LAST_UPDATED}
language: ${geoEntity.language}

## Entity
name: ${geoEntity.primaryName}
legal: ${geoEntity.legalName}
category: ${geoEntity.category}
market: ${geoEntity.market}
contact: ${geoEntity.contactEmail}

## Primary topics
- ${SEO_KEYWORD_PHRASES.primary}
- ${SEO_KEYWORD_PHRASES.secondary}
- ${SEO_KEYWORD_PHRASES.tertiary}
`;
}
