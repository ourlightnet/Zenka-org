import Image from "next/image";
import Link from "next/link";
import { homepageProjects, type Project } from "@/lib/projects";

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
            src="/images/zenka-portrait.jpg"
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

      {/* WORK GRID — 8 cards (6 programs + 2 art) */}
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

      {/* page-scoped styles */}
      <style>{`
        @media (max-width: 900px) {
          .about-band-grid { grid-template-columns: 1fr !important; }
          .about-cell { padding: 40px 24px !important; border-left: none !important; border-top: 3px solid var(--color-ink); }
          .work-grid { grid-template-columns: 1fr !important; }
          .ticker-text { font-size: 18px !important; }
          .press-list { font-size: 22px !important; }
        }
        .about-cta:hover { background: var(--color-red) !important; }
        .work-card:hover { background: var(--color-red-soft) !important; }
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
