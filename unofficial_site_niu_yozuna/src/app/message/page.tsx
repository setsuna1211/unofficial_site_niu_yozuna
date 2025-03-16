"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 to-orange-200 text-white">
      <main
        id="main-content"
        className="relative z-20 container mx-auto px-4 py-8"
      >
        <section className="text-center py-12">
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-red-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            準備中
          </motion.h2>

          <motion.h3
            className="text-2xl font-bold text-red-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            準備中
          </motion.h3>

          <motion.p
            className="text-lg text-orange-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            準備中
          </motion.p>
        </section>
      </main>
    </div>
  );
}
