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
    let cancelled = false;
    let attempts = 0;

    const send = () => {
      if (cancelled) return;

      if (typeof window.gtag !== "function") {
        // gtag lazyOnload — kısa süre bekleyip yeniden dene
        if (attempts++ < 40) {
          window.setTimeout(send, 250);
        }
        return;
      }

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
    };

    send();

    return () => {
      cancelled = true;
    };
  }, [pathname, searchParams]);

  return null;
}
