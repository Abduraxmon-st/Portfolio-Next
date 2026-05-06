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

export async function GET() {
  const base = getAbsoluteUrl("/");
  const pages = ["/", "/portfolio"];

  // add project slugs
  const projectSlugs = projects.map((p) => `/${slugify(p.title)}`);

  const urls: string[] = [];

  for (const loc of locales) {
    const toUrl = buildUrl(loc);

    for (const page of pages) {
      urls.push(toUrl(page));
    }

    for (const slug of projectSlugs) {
      urls.push(toUrl(`/portfolio${slug}`));
    }
  }

  // dedupe
  const unique = Array.from(new Set(urls));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${unique
    .map(
      (u) => `  <url>\n    <loc>${u}</loc>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=0, s-maxage=3600" },
  });
}
