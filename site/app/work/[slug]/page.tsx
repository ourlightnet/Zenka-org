import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, allSlugs, projects } from "@/lib/projects";
import { artworks } from "@/lib/artworks";
import { artworkImages } from "@/lib/artwork-images";
import ImageGallery from "@/components/ImageGallery";

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  const baseKeywords = [
    "Zenka Caro",
    "LightNet",
    "consciousness research",
    project.title,
    `Zenka Caro ${project.title}`,
  ];
  return {
    title: project.title,
    description: project.shortDescription,
    keywords: baseKeywords,
    openGraph: {
      title: `${project.title} — Zenka Caro`,
      description: project.shortDescription,
      images: project.heroImage ? [project.heroImage] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Zenka Caro`,
      description: project.shortDescription,
      images: project.heroImage ? [project.heroImage] : undefined,
    },
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

        {/* Resources / links (Purpose Lab uses this) */}
        {project.links && project.links.length > 0 ? (
          <div
            style={{
              marginTop: "40px",
              paddingTop: "32px",
              borderTop: "1px solid var(--color-ink)",
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
                marginBottom: "20px",
              }}
            >
              Resources
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "12px",
              }}
            >
              {project.links.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.4,
                      color: "var(--color-ink)",
                      textDecoration: "underline",
                      textDecorationColor: "var(--color-red)",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* SNAPSHOT — People · Places · Tools · Budget (when present) */}
        {project.snapshot ? (
          <div style={{ marginTop: "56px" }}>
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
              Snapshot
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
              className="snapshot-grid"
            >
              {(["people", "places", "tools"] as const).map((key) => {
                const items = project.snapshot?.[key];
                if (!items || items.length === 0) return null;
                return (
                  <div
                    key={key}
                    style={{
                      border: "3px solid var(--color-ink)",
                      padding: "24px 24px 28px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--color-red)",
                        marginBottom: "16px",
                      }}
                    >
                      {key}
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {items.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "16px",
                            lineHeight: 1.4,
                            color: "var(--color-ink)",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Budget block (full width below) */}
            {project.snapshot.budget ? (
              <div
                style={{
                  marginTop: "24px",
                  border: "3px solid var(--color-ink)",
                  background: "var(--color-ink)",
                  color: "var(--color-white)",
                  padding: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    alignItems: "baseline",
                    marginBottom: "24px",
                    borderBottom: "1px solid rgba(255,255,255,0.25)",
                    paddingBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--color-red)",
                    }}
                  >
                    Budget
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter-tight), sans-serif",
                      fontSize: "40px",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {project.snapshot.budget.total}
                  </div>
                  {project.snapshot.budget.label ? (
                    <div
                      style={{
                        fontSize: "13px",
                        opacity: 0.7,
                        marginLeft: "auto",
                        maxWidth: "60%",
                        textAlign: "right",
                      }}
                    >
                      {project.snapshot.budget.label}
                    </div>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "32px",
                  }}
                  className="snapshot-budget-grid"
                >
                  {(["income", "expenses"] as const).map((kind) => {
                    const items = project.snapshot?.budget?.[kind];
                    if (!items || items.length === 0) return null;
                    return (
                      <div key={kind}>
                        <div
                          style={{
                            fontFamily: "var(--font-jetbrains-mono), monospace",
                            fontSize: "11px",
                            fontWeight: 500,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--color-red)",
                            marginBottom: "14px",
                          }}
                        >
                          {kind}
                        </div>
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          {items.map((item, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "16px",
                                fontSize: "14px",
                                lineHeight: 1.4,
                                paddingBottom: "6px",
                                borderBottom: "1px dotted rgba(255,255,255,0.18)",
                              }}
                            >
                              <span style={{ opacity: 0.9 }}>{item.label}</span>
                              <span
                                style={{
                                  fontFamily:
                                    "var(--font-jetbrains-mono), monospace",
                                  fontWeight: 500,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {item.amount}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                {project.snapshot.budget.note ? (
                  <div
                    style={{
                      marginTop: "24px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255,255,255,0.18)",
                      fontSize: "13px",
                      lineHeight: 1.5,
                      opacity: 0.8,
                      fontStyle: "italic",
                    }}
                  >
                    {project.snapshot.budget.note}
                  </div>
                ) : null}
              </div>
            ) : null}
            <style>{`
              @media (max-width: 900px) {
                .snapshot-grid { grid-template-columns: 1fr !important; }
                .snapshot-budget-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </div>
        ) : null}

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
              Visit the website ↗
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
            href="/"
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
            ← Home
          </Link>
        </div>
      </section>

      {/* BUSINESS CONSULTING booking CTA — only on /work/business-consulting */}
      {slug === "business-consulting" ? (
        <section
          style={{
            borderTop: "3px solid var(--color-ink)",
            padding: "120px 32px",
            textAlign: "center",
            background: "var(--color-red)",
            color: "var(--color-white)",
          }}
        >
          <h2
            className="headline-display"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
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
              fontSize: "20px",
              marginBottom: "40px",
              opacity: 0.95,
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Book a 90-minute leap session. $399. Channeled clarity, pattern
            recognition, and a real next step for your project.
          </p>
          <a
            href="mailto:team@lightnet.org?subject=Booking"
            style={{
              display: "inline-block",
              padding: "22px 48px",
              background: "var(--color-white)",
              color: "var(--color-red)",
              fontFamily: "var(--font-inter-tight), sans-serif",
              fontSize: "17px",
              fontWeight: 800,
              letterSpacing: "-0.005em",
              border: "3px solid var(--color-white)",
              textDecoration: "none",
            }}
          >
            team@lightnet.org →
          </a>
          <div
            style={{
              marginTop: "20px",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            Subject line: Booking
          </div>
        </section>
      ) : null}

      {/* PROJECT GALLERY — shown when project has a gallery field */}
      {project.gallery && project.gallery.length > 0 ? (
        <section
          style={{
            borderTop: "3px solid var(--color-ink)",
            padding: "64px 32px",
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
            From the field · {project.gallery.length} images
          </div>
          <h2
            className="section-display"
            style={{
              fontSize: "clamp(36px, 4.5vw, 64px)",
              marginBottom: "48px",
            }}
          >
            See it in <em>action.</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
            className="project-gallery"
          >
            {project.gallery.map((src, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  background: "var(--color-ink)",
                  overflow: "hidden",
                  border: "3px solid var(--color-ink)",
                }}
              >
                <Image
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .project-gallery { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 640px) {
              .project-gallery { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      ) : null}

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

      {/* ARTWORK PHOTO GALLERY, only on /work/zenka-artwork */}
      {slug === "zenka-artwork" ? (
        <section
          style={{
            borderTop: "3px solid var(--color-ink)",
            padding: "80px 32px",
            maxWidth: "1600px",
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
            From the studio · {artworkImages.length} shots
          </div>
          <h2
            className="section-display"
            style={{
              fontSize: "clamp(36px, 4.5vw, 64px)",
              marginBottom: "48px",
            }}
          >
            More from the <em>body of work.</em>
          </h2>
          <ImageGallery images={artworkImages} />
          <p style={{ marginTop: "48px", display: "none" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                background: "var(--color-ink)",
                color: "var(--color-white)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              ← Home
            </Link>
          </p>
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
