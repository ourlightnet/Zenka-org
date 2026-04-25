export const metadata = { title: "About — Zenka Caro" };

export default function AboutPage() {
  return (
    <section
      style={{
        maxWidth: "880px",
        margin: "0 auto",
        padding: "80px 32px",
      }}
    >
      <h1 className="section-display" style={{ marginBottom: "32px" }}>
        About <em>Zenka.</em>
      </h1>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.65,
          color: "var(--color-muted)",
        }}
      >
        Placeholder. Long-form bio and PURPOSE statement go here. Pulling from
        content/bio-source.md.
      </p>
    </section>
  );
}
