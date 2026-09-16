import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { YelpMark } from "@/components/ui/YelpMark";
import { YelpProfileLink } from "@/components/ui/YelpProfileLink";
import { site } from "@/lib/site";

type ReputationHighlightProps = {
  ctaHref?: string;
  ctaLabel?: string;
  showEyebrow?: boolean;
};

export function ReputationHighlight({
  ctaHref = "/contact",
  ctaLabel = "Get a Free Quote",
  showEyebrow = true,
}: ReputationHighlightProps) {
  const yelpUrl = site.reputation.reviewsProfileUrl.trim();

  return (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-20">
      <div className="lg:col-span-7">
        {showEyebrow ? (
          <p className="text-[10px] uppercase tracking-[0.14em] text-cream/50 md:text-[11px] md:tracking-[0.22em]">
            {site.reputation.eyebrow}
          </p>
        ) : null}
        <p
          className={showEyebrow ? "mt-5 sm:mt-6" : undefined}
          aria-label={`${site.reputation.rating} out of 5 stars`}
        >
          <span className="block font-display text-[clamp(4.25rem,20vw,6.25rem)] font-semibold leading-none tracking-tight sm:text-[7.5rem] lg:text-[8.5rem]">
            {site.reputation.rating}
          </span>
          <StarRating
            className="mt-4 text-cream/80"
            starClassName="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]"
          />
        </p>
        <p className="mt-4 text-[15px] text-cream/65">
          Based on {site.reputation.reviewCount} public reviews
        </p>
        {yelpUrl ? (
          <YelpProfileLink className="mt-4 text-cream/55" href={yelpUrl}>
            <span>See reviews on</span>
            <YelpMark className="text-[13px]" />
          </YelpProfileLink>
        ) : (
          <p className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-cream/55">
            <span>Featured reviews from</span>
            <YelpMark className="text-[13px]" />
          </p>
        )}
      </div>

      <div className="max-w-md border-t border-white/10 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
        <p className="text-[15px] leading-[1.75] text-cream/75 md:text-[16px]">
          {site.reputation.summary}
        </p>
        <Link
          href={ctaHref}
          className={buttonClass("inverse", "mt-7 w-full sm:w-auto")}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
