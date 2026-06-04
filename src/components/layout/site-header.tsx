"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  Boxes,
  ChevronDown,
  Apple,
  Coffee,
  CupSoda,
  Dumbbell,
  HeartPulse,
  Menu,
  PauseCircle,
  PawPrint,
  Pill,
  Plug,
  RefreshCw,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Ticket,
  UserRound,
  UtensilsCrossed,
  Workflow,
  Layers,
  X,
  type LucideIcon,
} from "lucide-react";

import { marketingHeaderCtas, mainNavigation } from "@/config";
import {
  featuresMenu,
  type FeatureMenuGroup,
  type FeatureMenuIcon,
  type FeatureMenuItem,
} from "@/config/marketing/features-menu";
import {
  sectorsMenuGroups,
  type SectorMenuGroup,
  type SectorMenuItem,
} from "@/config/marketing/sectors-menu";
import type { HomeVerticalIcon } from "@/content/marketing/home-verticals";
import type { NavItem } from "@/config/navigation";
import {
  DESKTOP_NAV_MEDIA_QUERY,
  useMediaQuery,
} from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";

import { Cluster } from "./cluster";
import { Container } from "./container";
import { SiteHeaderMobileNav } from "./site-header-mobile-nav";
import { SiteLogo } from "./site-logo";

const featureMenuIcon: Record<FeatureMenuIcon, LucideIcon> = {
  plan: RefreshCw,
  bundle: Boxes,
  voucher: Ticket,
  dunning: ShieldCheck,
  pause: PauseCircle,
  automation: Workflow,
  integrations: Plug,
  portal: UserRound,
  scale: Layers,
};

const sectorMenuIcon: Record<HomeVerticalIcon, LucideIcon> = {
  coffee: Coffee,
  beauty: Sparkles,
  supplements: Pill,
  petFood: PawPrint,
  food: UtensilsCrossed,
  wellness: HeartPulse,
  snacks: Apple,
  grocery: ShoppingBasket,
  beverage: CupSoda,
  protein: Dumbbell,
};

export type SiteHeaderProps = {
  className?: string;
};

const navLinkClassName = cn(
  "relative inline-flex w-full items-center gap-1 whitespace-nowrap rounded-shell",
  "px-3 py-2 text-[14px] font-medium leading-[1.45] tracking-[-0.02em]",
  "xl:px-3.5 xl:text-[15px]",
  "border border-transparent text-[color:var(--marketing-foreground-strong)]",
);

const HOVER_CLOSE_DELAY_MS = 140;

/** Nav pill alt kenarı — JS ile `--site-header-mega-menu-top` güncellenir (sticky + normal). */
const megaMenuViewportLayerClassName = cn(
  "fixed inset-x-0 z-50 hidden lg:block",
  "top-[var(--site-header-mega-menu-top,var(--site-header-offset))]",
  "pt-1",
);

const megaMenuPanelSurfaceClassName = cn(
  "rounded-[1.25rem] border border-[color:var(--marketing-border-subtle)]",
  "bg-[color:var(--marketing-surface-elevated)] shadow-elevation-overlay",
  "animate-in fade-in-0 zoom-in-95 duration-150",
  "max-h-[min(70vh,calc(100dvh-var(--site-header-mega-menu-top,var(--site-header-offset))-1.25rem))] overflow-y-auto overscroll-contain",
);

const megaMenuPanelLayoutClassName = "w-[min(100%,72rem)] p-4 md:p-5";

const megaMenuViewportMaxWidthClassName = "max-w-[min(calc(100vw-1.5rem),72rem)]";

const megaMenuGridBaseClassName = cn(
  "grid grid-cols-1 gap-x-5 gap-y-5",
  "sm:grid-cols-2 md:gap-x-6 lg:gap-x-6",
);

const megaMenuGridFourColumnsClassName = cn(
  megaMenuGridBaseClassName,
  "lg:grid-cols-4 lg:[&>div]:min-w-[14rem] xl:[&>div]:min-w-[15rem]",
);

