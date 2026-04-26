import Link from "next/link";

export const metadata = {
  title: "Contact — Zenka Caro",
  description:
    "Reach Zenka for speaking, partnerships, lab participation, press, and collaboration inquiries.",
};

const INQUIRY_TYPES = [
  {
    label: "Speaking & keynotes",
    description:
      "Book Zenka for a conference, festival, panel, or curated gathering.",
    subject: "Speaking inquiry",
  },
  {
    label: "Partnerships & collaboration",
    description:
      "Co-creating an experiment, a film, a research project, or a body of work.",
    subject: "Partnership inquiry",
  },
  {
    label: "Lab participation",
    description:
      "Joining the Spoon Bending Lab, Purpose Lab, Starseed Academy, or other LightNet programs.",
    subject: "Lab participation",
  },
  {
    label: "Press & media",
    description:
      "Interviews, features, photos, bios, and quotes for journalists.",
    subject: "Press inquiry",
  },
  {
    label: "Something else",
    description:
      "Doesn't fit a box? Tell Zenka what you're up to.",
    subject: "Hello",
  },
];

const EMAIL = "team@lightnet.org";

export default function ContactPage() {
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
          § 04 Contact
        </div>
        <h1
          className="headline-display"
          style={{ fontSize: "clamp(48px, 8vw, 112px)", marginBottom: "32px" }}
        >
          Get in <em>touch.</em>
        </h1>
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.55,
            color: "var(--color-ink)",
            maxWidth: "720px",
          }}
        >
          For speaking, partnerships, lab participation, press, and serious collaboration on the work that&apos;s coming. Pick the closest box, click, and the email opens with a useful subject line already filled in.
        </p>
      </section>

      {/* INQUIRY CARDS */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderTop: "3px solid var(--color-ink)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="contact-grid"
      >
        {INQUIRY_TYPES.map((t, idx) => {
          const isLastRow =
            idx >=
            INQUIRY_TYPES.length -
              (INQUIRY_TYPES.length % 2 === 0 ? 2 : 1);
          const isRightColumn = idx % 2 === 1;
          return (
            <a
              key={t.label}
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}
              style={{
                padding: "40px 32px",
                borderRight: isRightColumn
                  ? "none"
                  : "3px solid var(--color-ink)",
                borderBottom: isLastRow ? "none" : "3px solid var(--color-ink)",
                background: "var(--color-white)",
                display: "flex",
                flexDirection: "column",
                minHeight: "200px",
              }}
              className="contact-card"
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-red)",
                  marginBottom: "20px",
                }}
              >
                ● Inquiry
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
                {t.label}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.55,
                  color: "var(--color-muted)",
                  flex: 1,
                }}
              >
                {t.description}
              </p>
              <div
                style={{
                  marginTop: "20px",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-ink)",
                }}
              >
                Email Zenka →
              </div>
            </a>
          );
        })}
      </div>

      {/* DIRECT EMAIL */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: "16px",
          }}
        >
          Or just reach out directly
        </div>
        <a
          href={`mailto:${EMAIL}`}
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--color-red)",
            textDecoration: "underline",
            textDecorationThickness: "3px",
            textUnderlineOffset: "8px",
          }}
        >
          {EMAIL}
        </a>
      </section>

      {/* MAILCHIMP SIGNUP */}
      <section
        style={{
          background: "var(--color-ink)",
          color: "var(--color-white)",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-red)",
            marginBottom: "20px",
          }}
        >
          Stay in the field
        </div>
        <h2
          className="section-display"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            marginBottom: "24px",
          }}
        >
          Join the <em>list.</em>
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
          Occasional dispatches on the labs, the films, the experiments, and what&apos;s next.
        </p>
        <a
          href="https://zenka.us5.list-manage.com/subscribe?u=8ca585567b2039640781b2293&id=6706983f46"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "20px 40px",
            background: "var(--color-white)",
            color: "var(--color-ink)",
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            border: "3px solid var(--color-white)",
          }}
        >
          Subscribe →
        </a>
      </section>

      <style>{`
        .contact-card:hover { background: var(--color-red-soft) !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-card { border-right: none !important; border-bottom: 3px solid var(--color-ink) !important; }
        }
      `}</style>
    </>
  );
}
