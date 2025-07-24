/**
 * AddTodo Component - Form for adding new todo items
 * AddTodo组件 - 添加新待办事项的表单
 * 
 * This component provides a form interface for users to add new todo items.
 * It demonstrates form handling, controlled components, and event management.
 * 
 * 此组件为用户提供了添加新待办事项的表单界面。
 * 它演示了表单处理、受控组件和事件管理。
 */

import React, { useState } from 'react';

// Translation configuration for AddTodo component
// AddTodo组件的翻译配置
const addTodoTranslations = {
  en: {
    placeholder: 'What needs to be done?',
    addButton: 'Add',
    emptyError: 'Please enter a todo item',
    tooLongError: 'Todo item is too long (max 100 characters)',
    helperText: 'Press Enter to add, maximum 100 characters',
    quickAdd: 'Quick add',
    quickTodos: {
      groceries: 'Buy groceries',
      exercise: 'Exercise',
      reading: 'Read a book'
    },
    quickLabels: {
      groceries: 'Groceries',
      exercise: 'Exercise', 
      reading: 'Read'
    }
  },
  zh: {
    placeholder: '需要做什么？',
    addButton: '添加',
    emptyError: '请输入待办事项',
    tooLongError: '待办事项过长（最多100个字符）',
    helperText: '按Enter添加，最多100个字符',
    quickAdd: '快速添加',
    quickTodos: {
      groceries: '买杂货',
      exercise: '锻炼',
      reading: '读书'
    },
    quickLabels: {
      groceries: '杂货',
      exercise: '锻炼',
      reading: '读书'
    }
  }
};

// AddTodo component receives onAddTodo function and language props from parent
// AddTodo组件从父组件接收onAddTodo函数和语言相关的props
function AddTodo({ onAddTodo, language, translations }) {
  // State to store the current input value
  // 存储当前输入值的状态
  const [inputValue, setInputValue] = useState('');
  
  // State to manage form validation and error messages
  // 管理表单验证和错误消息的状态
  const [error, setError] = useState('');

  // Get current translations for this component
  // 获取此组件的当前翻译
  const t = addTodoTranslations[language];

  // Function to handle form submission
  // 处理表单提交的函数
  const handleSubmit = (e) => {
    // Prevent default form submission behavior (page reload)
    // 阻止默认表单提交行为（页面重新加载）
    e.preventDefault();
    
    // Trim whitespace from input value
    // 从输入值中去除空白字符
    const trimmedValue = inputValue.trim();
    
    // Validate input - check if it's not empty
    // 验证输入 - 检查是否不为空
    if (trimmedValue === '') {
      setError(t.emptyError);
      return;
    }
    
    // Check if todo text is too long (optional validation)
    // 检查待办事项文本是否过长（可选验证）
    if (trimmedValue.length > 100) {
      setError(t.tooLongError);
      return;
    }

    // Clear any previous error messages
    // 清除之前的错误消息
    setError('');
    
    // Call parent function to add the new todo
    // 调用父函数添加新的待办事项
    onAddTodo(trimmedValue);
    
    // Clear the input field after successful submission
    // 成功提交后清空输入字段
    setInputValue('');
  };

  // Function to handle input changes
  // 处理输入变化的函数
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Clear error message when user starts typing
    // 当用户开始输入时清除错误消息
    if (error) {
      setError('');
    }
  };

  // Function to handle key press events
  // 处理按键事件的函数
  const handleKeyPress = (e) => {
    // Submit form when Enter key is pressed
    // 按下Enter键时提交表单
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  // JSX return - the component's rendered output
  // JSX返回 - 组件的渲染输出
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Form element with submit handler */}
      {/* 带有提交处理程序的表单元素 */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Input container for styling */}
        {/* 用于样式的输入容器 */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Text input field - this is a controlled component */}
          {/* 文本输入字段 - 这是一个受控组件 */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder={t.placeholder}
            className={`flex-1 p-4 border-2 ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-base transition-all duration-150 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100`}
            maxLength={100}
            autoFocus
            aria-label="Add new todo item"
            aria-describedby={error ? "error-message" : undefined}
          />
          
          {/* Submit button */}
          {/* 提交按钮 */}
          <button 
            type="submit"
            className={`px-6 py-4 bg-blue-500 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap ${
              !inputValue.trim() 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'hover:bg-blue-600 hover:-translate-y-px'
            }`}
            disabled={!inputValue.trim()}
            title={t.addButton}
          >
            {t.addButton} ➕
          </button>
        </div>

        {/* Error message display */}
        {/* 错误消息显示 */}
        {error && (
          <div 
            id="error-message"
            className="text-red-500 text-sm mt-1"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Helper text */}
        {/* 帮助文本 */}
        <div className="text-gray-500 text-sm">
          <small>
            {t.helperText}
          </small>
        </div>
      </form>

      {/* Quick add buttons for common todos (optional feature) */}
      {/* 常见待办事项的快速添加按钮（可选功能） */}
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center flex-wrap mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-600 font-semibold">
          {t.quickAdd}:
        </span>
        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => onAddTodo(t.quickTodos.groceries)}
            className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white hover:border-blue-500"
            type="button"
          >
            🛒 {t.quickLabels.groceries}
          </button>
          <button 
            onClick={() => onAddTodo(t.quickTodos.exercise)}
            className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white hover:border-blue-500"
            type="button"
          >
            💪 {t.quickLabels.exercise}
          </button>
          <button 
            onClick={() => onAddTodo(t.quickTodos.reading)}
            className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white hover:border-blue-500"
            type="button"
          >
            📚 {t.quickLabels.reading}
          </button>
        </div>
      </div>
    </div>
  );
}

// Export the AddTodo component as the default export
// 将AddTodo组件作为默认导出
export default AddTodo;