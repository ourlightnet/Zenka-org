import Image from "next/image";
import Link from "next/link";
import {
  homepageProjects,
  homepageSecondaryProjects,
  type Project,
} from "@/lib/projects";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          padding: "80px 32px 64px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div className="kicker" style={{ marginBottom: "36px" }}>
          Reality hacker · Future architect
        </div>
        <h1
          className="headline-display"
          style={{ maxWidth: "1200px", marginBottom: "56px" }}
        >
          She makes the impossible <em>possible</em>.
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            color: "var(--color-ink)",
            maxWidth: "720px",
            fontWeight: 400,
          }}
        >
          Systems-builder, filmmaker, founder of{" "}
          <strong style={{ color: "var(--color-red)", fontWeight: 600 }}>
            LightNet
          </strong>
          . Designing citizen-science experiments and small-group labs that turn
          consciousness into something measurable, shareable, and scalable.
        </p>
      </section>

      {/* TICKER BAND */}
      <div
        style={{
          background: "var(--color-red)",
          color: "var(--color-white)",
          padding: "24px 32px",
          overflow: "hidden",
          borderTop: "3px solid var(--color-ink)",
          borderBottom: "3px solid var(--color-ink)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
          className="ticker-text"
        >
          Spoon Bending <Sep /> Evidence Based Wonder <Sep /> Group Coherence{" "}
          <Sep /> Purpose Activation <Sep /> Contact Across The Veil <Sep />{" "}
          Levitation
        </div>
      </div>

      {/* ABOUT BAND */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="about-band-grid"
      >
        <div
          style={{
            background: "var(--color-red)",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/images/zenka-portrait.png"
            alt="Zenka Caro"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
        <div
          style={{
            padding: "64px 56px",
            background: "var(--color-white)",
            borderLeft: "3px solid var(--color-ink)",
          }}
          className="about-cell"
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--color-red)",
              marginBottom: "24px",
              fontWeight: 500,
            }}
          >
            § 01 About
          </div>
          <h2 className="about-h2" style={{ marginBottom: "32px" }}>
            I&apos;m here to <em>upgrade</em> human consciousness.
          </h2>
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.55,
              color: "var(--color-ink)",
              marginBottom: "18px",
            }}
          >
            Twenty years at the edge of what&apos;s possible. First as a systems
            architect and XR/AR pioneer, now as the founder of LightNet, a
            movement of evidence-based wonder.
          </p>
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.55,
              color: "var(--color-ink)",
              marginBottom: "18px",
            }}
          >
            I design playful, rigorous environments where curiosity leads, data
            matters, and wonder is welcome. The next frontier isn&apos;t out
            there. It&apos;s in us.
          </p>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              marginTop: "24px",
              padding: "14px 24px",
              background: "var(--color-ink)",
              color: "var(--color-white)",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "background 0.15s",
            }}
            className="about-cta"
          >
            Read full bio →
          </Link>
        </div>
      </section>

      {/* WORK HEAD */}
      <SectionHead num="§ 02 Work">
        Where the work <em>lives</em>.
      </SectionHead>

      {/* WORK GRID — main 6 programs */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="work-grid"
      >
        {homepageProjects.map((p, idx) => (
          <ProjectCard
            key={p.slug}
            project={p}
            isLastRow={idx >= homepageProjects.length - 2}
            isRightColumn={idx % 2 === 1}
          />
        ))}
      </div>

      {/* SECONDARY WORK GRID, 48 Hour Labs */}
      <SectionHead num="§ 02b Also">
        Also <em>in motion</em>.
      </SectionHead>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="work-grid"
      >
        {homepageSecondaryProjects.map((p, idx) => (
          <ProjectCard
            key={p.slug}
            project={p}
            isLastRow={idx >= homepageSecondaryProjects.length - 2}
            isRightColumn={idx % 2 === 1}
          />
        ))}
      </div>

      {/* PRESS BAND */}
      <section
        style={{
          background: "var(--color-ink)",
          color: "var(--color-white)",
          padding: "64px 32px",
          borderBottom: "3px solid var(--color-ink)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-red)",
              marginBottom: "32px",
            }}
          >
            As featured at
          </div>
          <div
            style={{
              fontFamily: "var(--font-inter-tight), sans-serif",
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.4,
            }}
            className="press-list"
          >
            TEDx Jackson Hole <span style={{ color: "var(--color-red)" }}>/</span>{" "}
            Sotheby&apos;s <span style={{ color: "var(--color-red)" }}>/</span>{" "}
            IONS <span style={{ color: "var(--color-red)" }}>/</span>{" "}
            The Tech Museum <span style={{ color: "var(--color-red)" }}>/</span>{" "}
            MAPA Buenos Aires
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "140px 32px",
          textAlign: "center",
          background: "var(--color-red)",
          color: "var(--color-white)",
        }}
      >
        <h2
          className="headline-display"
          style={{
            fontSize: "clamp(56px, 8vw, 120px)",
            lineHeight: 0.95,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            marginBottom: "32px",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Working on something{" "}
          <em
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-white)",
              textDecoration: "underline",
              textDecorationThickness: "4px",
              textUnderlineOffset: "8px",
            }}
          >
            impossible.
          </em>
        </h2>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "48px",
            opacity: 0.92,
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          For 90-minute leap sessions, partnerships, and speaking inquiries.
        </p>
        <Link
          href="/work/business-consulting"
          style={{
            display: "inline-block",
            padding: "22px 48px",
            background: "var(--color-white)",
            color: "var(--color-red)",
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            border: "3px solid var(--color-white)",
            transition: "all 0.2s",
          }}
        >
          Get in touch →
        </Link>
      </section>

      {/* ARTWORK */}
      <section
        style={{
          borderTop: "3px solid var(--color-ink)",
          background: "var(--color-white)",
          padding: "80px 32px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto 48px" }}>
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
            § 04 Artwork
          </div>
          <h2
            className="section-display"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            Futuristic <em>Artwork.</em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
          className="artwork-blocks-grid"
        >
          {ARTWORKS.map((a) => (
            <ArtworkCard key={a.slug} item={a} />
          ))}
        </div>
      </section>

      {/* page-scoped styles */}
      <style>{`
        @media (max-width: 900px) {
          .about-band-grid { grid-template-columns: 1fr !important; }
          .about-cell { padding: 40px 24px !important; border-left: none !important; border-top: 3px solid var(--color-ink); }
          .work-grid { grid-template-columns: 1fr !important; }
          .artwork-blocks-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ticker-text { font-size: 18px !important; }
          .press-list { font-size: 22px !important; }
        }
        @media (max-width: 640px) {
          .artwork-blocks-grid { grid-template-columns: 1fr !important; }
        }
        .about-cta:hover { background: var(--color-red) !important; }

        /* Work-card image cross-fade. Image fades in, text fades out.
           Hover only fires on devices that can actually hover (i.e. mouse).
           On touch devices, cards stay text-only so taps go to the page. */
        .work-card-image {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .work-card-text {
          transition: opacity 0.25s ease;
        }
        @media (hover: hover) and (pointer: fine) {
          .work-card:hover .work-card-image { opacity: 1; }
          .work-card:hover .work-card-text { opacity: 0; }
        }

        .artwork-block img { transition: transform 0.4s ease; }
        .artwork-block:hover img { transform: scale(1.04); }
      `}</style>
    </>
  );
}

