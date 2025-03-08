import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-14">{children}</main>
                {/* Footer */}
                <footer className="py-4 text-center bg-red-700 bg-opacity-90">
          <p className="text-sm text-orange-100">
            © 2025 夜絆ニウ応援企画<br />
            ※イラスト・画像は各権利者様に帰属いたします
          </p>
        </footer>
      </body>
    </html>
  );
}
