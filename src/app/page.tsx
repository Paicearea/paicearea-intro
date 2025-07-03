import { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/common/Footer";
import SkillsSection from "@/components/sections/SkillsSection";
import BlogSection from "@/components/sections/BlogSection";
import ProfileSection from "@/components/sections/ProfileSection";

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

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