type Artwork = {
  slug: string;
  title: string;
  image: string | null;
  href?: string;        // override default /art/[slug] href
  video?: string;       // optional autoplay loop video (mp4); poster = image
};

const ARTWORKS: Artwork[] = [
  {
    slug: "ar-linocuts",
    title: "AR Linocuts",
    image: "/images/home/artwork/ar-linocuts.jpg",
  },
  {
    slug: "ar-raku-headsets",
    title: "AR Raku Headsets",
    image: "/images/home/artwork/ar-raku-headsets.jpg",
  },
  {
    slug: "words-of-the-future",
    title: "Words of the Future",
    image: "/images/home/artwork/words-of-the-future.jpg",
  },
  {
    slug: "remote-controls",
    title: "Remote Controls",
    image: "/images/home/artwork/remote-controls.jpg",
  },
  {
    slug: "ar-murals",
    title: "AR Murals",
    image: "/images/home/artwork/ar-murals.jpg",
  },
  {
    slug: "interdimensional-travel-agency",
    title: "Interdimensional Travel Agency",
    image: "/images/projects/interdimensional/poster.jpg",
    video: "/images/projects/interdimensional/hover.mp4",
    href: "/past/interdimensional",
  },
];

function ArtworkCard({ item }: { item: Artwork }) {
  return (
    <Link
      href={item.href ?? `/art/${item.slug}`}
      className="artwork-block"
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          aspectRatio: "1 / 1",
          background: "var(--color-ink)",
          overflow: "hidden",
          border: "3px solid var(--color-ink)",
        }}
      >
        {item.video ? (
          <video
            src={item.video}
            poster={item.image ?? undefined}
            muted
            loop
            autoPlay
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
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
              fontSize: "96px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              opacity: 0.9,
            }}
          >
            {item.title.charAt(0)}
          </div>
        )}
      </div>
      <h3
        style={{
          marginTop: "16px",
          fontFamily: "var(--font-inter-tight), sans-serif",
          fontSize: "22px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {item.title}
      </h3>
    </Link>
  );
}

