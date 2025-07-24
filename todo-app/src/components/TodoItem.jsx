/**
 * TodoItem Component - Individual todo item display and editing
 * TodoItem组件 - 单个待办事项的显示和编辑
 * 
 * This component represents a single todo item with the ability to:
 * - Toggle completion status
 * - Edit the todo text
 * - Delete the todo
 * 
 * 此组件代表一个单独的待办事项，具有以下功能：
 * - 切换完成状态
 * - 编辑待办事项文本
 * - 删除待办事项
 */

import React, { useState } from 'react';

// Translation configuration for TodoItem component
// TodoItem组件的翻译配置
const todoItemTranslations = {
  en: {
    editPlaceholder: 'Edit todo...',
    saveButton: 'Save',
    cancelButton: 'Cancel',
    editButton: 'Edit',
    deleteButton: 'Delete',
    created: 'Created',
    doubleClickHint: 'Double-click to edit',
    markComplete: 'Mark as complete',
    markIncomplete: 'Mark as incomplete'
  },
  zh: {
    editPlaceholder: '编辑待办事项...',
    saveButton: '保存',
    cancelButton: '取消',
    editButton: '编辑',
    deleteButton: '删除',
    created: '创建于',
    doubleClickHint: '双击编辑',
    markComplete: '标记为完成',
    markIncomplete: '标记为未完成'
  }
};

// TodoItem component receives props from parent component
// TodoItem组件从父组件接收props
function TodoItem({ todo, onToggle, onDelete, onEdit, language, translations }) {
  // State to manage edit mode (true when editing, false when displaying)
  // 管理编辑模式的状态（编辑时为true，显示时为false）
  const [isEditing, setIsEditing] = useState(false);
  
  // State to store the text being edited
  // 存储正在编辑的文本的状态
  const [editText, setEditText] = useState(todo.text);

  // Get current translations for this component
  // 获取此组件的当前翻译
  const t = todoItemTranslations[language];

  // Function to handle saving the edited text
  // 处理保存编辑文本的函数
  const handleSave = () => {
    // Trim whitespace from the edited text
    // 从编辑的文本中去除空白字符
    const trimmedText = editText.trim();
    
    // Only save if the text is not empty
    // 只有在文本不为空时才保存
    if (trimmedText) {
      onEdit(todo.id, trimmedText);
      setIsEditing(false);
    } else {
      // If text is empty, revert to original text
      // 如果文本为空，恢复到原始文本
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  // Function to handle canceling the edit
  // 处理取消编辑的函数
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  // Function to handle key press events during editing
  // 处理编辑过程中按键事件的函数
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Save when Enter key is pressed
      // 按下Enter键时保存
      handleSave();
    } else if (e.key === 'Escape') {
      // Cancel when Escape key is pressed
      // 按下Escape键时取消
      handleCancel();
    }
  };

  // Function to format the creation date for display
  // 格式化创建日期以供显示的函数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // JSX return - the component's rendered output
  // JSX返回 - 组件的渲染输出
  return (
    <div className={`group flex items-start gap-4 p-4 border border-gray-200 rounded-lg bg-white transition-all duration-150 hover:shadow-md hover:border-blue-300 ${
      todo.completed ? 'bg-gray-50 opacity-80' : ''
    }`}>
      {/* Checkbox to toggle completion status */}
      {/* 用于切换完成状态的复选框 */}
      <div className="flex items-center mt-0.5">
        <input 
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 cursor-pointer accent-blue-500"
          aria-label={`${todo.completed ? t.markIncomplete : t.markComplete}: "${todo.text}"`}
        />
      </div>

      {/* Content area - shows either text or edit input */}
      {/* 内容区域 - 显示文本或编辑输入框 */}
      <div className="flex-1 flex flex-col gap-1">
        {isEditing ? (
          // Edit mode - show input field
          // 编辑模式 - 显示输入字段
          <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
            <input 
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={handleSave}
              autoFocus
              className="flex-1 p-2 border-2 border-blue-500 rounded text-base bg-white focus:outline-none focus:ring-3 focus:ring-blue-100"
              placeholder={t.editPlaceholder}
            />
            <div className="flex gap-1 self-end md:self-auto">
              <button 
                onClick={handleSave}
                className="w-7 h-7 bg-green-500 text-white border-none rounded cursor-pointer text-sm transition-all duration-150 hover:bg-green-600"
                title={t.saveButton}
              >
                ✓
              </button>
              <button 
                onClick={handleCancel}
                className="w-7 h-7 bg-red-500 text-white border-none rounded cursor-pointer text-sm transition-all duration-150 hover:bg-red-600"
                title={t.cancelButton}
              >
                ✗
              </button>
            </div>
          </div>
        ) : (
          // Display mode - show todo text
          // 显示模式 - 显示待办事项文本
          <div className="flex flex-col gap-1">
            <span 
              className={`text-base leading-6 cursor-pointer transition-all duration-150 py-1 ${
                todo.completed 
                  ? 'line-through text-gray-500' 
                  : 'hover:text-blue-500'
              }`}
              onDoubleClick={() => setIsEditing(true)}
              title={t.doubleClickHint}
            >
              {todo.text}
            </span>
            {/* Display creation date */}
            {/* 显示创建日期 */}
            <span className="text-sm text-gray-500">
              {t.created}: {formatDate(todo.createdAt)}
            </span>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {/* 操作按钮 */}
      <div className={`flex gap-1 transition-all duration-150 ${
        isEditing ? 'opacity-100' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'
      }`}>
        {!isEditing && (
          <>
            {/* Edit button */}
            {/* 编辑按钮 */}
            <button 
              onClick={() => setIsEditing(true)}
              className="w-8 h-8 border-none rounded cursor-pointer text-sm transition-all duration-150 bg-gray-100 hover:bg-yellow-500"
              title={t.editButton}
              aria-label={`${t.editButton} "${todo.text}"`}
            >
              ✏️
            </button>
            
            {/* Delete button */}
            {/* 删除按钮 */}
            <button 
              onClick={() => onDelete(todo.id)}
              className="w-8 h-8 border-none rounded cursor-pointer text-sm transition-all duration-150 bg-gray-100 hover:bg-red-500"
              title={t.deleteButton}
              aria-label={`${t.deleteButton} "${todo.text}"`}
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// Export the TodoItem component as the default export
// 将TodoItem组件作为默认导出
export default TodoItem;