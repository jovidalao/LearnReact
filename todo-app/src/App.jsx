import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css';

// Translation configuration / 翻译配置
const translations = {
  en: {
    title: 'Todo List',
    stats: {
      total: 'Total',
      active: 'Active', 
      completed: 'Completed'
    },
    filters: {
      all: 'All',
      active: 'Active',
      completed: 'Completed'
    },
    actions: {
      clearCompleted: 'Clear Completed'
    },
    language: {
      switch: 'Switch Language',
      english: 'English',
      chinese: '中文'
    }
  },
  zh: {
    title: '待办事项列表',
    stats: {
      total: '总计',
      active: '活跃',
      completed: '已完成'
    },
    filters: {
      all: '全部',
      active: '活跃', 
      completed: '已完成'
    },
    actions: {
      clearCompleted: '清除已完成'
    },
    language: {
      switch: '切换语言',
      english: 'English',
      chinese: '中文'
    }
  }
};

// Main App component function
function App() {
  // Language state management / 语言状态管理
  const [language, setLanguage] = useState('en');
  
  // All todo items
  const [todos, setTodos] = useState([]);
  
  // Manage the current filter (all, active, completed)
  const [filter, setFilter] = useState('all');

  // Get current translations / 获取当前翻译
  const t = translations[language];

  // Load data from localStorage when component mounts
  // 组件挂载时从localStorage加载数据
  useEffect(() => {
    // Load todos / 加载待办事项
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    
    // Load language preference / 加载语言偏好
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'zh')) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Save language preference whenever language changes
  // 语言变化时保存语言偏好
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Function to toggle language / 切换语言的函数
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Function to add a new todo item
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([newTodo, ...todos]);
  };

  // Toggle the completion status of a todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  // Function to delete a todo item
  // 删除待办事项的函数
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit an existing todo's text
  // 编辑现有待办事项文本的函数
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, text: newText }
        : todo
    ));
  };

  // Function to clear all completed todos
  // 清除所有已完成待办事项的函数
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on current filter state
  // 根据当前过滤器状态过滤待办事项
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  // Calculate statistics for display
  // 计算用于显示的统计信息
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  // JSX return - the component's rendered output
  // JSX返回 - 组件的渲染输出
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-4xl mx-auto p-4">
      {/* Header section with title, language switcher and statistics */}
      {/* 标题、语言切换器和统计信息的标题部分 */}
      <header className="text-center mb-8 p-6 bg-white rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600 mb-4 md:mb-0">{t.title}</h1>
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 text-gray-700 min-w-16 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:-translate-y-px focus:outline-none focus:ring-3 focus:ring-blue-200"
            title={t.language.switch}
          >
            {language === 'en' ? t.language.chinese : t.language.english}
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
          <span className="text-gray-600 text-sm font-semibold">{t.stats.total}: {totalTodos}</span>
          <span className="text-gray-600 text-sm font-semibold">{t.stats.active}: {activeTodos}</span>
          <span className="text-gray-600 text-sm font-semibold">{t.stats.completed}: {completedTodos}</span>
        </div>
      </header>

      {/* Main content area */}
      {/* 主要内容区域 */}
      <main className="flex-1 flex flex-col gap-6">
        {/* Component for adding new todos */}
        {/* 添加新待办事项的组件 */}
        <AddTodo onAddTodo={addTodo} language={language} translations={translations} />

        {/* Filter buttons */}
        {/* 过滤按钮 */}
        <div className="flex gap-2 justify-center bg-white p-4 rounded-xl shadow-sm flex-wrap">
          <button 
            className={`px-4 py-2 border-2 border-gray-300 bg-white rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 ${
              filter === 'all' 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'hover:border-blue-500 hover:text-blue-500'
            }`}
            onClick={() => setFilter('all')}
          >
            {t.filters.all}
          </button>
          <button 
            className={`px-4 py-2 border-2 border-gray-300 bg-white rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 ${
              filter === 'active' 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'hover:border-blue-500 hover:text-blue-500'
            }`}
            onClick={() => setFilter('active')}
          >
            {t.filters.active}
          </button>
          <button 
            className={`px-4 py-2 border-2 border-gray-300 bg-white rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 ${
              filter === 'completed' 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'hover:border-blue-500 hover:text-blue-500'
            }`}
            onClick={() => setFilter('completed')}
          >
            {t.filters.completed}
          </button>
        </div>

        {/* Component for displaying the list of todos */}
        {/* 显示待办事项列表的组件 */}
        <TodoList 
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
          language={language}
          translations={translations}
        />

        {/* Clear completed button - only show if there are completed todos */}
        {/* 清除已完成按钮 - 仅在有已完成待办事项时显示 */}
        {completedTodos > 0 && (
          <button 
            className="self-center px-4 py-2 bg-red-500 text-white border-none rounded-lg text-sm cursor-pointer transition-all duration-150 hover:bg-red-600 hover:-translate-y-px"
            onClick={clearCompleted}
          >
            {t.actions.clearCompleted} ({completedTodos})
          </button>
        )}
      </main>
    </div>
  );
}

export default App;