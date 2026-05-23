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
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            Twenty years at the edge of what&apos;s possible. First as a systems
            architect and XR/AR pioneer, now as the founder of LightNet, a
            movement of evidence-based wonder.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--color-ink)",
              marginBottom: "16px",
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

      {/* SECONDARY WORK GRID — Fashion Lab + AR Artwork */}
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
          href="/contact"
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

      {/* FROM THE ARCHIVES */}
      <section
        style={{
          borderTop: "3px solid var(--color-ink)",
          background: "var(--color-white)",
          padding: "80px 32px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
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
              § 03 From the archives
            </div>
            <h2
              className="section-display"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
            >
              Past <em>projects.</em>
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.55,
                color: "var(--color-muted)",
                marginTop: "20px",
                maxWidth: "720px",
              }}
            >
              Twenty years of debate clubs, citizen science, salons, and AR drops.
              The full image archive lives at{" "}
              <Link
                href="/archive"
                style={{
                  color: "var(--color-red)",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                /archive
              </Link>
              .
            </p>
          </div>
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
        </div>
      </section>

      {/* page-scoped styles */}
      <style>{`
        @media (max-width: 900px) {
          .about-band-grid { grid-template-columns: 1fr !important; }
          .about-cell { padding: 40px 24px !important; border-left: none !important; border-top: 3px solid var(--color-ink); }
          .work-grid { grid-template-columns: 1fr !important; }
          .archive-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ticker-text { font-size: 18px !important; }
          .press-list { font-size: 22px !important; }
        }
        @media (max-width: 640px) {
          .archive-grid { grid-template-columns: 1fr !important; }
        }
        .about-cta:hover { background: var(--color-red) !important; }
        .work-card:hover { background: var(--color-red-soft) !important; }
        .archive-card:hover { transform: translateY(-4px); }
      `}</style>
    </>
  );
}

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
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={archive.image}
              alt={archive.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
      }}
      className="work-card"
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
          fontSize: "16px",
          lineHeight: 1.55,
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
    </Link>
  );
}
