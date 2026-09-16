import { MoreReviewsLink } from "@/components/sections/MoreReviewsLink";
import { ReputationHighlight } from "@/components/sections/ReputationHighlight";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { Container } from "@/components/ui/Container";

export function ReputationSection() {
  return (
    <section id="reviews" className="scroll-mt-[calc(4.25rem+env(safe-area-inset-top)+0.75rem)] bg-charcoal py-16 text-cream md:scroll-mt-[calc(5rem+env(safe-area-inset-top)+0.75rem)] md:py-24 lg:py-28">
      <Container>
        <ReputationHighlight />
        <TestimonialGrid />
        <div className="mt-8 flex justify-center sm:mt-10 empty:hidden">
          <MoreReviewsLink />
        </div>
      </Container>
    </section>
  );
}
