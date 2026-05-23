// Source-of-truth data for every project on zenka.org.
// Edit here to update Work index + per-project pages.
// Order matters: the first six entries are the homepage cards.

export type ProjectType = "program-active" | "program-dev" | "art";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  meta: string;            // small label shown in cards / header
  shortDescription: string;
  longDescription: string;
  externalUrl?: string;    // set if the project has its own website
  heroImage?: string;      // path under /public/images/
  cta?: string;            // call-to-action phrase
}

export const projects: Project[] = [
  // ===== HOMEPAGE 6 (in order) =====
  {
    slug: "lightnet",
    title: "LightNet",
    type: "program-active",
    meta: "Think Tank",
    shortDescription:
      "The world's first consciousness research data platform. Six curiosity labs where people explore purpose, recovery, levitation, spoon bending, and the frontier edges of human potential.",
    longDescription:
      "LightNet is the world's first consciousness research data platform and media platform built to test the impossible, gathering data from six curiosity labs where people explore purpose, recovery, levitation, spoon bending, and the frontier edges of human potential.",
    externalUrl: "https://lightnet.org",
    heroImage: "/images/projects/lightnet/hero.jpg",
    cta: "Learn more",
  },
  {
    slug: "spoon-bending",
    title: "Spoon Bending",
    type: "program-active",
    meta: "Consciousness Research",
    shortDescription:
      "After teaching over 1,100 people to bend spoons across 8 years and counting, Zenka Caro's Spoon Bending Lab turns the impossible into something you can hold in your hand. Learn to bend reality, break the spell of limitation, and step into lucid living.",
    longDescription:
      "After teaching over 1,100 people to bend spoons across 8 years and counting, Zenka Caro's Spoon Bending Lab turns the impossible into something you can hold in your hand. Learn to bend reality, break the spell of limitation, and step into lucid living.",
    heroImage: "/images/projects/spoon-bending/hero.png",
    cta: "Learn more",
  },
  {
    slug: "purpose-lab",
    title: "Holomovement Purpose Lab",
    type: "program-active",
    meta: "360 - Lab, Film, Course",
    shortDescription:
      "The Purpose Lab turns 100+ Awaken Your Purpose podcast interviews into a 7-stage map for discovering what you are here to do. Through a resource search engine, a feature film, and Teams of 8-12, it helps people move from “What am I here to do?” into the courage, clarity, and community to actually do it.",
    longDescription:
      "The Purpose Lab turns 100+ Awaken Your Purpose podcast interviews into a 7-stage map for discovering what you are here to do. Through a resource search engine, a feature film, and Teams of 8-12, it helps people move from “What am I here to do?” into the courage, clarity, and community to actually do it.",
    heroImage: "/images/projects/purpose-lab/hero.png",
    cta: "Learn more",
  },
  {
    slug: "the-love-army-won",
    title: "The Love Army",
    type: "program-active",
    meta: "Live",
    shortDescription:
      "The Love Army funds 100 hand-picked humans with $500,000 each to lead missions of love across every continent. With cameras rolling, comedians commentating, and scientists tracking the ripple, it treats love like infrastructure: funded, filmed, measured, and impossible to stop.",
    longDescription:
      "The Love Army funds 100 hand-picked humans with $500,000 each to lead missions of love across every continent. With cameras rolling, comedians commentating, and scientists tracking the ripple, it treats love like infrastructure: funded, filmed, measured, and impossible to stop.",
    externalUrl: "https://thelovearmywon.com",
    heroImage: "/images/projects/love-army/hero.png",
    cta: "Learn more",
  },
  {
    slug: "dream-machine",
    title: "The Dream Machine",
    type: "program-active",
    meta: "Abundance engine",
    shortDescription:
      "A living experiment in new economies and best-case-scenario planning. Over $1.5 million distributed and counting, turning future-shaping ideas into funded reality.",
    longDescription:
      "Dream Machine is a living experiment in new economies, best-case-scenario planning, and what happens when intention, community, and capital back the most powerful prototypes on the planet. With over $1.5 million distributed and counting, it is turning future-shaping ideas into funded reality.",
    heroImage: "/images/projects/dream-machine/hero.png",
    cta: "Learn more",
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    type: "program-active",
    meta: "Leap Session",
    shortDescription:
      "90-minute leap sessions to move your business or project forward. Strategic clarity for founders, leaders, and creatives navigating a meaningful next move.",
    longDescription:
      "Book a 90-minute leap session with Zenka to advance your business or project. Channeled from higher consciousness and grounded in the real world. Useful for founders, leaders, artists, and anyone navigating a meaningful next move.",
    heroImage: "/images/zenka-portrait.png",
    cta: "Learn more",
  },
  {
    slug: "fashion-lab-sedona",
    title: "48 Hour Fashion Lab",
    type: "program-active",
    meta: "Sedona",
    shortDescription:
      "Designers get 48 hours to create a runway collection from reclaimed materials. Now in its third year, with thousands in scholarships awarded.",
    longDescription:
      "Fashion Lab uses the Dream Machine template to turn pressure into possibility, giving designers just 48 hours to create a runway collection from reclaimed materials and bold imagination. Now in its third year, with thousands awarded in scholarships, the program blends sustainability, creativity, and real opportunity into a fashion experience built on reinvention.",
    heroImage: "/images/projects/fashion-lab-sedona/hero.png",
    cta: "Learn more",
  },
  {
    slug: "48-hour-comedy-lab",
    title: "48 Hour Comedy Lab",
    type: "program-active",
    meta: "Sedona",
    shortDescription:
      "A 48-hour immersive lab that brings together Sedona comedians, editors, chefs, and production artists to create clean, uplifting short-form comedy inspired by Sedona's imagination and innovation. Culminates in a public release party at the Humankind Center plus a YouTube, Instagram, and TikTok campaign that promotes Sedona as the home of the renaissance.",
    longDescription:
      "Comedy Lab Sedona is a 48-hour immersive lab that brings together Sedona comedians, editors, chefs, and production artists to create clean, uplifting short-form comedy inspired by Sedona's imagination and innovation. It culminates in a public release party at the Humankind Center plus a digital campaign across YouTube, Instagram, and TikTok that promotes Sedona as the home of the renaissance. Led by LightNet with local performers Daniel Flynn (Mary D. Fisher theater, Super Improv) and Jesselynn Desmond (Sedona improv).",
    heroImage: "/images/projects/48-hour-comedy-lab/hero.png",
    cta: "Learn more",
  },

  // ===== Other work (shown on /work, not on homepage) =====
  {
    slug: "starseed-academy",
    title: "Starseed Academy",
    type: "program-active",
    meta: "Academy",
    shortDescription:
      "For those who came here on assignment. A program for remembering who you are and what you're here to build.",
    longDescription:
      "[Placeholder, needs Zenka's words.] The Starseed Academy is for those who came here on assignment. A small-group container for remembering who you are, what you carry, and what you're here to build.",
    cta: "Apply",
  },
  {
    slug: "global-awakening-tracker",
    title: "Global Awakening Tracker",
    type: "program-dev",
    meta: "In development · NOC",
    shortDescription:
      "Charts humanity's journey toward more love, cooperation, and healing. A measurement instrument for the paradigm shift.",
    longDescription:
      "The Global Awakening Tracker (NOC) charts humanity's journey toward more love, cooperation, and healing. A measurement instrument for the paradigm shift currently underway, designed to make the invisible breakthroughs trackable and shareable.",
    cta: "Get notified",
  },
  {
    slug: "zenka-artwork",
    title: "Zenka AR Artwork",
    type: "art",
    meta: "Body of work",
    shortDescription:
      "Augmented reality prints, raku-fired heads, and public street art. Featured at TEDx Jackson Hole, MAPA Buenos Aires, and The Tech Museum of Innovation.",
    longDescription:
      "Twenty years of art across two parallel bodies of work. Augmented Reality Art: raku-fired heads, gold-leaf clay remote controls, and AR-print drops, including the MAPA Buenos Aires NFT release in March 2022. The sculptures live in the world; the augmented reality lives over them. Street Art: public installations in cities and unexpected places, out where the public lives, where people who don't go to galleries can encounter the work.",
    heroImage: "/images/ar-art-hero.jpg",
    cta: "View the work",
  },
];

// Main work grid: explicit display order for the homepage.
export const homepageProjects: Project[] = [
  "lightnet",
  "the-love-army-won",
  "purpose-lab",
  "dream-machine",
  "spoon-bending",
  "business-consulting",
].map((slug) => projects.find((p) => p.slug === slug)!);

// Below the main grid: the 48 Hour Labs (Fashion + Comedy).
export const homepageSecondaryProjects = [
  projects.find((p) => p.slug === "fashion-lab-sedona")!,
  projects.find((p) => p.slug === "48-hour-comedy-lab")!,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((p) => p.type === type);
}

export const allSlugs = projects.map((p) => p.slug);
