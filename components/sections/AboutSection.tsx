import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { images, site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-[calc(4.25rem+env(safe-area-inset-top)+0.75rem)] bg-bg py-16 md:scroll-mt-[calc(5rem+env(safe-area-inset-top)+0.75rem)] md:py-20 lg:py-28">
      <Container className="grid items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16">
        <Photo
          src={images.about.src}
          alt={images.about.alt}
          className="order-2 aspect-[16/10] w-full lg:order-1 lg:col-span-6 lg:aspect-[5/4]"
          imageClassName="object-[center_55%] lg:object-center"
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
        <div className="order-1 lg:order-2 lg:col-span-6">
          <p className="text-[10px] uppercase tracking-[0.14em] text-sage md:text-[11px] md:tracking-[0.22em]">
            About
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,6.5vw,1.85rem)] font-semibold leading-[1.22] tracking-tight text-ink md:mt-3 md:text-4xl md:leading-[1.2]">
            A Fontana cleaning company with a reputation to match the work.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-ink-soft md:mt-6 md:leading-relaxed">
            {site.about}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-ink-soft md:leading-relaxed">
            Look through the services, then call or request a quote.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex min-h-11 items-center text-[12px] uppercase tracking-[0.1em] text-ink transition-colors hover:text-sage-deep md:mt-8"
          >
            More about the company
          </Link>
        </div>
      </Container>
    </section>
  );
}
