/**
 * TodoList Component - Container for displaying multiple todo items
 * 
 * This component manages the display of multiple todo items in a list format.
 * It demonstrates component composition, prop passing, and conditional rendering.
 */

import React from 'react';
import TodoItem from './TodoItem.jsx';


// TodoList component receives todos array and handler functions as props
function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  

  // Helper function to render empty state when no todos exist
  const renderEmptyState = () => (
    <div className="text-center p-12 text-gray-500">
      <div className="text-6xl mb-4">📝</div>
      <h3 className="mb-2 text-gray-600">No todos yet</h3>
      <p>Add your first todo item above to get started!</p>
    </div>
  );

  // Helper function to render loading state (if needed for future enhancements)
  const renderLoadingState = () => (
    <div className="loading-state">
      <div className="loading-spinner"></div>
      <p>Loading todos...</p>
    </div>
  );

  // Helper function to calculate and display list statistics
  const renderListStats = () => {
    const totalItems = todos.length;
    const completedItems = todos.filter(todo => todo.completed).length;
    const activeItems = totalItems - completedItems;

    return (
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <span className="text-sm text-gray-600 font-semibold">
          📋 Total: {totalItems}
        </span>
        <span className="text-sm text-gray-600 font-semibold">
          ✅ Completed: {completedItems}
        </span>
        <span className="text-sm text-gray-600 font-semibold">
          🔄 Active: {activeItems}
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
            Showing {todos.length} items
          </p>
          {/* Future enhancement: Add pagination controls here */}
          {/* 未来增强：在此处添加分页控件 */}
        </div>
      )}

      {/* Optional: Add keyboard shortcuts help */}
      {/* 可选：添加键盘快捷键帮助 */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <details className="cursor-pointer">
          <summary className="text-sm text-gray-600 font-semibold">Keyboard Shortcuts</summary>
          <div className="mt-4">
            <ul className="list-none flex flex-col gap-1">
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Double-click</kbd> Double-click on todo text to edit
              </li>
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Enter</kbd> Enter to save when editing
              </li>
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Escape</kbd> Escape to cancel editing
              </li>
              <li className="text-sm text-gray-600">
                <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-mono">Space</kbd> Space to toggle completion (when focused)
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}

// Export the TodoList component as the default export
export default TodoList;