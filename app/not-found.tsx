import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-bg pt-[6.75rem] pb-16 md:py-40">
      <Container className="max-w-xl">
        <p className="text-[10px] uppercase tracking-[0.14em] text-sage md:text-[11px] md:tracking-[0.22em]">
          404
        </p>
        <h1 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.18] tracking-tight text-ink md:mt-4 md:text-4xl">
          This page is not available.
        </h1>
        <p className="mt-4 text-[15px] leading-[1.7] text-ink-soft md:mt-5 md:leading-relaxed">
          Return home or request a quote from Jones Happy Housekeepers.
        </p>
        <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
          <Link href="/" className={buttonClass("primary", "w-full sm:w-auto")}>
            Back home
          </Link>
          <Link href="/contact" className={buttonClass("secondary", "w-full sm:w-auto")}>
            Get a Free Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
