"use client";

import { JSX, useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Social = {
  name: string;
  url: string;
};

const iconMap: Record<string, JSX.Element> = {
  Github: <FaGithub size={18} />,
  LinkedIn: <FaLinkedin size={18} />,
};

export default function Footer() {
  const [socials, setSocials] = useState<Social[]>([]);

  useEffect(() => {
    fetch("/data/socials.json")
      .then((res) => res.json())
      .then(setSocials);
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-[#111] border-t dark:border-gray-700 py-10 mt-16 text-center text-sm text-gray-500 dark:text-gray-400 shadow-inner">
      <div className="flex justify-center gap-6 mb-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {iconMap[social.name] || null}
            <span className="hidden sm:inline">{social.name}</span>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Paicearea. All rights reserved.
      </p>
    </footer>
  );
}
