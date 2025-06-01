"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const [content, setContent] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    fetch("/content/skills.mdx")
      .then((res) => res.text())
      .then(async (text) => {
        const matter = await import("gray-matter");
        const { content } = matter.default(text);
        const { serialize } = await import("next-mdx-remote/serialize");
        const mdx = await serialize(content);
        setContent(mdx);
      });
  }, []);

  if (!content) return null;

  return (
    <motion.section
      id="skills"
      className="min-h-screen py-24 px-6 bg-[var(--background)] transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          ⚒️ Skills
        </h2>
        <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300">
          <MDXRemote {...content} />
        </div>
      </div>
    </motion.section>
  );
}
