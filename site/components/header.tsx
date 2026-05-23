import Link from "next/link";

export function Header() {
  return (
    <header
      className="flex justify-between items-center bg-white"
      style={{
        borderBottom: "3px solid var(--color-ink)",
        padding: "16px 32px",
      }}
    >
      <Link
        href="/"
        className="font-[var(--font-inter-tight)]"
        style={{
          fontWeight: 800,
          fontSize: "22px",
          letterSpacing: "-0.02em",
        }}
      >
        Zenka Caro<span style={{ color: "var(--color-red)" }}>.</span>
      </Link>

      <nav
        className="hidden md:flex"
        style={{
          gap: "28px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "12px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        <NavLink href="/about">About</NavLink>
        <NavLink href="/press">Press</NavLink>
      </nav>

      <Link
        href="/contact"
        style={{
          background: "var(--color-red)",
          color: "var(--color-white)",
          padding: "10px 18px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          transition: "background 0.15s",
        }}
        className="hover:[background:var(--color-red-deep)]"
      >
        Get in touch
      </Link>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        padding: "6px 0",
        borderBottom: "2px solid transparent",
        transition: "border-color 0.15s, color 0.15s",
      }}
      className="hover:[border-color:var(--color-red)] hover:[color:var(--color-red)]"
    >
      {children}
    </Link>
  );
}
