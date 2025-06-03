"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function AboutContent() {
  const [content, setContent] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    fetch("/content/about.mdx")
      .then((res) => res.text())
      .then(async (text) => {
        const matter = await import("gray-matter");
        const { content } = matter.default(text);
        const { serialize } = await import("next-mdx-remote/serialize");
        const mdx = await serialize(content);
        setContent(mdx);
      });
  }, []);

  if (!content) return <p>로딩 중...</p>;

  return (
    <div className="prose dark:prose-invert text-sm md:text-base">
      <MDXRemote {...content} />
    </div>
  );
}
