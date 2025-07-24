/**
 * Session Provider Component
 * 会话提供者组件
 * 
 * This component wraps the NextAuth SessionProvider to provide
 * authentication context throughout the application.
 * 
 * 此组件包装 NextAuth SessionProvider 以在整个应用程序中
 * 提供身份验证上下文。
 */

'use client'

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface SessionProviderProps {
  children: ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
  return (
    <NextAuthSessionProvider>
      {children}
    </NextAuthSessionProvider>
  )
}