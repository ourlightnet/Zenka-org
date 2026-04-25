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
          I&apos;m a <em>reality hacker</em> and <em>future architect</em>.
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            color: "var(--color-ink)",
            maxWidth: "780px",
          }}
        >
          On a mission to upgrade human consciousness. As founder of{" "}
          <strong style={{ color: "var(--color-red)" }}>LightNet</strong> I
          design citizen-science experiments, group intelligence platforms, and
          tech prototypes that explore how we break free from the old script and
          step into our highest potential.
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
            src="/images/zenka-portrait.jpg"
            alt="Zenka Caro"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              mixBlendMode: "multiply",
              opacity: 0.95,
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
            Mission &amp; <em>method</em>.
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            My work is in applied consciousness research: spoon bending, group
            coherence, contact across the veil, purpose discovery, and even
            levitation. Consciousness is measurable, shareable, and scalable.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            With 20+ years in technology as a systems architect, software
            designer, and XR/AR pioneer, I now focus on The Holomovement Purpose
            Lab, the LightNet Impossible to Possible Coaching Program, The
            Starseed Academy, and the LightNet Spoon Bending Lab.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
            }}
          >
            In development: The Dream Machine, the Holomovement Purpose Lab
            Film, NOC, Joy Rides, and WAM.
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
            Zenka Caro is a social architect, filmmaker, educator, and systems
            visionary devoted to helping people and communities remember who
            they are, why they are here, and what becomes possible when purpose
            is lived in alignment with the whole.
          </p>
          <p style={{ marginBottom: "20px" }}>
            She is the Founder of LightNet, a nonprofit think tank and media
            platform exploring consciousness, human potential, group coherence,
            and the future of collective intelligence. Through documentaries,
            educational labs, interviews, and public initiatives, her work
            bridges inner development, social innovation, and the emerging
            sciences of consciousness.
          </p>
          <p style={{ marginBottom: "20px" }}>
            She believes that we&apos;re standing at the edge of a paradigm
            shift, and her role is to map the invisible breakthroughs happening
            all around us, from spontaneous healing and telepathy to purpose
            activation and quantum knowing, and make them visible, trackable,
            and shareable. She does this by creating playful, rigorous
            environments where curiosity leads, data matters, and wonder is
            welcome.
          </p>
        </div>

        <div
          style={{
            marginTop: "56px",
            paddingTop: "40px",
            borderTop: "3px solid var(--color-ink)",
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
