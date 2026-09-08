"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="bg-white"
      style={{
        borderBottom: "3px solid var(--color-ink)",
        position: "relative",
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ padding: "16px 32px" }}
      >
        <Link
          href="/"
          className="font-[var(--font-inter-tight)]"
          style={{
            fontWeight: 800,
            fontSize: "22px",
            letterSpacing: "-0.02em",
          }}
          onClick={() => setOpen(false)}
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

        <div
          className="items-center"
          style={{
            display: "flex",
            gap: "16px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <a
            href="https://instagram.com/zenkacaro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden md:inline-flex items-center hover:[color:var(--color-red)]"
            style={{
              gap: "6px",
              color: "var(--color-ink)",
              transition: "color 0.15s",
            }}
          >
            <InstagramIcon />
            Instagram
          </a>
          <Link
            href="/contact"
            style={{
              background: "var(--color-red)",
              color: "var(--color-white)",
              padding: "10px 18px",
              transition: "background 0.15s",
            }}
            className="hover:[background:var(--color-red-deep)]"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex md:hidden"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              padding: "8px",
              marginRight: "-8px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span style={barStyle(open, 0)} />
            <span style={barStyle(open, 1)} />
            <span style={barStyle(open, 2)} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col md:hidden"
          style={{
            borderTop: "1px solid var(--color-ink)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "13px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          <MobileLink href="/about" onNavigate={() => setOpen(false)}>
            About
          </MobileLink>
          <MobileLink href="/press" onNavigate={() => setOpen(false)}>
            Press
          </MobileLink>
          <a
            href="https://instagram.com/zenkacaro"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              color: "var(--color-ink)",
              borderTop: "1px solid var(--color-rule)",
            }}
          >
            <InstagramIcon />
            Instagram ↗
          </a>
        </nav>
      )}
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function barStyle(open: boolean, i: number): React.CSSProperties {
  return {
    display: "block",
    width: "22px",
    height: "2px",
    background: "var(--color-ink)",
    transition: "transform 0.2s, opacity 0.2s",
    transform:
      open && i === 0
        ? "translateY(7px) rotate(45deg)"
        : open && i === 2
          ? "translateY(-7px) rotate(-45deg)"
          : "none",
    opacity: open && i === 1 ? 0 : 1,
  };
}

function MobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      style={{
        padding: "16px 32px",
        borderTop: "1px solid var(--color-rule)",
        color: "var(--color-ink)",
      }}
    >
      {children}
    </Link>
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
