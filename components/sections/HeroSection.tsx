import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { images, site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative bg-bg">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
        <div className="order-2 flex flex-col justify-end px-4 pt-7 pb-10 min-[375px]:px-5 sm:pt-9 sm:pb-12 md:px-10 md:pb-16 lg:order-1 lg:justify-center lg:px-12 lg:pt-28 lg:pb-20 xl:pl-[max(3rem,calc((100vw-1120px)/2))]">
          <p className="animate-fade-up text-[10px] uppercase tracking-[0.16em] text-sage md:text-[11px] md:tracking-[0.22em]">
            Fontana, California
          </p>
          <h1 className="animate-fade-up delay-100 mt-3 max-w-[16ch] font-display text-[2rem] font-semibold leading-[1.14] tracking-tight text-ink min-[390px]:text-[2.15rem] sm:mt-5 sm:text-[2.5rem] lg:text-[3.35rem] lg:leading-[1.12]">
            {site.tagline}
          </h1>
          <p className="animate-fade-up delay-200 mt-4 max-w-md text-[15px] leading-[1.65] text-ink-soft sm:mt-6 sm:text-base lg:text-[17px] lg:leading-relaxed">
            Professional home and office cleaning in Fontana, backed by a trusted
            local reputation and detail-focused service.
          </p>
          <div className="animate-fade-up delay-300 mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
            <Link href="/contact" className={buttonClass("primary", "w-full sm:w-auto")}>
              Get a Free Quote
            </Link>
            <Link href="/services" className={buttonClass("secondary", "w-full sm:w-auto")}>
              View Services
            </Link>
          </div>
          <a
            href={site.phone.href}
            className="animate-fade-up delay-300 mt-4 inline-flex min-h-11 w-fit items-center text-sm text-ink-soft transition-colors hover:text-ink sm:mt-6"
          >
            {site.phone.display}
          </a>
          <dl className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-border pt-5 text-[12px] leading-snug text-ink-soft sm:mt-10 sm:grid sm:max-w-lg sm:grid-cols-3 sm:gap-4 sm:pt-6 sm:text-[13px]">
            <div>
              <dt className="font-medium text-ink">{site.reputation.rating}★</dt>
              <dd>Customer rating</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Home & office</dt>
              <dd>Cleaning</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Fontana, CA</dt>
              <dd>Local service</dd>
            </div>
          </dl>
        </div>

        <div className="relative order-1 aspect-[4/3] max-h-[260px] min-h-[200px] min-[390px]:max-h-[280px] md:aspect-[16/10] md:max-h-[380px] lg:order-2 lg:aspect-auto lg:h-auto lg:max-h-none lg:min-h-[100svh]">
          <Photo
            src={images.hero.src}
            alt={images.hero.alt}
            priority
            className="absolute inset-0 h-full lg:min-h-[100svh]"
            imageClassName="object-[center_32%] md:object-[center_38%] lg:object-[center_42%]"
            sizes="(min-width: 1024px) 54vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
