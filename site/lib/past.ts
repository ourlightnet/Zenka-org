// Past Experiences — content migrated from the legacy zenka.org site.
// Used by /past/[slug] dynamic route and by the Past Experiences strip
// inside /press.

export type PastExperience = {
  slug: string;
  title: string;
  meta: string;             // small label (year · location)
  tagline: string;          // 1-line hook
  hero: string;             // /images/past/[slug]/...
  heroIsVideo?: boolean;
  body: string[];           // body paragraphs
  gallery: string[];        // /images/past/[slug]/... (skip hero)
  pullQuotes?: string[];
};

export const pastExperiences: PastExperience[] = [
  {
    slug: "yofu",
    title: "Ye Olde Futurist Union",
    meta: "2018 · Los Angeles",
    tagline:
      "A debate club for the galactic age. Oxford-style debates on the biggest questions of our time.",
    hero: "/images/past/ye-old-futurist-union-la/hero.jpg",
    body: [
      "Ye Olde Futurist Union (YOFU) was a winter and spring 2018 lab project in Los Angeles. A lively, outlandish, Oxford-style debate filled with experts, novices, and at least a few people who dressed like they were already from the future.",
      "We gathered both in AltSpaceVR and at Angel City Brewery to take on the biggest ideas of our time in a balanced way. Each debate began with a resolution, paired two teams against it, and put the audience in charge of voting it up or down at the end.",
      "Resolutions debated included: CRISPR designer babies live. Mind control is good for you. Universal basic income is the solution to automation (failed). We need virtual reality to recreate reality (failed). A one-world cryptocurrency is the way forward. We welcome our new robot overlords.",
      "The point was never to land a verdict for the ages. The point was to give people in 2018 a structured, sociable way to stretch their imagination toward the future being built around them, while still buying each other a beer afterward.",
    ],
    gallery: [
      "/images/past/ye-old-futurist-union-la/image-asset.png",
    ],
    pullQuotes: [
      "A debate club for the galactic age.",
    ],
  },
  {
    slug: "white-mirror",
    title: "White Mirror",
    meta: "2016 · Upload VR, Los Angeles",
    tagline:
      "A create-a-thon for everything that could go right in the future.",
    hero: "/images/past/white-mirror/youtube.jpg",
    body: [
      "White Mirror was a create-a-thon experiment held at Upload VR in 2016. One hundred and fifty people gathered for a weekend to write, build, and prototype stories about everything that could go right in the future.",
      "It was an experiment in envisioning Plan A, the future we actually want, and a love letter to Charlie Brooker's Netflix show Black Mirror. Where Black Mirror catalogues the ways technology might break us, White Mirror asked the inverse question: what does it look like when the next century goes well?",
      "Teams wrote short-form fiction, sketched product concepts, designed rituals, and built rough VR scenes. The output was less a finished anthology than a permission slip. Permission to imagine a future that is not dystopian by default, and to do it in public.",
    ],
    gallery: [],
    pullQuotes: [
      "What if the future isn't so bad after all?",
    ],
  },
  {
    slug: "triple-smart-labs",
    title: "Triple Smart Labs",
    meta: "2018 · Córdoba, Argentina + Venice, CA",
    tagline:
      "An innovation hub for citizen-driven science, shared hardware, and shared results.",
    hero: "/images/past/triple-smart-labs/Triple_Smart_Labs_-_8.jpg",
    body: [
      "Triple Smart Labs was an innovation hub built around a new vision for citizen-driven science (or, in academic speak, human-centered design). The thesis was simple: put the end user where they belong, in the driver's seat.",
      "The labs assembled, sorted, and analyzed humanity's Plan A, then empowered individual contributors to design and test-drive the future they wanted to live in. Everything was built around efficiency and transparency, which is why every node ran on shared hardware and shared results.",
      "We were moving squarely away from a one-size-fits-all world and into a world of self-actualization, hyper-personalization, and renaissance thinking, where the same person could comfortably hold a soldering iron, a research methodology, and a paintbrush in the same week.",
      "We launched Node #1 in Córdoba, Argentina in November 2018, then opened Node #2 in Venice, California at the Feminine Intelligence HQ. The labs hosted workshops, salons, Oculus Go test-drives, prototyping sessions, and summit-style conversations between researchers and the public.",
    ],
    gallery: [
      "/images/past/triple-smart-labs/Triple_Smart_Labs_-_5.jpg",
      "/images/past/triple-smart-labs/47293011_10156272220899121_3300580726574940160_o.jpg",
      "/images/past/triple-smart-labs/Triple_Smart_Labs_-_6.jpg",
      "/images/past/triple-smart-labs/Triple_Smart_Labs_-_7.jpg",
      "/images/past/triple-smart-labs/Triple_Smart_Labs_-_15.jpg",
      "/images/past/triple-smart-labs/TSL-COR-OculusGo_-_12.jpg",
      "/images/past/triple-smart-labs/TSLCOR-SUMMIT_-_4.jpg",
      "/images/past/triple-smart-labs/TSL-COR-StackCast_-_2.jpg",
    ],
    pullQuotes: [
      "Embedded innovation. Citizen-driven research. Shared hardware. Shared results.",
    ],
  },
  {
    slug: "harmonic-convergence",
    title: "The Harmonic Convergence 2020",
    meta: "2020 · Global · Citizen science",
    tagline:
      "72,000 people from 152 countries meditated for peace and contact. 1,700 of them reported they made contact.",
    hero: "/images/past/thc2020/2_-_THC_square_1.jpg",
    body: [
      "1.4 billion adults (47% of the global adult population) believe there is intelligent life beyond Earth, and that we should attempt to contact it. The Harmonic Convergence 2020 was an experiment in actually doing it.",
      "From July 5 to July 14, 2020, Mark Sims gathered 72,000 people from 152 countries to meditate for peace and to ask for contact. 1,700 people from 38 countries reported that they did make contact, sending in hundreds of photos, videos, and testimonials about their experience.",
      "It was an extraordinary citizen science experiment, and it was thrilling to capture the data. We ran 39 questions through the participating population and turned the results into the largest open dataset of its kind, exploring not only the question of contact but the question of what a coherent human field looks like.",
      "We learned that people want to connect with their higher self. We learned that they dream and worry more about the future than the past. We learned that more than any other person in their life, they want to forgive themselves. We learned that news and toxic relationships drain our life force, and that music and nature replenish it.",
      "Most of all, we learned that collective intelligence is possible, and that it is measurable when you bother to measure it.",
    ],
    gallery: [
      "/images/past/thc2020/Screen_Shot_2020-07-20_at_8.06.21_PM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-19_at_12.18.22_AM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-18_at_7.50.11_PM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-18_at_7.56.42_PM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-18_at_11.49.15_PM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-18_at_11.41.36_PM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-18_at_10.58.46_PM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-18_at_11.25.42_PM.png",
      "/images/past/thc2020/Screen_Shot_2020-07-20_at_8.18.47_PM.png",
    ],
    pullQuotes: [
      "1.4 billion adults believe in intelligent life beyond Earth. 72,000 of them showed up.",
      "Collective intelligence is possible, and it is measurable when you bother to measure it.",
    ],
  },
  {
    slug: "words-of-the-future",
    title: "Words of the Future",
    meta: "2018-2021 · Public street art",
    tagline:
      "With exponential change upon us, we will have to learn a new language. This series cements those new words into the streets.",
    hero: "/images/past/wotf/Screen_Shot_2021-12-30_at_8.02.49_AM.png",
    body: [
      "With exponential change upon us, it seems we will have to learn a new language. We are adding new words and new concepts to our world faster than the language can keep up with them.",
      "Words of the Future is a public street-art project that aims to reduce fear and increase knowledge about the concepts shaping the next era by cementing those words directly into the streets of the cities we are already walking through.",
      "Each piece names a concept (often technical, often unfamiliar, sometimes invented) and pairs it with a plain-language definition stenciled in a place where you would otherwise be scrolling past it on your phone. The bet is that a word you encounter in physical space sticks differently than a word you skim on a screen.",
      "Words have been planted in Sedona, Córdoba, Buenos Aires, Los Angeles, and Jackson Hole. The series is ongoing, and new words keep arriving because the future keeps arriving.",
    ],
    gallery: [
      "/images/past/wotf/Screen_Shot_2018-09-13_at_11.19.36_AM.png",
      "/images/past/wotf/Screen_Shot_2018-09-13_at_11.19.56_AM.png",
      "/images/past/wotf/IMG_5260.JPG",
      "/images/past/wotf/IMG_4369.JPG",
      "/images/past/wotf/IMG_4386.JPG",
      "/images/past/wotf/IMG_4427.JPG",
      "/images/past/wotf/20481983_115296672456767_6712892888461606912_n.jpg",
    ],
    pullQuotes: [
      "A vocabulary for what does not yet have a name.",
    ],
  },
  {
    slug: "interdimensional",
    title: "Interdimensional Travel Agency",
    meta: "2022 · NFT collection",
    tagline:
      "An NFT collection that reframes travel as movement between states of consciousness, not places.",
    hero: "/images/past/inter-dimensional-travel-agency/Zenka-Caro-NFT-Interdimensional-Travel-Agency.mp4",
    heroIsVideo: true,
    body: [
      "The Interdimensional Travel Agency was an NFT collection released in 2022. Each NFTicket served as an exclusive boarding pass to an art experience and a real, in-person interdimensional travel experience, depending on the tier.",
      "Included with the boarding pass: a VR float-tank experience, a Lucia N°03 light virtual DMT session, a guided past-life regression, and a structured channel to the future. The whole stack treated consciousness itself as a destination.",
      "The animated NFT plays with the iconography of midcentury travel posters, but instead of selling Paris or Tokyo, it sells the doorways between waking and dreaming, body and field, present and possible.",
      "It was the second NFT release in this lineage, following the MAPA Buenos Aires drop earlier that year, and it cemented the working idea that augmented reality and on-chain art could be paired with real-world ritual to produce something that neither one could do alone.",
    ],
    gallery: [],
    pullQuotes: [
      "Travel as a state, not a place.",
    ],
  },
];

export function getPastExperienceBySlug(slug: string) {
  return pastExperiences.find((p) => p.slug === slug);
}

export const pastSlugs = pastExperiences.map((p) => p.slug);
