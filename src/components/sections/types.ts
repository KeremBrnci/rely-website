import type { ReactNode } from "react";

/** Feature grid / card content shape — supplied by pages or CMS. */
export type FeatureItemData = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
};

/** KPI / stats row — supplied by callers. */
export type StatItemData = {
  id: string;
  label: ReactNode;
  value: ReactNode;
  hint?: ReactNode;
};

/** Pricing column — `cta` is a slot for buttons/links from the caller. */
export type PricingPlanData = {
  id: string;
  name: ReactNode;
  description?: ReactNode;
  price: ReactNode;
  interval?: ReactNode;
  features: ReactNode[];
  highlighted?: boolean;
  cta: ReactNode;
};

/** Testimonial card — quote + attribution slots. */
export type TestimonialData = {
  id: string;
  quote: ReactNode;
  author: ReactNode;
  role?: ReactNode;
  avatar?: ReactNode;
  logo?: ReactNode;
};
