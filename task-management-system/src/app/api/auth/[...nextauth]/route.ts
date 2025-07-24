/**
 * NextAuth.js API Route Handler
 * NextAuth.js API 路由处理程序
 * 
 * This file handles all authentication requests using NextAuth.js
 * It uses the configuration from our auth.ts file.
 * 
 * 此文件使用 NextAuth.js 处理所有身份验证请求
 * 它使用我们的 auth.ts 文件中的配置。
 */

import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

// Create the NextAuth handler
// 创建 NextAuth 处理程序
const handler = NextAuth(authOptions)

// Export the handler for both GET and POST requests
// 为 GET 和 POST 请求导出处理程序
export { handler as GET, handler as POST }