"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "@/components/ui/ThemeToggle";

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
      observer.current?.disconnect();

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

  const handleNavigate = (section: Section) => {
    setMenuOpen(false);
    setActive(section);
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-black/80"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#profile"
          onClick={(event) => {
            event.preventDefault();
            handleNavigate("profile");
          }}
          className="rounded-md text-lg font-bold text-gray-950 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white dark:hover:text-blue-400"
        >
          paicearea
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex gap-1 text-sm font-medium text-gray-700 dark:text-gray-200">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigate(section);
                  }}
                  className={clsx(
                    "block rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                    active === section
                      ? "bg-gray-200 text-gray-950 dark:bg-zinc-800 dark:text-white"
                      : "hover:bg-gray-100 dark:hover:bg-zinc-900"
                  )}
                >
                  {labels[section]}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-800 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.ul
            className="flex flex-col gap-2 border-t border-gray-200 bg-white px-4 pb-4 pt-2 text-sm font-medium text-gray-800 dark:border-zinc-800 dark:bg-black dark:text-white md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigate(section);
                  }}
                  className={clsx(
                    "block rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                    active === section
                      ? "bg-gray-200 text-gray-950 dark:bg-zinc-800 dark:text-white"
                      : "hover:bg-gray-100 dark:hover:bg-zinc-900"
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
