import Link from "next/link";

export const metadata = {
  title: "Past Experiences · Zenka Caro",
  description:
    "Twenty years of debate clubs, citizen science, salons, and AR drops.",
};

type Archive = {
  slug: string;
  title: string;
  description: string;
  image: string | null;
  externalUrl: string;
};

const ARCHIVES: Archive[] = [
  {
    slug: "yofu",
    title: "Ye Old Futurist Union",
    description:
      "A debate club for the galactic age. Oxford-style discussions on AI, cryptocurrency, genetic engineering, and what comes next.",
    image: "/images/archive/header-ye-olde-futurist-union.jpg",
    externalUrl: "https://www.zenka.org/ye-old-futurist-union-la",
  },
  {
    slug: "white-mirror",
    title: "White Mirror",
    description:
      "A create-a-thon where 150 people envisioned positive futures through storytelling, as a Black Mirror counterpoint.",
    image: "/images/archive/youtube.jpg",
    externalUrl: "https://www.zenka.org/white-mirror/",
  },
  {
    slug: "triple-smart-labs",
    title: "Triple Smart Labs",
    description:
      "An innovation lab network empowering citizen-driven science through shared hardware and collaborative research across distributed nodes.",
    image: "/images/archive/TripleSmart-Animated-Logo.mp4",
    externalUrl: "https://www.zenka.org/triple-smart-labs/",
  },
  {
    slug: "harmonic-convergence",
    title: "Harmonic Convergence 2020",
    description:
      "A citizen science experiment where 72,000 people from 152 countries meditated together for contact and peace.",
    image: "/images/archive/thc-2020-hero.jpg",
    externalUrl: "https://www.zenka.org/thc2020/",
  },
  {
    slug: "remote-controls",
    title: "Remote Controls",
    description:
      "Raku-fired clay remote controls with gold-leaf buttons, brought alive by augmented reality overlays.",
    image: "/images/archive/001b-Zenka-AR-Remote-28-Composite.jpg",
    externalUrl: "https://www.zenka.org/remote-controls/",
  },
  {
    slug: "words-of-the-future",
    title: "Words of the Future",
    description:
      "A vocabulary project naming what does not yet have a name. Coining words for emerging realities.",
    image: "/images/archive/20481983_115296672456767_6712892888461606912_n.jpg",
    externalUrl: "https://www.zenka.org/wotf/",
  },
  {
    slug: "interdimensional",
    title: "Interdimensional Travel Agency",
    description:
      "An NFT collection reframing travel as movement between states of consciousness, not places.",
    image: "/images/artwork/Zenka-Caro-NFT-Interdimensional-Travel-Agency.mp4",
    externalUrl: "https://www.zenka.org/inter-dimensional-travel-agency/",
  },
];

function ArchiveCard({ archive }: { archive: Archive }) {
  const isVideo = archive.image
    ? /\.(mp4|webm)$/i.test(archive.image)
    : false;
  return (
    <a
      href={archive.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="archive-card"
      style={{
        border: "3px solid var(--color-ink)",
        background: "var(--color-white)",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s",
      }}
    >
      <div
        style={{
          aspectRatio: "4 / 3",
          background: "var(--color-ink)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {archive.image ? (
          isVideo ? (
            <video
              src={archive.image}
              muted
              loop
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={archive.image}
              alt={archive.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, var(--color-red), var(--color-ink))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-white)",
              fontFamily: "var(--font-inter-tight), sans-serif",
              fontSize: "72px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              opacity: 0.9,
            }}
          >
            {archive.title.charAt(0)}
          </div>
        )}
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: "10px",
          }}
        >
          Archive ↗
        </div>
        <h3
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "10px",
          }}
        >
          {archive.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.5,
            color: "var(--color-muted)",
          }}
        >
          {archive.description}
        </p>
      </div>
    </a>
  );
}

export default function PastExperiencesPage() {
  return (
    <>
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 32px 56px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-red)",
            marginBottom: "16px",
          }}
        >
          § Past Experiences
        </div>
        <h1
          className="headline-display"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            marginBottom: "24px",
          }}
        >
          Twenty years of <em>experiments</em>.
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.55,
            color: "var(--color-muted)",
            maxWidth: "720px",
          }}
        >
          Debate clubs, citizen science, salons, NFT drops, and a few things
          that defy category. Each card opens its full page on the legacy
          zenka.org site.
        </p>
        <p style={{ marginTop: "24px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-red)",
            }}
          >
            ← Back to home
          </Link>
        </p>
      </section>

      <section
        style={{
          padding: "0 32px 96px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="archive-grid"
        >
          {ARCHIVES.map((a) => (
            <ArchiveCard key={a.slug} archive={a} />
          ))}
        </div>
      </section>

      <style>{`
        .archive-card:hover { transform: translateY(-4px); }
        @media (max-width: 900px) {
          .archive-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .archive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
