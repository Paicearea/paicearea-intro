"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const sections = ["profile", "skills", "projects", "blog"] as const;
type Section = (typeof sections)[number];

const labels: Record<Section, string> = {
  profile: "Profile",
  skills: "Skills",
  projects: "Projects",
  blog: "Blog",
};

export default function Navbar() {
  const [active, setActive] = useState<Section>("profile");
  const [menuOpen, setMenuOpen] = useState(false);
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
      className="fixed top-0 left-0 right-0 z-50 shadow bg-white/80 dark:bg-black/80 backdrop-blur-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-lg font-bold text-black dark:text-white">
          paicearea
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-black dark:text-white">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  setActive(section);
                  const el = document.getElementById(section);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={clsx(
                  "block transition-all duration-300 px-3 py-2 rounded-md",
                  active === section
                    ? "bg-gray-200 dark:bg-zinc-800 font-semibold"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                )}
              >
                {labels[section]}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-2 px-4 pb-4 text-sm font-medium text-black dark:text-white bg-white dark:bg-black"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setActive(section);
                    setTimeout(() => {
                      const el = document.getElementById(section);
                      el?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }}
                  className={clsx(
                    "block transition-all duration-300 px-3 py-2 rounded-md",
                    active === section
                      ? "bg-gray-200 dark:bg-zinc-800 font-semibold"
                      : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                  )}
                >
                  {labels[section]}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
