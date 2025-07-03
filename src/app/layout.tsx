import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/app/theme-provider";

// 서버 컴포넌트용 generateMetadata
export const metadata: Metadata = {
  title: "Paicearea",
  description: "프론트엔드 개발자 Paicearea의 개인 프로필입니다.",
  openGraph: {
    title: "Paicearea",
    description: "프론트엔드 개발자 Paicearea의 개인 프로필입니다.",
    type: "website",
    images: [
      {
        url: "https://paicearea-intro.vercel.app/images/avatar.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paicearea",
    description: "프론트엔드 개발자 Paicearea의 개인 프로필입니다.",
    images: ["https://paicearea-intro.vercel.app/images/avatar.png"],
  },
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
