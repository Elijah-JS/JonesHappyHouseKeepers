import { ArrowUpRight } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import { YelpMark } from "@/components/ui/YelpMark";
import { cn } from "@/lib/cn";
import type { Review } from "@/lib/site";

type TestimonialCardProps = {
  review: Review;
  className?: string;
};

export function TestimonialCard({ review, className }: TestimonialCardProps) {
  const name = review.name.trim();
  const reviewUrl = review.url.trim();
  const isYelp = review.source.trim().toLowerCase() === "yelp";

  return (
    <article
      className={cn(
        "flex flex-col border border-white/10 bg-[#35332e] px-5 py-5 md:px-6 md:py-6",
        className,
      )}
    >
      {name ? (
        <header>
          <p className="min-w-0 truncate font-display text-[15px] font-semibold tracking-tight text-cream">
            {name}
          </p>
        </header>
      ) : null}

      {typeof review.rating === "number" ? (
        <div className="mt-3">
          <StarRating
            value={review.rating}
            tone="yelp"
            starClassName="h-3.5 w-3.5"
          />
          <span className="sr-only">{review.rating} out of 5 stars</span>
        </div>
      ) : null}

      <blockquote
        className={cn(
          "text-[1.05rem] leading-[1.65] text-cream md:text-[1.1rem] md:leading-[1.6]",
          name || typeof review.rating === "number" ? "mt-4" : "mt-3",
        )}
      >
        “{review.text}”
      </blockquote>

      <footer className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-white/8 pt-4">
        {isYelp ? (
          <p className="inline-flex items-center gap-1.5 text-[12px] text-cream/50">
            <span>Reviewed on</span>
            <YelpMark className="text-[12px]" />
          </p>
        ) : (
          <p className="text-[12px] text-cream/45">{review.source}</p>
        )}
        {reviewUrl ? (
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] text-cream/55 transition-colors hover:text-cream"
          >
            Read full review
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
        ) : null}
      </footer>
    </article>
  );
}
