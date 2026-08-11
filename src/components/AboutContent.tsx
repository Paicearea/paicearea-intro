import { MDXRemote } from "next-mdx-remote/rsc";
import { getAboutContent } from "@/lib/mdx";

export default async function AboutContent() {
  const { content } = await getAboutContent();

  return <MDXRemote source={content} />;
}
