import type { Metadata } from "next";
import { Yusei_Magic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const NiuSiteFont = Yusei_Magic({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "夜絆ニウ 非公式ファンサイト",
  description: "夜絆ニウの非公式ファンサイトページです。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NiuSiteFont.className}`}>
        <Header />
        <main>{children}</main>
        {/* Footer */}
        <footer className="py-4 text-center bg-red-700 bg-opacity-90">
          <p className="text-sm text-orange-100">
            © 2025 夜絆ニウ応援企画
            <br />
            ※イラスト・画像は各権利者様に帰属いたします
          </p>
        </footer>
      </body>
    </html>
  );
}
