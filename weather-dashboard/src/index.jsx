// Entry point for the React application
// React应用程序的入口点
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Create the root element for React 18
// 为React 18创建根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component
// 渲染主App组件
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);