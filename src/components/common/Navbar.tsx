"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
      className="fixed top-0 left-0 right-0 z-50 shadow"
      style={{ backgroundColor: "#FFFDF6", backdropFilter: "blur(10px)" }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-lg font-bold" style={{ color: "#A0C878" }}>
          paicearea
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={clsx(
                  "transition-all duration-300 px-3 py-1 rounded-md",
                  active === section ? "font-semibold" : "hover:bg-[#FAF6E9]"
                )}
                style={
                  active === section
                    ? {
                        backgroundColor: "#DDEB9D",
                        color: "#A0C878",
                      }
                    : {}
                }
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
            className="p-2 rounded-md hover:bg-[#FAF6E9]"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-2 px-4 pb-4 text-sm font-medium text-gray-800"
            style={{ backgroundColor: "#FFFDF6" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "block transition-all duration-300 px-3 py-2 rounded-md",
                    active === section ? "font-semibold" : "hover:bg-[#FAF6E9]"
                  )}
                  style={
                    active === section
                      ? {
                          backgroundColor: "#DDEB9D",
                          color: "#A0C878",
                        }
                      : {}
                  }
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
