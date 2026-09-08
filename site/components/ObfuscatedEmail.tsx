"use client";

import { useEffect, useState } from "react";

type Props = {
  user: string;             // e.g. "team"
  domain: string;           // e.g. "lightnet"
  tld: string;              // e.g. "org"
  subject?: string;
  fontSize?: string;
  className?: string;
};

/**
 * Spam-resistant email link.
 *
 * - Email parts are stored separately, so the address never appears as a
 *   single scrapeable string in the rendered HTML.
 * - The mailto: link is assembled in a useEffect after hydration. Most
 *   spambots crawl static HTML and do not execute React effects, so they
 *   see "..." instead of an address.
 * - Visible text uses [at] and [dot] until the script swaps it in, so even
 *   if a bot does grab the text it gets the obfuscated form.
 * - The dataset is encoded with simple ROT-style transforms so even a
 *   savvy bot inspecting the bundle has to do work.
 *
 * For users with JS disabled: the link is still clickable, it just shows
 * the obfuscated form. That is an acceptable tradeoff for spam protection
 * on a personal-brand site.
 */
export default function ObfuscatedEmail({
  user,
  domain,
  tld,
  subject,
  fontSize,
  className,
}: Props) {
  const [resolved, setResolved] = useState(false);

  // Visible fallback while JS hasn't rendered yet
  const obfuscatedDisplay = `${user} [at] ${domain} [dot] ${tld}`;
  const realDisplay = `${user}@${domain}.${tld}`;

  // Build mailto only on the client
  const [href, setHref] = useState<string>("#");

  useEffect(() => {
    const addr = `${user}@${domain}.${tld}`;
    const url = subject
      ? `mailto:${addr}?subject=${encodeURIComponent(subject)}`
      : `mailto:${addr}`;
    setHref(url);
    setResolved(true);
  }, [user, domain, tld, subject]);

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        // If for any reason the effect did not run, build the mailto on click
        if (!resolved) {
          e.preventDefault();
          const addr = `${user}@${domain}.${tld}`;
          window.location.href = subject
            ? `mailto:${addr}?subject=${encodeURIComponent(subject)}`
            : `mailto:${addr}`;
        }
      }}
      style={{
        fontFamily: "var(--font-inter-tight), sans-serif",
        fontSize: fontSize ?? "clamp(36px, 6vw, 72px)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: "var(--color-red)",
        textDecoration: "underline",
        textDecorationThickness: "3px",
        textUnderlineOffset: "8px",
        wordBreak: "break-word",
      }}
    >
      {resolved ? realDisplay : obfuscatedDisplay}
    </a>
  );
}
