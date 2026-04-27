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
            color: "var(--color-muted)",
            maxWidth: "720px",
            marginBottom: "24px",
          }}
        >
          Twenty years of talks, interviews, films, and print coverage. Most of the archive below predates LightNet and documents Zenka&apos;s XR/AR pioneer era, the foundation the current consciousness work is built on. Older entries appear under her former name, Jenny Carden.
        </p>
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "13px",
            color: "var(--color-ink)",
          }}
        >
          For press inquiries:{" "}
          <a
            href="mailto:team@lightnet.org?subject=Press%20inquiry"
            style={{ color: "var(--color-red)", textDecoration: "underline" }}
          >
            team@lightnet.org
          </a>
        </p>
      </section>

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
