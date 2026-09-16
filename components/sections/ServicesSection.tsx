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
            className="group relative flex min-h-[260px] min-w-0 flex-col justify-end min-[390px]:min-h-[280px] sm:min-h-[360px] lg:col-span-7 lg:min-h-[520px]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Photo
                src={home.image.src}
                alt={home.image.alt}
                className="h-full w-full"
                imageClassName="object-[center_60%] group-hover:scale-[1.03] lg:object-center"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
            </div>
            <div className="relative z-10 min-w-0 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
              <h3 className="max-w-[16ch] font-display text-[clamp(1.2rem,4.8vw,1.5rem)] font-semibold leading-[1.28] tracking-tight text-cream sm:text-2xl sm:leading-tight">
                {home.name}
              </h3>
              <p className="mt-1.5 max-w-sm text-[0.875rem] leading-[1.55] text-cream/85 sm:text-sm sm:leading-relaxed">
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
            className="group relative flex min-h-[220px] min-w-0 flex-col justify-end min-[390px]:min-h-[240px] sm:min-h-[280px] lg:col-span-7 lg:min-h-[320px]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Photo
                src={realEstate.image.src}
                alt={realEstate.image.alt}
                className="h-full w-full"
                imageClassName="object-[center_35%] group-hover:scale-[1.03] lg:object-center"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <div className="relative z-10 min-w-0 w-full bg-gradient-to-t from-ink/80 via-ink/45 to-transparent px-4 pb-5 pt-14 sm:px-6 sm:pb-6 sm:pt-16 md:px-8 md:pb-8 md:pt-20">
              <div className="max-w-md text-cream [text-shadow:0_1px_10px_rgba(27,26,23,0.28)]">
                <h3 className="font-display text-[clamp(1.2rem,4.8vw,1.5rem)] font-semibold leading-[1.28] tracking-tight sm:text-2xl sm:leading-tight">
                  {realEstate.name}
                </h3>
                <p className="mt-1.5 text-[0.875rem] leading-[1.55] text-cream/90 sm:text-sm sm:leading-relaxed">
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
