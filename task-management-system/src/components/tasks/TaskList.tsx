/**
 * Task List Component
 * 任务列表组件
 * 
 * This component displays a list of tasks with filtering and sorting capabilities.
 * It manages the display of tasks in different views (grid, list).
 * 
 * 此组件显示具有过滤和排序功能的任务列表。
 * 它管理不同视图中任务的显示（网格、列表）。
 */

'use client'

import { useState, useMemo } from 'react'
import { TaskWithDetails, TaskStatus, TaskPriority } from '@/lib/prisma'
import TaskCard from './TaskCard'
import TaskForm, { TaskFormData } from './TaskForm'

interface TaskListProps {
  tasks: TaskWithDetails[]
  onCreateTask: (taskData: TaskFormData) => Promise<void>
  onUpdateTask: (taskId: string, taskData: Partial<TaskFormData>) => Promise<void>
  onDeleteTask: (taskId: string) => Promise<void>
  onUpdateStatus: (taskId: string, status: TaskStatus) => Promise<void>
  isLoading?: boolean
}

export default function TaskList({ 
  tasks, 
  onCreateTask, 
  onUpdateTask, 
  onDeleteTask, 
  onUpdateStatus,
  isLoading = false 
}: TaskListProps) {
  // State for form and filters
  // 表单和过滤器的状态
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<TaskWithDetails | null>(null)
  const [filterStatus, setFilterStatus] = useState<TaskStatus | 'ALL'>('ALL')
  const [filterPriority, setFilterPriority] = useState<TaskPriority | 'ALL'>('ALL')
  const [sortBy, setSortBy] = useState<'createdAt' | 'dueDate' | 'priority'>('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter and sort tasks
  // 过滤和排序任务
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks.filter(task => {
      const matchesStatus = filterStatus === 'ALL' || task.status === filterStatus
      const matchesPriority = filterPriority === 'ALL' || task.priority === filterPriority
      const matchesSearch = !searchTerm || 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchTerm.toLowerCase())
      
      return matchesStatus && matchesPriority && matchesSearch
    })

    // Sort tasks
    // 排序任务
    filtered.sort((a, b) => {
      let aValue: any
      let bValue: any

      switch (sortBy) {
        case 'createdAt':
          aValue = new Date(a.createdAt)
          bValue = new Date(b.createdAt)
          break
        case 'dueDate':
          aValue = a.dueDate ? new Date(a.dueDate) : new Date('9999-12-31')
          bValue = b.dueDate ? new Date(b.dueDate) : new Date('9999-12-31')
          break
        case 'priority':
          const priorityOrder = { URGENT: 4, HIGH: 3, MEDIUM: 2, LOW: 1 }
          aValue = priorityOrder[a.priority]
          bValue = priorityOrder[b.priority]
          break
        default:
          return 0
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

    return filtered
  }, [tasks, filterStatus, filterPriority, searchTerm, sortBy, sortOrder])

  // Handle task creation
  // 处理任务创建
  const handleCreateTask = async (taskData: TaskFormData) => {
    try {
      await onCreateTask(taskData)
      setIsFormOpen(false)
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  // Handle task editing
  // 处理任务编辑
  const handleEditTask = async (taskData: TaskFormData) => {
    if (!editingTask) return
    
    try {
      await onUpdateTask(editingTask.id, taskData)
      setEditingTask(null)
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  // Handle task deletion
  // 处理任务删除
  const handleDeleteTask = async (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task? / 您确定要删除此任务吗？')) {
      try {
        await onDeleteTask(taskId)
      } catch (error) {
        console.error('Error deleting task:', error)
      }
    }
  }

  // Get task count by status
  // 按状态获取任务数量
  const getTaskCountByStatus = (status: TaskStatus) => {
    return tasks.filter(task => task.status === status).length
  }

  return (
    <div className="space-y-6">
      {/* Header with create button */}
      {/* 带有创建按钮的标题 */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Tasks / 任务
        </h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Task / 创建任务
        </button>
      </div>

      {/* Task statistics */}
      {/* 任务统计 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Pending / 待处理</p>
              <p className="text-lg font-semibold text-gray-900">{getTaskCountByStatus('PENDING')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">In Progress / 进行中</p>
              <p className="text-lg font-semibold text-gray-900">{getTaskCountByStatus('IN_PROGRESS')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Completed / 已完成</p>
              <p className="text-lg font-semibold text-gray-900">{getTaskCountByStatus('COMPLETED')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total / 总计</p>
              <p className="text-lg font-semibold text-gray-900">{tasks.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      {/* 过滤器和搜索 */}
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search / 搜索
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search tasks... / 搜索任务..."
            />
          </div>

          <div>
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Status / 状态
            </label>
            <select
              id="status-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as TaskStatus | 'ALL')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="ALL">All / 全部</option>
              <option value="PENDING">Pending / 待处理</option>
              <option value="IN_PROGRESS">In Progress / 进行中</option>
              <option value="COMPLETED">Completed / 已完成</option>
              <option value="CANCELLED">Cancelled / 已取消</option>
            </select>
          </div>

          <div>
            <label htmlFor="priority-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Priority / 优先级
            </label>
            <select
              id="priority-filter"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value as TaskPriority | 'ALL')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="ALL">All / 全部</option>
              <option value="URGENT">Urgent / 紧急</option>
              <option value="HIGH">High / 高</option>
              <option value="MEDIUM">Medium / 中</option>
              <option value="LOW">Low / 低</option>
            </select>
          </div>

          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
              Sort by / 排序方式
            </label>
            <div className="flex space-x-2">
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'createdAt' | 'dueDate' | 'priority')}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="createdAt">Created / 创建时间</option>
                <option value="dueDate">Due Date / 截止日期</option>
                <option value="priority">Priority / 优先级</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Task Grid */}
      {/* 任务网格 */}
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : filteredAndSortedTasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            {searchTerm || filterStatus !== 'ALL' || filterPriority !== 'ALL' 
              ? 'No tasks match your filters / 没有任务符合您的过滤条件'
              : 'No tasks yet. Create your first task! / 还没有任务。创建您的第一个任务！'
            }
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onUpdateStatus={onUpdateStatus}
              onEdit={setEditingTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}

      {/* Task Form Modal */}
      {/* 任务表单模态框 */}
      {isFormOpen && (
        <TaskForm
          onSubmit={handleCreateTask}
          onCancel={() => setIsFormOpen(false)}
          isLoading={isLoading}
        />
      )}

      {/* Edit Task Form Modal */}
      {/* 编辑任务表单模态框 */}
      {editingTask && (
        <TaskForm
          task={editingTask}
          onSubmit={handleEditTask}
          onCancel={() => setEditingTask(null)}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}