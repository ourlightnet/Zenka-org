// Individual art projects shown as a grid on /work/zenka-artwork.
// Order shown matches order on page (newest/most-prominent first).

export interface Artwork {
  slug: string;
  title: string;
  category: "AR Prints" | "Raku" | "Street Art" | "NFT" | "Sculpture" | "Mixed";
  year?: string;
  description: string;
  image: string; // path under /public/images/artworks/
  externalUrl?: string;
}

export const artworks: Artwork[] = [
  {
    slug: "ar-remote-controls",
    title: "Futuristic Remote Controls",
    category: "AR Prints",
    description:
      "A series of raku-fired clay remote controls with gold-leaf buttons, brought alive by augmented reality overlays.",
    image: "/images/artworks/remote-controls.jpg",
  },
  {
    slug: "timeline-vr-heads",
    title: "Timeline: VR Heads",
    category: "Raku",
    description:
      "Raku-fired sculptural heads charting the evolution of virtual reality headsets, displayed at The Tech Museum of Innovation.",
    image: "/images/artworks/vr-heads.jpg",
  },
  {
    slug: "ar-nfts",
    title: "Augmented Reality NFTs",
    category: "NFT",
    year: "2022",
    description:
      "AR-enabled NFT collection. Drop at MAPA Buenos Aires, March 2022. View through the Zenka AR Prints app.",
    image: "/images/artworks/ar-nfts.gif",
    externalUrl: "https://apps.apple.com/us/app/zenka-ar-prints/id1145047055",
  },
  {
    slug: "inter-dimensional-travel-agency",
    title: "Inter Dimensional Travel Agency",
    category: "NFT",
    description:
      "Animated NFT exploring travel between dimensions. Part of the AR-enabled NFT series.",
    image: "/images/artworks/inter-dimensional.gif",
  },
  {
    slug: "exo-metaverse",
    title: "Exo Metaverse",
    category: "Mixed",
    description:
      "A UFO-mapped speculative geography of the metaverse beyond Earth.",
    image: "/images/artworks/exo-metaverse.png",
  },
  {
    slug: "raku-process",
    title: "Raku-fired Sculptures",
    category: "Raku",
    description:
      "Hand-built ceramic forms fired in the raku tradition. The medium beneath the AR Prints and VR Heads series.",
    image: "/images/artworks/raku.jpg",
  },
  {
    slug: "ar-prints-series",
    title: "AR Prints",
    category: "AR Prints",
    description:
      "Photographic prints with augmented reality overlays. Stopping Time, Leap into Magic, and the Hololens Hackathon series.",
    image: "/images/artworks/ar-prints.jpg",
  },
  {
    slug: "street-installations",
    title: "Street Installations",
    category: "Street Art",
    description:
      "Public-facing works installed in cities and unexpected places. Out where the public lives.",
    image: "/images/artworks/street-art.jpg",
  },
];
