import { cn } from "@/lib/utils";

/** lg altı: nasıl çalışır / adım bölümü intro — masaüstünde sol hizalı kalır */
export const stepsSectionIntroClassName = cn(
  "flex flex-col gap-2.5 md:gap-3",
  "max-lg:items-center max-lg:text-center",
);

export const stepsSectionIntroSplitClassName = cn(
  "grid gap-y-5",
  "max-lg:justify-items-center max-lg:text-center",
  "lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end lg:gap-x-16 lg:text-left lg:justify-items-stretch",
);

export const stepsSectionIntroEyebrowClassName = "max-lg:mx-auto lg:mx-0";

export const stepsSectionIntroTitleClassName = cn(
  "max-lg:mx-auto",
);

export const stepsSectionIntroDescriptionClassName = cn(
  "max-lg:mx-auto",
);

/** lg altı: tek adım — ikon / numara ve metin ortada */
export const stepsSectionItemClassName = cn(
  "max-lg:items-center max-lg:text-center",
);

export const stepsSectionItemRowClassName = "max-lg:justify-center";

export const stepsSectionItemDescriptionClassName = "max-lg:mx-auto";
