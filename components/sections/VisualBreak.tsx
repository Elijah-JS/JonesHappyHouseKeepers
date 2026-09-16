import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/site";

export function VisualBreak() {
  return (
    <section aria-label="Residential interior photography" className="bg-bg">
      <Photo
        src={images.visualBreak.src}
        alt={images.visualBreak.alt}
        className="h-[48vw] max-h-[720px] min-h-[200px] w-full sm:h-[52vw] sm:min-h-[240px] md:h-[58vw] md:min-h-[280px]"
        imageClassName="object-[center_40%]"
        sizes="100vw"
      />
    </section>
  );
}
