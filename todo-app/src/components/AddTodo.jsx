/**
 * AddTodo Component - Form for adding new todo items
 * 
 * This component provides a form interface for users to add new todo items.
 * It demonstrates form handling, controlled components, and event management.
 */

import React, { useState } from 'react';


// AddTodo component receives onAddTodo function from parent
function AddTodo({ onAddTodo }) {
  // State to store the current input value
  const [inputValue, setInputValue] = useState('');
  
  // State to manage form validation and error messages
  const [error, setError] = useState('');


  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior (page reload)
    e.preventDefault();
    
    // Trim whitespace from input value
    const trimmedValue = inputValue.trim();
    
    // Validate input - check if it's not empty
    if (trimmedValue === '') {
      setError('Please enter a todo item');
      return;
    }
    
    // Check if todo text is too long (optional validation)
    if (trimmedValue.length > 100) {
      setError('Todo item is too long (max 100 characters)');
      return;
    }

    // Clear any previous error messages
    setError('');
    
    // Call parent function to add the new todo
    onAddTodo(trimmedValue);
    
    // Clear the input field after successful submission
    setInputValue('');
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Clear error message when user starts typing
    if (error) {
      setError('');
    }
  };

  // Function to handle key press events
  const handleKeyPress = (e) => {
    // Submit form when Enter key is pressed
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  // JSX return - the component's rendered output
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Form element with submit handler */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Input container for styling */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Text input field - this is a controlled component */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className={`flex-1 p-4 border-2 ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-base transition-all duration-150 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100`}
            maxLength={100}
            autoFocus
            aria-label="Add new todo item"
            aria-describedby={error ? "error-message" : undefined}
          />
          
          {/* Submit button */}
          <button 
            type="submit"
            className={`px-6 py-4 bg-blue-500 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap ${
              !inputValue.trim() 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'hover:bg-blue-600 hover:-translate-y-px'
            }`}
            disabled={!inputValue.trim()}
            title="Add"
          >
            Add ➕
          </button>
        </div>

        {/* Error message display */}
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
        <div className="text-gray-500 text-sm">
          <small>
            Press Enter to add, maximum 100 characters
          </small>
        </div>
      </form>

      {/* Quick add buttons for common todos (optional feature) */}
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center flex-wrap mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-600 font-semibold">
          Quick add:
        </span>
        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => onAddTodo('Buy groceries')}
            className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white hover:border-blue-500"
            type="button"
          >
            🛒 Groceries
          </button>
          <button 
            onClick={() => onAddTodo('Exercise')}
            className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white hover:border-blue-500"
            type="button"
          >
            💪 Exercise
          </button>
          <button 
            onClick={() => onAddTodo('Read a book')}
            className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm cursor-pointer transition-all duration-150 hover:bg-blue-500 hover:text-white hover:border-blue-500"
            type="button"
          >
            📚 Read
          </button>
        </div>
      </div>
    </div>
  );
}

// Export the AddTodo component as the default export
export default AddTodo;