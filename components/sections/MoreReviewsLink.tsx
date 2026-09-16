import { buttonClass } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function MoreReviewsLink() {
  const profileUrl = site.reputation.reviewsProfileUrl.trim();

  if (!profileUrl) {
    return null;
  }

  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass(
        "secondary",
        "w-full border-cream/20 text-cream hover:border-cream/45 hover:bg-cream hover:text-ink sm:w-auto",
      )}
    >
      See more reviews on Yelp
    </a>
  );
}
