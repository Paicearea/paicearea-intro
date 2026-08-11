import type { Project } from "@/types/content";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.deploy && (
        <a
          href={project.deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          서비스 보기
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-zinc-700 dark:text-gray-100 dark:hover:bg-zinc-900"
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
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-6 py-24 transition-colors">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
            Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-950 dark:text-white">
            Projects
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            기능 목록보다 사용자가 만나는 문제와 화면 흐름을 중심으로
            정리했습니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-md border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-zinc-800 dark:text-gray-300">
                  Featured
                </span>
              </div>

              <p className="text-base leading-7 text-gray-800 dark:text-gray-100">
                {project.summary}
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {project.focus}
              </p>

              <ul className="my-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-zinc-900 dark:text-gray-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <ProjectLinks project={project} />
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-gray-200 p-5 transition-colors hover:bg-gray-50 dark:border-zinc-800 dark:hover:bg-zinc-950"
            >
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.role}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-200">
                    {project.summary}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {project.focus}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-zinc-900 dark:text-gray-200"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
