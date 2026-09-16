import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-bg-warm py-14 md:py-20 lg:py-24">
      <Container className="max-w-2xl text-left md:text-center">
        <p className="text-[10px] uppercase tracking-[0.14em] text-sage md:text-[11px] md:tracking-[0.22em]">
          Next step
        </p>
        <h2 className="mt-3 font-display text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-ink min-[390px]:text-[1.85rem] md:mt-4 md:text-4xl">
          Ready for a cleaner space?
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-ink-soft md:mx-auto md:mt-5 md:leading-relaxed">
          Get in touch with Jones Happy Housekeepers and request a quote.
        </p>
        <div className="mt-7 flex flex-col gap-2.5 md:mt-8 md:flex-row md:items-center md:justify-center md:gap-3">
          <Link href="/contact" className={buttonClass("primary", "w-full md:w-auto")}>
            Get a Free Quote
          </Link>
          <a href={site.phone.href} className={buttonClass("secondary", "w-full md:w-auto")}>
            Call {site.phone.display}
          </a>
        </div>
      </Container>
    </section>
  );
}
