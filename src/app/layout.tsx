import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css"
import {
  generatePageMetadata,
  generateWebsiteJsonLd,
  generateOrganizationJsonLd,
  generatePersonJsonLd,
} from "@/lib/metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata: Metadata = {
//   title: "Abduraxmon Tojixo'jayev - Frontend Developer",
//   description: "Building reliable and intuitive digital experiences using React and Next.js. Passionate about writing clean code and improving frontend architecture.",
// };

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonJsonLd()),
          }}
        />
      </head>
      <body suppressContentEditableWarning suppressHydrationWarning className={`${poppins.variable} ${inter.variable} antialiased relative`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
