import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata = {
  title: "Contact Zenka Caro — Speaking, Partnerships, Press",
  description:
    "Book Zenka Caro for speaking engagements, keynotes, partnerships, lab participation, press inquiries, and collaboration. Founder of LightNet, the world's first consciousness research data platform. Email team@lightnet.org.",
  keywords: [
    "Book Zenka Caro",
    "Zenka Caro speaking",
    "consciousness keynote",
    "spoon bending workshop",
    "Holomovement Wave speaker",
    "LightNet press inquiry",
    "Zenka Caro contact",
    "augmented reality speaker",
    "Sedona keynote speaker",
    "Holomovement Purpose Lab booking",
    "team@lightnet.org",
  ],
  openGraph: {
    title: "Contact Zenka Caro — Speaking, Partnerships, Press",
    description:
      "Book Zenka for speaking, partnerships, lab participation, and press. Founder of LightNet.",
    images: ["/images/Zenka-Caro-Portrait.jpg"],
  },
};

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
          For speaking, partnerships, lab participation, press.
        </p>
      </section>

      {/* DIRECT EMAIL */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px 80px",
          textAlign: "center",
          borderTop: "3px solid var(--color-ink)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: "24px",
          }}
        >
          Reach out directly
        </div>

        <ObfuscatedEmail user="team" domain="lightnet" tld="org" />

        {/* Honeypot — hidden from humans, irresistible to a class of dumb
            scraper bots that gather every email-shaped string on a page.
            This decoy gets harvested first, the real one stays safer. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10000px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <a href="mailto:decoy-do-not-email-honeypot-trap@spamtrap.lightnet.org">
            decoy-do-not-email-honeypot-trap@spamtrap.lightnet.org
          </a>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP — prominent red banner CTA */}
      <section
        style={{
          background: "var(--color-red)",
          color: "var(--color-white)",
          padding: "100px 32px",
          textAlign: "center",
          borderTop: "3px solid var(--color-ink)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-white)",
            opacity: 0.9,
            marginBottom: "24px",
          }}
        >
          Stay in the field
        </div>
        <h2
          className="section-display"
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            marginBottom: "24px",
            lineHeight: 1.05,
          }}
        >
          Join the <em>list.</em>
        </h2>
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.5,
            opacity: 0.95,
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px",
          }}
        >
          Occasional dispatches on the labs, the films, the experiments, and
          what&apos;s next.
        </p>
        <a
          href="https://zenka.us5.list-manage.com/subscribe?u=8ca585567b2039640781b2293&id=6706983f46"
          target="_blank"
          rel="noopener noreferrer"
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
          Subscribe to the list →
        </a>
      </section>
    </>
  );
}
