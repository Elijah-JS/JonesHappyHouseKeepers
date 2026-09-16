import Image from "next/image";
import { cn } from "@/lib/cn";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function Photo({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes = "100vw",
}: PhotoProps) {
  return (
    <div className={cn("relative min-w-0 h-full w-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-700 ease-out",
          imageClassName,
        )}
      />
    </div>
  );
}
