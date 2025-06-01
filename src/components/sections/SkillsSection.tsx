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
    <section
      id="skills"
      className="min-h-screen py-24 px-6 bg-[var(--background)] transition-colors duration-300"
    >
      <motion.div
        className="max-w-3xl mx-auto p-8 rounded-2xl shadow transition-colors duration-300"
        style={{ backgroundColor: "#FAF6E9" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#A0C878" }}
        >
          ⚒️ Skills
        </h2>
        <div className="prose prose-lg text-gray-700 dark:text-gray-300">
          <MDXRemote {...content} />
        </div>
      </motion.div>

      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          #skills > div {
            background-color: #1a1a1a !important;
          }

          #skills h2 {
            color: #ddeb9d !important;
          }
        }
      `}</style>
    </section>
  );
}
