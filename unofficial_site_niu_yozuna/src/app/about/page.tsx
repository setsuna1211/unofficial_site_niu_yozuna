"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main
        id="main-content"
        className="relative z-20 container mx-auto px-4 py-8"
      >
        {/* Hero Section */}
        <section className="text-center py-12">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            連絡先・ご協力いただいた方々(敬称略)
          </motion.h2>
          <motion.h3
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            企画・運営
          </motion.h3>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            夜絆ニウ応援企画(@jjbgNaUvJF40976)
          </motion.p>
          <motion.h3
            className="text-2xl font-bold mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            技術提供
          </motion.h3>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            セツナ@がんばらない(@SETSUNA1211)
          </motion.p>
          <motion.h3
            className="text-2xl font-bold mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            応援広告広報等
          </motion.h3>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            るーろーはん(@humhum0808)
          </motion.p>
          <motion.h3
            className="text-2xl font-bold mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            イラスト提供
          </motion.h3>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            トップイラスト：ゆゆん(@fokachya_y)
            <br />
            ファビコン：かっぴー(@kappi0413)
            <br />
            ギャラリーイラスト：零（みる）(@yuzuniu4275470/@miru_1024_)
            <br />
            ギャラリーイラスト：reーji(@gu_16reji)
            <br />
          </motion.p>
        </section>
      </main>
    </div>
  );
}
