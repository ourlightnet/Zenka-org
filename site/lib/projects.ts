// Source-of-truth data for every project on zenka.org.
// Edit here to update Work index + per-project pages.

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
  {
    slug: "lightnet",
    title: "LightNet",
    type: "program-active",
    meta: "Active · Nonprofit",
    shortDescription:
      "Experiential platform and knowledge bank for miracles, consciousness, and unconventional ways of doing things.",
    longDescription:
      "LightNet is the first of its kind experiential platform and knowledge bank focused on miracles, consciousness, and unconventional ways of doing things. Like Gaia TV, but instead of watching, you try it out in real life. Quantum physicists are saying that consciousness is fundamental, more fundamental than matter. Want to see a UFO, bend a spoon with your mind, find your purpose, talk to a relative who has passed, or heal a health concern? Join a small group of eight with a guide, experiment, share your wisdom and wins, and help build a database of ranked methods, videos, music, articles, and more.",
    externalUrl: "https://lightnet.org",
    cta: "Visit lightnet.org",
  },
  {
    slug: "spoon-bending-lab",
    title: "Spoon Bending Lab",
    type: "program-active",
    meta: "Active · First Sundays",
    shortDescription:
      "Mind over matter, in community, repeatedly, with witnesses. First Sundays in Sedona at Dream Magic and online.",
    longDescription:
      "The first Sunday of every month we get together in Sedona at Dream Magic and online to bend spoons with our minds. Originally launched as the PK Party at the 18th Annual IONS Conference (Institute of Noetic Sciences) in Santa Clara, July 2019. The premise is simple, the practice is rigorous: gather, intend, witness, repeat. Track what happens. Share the data.",
    cta: "Join the next session",
  },
  {
    slug: "holomovement-purpose-lab",
    title: "Holomovement Purpose Lab",
    type: "program-active",
    meta: "Active",
    shortDescription:
      "Small-group labs helping people discover and live their purpose in alignment with the whole.",
    longDescription:
      "The Holomovement Purpose Lab is a small-group program helping people and communities remember who they are, why they are here, and what becomes possible when purpose is lived in alignment with the whole. Where inner development meets social innovation. (Holomovement is its own brand and ecosystem, not part of zenka.org. This page links out.)",
    cta: "Learn more",
  },
  {
    slug: "starseed-academy",
    title: "Starseed Academy",
    type: "program-active",
    meta: "Active",
    shortDescription:
      "For those who came here on assignment. A program for remembering who you are and what you're here to build.",
    longDescription:
      "[Placeholder description, needs Zenka's words.] The Starseed Academy is for those who came here on assignment. A small-group container for remembering who you are, what you carry, and what you're here to build.",
    cta: "Apply",
  },
  {
    slug: "love-army",
    title: "The Love Army",
    type: "program-active",
    meta: "Active · Live",
    shortDescription:
      "Love, treated like infrastructure. 100 hand-picked humans, $500K each, one mission: prove that love spreads faster than fear.",
    longDescription:
      "The Love Army funds love the way the world funds war. 100 hand-picked humans from every continent each receive $500,000 to lead with love, find their purpose, and listen like their life depends on it. Their work happens in refugee camps, boardrooms, street corners, and comedy clubs. Documentary teams follow each soldier; high-vibe comedians ride along; researchers measure what coherence actually does. Year 1 of the Love Army costs about 1/10,000th of what the U.S. spends on war in a single year.",
    externalUrl: "https://thelovearmywon.com",
    cta: "Visit thelovearmywon.com",
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
    slug: "dream-machine",
    title: "The Dream Machine",
    type: "program-dev",
    meta: "In development",
    shortDescription:
      "A device for collective dreaming, lucid practice, and shared subconscious exploration.",
    longDescription:
      "[Placeholder, needs full description.] The Dream Machine is a new device for collective dreaming, lucid practice, and shared subconscious exploration. Currently in development.",
    cta: "Get notified",
  },
  {
    slug: "augmented-reality-art",
    title: "Augmented Reality Art",
    type: "art",
    meta: "Body of work",
    shortDescription:
      "Raku-fired heads and surfaces brought alive by augmented reality overlay. Twenty years of physical objects that respond to the camera.",
    longDescription:
      "Augmented Reality Art is twenty-plus years of physical sculpture that responds to the camera. Raku-fired heads, gold-leaf clay remote controls, public installations, and AR-print drops (including the MAPA Buenos Aires NFT release in March 2022). The sculptures live in the world. The augmented reality lives over them.",
    heroImage: "/images/ar-art-hero.jpg",
    cta: "View the work",
  },
  {
    slug: "street-art",
    title: "Street Art",
    type: "art",
    meta: "Body of work",
    shortDescription:
      "Public installations in cities and unexpected places. Out where the public lives.",
    longDescription:
      "Street Art is the body of public-facing work. Installations in cities and unexpected places. Out where the public lives, where people who don't go to galleries can encounter the work.",
    heroImage: "/images/street-art-hero.jpg",
    cta: "View the work",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((p) => p.type === type);
}

export const allSlugs = projects.map((p) => p.slug);
