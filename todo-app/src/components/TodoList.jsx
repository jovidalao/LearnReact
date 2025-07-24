/**
 * TodoList Component - Container for displaying multiple todo items
 * TodoList组件 - 显示多个待办事项的容器
 * 
 * This component manages the display of multiple todo items in a list format.
 * It demonstrates component composition, prop passing, and conditional rendering.
 * 
 * 此组件管理以列表格式显示多个待办事项。
 * 它演示了组件组合、属性传递和条件渲染。
 */

import React from 'react';
import TodoItem from './TodoItem.jsx';

// Translation configuration for TodoList component
// TodoList组件的翻译配置
const todoListTranslations = {
  en: {
    emptyState: {
      title: 'No todos yet',
      subtitle: 'Add your first todo item above to get started!'
    },
    loadingState: {
      text: 'Loading todos...'
    },
    stats: {
      total: 'Total',
      completed: 'Completed',
      active: 'Active'
    },
    pagination: {
      showing: 'Showing',
      items: 'items'
    },
    shortcuts: {
      title: 'Keyboard Shortcuts',
      doubleClick: 'Double-click on todo text to edit',
      enter: 'Enter to save when editing',
      escape: 'Escape to cancel editing',
      space: 'Space to toggle completion (when focused)'
    }
  },
  zh: {
    emptyState: {
      title: '还没有待办事项',
      subtitle: '在上面添加您的第一个待办事项以开始使用！'
    },
    loadingState: {
      text: '正在加载待办事项...'
    },
    stats: {
      total: '总计',
      completed: '已完成',
      active: '活跃'
    },
    pagination: {
      showing: '显示',
      items: '项'
    },
    shortcuts: {
      title: '键盘快捷键',
      doubleClick: '双击待办事项文本进行编辑',
      enter: 'Enter编辑时保存',
      escape: 'Escape取消编辑',
      space: '空格切换完成状态（聚焦时）'
    }
  }
};

// TodoList component receives todos array and handler functions as props
// TodoList组件接收待办事项数组和处理函数作为props
function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo, language, translations }) {
  
  // Get current translations for this component
  // 获取此组件的当前翻译
  const t = todoListTranslations[language];

  // Helper function to render empty state when no todos exist
  // 当没有待办事项时渲染空状态的辅助函数
  const renderEmptyState = () => (
    <div className="text-center p-12 text-gray-500">
      <div className="text-6xl mb-4">📝</div>
      <h3 className="mb-2 text-gray-600">{t.emptyState.title}</h3>
      <p>{t.emptyState.subtitle}</p>
    </div>
  );

  // Helper function to render loading state (if needed for future enhancements)
  // 渲染加载状态的辅助函数（如需要用于未来增强）
  const renderLoadingState = () => (
    <div className="loading-state">
      <div className="loading-spinner"></div>
      <p>{t.loadingState.text}</p>
    </div>
  );

  // Helper function to calculate and display list statistics
  // 计算和显示列表统计信息的辅助函数
  const renderListStats = () => {
    const totalItems = todos.length;
    const completedItems = todos.filter(todo => todo.completed).length;
    const activeItems = totalItems - completedItems;

    return (
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <span className="text-sm text-gray-600 font-semibold">
          📋 {t.stats.total}: {totalItems}
        </span>
        <span className="text-sm text-gray-600 font-semibold">
          ✅ {t.stats.completed}: {completedItems}
        </span>
        <span className="text-sm text-gray-600 font-semibold">
          🔄 {t.stats.active}: {activeItems}
        </span>
      </div>
    );
  };

  // Main render logic with conditional rendering
  // 带有条件渲染的主要渲染逻辑
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
      {/* Display statistics when todos exist */}
      {/* 当待办事项存在时显示统计信息 */}
      {todos.length > 0 && renderListStats()}

      {/* Main list container */}
      {/* 主要列表容器 */}
      <div className="min-h-[200px]">
        {/* Conditional rendering based on todos array length */}
        {/* 根据待办事项数组长度的条件渲染 */}
        {todos.length === 0 ? (
          // Show empty state when no todos
          // 没有待办事项时显示空状态
          renderEmptyState()
        ) : (
          // Render the actual todo list
          // 渲染实际的待办事项列表
          <ul className="list-none flex flex-col gap-2" role="list">
            {/* Map through todos array to render individual TodoItem components */}
            {/* 遍历待办事项数组以渲染单个TodoItem组件 */}
            {todos.map((todo) => (
              <li 
                key={todo.id}
                className="slide-in"
                role="listitem"
              >
                {/* Render TodoItem component for each todo */}
                {/* 为每个待办事项渲染TodoItem组件 */}
                <TodoItem
                  todo={todo}
                  onToggle={onToggleTodo}
                  onDelete={onDeleteTodo}
                  onEdit={onEditTodo}
                  language={language}
                  translations={translations}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Optional: Add pagination or "Load More" functionality for large lists */}
      {/* 可选：为大型列表添加分页或"加载更多"功能 */}
      {todos.length > 10 && (
        <div className="list-pagination">
          <p className="pagination-info">
            {t.pagination.showing} {todos.length} {t.pagination.items}
          </p>
          {/* Future enhancement: Add pagination controls here */}
          {/* 未来增强：在此处添加分页控件 */}
        </div>
      )}

      {/* Optional: Add keyboard shortcuts help */}
      {/* 可选：添加键盘快捷键帮助 */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <details className="cursor-pointer">
          <summary className="text-sm text-gray-600 font-semibold">{t.shortcuts.title}</summary>
          <div className="mt-4">
            <ul className="list-none flex flex-col gap-1">
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Double-click</kbd> {t.shortcuts.doubleClick}
              </li>
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Enter</kbd> {t.shortcuts.enter}
              </li>
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Escape</kbd> {t.shortcuts.escape}
              </li>
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Space</kbd> {t.shortcuts.space}
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}

// Export the TodoList component as the default export
// 将TodoList组件作为默认导出
export default TodoList;