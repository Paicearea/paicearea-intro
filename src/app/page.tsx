import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BlogSection from "@/components/sections/BlogSection";
import ProfileSection from "@/components/sections/ProfileSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { socials } from "@/content/socials";
import { getLatestPosts } from "@/lib/rss";

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getLatestPosts();

  return (
    <main>
      <Navbar />
      <ProfileSection profile={profile} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <BlogSection posts={posts} />
      <Footer socials={socials} />
    </main>
  );
}
