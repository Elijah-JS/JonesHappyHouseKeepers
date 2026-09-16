import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { images, site } from "@/lib/site";

export function QuoteSection() {
  return (
    <section id="quote" className="bg-surface py-14 md:py-20 lg:py-28">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.14em] text-sage md:text-[11px] md:tracking-[0.22em]">
            Free quote
          </p>
          <h2 className="mt-2.5 font-display text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-ink min-[390px]:text-[1.85rem] md:mt-3 md:text-4xl">
            Tell us about the space.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-ink-soft md:mt-5 md:leading-relaxed">
            Share a few details about the property and the kind of cleaning you
            need. Prefer to talk now? Call{" "}
            <a
              href={site.phone.href}
              className="text-ink underline decoration-border underline-offset-4"
            >
              {site.phone.display}
            </a>
            .
          </p>
          <Photo
            src={images.quote.src}
            alt={images.quote.alt}
            className="mt-10 hidden aspect-[4/5] w-full lg:block"
            sizes="(min-width: 1024px) 34vw, 100vw"
          />
        </div>
        <div className="border border-border bg-cream p-4 min-[375px]:p-5 md:p-8 lg:col-span-7">
          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}