function Sep() {
  return (
    <span style={{ color: "rgba(255,255,255,0.5)", margin: "0 24px" }}>/</span>
  );
}

function SectionHead({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: "80px 32px 48px",
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        borderBottom: "3px solid var(--color-ink)",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--color-red)",
            letterSpacing: "0.06em",
          }}
        >
          {num}
        </div>
        <h2 className="section-display">{children}</h2>
      </div>
    </div>
  );
}

function ProjectCard({
  project: p,
  isLastRow,
  isRightColumn,
}: {
  project: Project;
  isLastRow: boolean;
  isRightColumn: boolean;
}) {
  const isActive = p.type === "program-active";
  const isDev = p.type === "program-dev";
  const isArt = p.type === "art";
  const dotColor = isActive
    ? "var(--color-red)"
    : isDev
    ? "var(--color-muted)"
    : "var(--color-red)";
  const dot = isActive ? "● " : isDev ? "◌ " : "▣ ";

  // Hover image: prefer a dedicated /hover.jpg if set, else fall back to
  // the hero image. The cross-fade is handled in the .work-card CSS below.
  const swapImage = p.hoverImage || p.heroImage;

  return (
    <Link
      href={`/work/${p.slug}`}
      style={{
        padding: "40px 32px",
        borderRight: isRightColumn ? "none" : "3px solid var(--color-ink)",
        borderBottom: isLastRow ? "none" : "3px solid var(--color-ink)",
        background: "var(--color-white)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        minHeight: "280px",
        position: "relative",
        overflow: "hidden",
      }}
      className="work-card"
    >
      {/* Hover image — sits behind the text, fades in on hover.
          The card itself is locked to a 4:3 aspect ratio (see CSS below)
          so 1200x900 hover images fit perfectly edge-to-edge with no
          letterbox and no crop. objectFit: cover is a safety net for
          any tiny aspect mismatch. */}
      {swapImage ? (
        <div className="work-card-image" aria-hidden="true">
          <Image
            src={swapImage}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : null}

      {/* Text content — fades out on hover so the image takes over */}
      <div
        className="work-card-text"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "24px",
            color: dotColor,
          }}
        >
          {dot}
          {p.meta}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "36px",
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            marginBottom: "16px",
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            color: "var(--color-muted)",
            flex: 1,
          }}
        >
          {p.shortDescription}
        </p>
        <div
          style={{
            marginTop: "24px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
          }}
        >
          {p.cta ?? (isArt ? "View the work" : "Learn more")} →
        </div>
      </div>
    </Link>
  );
}