const megaMenuGridThreeColumnsClassName = cn(
  megaMenuGridBaseClassName,
  "lg:grid-cols-3 lg:w-full lg:[&>div]:min-w-0",
);

const megaMenuItemLinkClassName = cn(
  "group flex h-full min-h-[4.25rem] items-start gap-2.5 rounded-[0.75rem] p-2.5",
  "transition-[background-color,box-shadow,transform] duration-200 ease-out",
  "hover:-translate-y-px",
  "hover:bg-[color:color-mix(in_oklab,var(--marketing-surface-band)_82%,var(--marketing-soft-blue))]",
  "hover:shadow-[0_4px_14px_-6px_color-mix(in_oklab,var(--marketing-primary)_18%,transparent),inset_0_0_0_1px_color-mix(in_oklab,var(--marketing-border-subtle)_60%,var(--marketing-soft-blue))]",
);

const megaMenuItemIconClassName = cn(
  "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[0.5rem]",
  "bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_60%,var(--marketing-background))]",
  "text-[color:var(--marketing-primary)]",
  "transition-colors duration-200",
  "group-hover:bg-[color:color-mix(in_oklab,var(--marketing-soft-blue)_88%,#ffffff)]",
  "group-hover:text-[color:var(--marketing-primary-deep)]",
);

const megaMenuItemTitleClassName = cn(
  "block font-heading text-[0.875rem] font-semibold leading-[1.25] tracking-[-0.015em]",
  "text-[color:var(--marketing-foreground-strong)]",
  "transition-colors duration-200",
  "group-hover:text-[color:var(--marketing-primary-deep)]",
);

const megaMenuItemDescriptionClassName = cn(
  "mt-1 block line-clamp-1 text-pretty text-[12px] leading-[1.45] tracking-[-0.01em]",
  "text-[color:var(--marketing-body-muted)]",
  "transition-colors duration-200",
  "group-hover:text-[color:var(--marketing-body-readable)]",
);

type MegaMenuAnchor = {
  centerX: number;
};

const headerCtaClassName = cn(
  "inline-flex h-10 items-center justify-center rounded-shell sm:h-11",
  "px-4 text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-white sm:px-6 sm:text-[15px]",
  "bg-[color:var(--marketing-primary)]",
  "transition-colors hover:bg-[color:var(--marketing-primary-hover)]",
  "lg:h-12 lg:min-w-[8.75rem] lg:px-7",
);

export function SiteHeader({ className }: SiteHeaderProps) {
  const pathname = usePathname();

  return <SiteHeaderInner key={pathname} className={className} />;
}

