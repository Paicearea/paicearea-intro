import type { BlogPost } from "@/types/content";

function formatDate(value: string) {
  if (!value) return "날짜 없음";

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section
      id="blog"
      className="border-t border-gray-200 px-6 py-24 transition-colors dark:border-zinc-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-normal uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
              Writing
            </p>
            <h2 className="mt-2 text-4xl font-normal text-gray-950 dark:text-white">
              Blog
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300">
            학습과 프로젝트 과정에서 얻은 내용을 기록합니다.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="border-t border-gray-300 dark:border-zinc-700">
            {posts.map((post) => (
              <article
                key={post.link || post.title}
                className="border-b border-gray-200 py-6 transition-colors hover:border-gray-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <div className="grid gap-3 md:grid-cols-[9rem_1fr]">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(post.pubDate)}
                  </time>
                  <div>
                    <h3 className="text-lg font-normal text-gray-950 dark:text-white">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {post.title}
                      </a>
                    </h3>
                    {post.description && (
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {post.description}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border-y border-gray-200 py-6 text-sm text-gray-600 dark:border-zinc-800 dark:text-gray-300">
            최신 글을 불러오지 못했습니다. 잠시 후 다시 확인해주세요.
          </div>
        )}
      </div>
    </section>
  );
}
