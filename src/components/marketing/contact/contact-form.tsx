"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ContactInput,
  ContactSelect,
  ContactTextarea,
} from "@/components/marketing/contact/contact-field";
import { contactPageContent } from "@/content/marketing/contact-page";
import { cn } from "@/lib/utils";

export type ContactRequestType = "demo" | "contact";

type FormState = {
  requestType: ContactRequestType;
  name: string;
  email: string;
  company: string;
  phone: string;
  platform: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  requestType: "demo",
  name: "",
  email: "",
  company: "",
  phone: "",
  platform: "",
  message: "",
  website: "",
};

const { form } = contactPageContent;

export function ContactForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!data.name.trim()) next.name = "Ad soyad gerekli.";
    if (!data.email.trim()) {
      next.email = "E-posta gerekli.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Geçerli bir e-posta girin.";
    }
    if (!data.company.trim()) next.company = "Şirket veya mağaza adı gerekli.";
    if (data.requestType === "demo" && !data.platform) {
      next.platform = "E-ticaret altyapısını seçin.";
    }
    if (!data.message.trim()) {
      next.message = "Kısa bir mesaj ekleyin.";
    } else if (data.message.trim().length < 10) {
      next.message = "Mesaj en az 10 karakter olmalı.";
    }
    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: data.requestType,
          name: data.name.trim(),
          email: data.email.trim(),
          company: data.company.trim(),
          phone: data.phone.trim() || undefined,
          platform: data.platform || undefined,
          message: data.message.trim(),
          website: data.website,
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      setData(initialState);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rely-card flex flex-col items-center rounded-shell bg-[color:var(--marketing-surface-elevated)] px-6 py-12 text-center md:px-10">
        <CheckCircle2
          className="size-12 text-[color:var(--marketing-primary)]"
          aria-hidden
        />
        <h2 className="mt-5 font-heading text-[1.375rem] font-semibold text-[color:var(--marketing-foreground-strong)]">
          {form.successTitle}
        </h2>
        <p className="mt-3 max-w-[28rem] text-pretty text-[15px] leading-[1.65] text-[color:var(--marketing-body-muted)]">
          {form.successMessage}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 h-11 rounded-shell px-6"
          onClick={() => setStatus("idle")}
        >
          Yeni talep gönder
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rely-card rounded-shell bg-[color:var(--marketing-surface-elevated)] p-6 md:p-8"
      noValidate
    >
      <div className="mb-8">
        <h2 className="font-heading text-[1.25rem] font-semibold tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]">
          {form.title}
        </h2>
        <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--marketing-body-muted)]">
          {form.description}
        </p>
      </div>

      {/* Talep tipi */}
      <fieldset className="mb-8">
        <legend className="sr-only">Talep tipi</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(["demo", "contact"] as const).map((type) => {
            const meta = form.requestTypes[type];
            const selected = data.requestType === type;
            return (
              <label
                key={type}
                className={cn(
                  "cursor-pointer rounded-shell border px-4 py-3.5 transition-colors duration-200",
                  selected
                    ? "border-[color:color-mix(in_oklab,var(--marketing-primary)_40%,var(--marketing-border-subtle))] bg-[color:var(--marketing-soft-blue)]"
                    : "border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)] hover:border-[color:color-mix(in_oklab,var(--marketing-primary)_20%,var(--marketing-border-subtle))]",
                )}
              >
                <input
                  type="radio"
                  name="requestType"
                  value={type}
                  checked={selected}
                  onChange={() => setData((d) => ({ ...d, requestType: type }))}
                  className="sr-only"
                />
                <span className="block font-heading text-[0.9375rem] font-semibold text-[color:var(--marketing-foreground-strong)]">
                  {meta.label}
                </span>
                <span className="mt-1 block text-[13px] text-[color:var(--marketing-body-muted)]">
                  {meta.description}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <ContactInput
          id="name"
          name="name"
          label={form.fields.name.label}
          placeholder={form.fields.name.placeholder}
          required
          autoComplete="name"
          value={data.name}
          onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
          error={errors.name}
        />
        <ContactInput
          id="email"
          name="email"
          type="email"
          label={form.fields.email.label}
          placeholder={form.fields.email.placeholder}
          required
          autoComplete="email"
          value={data.email}
          onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
          error={errors.email}
        />
        <ContactInput
          id="company"
          name="company"
          label={form.fields.company.label}
          placeholder={form.fields.company.placeholder}
          required
          autoComplete="organization"
          value={data.company}
          onChange={(e) => setData((d) => ({ ...d, company: e.target.value }))}
          error={errors.company}
          className="sm:col-span-2"
        />
        <ContactInput
          id="phone"
          name="phone"
          type="tel"
          label={form.fields.phone.label}
          placeholder={form.fields.phone.placeholder}
          autoComplete="tel"
          value={data.phone}
          onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
        />
        <ContactSelect
          id="platform"
          name="platform"
          label={form.fields.platform.label}
          required={data.requestType === "demo"}
          value={data.platform}
          onChange={(e) => setData((d) => ({ ...d, platform: e.target.value }))}
          error={errors.platform}
        >
          <option value="">{form.fields.platform.placeholder}</option>
          {form.fields.platform.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </ContactSelect>
      </div>

      <div className="mt-5">
        <ContactTextarea
          id="message"
          name="message"
          label={form.fields.message.label}
          placeholder={form.fields.message.placeholder}
          required
          rows={5}
          value={data.message}
          onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
          error={errors.message}
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={(e) => setData((d) => ({ ...d, website: e.target.value }))}
        />
      </div>

      {status === "error" ? (
        <p className="mt-4 text-[14px] text-[color:var(--destructive)]" role="alert">
          {form.errorMessage}{" "}
          <a
            href={contactPageContent.sidebar.email.href}
            className="font-medium underline underline-offset-2"
          >
            {contactPageContent.sidebar.email.value}
          </a>
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 h-11 w-full rounded-shell bg-[color:var(--marketing-primary)] text-[15px] font-medium text-white hover:bg-[color:var(--marketing-primary-hover)] sm:w-auto sm:min-w-[10rem] sm:px-8"
      >
        {status === "submitting" ? form.submitting : form.submit}
      </Button>
    </form>
  );
}
