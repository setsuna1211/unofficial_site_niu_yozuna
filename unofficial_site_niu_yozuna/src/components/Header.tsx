"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-panel p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:underline">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/videos" className="text-white hover:underline">
                配信・動画
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-white hover:underline">
              ギャラリー
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:underline">
                このサイトについて
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開閉"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-panel p-4 absolute top-full left-0 w-full">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block text-white text-center"
                onClick={() => setIsOpen(false)}
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link
                href="/videos"
                className="block text-white text-center"
                onClick={() => setIsOpen(false)}
              >
                配信・動画
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block text-white text-center"
                onClick={() => setIsOpen(false)}
              >
                ギャラリー
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-white text-center"
                onClick={() => setIsOpen(false)}
              >
                このサイトについて
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
