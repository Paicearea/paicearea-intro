"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Profile = {
  name: string;
  role: string;
  description: string;
  greeting: string;
};

export default function HeroSection() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch("/data/profile.json")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return null;

  const greetingParts = profile.greeting.split(",");

  return (
    <motion.section
      id="hero"
      className="h-screen pt-24 flex flex-col justify-center items-center 
        bg-gradient-to-b from-[var(--background)] to-gray-100 dark:to-neutral-900 
        text-center transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl px-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-[var(--foreground)] leading-tight mb-6">
          {greetingParts[0]},
          <br />
          {greetingParts[1]}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {profile.description}
        </p>
      </div>
    </motion.section>
  );
}
