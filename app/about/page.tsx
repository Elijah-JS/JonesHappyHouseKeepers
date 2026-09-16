import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Photo } from "@/components/ui/Photo";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jones Happy Housekeepers is a local Fontana, California cleaning company offering home, office, general, and real-estate-related cleaning.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A local Fontana cleaning business."
        description="A local Fontana cleaning company providing home, office, general, and real-estate-related cleaning."
      />

      <section className="bg-surface py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h2 className="font-display text-[clamp(1.5rem,6.5vw,1.85rem)] font-semibold leading-[1.22] tracking-tight text-ink md:text-3xl md:leading-[1.2]">
              Home and office cleaning, from Fontana.
            </h2>
            <div className="mt-5 max-w-md space-y-4 text-[15px] leading-[1.7] text-ink-soft md:mt-6 md:space-y-5 md:leading-relaxed">
              <p>{site.about}</p>
              <p>
                Customers currently rate Jones Happy Housekeepers{" "}
                {site.reputation.rating} stars across {site.reputation.reviewCount}{" "}
                public reviews.
              </p>
              <p>
                If you need a cleaner space, the next step is simple: call or
                request a quote.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Photo
              src={images.about.src}
              alt={images.about.alt}
              className="aspect-[16/10] w-full lg:aspect-[5/4]"
              imageClassName="object-[center_55%] lg:object-center"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
