import { BrandMark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";

export type RevenueIntelligenceDashboardPreviewProps = {
  className?: string;
};

const mrrPoints = "12,88 48,72 84,64 120,52 156,48 192,40 228,36 264,28 300,24 336,20";

export function RevenueIntelligenceDashboardPreview({
  className,
}: RevenueIntelligenceDashboardPreviewProps) {
  return (
    <div
      data-slot="revenue-intelligence-dashboard"
      className={cn(
        "overflow-hidden rounded-shell border border-[color:var(--marketing-border-subtle)]",
        "bg-[color:var(--marketing-surface-elevated)] shadow-elevation-surface",
        className,
      )}
      role="img"
      aria-label="Tekrarlayan gelir analitik paneli önizlemesi"
    >
      <div
        className={cn(
          "flex items-center justify-between gap-3 border-b border-[color:var(--marketing-border-subtle)]",
          "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_40%,white)] px-4 py-3 md:px-5",
        )}
      >
        <div className="flex items-start gap-2">
          <BrandMark size="sm" className="mt-0.5" />
          <div>
          <p className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-[#506680]">
            Gelir sağlığı
          </p>
          <p className="mt-0.5 font-sans text-[0.9375rem] font-semibold tracking-[-0.02em] text-[#0f172a]">
            Tekrarlayan gelir özeti
          </p>
          </div>
        </div>
        <span
          className={cn(
            "rounded-shell border border-[color:var(--marketing-border-subtle)] bg-white",
            "px-2.5 py-1 font-sans text-[0.6875rem] font-medium text-[#3f4d5c]",
          )}
        >
          Son 12 ay
        </span>
      </div>

      <div className="space-y-4 p-4 md:p-5">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {[
            { label: "MRR", value: "₺12,45M", sub: "+%18,6" },
            { label: "Aktif abone", value: "63.700", sub: "+%14,2" },
            { label: "Kurtarılan", value: "₺1,09M", sub: "+%23,4" },
            { label: "Ort. LTV", value: "₺2.870", sub: "+%6,7" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)] px-2.5 py-2 md:px-3 md:py-2.5"
            >
              <p className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.05em] text-[#506680]">
                {kpi.label}
              </p>
              <p className="mt-1 font-sans text-[0.9375rem] font-semibold leading-none text-[#0f172a]">
                {kpi.value}
              </p>
              <p className="mt-0.5 font-sans text-[0.6875rem] text-[color:var(--marketing-primary)]">
                {kpi.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)] p-3 md:p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="font-sans text-[0.8125rem] font-medium text-[#0f172a]">MRR trendi</p>
            <p className="font-sans text-[0.6875rem] text-[#506680]">Aylık</p>
          </div>
          <svg
            viewBox="0 0 360 120"
            className="h-auto w-full"
            aria-hidden
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mrr-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06385f" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#06385f" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="30" x2="360" y2="30" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="0" y1="60" x2="360" y2="60" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="0" y1="90" x2="360" y2="90" stroke="#e2e8f0" strokeWidth="1" />
            <polygon
              fill="url(#mrr-fill)"
              points={`0,120 ${mrrPoints} 360,120`}
            />
            <polyline
              fill="none"
              stroke="#06385f"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={mrrPoints}
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <div className="rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)] p-3">
            <p className="font-sans text-[0.6875rem] font-medium text-[#506680]">Abone büyümesi</p>
            <div className="mt-2 flex items-end gap-1 h-12" aria-hidden>
              {[40, 52, 48, 58, 62, 70, 68, 76].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-[3px] bg-[color:color-mix(in_oklab,var(--marketing-primary)_55%,var(--marketing-soft-blue))]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-background)] p-3">
            <p className="font-sans text-[0.6875rem] font-medium text-[#506680]">
              Başarısız ödeme kurtarma
            </p>
            <p className="mt-2 font-sans text-[1.125rem] font-semibold text-[#0f172a]">%61</p>
            <p className="mt-0.5 font-sans text-[0.6875rem] text-[color:var(--marketing-primary)]">
              otomatik yeniden tahsil
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[color:var(--marketing-soft-blue)]">
              <div className="h-full w-[61%] rounded-full bg-[color:var(--marketing-primary)]" />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-wrap items-center justify-between gap-2 rounded-shell",
            "border border-[color:var(--marketing-border-subtle)] bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_25%,white)]",
            "px-3 py-2.5",
          )}
        >
          <span className="font-sans text-[0.75rem] text-[#3f4d5c]">Yenileme başarısı</span>
          <span className="font-sans text-[0.8125rem] font-semibold text-[#0f172a]">%97,2</span>
          <span className="font-sans text-[0.75rem] text-[color:var(--marketing-primary)]">
            İptal oranı %2,1
          </span>
        </div>
      </div>
    </div>
  );
}
