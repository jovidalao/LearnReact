import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import FilterButtons from './components/FilterButtons.jsx';
import './App.css';


// Main App component function
function App() {
  // All todo items
  const [todos, setTodos] = useState([]);
  
  // Manage the current filter (all, active, completed)
  const [filter, setFilter] = useState('all');


  // Load data from localStorage when component mounts
  useEffect(() => {
    // Load todos
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



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
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit an existing todo's text
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, text: newText }
        : todo
    ));
  };

  // Function to clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on current filter state
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
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  // JSX return - the component's rendered output
  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto p-4">
      {/* Header section with title and statistics */}
      <header className="text-center mb-8 p-6 bg-white rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Todo List</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
          <span className="text-gray-600 text-sm font-semibold">Total: {totalTodos}</span>
          <span className="text-gray-600 text-sm font-semibold">Active: {activeTodos}</span>
          <span className="text-gray-600 text-sm font-semibold">Completed: {completedTodos}</span>
        </div>
      </header>

              {/* Main content area */}
      <main className="flex-1 flex flex-col gap-6">
        {/* Component for adding new todos */}
        <AddTodo onAddTodo={addTodo} />

        {/* Filter buttons - 过滤按钮组件 */}
        <FilterButtons 
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        {/* Component for displaying the list of todos */}
        <TodoList 
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />

        {/* Clear completed button - only show if there are completed todos */}
        {completedTodos > 0 && (
          <button 
            className="self-center px-4 py-2 bg-red-500 text-white border-none rounded-lg text-sm cursor-pointer transition-all duration-150 hover:bg-red-600 hover:-translate-y-px"
            onClick={clearCompleted}
          >
            Clear Completed ({completedTodos})
          </button>
        )}
      </main>
    </div>
  );
}

export default App;