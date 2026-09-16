"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <div className="mobile-cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-cream/95 px-4 pt-2.5 backdrop-blur-md [[data-menu-open=true]_&]:hidden lg:hidden pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5">
        <a
          href={site.phone.href}
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink/15 bg-surface text-[12px] font-medium uppercase tracking-[0.06em] text-ink"
        >
          <Phone className="h-3.5 w-3.5 text-sage" strokeWidth={1.75} />
          Call
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center bg-sage text-[12px] font-medium uppercase tracking-[0.06em] text-cream"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
