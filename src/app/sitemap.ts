import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { slugify } from "@/hooks/useSlugify";
import { getAbsoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const allProjectImages = [
    ...new Set(projects.flatMap((project) => project.images)),
  ].map(getAbsoluteUrl);

  const pages: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [getAbsoluteUrl("/favicon-logo.png"), ...allProjectImages],
    },
    {
      url: getAbsoluteUrl("/portfolio"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: allProjectImages,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: getAbsoluteUrl(`/portfolio/${slugify(p.title)}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
    images: p.images.map(getAbsoluteUrl),
  }));

  return [...pages, ...projectPages];
}
