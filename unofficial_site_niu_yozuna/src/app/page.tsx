"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import YouTubeVideos from "@/components/VideoList";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const liveRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    videoRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      }
    });

    liveRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: { trigger: el, start: "top 95%" },
          }
        );
      }
    });

    gsap.to("#hero-section", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#main-content",
        start: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 to-orange-200 text-white">
      <header className="p-4 shadow-lg bg-red-700 bg-opacity-90">
        <h1 className="text-3xl font-bold text-center">
          夜絆ニウ 非公式ファンサイト
        </h1>
      </header>
      {/* Hero Image Section - Fullscreen until scroll */}
      <section
        id="hero-section"
        className="top-0 left-0 w-full h-screen flex items-center justify-center z-10 relative"
      >
        <Image
          src="/banner.png"
          alt="Vtuber Banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>
      <main
        id="main-content"
        className="relative z-20 container mx-auto px-4 py-8"
      >
        {/* Hero Section */}
        <section className="text-center py-12">
          <h2
            ref={titleRef}
            className="text-4xl font-extrabold mb-4 text-red-900"
          >
            夜に絆ぐネオポルテ一期生の警備隊長、夜絆ニウの非公式ファンサイトです！
          </h2>
          <p className="text-lg text-orange-900">
            ※こちらのサイトは非公式のファンメイドのサイトであり、公式とは一切関係ありません
          </p>
        </section>

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
              <li
                key={index}
                ref={(el) => {
                  liveRefs.current[index] = el;
                }}
                className="bg-red-600 bg-opacity-80 p-4 rounded-lg shadow-lg live-box"
              >
                <h4 className="text-lg font-semibold">{stream}</h4>
                <p className="text-sm text-orange-200">
                  Scheduled for: {new Date().toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="py-4 text-center bg-red-700 bg-opacity-90">
          <p className="text-sm text-orange-100">
            © 2025 夜絆ニウ応援企画 All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
