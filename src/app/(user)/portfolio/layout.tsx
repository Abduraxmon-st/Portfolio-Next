import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { defaultLocale } from "@/seo/config";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(defaultLocale, "/portfolio");
}

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
