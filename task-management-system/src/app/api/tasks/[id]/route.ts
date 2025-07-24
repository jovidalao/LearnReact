/**
 * Individual Task API Routes
 * 单个任务 API 路由
 * 
 * This file handles operations for individual tasks:
 * - GET: Retrieve a specific task by ID
 * - PUT: Update a specific task
 * - DELETE: Delete a specific task
 * 
 * 此文件处理单个任务的操作：
 * - GET：根据 ID 检索特定任务
 * - PUT：更新特定任务
 * - DELETE：删除特定任务
 */

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/tasks/[id] - Retrieve a specific task
// GET /api/tasks/[id] - 检索特定任务
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Find the task
    // 查找任务
    const task = await prisma.task.findUnique({
      where: {
        id: params.id
      },
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
      }
    })

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found / 任务未找到' },
        { status: 404 }
      )
    }

    // Check if user has access to this task
    // 检查用户是否有权访问此任务
    if (task.createdById !== session.user.id && task.assignedToId !== session.user.id) {
      return NextResponse.json(
        { error: 'Forbidden / 禁止访问' },
        { status: 403 }
      )
    }

    return NextResponse.json(task)

  } catch (error) {
    console.error('Error fetching task:', error)
    return NextResponse.json(
      { error: 'Internal server error / 内部服务器错误' },
      { status: 500 }
    )
  }
}

// PUT /api/tasks/[id] - Update a specific task
// PUT /api/tasks/[id] - 更新特定任务
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Find the task first
    // 首先查找任务
    const existingTask = await prisma.task.findUnique({
      where: {
        id: params.id
      }
    })

    if (!existingTask) {
      return NextResponse.json(
        { error: 'Task not found / 任务未找到' },
        { status: 404 }
      )
    }

    // Check if user has permission to update this task
    // 检查用户是否有权更新此任务
    if (existingTask.createdById !== session.user.id && existingTask.assignedToId !== session.user.id) {
      return NextResponse.json(
        { error: 'Forbidden / 禁止访问' },
        { status: 403 }
      )
    }

    // Parse request body
    // 解析请求体
    const { title, description, priority, status, dueDate, assignedToId, teamId } = await request.json()

    // Validate fields if provided
    // 如果提供了字段，则验证它们
    if (priority) {
      const validPriorities = ['LOW', 'MEDIUM', 'HIGH', 'URGENT']
      if (!validPriorities.includes(priority)) {
        return NextResponse.json(
          { error: 'Invalid priority / 无效优先级' },
          { status: 400 }
        )
      }
    }

    if (status) {
      const validStatuses = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED']
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          { error: 'Invalid status / 无效状态' },
          { status: 400 }
        )
      }
    }

    // Build update data
    // 构建更新数据
    const updateData: any = {}
    
    if (title !== undefined) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (priority !== undefined) updateData.priority = priority
    if (status !== undefined) updateData.status = status
    if (assignedToId !== undefined) updateData.assignedToId = assignedToId
    if (teamId !== undefined) updateData.teamId = teamId
    if (dueDate !== undefined) {
      updateData.dueDate = dueDate ? new Date(dueDate) : null
    }

    // Update the task
    // 更新任务
    const updatedTask = await prisma.task.update({
      where: {
        id: params.id
      },
      data: updateData,
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
      }
    })

    return NextResponse.json(updatedTask)

  } catch (error) {
    console.error('Error updating task:', error)
    return NextResponse.json(
      { error: 'Internal server error / 内部服务器错误' },
      { status: 500 }
    )
  }
}

// DELETE /api/tasks/[id] - Delete a specific task
// DELETE /api/tasks/[id] - 删除特定任务
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Find the task first
    // 首先查找任务
    const existingTask = await prisma.task.findUnique({
      where: {
        id: params.id
      }
    })

    if (!existingTask) {
      return NextResponse.json(
        { error: 'Task not found / 任务未找到' },
        { status: 404 }
      )
    }

    // Check if user has permission to delete this task
    // 检查用户是否有权删除此任务
    if (existingTask.createdById !== session.user.id) {
      return NextResponse.json(
        { error: 'Forbidden - Only task creator can delete / 禁止 - 只有任务创建者可以删除' },
        { status: 403 }
      )
    }

    // Delete the task (cascade will handle related records)
    // 删除任务（级联将处理相关记录）
    await prisma.task.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json(
      { message: 'Task deleted successfully / 任务删除成功' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error deleting task:', error)
    return NextResponse.json(
      { error: 'Internal server error / 内部服务器错误' },
      { status: 500 }
    )
  }
}