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
    <footer
      className="py-10 mt-16 text-center text-sm shadow-inner border-t transition-colors duration-300"
      style={{
        backgroundColor: "#FAF6E9",
        borderColor: "#DDEB9D",
        color: "#666",
      }}
    >
      <div className="flex justify-center gap-6 mb-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-200"
            style={{ color: "#666" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#A0C878")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#666")}
          >
            {iconMap[social.name] || null}
            <span className="hidden sm:inline">{social.name}</span>
          </a>
        ))}
      </div>
      <p style={{ fontSize: "0.75rem", color: "#888" }}>
        &copy; {new Date().getFullYear()} Paicearea. All rights reserved.
      </p>

      {/* 다크 모드 대응 */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          footer {
            background-color: #1a1a1a !important;
            border-color: #ddeb9d !important;
            color: #ddeb9d !important;
          }

          footer a {
            color: #ddeb9d !important;
          }

          footer a:hover {
            color: #a0c878 !important;
          }

          footer p {
            color: #888 !important;
          }
        }
      `}</style>
    </footer>
  );
}
