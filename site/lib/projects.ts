// Source-of-truth data for every project on zenka.org.
// Edit here to update Work index + per-project pages.
// Order matters: the first six entries are the homepage cards.

// Helper: generates ["/dir/prefix-01.jpg", ..., "/dir/prefix-NN.jpg"]
function series(dir: string, prefix: string, count: number): string[] {
  const out: string[] = [];
  for (let i = 1; i <= count; i++) {
    out.push(`${dir}/${prefix}-${String(i).padStart(2, "0")}.jpg`);
  }
  return out;
}

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
  hoverImage?: string;     // optional override for the homepage hover swap
                           // (4:3, 1200×900, JPG, under 250 KB). If absent,
                           // the homepage card falls back to heroImage.
  cta?: string;            // call-to-action phrase
  links?: { label: string; url: string }[]; // optional resource links shown
                                            // at the bottom of the interior
                                            // page body, before the CTAs
  gallery?: string[];      // optional image gallery rendered below the body
                           // on /work/[slug]
  // Structured "snapshot" — renders as People · Places · Tools blocks
  // plus an optional budget block. All fields optional; omit to hide.
  snapshot?: {
    people?: string[];
    places?: string[];
    tools?: string[];          // distribution channels, formats, platforms
    budget?: {
      total: string;           // e.g. "$9,400" — string so we can format freely
      label?: string;          // e.g. "Total event budget"
      income?: { label: string; amount: string }[];
      expenses?: { label: string; amount: string }[];
      note?: string;           // small footnote under the budget
    };
  };
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
      "LightNet is building a new kind of research ecosystem for the age of consciousness, one that does not dismiss extraordinary human experience, but studies it, documents it, and asks what it might reveal about reality itself. Instead of keeping curiosity trapped in private conversations or fringe corners, LightNet brings it into shared experiments, media, data, storytelling, and community.\n\nAcross its labs, LightNet explores the places where human potential gets weird, measurable, emotional, and alive: purpose discovery, addiction recovery, spoon bending, levitation, contact, and other frontier experiences that challenge the old map of what a human being can do. The goal is not to prove a belief system. The goal is to create better questions, better evidence, better stories, and a living archive of the impossible becoming visible.",
    externalUrl: "https://lightnet.org",
    heroImage: "/images/projects/lightnet/hero.jpg",
    hoverImage: "/images/projects/lightnet/hover.jpg",
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
      "The Spoon Bending Lab began with a simple invitation: what happens when ordinary people are given permission to test reality directly? No dogma, no guru fog, no distant theory, just a spoon in your hand and a question pulsing through the room: is matter as fixed as we were taught?\n\nOver the past eight years, more than 1,100 people have participated in this experiment with Zenka Caro, often discovering that the most powerful bend is not in the metal, but in the mind that thought it already knew what was possible. Spoon bending becomes a doorway into lucid living, where limitation starts to look less like truth and more like old software begging for an update.",
    externalUrl: "https://www.lightnet.org/labs/spoon-bending",
    heroImage: "/images/projects/spoon-bending/hero.png",
    hoverImage: "/images/projects/spoon-bending/hover.jpg",
    gallery: series("/images/projects/spoon-bending/gallery", "spoon-bending", 34),
    cta: "Learn more",
    snapshot: {
      people: [
        "Lab Director (1)",
        "Editor — part-time (1)",
        "Social Media Manager (1)",
        "Virtual Assistants (2)",
        "Software Developer — part-time (1)",
        "Press & Outreach (1)",
        "Designer — quarter time (1)",
        "Data Analyst — part-time (1)",
        "Lead Coach (1)",
        "Website Developer & Designer — quarter time (1)",
      ],
      places: [
        "Sedona, Arizona (lab base)",
        "Online community + monthly Mind Over Matter parties",
        "Workshops worldwide (touring program)",
      ],
      tools: [
        "Monthly Mind Over Matter spoon-bending parties",
        "Research data platform (LightNet Leap Maps)",
        "Coaching program (private 1:1 + cohort)",
        "Press, outreach, and short-form media",
        "1,100+ participants across 8 years of teaching",
      ],
      budget: {
        total: "$786,900",
        label: "Year-1 fully-staffed program budget",
        income: [
          {
            label: "Research division — 9 roles",
            amount: "$632,400",
          },
          {
            label: "Coaching program — 2 roles",
            amount: "$154,500",
          },
        ],
        expenses: [
          { label: "Lab Director", amount: "$142,500" },
          { label: "Social Media Manager", amount: "$110,500" },
          { label: "Lead Coach", amount: "$112,500" },
          { label: "Editor (part-time)", amount: "$85,000" },
          { label: "Software Developer (part-time)", amount: "$85,000" },
          { label: "Data Analyst (part-time)", amount: "$75,000" },
          { label: "Virtual Assistants (2)", amount: "$54,400" },
          { label: "Press & Outreach", amount: "$42,500" },
          { label: "Website Developer & Designer (¼ time)", amount: "$42,000" },
          { label: "Designer (¼ time)", amount: "$37,500" },
        ],
        note:
          "Salaries shown include 40% benefits on full-time roles, 10% performance bonus, and recruiting expenses where applicable. Currently fundraising — the Spoon Bending Lab is not yet fully staffed.",
      },
    },
  },
  {
    slug: "purpose-lab",
    title: "Holomovement Purpose Lab",
    type: "program-active",
    meta: "360 - Lab, Film, Course",
    shortDescription:
      "The Purpose Lab turns 100+ Awaken Your Purpose podcast interviews into a 7-stage map for discovering what you are here to do. Through a resource search engine, a feature film, and Teams of 8-12, it helps people move from “What am I here to do?” into the courage, clarity, and community to actually do it.",
    longDescription:
      "The Holomovement Purpose Lab is built to answer one of the deepest questions of a human life: Why am I here? Not as a vague idea, but as something people can begin to live. Built from 100+ interviews through the Awaken Your Purpose Podcast, with more than 145K downloads and counting, the Lab maps the patterns, stages, obstacles, and turning points that show up again and again when people move from confusion into clarity.\n\nThrough interviews, tools, Teams of 8 to 12, research data, a feature film, and a growing archive of resources, the Purpose Lab helps people locate exactly where they are in the journey and what step comes next. It gives people a structure for the question they have been carrying quietly for years, and a community brave enough to help them act on the answer.\n\nThe results have been astounding: participants have reported an 88% increase in wealth, a 62% increase in love and relationships, and a 42% increase in health after moving through the Purpose Lab process.",
    externalUrl: "https://lightnet.org/purpose",
    heroImage: "/images/projects/purpose-lab/hero.png",
    hoverImage: "/images/projects/purpose-lab/hover.jpg",
    cta: "Learn more",
    links: [
      {
        label: "Apple Podcasts: Awaken Your Purpose",
        url: "https://podcasts.apple.com/us/podcast/awaken-your-purpose/id1746656881",
      },
      {
        label: "Watch the videos on YouTube",
        url: "https://www.youtube.com/playlist?list=PLFSTP-F7XYZOQfQ8z9NxRYbRfOCbtlkIu",
      },
      {
        label: "7 Stage Purpose Research",
        url: "https://www.lightnet.org/labs/purpose",
      },
      {
        label: "Discover your stage (quiz)",
        url: "https://www.lightnet.org/purpose/quiz",
      },
      {
        label: "Living Library of Resources",
        url: "https://www.lightnet.org/labs/purpose",
      },
      {
        label: "Add your story to the research",
        url: "https://www.lightnet.org/labs/purpose/log",
      },
    ],
  },
  {
    slug: "the-love-army-won",
    title: "The Love Army",
    type: "program-active",
    meta: "Live",
    shortDescription:
      "The Love Army funds 100 hand-picked humans with $500,000 each to lead missions of love across every continent. With cameras rolling, comedians commentating, and scientists tracking the ripple, it treats love like infrastructure: funded, filmed, measured, and impossible to stop.",
    longDescription:
      "The Love Army begins with a dangerous question: What if we treated love the way the world treats war? It is a fully funded, unapologetically strategic campaign to make love visible, operational, and impossible to ignore. The project hand-picks 100 humans from every continent, gives each of them $500,000, and sends them into the world with one mission: lead with love, live their purpose, and listen like their life depends on it.\n\nTheir work unfolds in refugee camps, boardrooms, street corners, comedy clubs, and communities around the world, with cameras rolling as the world watches. Documentary teams follow the soldiers, comedians help translate the message through humor, and scientists track the ripple in communities, nervous systems, and the field. This is not peace-wishing. It is love treated like infrastructure: small acts, global field, real people, real missions, and measurable change.\n\nThe audacity is the point: year one of The Love Army costs about 1/10,000th of what the U.S. spends on war in a single year, and asks what would happen if even 5% of military spending were redirected toward love? This is not wishing the world would change. It is paying love to show up, giving it a camera crew, and asking the whole planet to watch what happens.",
    externalUrl: "https://thelovearmywon.com",
    heroImage: "/images/projects/love-army/hero.png",
    hoverImage: "/images/projects/love-army/hover.jpg",
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
      "The Dream Machine is a prototype engine for people and projects carrying visions too alive to stay trapped in notebooks, pitch decks, and late-night conversations. It exists to test what happens when consciousness leads, and capital, community, intention, and best-case-scenario planning are braided together into a practical system for funding the future.\n\nWith over $1.5 million already distributed, the Dream Machine has moved beyond inspiration into proof. It is an experiment in new economies, backing the people, projects, and ideas that are ready to leave the imagination and enter the world: films, labs, healing work, community experiments, cultural events, and cross-generational prototypes that bring people together through purpose, creativity, and joy. It is not just asking what the future could look like. It is putting money, attention, and trust behind the people brave enough to build it in Sedona and beyond.",
    externalUrl: "https://www.thedreammachine.org",
    heroImage: "/images/projects/dream-machine/hero.png",
    hoverImage: "/images/projects/dream-machine/hover.jpg",
    gallery: series("/images/projects/dream-machine/gallery", "dream-machine", 21),
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
      "A 90-minute leap session with Zenka is for the moment when your project has outgrown ordinary advice. Maybe the next move has too many moving parts. Maybe you can feel the future knocking, but the door feels like it has seventeen locks.\n\nThese sessions combine strategic thinking, pattern recognition, channeled guidance, media insight, and practical next steps. They are designed for founders, artists, leaders, nonprofits, creators, and people holding important projects for the future.\n\nZenka's work helps people and projects move from intuition into architecture: clarifying the idea, naming the deeper purpose, and building the structure needed to bring it into the world.\n\n$399 for a 90-minute session.",
    heroImage: "/images/projects/business-consulting/hero.jpg",
    hoverImage: "/images/projects/business-consulting/hover.jpg",
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
      "The Sustainable Fashion Lab is a 48-hour create-a-thon where designers, artists, stylists, makers, and curious locals come together to turn discarded garments into runway-ready pieces. It is part design sprint, part community ritual, part joyful rebellion against waste. Over one electric weekend, participants collaborate, experiment, and reimagine what fashion can be when creativity leads and sustainability becomes something you can actually see, wear, and celebrate.\n\nThe Lab culminates in a public Fashion Show, where the finished looks move from the workroom to the runway and the whole community gets to witness what was created. It is also a platform for emerging designers, cross-generational connection, local talent, and bold new ideas, including the $5K Sustainable Fashion Lab Prize. More than a fashion event, the Lab is a living experiment in beauty, reuse, courage, and creative possibility.",
    externalUrl: "https://www.fashionlabsedona.com",
    heroImage: "/images/projects/fashion-lab-sedona/hero.jpg",
    hoverImage: "/images/projects/fashion-lab-sedona/hover.jpg",
    cta: "Learn more",
  },
  {
    slug: "48-hour-comedy-lab",
    title: "48 Hour Comedy Lab",
    type: "program-active",
    meta: "Sedona",
    shortDescription:
      "A 48-hour immersive lab that brings together Sedona comedians, editors, chefs, and production artists to create clean, uplifting short-form comedy inspired by Sedona's imagination and innovation.",
    longDescription:
      "The 48 Hour Comedy Lab is built around the cosmic awkwardness of being human at a time when everything, from ancestors to aliens to higher selves, may be trying to get our attention. The joke is not that these beings exist. The joke is that they might be sending us wisdom while we are busy checking our phones, arguing with the toaster, or missing the obvious signal completely.\n\nOver one weekend, comedians, editors, writers, performers, chefs, and production artists gather in Sedona to create clean, uplifting short-form comedy for YouTube, Instagram, and TikTok. The lab becomes a fast-moving creative studio where weird ideas get filmed before they lose their sparkle. It is comedy as cultural acupuncture: light, sharp, surprising, and aimed at waking something up.",
    heroImage: "/images/projects/48-hour-comedy-lab/hero.jpg",
    hoverImage: "/images/projects/48-hour-comedy-lab/hover.jpg",
    cta: "Get in Touch",
    snapshot: {
      people: [
        "Zenka Caro — creative direction",
        "LightNet team — event production",
        "Daniel Flynn — comedian (Mary D. Fisher Theater, Super Improv)",
        "Jesselynn Desmond — Sedona improv group",
        "Local comedians, editors, chefs, and production artists",
      ],
      places: [
        "Sedona, Arizona",
        "Humankind Center (public release party)",
        "Mary D. Fisher Theater (performer base)",
      ],
      tools: [
        "48-hour creative event",
        "Public release party",
        "Short-form video clips",
        "YouTube · Instagram · TikTok distribution",
      ],
      budget: {
        total: "$9,400",
        label: "Total event budget · FY26-27 City of Sedona Small Grant",
        income: [
          { label: "City of Sedona grant", amount: "$6,000" },
          { label: "Corporate / sponsor support", amount: "$1,000" },
          { label: "Individual contributions", amount: "$1,800" },
          { label: "Earned income", amount: "$600" },
        ],
        expenses: [
          { label: "Location rental", amount: "$3,000" },
          { label: "Food", amount: "$2,200" },
          { label: "Chef (professional fee)", amount: "$450" },
          { label: "Editor 1 (professional fee)", amount: "$450" },
          { label: "Editor 2 (professional fee)", amount: "$450" },
          { label: "Hair & makeup (professional fee)", amount: "$450" },
          { label: "Website", amount: "$1,000" },
          { label: "Marketing, promotion, and advertising", amount: "$600" },
          { label: "Supplies", amount: "$500" },
          { label: "Insurance", amount: "$300" },
        ],
        note: "City funding covers ~64% of the budget. Without the grant, the project does not run.",
      },
    },
  },

  // ===== Other work (shown on /work, not on homepage) =====
  {
    slug: "dream-machine-film",
    title: "The Dream Machine Film",
    type: "program-dev",
    meta: "In development · Documentary",
    shortDescription:
      "[Placeholder — needs Zenka's words.] A feature documentary about The Dream Machine, the people it funds, and what happens when consciousness, capital, and best-case-scenario planning braid into a real engine for the future.",
    longDescription:
      "[Placeholder — needs Zenka's words.] The Dream Machine film follows the projects, people, and prototypes funded through The Dream Machine, capturing what a new economy looks like in motion. Filmed across Sedona and beyond, the documentary turns the question of \"what would you build if you weren't afraid?\" into a body of evidence.",
    cta: "Get notified",
  },
  {
    slug: "the-castle",
    title: "The Castle",
    type: "program-dev",
    meta: "In development · Property · UK",
    shortDescription:
      "[Placeholder — needs Zenka's words.] A historic castle property in the UK being acquired, restored, and reactivated as a residency, retreat, and consciousness lab. Funded through The Dream Machine.",
    longDescription:
      "[Placeholder — needs Zenka's words.] The Castle is a $12.7 million acquisition-and-restoration project under The Dream Machine umbrella: a historic British property being purchased, structurally restored, and reactivated as a residency, retreat space, and consciousness research lab. The vision: a permanent home for the cross-generational, cross-disciplinary work that LightNet keeps prototyping in pop-ups around the world.",
    cta: "Get notified",
    snapshot: {
      places: ["United Kingdom"],
      tools: [
        "Residency",
        "Retreat venue",
        "Consciousness research lab",
        "Funded through The Dream Machine",
      ],
      budget: {
        total: "$12.7M USD",
        label: "Total project budget · £10M converted at ~1.27 USD/GBP",
        income: [
          { label: "Property acquisition", amount: "$7.0M" },
          { label: "Restoration and repairs", amount: "$4.7M" },
          { label: "Programs (residency, retreats, labs)", amount: "$1.0M" },
        ],
        note:
          "Currently in fundraising and acquisition phase. All figures shown in USD; underlying property cost is £5.5M GBP, programs and repairs estimated.",
      },
    },
  },
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
      "Award-winning augmented reality prints, raku-fired heads, and public street art. Exhibited at ICA LA, Sotheby's New York, FIG Bilbao, The Tech Interactive, and TEDxJacksonHole.",
    longDescription:
      "Zenka Caro's artwork explores control, consciousness, technology, embodiment, and the strange theater of being human in a world layered with invisible forces. Her augmented reality work brings sculpture and digital media into collision, creating pieces that exist both physically and virtually, part artifact, part apparition, part signal from a slightly more honest dimension.\n\nHer street art extends that inquiry into public space, outside the guarded rituals of galleries and institutions. Whether through raku-fired heads, gold-leaf remote controls, AR activations, or city walls, the work asks who is holding the remote, what realities are being broadcast through us, and what happens when art refuses to stay politely in one dimension.\n\nHer augmented-reality linoprints received Honorable Mention awards in two consecutive editions of the juried Ink & Clay competition at California State Polytechnic University, Pomona: Coco and the River Dragon (Curator's Choice, 2016) and EEG Takes Flight (Ink Juror's Choice, 2017). Both works were later included in the 2022 FIG Bilbao international print and paper-art fair in Spain.\n\nSelected exhibitions include Presence, her 2015 solo show at the District Gallery in the Arts District of Los Angeles, featuring more than twenty life-sized raku sculptures depicting the history of virtual reality headsets; the 2018 to 2019 Agency of Assets: Reality Augmented at the Institute of Contemporary Art, Los Angeles (ICA LA); the 2017 Art of VR panel at Sotheby's auction house in New York; TEDxJacksonHole in 2016; and Nuestro estilo cordobés, a 2022 collective exhibition in the hall of the Legislatura de la Provincia de Córdoba.\n\nCaro's work in Córdoba, Argentina spans more than a decade, including a 2012 Before I Die public-art wall featured in Candy Chang's 2013 book of the same name (St. Martin's Press), a 2012 collective intervention with JR's Inside Out Project at the Mercado del Abasto, and the 2021 Feria de Arte Córdoba.\n\nHer work is held in the permanent collections of the Delta terminal at John F. Kennedy International Airport in New York, The Tech Interactive in San Jose, Accenture Interactive in New York, and several technology companies in the United States and abroad.",
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
