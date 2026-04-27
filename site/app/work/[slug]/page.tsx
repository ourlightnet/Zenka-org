import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, allSlugs, projects } from "@/lib/projects";
import { artworks } from "@/lib/artworks";

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — Zenka Caro`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isActive = project.type === "program-active";
  const isDev = project.type === "program-dev";
  const typeColor = isActive
    ? "var(--color-red)"
    : isDev
    ? "var(--color-muted)"
    : "var(--color-red)";

  // Other projects to suggest at the bottom
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Header band */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px 48px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: typeColor,
            marginBottom: "24px",
          }}
        >
          {isActive ? "● " : isDev ? "◌ " : "▣ "}
          {project.meta}
        </div>
        <h1
          className="headline-display"
          style={{ fontSize: "clamp(48px, 8vw, 112px)", marginBottom: "32px" }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            color: "var(--color-ink)",
            maxWidth: "780px",
          }}
        >
          {project.shortDescription}
        </p>
      </section>

      {project.heroImage ? (
        <div
          style={{
            borderTop: "3px solid var(--color-ink)",
            borderBottom: "3px solid var(--color-ink)",
            background: "var(--color-ink)",
            position: "relative",
            aspectRatio: "16 / 9",
            maxHeight: "640px",
            overflow: "hidden",
          }}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ) : null}

      {/* Body */}
      <section
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "64px 32px",
        }}
      >
        <div
          style={{
            fontSize: "19px",
            lineHeight: 1.7,
            color: "var(--color-ink)",
          }}
        >
          {project.longDescription.split("\n\n").map((para, i) => (
            <p key={i} style={{ marginBottom: "20px" }}>
              {para}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: "48px",
            paddingTop: "40px",
            borderTop: "3px solid var(--color-ink)",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 28px",
                background: "var(--color-red)",
                color: "var(--color-white)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {project.cta ?? "Visit site"} ↗
            </a>
          ) : (
            <Link
              href="/contact"
              style={{
                padding: "16px 28px",
                background: "var(--color-red)",
                color: "var(--color-white)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {project.cta ?? "Get in touch"} →
            </Link>
          )}
          <Link
            href="/work"
            style={{
              padding: "16px 28px",
              background: "transparent",
              color: "var(--color-ink)",
              border: "3px solid var(--color-ink)",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ← All work
          </Link>
        </div>
      </section>

      {/* ARTWORK SUB-GRID — only on /work/zenka-artwork */}
      {slug === "zenka-artwork" ? (
        <section
          style={{
            borderTop: "3px solid var(--color-ink)",
            padding: "80px 32px 32px",
            maxWidth: "1280px",
            margin: "0 auto",
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
              marginBottom: "24px",
            }}
          >
            The body of work
          </div>
          <h2
            className="section-display"
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              marginBottom: "56px",
            }}
          >
            Series &amp; <em>installations.</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
            className="artwork-grid"
          >
            {artworks.map((a) => (
              <div key={a.slug} className="artwork-card">
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    background: "var(--color-ink)",
                    position: "relative",
                    border: "3px solid var(--color-ink)",
                  }}
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ paddingTop: "16px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-red)",
                      marginBottom: "8px",
                    }}
                  >
                    {a.category}
                    {a.year ? ` · ${a.year}` : ""}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-inter-tight), sans-serif",
                      fontSize: "24px",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      marginBottom: "8px",
                    }}
                  >
                    {a.title}
                    {a.externalUrl ? (
                      <a
                        href={a.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginLeft: "6px",
                          color: "var(--color-red)",
                          fontSize: "16px",
                        }}
                      >
                        ↗
                      </a>
                    ) : null}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.55,
                      color: "var(--color-muted)",
                    }}
                  >
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .artwork-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 640px) {
              .artwork-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      ) : null}

      {/* More projects */}
      <section
        style={{
          borderTop: "3px solid var(--color-ink)",
          background: "var(--color-ink)",
          color: "var(--color-white)",
          padding: "64px 32px",
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
              marginBottom: "24px",
            }}
          >
            More work
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="more-grid"
          >
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/work/${o.slug}`}
                style={{
                  background: "transparent",
                  color: "var(--color-white)",
                  borderTop: "3px solid var(--color-red)",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-red)",
                    marginBottom: "12px",
                  }}
                >
                  {o.meta}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-inter-tight), sans-serif",
                    fontSize: "26px",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    marginBottom: "8px",
                  }}
                >
                  {o.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.55, opacity: 0.75 }}>
                  {o.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .more-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
