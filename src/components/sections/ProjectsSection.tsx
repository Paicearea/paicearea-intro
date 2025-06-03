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
      className="py-24 px-6 dark:text-white transition-colors"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">🛠 Projects</h2>

        <dl className="divide-y divide-gray-200 dark:divide-gray-700">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-between py-1 text-sm">
                <dt className="text-gray-500 dark:text-gray-300 w-28 shrink-0">Title</dt>
                <dd className="text-right dark:text-white flex-1">{project.title}</dd>
              </div>

              <div className="flex justify-between py-1 text-sm">
                <dt className="text-gray-500 dark:text-gray-300 w-28 shrink-0">Description</dt>
                <dd className="text-right dark:text-white flex-1">{project.description}</dd>
              </div>

              <div className="flex justify-between py-1 text-sm">
                <dt className="text-gray-500 dark:text-gray-300 w-28 shrink-0">Tags</dt>
                <dd className="text-right dark:text-white flex-1">
                  {project.tags.map((tag) => `#${tag}`).join(", ")}
                </dd>
              </div>

              <div className="flex justify-between py-1 text-sm">
                <dt className="text-gray-500 dark:text-gray-300 w-28 shrink-0">GitHub</dt>
                <dd className="text-right flex-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500 dark:text-blue-400 hover:opacity-80"
                  >
                    {project.github}
                  </a>
                </dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}
