import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

type StarRatingProps = {
  value?: number;
  tone?: "default" | "yelp";
  className?: string;
  starClassName?: string;
};

export function StarRating({
  value = 5,
  tone = "default",
  className,
  starClassName,
}: StarRatingProps) {
  const filled = Math.min(5, Math.max(0, Math.round(value)));

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5",
        tone === "yelp" ? "text-yelp" : "text-current",
        className,
      )}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={cn(
            "h-3.5 w-3.5",
            index < filled ? "fill-current" : "fill-transparent stroke-current opacity-35",
            starClassName,
          )}
          strokeWidth={index < filled ? 0 : 1.5}
        />
      ))}
    </span>
  );
}
