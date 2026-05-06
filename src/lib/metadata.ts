import type { Metadata } from "next";
import { defaultLocale, isLocale, type Locale } from "@/seo/config";
import { seo, type SeoKey } from "@/seo";

const siteName = "Tojixojayev Abduraxmon";
const siteUrl = "https://tojixojayev-abduraxmon.vercel.app"; // production URL
// logo path (use SVG favicon)
const organizationLogoPath = "/favicon-logo.svg";

// Public images grouped by folder
export const PUBLIC_IMAGES = {
  azera: [
    "/azera/azera1.jpg",
    "/azera/azera2.png",
    "/azera/azera3.png",
    "/azera/azera4.png",
    "/azera/azera5.png",
    "/azera/azera6.png",
    "/azera/azera7.png",
    "/azera/azera8.png",
    "/azera/azera9.png",
    "/azera/azera10.png",
    "/azera/azera11.png",
    "/azera/azera12.png",
    "/azera/azera13.png",
  ],
  dashdark: ["/dashdark/dashdark1.jpg"],
  elias: ["/elias/elias1.jpg"],
  interno: [
    "/interno/interno1.jpg",
    "/interno/interno2.png",
    "/interno/interno3.png",
    "/interno/interno4.png",
    "/interno/interno5.png",
  ],
  pharm: [
    "/pharm/pharm1.jpg",
    "/pharm/pharm2.jpg",
    "/pharm/pharm3.jpg",
    "/pharm/pharm4.jpg",
    "/pharm/pharm5.jpg",
    "/pharm/pharm6.jpg",
    "/pharm/pharm7.jpg",
    "/pharm/pharm8.jpg",
    "/pharm/pharm9.jpg",
    "/pharm/pharm10.jpg",
  ],
  robotics: [
    "/robotics/robotics1.jpg",
    "/robotics/robotics2.png",
    "/robotics/robotics3.png",
  ],
  uproject: [
    "/uproject/uproject1.jpg",
    "/uproject/uproject3.png",
    "/uproject/uproject4.png",
    "/uproject/uproject5.png",
    "/uproject/uproject6.png",
    "/uproject/uproject7.png",
  ],
};

// flattened list for Open Graph
const allPublicImages = [organizationLogoPath].concat(
  Object.values(PUBLIC_IMAGES).flat(),
);

const googleVerification = "GCWt88WcRHaOq69Rx6e_MARL11pWsOfsbfQAPbqOtsk";

const localeToOpenGraphLocale: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  uz: "uz_UZ",
};

const pathToSeoKey: Record<string, SeoKey> = {
  "/": "home",
  "1": "home",
  "/portfolio": "portfolio",
  "/not-found": "not-found",
};

function getMetadataBase() {
  if (!siteUrl) {
    return undefined;
  }

  try {
    return new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
  } catch {
    return undefined;
  }
}

export function getAbsoluteUrl(path: string) {
  const metadataBase = getMetadataBase();

  if (!metadataBase) {
    return path;
  }

  return new URL(path, metadataBase).toString();
}

function normalizeLocale(locale?: string | null): Locale {
  return locale && isLocale(locale) ? locale : defaultLocale;
}

function normalizePath(path?: string) {
  if (!path || path === "1") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export async function generatePageMetadata(
  locale: string = defaultLocale,
  path: string = "/",
  overrides?: Partial<Metadata>,
): Promise<Metadata> {
  const currentLocale = normalizeLocale(locale);
  const normalizedPath = normalizePath(path);
  const seoKey = pathToSeoKey[normalizedPath] ?? "home";
  const seoContent = seo[currentLocale][seoKey] ?? seo[defaultLocale][seoKey];
  const title = seoContent.title;
  const description = seoContent.description;
  const keywords = seoContent.keywords.slice(0, 30);
  const metadataBase = getMetadataBase();

  const base: Metadata = {
    applicationName: siteName,
    title,
    description,
    keywords,
    ...(metadataBase
      ? {
        metadataBase,
        alternates: {
          canonical: normalizedPath,
        },
      }
      : {}),
    verification: {
      google: googleVerification,
    },
    openGraph: {
      title,
      description,
      ...(metadataBase ? { url: normalizedPath } : {}),
      siteName,
      locale: localeToOpenGraphLocale[currentLocale],
      type: "website",
      images: allPublicImages.map((u) => ({ url: u, width: 1920, height: 1080, alt: siteName })),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    icons: {
      icon: [
        { url: organizationLogoPath, sizes: "180x180", type: "image/png" },
        { url: "/logo.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: "/logo.svg",
      apple: organizationLogoPath,
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  return { ...base, ...overrides };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: getAbsoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: getAbsoluteUrl(organizationLogoPath),
      contentUrl: getAbsoluteUrl(organizationLogoPath),
      width: 180,
      height: 180,
    },
  };
}

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: ["Tojixojayev Abduraxmon", "Tojixojayev-Abduraxmon", "Abduraxmon Tojixojayev", "Abduraxmon-Tojixojayev", "tojixojayev", "abduraxmon", "tojixojayev-abduraxmon"],
    url: getAbsoluteUrl("/"),
  };
}
