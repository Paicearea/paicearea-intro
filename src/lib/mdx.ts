import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export async function getAboutContent() {
  const filePath = path.join(process.cwd(), "src", "content", "about.mdx");
  const raw = await fs.readFile(filePath, "utf-8");
  const { content, data } = matter(raw);

  return {
    content,
    frontMatter: {
      title: typeof data.title === "string" ? data.title : "About Me",
    },
  };
}
