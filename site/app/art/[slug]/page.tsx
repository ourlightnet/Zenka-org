import { notFound } from "next/navigation";
import Link from "next/link";

const ART_ITEMS: Record<string, { title: string; tagline: string }> = {
  "ar-linocuts": {
    title: "AR Linocuts",
    tagline: "Hand-pulled prints, augmented.",
  },
  "ar-raku-headsets": {
    title: "AR Raku Headsets",
    tagline: "A timeline of head-mounted hardware, fired in raku clay.",
  },
  "words-of-the-future": {
    title: "Words of the Future",
    tagline: "Coining a vocabulary for what does not yet have a name.",
  },
  "remote-controls": {
    title: "Remote Controls",
    tagline:
      "Raku-fired clay remote controls with gold-leaf buttons, brought alive in AR.",
  },
  "street-art": {
    title: "Street Art",
    tagline: "Out where the public lives.",
  },
  "ar-murals": {
    title: "AR Murals",
    tagline: "Large-scale public works that come alive through a phone.",
  },
};

export function generateStaticParams() {
  return Object.keys(ART_ITEMS).map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const item = ART_ITEMS[slug];
  if (!item) return { title: "Not found · Zenka Caro" };
  return { title: `${item.title} · Zenka Caro`, description: item.tagline };
}

export default async function ArtPage({ params }: Params) {
  const { slug } = await params;
  const item = ART_ITEMS[slug];
  if (!item) notFound();

  return (
    <>
      <section
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "80px 32px 64px",
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
            marginBottom: "16px",
          }}
        >
          § Artwork
        </div>
        <h1
          className="headline-display"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            marginBottom: "24px",
          }}
        >
          {item.title}
        </h1>
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.5,
            color: "var(--color-muted)",
            maxWidth: "640px",
            marginBottom: "48px",
          }}
        >
          {item.tagline}
        </p>

        <div
          style={{
            border: "3px solid var(--color-ink)",
            padding: "48px 32px",
            background: "var(--color-red-soft, #fff2f3)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-red)",
              marginBottom: "12px",
            }}
          >
            Coming soon
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "var(--color-ink)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            The full collection page is being built. Photos and the story land
            here.
          </p>
        </div>

        <div style={{ marginTop: "56px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-red)",
            }}
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
