import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public/gallery");
    const files = fs.readdirSync(imagesDir).sort().reverse();

    const images = files
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map((file) => ({
        src: `/gallery/${file}`,
        title: path.basename(file, path.extname(file)),
      }));

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json(
      { error: "Failed to load images" },
      { status: 500 }
    );
  }
}
