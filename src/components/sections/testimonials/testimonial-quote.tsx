import type { ComponentProps } from "react";

import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import { textRoleClassName } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

import type { TestimonialData } from "@/components/sections/types";

export type TestimonialQuoteProps = ComponentProps<"blockquote"> & {
  testimonial: TestimonialData;
  variant?: "card" | "plain";
};

export function TestimonialQuote({
  testimonial,
  variant = "card",
  className,
  ...props
}: TestimonialQuoteProps) {
  const { quote, author, role, avatar, logo } = testimonial;

  return (
    <blockquote
      data-slot="testimonial-quote"
      className={cn(
        variant === "card" &&
          "rounded-shell border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)] p-stack-lg",
        variant === "plain" && "p-stack-xs",
        className,
      )}
      {...props}
    >
      <Stack gap="md">
        {logo ? <div className="text-foreground">{logo}</div> : null}
        <p className={textRoleClassName["body-lg"]}>{quote}</p>
        <Cluster gap="sm" justify="start" className="items-center">
          {avatar ? (
            <div className="size-10 shrink-0 overflow-hidden rounded-shell [&_img]:size-full [&_img]:object-cover">
              {avatar}
            </div>
          ) : null}
          <Stack gap="2xs">
            <cite className={cn(textRoleClassName["body-md"], "font-medium not-italic")}>
              {author}
            </cite>
            {role ? (
              <span className={cn(textRoleClassName.caption, "text-muted-foreground")}>
                {role}
              </span>
            ) : null}
          </Stack>
        </Cluster>
      </Stack>
    </blockquote>
  );
}
