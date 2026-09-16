import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = getSiteUrl();
const pageTitle = "Jones Happy Housekeepers | Cleaning Services in Fontana, CA";
const pageDescription =
  "Professional home and office cleaning services in Fontana, California. Explore services and request a free quote from Jones Happy Housekeepers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s | Jones Happy Housekeepers",
  },
  description: pageDescription,
  applicationName: site.name,
  keywords: [
    "house cleaning Fontana CA",
    "cleaning services Fontana",
    "home cleaning Fontana",
    "office cleaning Fontana",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: pageTitle,
    description: pageDescription,
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} - Home & Office Cleaning in Fontana, CA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        alt: `${site.name} - Home & Office Cleaning in Fontana, CA`,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg pb-[calc(5.75rem+env(safe-area-inset-bottom))] font-sans text-ink lg:pb-0">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
