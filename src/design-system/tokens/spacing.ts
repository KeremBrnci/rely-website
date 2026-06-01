/** Semantic spacing keys — mirror CSS `--ds-*` / Tailwind `*-stack-*`, `*-section-y-*`, etc. */

export const spacingPrimitives = [
  "0",
  "px",
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
] as const;

export type StackGap = keyof typeof stackGapClassName;

/** Maps to `gap-{key}` utilities from theme (e.g. gap-stack-md). */
export const stackGapClassName = {
  "3xs": "gap-stack-3xs",
  "2xs": "gap-stack-2xs",
  xs: "gap-stack-xs",
  sm: "gap-stack-sm",
  md: "gap-stack-md",
  lg: "gap-stack-lg",
  xl: "gap-stack-xl",
  "2xl": "gap-stack-2xl",
} as const;

export type SectionSpacing = keyof typeof sectionSpacingClassName;

export const sectionSpacingClassName = {
  none: "py-section-y-none",
  sm: "py-section-y-sm",
  md: "py-section-y-md",
  lg: "py-section-y-lg",
  xl: "py-section-y-xl",
} as const;

export type LayoutGap = keyof typeof layoutGapClassName;

export const layoutGapClassName = {
  xs: "gap-gap-xs",
  sm: "gap-gap-sm",
  md: "gap-gap-md",
  lg: "gap-gap-lg",
} as const;
