import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Social } from "@/types/content";

const iconMap = {
  GitHub: <FaGithub size={18} aria-hidden="true" />,
  LinkedIn: <FaLinkedin size={18} aria-hidden="true" />,
};

export default function Footer({ socials }: { socials: Social[] }) {
  return (
    <footer className="border-t border-gray-200 px-6 py-10 text-sm text-gray-600 transition-colors dark:border-zinc-800 dark:text-gray-300">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Paicearea. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md px-3 transition-colors hover:bg-gray-100 hover:text-gray-950 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {iconMap[social.name as keyof typeof iconMap] ?? null}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
