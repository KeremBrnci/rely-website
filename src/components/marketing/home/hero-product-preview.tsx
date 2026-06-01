/**
 * Token-only product UI chrome used when no `homeHeroMedia` image is configured.
 * Structured as a dense dashboard frame (matches typical DS marketing hero media).
 */

import { cn } from "@/lib/utils";

export type HeroProductPreviewProps = {
  className?: string;
};

export function HeroProductPreview({ className }: HeroProductPreviewProps) {
  return (
    <div
      data-slot="hero-product-preview"
      className={cn(
        "border-border bg-card text-card-foreground shadow-elevation-overlay overflow-hidden rounded-shell border",
        className,
      )}
      role="img"
      aria-label="Product interface preview"
    >
      <div className="border-border/80 bg-muted/60 flex h-9 items-center gap-1.5 border-b px-3">
        <span className="bg-muted-foreground/25 size-2.5 rounded-shell" />
        <span className="bg-muted-foreground/20 size-2.5 rounded-shell" />
        <span className="bg-muted-foreground/15 size-2.5 rounded-shell" />
        <div className="bg-background/80 border-border/60 ml-2 h-6 flex-1 max-w-[55%] rounded-shell border px-2 text-[10px] leading-6 text-muted-foreground">
          app.relysubs.com
        </div>
      </div>
      <div className="flex min-h-[220px] flex-col sm:min-h-[260px] lg:min-h-[280px]">
        <div className="border-border/60 flex flex-1 flex-col border-b sm:flex-row">
          <div className="border-border/60 bg-muted/25 flex w-full shrink-0 flex-row gap-2 border-b p-2 sm:w-[88px] sm:flex-col sm:border-b-0 sm:border-r">
            <div className="bg-primary/15 h-7 flex-1 rounded-shell sm:flex-none sm:h-7 sm:w-full" />
            <div className="bg-muted-foreground/10 h-7 flex-1 rounded-shell sm:h-7" />
            <div className="bg-muted-foreground/10 hidden h-7 rounded-shell sm:block sm:h-7" />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-3">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div className="space-y-1">
                <div className="bg-muted-foreground/15 h-2.5 w-24 rounded-shell" />
                <div className="bg-foreground/90 h-7 w-40 max-w-full rounded-shell" />
              </div>
              <div className="bg-primary h-8 min-w-[5.5rem] rounded-shell px-2 text-center text-xs font-medium leading-8 text-primary-foreground">
                Export
              </div>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-2 min-h-[72px]">
              <div className="bg-muted/50 col-span-2 rounded-shell border border-border/60 p-2">
                <div className="flex h-full flex-col justify-end gap-1">
                  <div className="bg-primary/35 h-[42%] rounded-shell" />
                  <div className="bg-muted-foreground/15 h-[28%] rounded-shell" />
                </div>
              </div>
              <div className="bg-muted/35 flex flex-col gap-1.5 rounded-shell border border-border/50 p-2">
                <div className="bg-muted-foreground/20 h-2 w-full rounded-shell" />
                <div className="bg-muted-foreground/15 mt-auto h-10 w-full rounded-shell" />
              </div>
            </div>
            <div className="border-border/50 space-y-1.5 border-t pt-2">
              <div className="bg-muted-foreground/12 h-2 w-1/3 rounded-shell" />
              <div className="bg-muted/40 h-2 w-full rounded-shell" />
              <div className="bg-muted/30 h-2 w-[92%] rounded-shell" />
              <div className="bg-muted/25 h-2 w-[78%] rounded-shell" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
