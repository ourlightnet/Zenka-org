import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArtBodyBySlug, artBodies, artSlugs } from "@/lib/art";

export function generateStaticParams() {
  return artSlugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const a = getArtBodyBySlug(slug);
  if (!a) return { title: "Not found · Zenka Caro" };
  return {
    title: `${a.title} — Zenka Caro`,
    description: a.tagline,
    keywords: [
      "Zenka Caro",
      "Zenka Caro artwork",
      "augmented reality art",
      a.title,
      `Zenka ${a.title}`,
      "raku ceramic",
      "AR linocut",
    ],
    openGraph: {
      title: `${a.title} — Zenka Caro`,
      description: a.tagline,
      images: a.hero ? [a.hero] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${a.title} — Zenka Caro`,
      description: a.tagline,
      images: a.hero ? [a.hero] : undefined,
    },
  };
}

export default async function ArtPage({ params }: Params) {
  const { slug } = await params;
  const a = getArtBodyBySlug(slug);
  if (!a) notFound();

  const others = artBodies.filter((x) => x.slug !== a.slug).slice(0, 3);
  const heroIsVideo = a.heroIsVideo || /\.(mp4|webm)$/i.test(a.hero);

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
            color: "var(--color-red)",
            marginBottom: "24px",
          }}
        >
          § Artwork · {a.meta}
        </div>
        <h1
          className="headline-display"
          style={{ fontSize: "clamp(48px, 8vw, 112px)", marginBottom: "32px" }}
        >
          {a.title}
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            color: "var(--color-ink)",
            maxWidth: "780px",
          }}
        >
          {a.tagline}
        </p>
      </section>

      {/* Hero */}
      {a.hero ? (
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
          {heroIsVideo ? (
            <video
              src={a.hero}
              muted
              loop
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <Image
              src={a.hero}
              alt={a.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          )}
        </div>
      ) : null}

      {/* Body */}
      <section
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "64px 32px 32px",
        }}
      >
        <div
          style={{
            fontSize: "19px",
            lineHeight: 1.7,
            color: "var(--color-ink)",
          }}
        >
          {a.body.map((para, i) => (
            <p key={i} style={{ marginBottom: "20px" }}>
              {para}
            </p>
          ))}
        </div>

        {a.pullQuotes && a.pullQuotes.length > 0 ? (
          <div style={{ marginTop: "40px" }}>
            {a.pullQuotes.map((q, i) => (
              <blockquote
                key={i}
                style={{
                  borderLeft: "4px solid var(--color-red)",
                  paddingLeft: "24px",
                  margin: "32px 0",
                  fontFamily: "var(--font-inter-tight), sans-serif",
                  fontSize: "26px",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "var(--color-ink)",
                }}
              >
                “{q}”
              </blockquote>
            ))}
          </div>
        ) : null}
      </section>

      {/* Gallery */}
      {a.gallery.length > 0 ? (
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "16px 32px 64px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
            className="art-gallery"
          >
            {a.gallery.map((src, i) => (
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
                  alt={`${a.title} — image ${i + 1}`}
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
              .art-gallery { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 640px) {
              .art-gallery { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      ) : null}

      {/* CTAs */}
      <section
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "32px 32px 80px",
        }}
      >
        <div
          style={{
            paddingTop: "32px",
            borderTop: "3px solid var(--color-ink)",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {a.relatedPastSlug ? (
            <Link
              href={`/past/${a.relatedPastSlug}`}
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
              {a.relatedPastLabel || "Related writeup"} →
            </Link>
          ) : null}
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

      {/* More artwork */}
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
            More from the body of work
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="art-more-grid"
          >
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/art/${o.slug}`}
                style={{
                  background: "transparent",
                  color: "var(--color-white)",
                  borderTop: "3px solid var(--color-red)",
                  paddingTop: "20px",
                  textDecoration: "none",
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
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    opacity: 0.75,
                  }}
                >
                  {o.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .art-more-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
