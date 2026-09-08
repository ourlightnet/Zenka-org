"use client";

import { useEffect } from "react";

/**
 * Animated favicon — plays a one-shot black→red transition on page load,
 * then sits at red.
 *
 * The frame-swap approach is the only animated-favicon technique that
 * actually works in modern browsers (Chrome, Safari, Firefox all support
 * dynamically swapping `<link rel="icon">` href). Animated GIFs, APNG,
 * and animated SVG favicons are all unreliable in 2026.
 *
 * Frames live at /favicon/frame-00.png through /favicon/frame-09.png.
 * The static fallback (red) lives at /favicon.ico and is served by
 * Next.js's app/favicon.ico convention for browsers before JS runs.
 */
export default function AnimatedFavicon() {
  useEffect(() => {
    // Don't animate if the user has reduced-motion turned on
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const FRAMES = 10;
    const TOTAL_MS = 800;     // total animation length
    const STEP_MS = TOTAL_MS / FRAMES;

    // Find or create the favicon <link> tag
    function getOrCreateLink(): HTMLLinkElement {
      let link = document.querySelector<HTMLLinkElement>(
        "link[rel~='icon']"
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      return link;
    }

    const link = getOrCreateLink();

    // Preload all frames so the animation is smooth (no flicker)
    const preloads: HTMLImageElement[] = [];
    for (let i = 0; i < FRAMES; i++) {
      const img = new window.Image();
      img.src = `/favicon/frame-${String(i).padStart(2, "0")}.png`;
      preloads.push(img);
    }

    if (prefersReducedMotion) {
      // Skip animation; just set to the final red frame
      link.type = "image/png";
      link.href = `/favicon/frame-09.png`;
      return;
    }

    // Run the animation
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < FRAMES; i++) {
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          link.type = "image/png";
          link.href = `/favicon/frame-${String(i).padStart(2, "0")}.png?v=1`;
        }, i * STEP_MS)
      );
    }

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
