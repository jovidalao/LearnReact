import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 字体配置 / Font configuration
// Geist是Next.js推荐的现代字体系列
// Geist is a modern font family recommended by Next.js
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 网站元数据配置 / Website metadata configuration
// 这些信息用于SEO优化和社交媒体分享
// This information is used for SEO optimization and social media sharing
export const metadata: Metadata = {
  title: "Personal Portfolio | 个人作品集",
  description: "A showcase of my web development projects and skills | 展示我的网页开发项目和技能",
  keywords: ["React", "Next.js", "Portfolio", "Web Development", "作品集", "网页开发"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Personal Portfolio | 个人作品集",
    description: "A showcase of my web development projects and skills | 展示我的网页开发项目和技能",
    type: "website",
    url: "https://yourportfolio.com",
  },
};

// 根布局组件 / Root layout component
// 这是Next.js应用的主布局，包装所有页面
// This is the main layout for the Next.js app, wrapping all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* 页面内容 / Page content */}
        {children}
      </body>
    </html>
  );
}
