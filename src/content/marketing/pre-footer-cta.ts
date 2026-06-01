import { routes } from "@/config/routes";

export const preFooterCta = {
  title: "Abonelik operasyonlarını birlikte büyütelim",
  titleEmphasis: "birlikte büyütelim",
  subtitle:
    "Ücretsiz deneyin. Kurulumu birlikte yönetelim; ölçeklendikçe tek platformda ilerleyin.",
  primary: { label: "Ücretsiz dene", href: routes.pricingTr },
  secondary: { label: "Demo planla", href: routes.contact },
} as const;
