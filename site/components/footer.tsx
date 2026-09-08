export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-white)",
        borderTop: "3px solid var(--color-ink)",
        padding: "32px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: "12px",
        color: "var(--color-muted)",
        letterSpacing: "0.04em",
      }}
      className="footer-grid"
    >
      <div>
        Sedona, AZ ·{" "}
        <a
          href="https://instagram.com/zenkacaro"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-red)", textDecoration: "underline" }}
        >
          Instagram
        </a>
      </div>
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--font-inter-tight), sans-serif",
          fontSize: "18px",
          fontWeight: 800,
          color: "var(--color-ink)",
          letterSpacing: "-0.02em",
        }}
      >
        Zenka 2038 Caro<span style={{ color: "var(--color-red)" }}>.</span>
      </div>
      <div style={{ textAlign: "right" }}>
        © 2026 ·{" "}
        <a
          href="https://zenka.us5.list-manage.com/subscribe?u=8ca585567b2039640781b2293&id=6706983f46"
          style={{ color: "var(--color-red)", textDecoration: "underline" }}
        >
          subscribe to the list
        </a>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
            padding: 24px 20px !important;
            text-align: center;
          }
          .footer-grid > div { text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
