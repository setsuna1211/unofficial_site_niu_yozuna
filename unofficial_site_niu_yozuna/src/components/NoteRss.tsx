"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type RssItem = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
};

export default function NoteFeed() {
  const [items, setItems] = useState<RssItem[]>([]);

  useEffect(() => {
    fetch("/api/rss")
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-8">
        ニュース・更新情報等
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0,3).map((article, index) => (
          <a
            href={article.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel p-4 rounded-lg shadow-lg"
          >
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-4 text-lg font-bold">{article.title}</h2>
            <p className="text-sm">
              {new Date(article.pubDate).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
