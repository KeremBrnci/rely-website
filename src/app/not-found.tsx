import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { routes } from "@/config/routes";
import { SEO_ROBOTS_NOINDEX } from "@/lib/seo/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rely Subs | Sayfa bulunamadı",
  description: "Aradığınız sayfa bulunamadı.",
  robots: SEO_ROBOTS_NOINDEX,
};

export default function NotFound() {
  return (
    <main
      className={cn(
        "flex flex-1 flex-col items-center justify-center",
        "bg-[color:var(--marketing-background)] px-gutter-x py-20",
      )}
    >
      <Container className="max-w-lg text-center">
        <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-[color:var(--marketing-primary)]">
          404
        </p>
        <h1 className="mt-4 font-heading text-[1.75rem] font-bold tracking-[-0.03em] text-[color:var(--marketing-foreground-strong)]">
          Sayfa bulunamadı
        </h1>
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[color:var(--marketing-body-muted)]">
          Bağlantı güncellenmiş veya kaldırılmış olabilir.
        </p>
        <Link
          href={routes.home}
          className={cn(
            "mt-8 inline-flex h-11 items-center justify-center rounded-shell px-6",
            "bg-[color:var(--marketing-primary)] text-[15px] font-medium text-white",
            "hover:bg-[color:var(--marketing-primary-hover)]",
          )}
        >
          Ana sayfaya dön
        </Link>
      </Container>
    </main>
  );
}
