import { cn } from "@/lib/utils";

export type InfrastructureRuleProps = {
  className?: string;
};

/** Section rhythm separator — connected layout cadence. */
export function InfrastructureRule({ className }: InfrastructureRuleProps) {
  return (
    <div
      data-slot="infrastructure-rule"
      className={cn(
        "flex w-full items-center gap-3",
        className,
      )}
      aria-hidden
    >
      <span className="h-px flex-1 bg-[color:var(--marketing-border-subtle)]" />
      <span className="size-1 rounded-[15px] bg-[color:var(--marketing-primary)] opacity-40" />
      <span className="h-px flex-1 bg-[color:var(--marketing-border-subtle)]" />
    </div>
  );
}
