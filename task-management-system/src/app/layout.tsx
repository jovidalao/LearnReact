/**
 * Root Layout Component
 * 根布局组件
 * 
 * This is the root layout that wraps all pages in the application.
 * It includes the NextAuth session provider and global styles.
 * 
 * 这是包装应用程序中所有页面的根布局。
 * 它包括 NextAuth 会话提供者和全局样式。
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from '@/components/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Task Management System / 任务管理系统",
  description: "A comprehensive task management system built with Next.js, React, and Prisma / 使用 Next.js、React 和 Prisma 构建的综合任务管理系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
