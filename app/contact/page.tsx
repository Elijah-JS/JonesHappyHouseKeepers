import type { Metadata } from "next";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free cleaning quote from Jones Happy Housekeepers in Fontana, CA, or call (323) 333-4054.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Request a free quote."
        description="Tell us about the property and the kind of cleaning you need. You can also call the office directly."
      />

      <section className="bg-surface py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="order-2 lg:order-1 lg:col-span-4">
            <h2 className="font-display text-[1.45rem] font-semibold tracking-tight text-ink md:text-2xl">
              Jones Happy Housekeepers
            </h2>
            <address className="mt-4 not-italic text-[15px] leading-[1.7] text-ink-soft md:mt-5 md:leading-relaxed">
              <a
                href={site.address.mapsUrl}
                className="text-ink transition-colors hover:text-sage-deep"
              >
                {site.address.line1}
                <br />
                {site.address.line2}
              </a>
              <p className="mt-4">
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-11 items-center text-ink md:min-h-0"
                >
                  {site.phone.display}
                </a>
              </p>
            </address>
            <p className="mt-6 max-w-xs text-sm leading-[1.7] text-ink-soft md:mt-8 md:leading-relaxed">
              Home cleaning, office cleaning, general cleaning, and
              real-estate-related cleaning in Fontana.
            </p>
          </aside>
          <div className="order-1 border border-border bg-cream p-4 min-[375px]:p-5 md:p-8 lg:order-2 lg:col-span-8">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
