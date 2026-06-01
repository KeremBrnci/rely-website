/**
 * Rely brand palette — keep in sync with `src/styles/tokens/marketing.css`.
 */
/** Corner radius — sync with `src/styles/tokens/radius.css` */
export const brandRadius = {
  default: "15px",
  pill: "9999px",
} as const;

export const brandColors = {
  primary: "#06385F",
  primaryHover: "#084A7A",
  primaryDeep: "#052F4D",
  softBlue: "#D6E4F0",
  background: "#F8FAFC",
  foreground: "#0F172A",
  bodyMuted: "#5C6570",
  borderSubtle: "#E2E8F0",
} as const;

export type BrandColor = keyof typeof brandColors;
