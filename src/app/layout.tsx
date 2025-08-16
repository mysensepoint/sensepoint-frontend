import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sense Point - Magazine App",
  description: "Mobile-optimized magazine application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 모바일 최적화 컨테이너 */}
        <div className="min-h-screen bg-white">
          {/* 모바일 너비 제한 및 데스크톱 중앙 정렬 */}
          <div className="w-full max-w-[430px] mx-auto bg-white shadow-lg lg:shadow-xl relative">
            {/* 전역 네비게이션 바 */}
            <Navigation />
            
            {/* 페이지 콘텐츠 */}
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
