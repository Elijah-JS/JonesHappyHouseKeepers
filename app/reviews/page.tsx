import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MoreReviewsLink } from "@/components/sections/MoreReviewsLink";
import { ReputationHighlight } from "@/components/sections/ReputationHighlight";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Jones Happy Housekeepers has a 4.8-star customer rating based on 49 public reviews.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Reviews"
        title={site.reputation.eyebrow + "."}
        description={site.reputation.summary}
      />

      <section className="bg-charcoal py-14 text-cream md:py-20 lg:py-24">
        <Container>
          <ReputationHighlight showEyebrow={false} />
          <TestimonialGrid />
          <div className="mt-8 flex justify-center sm:mt-10 empty:hidden">
            <MoreReviewsLink />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
