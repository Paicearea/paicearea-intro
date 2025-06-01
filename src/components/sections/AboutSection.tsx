"use client";

import { useEffect, useState } from "react";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [content, setContent] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/content/about.mdx");
      const raw = await res.text();
      const { content } = matter(raw);
      const serialized = await serialize(content);
      setContent(serialized);
    };
    load();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 bg-[var(--background)]"
    >
      <motion.div
        className="max-w-3xl mx-auto p-8 rounded-2xl shadow transition-colors"
        style={{ backgroundColor: "#FAF6E9", color: "#222" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }} // 진입 시기 명확히
      >
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#A0C878" }}
        >
          🙋‍♂️ About Me
        </h2>
        <div
          className="prose prose-lg mx-auto text-left"
          style={{ color: "#333" }}
        >
          {content && <MDXRemote {...content} />}
        </div>
      </motion.div>

      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          #about > div {
            background-color: #1a1a1a !important;
            color: #dcdcdc !important;
          }

          #about h2 {
            color: #ddeb9d !important;
          }

          #about .prose {
            color: #dcdcdc !important;
          }

          #about .prose p,
          #about .prose li,
          #about .prose strong,
          #about .prose span {
            color: #dcdcdc !important;
          }

          #about .prose a {
            color: #a0c878 !important;
          }
        }
      `}</style>
    </section>
  );
}
