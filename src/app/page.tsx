import Navbar from "@/components/common/Navbar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/common/Footer";
import SkillsSection from "@/components/sections/SkillsSection";
import BlogSection from "@/components/sections/BlogSection";
import ProfileSection from "@/components/sections/ProfileSection";

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
