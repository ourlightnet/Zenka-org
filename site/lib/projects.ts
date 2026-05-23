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
      "A 501(c)(3) consciousness research platform. Researchers worldwide log experiments and contribute to the first open consciousness research database.",
    longDescription:
      "LightNet is a 501(c)(3) consciousness research platform where researchers worldwide log experiments, visualize their data, and contribute to the first open crowdsourced consciousness research database. Six specialized labs run small-group experiments across spoon bending, purpose, contact, healing, and more, building scientific rigor around what consciousness actually does. Built with consciousness, for consciousness, with 482 active participants and counting.",
    externalUrl: "https://lightnet.org",
    heroImage: "/images/projects/lightnet/hero.jpg",
    cta: "Visit lightnet.org",
  },
  {
    slug: "spoon-bending",
    title: "Spoon Bending",
    type: "program-active",
    meta: "Consciousness Research",
    shortDescription:
      "Mind over matter, in community, repeatedly, with witnesses. Originally launched as the PK Party at the IONS Conference in 2019.",
    longDescription:
      "The first Sunday of every month we get together in Sedona at Dream Magic and online to bend spoons with our minds. Originally launched as the PK Party at the 18th Annual IONS Conference (Institute of Noetic Sciences) in Santa Clara, July 2019. The premise is simple, the practice is rigorous: gather, intend, witness, repeat. Track what happens. Share the data.",
    heroImage: "/images/projects/spoon-bending/hero.png",
    cta: "Join the next session",
  },
  {
    slug: "purpose-lab",
    title: "Purpose Lab",
    type: "program-active",
    meta: "360 - Lab, Film, Course",
    shortDescription:
      "Small-group labs helping people discover and live their purpose in alignment with the whole. A feature documentary captures the three-year arc of the work.",
    longDescription:
      "The Purpose Lab is a small-group program helping people and communities remember who they are, why they are here, and what becomes possible when purpose is lived in alignment with the whole. Where inner development meets social innovation. (Run in partnership with the Holomovement.)",
    heroImage: "/images/projects/purpose-lab/hero.png",
    cta: "Learn more",
  },
  {
    slug: "the-love-army-won",
    title: "The Love Army",
    type: "program-active",
    meta: "Live",
    shortDescription:
      "Love, treated like infrastructure. 100 hand-picked humans, $500K each, one mission: prove that love spreads faster than fear.",
    longDescription:
      "The Love Army funds love the way the world funds war. 100 hand-picked humans from every continent each receive $500,000 to lead with love, find their purpose, and listen like their life depends on it. Their work happens in refugee camps, boardrooms, street corners, and comedy clubs. Documentary teams follow each soldier; high-vibe comedians ride along; researchers measure what coherence actually does. Year 1 of the Love Army costs about 1/10,000th of what the U.S. spends on war in a single year.",
    externalUrl: "https://thelovearmywon.com",
    heroImage: "/images/projects/love-army/hero.png",
    cta: "Visit thelovearmywon.com",
  },
  {
    slug: "dream-machine",
    title: "The Dream Machine",
    type: "program-active",
    meta: "Abundance engine",
    shortDescription:
      "A living experiment in new economies, contributionism, and conscious capital. Over $1.5M granted to community-led prototypes.",
    longDescription:
      "The Dream Machine and the emerging City of Light, a living experiment in new economies, contributionism, and conscious capital. Through this platform, Zenka is prototyping new models for resourcing community-led innovation and joy-filled civilization design. To date, the Dream Machine has raised and granted out over $1.5 million dollars toward visionary prototypes spanning sustainable fashion labs, collaborative media studios, water research, and Indigenous-led initiatives around the world. Her larger mission is to help build replicable models of culture, community, and shared flourishing that future generations can inherit, adapt, and expand.",
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
    cta: "Book a session",
  },
  {
    slug: "fashion-lab-sedona",
    title: "Fashion Lab Sedona",
    type: "program-active",
    meta: "Sedona",
    shortDescription:
      "Designers get 48 hours to create a runway collection from reclaimed materials. Now in its third year, with thousands in scholarships awarded.",
    longDescription:
      "Fashion Lab uses the Dream Machine template to turn pressure into possibility, giving designers just 48 hours to create a runway collection from reclaimed materials and bold imagination. Now in its third year, with thousands awarded in scholarships, the program blends sustainability, creativity, and real opportunity into a fashion experience built on reinvention.",
    heroImage: "/images/projects/fashion-lab-sedona/hero.png",
    cta: "Get involved",
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

// Homepage shows the first 7 programs + 2 art = 9 cards in a single Work grid.
export const homepageProjects = [
  ...projects.slice(0, 7),
  ...projects.filter((p) => p.type === "art"),
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((p) => p.type === type);
}

export const allSlugs = projects.map((p) => p.slug);
