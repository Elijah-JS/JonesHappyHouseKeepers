import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { navigation, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-5">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-[1.7] text-cream/65 md:mt-6 md:leading-relaxed">
            Professional home and office cleaning in Fontana, California.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-7">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-cream/45 md:text-[11px] md:tracking-[0.2em]">
              Visit
            </p>
            <nav className="mt-3 flex flex-col md:mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center text-sm text-cream/80 transition-colors hover:text-cream md:min-h-0 md:py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.16em] text-cream/45 md:text-[11px] md:tracking-[0.2em]">
              Contact
            </p>
            <address className="mt-3 not-italic text-sm leading-[1.7] text-cream/80 md:mt-4 md:leading-relaxed">
              <a
                href={site.address.mapsUrl}
                className="transition-colors hover:text-cream"
              >
                {site.address.line1}
                <br />
                {site.address.line2}
              </a>
              <p className="mt-3">
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-cream md:min-h-0"
                >
                  {site.phone.display}
                </a>
              </p>
            </address>
            <ul className="mt-4 space-y-0 md:mt-6">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="flex min-h-10 items-center text-sm text-cream/55 transition-colors hover:text-cream md:min-h-0 md:py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1.5 py-4 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Fontana, California</p>
        </Container>
      </div>
    </footer>
  );
}
