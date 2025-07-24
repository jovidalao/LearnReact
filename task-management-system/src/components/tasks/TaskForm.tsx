/**
 * Task Form Component
 * 任务表单组件
 * 
 * This component provides a form for creating and editing tasks.
 * It includes validation, priority selection, and due date picker.
 * 
 * 此组件提供用于创建和编辑任务的表单。
 * 它包括验证、优先级选择和截止日期选择器。
 */

'use client'

import { useState, useEffect } from 'react'
import { TaskWithDetails, TaskPriority, TaskStatus } from '@/lib/prisma'

interface TaskFormProps {
  task?: TaskWithDetails | null
  onSubmit: (taskData: TaskFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

export interface TaskFormData {
  title: string
  description?: string
  priority: TaskPriority
  status: TaskStatus
  dueDate?: string
  assignedToId?: string
  teamId?: string
}

export default function TaskForm({ task, onSubmit, onCancel, isLoading = false }: TaskFormProps) {
  // Form state
  // 表单状态
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    priority: 'MEDIUM',
    status: 'PENDING',
    dueDate: '',
  })

  // Initialize form with task data if editing
  // 如果正在编辑，则使用任务数据初始化表单
  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description || '',
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
        assignedToId: task.assignedToId || '',
        teamId: task.teamId || '',
      })
    }
  }, [task])

  // Handle form submission
  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  // Handle input changes
  // 处理输入更改
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {task ? 'Edit Task / 编辑任务' : 'Create Task / 创建任务'}
            </h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Task Title */}
            {/* 任务标题 */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Task Title / 任务标题 *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter task title / 输入任务标题"
              />
            </div>

            {/* Task Description */}
            {/* 任务描述 */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description / 描述
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter task description / 输入任务描述"
              />
            </div>

            {/* Priority Selection */}
            {/* 优先级选择 */}
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Priority / 优先级
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="LOW">Low / 低</option>
                <option value="MEDIUM">Medium / 中</option>
                <option value="HIGH">High / 高</option>
                <option value="URGENT">Urgent / 紧急</option>
              </select>
            </div>

            {/* Status Selection (only for editing) */}
            {/* 状态选择（仅用于编辑） */}
            {task && (
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Status / 状态
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="PENDING">Pending / 待处理</option>
                  <option value="IN_PROGRESS">In Progress / 进行中</option>
                  <option value="COMPLETED">Completed / 已完成</option>
                  <option value="CANCELLED">Cancelled / 已取消</option>
                </select>
              </div>
            )}

            {/* Due Date */}
            {/* 截止日期 */}
            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-2">
                Due Date / 截止日期
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Form Actions */}
            {/* 表单操作 */}
            <div className="flex justify-end space-x-3 pt-6">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel / 取消
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isLoading 
                  ? (task ? 'Updating... / 更新中...' : 'Creating... / 创建中...') 
                  : (task ? 'Update Task / 更新任务' : 'Create Task / 创建任务')
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}