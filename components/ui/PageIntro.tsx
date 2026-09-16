import { Container } from "@/components/ui/Container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-border bg-bg pt-[6.75rem] pb-10 md:pt-36 md:pb-16">
      <Container className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.14em] text-sage md:text-[11px] md:tracking-[0.22em]">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.18] tracking-tight text-ink min-[390px]:text-[2.05rem] md:mt-4 md:text-[2.75rem] md:leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-[15px] leading-[1.7] text-ink-soft md:mt-5 md:leading-relaxed">
          {description}
        </p>
      </Container>
    </section>
  );
}
