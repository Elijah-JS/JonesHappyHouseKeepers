import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type YelpProfileLinkProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  showIcon?: boolean;
};

export function YelpProfileLink({
  children,
  className,
  href,
  showIcon = true,
}: YelpProfileLinkProps) {
  const destination = (href ?? site.reputation.reviewsProfileUrl).trim();
  const classes = cn(
    "inline-flex items-center gap-1.5 text-[13px] tracking-[0.01em] transition-colors",
    className,
  );

  if (!destination) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(classes, "hover:text-cream")}
    >
      {children}
      {showIcon ? (
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
      ) : null}
    </a>
  );
}
