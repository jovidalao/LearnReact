/**
 * TodoItem Component - Individual todo item display and editing
 * 
 * This component represents a single todo item with the ability to:
 * - Toggle completion status
 * - Edit the todo text
 * - Delete the todo
 */

import React, { useState } from 'react';


// TodoItem component receives props from parent component
function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  // State to manage edit mode (true when editing, false when displaying)
  const [isEditing, setIsEditing] = useState(false);
  
  // State to store the text being edited
  const [editText, setEditText] = useState(todo.text);


  // Function to handle saving the edited text
  const handleSave = () => {
    // Trim whitespace from the edited text
    const trimmedText = editText.trim();
    
    // Only save if the text is not empty
    if (trimmedText) {
      onEdit(todo.id, trimmedText);
      setIsEditing(false);
    } else {
      // If text is empty, revert to original text
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  // Function to handle canceling the edit
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  // Function to handle key press events during editing
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Save when Enter key is pressed
      handleSave();
    } else if (e.key === 'Escape') {
      // Cancel when Escape key is pressed
      handleCancel();
    }
  };

  // Function to format the creation date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // JSX return - the component's rendered output
  return (
    <div className={`group flex items-start gap-4 p-4 border border-gray-200 rounded-lg bg-white transition-all duration-150 hover:shadow-md hover:border-blue-300 ${
      todo.completed ? 'bg-gray-50 opacity-80' : ''
    }`}>
      {/* Checkbox to toggle completion status */}
      <div className="flex items-center mt-0.5">
        <input 
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 cursor-pointer accent-blue-500"
          aria-label={`${todo.completed ? 'Mark as incomplete' : 'Mark as complete'}: "${todo.text}"`}
        />
      </div>

      {/* Content area - shows either text or edit input */}
      <div className="flex-1 flex flex-col gap-1">
        {isEditing ? (
          // Edit mode - show input field
          <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
            <input 
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={handleSave}
              autoFocus
              className="flex-1 p-2 border-2 border-blue-500 rounded text-base bg-white focus:outline-none focus:ring-3 focus:ring-blue-100"
              placeholder="Edit todo..."
            />
            <div className="flex gap-1 self-end md:self-auto">
              <button 
                onClick={handleSave}
                className="w-7 h-7 bg-green-500 text-white border-none rounded cursor-pointer text-sm transition-all duration-150 hover:bg-green-600"
                title="Save"
              >
                ✓
              </button>
              <button 
                onClick={handleCancel}
                className="w-7 h-7 bg-red-500 text-white border-none rounded cursor-pointer text-sm transition-all duration-150 hover:bg-red-600"
                title="Cancel"
              >
                ✗
              </button>
            </div>
          </div>
        ) : (
          // Display mode - show todo text
          <div className="flex flex-col gap-1">
            <span 
              className={`text-base leading-6 cursor-pointer transition-all duration-150 py-1 ${
                todo.completed 
                  ? 'line-through text-gray-500' 
                  : 'hover:text-blue-500'
              }`}
              onDoubleClick={() => setIsEditing(true)}
              title="Double-click to edit"
            >
              {todo.text}
            </span>
            {/* Display creation date */}
            <span className="text-sm text-gray-500">
              Created: {formatDate(todo.createdAt)}
            </span>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className={`flex gap-1 transition-all duration-150 ${
        isEditing ? 'opacity-100' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'
      }`}>
        {!isEditing && (
          <>
            {/* Edit button */}
            <button 
              onClick={() => setIsEditing(true)}
              className="w-8 h-8 border-none rounded cursor-pointer text-sm transition-all duration-150 bg-gray-100 hover:bg-yellow-500"
              title="Edit"
              aria-label={`Edit "${todo.text}"`}
            >
              ✏️
            </button>
            
            {/* Delete button */}
            <button 
              onClick={() => onDelete(todo.id)}
              className="w-8 h-8 border-none rounded cursor-pointer text-sm transition-all duration-150 bg-gray-100 hover:bg-red-500"
              title="Delete"
              aria-label={`Delete "${todo.text}"`}
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
export default TodoItem;