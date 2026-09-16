export const site = {
  name: "Jones Happy Housekeepers",
  shortName: "Jones",
  tagline: "A Cleaner Home Starts Here.",
  description:
    "Professional home and office cleaning in Fontana, California. Request a free quote from Jones Happy Housekeepers.",
  about:
    "Jones Happy Housekeepers provides professional home, office, and general cleaning services in Fontana, California, with a strong local reputation built through quality service and attention to detail.",
  phone: {
    display: "(323) 333-4054",
    href: "tel:+13233334054",
  },
  address: {
    line1: "16854 Ivy Ave, Suite 7",
    line2: "Fontana, CA 92335",
    city: "Fontana",
    region: "CA",
    postalCode: "92335",
    country: "US",
    mapsUrl:
      "https://maps.google.com/?q=16854+Ivy+Ave+Suite+7+Fontana+CA+92335",
  },
  reputation: {
    rating: "4.8",
    reviewCount: 49,
    eyebrow: "Loved by local customers",
    summary:
      "A strong local reputation built through professional home and office cleaning in Fontana.",
    reviewsProfileUrl: "",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "home-cleaning",
    name: "Home Cleaning",
    summary: "Careful cleaning for kitchens, living spaces, bedrooms, and bathrooms.",
    description:
      "A detail-focused clean for the rooms you live in every day — from counters and floors to the quieter corners that make a house feel settled again.",
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
      alt: "Stock photo of a bright modern kitchen with clean stone counters",
    },
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    summary: "Professional cleaning for offices and shared workspaces.",
    description:
      "A tidy, presentable workplace — desks, common areas, and the everyday surfaces that keep an office feeling considered.",
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      alt: "Stock photo of a calm, organized office interior",
    },
  },
  {
    id: "general-cleaning",
    name: "General & Property Cleaning",
    summary: "Broader cleaning support for homes and commercial properties.",
    description:
      "A practical option when the work goes beyond a single room — general cleaning for properties that need a thorough, professional reset.",
    image: {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
      alt: "Stock photo of a clean, light-filled bathroom",
    },
  },
  {
    id: "real-estate-cleaning",
    name: "Real Estate Related Cleaning",
    summary: "Cleaning support connected to real-estate needs.",
    description:
      "Property-ready cleaning when a home or workspace needs to present well. Tell us about the space and timing when you request a quote.",
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      alt: "Stock photo of a sunlit modern living room",
    },
  },
] as const;

export const cleaningTypes = services.map((service) => service.name);

export const propertyTypes = [
  "House",
  "Apartment / Condo",
  "Office",
  "Other",
] as const;

export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
    alt: "Stock photo of a peaceful living room with linen seating and natural light",
  },
  value: {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    alt: "Stock photo of a quiet residential bedroom with soft daylight",
  },
  visualBreak: {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=2200&q=80",
    alt: "Stock photo of a bright, clean modern living room",
  },
  about: {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    alt: "Stock photo of a bright, clean modern kitchen",
  },
  quote: {
    src: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80",
    alt: "Stock photo of a clean kitchen island and counters",
  },
} as const;

export const whyItems = [
  {
    title: "Local to Fontana",
    body: "A Fontana cleaning company — easy to reach, easy to work with, and rooted in the community we serve.",
  },
  {
    title: "Home & office cleaning",
    body: "One professional team for the spaces you live in and the spaces you work in.",
  },
  {
    title: "Attention to detail",
    body: "The work is in the finish: surfaces, edges, and the quiet order that makes a room feel cared for.",
  },
  {
    title: "A reputation you can check",
    body: `A ${site.reputation.rating}-star customer rating across approximately ${site.reputation.reviewCount} public reviews.`,
  },
] as const;

export type Review = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5 | null;
  text: string;
  source: string;
  url: string;
};

export const reviews: Review[] = [
  {
    name: "",
    rating: null,
    text: "My place looks like I just moved in.",
    source: "Yelp",
    url: "",
  },
  {
    name: "",
    rating: null,
    text: "House smells and looks fresh and clean.",
    source: "Yelp",
    url: "",
  },
  {
    name: "",
    rating: null,
    text: "Great communication… very personable…",
    source: "Yelp",
    url: "",
  },
];

export function publishedReviews(items: Review[] = reviews) {
  return items.filter((review) => review.text.trim().length > 0);
}
