/**
 * Task Card Component
 * 任务卡片组件
 * 
 * This component displays individual tasks in a card format.
 * It shows task details, priority, status, and action buttons.
 * 
 * 此组件以卡片格式显示单个任务。
 * 它显示任务详细信息、优先级、状态和操作按钮。
 */

'use client'

import { useState } from 'react'
import { TaskWithDetails, TaskStatus, TaskPriority } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'

interface TaskCardProps {
  task: TaskWithDetails
  onUpdateStatus: (taskId: string, status: TaskStatus) => void
  onEdit: (task: TaskWithDetails) => void
  onDelete: (taskId: string) => void
}

export default function TaskCard({ task, onUpdateStatus, onEdit, onDelete }: TaskCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Get priority color classes
  // 获取优先级颜色类
  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case 'URGENT':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'HIGH':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'LOW':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  // Get status color classes
  // 获取状态颜色类
  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case 'PENDING':
        return 'bg-blue-100 text-blue-800'
      case 'IN_PROGRESS':
        return 'bg-yellow-100 text-yellow-800'
      case 'COMPLETED':
        return 'bg-green-100 text-green-800'
      case 'CANCELLED':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Get status display text
  // 获取状态显示文本
  const getStatusText = (status: TaskStatus) => {
    switch (status) {
      case 'PENDING':
        return 'Pending / 待处理'
      case 'IN_PROGRESS':
        return 'In Progress / 进行中'
      case 'COMPLETED':
        return 'Completed / 已完成'
      case 'CANCELLED':
        return 'Cancelled / 已取消'
      default:
        return status
    }
  }

  // Get priority display text
  // 获取优先级显示文本
  const getPriorityText = (priority: TaskPriority) => {
    switch (priority) {
      case 'URGENT':
        return 'Urgent / 紧急'
      case 'HIGH':
        return 'High / 高'
      case 'MEDIUM':
        return 'Medium / 中'
      case 'LOW':
        return 'Low / 低'
      default:
        return priority
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header with title and actions */}
      {/* 标题和操作的标题 */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">
          {task.title}
        </h3>
        
        {/* Action menu */}
        {/* 操作菜单 */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                <button
                  onClick={() => {
                    onEdit(task)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit / 编辑
                </button>
                <button
                  onClick={() => {
                    onDelete(task.id)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                >
                  Delete / 删除
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Task description */}
      {/* 任务描述 */}
      {task.description && (
        <p className="text-gray-600 mb-4 line-clamp-3">
          {task.description}
        </p>
      )}

      {/* Priority and status badges */}
      {/* 优先级和状态徽章 */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
          {getPriorityText(task.priority)}
        </span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
          {getStatusText(task.status)}
        </span>
      </div>

      {/* Task metadata */}
      {/* 任务元数据 */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Created by / 创建者:</span>
          <span>{task.createdBy.name || task.createdBy.email}</span>
        </div>
        
        {task.assignedTo && (
          <div className="flex justify-between text-sm text-gray-500">
            <span>Assigned to / 分配给:</span>
            <span>{task.assignedTo.name || task.assignedTo.email}</span>
          </div>
        )}
        
        {task.dueDate && (
          <div className="flex justify-between text-sm text-gray-500">
            <span>Due date / 截止日期:</span>
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
        )}
        
        <div className="flex justify-between text-sm text-gray-500">
          <span>Created / 创建时间:</span>
          <span>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</span>
        </div>
      </div>

      {/* Task tags */}
      {/* 任务标签 */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {task.tags.map((taskTag) => (
            <span
              key={taskTag.id}
              className="px-2 py-1 rounded text-xs"
              style={{ backgroundColor: `${taskTag.tag.color}20`, color: taskTag.tag.color }}
            >
              {taskTag.tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Quick status update buttons */}
      {/* 快速状态更新按钮 */}
      <div className="flex gap-2 mt-4">
        {task.status !== 'IN_PROGRESS' && (
          <button
            onClick={() => onUpdateStatus(task.id, 'IN_PROGRESS')}
            className="flex-1 px-3 py-2 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition-colors"
          >
            Start / 开始
          </button>
        )}
        
        {task.status !== 'COMPLETED' && (
          <button
            onClick={() => onUpdateStatus(task.id, 'COMPLETED')}
            className="flex-1 px-3 py-2 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors"
          >
            Complete / 完成
          </button>
        )}
        
        {task.status === 'COMPLETED' && (
          <button
            onClick={() => onUpdateStatus(task.id, 'PENDING')}
            className="flex-1 px-3 py-2 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
          >
            Reopen / 重新开放
          </button>
        )}
      </div>
    </div>
  )
}