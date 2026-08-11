import type { SkillsContent } from "@/types/content";

export const skills: SkillsContent = {
  title: "Skills",
  categories: [
    {
      title: "Core Frontend",
      description: "사용자 화면을 빠르게 만들고 안정적으로 유지하는 기술",
      items: ["React", "React Native", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      title: "Build & Tooling",
      description: "개발 속도와 배포 품질을 높이는 도구",
      items: ["Webpack", "Vite", "Pnpm", "Electron", "Docker"],
    },
    {
      title: "Styling",
      description: "컴포넌트 단위의 일관된 UI 구현",
      items: ["Tailwind CSS", "Styled-Components", "Emotion"],
    },
    {
      title: "Product & Design",
      description: "기획 의도를 화면 경험으로 연결하는 협업 역량",
      items: ["Figma", "Jira", "Notion", "GitHub Actions", "Vercel"],
    },
  ],
};
