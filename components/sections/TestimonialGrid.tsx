import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { publishedReviews } from "@/lib/site";

export function TestimonialGrid() {
  const visibleReviews = publishedReviews();

  if (visibleReviews.length === 0) {
    return null;
  }

  return (
    <ul className="mt-10 grid gap-3 sm:mt-12 lg:mt-14 lg:grid-cols-3 lg:gap-4">
      {visibleReviews.map((review) => (
        <li key={review.text}>
          <TestimonialCard review={review} />
        </li>
      ))}
    </ul>
  );
}
