"use client";

import { motion } from "framer-motion";

interface PlayList {
  id: string;
  title: string;
}

export default function YouTubePlayLists() {
  const playLists: PlayList[] = [
    {
      id: "PLoDhHQrYy1OUrsyKy8DTBld7k7Do-VuUR",
      title: "動画ベスト30 byニウ / Best 30 videos by Niu",
    },
    {
      id: "PLoDhHQrYy1OWAXS0Kw5kTULW17b0_F1_A",
      title: "配信アーカイブベスト15 byニウ / Best 15 stream archives by Niu",
    },
    {
      id: "PLoDhHQrYy1OU1VQWqegLc9XDX5kfeo2Wf",
      title: "歌ってみた / song",
    },
    {
      id: "PLoDhHQrYy1OV-X3GvKWEmgA5LQ9uoKNSH",
      title: "ASMR",
    },
    {
      id: "PLoDhHQrYy1OVQ8UUZoCGDfPgBB6B0M6Qb",
      title: "カメラ枠 / with camera",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {playLists.map((playList, index) => (
        <motion.div
          key={playList.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-panel p-4 rounded-lg shadow-lg"
        >
          <iframe
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/videoseries?list=${playList.id}`}
            title={playList.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h4 className="mt-2 text-sm">{playList.title}</h4>
        </motion.div>
      ))}
    </div>
  );
}
