"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/rss")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch RSS");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <motion.section
      id="blog"
      className="min-h-screen py-24 px-6 dark:text-white transition-colors"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">📝 Blog</h2>

        <dl className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="py-4"
            >
              <div className="flex justify-between py-1 text-sm">
                <dt className="text-gray-500 dark:text-gray-300 w-28 shrink-0">
                  Title
                </dt>
                <dd className="text-right flex-1">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500 dark:text-blue-400 hover:opacity-80"
                  >
                    {post.title}
                  </a>
                </dd>
              </div>

              <div className="flex justify-between py-1 text-sm">
                <dt className="text-gray-500 dark:text-gray-300 w-28 shrink-0">
                  Published
                </dt>
                <dd className="text-right text-gray-800 dark:text-white flex-1">
                  {new Date(post.pubDate).toLocaleDateString()}
                </dd>
              </div>

              <div className="flex justify-between py-1 text-sm">
                <dt className="text-gray-500 dark:text-gray-300 w-28 shrink-0">
                  Summary
                </dt>
                <dd className="text-right dark:text-white flex-1 line-clamp-3">
                  {post.description}
                </dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}
