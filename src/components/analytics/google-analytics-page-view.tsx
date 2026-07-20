"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { GOOGLE_ADS_PAGE_VIEW_CONVERSION } from "@/components/analytics/google-ads";
import { routes } from "@/config/routes";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function isHomePath(pathname: string): boolean {
  return pathname === routes.home || pathname === "";
}

export function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    if (GA_MEASUREMENT_ID) {
      window.gtag("event", "page_view", {
        page_path: pagePath,
      });
    }

    if (isHomePath(pathname)) {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_PAGE_VIEW_CONVERSION,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
