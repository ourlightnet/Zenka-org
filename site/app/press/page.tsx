import Link from "next/link";
import { talks, interviews, printPress, type PressEntry } from "@/lib/press";

export const metadata = {
  title: "Press — Zenka Caro",
  description:
    "Talks, podcasts, interviews, and print press featuring Zenka Caro. 2015 to present.",
};

export default function PressPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          maxWidth: "1100px",
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
          § 03 Press
        </div>
        <h1
          className="headline-display"
          style={{ fontSize: "clamp(48px, 8vw, 112px)", marginBottom: "32px" }}
        >
          In the <em>field.</em>
        </h1>
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.55,
            color: "var(--color-ink)",
            maxWidth: "780px",
            marginBottom: "20px",
          }}
        >
          Zenka Caro is a speaker, media creator, and social architect whose work has been featured in papers, press, podcasts, conferences, and public forums exploring consciousness, purpose, innovation, and human potential. Known for making complex ideas feel alive and accessible, Zenka speaks at the intersection of science, spirituality, creativity, and systems change, inviting audiences to rethink what is possible for themselves and for society.
        </p>
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.55,
            color: "var(--color-ink)",
            maxWidth: "780px",
            marginBottom: "32px",
          }}
        >
          Her voice is both visionary and practical: part field reporter from the future, part community builder, part spark plug for the impossible.
        </p>
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "13px",
            color: "var(--color-ink)",
          }}
        >
          Press inquiries:{" "}
          <a
            href="mailto:team@lightnet.org?subject=Press%20inquiry"
            style={{ color: "var(--color-red)", textDecoration: "underline" }}
          >
            team@lightnet.org
          </a>
        </p>
      </section>

      <FeaturedMedia />

      <PressSection title="Talks & Keynotes" entries={talks} />
      <PressSection title="Podcast, Film & Radio" entries={interviews} />
      <PressSection title="Print & Digital" entries={printPress} />

      {/* CTA */}
      <section
        style={{
          padding: "100px 32px",
          textAlign: "center",
          background: "var(--color-ink)",
          color: "var(--color-white)",
        }}
      >
        <h2
          className="section-display"
          style={{ marginBottom: "24px", fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Booking a <em>keynote?</em>
        </h2>
        <p
          style={{
            fontSize: "18px",
            opacity: 0.85,
            marginBottom: "40px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Inspirational keynotes on consciousness, exponential technology, and the future of XR.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "20px 40px",
            background: "var(--color-red)",
            color: "var(--color-white)",
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            border: "3px solid var(--color-red)",
          }}
        >
          Get in touch →
        </Link>
      </section>
    </>
  );
}

function FeaturedMedia() {
  const featured = [
    {
      videoId: "9Am9MsZWHHI",
      title: "Asheville Wave: The 7 Stages of Purpose",
      source: "Holomovement · 2025",
    },
    {
      videoId: "2FA-IuDTMjE",
      title: "Can Augmented Reality Bring Us to the Wisdom Age",
      source: "TEDx Jackson Hole · 2016",
    },
    {
      videoId: "wXevLd1v1Jg",
      title: "Contacting ET (Ep. 2264)",
      source: "FADE TO BLACK Radio · 2026",
    },
  ];
  return (
    <section
      style={{
        borderTop: "3px solid var(--color-ink)",
        padding: "56px 32px",
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
          marginBottom: "20px",
        }}
      >
        Featured media
      </div>
      <h2
        className="section-display"
        style={{
          fontSize: "clamp(36px, 5vw, 64px)",
          marginBottom: "40px",
        }}
      >
        Watch &amp; <em>listen.</em>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
        className="featured-grid"
      >
        {featured.map((f) => (
          <div key={f.videoId} style={{ display: "block" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                background: "var(--color-ink)",
                border: "3px solid var(--color-ink)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${f.videoId}?rel=0`}
                title={f.title}
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div style={{ paddingTop: "14px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-inter-tight), sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  marginBottom: "6px",
                  color: "var(--color-ink)",
                }}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${f.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-title"
                  style={{ color: "inherit" }}
                >
                  {f.title}
                </a>
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                }}
              >
                {f.source}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .featured-title:hover { color: var(--color-red) !important; }
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PressSection({
  title,
  entries,
}: {
  title: string;
  entries: PressEntry[];
}) {
  return (
    <section>
      <div
        style={{
          padding: "56px 32px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
          borderTop: "3px solid var(--color-ink)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "24px",
        }}
      >
        <h2
          className="section-display"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          {title}.
        </h2>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            color: "var(--color-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </span>
      </div>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 32px 32px",
        }}
      >
        {entries.map((e, i) => (
          <PressItem key={i} entry={e} />
        ))}
      </div>
    </section>
  );
}

function PressItem({ entry: e }: { entry: PressEntry }) {
  const Wrapper = e.url
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={e.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block" }}
          className="press-item-link"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

  return (
    <Wrapper>
      <div
        style={{
          padding: "24px 0",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          display: "grid",
          gridTemplateColumns: "140px 1fr",
          gap: "24px",
          alignItems: "baseline",
        }}
        className="press-row"
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            color: "var(--color-muted)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {e.date}
        </div>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-inter-tight), sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: "6px",
              color: "var(--color-ink)",
            }}
          >
            {e.title}
            {e.url ? (
              <span
                style={{
                  marginLeft: "8px",
                  color: "var(--color-red)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                ↗
              </span>
            ) : null}
          </h3>
          {(e.source || e.byline) && (
            <div
              style={{
                fontSize: "14px",
                color: "var(--color-muted)",
                lineHeight: 1.5,
              }}
            >
              {e.source}
              {e.source && e.byline ? " · " : ""}
              {e.byline ? `by ${e.byline}` : ""}
            </div>
          )}
          {e.note ? (
            <div
              style={{
                fontSize: "14px",
                color: "var(--color-ink)",
                lineHeight: 1.5,
                marginTop: "8px",
                fontStyle: "italic",
              }}
            >
              {e.note}
            </div>
          ) : null}
        </div>
        <style>{`
          .press-item-link:hover .press-row { background: var(--color-red-soft); }
          .press-item-link:hover h3 { color: var(--color-red); }
          @media (max-width: 640px) {
            .press-row { grid-template-columns: 1fr !important; gap: 6px !important; }
          }
        `}</style>
      </div>
    </Wrapper>
  );
}