function SiteHeaderInner({ className }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isDesktopNav = useMediaQuery(DESKTOP_NAV_MEDIA_QUERY);
  const showMobileNav = mobileNavOpen && !isDesktopNav;
  const headerRef = useRef<HTMLElement>(null);
  const desktopNavAnchorRef = useRef<HTMLDivElement>(null);
  const megaMenuTriggerRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [megaMenuAnchor, setMegaMenuAnchor] = useState<MegaMenuAnchor | null>(null);

  const syncMegaMenuAnchor = useCallback(() => {
    const anchor = desktopNavAnchorRef.current;
    const header = headerRef.current;
    if (!anchor || !header) return;
    const { bottom } = anchor.getBoundingClientRect();
    header.style.setProperty("--site-header-mega-menu-top", `${bottom}px`);
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      setMegaMenuAnchor(null);
    }, HOVER_CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  const syncMegaMenuTriggerAnchor = useCallback((menuTitle: string | null) => {
    if (!menuTitle) {
      setMegaMenuAnchor((prev) => (prev === null ? prev : null));
      return;
    }

    const trigger = megaMenuTriggerRefs.current.get(menuTitle);
    if (!trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    let centerX = triggerRect.left + trigger.offsetWidth / 2;

    const navItem = mainNavigation.find((item) => item.title === menuTitle);
    if (navItem?.megaMenu === "features") {
      const navAnchor = desktopNavAnchorRef.current;
      if (navAnchor) {
        const navRect = navAnchor.getBoundingClientRect();
        const navCenterX = navRect.left + navRect.width / 2;
        centerX = centerX + (navCenterX - centerX) * 0.5;
      }
    }

    setMegaMenuAnchor((prev) => (prev?.centerX === centerX ? prev : { centerX }));
  }, []);

  const handleNavItemEnter = useCallback(
    (item: NavItem) => {
      clearCloseTimer();
      if (item.megaMenu) {
        setOpenMenu(item.title);
      } else {
        setOpenMenu(null);
        setMegaMenuAnchor(null);
      }
    },
    [clearCloseTimer],
  );

  const registerMegaMenuTrigger = useCallback((title: string, node: HTMLDivElement | null) => {
    if (node) {
      megaMenuTriggerRefs.current.set(title, node);
      return;
    }

    megaMenuTriggerRefs.current.delete(title);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isDesktopNav) return;

    const anchor = desktopNavAnchorRef.current;
    const header = headerRef.current;
    if (!anchor || !header) return;

    syncMegaMenuAnchor();
    const ro = new ResizeObserver(syncMegaMenuAnchor);
    ro.observe(anchor);
    ro.observe(header);

    window.addEventListener("scroll", syncMegaMenuAnchor, { passive: true });
    window.addEventListener("resize", syncMegaMenuAnchor);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", syncMegaMenuAnchor);
      window.removeEventListener("resize", syncMegaMenuAnchor);
    };
  }, [isDesktopNav, scrolled, syncMegaMenuAnchor]);

  useEffect(() => {
    if (!openMenu || !isDesktopNav) return;
    syncMegaMenuAnchor();
    syncMegaMenuTriggerAnchor(openMenu);
    const id = requestAnimationFrame(() => {
      syncMegaMenuAnchor();
      syncMegaMenuTriggerAnchor(openMenu);
    });
    return () => cancelAnimationFrame(id);
  }, [openMenu, isDesktopNav, syncMegaMenuAnchor, syncMegaMenuTriggerAnchor]);

  useEffect(() => {
    if (!openMenu || !isDesktopNav) return;

    const onViewportChange = () => syncMegaMenuTriggerAnchor(openMenu);
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    return () => {
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
    };
  }, [openMenu, isDesktopNav, syncMegaMenuTriggerAnchor]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    if (!openMenu || !isDesktopNav) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu, isDesktopNav]);

  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "pt-[max(0.75rem,env(safe-area-inset-top,0px))] lg:pt-[15px]",
        "transition-[padding-top,background-color,backdrop-filter,border-color] duration-400 ease-in-out",
        scrolled && "lg:pt-0",
        scrolled
          ? "border-b border-black/[0.06] bg-white/20 backdrop-blur-[10px]"
          : "border-b border-transparent bg-transparent backdrop-blur-none",
        className,
      )}
      onMouseLeave={
        isDesktopNav && openMenu ? scheduleClose : undefined
      }
      onMouseEnter={isDesktopNav && openMenu ? clearCloseTimer : undefined}
    >
      <Container
        className={cn(
          "relative transition-[padding] duration-400 ease-in-out",
          scrolled ? "py-2.5 lg:py-3" : "py-3 lg:py-4",
        )}
      >
        {/* Mobil + tablet */}
        <div className="flex items-center justify-between gap-3 lg:hidden">
          <SiteLogo priority />
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={marketingHeaderCtas.primary.href}
              className={cn(headerCtaClassName, "px-3.5 text-[13px] sm:px-6 sm:text-[15px]")}
            >
              {marketingHeaderCtas.primary.label}
            </Link>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-shell",
                "border border-[color:var(--marketing-border-subtle)]",
                "bg-white/95 text-[color:var(--marketing-foreground-strong)]",
                "shadow-elevation-surface backdrop-blur-sm",
                "transition-colors hover:bg-[color:var(--marketing-soft-blue)]",
              )}
              aria-expanded={showMobileNav}
              aria-controls="mobile-main-nav"
              aria-label={showMobileNav ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {showMobileNav ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* Masaüstü */}
        <div
          className={cn(
            "hidden w-full items-center justify-between gap-6 lg:flex",
            scrolled ? "min-h-[4.5rem]" : "min-h-[4.75rem]",
          )}
        >
          <SiteLogo priority />
          <nav
            aria-label="Ana menü"
            className="flex min-w-0 flex-1 justify-center"
          >
            <div
              ref={desktopNavAnchorRef}
              className={cn(
                "flex max-w-full min-w-0 items-center rounded-shell",
                "border border-[color:var(--marketing-border-subtle)]",
                "bg-white/95 shadow-elevation-surface backdrop-blur-sm",
                "gap-0.5 px-2 py-2 xl:gap-1.5 xl:px-2.5 xl:py-2.5",
              )}
            >
              {mainNavigation.map((item) => {
                if (item.megaMenu) {
                  return (
                    <MegaMenuNavItem
                      key={item.title}
                      item={item as NavItem & { megaMenu: "features" | "sectors" }}
                      isOpen={openMenu === item.title}
                      onEnter={() => handleNavItemEnter(item)}
                      onToggle={() =>
                        setOpenMenu((current) =>
                          current === item.title ? null : item.title,
                        )
                      }
                      triggerRef={(node) => registerMegaMenuTrigger(item.title, node)}
                    />
                  );
                }

                return (
                  <NavTabItem key={item.href} onEnter={() => handleNavItemEnter(item)}>
                    <Link href={item.href} className={navLinkClassName}>
                      {item.title}
                    </Link>
                  </NavTabItem>
                );
              })}
            </div>
          </nav>

          <Cluster gap="sm" className="shrink-0">
            <Link href={marketingHeaderCtas.primary.href} className={headerCtaClassName}>
              {marketingHeaderCtas.primary.label}
            </Link>
          </Cluster>
        </div>
      </Container>

      <SiteHeaderMobileNav open={showMobileNav} onClose={closeMobileNav} />

      {openMenu && isDesktopNav && megaMenuAnchor ? (
        <ViewportMegaMenu
          menuKey={openMenu}
          anchor={megaMenuAnchor}
          onClearCloseTimer={clearCloseTimer}
          onScheduleClose={scheduleClose}
        />
      ) : null}
    </header>
  );
}

