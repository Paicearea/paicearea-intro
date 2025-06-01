import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  requestOptions: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; RSS Reader; +https://example.com)",
      Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
    },
  },
});

export async function GET() {
  try {
    const feed = await parser.parseURL("https://paicearea.tistory.com/rss");

    const items =
      feed.items?.slice(0, 5).map((item) => ({
        title: item.title || "",
        link: item.link || "",
        pubDate: item.pubDate || "",
        description: item.contentSnippet || "",
      })) || [];

    return NextResponse.json(items);
  } catch (error) {
    console.error("RSS 파싱 실패:", error);
    return NextResponse.json(
      { message: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
