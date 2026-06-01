import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const controlClassName = cn(
  "w-full rounded-shell border border-[color:var(--marketing-border-subtle)]",
  "bg-[color:var(--marketing-background)] px-4 py-3",
  "font-sans text-[15px] leading-[1.45] tracking-[-0.01em]",
  "text-[color:var(--marketing-foreground-strong)]",
  "placeholder:text-[color:color-mix(in_oklab,var(--marketing-body-muted)_72%,transparent)]",
  "transition-[border-color,box-shadow] duration-200",
  "outline-none focus-visible:border-[color:var(--marketing-primary)]",
  "focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_oklab,var(--marketing-primary)_22%,transparent)]",
  "disabled:cursor-not-allowed disabled:opacity-60",
  "aria-invalid:border-[color:var(--destructive)] aria-invalid:ring-[color:color-mix(in_oklab,var(--destructive)_18%,transparent)]",
);

export type ContactFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
};

export function ContactLabel({
  id,
  label,
  required,
}: {
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block font-sans text-[13px] font-medium tracking-[-0.01em] text-[color:var(--marketing-foreground-strong)]"
    >
      {label}
      {required ? (
        <span className="ml-1 text-[color:var(--marketing-primary)]" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

export function ContactInput({
  id,
  label,
  error,
  hint,
  required,
  className,
  ...props
}: ContactFieldProps & ComponentProps<"input">) {
  return (
    <div className="flex flex-col">
      <ContactLabel id={id} label={label} required={required} />
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(controlClassName, className)}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-[color:var(--destructive)]">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[13px] text-[color:var(--marketing-body-muted)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function ContactTextarea({
  id,
  label,
  error,
  required,
  className,
  ...props
}: ContactFieldProps & ComponentProps<"textarea">) {
  return (
    <div className="flex flex-col">
      <ContactLabel id={id} label={label} required={required} />
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(controlClassName, "min-h-[8.5rem] resize-y", className)}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-[color:var(--destructive)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactSelect({
  id,
  label,
  error,
  required,
  children,
  className,
  ...props
}: ContactFieldProps & ComponentProps<"select">) {
  return (
    <div className="flex flex-col">
      <ContactLabel id={id} label={label} required={required} />
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(controlClassName, "appearance-none pr-10", className)}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-[color:var(--destructive)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
