import type { SkillsContent } from "@/types/content";

export default function SkillsSection({ skills }: { skills: SkillsContent }) {
  return (
    <section
      id="skills"
      className="border-y border-gray-200 bg-gray-50 px-6 py-24 transition-colors dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
              Stack
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-950 dark:text-white">
              {skills.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300">
            제품 의도에 맞는 기술을 고르고, 유지보수 가능한 화면 단위로
            구현합니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.categories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-gray-200 bg-white p-6 transition-colors dark:border-zinc-800 dark:bg-black"
            >
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-700 dark:border-zinc-800 dark:text-gray-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
