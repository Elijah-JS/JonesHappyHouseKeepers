import { Container } from "@/components/ui/Container";
import { whyItems } from "@/lib/site";

export function WhySection() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-28">
      <Container>
        <div className="max-w-xl">
          <p className="max-w-[22ch] text-[10px] uppercase leading-relaxed tracking-[0.14em] text-sage md:max-w-none md:text-[11px] md:tracking-[0.22em]">
            Why Jones Happy Housekeepers
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,6.5vw,1.85rem)] font-semibold leading-[1.22] tracking-tight text-ink md:mt-3 md:text-4xl md:leading-[1.2]">
            Established local service, presented clearly.
          </h2>
        </div>
        <ol className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
          {whyItems.map((item, index) => (
            <li key={item.title} className="border-t border-border pt-5 md:pt-6">
              <p className="text-[12px] tracking-[0.16em] text-sage">
                0{index + 1}
              </p>
              <h3 className="mt-2.5 font-display text-[1.2rem] font-semibold tracking-tight text-ink md:mt-3 md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2.5 max-w-sm text-sm leading-[1.7] text-ink-soft md:mt-3 md:leading-relaxed">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
