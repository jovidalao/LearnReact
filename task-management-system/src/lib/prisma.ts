/**
 * Prisma Client Configuration
 * Prisma 客户端配置
 * 
 * This file sets up the Prisma client with proper connection pooling
 * and ensures we don't create multiple instances in development.
 * 
 * 此文件设置具有适当连接池的 Prisma 客户端，
 * 并确保我们不会在开发中创建多个实例。
 */

import { PrismaClient } from '@prisma/client'

// Global variable to store the Prisma client instance
// 全局变量存储 Prisma 客户端实例
declare global {
  var __prisma: PrismaClient | undefined
}

// Create a single instance of Prisma Client
// 创建 Prisma 客户端的单个实例
export const prisma = globalThis.__prisma || new PrismaClient()

// In development, store the client in a global variable to prevent
// multiple instances from being created during hot reloads
// 在开发中，将客户端存储在全局变量中，以防止
// 在热重载期间创建多个实例
if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma
}

// Export types for use in the application
// 导出类型以供应用程序使用
export type {
  User,
  Task,
  Team,
  Comment,
  Tag,
  TaskStatus,
  TaskPriority,
  TeamRole,
} from '@prisma/client'

// Export utility types for common operations
// 导出常见操作的实用程序类型
export type TaskWithDetails = Task & {
  createdBy: User
  assignedTo: User | null
  team: Team | null
  comments: (Comment & { author: User })[]
  tags: (TaskTag & { tag: Tag })[]
}

export type TaskTag = {
  id: string
  taskId: string
  tagId: string
  task: Task
  tag: Tag
}

export type TeamWithMembers = Team & {
  members: (TeamMember & { user: User })[]
}

export type TeamMember = {
  id: string
  role: TeamRole
  userId: string
  teamId: string
  user: User
  team: Team
}

export type UserWithTasks = User & {
  tasks: Task[]
  assignedTasks: Task[]
}