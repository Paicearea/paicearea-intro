import type { Metadata, Viewport } from "next";
import Script from "next/script";
import ThemeProvider from "@/app/theme-provider";
import { site } from "@/content/site";
import "./globals.css";

const themeScript = `
try {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
} catch (_) {}
`;

const pretendardStylesheet =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    url: site.url,
    images: [
      {
        url: "/images/avatar.png",
        width: 576,
        height: 576,
        alt: "Paicearea avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: ["/images/avatar.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href={pretendardStylesheet}
        />
      </head>
      <body className="min-h-screen">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
