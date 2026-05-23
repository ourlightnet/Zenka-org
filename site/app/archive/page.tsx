import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import { archiveImages } from "@/lib/archive-images";

export const metadata = {
  title: "Archive · Zenka Caro",
  description:
    "Twenty years of work, pulled from across projects, talks, installations, and studios.",
};

export default function ArchivePage() {
  return (
    <>
      <section
        style={{
          padding: "80px 32px 48px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div className="kicker" style={{ marginBottom: "20px" }}>
          § Archive · {archiveImages.length} images
        </div>
        <h1 className="headline-display" style={{ marginBottom: "24px" }}>
          The full <em>archive</em>.
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.5,
            color: "var(--color-muted)",
            maxWidth: "720px",
          }}
        >
          Twenty years of work, pulled from across the projects, talks,
          installations, and studios. Click any image to view full size.
        </p>
        <p style={{ marginTop: "24px" }}>
          <Link
            href="/work/zenka-artwork"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-red)",
            }}
          >
            ← Back to AR Artwork
          </Link>
        </p>
      </section>
      <section
        style={{
          padding: "0 32px 80px",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <ImageGallery images={archiveImages} />
      </section>
    </>
  );
}
