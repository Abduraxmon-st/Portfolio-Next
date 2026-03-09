import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css"

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

export const metadata: Metadata = {
  title: "Abduraxmon Tojixo'jayev - Frontend Developer",
  description: "Building reliable and intuitive digital experiences using React and Next.js. Passionate about writing clean code and improving frontend architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon-logo.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-logo.svg" type="image/x-icon" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased relative`}
      // style={{ cursor: "none", overflow: "unset" }}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
