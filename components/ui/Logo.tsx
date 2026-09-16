import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center gap-2.5 sm:gap-3", className)}
      aria-label="Jones Happy Housekeepers home"
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center border text-[14px] font-medium tracking-tight transition-colors sm:h-10 sm:w-10 sm:text-[15px]",
          inverted
            ? "border-cream/25 text-cream group-hover:border-cream/50"
            : "border-ink/15 text-ink group-hover:border-ink/35",
        )}
      >
        J
      </span>
      <span className="leading-[1.15]">
        <span
          className={cn(
            "block font-display text-[15px] font-semibold tracking-tight",
            inverted ? "text-cream" : "text-ink",
          )}
        >
          Jones
        </span>
        <span
          className={cn(
            "hidden text-[10px] uppercase tracking-[0.16em] min-[375px]:block",
            inverted ? "text-cream/65" : "text-ink-soft",
          )}
        >
          Happy Housekeepers
        </span>
      </span>
    </Link>
  );
}
