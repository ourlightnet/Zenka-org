import Image from "next/image";
import Link from "next/link";

const PROGRAMS = [
  {
    slug: "lightnet",
    status: "active" as const,
    meta: "Active · Nonprofit",
    title: "LightNet",
    body: "Experiential platform and knowledge bank focused on miracles, consciousness, and unconventional ways of doing things. Like Gaia TV, but you try it out in real life.",
    arrow: "Visit lightnet.org",
  },
  {
    slug: "spoon-bending-lab",
    status: "active" as const,
    meta: "Active · Monthly",
    title: "Spoon Bending Lab",
    body: "First Sundays in Sedona at Dream Magic and online. Mind over matter, in community, repeatedly, with witnesses.",
    arrow: "Join the next session",
  },
  {
    slug: "holomovement-purpose-lab",
    status: "active" as const,
    meta: "Active",
    title: "Holomovement Purpose Lab",
    body: "Small-group labs helping people discover and live their purpose in alignment with the whole.",
    arrow: "Learn more",
  },
  {
    slug: "starseed-academy",
    status: "active" as const,
    meta: "Active",
    title: "Starseed Academy",
    body: "For those who came here on assignment. A program for remembering who you are and what you're here to build. [Placeholder]",
    arrow: "Apply",
  },
  {
    slug: "global-awakening-tracker",
    status: "dev" as const,
    meta: "In development",
    title: "Global Awakening Tracker",
    body: "Charts humanity's journey toward more love, cooperation, and healing. A measurement instrument for the paradigm shift.",
    arrow: "Get notified",
  },
  {
    slug: "dream-machine",
    status: "dev" as const,
    meta: "In development",
    title: "The Dream Machine",
    body: "[Placeholder] A new device for collective dreaming, lucid practice, and shared subconscious exploration.",
    arrow: "Get notified",
  },
];

const ART = [
  {
    slug: "augmented-reality-art",
    num: "01 / Augmented Reality Art",
    title: "Sculpture, extended.",
    body: "Raku-fired heads and surfaces brought alive by augmented reality overlay. Twenty years of physical objects that respond to the camera.",
    image: "/images/ar-art-hero.jpg",
  },
  {
    slug: "street-art",
    num: "02 / Street Art",
    title: "Public works.",
    body: "Installed in cities and unexpected places. Out where the public lives.",
    image: "/images/street-art-hero.jpg",
  },
];

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
          She makes the invisible <em>impossible</em> to ignore.
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
          Filmmaker, systems-builder, founder of{" "}
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
          Spoon bending <Sep /> Group coherence <Sep /> Contact across the veil{" "}
          <Sep /> Purpose discovery <Sep /> Levitation <Sep />{" "}
          <em
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Evidence-based wonder
          </em>
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
            src="/images/zenka-portrait.jpg"
            alt="Zenka Caro"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              mixBlendMode: "multiply",
              opacity: 0.95,
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

      {/* PROGRAMS HEAD */}
      <SectionHead num="§ 02 Programs">
        Where the work <em>lives</em>.
      </SectionHead>

      {/* PROGRAMS GRID */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="programs-grid"
      >
        {PROGRAMS.map((p, idx) => (
          <ProgramCard
            key={p.slug}
            program={p}
            isLastRow={idx >= PROGRAMS.length - 2}
            isRightColumn={idx % 2 === 1}
          />
        ))}
      </div>

      {/* ART HEAD */}
      <SectionHead num="§ 03 Art">
        Two bodies of <em>work.</em>
      </SectionHead>

      {/* ART STRIP */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="art-grid"
      >
        {ART.map((piece, idx) => (
          <ArtCard
            key={piece.slug}
            piece={piece}
            isLast={idx === ART.length - 1}
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
              display: "flex",
              gap: "8px 64px",
              flexWrap: "wrap",
              fontFamily: "var(--font-inter-tight), sans-serif",
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
            className="press-list"
          >
            <span>TEDx Jackson Hole</span>
            <span style={{ color: "var(--color-red)" }}>/</span>
            <span>IONS</span>
            <span style={{ color: "var(--color-red)" }}>/</span>
            <span>The Tech Museum</span>
            <span style={{ color: "var(--color-red)" }}>/</span>
            <span>MAPA Buenos Aires</span>
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
            impossible?
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
          For speaking inquiries, partnerships, and serious collaboration on the
          work that&apos;s coming.
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

      {/* Page-scoped media queries (Next.js inline style doesn't support media queries) */}
      <style>{`
        @media (max-width: 900px) {
          .about-band-grid { grid-template-columns: 1fr !important; }
          .about-cell { padding: 40px 24px !important; border-left: none !important; border-top: 3px solid var(--color-ink); }
          .programs-grid { grid-template-columns: 1fr !important; }
          .art-grid { grid-template-columns: 1fr !important; }
          .ticker-text { font-size: 18px !important; }
          .press-list { font-size: 22px !important; gap: 4px 32px !important; }
        }
        .about-cta:hover { background: var(--color-red) !important; }
      `}</style>
    </>
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
      className="section-head-flex"
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

type Program = (typeof PROGRAMS)[number];
function ProgramCard({
  program: p,
  isLastRow,
  isRightColumn,
}: {
  program: Program;
  isLastRow: boolean;
  isRightColumn: boolean;
}) {
  return (
    <Link
      href={`/work/${p.slug}`}
      style={{
        padding: "40px 32px",
        borderRight: isRightColumn ? "none" : "3px solid var(--color-ink)",
        borderBottom: isLastRow ? "none" : "3px solid var(--color-ink)",
        background: "var(--color-white)",
        cursor: "pointer",
        transition: "background 0.2s",
        display: "flex",
        flexDirection: "column",
        minHeight: "280px",
        position: "relative",
      }}
      className="program-card"
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "24px",
          color:
            p.status === "active"
              ? "var(--color-red)"
              : "var(--color-muted)",
        }}
      >
        {p.status === "active" ? "● " : "◌ "}
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
        {p.body}
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
        {p.arrow} →
      </div>
      <style>{`
        .program-card:hover { background: var(--color-red-soft) !important; }
      `}</style>
    </Link>
  );
}

type ArtPiece = (typeof ART)[number];
function ArtCard({ piece, isLast }: { piece: ArtPiece; isLast: boolean }) {
  return (
    <Link
      href={`/work/${piece.slug}`}
      style={{
        borderRight: isLast ? "none" : "3px solid var(--color-ink)",
        background: "var(--color-white)",
        overflow: "hidden",
      }}
      className="art-card"
    >
      <div
        style={{
          aspectRatio: "4 / 5",
          overflow: "hidden",
          borderBottom: "3px solid var(--color-ink)",
          background: "var(--color-ink)",
          position: "relative",
        }}
      >
        <Image
          src={piece.image}
          alt={piece.title}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.5s, filter 0.5s",
            filter: "grayscale(0.1)",
          }}
        />
      </div>
      <div style={{ padding: "28px 32px" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--color-red)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {piece.num}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "36px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          {piece.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-muted)",
            lineHeight: 1.5,
          }}
        >
          {piece.body}
        </p>
      </div>
    </Link>
  );
}
