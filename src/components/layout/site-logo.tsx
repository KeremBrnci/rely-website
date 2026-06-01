import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 902;
const LOGO_HEIGHT = 208;

export type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  linked?: boolean;
};

export function SiteLogo({
  className,
  priority = false,
  linked = true,
}: SiteLogoProps) {
  const image = (
    <Image
      src={siteConfig.logoSrc}
      alt={siteConfig.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={cn("h-[1.625rem] w-auto md:h-[1.875rem]", className)}
    />
  );

  if (!linked) {
    return <span className="inline-flex shrink-0 items-center">{image}</span>;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label={siteConfig.name}
    >
      {image}
    </Link>
  );
}
