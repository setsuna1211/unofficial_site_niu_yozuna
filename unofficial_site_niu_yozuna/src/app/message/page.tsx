"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 to-orange-200 text-white">
      <main
        id="main-content"
        className="relative z-20 container mx-auto px-4 py-8"
      >
        {/* Hero Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-extrabold mb-4 text-red-900">準備中</h2>
          <h3 className="text-2xl font-bold text-red-800">準備中</h3>
          <p className="text-lg text-orange-900">準備中</p>
        </section>
      </main>
    </div>
  );
}
