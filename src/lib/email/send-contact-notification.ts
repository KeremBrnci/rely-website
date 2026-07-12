import { Resend } from "resend";

import { contactPageContent } from "@/content/marketing/contact-page";

import { escapeHtml } from "./escape-html";
import { getResendConfig } from "./resend-config";

export type ContactNotificationPayload = {
  requestType: "demo" | "contact";
  name: string;
  email: string;
  company: string;
  phone: string | null;
  platform: string | null;
  message: string;
  receivedAt: string;
};

const platformLabels = Object.fromEntries(
  contactPageContent.form.fields.platform.options.map((option) => [
    option.value,
    option.label,
  ]),
) as Record<string, string>;

function formatPlatformLabel(platform: string | null): string {
  if (!platform) return "—";
  return platformLabels[platform] ?? platform;
}

function buildContactEmailHtml(payload: ContactNotificationPayload): string {
  const requestLabel =
    payload.requestType === "demo" ? "Demo talebi" : "İletişim talebi";

  const rows = [
    ["Talep tipi", requestLabel],
    ["Ad soyad", payload.name],
    ["E-posta", payload.email],
    ["Şirket / mağaza", payload.company],
    ["Telefon", payload.phone || "—"],
    ["E-ticaret altyapısı", formatPlatformLabel(payload.platform)],
    ["Mesaj", payload.message],
    ["Alındı", payload.receivedAt],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px 8px 0;vertical-align:top;color:#64748b;font-weight:600;">${escapeHtml(label)}</th><td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="tr">
  <body style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#0f172a;">
    <h1 style="font-size:20px;margin:0 0 16px;">${escapeHtml(requestLabel)}</h1>
    <table style="border-collapse:collapse;width:100%;max-width:640px;">${tableRows}</table>
  </body>
</html>`;
}

function buildContactEmailText(payload: ContactNotificationPayload): string {
  const requestLabel =
    payload.requestType === "demo" ? "Demo talebi" : "İletişim talebi";

  return [
    requestLabel,
    "",
    `Ad soyad: ${payload.name}`,
    `E-posta: ${payload.email}`,
    `Şirket / mağaza: ${payload.company}`,
    `Telefon: ${payload.phone || "—"}`,
    `E-ticaret altyapısı: ${formatPlatformLabel(payload.platform)}`,
    "",
    "Mesaj:",
    payload.message,
    "",
    `Alındı: ${payload.receivedAt}`,
  ].join("\n");
}

export type SendContactNotificationResult =
  | { ok: true; id: string }
  | { ok: false; reason: "missing_config" | "send_failed"; message: string };

export async function sendContactNotification(
  payload: ContactNotificationPayload,
  idempotencyKey: string,
): Promise<SendContactNotificationResult> {
  const config = getResendConfig();
  if (!config) {
    return {
      ok: false,
      reason: "missing_config",
      message: "E-posta servisi yapılandırılmamış.",
    };
  }

  const requestLabel =
    payload.requestType === "demo" ? "Demo talebi" : "İletişim talebi";
  const subject = `${requestLabel}: ${payload.company} — ${payload.name}`;

  const resend = new Resend(config.apiKey);
  const { data, error } = await resend.emails.send(
    {
      from: config.from,
      to: config.to,
      replyTo: payload.email,
      subject,
      html: buildContactEmailHtml(payload),
      text: buildContactEmailText(payload),
    },
    { idempotencyKey },
  );

  if (error) {
    return {
      ok: false,
      reason: "send_failed",
      message: error.message,
    };
  }

  if (!data?.id) {
    return {
      ok: false,
      reason: "send_failed",
      message: "E-posta gönderilemedi.",
    };
  }

  return { ok: true, id: data.id };
}
