import type { Metadata } from "next";

import { routes } from "@/config/routes";
import { getBlogPostMeta } from "@/content/blog/post-meta";
import type { FeatureKey } from "@/content/marketing/features";
import { featuresContent } from "@/content/marketing/features";
import { contactPageMeta } from "@/content/marketing/contact-page";
import { ecommerceSubscriptionMeta } from "@/content/marketing/ecommerce-subscription-system";
import { homeMeta } from "@/content/marketing/home";
import { privacyPage, termsPage } from "@/content/marketing/legal-pages";
import { pricingPageMeta } from "@/content/marketing/pricing-page";
import { productPageMeta } from "@/content/marketing/product-page";
import { referencesPageMeta } from "@/content/marketing/references-page";
import type { SolutionKey } from "@/content/marketing/solutions";
import { solutionsContent } from "@/content/marketing/solutions";
import {
  getSubscriptionVerticalBySlug,
  type SubscriptionVerticalSlug,
} from "@/content/marketing/subscription-verticals";
import { createMetadataFromMeta, createPageMetadata } from "@/lib/seo/create-metadata";
import { SEO_PAGE_TITLE_SEGMENTS } from "@/lib/seo/constants";
import { buildSeoTitle } from "@/lib/seo/title";

export const homePageMetadata: Metadata = createPageMetadata({
  title: SEO_PAGE_TITLE_SEGMENTS.home,
  description: homeMeta.description,
  pathname: routes.home,
});

export const productPageMetadata: Metadata = createPageMetadata({
  title: productPageMeta.title,
  description: productPageMeta.description,
  pathname: routes.product,
});

export const pricingPageMetadata: Metadata = createMetadataFromMeta(
  pricingPageMeta,
  routes.pricingTr,
);

export const contactPageMetadata: Metadata = createMetadataFromMeta(
  contactPageMeta,
  routes.contact,
);

export const referencesPageMetadata: Metadata = createMetadataFromMeta(
  referencesPageMeta,
  routes.references,
  { noIndex: true },
);

export const blogListPageMetadata: Metadata = createMetadataFromMeta(
  {
    title: "Blog",
    description:
      "E-ticaret abonelik, tekrarlayan gelir, otomatik tahsilat ve abone yönetimi üzerine Türkçe rehberler ve uygulanabilir ipuçları.",
  },
  routes.blog,
);

export const ecommerceSeoPageMetadata: Metadata = createMetadataFromMeta(
  ecommerceSubscriptionMeta,
  routes.ecommerceSubscription,
);

export const privacyPageMetadata: Metadata = createMetadataFromMeta(
  privacyPage.meta,
  routes.privacy,
);

export const termsPageMetadata: Metadata = createMetadataFromMeta(
  termsPage.meta,
  routes.terms,
);

export function featurePageMetadata(key: FeatureKey): Metadata {
  const { meta, href } = featuresContent[key];
  return createMetadataFromMeta(meta, href);
}

export function solutionPageMetadata(key: SolutionKey): Metadata {
  const { meta, href } = solutionsContent[key];
  return createMetadataFromMeta(meta, href);
}

export function subscriptionVerticalPageMetadata(slug: SubscriptionVerticalSlug): Metadata {
  const { meta, href } = getSubscriptionVerticalBySlug(slug);
  return createMetadataFromMeta(meta, href);
}

export function blogPostPageMetadata(slug: string): Metadata | null {
  const post = getBlogPostMeta(slug);
  if (!post) return null;

  return createPageMetadata({
    title: post.title,
    description: post.description,
    pathname: `${routes.blog}/${slug}`,
    ogType: "article",
    publishedTime: post.publishedAt,
  });
}

export function blogPostSchemaTitle(slug: string): string | null {
  const post = getBlogPostMeta(slug);
  if (!post) return null;
  return buildSeoTitle(post.title);
}
