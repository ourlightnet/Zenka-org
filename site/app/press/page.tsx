import Link from "next/link";
import {
  talks,
  interviews,
  printPress,
  featuredPrint,
  type PressEntry,
} from "@/lib/press";

export const metadata = {
  title: "Press & Media — Zenka Caro",
  description:
    "Press coverage of Zenka Caro and LightNet: Forbes, Sotheby's, TEDxJacksonHole, Venture Beat, Upload VR, AP News, ICA LA, FIG Bilbao, Wyoming Public Radio. Talks, podcasts, films, interviews, and print press from 2015 to present.",
  keywords: [
    "Zenka Caro press",
    "Zenka Caro media",
    "LightNet press kit",
    "Forbes Zenka",
    "Sotheby's Art of VR",
    "TEDxJacksonHole augmented reality",
    "consciousness research press",
    "spoon bending media",
    "FADE TO BLACK Zenka",
    "Awaken Your Purpose podcast",
    "Holomovement press",
    "purpose research AP News",
    "Mind the Product keynote",
    "Sedona consciousness press",
  ],
  openGraph: {
    title: "Press & Media — Zenka Caro",
    description:
      "Forbes, Sotheby's, TEDxJacksonHole, Venture Beat, AP News, FIG Bilbao and more. Talks, podcasts, films, and print press.",
    images: ["/images/Zenka-Caro-Portrait.jpg"],
  },
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

      <FeaturedAtBlock
        label="As featured at"
        outlets={["Forbes", "Sotheby's New York", "TEDx Jackson Hole", "IONS"]}
      />
      <FeaturedMedia />

      <PullQuote
        quote="A futurist … a thought leader in the future of extended reality, big-picture thinking and exponential change."
        attribution="Charlie Fink · Editor, Convergence (2019)"
      />

      <PressSection
        title="Featured Press"
        entries={featuredPrint}
        hideThumbnails
        noSort
      />

      <PressSection title="Print & Digital" entries={printPress} hideThumbnails />

      <FeaturedAtBlock
        label="Also seen at"
        outlets={["Upload VR", "Venture Beat", "Road to VR", "The Tech Interactive"]}
      />

      <PressSection title="Podcast, TV, Film & Radio" entries={interviews} />

      <PullQuote
        quote="L.A. storytelling futurists use augmented reality to turn the tables on Black Mirror."
        attribution="MediaShift · April 2017"
      />

      <PressSection title="Talks & Keynotes" entries={talks} hideThumbnails />

      <FeaturedAtBlock
        label="Press and Venues"
        outlets={["FADE TO BLACK", "Delta JFK", "ICA Los Angeles", "Wyoming Public Radio"]}
      />

      <PastExperiences />

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

// FeaturedAtBlock — a full-width red banner with outlets flowing
// horizontally (like the homepage press band), with white separator dots
// between names. Wraps gracefully on smaller screens.
function FeaturedAtBlock({
  label,
  outlets,
}: {
  label: string;
  outlets: string[];
}) {
  return (
    <section
      style={{
        borderTop: "3px solid var(--color-ink)",
        background: "var(--color-red)",
        color: "var(--color-white)",
        padding: "56px 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-white)",
            opacity: 0.85,
            marginBottom: "20px",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            color: "var(--color-white)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "baseline",
            columnGap: "20px",
            rowGap: "8px",
          }}
        >
          {outlets.map((outlet, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "baseline", gap: "20px" }}
            >
              <span>{outlet}</span>
              {i < outlets.length - 1 ? (
                <span
                  aria-hidden="true"
                  style={{
                    color: "var(--color-white)",
                    opacity: 0.55,
                    fontWeight: 400,
                  }}
                >
                  /
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// PullQuote — a centered red-accent quote callout, used between sections to
// add visual rhythm and surface strong press language.
function PullQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <section
      style={{
        borderTop: "3px solid var(--color-ink)",
        background: "var(--color-red)",
        color: "var(--color-white)",
        padding: "72px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          &ldquo;{quote}&rdquo;
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          — {attribution}
        </div>
      </div>
    </section>
  );
}

function FeaturedMedia() {
  const featured = [
    {
      videoId: "2FA-IuDTMjE",
      title: "Can Augmented Reality Bring Us to the Wisdom Age",
      source: "TEDx Jackson Hole · 2016",
    },
    {
      videoId: "9Am9MsZWHHI",
      title: "Asheville Wave: The 7 Stages of Purpose",
      source: "Holomovement · 2025",
    },
    {
      videoId: "wXevLd1v1Jg",
      title: "Contacting ET (Ep. 2264)",
      source: "FADE TO BLACK Radio · 2026",
    },
    {
      videoId: "qHeEsvSBXQ0",
      title: "Past Forward Tech Live Keynote",
      source: "National Trust for Historic Preservation · 2017",
    },
    {
      videoId: "4XStJ8zHwxs",
      title: "Successful App Ideas in AR, MR, and VR 2.0",
      source: "AWE — Augmented Reality World Expo · 2017",
    },
    {
      videoId: "5OX0zZFUFmA",
      title: "Plumbing a Tipping Point in the Consciousness Movement",
      source: "Institute of Noetic Sciences · 2019",
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

// Parse the human-readable date string on a PressEntry into a sortable
// timestamp. Handles ranges ("May 23-27, 2024"), compound dates
// ("December 12 & 19, 2020"), abbreviated months ("Sept"), year-only
// ("2019"), and special markers like "Featured" / "Ongoing" (pushed to
// the bottom of the list with -Infinity).
function parseDateForSort(dateStr: string): number {
  if (!dateStr) return -Infinity;
  const lower = dateStr.toLowerCase().trim();
  if (lower === "featured" || lower === "ongoing" || lower === "tbd") {
    return -Infinity;
  }

  let cleaned = dateStr
    .replace(/\bSept\b/g, "Sep")           // Sept → Sep (Date.parse-safe)
    .replace(/\s*&\s*\d+/g, "")            // "12 & 19" → "12"
    .trim();

  // Handle ranges: "May 23-27, 2024", "September 26 - October 31, 2026"
  if (/[-–]/.test(cleaned)) {
    const parts = cleaned.split(/\s*[-–]\s*/);
    const firstPart = parts[0].trim();
    const lastPart = parts[parts.length - 1].trim();
    if (/\b\d{4}\b/.test(firstPart)) {
      cleaned = firstPart;
    } else {
      const yearMatch = lastPart.match(/\b\d{4}\b/);
      cleaned = yearMatch ? `${firstPart}, ${yearMatch[0]}` : firstPart;
    }
  }

  const parsed = Date.parse(cleaned);
  if (!isNaN(parsed)) return parsed;

  // Just a year
  if (/^\d{4}$/.test(cleaned)) {
    return Date.parse(`${cleaned}-12-31`);
  }

  return -Infinity;
}

function PressSection({
  title,
  entries,
  hideThumbnails,
  noSort,
}: {
  title: string;
  entries: PressEntry[];
  hideThumbnails?: boolean;
  noSort?: boolean;
}) {
  // Sort newest first by parsed date. Stable sort preserves source order
  // for entries with identical timestamps (e.g. two talks on the same day).
  // noSort=true preserves the source order (used for the curated Featured
  // Press section where order is editorial, not chronological).
  const sortedEntries = noSort
    ? entries
    : [...entries].sort(
        (a, b) => parseDateForSort(b.date) - parseDateForSort(a.date)
      );

  return (
    <section style={{ borderTop: "3px solid var(--color-ink)" }}>
      <div
        style={{
          padding: "56px 32px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
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
        {sortedEntries.map((e, i) => (
          <PressItem key={i} entry={e} hideThumbnail={hideThumbnails} />
        ))}
      </div>
    </section>
  );
}

// Extract a YouTube video ID from any YouTube URL variant:
//   youtube.com/watch?v=ID  · youtu.be/ID  · youtube.com/embed/ID
function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function PressItem({
  entry: e,
  hideThumbnail,
}: {
  entry: PressEntry;
  hideThumbnail?: boolean;
}) {
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

  const ytId = extractYouTubeId(e.url);
  // YouTube videos get auto-thumbnails from i.ytimg.com.
  // Print/PDF press entries use entry.thumbnail (a /images/press/... path).
  // hideThumbnail=true forces text-only rendering (used in Talks & Keynotes).
  const thumbnail = hideThumbnail
    ? null
    : ytId
    ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`
    : e.thumbnail ?? null;
  const isVideo = !!ytId;

  return (
    <Wrapper>
      <div
        style={{
          padding: "24px 0",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          display: "grid",
          gridTemplateColumns: "140px 1fr",
          gap: "24px",
          alignItems: "flex-start",
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
            paddingTop: thumbnail ? "4px" : "2px",
          }}
        >
          {e.date}
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}
          className="press-content"
        >
          {thumbnail ? (
            <div
              className="press-thumb"
              style={{
                position: "relative",
                flexShrink: 0,
                width: "180px",
                aspectRatio: "16 / 9",
                background: "var(--color-ink)",
                overflow: "hidden",
                border: "2px solid var(--color-ink)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnail}
                alt=""
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Play icon overlay — only on video entries */}
              {isVideo ? (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "var(--color-red)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-white)",
                      fontSize: "16px",
                      paddingLeft: "4px",
                    }}
                  >
                    ▶
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          <div style={{ flex: 1, minWidth: 0 }}>
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
        </div>
        <style>{`
          .press-item-link:hover .press-row { background: var(--color-red-soft); }
          .press-item-link:hover h3 { color: var(--color-red); }
          @media (max-width: 640px) {
            .press-row { grid-template-columns: 1fr !important; gap: 6px !important; }
            .press-content { flex-direction: column !important; gap: 12px !important; }
            .press-thumb { width: 100% !important; }
          }
        `}</style>
      </div>
    </Wrapper>
  );
}

type PEArchive = {
  slug: string;
  title: string;
  description: string;
  image: string | null;
  href: string;
};

const PE_ARCHIVES: PEArchive[] = [
  {
    slug: "yofu",
    title: "Ye Olde Futurist Union",
    description:
      "A debate club for the galactic age. Oxford-style debates on AI, cryptocurrency, genetic engineering, and what comes next.",
    image: "/images/past/ye-old-futurist-union-la/thumb.jpg",
    href: "/past/yofu",
  },
  {
    slug: "white-mirror",
    title: "White Mirror",
    description:
      "A create-a-thon where 150 people envisioned positive futures through storytelling, as a Black Mirror counterpoint.",
    image: "/images/past/white-mirror/youtube.jpg",
    href: "/past/white-mirror",
  },
  {
    slug: "triple-smart-labs",
    title: "Triple Smart Labs",
    description:
      "An innovation lab network empowering citizen-driven science through shared hardware and collaborative research across distributed nodes.",
    image: "/images/past/triple-smart-labs/Triple_Smart_Labs_-_8.jpg",
    href: "/past/triple-smart-labs",
  },
  {
    slug: "harmonic-convergence",
    title: "Harmonic Convergence 2020",
    description:
      "A citizen science experiment where 72,000 people from 152 countries meditated together for contact and peace.",
    image: "/images/past/thc2020/2_-_THC_square_1.jpg",
    href: "/past/harmonic-convergence",
  },
  {
    slug: "remote-controls",
    title: "Remote Controls",
    description:
      "Raku-fired clay remote controls with gold-leaf buttons, brought alive by augmented reality overlays.",
    image: "/images/past/remote-controls/001b-Zenka-AR-Remote-28-Composite.jpg",
    href: "/art/remote-controls",
  },
  {
    slug: "interdimensional",
    title: "Interdimensional Travel Agency",
    description:
      "An NFT collection reframing travel as movement between states of consciousness, not places.",
    image: "/images/past/inter-dimensional-travel-agency/Zenka-Caro-NFT-Interdimensional-Travel-Agency.mp4",
    href: "/past/interdimensional",
  },
];

function PEArchiveCard({ archive }: { archive: PEArchive }) {
  const isVideo = archive.image
    ? /\.(mp4|webm)$/i.test(archive.image)
    : false;
  return (
    <Link
      href={archive.href}
      className="pe-card"
      style={{
        border: "3px solid var(--color-ink)",
        background: "var(--color-white)",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s",
      }}
    >
      <div
        style={{
          aspectRatio: "4 / 3",
          background: "var(--color-ink)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {archive.image ? (
          isVideo ? (
            <video
              src={archive.image}
              muted
              loop
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={archive.image}
              alt={archive.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, var(--color-red), var(--color-ink))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-white)",
              fontFamily: "var(--font-inter-tight), sans-serif",
              fontSize: "72px",
              fontWeight: 900,
            }}
          >
            {archive.title.charAt(0)}
          </div>
        )}
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: "10px",
          }}
        >
          Archive →
        </div>
        <h3
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "10px",
          }}
        >
          {archive.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.5,
            color: "var(--color-muted)",
          }}
        >
          {archive.description}
        </p>
      </div>
    </Link>
  );
}

function PastExperiences() {
  return (
    <section
      style={{
        borderTop: "3px solid var(--color-ink)",
        padding: "80px 32px",
        background: "var(--color-white)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto 40px" }}>
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
          § Past Experiences
        </div>
        <h2
          className="section-display"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Twenty years of <em>experiments.</em>
        </h2>
        <p
          style={{
            marginTop: "20px",
            maxWidth: "720px",
            color: "var(--color-muted)",
            fontSize: "16px",
            lineHeight: 1.55,
          }}
        >
          Past projects, salons, debate clubs, citizen science, and AR drops.
          Each card opens its full story.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
        className="pe-grid"
      >
        {PE_ARCHIVES.map((a) => (
          <PEArchiveCard key={a.slug} archive={a} />
        ))}
      </div>
      <style>{`
        .pe-card:hover { transform: translateY(-4px); }
        @media (max-width: 900px) {
          .pe-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .pe-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
