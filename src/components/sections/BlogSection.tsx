"use client";

import { useEffect, useState } from "react";

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
    <section
      id="blog"
      className="min-h-screen py-24 px-6 bg-[var(--background)] transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-[var(--foreground)]">
        📝 Blog
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition bg-[var(--background)]"
          >
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              {post.title}
            </h3>
            <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
              {new Date(post.pubDate).toLocaleDateString()}
            </p>
            <p className="text-sm line-clamp-3 text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
