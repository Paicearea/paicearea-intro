"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const AboutContent = dynamic(() => import("./AboutContent"), { ssr: false });

export default function ToggleDescriptionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm dark:text-white hover:underline"
      >
        {isOpen ? "접기" : "자기소개 더 보기"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full mt-2 z-20 w-full p-4 bg-white dark:bg-zinc-900 dark:text-white rounded-md shadow"
          >
            <Suspense
              fallback={<p className="text-sm text-gray-500">로딩 중...</p>}
            >
              <AboutContent />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
