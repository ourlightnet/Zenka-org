import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata = { title: "Work — Zenka Caro" };

export default function WorkPage() {
  const programs = projects.filter((p) => p.type !== "art");
  const art = projects.filter((p) => p.type === "art");

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
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "var(--color-red)",
            color: "var(--color-white)",
            padding: "6px 14px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "32px",
          }}
        >
          § 02 Work
        </div>
        <h1
          className="headline-display"
          style={{ fontSize: "clamp(48px, 8vw, 112px)", marginBottom: "32px" }}
        >
          Where the work <em>lives.</em>
        </h1>
        <p style={{ fontSize: "20px", lineHeight: 1.5, color: "var(--color-muted)", maxWidth: "720px" }}>
          Active programs, in-development projects, and twenty-plus years of art across two bodies of work.
        </p>
      </section>

      {/* PROGRAMS */}
      <SectionLabel num="Programs" />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="work-programs-grid"
      >
        {programs.map((p, idx) => (
          <ProgramCard
            key={p.slug}
            project={p}
            isLastRow={idx >= programs.length - (programs.length % 2 === 0 ? 2 : 1)}
            isRightColumn={idx % 2 === 1}
          />
        ))}
      </div>

      {/* ART */}
      <SectionLabel num="Art" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="work-art-grid"
      >
        {art.map((p, idx) => (
          <ArtCard key={p.slug} project={p} isLast={idx === art.length - 1} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-programs-grid { grid-template-columns: 1fr !important; }
          .work-art-grid { grid-template-columns: 1fr !important; }
        }
        .work-program-card:hover { background: var(--color-red-soft) !important; }
      `}</style>
    </>
  );
}

function SectionLabel({ num }: { num: string }) {
  return (
    <div
      style={{
        padding: "64px 32px 32px",
        maxWidth: "1280px",
        margin: "0 auto",
        borderBottom: "3px solid var(--color-ink)",
      }}
    >
      <h2
        className="section-display"
        style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
      >
        {num}.
      </h2>
    </div>
  );
}

type ProjectCardProps = {
  project: import("@/lib/projects").Project;
  isLastRow: boolean;
  isRightColumn: boolean;
};

function ProgramCard({ project: p, isLastRow, isRightColumn }: ProjectCardProps) {
  const isActive = p.type === "program-active";
  return (
    <Link
      href={`/work/${p.slug}`}
      style={{
        padding: "40px 32px",
        borderRight: isRightColumn ? "none" : "3px solid var(--color-ink)",
        borderBottom: isLastRow ? "none" : "3px solid var(--color-ink)",
        background: "var(--color-white)",
        display: "flex",
        flexDirection: "column",
        minHeight: "260px",
      }}
      className="work-program-card"
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "20px",
          color: isActive ? "var(--color-red)" : "var(--color-muted)",
        }}
      >
        {isActive ? "● " : "◌ "}
        {p.meta}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-inter-tight), sans-serif",
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1.05,
          marginBottom: "14px",
        }}
      >
        {p.title}
      </h3>
      <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--color-muted)", flex: 1 }}>
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
        }}
      >
        {p.cta ?? "Read more"} →
      </div>
    </Link>
  );
}

function ArtCard({
  project: p,
  isLast,
}: {
  project: import("@/lib/projects").Project;
  isLast: boolean;
}) {
  return (
    <Link
      href={`/work/${p.slug}`}
      style={{
        borderRight: isLast ? "none" : "3px solid var(--color-ink)",
        background: "var(--color-white)",
        overflow: "hidden",
      }}
    >
      {p.heroImage ? (
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
            src={p.heroImage}
            alt={p.title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", filter: "grayscale(0.1)" }}
          />
        </div>
      ) : null}
      <div style={{ padding: "28px 32px" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--color-red)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {p.meta}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "10px",
          }}
        >
          {p.title}
        </h3>
        <p style={{ fontSize: "14px", color: "var(--color-muted)", lineHeight: 1.55 }}>
          {p.shortDescription}
        </p>
      </div>
    </Link>
  );
}
