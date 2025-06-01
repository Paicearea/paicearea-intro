"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  github: string;
  tags: string[];
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <motion.section
      id="projects"
      className="min-h-screen py-24 px-6 bg-[var(--background)] transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-[var(--foreground)]">
        🛠 Projects
      </h2>
      <div className="grid gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border"
            style={{
              backgroundColor: "#FAF6E9",
              borderColor: "#DDEB9D",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-semibold mb-2 transition"
              style={{ color: "#A0C878" }}
            >
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "#DDEB9D",
                    color: "#1a1a1a",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium transition"
              style={{ color: "#A0C878" }}
            >
              GitHub ↗
            </a>
          </motion.div>
        ))}
      </div>

      {/* 다크 모드 대응 스타일 */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          #projects .group {
            background-color: #1a1a1a !important;
            border-color: #ddeb9d !important;
          }

          #projects h3 {
            color: #ddeb9d !important;
          }

          #projects span {
            background-color: #333 !important;
            color: #ddeb9d !important;
          }

          #projects a {
            color: #a0c878 !important;
          }

          #projects a:hover {
            color: #ddeb9d !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
