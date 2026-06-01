import { Fragment } from "react";

import { cn } from "@/lib/utils";

export type HeadlineEmphasisProps = {
  /** Full headline text. */
  text: string;
  /** Optional strategic phrase (must be a substring of `text`) to emphasize. */
  phrase?: string;
  /** Extra classes for the emphasized span. */
  className?: string;
};

/**
 * Renders a headline with at most one strategically emphasized phrase.
 * The phrase receives a subtle navy→blue gradient via `.rely-text-emphasis`.
 * If `phrase` is absent or not found, the text renders unchanged.
 */
export function HeadlineEmphasis({ text, phrase, className }: HeadlineEmphasisProps) {
  if (!phrase) {
    return <Fragment>{text}</Fragment>;
  }

  const index = text.indexOf(phrase);
  if (index === -1) {
    return <Fragment>{text}</Fragment>;
  }

  const before = text.slice(0, index);
  const after = text.slice(index + phrase.length);

  return (
    <Fragment>
      {before}
      <span className={cn("rely-text-emphasis", className)}>{phrase}</span>
      {after}
    </Fragment>
  );
}
