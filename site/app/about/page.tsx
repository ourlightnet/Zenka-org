import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About — Zenka Caro" };

export default function AboutPage() {
  return (
    <>
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
          § 01 About
        </div>
        <h1
          className="headline-display"
          style={{ fontSize: "clamp(48px, 8vw, 112px)", marginBottom: "40px" }}
        >
          Making the invisible <em>undeniable</em>.
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            color: "var(--color-ink)",
            maxWidth: "780px",
          }}
        >
          Zenka Caro is a filmmaker, systems-builder, and social architect. As
          founder of{" "}
          <strong style={{ color: "var(--color-red)" }}>LightNet</strong>, she
          creates bold experiments, media, and small-group labs that help
          people directly experience what becomes possible when consciousness,
          purpose, and community come alive together.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "3px solid var(--color-ink)",
          borderBottom: "3px solid var(--color-ink)",
        }}
        className="about-page-grid"
      >
        <div
          style={{
            background: "var(--color-red)",
            aspectRatio: "1 / 1",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/zenka-portrait.png"
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
          className="about-page-cell"
        >
          <h2 className="about-h2" style={{ marginBottom: "32px" }}>
            Her <em>method</em>.
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            Zenka is the creator of the Holomovement Purpose Lab, a multi-year
            research initiative that generated a repeatable seven-stage process
            for discovering and embodying purpose. Participant scores rose 88%
            in wealth, 62% in love, and 41% in health after only 8 weeks.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            She has also developed consciousness labs including the LightNet
            Spoon Bending Lab, the Starseed Academy Levitation Lab, and Contact
            Lab, designed as live inquiries into the capacities of human
            awareness, intention, and collective field intelligence.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
            }}
          >
            She is the creator of The Unlimited Show, featuring visionary
            thinkers, scientists, mystics, and changemakers exploring calling,
            coherence, healing, and human evolution.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "96px 32px",
        }}
      >
        <h2 className="section-display" style={{ marginBottom: "40px" }}>
          The longer <em>story.</em>
        </h2>
        <div
          style={{
            fontSize: "19px",
            lineHeight: 1.65,
            color: "var(--color-ink)",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            Her work fuses storytelling, citizen-science inquiry, and
            evidence-based wonder to turn extraordinary ideas into grounded,
            repeatable practices that build coherence, courage, and real-world
            impact.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Based in Sedona, Arizona, Zenka is the architect of the Dream
            Machine and the emerging City of Light, a living experiment in new
            economies, contributionism, and conscious capital. Through this
            platform, she is prototyping models for resourcing community-led
            innovation and joy-filled civilization design.
          </p>
          <p style={{ marginBottom: "20px" }}>
            To date, the Dream Machine has raised and granted over $1.5 million
            toward prototypes spanning sustainable fashion labs, collaborative
            media studios, water research, and Indigenous-led initiatives. Her
            larger mission is to help build replicable models of culture,
            community, and flourishing that future generations can inherit,
            adapt, and expand.
          </p>
          <p style={{ marginBottom: "20px", fontWeight: 600 }}>
            Zenka is here to help people stop outsourcing their power, remember
            what they are, and start building the next world together.
          </p>
        </div>

        {/* FIND HER ONLINE */}
        <div
          style={{
            marginTop: "56px",
            paddingTop: "40px",
            borderTop: "3px solid var(--color-ink)",
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
            Find her online
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            <a
              href="https://www.lightnet.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ink)", textDecoration: "underline" }}
            >
              lightnet.org ↗
            </a>
            <a
              href="https://www.ourlightnet.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ink)", textDecoration: "underline" }}
            >
              ourlightnet.org ↗
            </a>
            <a
              href="https://www.zenka.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ink)", textDecoration: "underline" }}
            >
              zenka.org ↗
            </a>
            <a
              href="https://www.passionbe.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ink)", textDecoration: "underline" }}
            >
              passionbe.com ↗
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/work"
            style={{
              padding: "16px 28px",
              background: "var(--color-ink)",
              color: "var(--color-white)",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            See the work →
          </Link>
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
            Get in touch →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-page-grid { grid-template-columns: 1fr !important; }
          .about-page-cell { padding: 40px 24px !important; border-left: none !important; border-top: 3px solid var(--color-ink); }
        }
      `}</style>
    </>
  );
}
