import { companyLegal } from "@/config/company";

export type ResendConfig = {
  apiKey: string;
  from: string;
  to: string[];
};

export function getResendConfig(): ResendConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;

  const from =
    process.env.RESEND_FROM?.trim() ||
    `${companyLegal.brandName} <${companyLegal.contactEmail}>`;

  const toRaw =
    process.env.RESEND_CONTACT_TO?.trim() || companyLegal.contactEmail;

  const to = toRaw
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  if (!from || to.length === 0) return null;

  return { apiKey, from, to };
}
