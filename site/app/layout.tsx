import type { Metadata } from "next";
import { Inter_Tight, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AnimatedFavicon from "@/components/AnimatedFavicon";
import { Analytics } from "@vercel/analytics/react";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://zenka.org";
const OG_IMAGE = `${SITE_URL}/images/Zenka-Caro-Portrait.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Zenka Caro — Consciousness Researcher, Futurist & Founder of LightNet",
    template: "%s — Zenka Caro",
  },
  description:
    "Zenka 2038 Caro is a social architect, filmmaker, and founder of LightNet, the world's first consciousness research data platform. Spoon bending, purpose discovery, AR art, and the Dream Machine. Sedona, AZ.",
  keywords: [
    "Zenka Caro",
    "Zenka 2038 Caro",
    "LightNet",
    "consciousness research",
    "spoon bending",
    "Holomovement",
    "Holomovement Purpose Lab",
    "Awaken Your Purpose",
    "Dream Machine",
    "Sedona consciousness",
    "consciousness think tank",
    "augmented reality art",
    "AR linocuts",
    "raku VR headsets",
    "metaverse architect",
    "Evolutionary Leaders",
    "Source of Synergy",
    "Starseed Academy",
    "Contact Lab",
    "citizen science",
    "futurist",
    "mind over matter",
    "ET contact",
    "VR history sculpture",
    "Fashion Lab Sedona",
    "48 Hour Comedy Lab",
    "Love Army",
    "Words of the Future",
    "Remote Controls art",
    "AR Murals",
    "Interdimensional Travel Agency",
    "Mind Over Matter",
  ],
  authors: [{ name: "Zenka Caro", url: SITE_URL }],
  creator: "Zenka Caro",
  publisher: "Wisdom Age Metaverse (LightNet)",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Zenka Caro",
    title:
      "Zenka Caro — Consciousness Researcher, Futurist & Founder of LightNet",
    description:
      "Zenka 2038 Caro is a social architect, filmmaker, and founder of LightNet. Spoon bending, purpose discovery, AR art, and the Dream Machine.",
    images: [
      {
        url: OG_IMAGE,
        width: 1543,
        height: 1543,
        alt: "Zenka Caro, founder of LightNet, holding a bent spoon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Zenka Caro — Consciousness Researcher, Futurist & Founder of LightNet",
    description:
      "Social architect, filmmaker, and founder of LightNet. Spoon bending, purpose discovery, AR art, and the Dream Machine.",
    images: [OG_IMAGE],
    creator: "@zenkacaro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "Wb9aaDWlAI-7ys8fA3_5SdeyGY3m3YK0bQqW0Vjxp1c",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

// JSON-LD structured data: Person + Organization
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zenka Caro",
  alternateName: ["Zenka 2038 Caro", "Jenny Lynn Carden", "Zenka"],
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: [
    "Social Architect",
    "Filmmaker",
    "Founder of LightNet",
    "Augmented Reality Artist",
    "Consciousness Researcher",
  ],
  worksFor: {
    "@type": "Organization",
    name: "LightNet (Wisdom Age Metaverse)",
    url: "https://lightnet.org",
  },
  affiliation: [
    {
      "@type": "Organization",
      name: "Evolutionary Leaders",
      url: "https://www.evolutionaryleaders.net/leaders/zenka-caro/",
    },
    {
      "@type": "Organization",
      name: "Source of Synergy Foundation",
    },
  ],
  birthPlace: {
    "@type": "Place",
    name: "Fort Sam Houston, San Antonio, Texas, USA",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Northwestern University",
    sameAs: "https://www.northwestern.edu/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sedona",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  sameAs: [
    "https://lightnet.org",
    "https://thedreammachine.org",
    "https://fashionlabsedona.com",
    "https://instagram.com/zenkacaro",
    "https://www.evolutionaryleaders.net/leaders/zenka-caro/",
  ],
  knowsAbout: [
    "consciousness research",
    "spoon bending (psychokinesis)",
    "augmented reality",
    "virtual reality",
    "raku ceramic sculpture",
    "purpose discovery",
    "Holomovement",
    "Dream Machine",
    "citizen science",
    "metaverse",
    "ET contact",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "LightNet",
  legalName: "Wisdom Age Metaverse",
  alternateName: "LightNet — Consciousness Research Platform",
  url: "https://lightnet.org",
  logo: `${SITE_URL}/icon-512.png`,
  founder: { "@type": "Person", name: "Zenka Caro" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sedona",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  email: "team@lightnet.org",
  description:
    "LightNet is the world's first consciousness research data platform: a 501(c)(3) think tank, research platform, and media lab exploring the frontier edges of human potential, including the Spoon Bending Lab, Starseed Academy Levitation Lab, Contact Lab, and the Holomovement Purpose Lab.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Structured data — Person + Organization (LightNet) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <AnimatedFavicon />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
