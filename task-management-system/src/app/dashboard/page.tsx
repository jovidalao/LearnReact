/**
 * Dashboard Page
 * 仪表板页面
 * 
 * This is the main dashboard page that displays the task management interface.
 * It requires authentication and shows the user's tasks and team collaboration features.
 * 
 * 这是显示任务管理界面的主要仪表板页面。
 * 它需要身份验证并显示用户的任务和团队协作功能。
 */

'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TaskWithDetails, TaskStatus } from '@/lib/prisma'
import TaskList from '@/components/tasks/TaskList'
import { TaskFormData } from '@/components/tasks/TaskForm'
import Header from '@/components/layout/Header'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [tasks, setTasks] = useState<TaskWithDetails[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Redirect to signin if not authenticated
  // 如果未经过身份验证，则重定向到登录页面
  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
      return
    }
    fetchTasks()
  }, [session, status, router])

  // Fetch tasks from API
  // 从 API 获取任务
  const fetchTasks = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/tasks')
      if (!response.ok) {
        throw new Error('Failed to fetch tasks')
      }
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      setError('Failed to load tasks / 加载任务失败')
    } finally {
      setIsLoading(false)
    }
  }

  // Handle task creation
  // 处理任务创建
  const handleCreateTask = async (taskData: TaskFormData) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })

      if (!response.ok) {
        throw new Error('Failed to create task')
      }

      const newTask = await response.json()
      setTasks(prev => [newTask, ...prev])
    } catch (error) {
      console.error('Error creating task:', error)
      throw error
    }
  }

  // Handle task update
  // 处理任务更新
  const handleUpdateTask = async (taskId: string, taskData: Partial<TaskFormData>) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })

      if (!response.ok) {
        throw new Error('Failed to update task')
      }

      const updatedTask = await response.json()
      setTasks(prev => prev.map(task => 
        task.id === taskId ? updatedTask : task
      ))
    } catch (error) {
      console.error('Error updating task:', error)
      throw error
    }
  }

  // Handle task deletion
  // 处理任务删除
  const handleDeleteTask = async (taskId: string) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete task')
      }

      setTasks(prev => prev.filter(task => task.id !== taskId))
    } catch (error) {
      console.error('Error deleting task:', error)
      throw error
    }
  }

  // Handle status update
  // 处理状态更新
  const handleUpdateStatus = async (taskId: string, status: TaskStatus) => {
    try {
      await handleUpdateTask(taskId, { status })
    } catch (error) {
      console.error('Error updating task status:', error)
      throw error
    }
  }

  // Show loading state
  // 显示加载状态
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Show error state
  // 显示错误状态
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => fetchTasks()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Try Again / 重试
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TaskList
          tasks={tasks}
          onCreateTask={handleCreateTask}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          onUpdateStatus={handleUpdateStatus}
          isLoading={isLoading}
        />
      </main>
    </div>
  )
}