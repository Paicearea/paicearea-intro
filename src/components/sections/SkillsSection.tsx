import type { SkillsContent } from "@/types/content";

export default function SkillsSection({ skills }: { skills: SkillsContent }) {
  return (
    <section
      id="skills"
      className="border-y border-gray-200 px-6 py-24 transition-colors dark:border-zinc-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-normal uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
              Stack
            </p>
            <h2 className="mt-2 text-4xl font-normal text-gray-950 dark:text-white">
              {skills.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300">
            제품 의도에 맞는 기술을 고르고, 유지보수 가능한 화면 단위로
            구현합니다.
          </p>
        </div>

        <div className="border-t border-gray-300 dark:border-zinc-700">
          {skills.categories.map((category) => (
            <div
              key={category.title}
              className="grid gap-5 border-b border-gray-200 py-7 dark:border-zinc-800 md:grid-cols-[12rem_1fr]"
            >
              <h3 className="text-lg font-normal text-gray-950 dark:text-white">
                {category.title}
              </h3>
              <div>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-gray-200 pb-1 text-sm text-gray-700 dark:border-zinc-800 dark:text-gray-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
