import { Suspense } from "react";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { GoogleAnalyticsPageView } from "@/components/analytics/google-analytics-page-view";

export function GoogleAnalyticsProvider() {
  return (
    <>
      <GoogleAnalytics />
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
    </>
  );
}
