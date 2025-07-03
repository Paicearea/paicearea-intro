import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/app/theme-provider";

export const metadata: Metadata = {
  title: "paicearea",
  description: "paicearea – Personal Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
