import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const items = [
  `${site.reputation.rating}★ Customer Rating`,
  "Home Cleaning",
  "Office Cleaning",
  "Serving Fontana",
];

export function TrustBar() {
  return (
    <section
      aria-label="Verified highlights"
      className="border-y border-border bg-bg-warm"
    >
      <ul className="mx-auto grid max-w-[1120px] grid-cols-1 min-[360px]:grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-10 md:gap-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "px-5 py-4 text-center text-[13px] leading-relaxed tracking-[0.04em] text-ink md:border-0 md:py-6",
              "border-b border-border last:border-b-0",
              "min-[360px]:[&:nth-child(odd)]:border-r",
              "min-[360px]:[&:nth-child(-n+2)]:border-b",
              "min-[360px]:[&:nth-last-child(-n+2)]:border-b-0",
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
