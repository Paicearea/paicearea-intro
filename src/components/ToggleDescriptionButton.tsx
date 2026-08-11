"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ToggleDescriptionButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="inline-flex min-h-10 items-center rounded-md border border-gray-200 px-4 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800"
      >
        {isOpen ? "자기소개 닫기" : "자기소개 보기"}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="about"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mt-4 rounded-lg border border-gray-200 bg-white p-5 text-gray-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-100"
          >
            <div className="prose prose-sm max-w-none dark:prose-invert md:prose-base">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
