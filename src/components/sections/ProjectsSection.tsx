import type { Project } from "@/types/content";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
      {project.deploy && (
        <a
          href={project.deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-950 pb-1 font-normal text-gray-950 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-white dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
        >
          서비스 보기
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-gray-300 pb-1 font-normal text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-zinc-600 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
      >
        GitHub
      </a>
    </div>
  );
}

export default function ProjectsSection({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section
      id="projects"
      className="border-t border-gray-200 px-6 py-24 transition-colors dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-normal uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
              Work
            </p>
            <h2 className="mt-2 text-4xl font-normal text-gray-950 dark:text-white">
              Projects
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300">
            기능 목록보다 사용자가 만나는 문제와 화면 흐름을 중심으로
            정리했습니다.
          </p>
        </div>

        <div className="border-t border-gray-300 dark:border-zinc-700">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="border-b border-gray-200 py-8 transition-colors hover:border-gray-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div className="grid gap-5 md:grid-cols-[5rem_minmax(0,1fr)_auto] md:items-start">
                <p className="font-mono text-xs text-gray-400 dark:text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h3 className="text-2xl font-normal leading-tight text-gray-950 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.role}
                    </span>
                    {project.featured && (
                      <span className="border-l border-blue-500 pl-3 text-xs uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-base font-normal leading-7 text-gray-800 dark:text-gray-100">
                    {project.summary}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {project.focus}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border-b border-gray-200 pb-1 text-xs uppercase tracking-[0.08em] text-gray-500 dark:border-zinc-800 dark:text-gray-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:pt-1">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
