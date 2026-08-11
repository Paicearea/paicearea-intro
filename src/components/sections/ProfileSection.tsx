import Image from "next/image";
import AboutContent from "@/components/AboutContent";
import ToggleDescriptionButton from "@/components/ToggleDescriptionButton";
import type { Profile } from "@/types/content";

export default function ProfileSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="profile"
      className="px-6 pb-28 pt-28 transition-colors sm:pt-36 md:pb-36 md:pt-48"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[320px_1fr]">
        <div className="relative mx-auto aspect-[7/9] w-full max-w-[280px] overflow-hidden border border-gray-200 bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 md:max-w-none">
          <Image
            src={profile.image}
            alt={`${profile.name} 프로필 사진`}
            width={700}
            height={900}
            sizes="(min-width: 768px) 320px, 70vw"
            preload
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
              {profile.role}
            </p>
            <h1 className="text-3xl font-normal leading-tight text-gray-950 dark:text-white sm:text-5xl">
              {profile.greeting}
            </h1>
            <p className="mt-5 max-w-2xl whitespace-pre-line break-words text-lg leading-8 text-gray-700 dark:text-gray-200">
              {profile.description}
            </p>
          </div>

          <dl className="grid border-t border-gray-200 text-sm dark:border-zinc-800 sm:grid-cols-3">
            <div className="border-b border-gray-200 py-4 dark:border-zinc-800 sm:border-r sm:pr-4">
              <dt className="font-normal text-gray-500 dark:text-gray-400">
                Location
              </dt>
              <dd className="mt-1 text-gray-900 dark:text-white">
                {profile.location}
              </dd>
            </div>
            <div className="border-b border-gray-200 py-4 dark:border-zinc-800 sm:border-r sm:px-4">
              <dt className="font-normal text-gray-500 dark:text-gray-400">
                Email
              </dt>
              <dd className="mt-1 break-words text-gray-900 dark:text-white">
                {profile.email}
              </dd>
            </div>
            <div className="border-b border-gray-200 py-4 dark:border-zinc-800 sm:pl-4">
              <dt className="font-normal text-gray-500 dark:text-gray-400">
                GitHub
              </dt>
              <dd className="mt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Paicearea
                </a>
              </dd>
            </div>
          </dl>

          <ToggleDescriptionButton>
            <AboutContent />
          </ToggleDescriptionButton>
        </div>
      </div>
    </section>
  );
}
