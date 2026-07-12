import Image, { type ImageProps } from "next/image";

import { marketingImageBlurDataUrl } from "@/lib/images/marketing-image-placeholder";
import { cn } from "@/lib/utils";

type MarketingFillImageProps = Omit<ImageProps, "fill" | "placeholder" | "blurDataURL"> & {
  containerClassName?: string;
  imageClassName?: string;
  withBlurPlaceholder?: boolean;
};

export function MarketingFillImage({
  containerClassName,
  imageClassName,
  className,
  withBlurPlaceholder = true,
  alt,
  sizes,
  priority,
  ...props
}: MarketingFillImageProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0",
          "bg-[color:color-mix(in_oklab,var(--marketing-surface-band)_88%,var(--marketing-soft-blue))]",
        )}
      />
      <Image
        {...props}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        placeholder={withBlurPlaceholder && !priority ? "blur" : "empty"}
        blurDataURL={
          withBlurPlaceholder && !priority ? marketingImageBlurDataUrl : undefined
        }
        className={cn("object-cover", imageClassName, className)}
      />
    </div>
  );
}
