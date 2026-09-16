import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/site";

export function ValueSection() {
  return (
    <section className="bg-bg-warm py-16 md:py-20 lg:py-28">
      <Container className="grid items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="text-[10px] uppercase tracking-[0.14em] text-sage md:text-[11px] md:tracking-[0.22em]">
            The feeling after
          </p>
          <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(1.5rem,6.5vw,1.85rem)] font-semibold leading-[1.22] tracking-tight text-ink md:mt-4 md:max-w-[16ch] md:text-[2.65rem] md:leading-[1.15]">
            Cleaning that lets your home feel like home again.
          </h2>
          <div className="mt-5 max-w-md space-y-4 text-[15px] leading-[1.7] text-ink-soft md:mt-8 md:space-y-5 md:leading-relaxed">
            <p>
              A well-kept home is not about spectacle. It is about walking in,
              setting your things down, and feeling the room settle around you.
            </p>
            <p>
              Jones Happy Housekeepers approaches the work with care: attention
              to detail, reliable communication, and professional service that
              leaves a space comfortable, ordered, and ready to live in.
            </p>
          </div>
        </div>
        <Photo
          src={images.value.src}
          alt={images.value.alt}
          className="aspect-[16/10] w-full lg:col-span-6 lg:aspect-[4/5]"
          imageClassName="object-[center_28%] lg:object-center"
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
      </Container>
    </section>
  );
}
