import Link from "next/link";

import { siteSocialLinks } from "@/config/site";
import { cn } from "@/lib/utils";

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.75 1.14 4.92 4.92 0 011.14 1.75c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.14 1.75 4.92 4.92 0 01-1.75 1.14c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.75-1.14 4.92 4.92 0 01-1.14-1.75c-.163-.46-.349-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.14-1.75 4.92 4.92 0 011.75-1.14c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.622c-3.15 0-3.507.012-4.734.068-1.002.046-1.547.217-1.907.361a3.2 3.2 0 00-1.18.77 3.2 3.2 0 00-.77 1.18c-.144.36-.315.905-.361 1.907-.056 1.227-.068 1.584-.068 4.734s.012 3.507.068 4.734c.046 1.002.217 1.547.361 1.907.178.453.416.82.77 1.18.36.354.727.592 1.18.77.36.144.905.315 1.907.361 1.227.056 1.584.068 4.734.068s3.507-.012 4.734-.068c1.002-.046 1.547-.217 1.907-.361a3.2 3.2 0 001.18-.77 3.2 3.2 0 00.77-1.18c.144-.36.315-.905.361-1.907.056-1.227.068-1.584.068-4.734s-.012-3.507-.068-4.734c-.046-1.002-.217-1.547-.361-1.907a3.2 3.2 0 00-.77-1.18 3.2 3.2 0 00-1.18-.77c-.36-.144-.905-.315-1.907-.361-1.227-.056-1.584-.068-4.734-.068zM12 7.351a4.649 4.649 0 110 9.298 4.649 4.649 0 010-9.298zm0 1.622a3.027 3.027 0 100 6.054 3.027 3.027 0 000-6.054zm5.851-3.17a1.086 1.086 0 11-2.172 0 1.086 1.086 0 012.172 0z" />
    </svg>
  );
}

function IconLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialIcons = {
  x: IconX,
  linkedin: IconLinkedin,
  instagram: IconInstagram,
} as const;

export type FooterSocialLinksProps = {
  className?: string;
};

export function FooterSocialLinks({ className }: FooterSocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {siteSocialLinks.map((item) => {
        const Icon = socialIcons[item.id];

        return (
          <li key={item.id}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-shell",
                "border border-[color:var(--marketing-border-subtle)] bg-[color:var(--marketing-surface-elevated)]",
                "text-[color:var(--marketing-body-muted)]",
                "transition-[border-color,color] duration-300 ease-out",
                "hover:border-[color:color-mix(in_oklab,var(--marketing-border-subtle)_72%,var(--marketing-body-muted))]",
                "hover:text-[color:var(--marketing-primary)]",
              )}
            >
              <Icon className="size-[1.125rem] shrink-0" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
