export const metadata = { title: "Contact — Zenka Caro" };

export default function ContactPage() {
  return (
    <section
      style={{
        maxWidth: "880px",
        margin: "0 auto",
        padding: "80px 32px",
      }}
    >
      <h1 className="section-display" style={{ marginBottom: "32px" }}>
        Get in <em>touch.</em>
      </h1>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.65,
          color: "var(--color-muted)",
          marginBottom: "32px",
        }}
      >
        For speaking inquiries, partnerships, and serious collaboration on the
        work that&apos;s coming.
      </p>
      <a
        href="mailto:team@lightnet.org"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "16px",
          color: "var(--color-red)",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textDecoration: "underline",
        }}
      >
        team@lightnet.org
      </a>
    </section>
  );
}
