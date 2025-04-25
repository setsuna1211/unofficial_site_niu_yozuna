import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["media:thumbnail"],
  },
});

async function fetchNoteRss(url: string) {
  const feed = await parser.parseURL(url);
  return feed.items.map((item) => ({
    title: item.title,
    link: item.link,
    contentSnippet: item.contentSnippet,
    pubDate: item.pubDate,
    thumbnail: item["media:thumbnail"] || "/banner.png",
  }));
}

export async function GET() {
  const items = await fetchNoteRss("https://note.com/cheering_yozuna/rss/");
  return NextResponse.json({ items });
}
