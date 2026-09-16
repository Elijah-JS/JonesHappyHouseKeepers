"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { mobileNavigation, navigation, site } from "@/lib/site";

function clearScrollLock() {
  document.documentElement.classList.remove("menu-open");
  document.documentElement.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  delete document.body.dataset.menuOpen;
  delete document.body.dataset.scrollY;
}

function lockBodyScroll() {
  document.documentElement.classList.add("menu-open");
  document.body.dataset.menuOpen = "true";
}

function scrollToSection(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const pendingScroll = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      lockBodyScroll();
      return () => clearScrollLock();
    }

    clearScrollLock();
    const target = pendingScroll.current;
    pendingScroll.current = null;
    if (target !== null) {
      const frame = window.requestAnimationFrame(() => {
        scrollToSection(target);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    return () => clearScrollLock();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }
    return () => {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => scrollToSection(hash));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  function closeMenu() {
    setOpen(false);
  }

  function handleHomeSectionNav(hash: string) {
    pendingScroll.current = hash;
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex flex-col pt-[env(safe-area-inset-top)]",
        open
          ? "bottom-0 overflow-y-auto bg-cream"
          : scrolled
            ? "border-b border-border/80 bg-cream lg:bg-cream/95 lg:shadow-[0_1px_0_rgba(27,26,23,0.04)] lg:backdrop-blur-md"
            : "border-b border-transparent bg-cream lg:bg-cream/80 lg:backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] w-full min-w-0 max-w-[1120px] shrink-0 items-center justify-between gap-3 px-4 min-[375px]:px-5 md:h-20 md:px-8">
        <Logo className="min-w-0" onNavigate={closeMenu} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[13px] tracking-[0.04em] transition-colors",
                  active ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-2 text-[13px] text-ink-soft transition-colors hover:text-ink"
          >
            <Phone className="h-3.5 w-3.5 text-sage" strokeWidth={1.75} />
            {site.phone.display}
          </a>
          <Link href="/contact" className={buttonClass("primary", "py-2.5")}>
            Get a Free Quote
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-0.5 lg:hidden">
          <a
            href={site.phone.href}
            className="inline-flex h-12 min-w-12 items-center justify-center px-2.5 text-[13px] font-medium tracking-[0.02em] text-ink min-[390px]:px-3"
          >
            <Phone className="h-4 w-4 min-[390px]:hidden" strokeWidth={1.75} />
            <span className="hidden min-[390px]:inline">Call</span>
            <span className="sr-only min-[390px]:hidden">
              Call Jones Happy Housekeepers
            </span>
          </a>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center text-ink"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="mx-auto flex min-h-[calc(100svh-4.25rem-env(safe-area-inset-top))] w-full max-w-[1120px] flex-1 flex-col px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 min-[375px]:px-5 md:min-h-[calc(100svh-5rem-env(safe-area-inset-top))] md:px-8 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {mobileNavigation.map((item) => {
              const href = pathname === "/" && item.hash ? `#${item.hash}` : item.href;

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={(event) => {
                    if (pathname === "/") {
                      event.preventDefault();
                      handleHomeSectionNav(item.hash);
                      history.replaceState(
                        null,
                        "",
                        item.hash ? `#${item.hash}` : "/",
                      );
                      return;
                    }
                    closeMenu();
                  }}
                  className="flex min-h-14 items-center border-b border-border/70 font-display text-[1.375rem] tracking-tight text-ink/80 min-[390px]:text-[1.5rem]"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-border/80 pt-6">
            <a
              href={site.phone.href}
              className={buttonClass("secondary", "w-full")}
            >
              Call {site.phone.display}
            </a>
            <Link
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={(event) => {
                if (pathname === "/") {
                  event.preventDefault();
                  handleHomeSectionNav("contact");
                  history.replaceState(null, "", "#contact");
                  return;
                }
                closeMenu();
              }}
              className={buttonClass("primary", "w-full")}
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
