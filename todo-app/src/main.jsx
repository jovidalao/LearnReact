/**
 * Entry point for the React Todo Application
 * React待办事项应用的入口点
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Get the root element from the HTML document
// 从HTML文档中获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
// 将App组件渲染到根元素中
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);