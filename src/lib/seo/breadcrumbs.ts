import { routes } from "@/config/routes";
import { normalizeTitleSegment } from "@/lib/seo/title";

export type BreadcrumbItem = {
  name: string;
  pathname: string;
};

export const seoBreadcrumbRoots = {
  home: { name: "Ana sayfa", pathname: routes.home } satisfies BreadcrumbItem,
  featuresHub: {
    name: "Özellikler",
    pathname: routes.features.plans,
  } satisfies BreadcrumbItem,
  solutionsHub: {
    name: "Çözümler",
    pathname: routes.solutions.acquire,
  } satisfies BreadcrumbItem,
  sectorsHub: {
    name: "Sektörler",
    pathname: routes.subscriptions.coffee,
  } satisfies BreadcrumbItem,
  blog: { name: "Blog", pathname: routes.blog } satisfies BreadcrumbItem,
} as const;

export function homeBreadcrumb(): BreadcrumbItem[] {
  return [seoBreadcrumbRoots.home];
}

export function productBreadcrumbs(): BreadcrumbItem[] {
  return [seoBreadcrumbRoots.home, { name: "Ürün", pathname: routes.product }];
}

export function pricingBreadcrumbs(): BreadcrumbItem[] {
  return [
    seoBreadcrumbRoots.home,
    { name: "Fiyatlandırma", pathname: routes.pricingTr },
  ];
}

export function contactBreadcrumbs(): BreadcrumbItem[] {
  return [seoBreadcrumbRoots.home, { name: "İletişim", pathname: routes.contact }];
}

export function referencesBreadcrumbs(): BreadcrumbItem[] {
  return [
    seoBreadcrumbRoots.home,
    { name: "Referanslar", pathname: routes.references },
  ];
}

export function blogListBreadcrumbs(): BreadcrumbItem[] {
  return [seoBreadcrumbRoots.home, seoBreadcrumbRoots.blog];
}

export function blogPostBreadcrumbs(title: string, slug: string): BreadcrumbItem[] {
  return [
    seoBreadcrumbRoots.home,
    seoBreadcrumbRoots.blog,
    { name: title, pathname: `${routes.blog}/${slug}` },
  ];
}

export function featureBreadcrumbs(
  metaTitle: string,
  pathname: string,
): BreadcrumbItem[] {
  return [
    seoBreadcrumbRoots.home,
    seoBreadcrumbRoots.featuresHub,
    {
      name: normalizeTitleSegment(metaTitle),
      pathname,
    },
  ];
}

export function solutionBreadcrumbs(
  metaTitle: string,
  pathname: string,
): BreadcrumbItem[] {
  return [
    seoBreadcrumbRoots.home,
    seoBreadcrumbRoots.solutionsHub,
    {
      name: normalizeTitleSegment(metaTitle),
      pathname,
    },
  ];
}

export function sectorBreadcrumbs(
  metaTitle: string,
  pathname: string,
): BreadcrumbItem[] {
  return [
    seoBreadcrumbRoots.home,
    seoBreadcrumbRoots.sectorsHub,
    {
      name: normalizeTitleSegment(metaTitle),
      pathname,
    },
  ];
}

export function legalBreadcrumbs(label: string, pathname: string): BreadcrumbItem[] {
  return [seoBreadcrumbRoots.home, { name: label, pathname }];
}

export function ecommerceSeoBreadcrumbs(): BreadcrumbItem[] {
  return [
    seoBreadcrumbRoots.home,
    {
      name: "E-ticaret abonelik sistemi",
      pathname: routes.ecommerceSubscription,
    },
  ];
}