function ViewportMegaMenu({
  menuKey,
  anchor,
  onClearCloseTimer,
  onScheduleClose,
}: {
  menuKey: string;
  anchor: MegaMenuAnchor;
  onClearCloseTimer: () => void;
  onScheduleClose: () => void;
}) {
  const megaMenuType = mainNavigation.find((item) => item.title === menuKey)?.megaMenu;

  if (!megaMenuType) return null;

  return (
    <div
      className={cn(megaMenuViewportLayerClassName, "pointer-events-none")}
      onMouseEnter={onClearCloseTimer}
      onMouseLeave={onScheduleClose}
    >
      <div
        className={cn("pointer-events-auto w-max px-3 pt-1", megaMenuViewportMaxWidthClassName)}
        style={{
          position: "fixed",
          left: anchor.centerX,
          top: "var(--site-header-mega-menu-top, var(--site-header-offset))",
          transform: "translateX(-50%)",
        }}
      >
        {megaMenuType === "features" ? (
          <FeaturesMegaMenuPanel groups={featuresMenu} />
        ) : (
          <SectorsMegaMenuPanel groups={sectorsMenuGroups} />
        )}
      </div>
    </div>
  );
}

function NavTabAnimatedBorder({ active }: { active?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn("nav-tab-animated-border", active && "is-active")}
    />
  );
}

