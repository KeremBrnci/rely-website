"use client";

import { useEffect } from "react";

/**
 * Hash ile gelen sayfa geçişlerinde hedefe yumuşak kaydırır.
 *
 * Tarayıcı ve Next.js hash’e anında jump ettiği için önce üste alınır,
 * sonra smooth scroll uygulanır. Hash’li Link’lerde `scroll={false}` kullanın.
 */
export function SmoothHashScroll() {
  useEffect(() => {
    const timeouts: number[] = [];
    let frameId = 0;
    const previousRestoration =
      "scrollRestoration" in history ? history.scrollRestoration : undefined;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const getTarget = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return null;
      const id = decodeURIComponent(hash.slice(1));
      return document.getElementById(id);
    };

    const motion = (): ScrollBehavior =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

    const clearScheduled = () => {
      for (const id of timeouts) window.clearTimeout(id);
      timeouts.length = 0;
    };

    const scrollToHash = (fromTop: boolean) => {
      const target = getTarget();
      if (!target) return;

      const behavior = motion();

      if (fromTop && behavior === "smooth") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        timeouts.push(
          window.setTimeout(() => {
            target.scrollIntoView({ behavior, block: "start" });
          }, 60),
        );
        return;
      }

      target.scrollIntoView({ behavior, block: "start" });
    };

    const runInitial = () => {
      if (!window.location.hash) return;
      clearScheduled();
      scrollToHash(true);
      // Layout / Next scroll settle sonrası bir kez daha (mesafe kalsın)
      timeouts.push(
        window.setTimeout(() => {
          if (!getTarget()) return;
          if (window.scrollY < 8) {
            scrollToHash(true);
          }
        }, 200),
      );
    };

    if (window.location.hash) {
      frameId = window.requestAnimationFrame(() => {
        frameId = window.requestAnimationFrame(runInitial);
      });
    }

    const onHashChange = () => {
      clearScheduled();
      scrollToHash(true);
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.(
        "a[href^='#']",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.length < 2 || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      if (window.location.hash !== href) {
        history.pushState(null, "", href);
      }
      target.scrollIntoView({ behavior: motion(), block: "start" });
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onDocumentClick);

    return () => {
      clearScheduled();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onDocumentClick);
      if ("scrollRestoration" in history && previousRestoration !== undefined) {
        history.scrollRestoration = previousRestoration;
      }
    };
  }, []);

  return null;
}
