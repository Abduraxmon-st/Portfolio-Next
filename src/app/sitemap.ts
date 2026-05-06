import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { slugify } from "@/hooks/useSlugify";
import { locales, defaultLocale, localizePathname } from "@/seo/config";
import { getAbsoluteUrl } from "@/lib/metadata";

function buildUrl(loc: string) {
  return (path: string) => {
    const localized = localizePathname(path, loc as typeof defaultLocale);
    return getAbsoluteUrl(localized);
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/portfolio"];

  const urls: MetadataRoute.Sitemap = [];

  for (const loc of locales) {
    const toUrl = buildUrl(loc);

    for (const page of pages) {
      urls.push({
        url: toUrl(page),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "/" ? 1 : 0.9,
      });
    }

    for (const p of projects) {
      urls.push({
        url: toUrl(`/portfolio/${slugify(p.title)}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return Array.from(new Map(urls.map((item) => [item.url, item])).values());
}