function NavTabItem({
  active,
  onEnter,
  triggerRef,
  children,
}: {
  active?: boolean;
  onEnter: () => void;
  triggerRef?: (node: HTMLDivElement | null) => void;
  children: ReactNode;
}) {
  return (
    <div
      ref={triggerRef}
      className="group/navtab relative"
      onMouseEnter={onEnter}
    >
      <NavTabAnimatedBorder active={active} />
      {children}
    </div>
  );
}

function MegaMenuNavItem({
  item,
  isOpen,
  onEnter,
  onToggle,
  triggerRef,
}: {
  item: NavItem & { megaMenu: "features" | "sectors" };
  isOpen: boolean;
  onEnter: () => void;
  onToggle: () => void;
  triggerRef: (node: HTMLDivElement | null) => void;
}) {
  return (
    <NavTabItem active={isOpen} onEnter={onEnter} triggerRef={triggerRef}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={navLinkClassName}
      >
        {item.title}
        <ChevronDown
          className={cn(
            "size-3.5 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden
        />
      </button>
    </NavTabItem>
  );
}

function MegaMenuColumn({
  label,
  children,
  compact,
}: {
  label: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col", compact && "h-full")}>
      <p
        className={cn(
          "font-sans font-semibold uppercase text-[color:var(--marketing-body-muted)]",
          compact
            ? "mb-2 text-[0.625rem] tracking-[0.13em]"
            : "mb-3 text-[0.6875rem] tracking-[0.14em]",
        )}
      >
        {label}
      </p>
      <ul
        className={cn(
          compact ? "grid flex-1 auto-rows-fr gap-1" : "flex flex-col gap-0.5",
        )}
      >
        {children}
      </ul>
    </div>
  );
}

function MegaMenuItemLink({
  href,
  title,
  description,
  icon: Icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <li className="min-h-0">
      <Link href={href} role="menuitem" className={megaMenuItemLinkClassName}>
        <span className={megaMenuItemIconClassName}>
          <Icon className="size-4 stroke-[1.75]" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className={megaMenuItemTitleClassName}>{title}</span>
          <span className={megaMenuItemDescriptionClassName}>{description}</span>
        </span>
      </Link>
    </li>
  );
}

function SectorMenuItemLink({ item }: { item: SectorMenuItem }) {
  const Icon = sectorMenuIcon[item.icon];
  return (
    <MegaMenuItemLink
      href={item.href}
      title={item.title}
      description={item.description}
      icon={Icon}
    />
  );
}

function SectorsMegaMenuPanel({ groups }: { groups: SectorMenuGroup[] }) {
  return (
    <div
      role="menu"
      aria-label="Sektörler"
      className={cn(megaMenuPanelSurfaceClassName, megaMenuPanelLayoutClassName)}
    >
      <div className={megaMenuGridFourColumnsClassName}>
        {groups.map((group) => (
          <MegaMenuColumn key={group.label} label={group.label} compact>
            {group.items.map((item) => (
              <SectorMenuItemLink key={`${group.label}-${item.title}`} item={item} />
            ))}
          </MegaMenuColumn>
        ))}
      </div>
    </div>
  );
}

function FeatureMenuItemLink({ item }: { item: FeatureMenuItem }) {
  const Icon = featureMenuIcon[item.icon];
  return (
    <MegaMenuItemLink
      href={item.href}
      title={item.title}
      description={item.description}
      icon={Icon}
    />
  );
}

function FeaturesMegaMenuPanel({ groups }: { groups: FeatureMenuGroup[] }) {
  return (
    <div
      role="menu"
      aria-label="Özellikler"
      className={cn(megaMenuPanelSurfaceClassName, megaMenuPanelLayoutClassName)}
    >
      <div className={megaMenuGridThreeColumnsClassName}>
        {groups.map((group) => (
          <MegaMenuColumn key={group.label} label={group.label} compact>
            {group.items.map((menuItem) => (
              <FeatureMenuItemLink
                key={`${group.label}-${menuItem.title}`}
                item={menuItem}
              />
            ))}
          </MegaMenuColumn>
        ))}
      </div>
    </div>
  );
}
