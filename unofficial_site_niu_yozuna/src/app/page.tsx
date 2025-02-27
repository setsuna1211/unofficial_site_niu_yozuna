"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import TwitterTimeline from "@/components/XTimeline";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 to-orange-200 text-white">
      {/* Hero Image Section - Fullscreen until scroll */}
      <motion.section
        id="hero-section"
        style={{ opacity: heroOpacity }}
        className="top-0 left-0 w-full h-screen flex items-center justify-center z-10 relative"
      >
        <Image
          src="/banner.png"
          alt="Vtuber Banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.section>

      <main
        id="main-content"
        className="relative z-20 container mx-auto px-4 py-8"
      >
        {/* Hero Section */}
        <section className="text-center py-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold mb-4 text-red-900"
          >
            夜に絆ぐネオポルテ一期生の警備隊長、夜絆ニウの非公式ファンサイトです！
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }} // 50% 画面内に入ったら開始
            className="text-lg text-orange-900"
          >
            ※こちらのサイトは非公式のファンメイドのサイトであり、公式とは一切関係ありません
          </motion.p>
        </section>

        {/* Twitter Timeline Section */}
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }} // 50% 画面内に入ったら開始
          >
          <TwitterTimeline target="niu_yozuna?ref_src=twsrc%5Etfw" />
        </motion.section>
      </main>
    </div>
  );
}
