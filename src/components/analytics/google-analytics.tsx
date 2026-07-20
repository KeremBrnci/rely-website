import Script from "next/script";

import { GOOGLE_ADS_ID } from "@/components/analytics/google-ads";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/** gtag.js bir kez yüklenir; GA4 (varsa) + Google Ads config. */
export function GoogleAnalytics() {
  const primaryId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  const configs: string[] = [];
  if (GA_MEASUREMENT_ID) {
    configs.push(`gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });`);
  }
  configs.push(`gtag('config', '${GOOGLE_ADS_ID}');`);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configs.join("\n          ")}
        `}
      </Script>
    </>
  );
}
