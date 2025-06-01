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
            className="group border border-gray-200 dark:border-gray-700 p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition"
            >
              GitHub ↗
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
