"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import YouTubeVideos from "@/components/VideoList";
import YouTubePlayLists from "@/components/PlayList";
import Image from "next/image";

export default function Home() {
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const liveRefs = useRef<(HTMLLIElement | null)[]>([]);

  // animation control hooks
  const controls = useAnimation();

  useEffect(() => {
    // Title fade-in
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });

    // Video section animation
    videoRefs.current.forEach((el, index) => {
      if (el) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: index * 0.2 },
        });
      }
    });

    // Live section animation
    liveRefs.current.forEach((el, index) => {
      if (el) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: index * 0.2 },
        });
      }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 to-orange-200 text-white">
      <main
        id="main-content"
        className="relative z-20 container mx-auto px-4 py-8"
      >
        <motion.section
          className="py-12 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full md:w-2/3 h-auto bg-red-600 bg-opacity-80 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">予定表 (※サムネイルより取得)</h3>
            <div className="flex justify-center items-center">
              <Image
                src={`https://img.youtube.com/vi/ZWUNKY0pFYU/maxresdefault.jpg?t=${Date.now()}`}
                alt="YouTube Live Thumbnail"
                width={1280}
                height={720}
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.section>
        {/* Featured Videos */}
        <section className="py-12">
          <motion.h3
            className="text-2xl font-bold mb-6 text-red-800"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            直近のライブ配信アーカイブ
          </motion.h3>
          <YouTubeVideos channelId="UCZmUoMwjyuQ59sk5_7Tx07A" />
        </section>

        {/* Live Streams Section */}
        <section className="py-12">
          <motion.h3
            className="text-2xl font-bold text-red-800"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            オススメ再生リスト
          </motion.h3>
          <motion.p
            className="text-sm mb-6 text-orange-900"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            ※時々メンバー限定動画がリストのトップに来た場合はエラーになっちゃいます…ごめんなさい！
          </motion.p>
          <YouTubePlayLists />
        </section>
      </main>
    </div>
  );
}
