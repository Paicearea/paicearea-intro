"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const sections = ["hero", "about", "skills", "projects", "blog"] as const;
type Section = (typeof sections)[number];

const labels: Record<Section, string> = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  blog: "Blog",
};

export default function Navbar() {
  const [active, setActive] = useState<Section>("hero");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              if (sections.includes(id as Section)) {
                setActive(id as Section);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -50% 0px",
          threshold: 0.1,
        }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.current?.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timeout);
      observer.current?.disconnect();
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-[#111]/70 backdrop-blur-md shadow z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ul className="flex justify-center gap-10 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={clsx(
                "transition-all duration-300 px-3 py-1 rounded-md",
                active === section
                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-100 dark:bg-blue-900/30"
                  : "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              )}
            >
              {labels[section]}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
