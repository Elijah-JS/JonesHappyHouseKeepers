import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Photo } from "@/components/ui/Photo";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Fontana",
  description:
    "Home cleaning, office cleaning, general property cleaning, and real-estate-related cleaning from Jones Happy Housekeepers in Fontana, CA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Home, office, and property cleaning in Fontana."
        description="Home, office, general, and real-estate-related cleaning in Fontana. Tell us about a specific need when you request a quote."
      />

      <section className="bg-surface py-16 md:py-24">
        <Container className="space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="grid scroll-mt-28 items-center gap-6 lg:grid-cols-12 lg:gap-14"
            >
              <Photo
                src={service.image.src}
                alt={service.image.alt}
                className={`aspect-[16/10] w-full lg:col-span-6 lg:aspect-[5/4] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
                imageClassName="object-[center_45%] lg:object-center"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <div className="lg:col-span-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-sage md:text-[11px] md:tracking-[0.2em]">
                  0{index + 1}
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.5rem,6.5vw,1.85rem)] font-semibold tracking-tight text-ink md:mt-3 md:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-ink-soft md:mt-5 md:leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className={buttonClass("primary", "mt-6 w-full sm:w-auto md:mt-8")}
                >
                  Get a Free Quote
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
