export const metadata = { title: "Work — Zenka Caro" };

export default function WorkPage() {
  return (
    <section
      style={{
        maxWidth: "880px",
        margin: "0 auto",
        padding: "80px 32px",
      }}
    >
      <h1 className="section-display" style={{ marginBottom: "32px" }}>
        Work.
      </h1>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.65,
          color: "var(--color-muted)",
        }}
      >
        Placeholder. Index of all programs and art projects. Each links to its
        own /work/&lt;slug&gt; detail page.
      </p>
    </section>
  );
}
