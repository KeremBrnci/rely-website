import Link from "next/link";

import { homeDemoRequestCta } from "@/content/marketing/home";
import { cn } from "@/lib/utils";

const primaryButtonClassName = cn(
  "inline-flex h-11 items-center justify-center rounded-shell px-6",
  "font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-white",
  "bg-[color:var(--marketing-primary)]",
  "transition-colors duration-300 ease-out hover:bg-[color:var(--marketing-primary-hover)]",
);

type HomeDemoRequestCtaProps = {
  className?: string;
};

/** Ana sayfa demo talebi — tüm noktalar aynı iletişim formuna gider. */
export function HomeDemoRequestCta({ className }: HomeDemoRequestCtaProps) {
  return (
    <Link href={homeDemoRequestCta.href} className={cn(primaryButtonClassName, className)}>
      {homeDemoRequestCta.label}
    </Link>
  );
}
