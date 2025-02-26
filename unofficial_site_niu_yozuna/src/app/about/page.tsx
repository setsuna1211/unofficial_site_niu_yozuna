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
          <h2 className="text-4xl font-extrabold mb-4 text-red-900">
            連絡先等
          </h2>
          <h3 className="text-2xl font-bold text-red-800">企画・運営</h3>
          <p className="text-lg text-orange-900">
            夜絆ニウ応援企画：@jjbgNaUvJF40976
          </p>
          <h3 className="text-2xl font-bold mt-6 text-red-800">技術提供</h3>
          <p className="text-lg text-orange-900">
            セツナ@がんばらない：@SETSUNA1211
          </p>
          <h3 className="text-2xl font-bold mt-6 text-red-800">
            応援広告広報等
          </h3>
          <p className="text-lg text-orange-900">るーろーはん：@humhum0808</p>
          <h3 className="text-2xl font-bold mt-6 text-red-800">イラスト提供</h3>
          <p className="text-lg text-orange-900">ゆゆん：@fokachya_y</p>
        </section>
      </main>
    </div>
  );
}
