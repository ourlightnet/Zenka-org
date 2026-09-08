// Art pages — the six bodies of work that make up Zenka's twenty-year
// art practice. Used by /art/[slug] dynamic route.

// Helper: generates ["/dir/prefix-01.jpg", ..., "/dir/prefix-NN.jpg"]
// for image series with sequential numbering. Skip specific numbers via
// the optional skip array.
function series(dir: string, prefix: string, count: number, skip: number[] = []): string[] {
  const out: string[] = [];
  for (let i = 1; i <= count; i++) {
    if (skip.includes(i)) continue;
    out.push(`${dir}/${prefix}-${String(i).padStart(2, "0")}.jpg`);
  }
  return out;
}

export type ArtBody = {
  slug: string;
  title: string;
  tagline: string;
  meta: string;            // year range · medium
  hero: string;
  heroIsVideo?: boolean;
  body: string[];
  gallery: string[];
  pullQuotes?: string[];
  // Optional cross-link to a /past/[slug] page when the art series has its
  // own experience writeup
  relatedPastSlug?: string;
  relatedPastLabel?: string;
};

export const artBodies: ArtBody[] = [
  {
    slug: "ar-linocuts",
    title: "AR Linocuts",
    tagline:
      "Hand-pulled linocut prints, brought alive by augmented reality.",
    meta: "2016-present · Print + AR",
    hero: "/images/art/ar-linocuts/hero.jpg",
    body: [
      "Zenka has been using augmented reality overlays in her prints, installations, sculptures, and street art since 2012. The AR Linocut series is the central thread.",
      "Each piece begins as a hand-carved linoleum block and a hand-pulled print on paper. The image stands on its own as a piece of figurative work, often depicting figures in motion, leaping, flying, breaking free of frames. Then the augmented reality layer activates: point a phone or tablet at the print, and the figure begins to move, the line work animates, the still becomes alive.",
      "The series was first shown publicly at the Ink & Clay 42 exhibition at Cal Poly Pomona in 2016-17, and again in Ink & Clay 43. From there it traveled to TEDx Jackson Hole as a stage installation, the Hololens Hackathon in Los Angeles, the Rothenberg Building installation, and the Jackson Hole Center for the Arts, before becoming the foundation of an NFT release in 2022.",
      "The technical premise is straightforward: pair a permanent physical art object with a digital animation triggered by computer vision. The deeper premise is what Zenka calls aliveness: the idea that the line between a still image and a moving image, or between an object and a being, is thinner than we have been trained to believe.",
    ],
    gallery: [
      "/images/art/ar-linocuts/ar-print-01.jpg",
      "/images/art/ar-linocuts/ar-print-02.jpg",
      "/images/art/ar-linocuts/ar-print-03.jpg",
      "/images/art/ar-linocuts/ar-print-04.jpg",
      "/images/art/ar-linocuts/ar-print-05.jpg",
      "/images/art/ar-linocuts/ar-print-08.jpg",
      "/images/art/ar-linocuts/ar-print-09.jpg",
      "/images/art/ar-linocuts/ar-print-10.jpg",
      "/images/art/ar-linocuts/ar-print-11.jpg",
      "/images/art/ar-linocuts/ar-print-12.jpg",
      "/images/art/ar-linocuts/ar-print-13.jpg",
    ],
    pullQuotes: [
      "Permanent on paper. Alive through a phone.",
    ],
  },
  {
    slug: "ar-raku-headsets",
    title: "AR Raku Headsets",
    tagline:
      "A seventy-piece timeline of head-mounted hardware, hand-built and raku-fired in clay.",
    meta: "2015-present · Raku ceramic + AR",
    hero: "/images/art/ar-raku-headsets/hero.jpg",
    body: [
      "Augmented and virtual reality will impact every aspect of our lives the way the internet and the cellphone already have. The AR Raku Headsets are part of a massive timeline of more than seventy sculptures that trace the development of this technology over the last fifty years.",
      "The history of the technology is hidden in plain sight. Most people who use a VR headset today have no idea that the lineage stretches back to Ivan Sutherland's Sword of Damocles in 1968, through the SEGA VR, the Virtual Boy, the View-Master, Google Cardboard, the Oculus DK1 and DK2, the HTC Vive, the Magic Leap One, Microsoft Hololens, the StarVR, and on. Each is its own moment in the conversation between the human face and the digital image.",
      "Each sculpture in the timeline is a portrait of a human head wearing a specific headset, hand-built in clay and raku-fired. Raku is a Japanese low-fire process that produces metallic, unpredictable, slightly otherworldly finishes. The pieces look ancient and futuristic at the same time, which is the point.",
      "Selected sculptures from the timeline have been shown at The Tech Interactive (formerly The Tech Museum of Innovation) in San Jose, at TEDx Jackson Hole, and at Presence at the District Gallery in Los Angeles in 2015. The full timeline is intended to live in a public collection eventually.",
    ],
    // 78 sculptures from the timeline series — VR/AR headsets in raku
    gallery: series("/images/art/ar-raku-headsets", "raku-headset", 78),
    pullQuotes: [
      "A fifty-year timeline of the human face meeting the digital image.",
    ],
  },
  {
    slug: "words-of-the-future",
    title: "Words of the Future",
    tagline:
      "Coining a vocabulary for what does not yet have a name, and cementing those words into the streets.",
    meta: "2018-present · Street art + language",
    hero: "/images/art/words-of-the-future/hero.jpg",
    body: [
      "With exponential change upon us, it seems we will have to learn a new language. We are adding new words and new concepts to our world faster than the language can keep up with them.",
      "Words of the Future is a public street-art project that aims to reduce fear and increase knowledge about the concepts shaping the next era by cementing those words directly into the streets of the cities we are walking through anyway.",
      "Each piece names a concept (often technical, often unfamiliar, sometimes invented) and pairs it with a plain-language definition stenciled in a place where you would otherwise be scrolling past it on your phone. The bet is that a word you encounter in physical space sticks differently than a word you skim on a screen.",
      "Words have been planted in Sedona, Córdoba, Buenos Aires, Los Angeles, and Jackson Hole. The series is ongoing, and new words keep arriving because the future keeps arriving.",
    ],
    gallery: [
      "/images/art/words-of-the-future/wotf-01.jpg",
      "/images/art/words-of-the-future/wotf-02.jpg",
      "/images/past/wotf/Screen_Shot_2018-09-13_at_11.19.36_AM.png",
      "/images/past/wotf/Screen_Shot_2018-09-13_at_11.19.56_AM.png",
      "/images/past/wotf/IMG_5260.JPG",
      "/images/past/wotf/IMG_4369.JPG",
      "/images/past/wotf/IMG_4386.JPG",
      "/images/past/wotf/IMG_4427.JPG",
      "/images/past/wotf/20481983_115296672456767_6712892888461606912_n.jpg",
    ],
    relatedPastSlug: "words-of-the-future",
    relatedPastLabel: "Read the Past Experience writeup",
    pullQuotes: [
      "A vocabulary for what does not yet have a name.",
    ],
  },
  {
    slug: "remote-controls",
    title: "Remote Controls",
    tagline:
      "Raku-fired ceramic remote controls with 24-karat gold-leaf buttons, brought alive by AR.",
    meta: "2018-present · Raku ceramic + AR",
    hero: "/images/art/remote-controls/hero.jpg",
    body: [
      "Remote Controls began with a simple question: if you had a futuristic remote control that could do anything at all, what buttons would you want?",
      "That question became a social experiment with over 100 participants, each describing the buttons they wished existed in their lives, from the small (mute traffic) to the existential (rewind a decision, fast-forward through grief, pause to think). Their answers were translated into ceramic remote control sculptures.",
      "Each sculpture is hand-built and raku-fired in clay, with the buttons rendered in real 24-karat gold leaf. Each one looks at first like a beautiful, slightly off-kilter object on a shelf. Then you open the augmented reality app and point your phone at the buttons, and the wishes themselves come alive in your hand.",
      "The series is part artwork, part future-of-interface speculation, part group portrait of a moment in time. It is one of the touchstone bodies of work that pulled Zenka's AR practice together with her ceramics and her social research instincts.",
    ],
    gallery: series("/images/art/remote-controls", "remote-control", 12),
    pullQuotes: [
      "Ceramic in your hand. Wishes in the air.",
    ],
  },
  {
    slug: "street-art",
    title: "Street Art",
    tagline:
      "Public installations in cities and unexpected places. Out where the people who do not go to galleries live.",
    meta: "2012-present · Public works",
    hero: "/images/past/wotf/IMG_4369.JPG",
    body: [
      "Twenty years ago Zenka made a decision that has shaped everything since: the work belongs outside the gallery first.",
      "The street art lineage began in 2012 in Córdoba, Argentina, when she co-organized one of the first Before I Die walls outside the United States, a participatory public chalkboard wall inspired by Candy Chang's original. Within days, the wall held hundreds of handwritten answers from passersby: things they wanted to do, see, become, and forgive before they died.",
      "Later in 2012 she co-produced an Inside Out installation at the Mercado del Abasto in Buenos Aires, the JR project that wheatpastes large-format portraits of ordinary people onto the buildings of their own cities. The portraits stayed up until the weather took them down, which is how it should be.",
      "The Words of the Future stencil series, which began in 2018, lives on the same shelf: language and concept work that bypasses the gallery and meets the city where it already is. So does the AR Mural work that grew out of it, where physical paint on a wall triggers a digital animation when you point your phone at it.",
      "The thread through all of it is access. The point of putting an artwork in the street is to let it meet the person who would never otherwise meet it.",
    ],
    gallery: [
      ...series("/images/art/street-art", "ceramic-street-art", 9),
      ...series("/images/art/street-art", "street-art", 6),
    ],
    pullQuotes: [
      "Out where the people who do not go to galleries live.",
    ],
  },
  {
    slug: "ar-murals",
    title: "AR Murals",
    tagline:
      "Large-scale public paintings that come alive through a phone.",
    meta: "2017-present · Mural + AR",
    hero: "/images/art/ar-murals/hero.jpg",
    body: [
      "The AR Mural work is the public-scale version of the AR Linocut and AR Raku Headset series. The mural is a permanent, hand-painted image on a wall. The augmented reality layer is the secret second life that activates when someone passes by with their phone open.",
      "The premise: a mural already does a particular kind of public work. It declares that a piece of a city belongs to its people, that art is a civic asset, that the wall facing the sidewalk is not just a wall. Adding an AR layer turns that declaration into a conversation: the wall sees you back, and shows you something only your generation of devices can show you.",
      "Selected works in this lineage include installations at the Rothenberg Building, the Jackson Hole Center for the Arts, and stage installations for TEDx Jackson Hole. Future planned work includes a mural cycle in Sedona that ties into the broader LightNet program.",
      "The series sits inside a longer conversation about what cities will look like once AR glasses are as common as eyeglasses. The bet is that the most important art of the next twenty years will be the art that knows a phone is watching, and chooses to use that fact.",
    ],
    gallery: series("/images/art/ar-murals", "ar-mural", 32),
    pullQuotes: [
      "The wall sees you back.",
    ],
  },
];

export function getArtBodyBySlug(slug: string) {
  return artBodies.find((a) => a.slug === slug);
}

export const artSlugs = artBodies.map((a) => a.slug);
