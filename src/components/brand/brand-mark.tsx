import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const sizeClassName = {
  xs: "size-3.5 rounded-[5px]",
  sm: "size-[1.125rem] rounded-[6px]",
  md: "size-6 rounded-[7px]",
  lg: "size-7 rounded-shell",
} as const;

export type BrandMarkProps = {
  size?: keyof typeof sizeClassName;
  className?: string;
};

/** Küçük Rely simge işareti — dekoratif marka dokunuşları için. */
export function BrandMark({ size = "sm", className }: BrandMarkProps) {
  return (
    <Image
      src={siteConfig.markSrc}
      alt=""
      width={310}
      height={310}
      aria-hidden
      className={cn("shrink-0 object-cover", sizeClassName[size], className)}
    />
  );
}
