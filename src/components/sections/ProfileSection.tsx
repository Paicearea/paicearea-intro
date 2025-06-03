"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";
import ToggleDescriptionButton from "@/components/ToggleDescriptionButton";

type Profile = {
  name: string;
  role: string;
  description: string;
  greeting: string;
  location?: string;
  email?: string;
  github?: string;
  image?: string;
};

export default function ProfileSection() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch("/data/profile.json")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return null;

  return (
    <motion.section
      id="profile"
      className="py-70 px-6 flex justify-center items-center transition-colors dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row gap-10 items-center max-w-4xl w-full">
        {/* 왼쪽: 이미지 */}
        {profile.image && (
          <div className="w-60 h-80 rounded-2xl overflow-hidden shadow-md">
            <img
              src={profile.image}
              alt={`Profile photo of ${profile.name}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 오른쪽: 텍스트 (table-like) */}
        <div className="flex-1 space-y-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              {profile.greeting}
            </h1>
            <p className="mt-4 text-lg dark:text-white break-words whitespace-pre-line">
              {profile.description}
            </p>
          </div>

          <dl className="text-sm divide-y divide-gray-200 dark:divide-gray-700 border-t border-white dark:border-gray-500">
            {profile.role && (
              <div className="flex justify-between py-2">
                <dt className="font-medium text-gray-500">Role</dt>
                <dd className="dark:text-white">{profile.role}</dd>
              </div>
            )}
            {profile.location && (
              <div className="flex justify-between py-2">
                <dt className="font-medium text-gray-500">Location</dt>
                <dd className="dark:text-white">{profile.location}</dd>
              </div>
            )}
            {profile.email && (
              <div className="flex justify-between py-2">
                <dt className="font-medium text-gray-500">Email</dt>
                <dd className="dark:text-white">{profile.email}</dd>
              </div>
            )}
            {profile.github && (
              <div className="flex justify-between py-2">
                <dt className="font-medium text-gray-500">GitHub</dt>
                <dd className="dark:text-white">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-500"
                  >
                    {profile.github}
                  </a>
                </dd>
              </div>
            )}
          </dl>
          <div className="flex flex-col sm:flex-row gap-4 mt-1 items-start sm:items-center">
            <ResumeDownloadButton />
            <ToggleDescriptionButton />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
