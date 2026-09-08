import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { artBodies } from "@/lib/art";
import { pastExperiences } from "@/lib/past";

const BASE = "https://zenka.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static high-priority routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/press`,   lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Programs / projects (/work/[slug])
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Art bodies (/art/[slug])
  const artRoutes: MetadataRoute.Sitemap = artBodies.map((a) => ({
    url: `${BASE}/art/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Past experiences (/past/[slug])
  const pastRoutes: MetadataRoute.Sitemap = pastExperiences.map((p) => ({
    url: `${BASE}/past/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...artRoutes, ...pastRoutes];
}
