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
  title: "Sense Makers Magazine",
  description: "모바일 환경에 최적화된 Sense Makers 매거진",
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
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "white",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* 모바일 최적화 레이아웃 컨테이너 */}
        <div
          style={{
            width: "100%",
            maxWidth: "768px",
            minHeight: "100vh",
            backgroundColor: "white",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          {/* 네비게이션 컴포넌트 - 모든 페이지 상단에 표시 */}
          <Navigation />

          {/* 페이지 콘텐츠 */}
          {children}
        </div>
      </body>
    </html>
  );
}
