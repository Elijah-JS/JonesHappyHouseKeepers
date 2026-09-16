import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { services } from "@/lib/site";

export function ServicesSection() {
  const [home, office, general, realEstate] = services;

  return (
    <section id="services" className="scroll-mt-[calc(4.25rem+env(safe-area-inset-top)+0.75rem)] bg-surface py-16 md:scroll-mt-[calc(5rem+env(safe-area-inset-top)+0.75rem)] md:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.14em] text-sage md:text-[11px] md:tracking-[0.22em]">
              Services
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,6.5vw,1.85rem)] font-semibold leading-[1.22] tracking-tight text-ink md:mt-3 md:text-4xl md:leading-[1.2]">
              Cleaning for the spaces you live and work in.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center text-[13px] uppercase tracking-[0.08em] text-ink-soft transition-colors hover:text-ink md:min-h-11"
          >
            All services
          </Link>
        </div>

        <div className="mt-10 grid min-w-0 gap-5 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-7">
          <Link
            href={`/services#${home.id}`}
            className="group relative block h-[260px] overflow-hidden min-[390px]:h-[280px] sm:h-[360px] lg:col-span-7 lg:h-[520px]"
          >
            <Photo
              src={home.image.src}
              alt={home.image.alt}
              className="absolute inset-0"
              imageClassName="object-[center_60%] group-hover:scale-[1.03] lg:object-center"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-cream sm:p-6 md:p-8">
              <h3 className="font-display text-[1.35rem] font-semibold tracking-tight sm:text-2xl">
                {home.name}
              </h3>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-cream/80">
                {home.summary}
              </p>
            </div>
          </Link>

          <Link
            href={`/services#${office.id}`}
            className="group flex flex-col bg-bg lg:col-span-5"
          >
            <Photo
              src={office.image.src}
              alt={office.image.alt}
              className="aspect-[16/10] w-full lg:aspect-[5/3]"
              imageClassName="object-[center_40%] group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
            <div className="flex flex-1 flex-col justify-end p-5 sm:p-6 md:p-8">
              <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-ink sm:text-2xl">
                {office.name}
              </h3>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-soft">
                {office.summary}
              </p>
            </div>
          </Link>

          <Link
            href={`/services#${general.id}`}
            className="group border border-border p-5 sm:p-6 md:p-8 lg:col-span-5"
          >
            <p className="text-[10px] uppercase tracking-[0.16em] text-sage md:text-[11px] md:tracking-[0.18em]">
              Property care
            </p>
            <h3 className="mt-3 font-display text-[1.35rem] font-semibold tracking-tight text-ink sm:mt-4 sm:text-2xl">
              {general.name}
            </h3>
            <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-ink-soft">
              {general.summary}
            </p>
            <span className="mt-6 inline-block text-[12px] uppercase tracking-[0.1em] text-ink sm:mt-8">
              Learn more
            </span>
          </Link>

          <Link
            href={`/services#${realEstate.id}`}
            className="group relative block h-[220px] overflow-hidden min-[390px]:h-[240px] sm:h-[280px] lg:col-span-7 lg:h-[320px]"
          >
            <Photo
              src={realEstate.image.src}
              alt={realEstate.image.alt}
              className="absolute inset-0"
              imageClassName="object-[center_35%] group-hover:scale-[1.03] lg:object-center"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-ink/25" />
            <div className="absolute inset-0 flex items-end p-5 sm:p-6 md:p-8">
              <div className="text-cream">
                <h3 className="font-display text-[1.35rem] font-semibold tracking-tight sm:text-2xl">
                  {realEstate.name}
                </h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-cream/80">
                  {realEstate.summary}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
