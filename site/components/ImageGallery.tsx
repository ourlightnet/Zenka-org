"use client";

import { useEffect, useState } from "react";

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export default function ImageGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "10px",
        }}
      >
        {images.map((src, i) => {
          const video = isVideo(src);
          return (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(src)}
              aria-label={`Open image ${i + 1}`}
              style={{
                padding: 0,
                border: "none",
                background: "var(--color-ink)",
                cursor: "zoom-in",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                position: "relative",
                display: "block",
              }}
            >
              {video ? (
                <video
                  src={src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.94)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
          }}
        >
          {isVideo(active) ? (
            <video
              src={active}
              controls
              autoPlay
              loop
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={active}
              alt=""
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </div>
      ) : null}
    </>
  );
}
