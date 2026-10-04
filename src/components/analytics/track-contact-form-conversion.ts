import { GOOGLE_ADS_FORM_SUBMISSION_CONVERSION } from "@/components/analytics/google-ads";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Başarılı iletişim formu gönderimi — yalnızca API 2xx sonrası çağrılır. */
export function trackContactFormConversion(): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_FORM_SUBMISSION_CONVERSION,
  });
}
