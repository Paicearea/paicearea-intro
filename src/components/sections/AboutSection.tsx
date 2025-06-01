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
    <motion.section
      id="about"
      className="min-h-screen py-24 px-6 bg-[var(--background)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto bg-[var(--background)] p-8 rounded-2xl shadow">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--foreground)]">
          🙋‍♂️ About Me
        </h2>
        <div className="prose prose-lg mx-auto text-left text-[var(--foreground)]">
          {content && <MDXRemote {...content} />}
        </div>
      </div>
    </motion.section>
  );
}
