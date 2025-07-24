/**
 * Tasks API Routes
 * 任务 API 路由
 * 
 * This file handles CRUD operations for tasks:
 * - GET: Retrieve all tasks for the authenticated user
 * - POST: Create a new task
 * 
 * 此文件处理任务的 CRUD 操作：
 * - GET：检索已认证用户的所有任务
 * - POST：创建新任务
 */

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/tasks - Retrieve all tasks for the authenticated user
// GET /api/tasks - 检索已认证用户的所有任务
export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    // 检查用户是否已认证
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized / 未授权' },
        { status: 401 }
      )
    }

    // Get query parameters for filtering
    // 获取用于过滤的查询参数
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const priority = searchParams.get('priority')
    const teamId = searchParams.get('teamId')

    // Build where clause for filtering
    // 构建用于过滤的 where 子句
    const where: any = {
      OR: [
        { createdById: session.user.id },
        { assignedToId: session.user.id }
      ]
    }

    if (status) {
      where.status = status
    }
    if (priority) {
      where.priority = priority
    }
    if (teamId) {
      where.teamId = teamId
    }

    // Fetch tasks with related data
    // 获取任务及相关数据
    const tasks = await prisma.task.findMany({
      where,
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        },
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        },
        team: {
          select: {
            id: true,
            name: true
          }
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        },
        tags: {
          include: {
            tag: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(tasks)

  } catch (error) {
    console.error('Error fetching tasks:', error)
    return NextResponse.json(
      { error: 'Internal server error / 内部服务器错误' },
      { status: 500 }
    )
  }
}

// POST /api/tasks - Create a new task
// POST /api/tasks - 创建新任务
export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated
    // 检查用户是否已认证
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized / 未授权' },
        { status: 401 }
      )
    }

    // Parse request body
    // 解析请求体
    const { title, description, priority, status, dueDate, assignedToId, teamId } = await request.json()

    // Validate required fields
    // 验证必填字段
    if (!title) {
      return NextResponse.json(
        { error: 'Title is required / 标题是必需的' },
        { status: 400 }
      )
    }

    // Validate priority
    // 验证优先级
    const validPriorities = ['LOW', 'MEDIUM', 'HIGH', 'URGENT']
    if (priority && !validPriorities.includes(priority)) {
      return NextResponse.json(
        { error: 'Invalid priority / 无效优先级' },
        { status: 400 }
      )
    }

    // Validate status
    // 验证状态
    const validStatuses = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED']
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status / 无效状态' },
        { status: 400 }
      )
    }

    // Create task data
    // 创建任务数据
    const taskData: any = {
      title,
      description,
      priority: priority || 'MEDIUM',
      status: status || 'PENDING',
      createdById: session.user.id,
    }

    // Add optional fields
    // 添加可选字段
    if (dueDate) {
      taskData.dueDate = new Date(dueDate)
    }
    if (assignedToId) {
      taskData.assignedToId = assignedToId
    }
    if (teamId) {
      taskData.teamId = teamId
    }

    // Create the task
    // 创建任务
    const task = await prisma.task.create({
      data: taskData,
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        },
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        },
        team: {
          select: {
            id: true,
            name: true
          }
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true
              }
            }
          }
        },
        tags: {
          include: {
            tag: true
          }
        }
      }
    })

    return NextResponse.json(task, { status: 201 })

  } catch (error) {
    console.error('Error creating task:', error)
    return NextResponse.json(
      { error: 'Internal server error / 内部服务器错误' },
      { status: 500 }
    )
  }
}