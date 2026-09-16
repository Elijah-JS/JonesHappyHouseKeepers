"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { navigation, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.dataset.menuOpen = open ? "true" : "";
    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.menuOpen;
    };
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-cream/95 shadow-[0_1px_0_rgba(27,26,23,0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-cream/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4 min-[375px]:px-5 md:h-20 md:px-8">
        <Logo />

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

        <div className="flex shrink-0 items-center lg:hidden">
          <a
            href={site.phone.href}
            className="inline-flex h-11 items-center justify-center px-2.5 text-ink min-[390px]:px-3"
          >
            <Phone className="h-4 w-4 min-[390px]:hidden" strokeWidth={1.75} />
            <span className="hidden text-[13px] font-medium tracking-[0.02em] min-[390px]:inline">
              Call
            </span>
            <span className="sr-only min-[390px]:hidden">Call Jones Happy Housekeepers</span>
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-ink"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-40 bg-cream md:top-[calc(5rem+env(safe-area-inset-top))] lg:hidden"
      >
        <nav
          className="mx-auto flex h-full max-w-[1120px] flex-col justify-between px-4 py-8 min-[375px]:px-5 md:px-8"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
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
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-border/70 py-3.5 font-display text-[1.5rem] tracking-tight min-[390px]:text-[1.65rem]",
                    active ? "text-ink" : "text-ink/80",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <a href={site.phone.href} className={buttonClass("secondary")}>
              Call {site.phone.display}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={buttonClass("primary")}
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
