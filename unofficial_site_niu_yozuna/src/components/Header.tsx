"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-red-700 bg-opacity-90 p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          夜絆ニウ 非公式ファンサイト
        </h1>
        <nav>
          <ul className="flex space-x-4">
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
              <Link href="/message" className="text-white hover:underline">
                寄せ書き
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:underline">
                このサイトについて
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
