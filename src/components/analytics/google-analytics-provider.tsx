import { Suspense } from "react";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { GoogleAnalyticsPageView } from "@/components/analytics/google-analytics-page-view";
import { MicrosoftClarity } from "@/components/analytics/microsoft-clarity";

export function GoogleAnalyticsProvider() {
  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView />
      </Suspense>
    </>
  );
}
