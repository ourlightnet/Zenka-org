import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block working/raw image folders from indexing
        disallow: [
          "/images/_unsorted/",
          "/images/artwork-new/",
          "/images/articles/",
          "/images/Home Page 1500x1000/",
          "/images/New Home Page Art 700 /",
          "/images/New Hero Image Supages/",
          "/images/Podcast Thumbnails/",
        ],
      },
    ],
    sitemap: "https://zenka.org/sitemap.xml",
    host: "https://zenka.org",
  };
}
