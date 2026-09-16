import { cn } from "@/lib/cn";

type YelpMarkProps = {
  className?: string;
};

export function YelpMark({ className }: YelpMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline text-[13px] font-semibold lowercase tracking-tight text-yelp",
        className,
      )}
    >
      yelp
    </span>
  );
}
