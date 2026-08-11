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
        className="inline-flex min-h-10 items-center border-b border-gray-300 text-sm font-normal text-gray-800 transition-colors hover:border-blue-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
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
            className="mt-5 border-l border-gray-200 pl-5 text-gray-800 dark:border-zinc-800 dark:text-gray-100"
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
