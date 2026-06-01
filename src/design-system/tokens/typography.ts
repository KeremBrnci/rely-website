/** Typography roles — use `text-{role}` utilities from theme-map (e.g. text-heading-lg). */

export const textRoles = [
  "display",
  "heading-xl",
  "heading-lg",
  "heading-md",
  "heading-sm",
  "body-lg",
  "body-md",
  "body-sm",
  "caption",
  "eyebrow",
  "stat",
] as const;

export type TextRole = (typeof textRoles)[number];

export const textRoleClassName: Record<TextRole, string> = {
  display: "text-display leading-display",
  "heading-xl":
    "text-heading-xl font-heading font-semibold leading-[1.12] tracking-[var(--tracking-editorial)] text-[color:var(--marketing-foreground-strong)]",
  "heading-lg":
    "text-heading-lg font-heading font-semibold leading-[1.15] tracking-tight text-[color:var(--marketing-foreground-strong)]",
  "heading-md": "text-heading-md leading-heading",
  "heading-sm": "text-heading-sm leading-heading",
  "body-lg": "text-body-lg leading-body",
  "body-md": "text-body-md leading-body",
  "body-sm": "text-body-sm leading-body",
  caption: "text-caption leading-body",
  eyebrow: "rely-section-eyebrow-label",
  stat: "font-sans text-stat font-semibold tabular-nums leading-none tracking-tight text-[color:var(--marketing-primary)]",
};
