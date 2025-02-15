import { NextRequest, NextResponse } from "next/server";

const API_KEY = "AIzaSyCqvWIYoBwuZJsJkhcGgvG8b53JN7MyIEU";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const channelId = searchParams.get("channelId");

  if (!channelId) {
    return NextResponse.json(
      { error: "Channel ID is required" },
      { status: 400 }
    );
  }

  const url = `${BASE_URL}?part=snippet&channelId=${channelId}&maxResults=3&type=video&order=date&eventType=completed&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    const videos = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    return NextResponse.json({ videos }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch YouTube data" },
      { status: 500 }
    );
  }
}
