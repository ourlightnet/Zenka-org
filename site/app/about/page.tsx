import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Zenka Caro",
  description:
    "Zenka 2038 Caro: social architect, filmmaker, educator, founder of LightNet — a Sedona consciousness think tank, research platform, and media lab. Member of the Evolutionary Leaders. Architect of the Dream Machine and the emerging City of Light.",
  keywords: [
    "Zenka Caro biography",
    "Zenka 2038 Caro",
    "LightNet founder",
    "consciousness researcher",
    "Sedona think tank",
    "Holomovement Purpose Lab",
    "Spoon Bending Lab",
    "Starseed Academy Levitation Lab",
    "Contact Lab",
    "Evolutionary Leader",
    "Source of Synergy Foundation",
    "Dream Machine",
    "City of Light",
    "augmented reality artist",
    "raku VR sculpture",
    "TEDxJacksonHole",
    "ICA LA",
    "Sotheby's Art of VR",
    "FIG Bilbao",
    "metaverse architect",
  ],
  openGraph: {
    title: "About Zenka Caro — Founder of LightNet",
    description:
      "Social architect, filmmaker, founder of LightNet. Sedona-based consciousness think tank exploring the frontier edges of human potential.",
    images: ["/images/Zenka-Caro-Portrait.jpg"],
  },
};

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
          Building living experiments at the frontier edges of human potential.
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
            src="/images/Zenka-Caro-Portrait.jpg"
            alt="Zenka Caro"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
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
            The <em>work</em>.
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            Zenka 2038 Caro is a social architect, filmmaker, educator, and
            founder of{" "}
            <strong style={{ color: "var(--color-red)" }}>LightNet</strong>, a
            Sedona-based consciousness think tank, research platform, and
            media lab exploring the frontier edges of human potential.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            She blends storytelling, citizen science, group coherence, and
            real-world experimentation to help people directly experience
            what they once believed was impossible.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}
          >
            In the Dream Machine, Zenka designs environments where curiosity
            becomes action, community becomes a creative force, and bold
            visions become measurable, repeatable prototypes.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--color-ink)",
            }}
          >
            In 2026 she was inaugurated as an Evolutionary Leader by the
            Source of Synergy Foundation.
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
            Through LightNet, she has created pioneering consciousness labs
            including the Spoon Bending Lab, the Starseed Academy Levitation
            Lab, and Contact Lab, each designed as a live inquiry into the
            untapped capacities of human awareness, intention, and
            collective field intelligence. In the Spoon Bending Lab alone,
            she has personally taught more than 950 people to bend spoons
            with their minds.
          </p>
          <p style={{ marginBottom: "20px" }}>
            The research software in the think tank allows the world to hone
            in on the core algorithms that break through limitations. The
            Leap Maps lead to a living library, the world&apos;s first open
            data commons for consciousness research.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Zenka is also the creator of the Holomovement Purpose Lab, an
            experiential pathway for discovering and embodying one&apos;s
            unique purpose. The Awaken Your Purpose podcast features over
            149K downloads and counting, highlighting the breakthroughs of
            more than 100 passionate people. These interviews have turned
            into research papers, small-group applied research labs, and a
            film in development.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Before founding LightNet, Zenka built an international art and
            technology career at the intersection of virtual reality,
            augmented reality, XR, public art, and future culture. Her
            professional art practice centered on AR printmaking and ceramic
            raku sculptures depicting the history of virtual reality
            headsets, turning emerging technology into mythic artifacts from
            the future-past. She was a featured participant in The Art of VR
            conference at Sotheby&apos;s in New York and in the Institute of
            Contemporary Art, Los Angeles augmented-reality programming. Her
            award-winning work has been exhibited in the United States,
            Argentina, and Europe, including at FIG Bilbao, and is held in
            collections such as The Tech Interactive and the Delta terminal
            at John F. Kennedy International Airport. She also delivered a
            TEDxJacksonHole talk on virtual and augmented reality.
          </p>
          <p style={{ marginBottom: "20px" }}>
            After residencies in Los Angeles, Chicago, New York City, and
            Argentina, she is now based in Sedona, Arizona. Zenka is also
            the architect of the Dream Machine, a living experiment in new
            economies, contributionism, conscious capital, and joy-filled
            civilization design. Through the Dream Machine, over $1.5
            million has been raised and granted toward visionary prototypes
            spanning sustainable fashion labs, collaborative media studios,
            water research, cultural experiments, and Indigenous-led
            initiatives around the world.
          </p>
          <p style={{ marginBottom: "20px", fontWeight: 600 }}>
            Zenka&apos;s larger mission is to accelerate humanity&apos;s
            awakening by turning the impossible into the inevitable. She is
            building a metaverse of human potential, powered by citizen
            scientists, collective intelligence, evidence-based wonder, and
            the deep knowing that we are more than we have been told. Her
            work invites people to stop waiting for the future and start
            building the next world together.
          </p>
        </div>

        {/* LIGHTNET CALLOUT */}
        <a
          href="https://www.lightnet.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginTop: "48px",
            padding: "32px 28px",
            background: "var(--color-ink)",
            color: "var(--color-white)",
            textDecoration: "none",
            border: "3px solid var(--color-ink)",
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
              marginBottom: "12px",
            }}
          >
            LightNet Consciousness Think Tank
          </div>
          <div
            style={{
              fontFamily: "var(--font-inter-tight), sans-serif",
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            lightnet.org →
          </div>
        </a>

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
              href="https://thedreammachine.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ink)", textDecoration: "underline" }}
            >
              thedreammachine.org ↗
            </a>
            <a
              href="https://www.lightnet.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ink)", textDecoration: "underline" }}
            >
              lightnet.org ↗
            </a>
            <a
              href="https://fashionlabsedona.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-ink)", textDecoration: "underline" }}
            >
              fashionlabsedona.com ↗
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
            href="/"
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
            ← Back to home
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

      {/* PORTRAITS — 12 images of Zenka (11 portraits + 1 press).
          Excludes zenka-portrait-04 (NASA astronaut) and
          zenka-artwork-01 (infinity mirror) per user request. */}
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
          The artist · 12 portraits
        </div>
        <h2
          className="section-display"
          style={{
            fontSize: "clamp(36px, 4.5vw, 64px)",
            marginBottom: "48px",
          }}
        >
          Zenka Metaverse <em>Architect.</em>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="portraits-grid"
        >
          {[
            "/images/about/portraits/zenka-portrait-11.jpg", // Force of Nature VR
            "/images/about/portraits/zenka-portrait-01.jpg", // green checker RoVR
            "/images/about/portraits/zenka-portrait-03.jpg", // EEG cap
            "/images/about/portraits/zenka-portrait-07.jpg", // archery (MOVED to 4)
            "/images/about/portraits/zenka-portrait-12.jpg", // UFO wall grey/gold (moved up)
            "/images/about/portraits/zenka-press-01.jpg",    // camera crew (moved up)
            "/images/about/portraits/zenka-portrait-06.jpg", // purple goggles
            "/images/about/portraits/zenka-portrait-08.jpg", // Breo VR
            "/images/about/portraits/zenka-portrait-09.jpg", // wearable haptic
            "/images/about/portraits/zenka-portrait-10.jpg", // mosaic background
            "/images/about/portraits/zenka-portrait-02.jpg", // green polka shirt VR (second-to-last)
            "/images/about/portraits/zenka-portrait-05.jpg", // child at 7 (last)
          ].map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                background: "var(--color-ink)",
                overflow: "hidden",
                border: "3px solid var(--color-ink)",
              }}
            >
              <Image
                src={src}
                alt={`Zenka — portrait ${i + 1}`}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-page-grid { grid-template-columns: 1fr !important; }
          .about-page-cell { padding: 40px 24px !important; border-left: none !important; border-top: 3px solid var(--color-ink); }
          .portraits-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .portraits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
