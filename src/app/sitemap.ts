import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { slugify } from "@/hooks/useSlugify";
import { getAbsoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: "https://tojixojayev-abduraxmon.vercel.app",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getAbsoluteUrl("/portfolio"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: getAbsoluteUrl(`/portfolio/${slugify(p.title)}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...projectPages];
}