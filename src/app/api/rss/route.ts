import { NextResponse } from "next/server";
import { getLatestPosts } from "@/lib/rss";

export const revalidate = 3600;

export async function GET() {
  const items = await getLatestPosts();

  return NextResponse.json(items);
}
