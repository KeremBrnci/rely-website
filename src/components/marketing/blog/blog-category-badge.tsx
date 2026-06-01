import { cardAccentChipClassName } from "@/config/marketing/card-accents";
import { getBlogCategoryAccent } from "@/config/marketing/blog-ui";
import { cn } from "@/lib/utils";

type BlogCategoryBadgeProps = {
  category: string;
  className?: string;
};

export function BlogCategoryBadge({ category, className }: BlogCategoryBadgeProps) {
  const accent = getBlogCategoryAccent(category);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1",
        "font-sans text-[11px] font-semibold uppercase tracking-[0.08em]",
        cardAccentChipClassName[accent],
        className,
      )}
    >
      {category}
    </span>
  );
}
