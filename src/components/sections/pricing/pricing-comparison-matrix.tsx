import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type PricingComparisonPlanColumn = {
  id: string;
  label: string;
};

export type PricingComparisonCellValue = boolean | string;

export type PricingComparisonRow = {
  id: string;
  feature: string;
  values: Record<string, PricingComparisonCellValue>;
};

export type PricingComparisonGroup = {
  id: string;
  title: string;
  defaultOpen?: boolean;
  rows: PricingComparisonRow[];
};

export type PricingComparisonMatrixProps = {
  featureLabel: string;
  plans: PricingComparisonPlanColumn[];
  groups: PricingComparisonGroup[];
  /** Az satır ve metin hücreleri için düz tablo (accordion yok). */
  variant?: "accordion" | "flat";
  className?: string;
};

function CellGlyph({ value }: { value: PricingComparisonCellValue }) {
  if (value === true) {
    return (
      <span className="text-[13.1px] font-bold leading-[19px] text-[color:var(--marketing-primary)]">
        ✓
      </span>
    );
  }
  if (value === false || value === "") {
    return (
      <span className="text-[13.1px] font-normal leading-[19px] text-[color:var(--marketing-body-muted)]">
        —
      </span>
    );
  }
  return (
    <span className="text-center text-[12px] font-semibold leading-[1.35] text-[color:var(--marketing-foreground-strong)] sm:text-[13.1px] sm:leading-[19px]">
      {value}
    </span>
  );
}

export function PricingComparisonMatrix({
  featureLabel,
  plans,
  groups,
  variant = "accordion",
  className,
}: PricingComparisonMatrixProps) {
  const gridTemplate = cn(
    "grid min-h-[41.25px] w-full items-center border-b border-[color:var(--marketing-border-subtle)] last:border-b-0",
    variant === "flat"
      ? "grid-cols-[minmax(0,1.25fr)_minmax(6.5rem,1fr)_minmax(6.5rem,1fr)] sm:grid-cols-[minmax(0,1.35fr)_minmax(7.5rem,1fr)_minmax(7.5rem,1fr)]"
      : "grid-cols-[minmax(0,1fr)_minmax(80px,80px)_minmax(80px,80px)]",
  );

  return (
    <div
      data-slot="pricing-comparison-matrix"
      className={cn(
        "overflow-hidden rounded-shell border border-[color:var(--marketing-border-subtle)] bg-white shadow-elevation-surface",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <div
            className={cn(
              gridTemplate,
              "h-[38.5px] min-h-0 bg-[color:var(--marketing-surface-band)] px-[22.5px] text-[11.3px] font-semibold uppercase leading-[15px] tracking-[0.281px] text-[color:var(--marketing-foreground-strong)]",
            )}
          >
            <div>{featureLabel}</div>
            {plans.map((p) => (
              <div key={p.id} className="text-center">
                {p.label}
              </div>
            ))}
          </div>

          {groups.map((group) =>
            variant === "flat" ? (
              <div key={group.id}>
                {group.rows.map((row, rowIndex) => (
                  <div
                    key={row.id}
                    className={cn(
                      gridTemplate,
                      rowIndex % 2 === 1 ? "bg-[rgba(245,248,250,0.5)]" : "bg-white",
                    )}
                  >
                    <div className="px-[22.5px] text-[13.1px] leading-[19px] text-[color:var(--marketing-body-muted)]">
                      {row.feature}
                    </div>
                    {plans.map((p) => (
                      <div
                        key={p.id}
                        className="flex h-full min-h-[41.25px] items-center justify-center px-2"
                      >
                        <CellGlyph value={row.values[p.id] ?? false} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <details
                key={group.id}
                className="border-b border-[color:var(--marketing-border-subtle)] last:border-b-0 open:[&_summary_svg]:rotate-90"
                open={group.defaultOpen ?? false}
              >
                <summary
                  className={cn(
                    gridTemplate,
                    "cursor-pointer list-none px-[22.5px] py-[14.75px] [&::-webkit-details-marker]:hidden",
                  )}
                >
                  <span className="flex items-center gap-[7.5px] text-[13.1px] font-semibold leading-[19px] text-[color:var(--marketing-foreground-strong)]">
                    <ChevronRight
                      className="size-[15px] shrink-0 transition-transform duration-200"
                      aria-hidden
                    />
                    {group.title}
                  </span>
                  {plans.map((p) => (
                    <div key={p.id} />
                  ))}
                </summary>

                <div className="border-t border-[color:var(--marketing-border-subtle)]">
                  {group.rows.map((row, rowIndex) => (
                    <div
                      key={row.id}
                      className={cn(
                        gridTemplate,
                        rowIndex % 2 === 1 ? "bg-[rgba(245,248,250,0.5)]" : "bg-white",
                      )}
                    >
                      <div className="pl-[22.5px] pr-[22.5px] text-[13.1px] leading-[19px] text-[color:var(--marketing-body-muted)]">
                        {row.feature}
                      </div>
                      {plans.map((p) => (
                        <div
                          key={p.id}
                          className="flex h-full min-h-[41.25px] items-center justify-center px-1"
                        >
                          <CellGlyph value={row.values[p.id] ?? false} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
