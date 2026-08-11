import Parser from "rss-parser";
import type { BlogPost } from "@/types/content";

const parser = new Parser({
  requestOptions: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Paicearea Portfolio RSS Reader)",
      Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
    },
  },
});

const FEED_URL = "https://paicearea.tistory.com/rss";

export async function getLatestPosts(limit = 5): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(FEED_URL);

    return (feed.items ?? []).slice(0, limit).map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      description: item.contentSnippet ?? "",
    }));
  } catch (error) {
    console.error("Failed to fetch RSS feed:", error);
    return [];
  }
}
