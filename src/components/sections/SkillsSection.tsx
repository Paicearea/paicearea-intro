"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  items: string[];
};

type SkillsData = {
  title: string;
  categories: SkillCategory[];
};

export default function SkillsSection() {
  const [skills, setSkills] = useState<SkillsData | null>(null);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then(setSkills);
  }, []);

  if (!skills) return null;

  return (
    <section
      id="skills"
      className="py-24 px-6 dark:text-white transition-colors"
    >
      <motion.div
        className="max-w-3xl mx-auto p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-6">{skills.title}</h2>

        <dl className="divide-y divide-gray-200 text-sm">
          {skills.categories.map((cat, idx) => (
            <div key={idx} className="flex justify-between py-3">
              <dt className="font-medium text-gray-500 w-48 shrink-0">
                {cat.title}
              </dt>
              <dd className="text-right dark:text-white flex-1">
                {cat.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
