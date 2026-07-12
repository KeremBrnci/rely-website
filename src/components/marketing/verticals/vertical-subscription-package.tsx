import type { CSSProperties } from "react";
import { CalendarDays, Package, Truck } from "lucide-react";

import { MarketingFillImage } from "@/components/marketing/marketing-fill-image";
import type { VerticalImage, VerticalPackagePreview } from "@/config/marketing/vertical-assets";
import { cn } from "@/lib/utils";

export type VerticalSubscriptionPackageProps = {
  image: VerticalImage;
  preview: VerticalPackagePreview;
  imagePriority?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function VerticalSubscriptionPackage({
  image,
  preview,
  imagePriority = false,
  className,
  style,
}: VerticalSubscriptionPackageProps) {
  return (
    <div
      data-slot="vertical-subscription-package"
      style={style}
      className={cn(
        "relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[1.25rem]",
        "bg-[color:var(--marketing-surface-elevated)]",
        "ring-1 ring-[color:var(--marketing-border-subtle)]",
        "shadow-[0_18px_40px_-12px_rgba(6,56,95,0.12)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[color:var(--vertical-package-accent,var(--marketing-primary))]"
      />

      <div className="flex items-center justify-between gap-3 border-b border-[color:var(--marketing-border-subtle)] px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-lg",
              "bg-[color:color-mix(in_oklab,var(--vertical-package-accent,var(--marketing-primary))_12%,#ffffff)]",
              "text-[color:var(--vertical-package-accent,var(--marketing-primary))]",
            )}
          >
            <Package className="size-4" strokeWidth={1.75} />
          </span>
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--marketing-eyebrow-foreground)]">
              Abonelik paketi
            </p>
            <p className="font-sans text-[13px] font-medium tracking-[-0.02em] text-[color:var(--marketing-foreground-strong)]">
              {preview.planName}
            </p>
          </div>
        </div>
        {preview.badge ? (
          <span
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold tracking-[0.04em]",
              "bg-[color:color-mix(in_oklab,var(--vertical-package-accent,var(--marketing-primary))_14%,#ffffff)]",
              "text-[color:var(--vertical-package-accent,var(--marketing-primary))]",
            )}
          >
            {preview.badge}
          </span>
        ) : null}
      </div>

      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl ring-1 ring-[color:var(--marketing-border-subtle)] md:mx-5">
        <div className="relative aspect-[5/4] w-full">
          <MarketingFillImage
            src={image.src}
            alt=""
            aria-hidden
            priority={imagePriority}
            sizes="(min-width: 768px) 28vw, 80vw"
            containerClassName="absolute inset-0"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182a]/40 via-transparent to-transparent"
          />
          <span
            className={cn(
              "absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 rounded-md px-2 py-1",
              "bg-white/92 font-sans text-[10px] font-medium tracking-[-0.02em] text-[color:var(--marketing-primary-deep)]",
              "shadow-sm backdrop-blur-[2px]",
            )}
          >
            <Truck className="size-3" strokeWidth={2} />
            {preview.frequency}
          </span>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 px-4 py-4 md:px-5 md:py-5">
        <dl className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-[color:var(--marketing-surface-band)] px-3 py-2.5">
            <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-[color:var(--marketing-body-muted)]">
              Sıklık
            </dt>
            <dd className="mt-0.5 font-sans text-[13px] font-semibold tracking-[-0.02em] text-[color:var(--marketing-foreground-strong)]">
              {preview.frequency}
            </dd>
          </div>
          <div className="rounded-lg bg-[color:var(--marketing-surface-band)] px-3 py-2.5">
            <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-[color:var(--marketing-body-muted)]">
              Sonraki teslimat
            </dt>
            <dd className="mt-0.5 flex items-center gap-1 font-sans text-[13px] font-semibold tracking-[-0.02em] text-[color:var(--marketing-foreground-strong)]">
              <CalendarDays
                className="size-3.5 shrink-0 text-[color:var(--vertical-package-accent,var(--marketing-primary))]"
                strokeWidth={2}
              />
              {preview.nextDelivery}
            </dd>
          </div>
        </dl>
        {preview.note ? (
          <p className="text-pretty font-sans text-[12px] leading-snug text-[color:var(--marketing-body-muted)]">
            {preview.note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
