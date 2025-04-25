"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import TwitterTimeline from "@/components/XTimeline";
import NoteRss from "@/components/NoteRss";
import { DotGothic16 } from "next/font/google";

const NiuSiteTitleFont = DotGothic16({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen">
      <motion.section
        id="hero-section"
        style={{ opacity: heroOpacity }}
        className="top-0 left-0 w-full h-screen flex items-center justify-center z-10 relative mt-14"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <Image
            src="/banner.png"
            alt="トップ画像"
            fill
            className="object-cover object-[30%_center]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className={`${NiuSiteTitleFont.className} text-[#6E5BAA] text-4xl md:text-6xl font-extrabold drop-shadow-2xl text-center`}>
              夜絆ニウ
              <br />
              Unofficial Fan Site
            </h1>
          </div>
        </motion.div>
      </motion.section>

      <main
        id="main-content"
        className="relative z-20 container mx-auto px-4 py-8"
      >
        <section className="text-center py-12">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl font-extrabold mb-4"
          >
            夜に絆ぐネオポルテ一期生の警備隊長、夜絆ニウの非公式ファンサイトです！
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg"
          >
            ※こちらのサイトは非公式のファンメイドのサイトであり、公式とは一切関係ありません
          </motion.p>
        </section>

        <motion.section
          className="py-12 flex flex-col md:flex-row justify-center items-center md:items-start text-left gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-80 md:w-96 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/niu_profile.png"
                alt="夜絆ニウ 立ち絵"
                width={400}
                height={600}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col md:text-left text-center items-center"
          >
            <h3 className="text-3xl font-bold mb-2">夜絆ニウ</h3>
            <p className="text-sm mb-2">身長 : 142.7cm</p>
            <p className="text-sm mb-2">誕生日 : 4月27日</p>
            <p className="text-sm mb-2">年齢 : 200歳</p>
            <p className="text-sm mb-2">血液型 : O型</p>
            <p className="text-sm mb-2">
              好きな食べ物 : 焼き鳥、サーモン、家系ラーメン等…
            </p>
            <p className="text-base leading-relaxed text-center">
              逃げたチュータ（ネズミ）を追って異世界からやってきた警備隊長。
              <br />
              情報収集のために配信を始めるが、人間界とその文化に興味をもったことで、配信に夢中になる。
              <br />
              気まぐれで、悪戯好き。
              <br />
              特に考えて話していないため、言語能力が低い。
              <br />
              ネオポルテの多分かわいい担当！
              <br />
              ちなみによ「づ」なにうである。
              <br />
              配信内容はゲーム、時々歌枠とASMRと実写(料理が多い)。
              <br />
              とても表情豊か！
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <motion.a
                href="https://youtube.com/@niu_yozuna"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-red-600 rounded-lg font-bold shadow-md"
              >
                YouTube
              </motion.a>
              <motion.a
                href="https://x.com/niu_yozuna"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-black rounded-lg font-bold shadow-md"
              >
                X（メイン）
              </motion.a>
              <motion.a
                href="https://x.com/niubie_yozuna"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-black rounded-lg font-bold shadow-md"
              >
                X（サブ）
              </motion.a>
              <motion.a
                href="https://www.twitch.tv/niu_yozuna"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-purple-500 rounded-lg font-bold shadow-md"
              >
                Twitch
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@niu_yozuna"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-gray-900 rounded-lg font-bold shadow-md"
              >
                TikTok
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <NoteRss />
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <TwitterTimeline target="niu_yozuna?ref_src=twsrc%5Etfw" />
        </motion.section>
      </main>
    </div>
  );
}
