"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import YouTubeVideos from "@/components/VideoList";

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
        {/* Featured Videos */}
        <section className="py-12">
          <h3 className="text-2xl font-bold mb-6 text-red-800">
            直近のライブ配信アーカイブ
          </h3>
          <YouTubeVideos channelId="UCZmUoMwjyuQ59sk5_7Tx07A" />
        </section>

        {/* Live Streams Section */}
        <section className="py-12">
          <h3 className="text-2xl font-bold mb-6">再生リスト</h3>
          <ul className="space-y-4">
            {[
              "配信アーカイブベスト15 byニウ / Best 15 stream archives by Niu",
              "動画ベスト30 byニウ / Best 30 videos by Niu",
              "原神 / Genshin",
            ].map((stream, index) => (
              <motion.li
                key={index}
                ref={(el) => {
                  liveRefs.current[index] = el;
                }}
                className="bg-red-600 bg-opacity-80 p-4 rounded-lg shadow-lg live-box"
                initial={{ opacity: 0, x: -50 }}
                animate={controls}
                transition={{ delay: index * 0.2, duration: 1 }}
              >
                <h4 className="text-lg font-semibold">{stream}</h4>
                <p className="text-sm text-orange-200">
                  Scheduled for: {new Date().toLocaleDateString()}
                </p>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
