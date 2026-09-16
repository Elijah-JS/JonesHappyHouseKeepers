import { site } from "@/lib/site";

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
      <ul className="mx-auto grid max-w-[1120px] grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-10 md:gap-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-border px-4 py-3.5 text-center text-[11px] tracking-[0.04em] text-ink min-[375px]:text-[12px] [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b md:border-0 md:px-5 md:py-6"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
