import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jones Happy Housekeepers | House Cleaning in Fontana, CA",
    template: "%s | Jones Happy Housekeepers",
  },
  description:
    "Jones Happy Housekeepers provides professional home and office cleaning in Fontana, California. Request a free quote or call (323) 333-4054.",
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
    title: "Jones Happy Housekeepers | House Cleaning in Fontana, CA",
    description:
      "Professional home and office cleaning in Fontana, CA. 4.8-star customer rating based on 49 public reviews. Request a free quote.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jones Happy Housekeepers | House Cleaning in Fontana, CA",
    description:
      "Professional home and office cleaning in Fontana, California. Request a free quote.",
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
