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
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg text-orange-900"
          >
            ※こちらのサイトは非公式のファンメイドのサイトであり、公式とは一切関係ありません
          </motion.p>
        </section>

        {/* Profile Section */}
        <motion.section
          className="py-12 flex flex-col md:flex-row justify-center items-center md:items-start text-left gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="w-80 md:w-96 flex-shrink-0">
            <Image
              src="/niu_profile.png"
              alt="夜絆ニウ 立ち絵"
              width={400}
              height={600}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col md:text-left text-center items-center"
          >
            <h3 className="text-3xl font-bold text-red-900 mb-2">夜絆ニウ</h3>
            <p className="text-sm text-orange-900 mb-2">誕生日 : 4月27日</p>
            <p className="text-sm text-orange-900 mb-2">血液型 : O型</p>
            <p className="text-sm text-orange-900 mb-2">身長 : 142.7cm</p>
            <p className="text-sm text-orange-900 mb-2">
              好きな食べ物 : 焼き鳥、サーモン、家系ラーメン
            </p>
            <p className="text-base text-orange-900 leading-relaxed text-center">
              ネオポルテの多分かわいい担当！
              <br />
              ちなみによ「づ」なにうである。
              <br />
              配信内容はゲーム、時々歌枠とASMRと実写(料理が多い)。
              <br />
              とても表情豊か！それはもう！
            </p>
          </motion.div>
        </motion.section>

        {/* Twitter Timeline Section */}
        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <TwitterTimeline target="niu_yozuna?ref_src=twsrc%5Etfw" />
        </motion.section>
      </main>
    </div>
  );
}
