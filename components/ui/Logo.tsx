import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  onNavigate?: () => void;
};

export function Logo({ className, inverted = false, onNavigate }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn("group flex min-w-0 items-center gap-2.5 sm:gap-3", className)}
      aria-label="Jones Happy Housekeepers home"
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center border text-[15px] font-medium tracking-tight transition-colors",
          inverted
            ? "border-cream/25 text-cream group-hover:border-cream/50"
            : "border-ink/15 text-ink group-hover:border-ink/35",
        )}
      >
        J
      </span>
      <span className="min-w-0 leading-[1.15]">
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
            "hidden text-[10px] uppercase tracking-[0.14em] min-[390px]:block",
            inverted ? "text-cream/65" : "text-ink-soft",
          )}
        >
          Happy Housekeepers
        </span>
      </span>
    </Link>
  );
}
