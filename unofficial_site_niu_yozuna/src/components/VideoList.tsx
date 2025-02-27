"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface YouTubeVideosProps {
  channelId: string;
}

export default function YouTubeVideos({ channelId }: YouTubeVideosProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(`/api/youtube/list?channelId=${channelId}`);
        const data = await res.json();

        if (res.ok) {
          setVideos(data.videos);
        } else {
          setError(data.error || "Failed to load videos");
        }
      } catch {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [channelId]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-red-600 bg-opacity-80 p-4 rounded-lg shadow-lg"
        >
          <iframe
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h4 className="mt-2 text-white text-sm">{video.title}</h4>
        </motion.div>
      ))}
    </div>
  );
}
