import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HouseCleaning",
    name: site.name,
    description: site.description,
    telephone: "+13233334054",
    url: getSiteUrl(),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: {
      "@type": "City",
      name: site.address.city,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reputation.rating,
      reviewCount: site.reputation.reviewCount,
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
