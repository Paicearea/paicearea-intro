import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

type SkillsFrontMatter = {
  title: string;
};

export async function getSkillsContent(): Promise<{
  source: MDXRemoteSerializeResult;
  frontMatter: SkillsFrontMatter;
}> {
  const filePath = path.join(process.cwd(), "public", "content", "skills.mdx");
  const raw = await fs.readFile(filePath, "utf-8");
  const { content, data } = matter(raw);

  const mdxSource = await serialize(content);

  return {
    source: mdxSource,
    frontMatter: data as SkillsFrontMatter,
  };
}
