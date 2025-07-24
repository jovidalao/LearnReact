/**
 * NextAuth.js Configuration
 * NextAuth.js 配置
 * 
 * This file configures authentication using NextAuth.js with email/password
 * and optional OAuth providers. It integrates with our Prisma database.
 * 
 * 此文件使用 NextAuth.js 配置身份验证，支持电子邮件/密码
 * 和可选的 OAuth 提供者。它与我们的 Prisma 数据库集成。
 */

import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  // Use Prisma adapter for database integration
  // 使用 Prisma 适配器进行数据库集成
  adapter: PrismaAdapter(prisma),
  
  // Configure authentication providers
  // 配置身份验证提供程序
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { 
          label: 'Email / 电子邮件', 
          type: 'email',
          placeholder: 'Enter your email / 输入您的电子邮件'
        },
        password: { 
          label: 'Password / 密码', 
          type: 'password',
          placeholder: 'Enter your password / 输入您的密码'
        }
      },
      async authorize(credentials) {
        // Validate input credentials
        // 验证输入凭据
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Find user in database
        // 在数据库中查找用户
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        // If user doesn't exist, return null
        // 如果用户不存在，返回 null
        if (!user) {
          return null
        }

        // For demo purposes, we'll create a simple password check
        // In production, you should hash passwords properly
        // 对于演示目的，我们将创建一个简单的密码检查
        // 在生产环境中，您应该正确地散列密码
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password || '')

        if (!isPasswordValid) {
          return null
        }

        // Return user object for successful authentication
        // 返回用户对象以成功身份验证
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      }
    })
  ],
  
  // Configure session strategy
  // 配置会话策略
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days / 30 天
  },
  
  // Configure JWT settings
  // 配置 JWT 设置
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days / 30 天
  },
  
  // Custom pages for authentication
  // 身份验证的自定义页面
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
  },
  
  // Callbacks to customize authentication behavior
  // 回调函数自定义身份验证行为
  callbacks: {
    async jwt({ token, user }) {
      // Include user ID in JWT token
      // 在 JWT 令牌中包含用户 ID
      if (user) {
        token.id = user.id
      }
      return token
    },
    
    async session({ session, token }) {
      // Include user ID in session
      // 在会话中包含用户 ID
      if (token) {
        session.user.id = token.id as string
      }
      return session
    }
  }
}

/**
 * Helper function to hash passwords
 * 散列密码的辅助函数
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return await bcrypt.hash(password, saltRounds)
}

/**
 * Helper function to verify passwords
 * 验证密码的辅助函数
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}