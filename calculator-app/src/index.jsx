// React应用的入口点 / Entry point of the React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 全局CSS样式 / Global CSS styles
import App from './App.jsx'; // 根组件 / Root component

/**
 * 创建React应用的根节点并渲染App组件
 * Create React app root node and render App component
 * 
 * React 18引入了新的createRoot API来替代之前的ReactDOM.render
 * React 18 introduced the new createRoot API to replace the previous ReactDOM.render
 */

// 获取HTML中id为'root'的DOM元素 / Get DOM element with id 'root' from HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染App组件到根节点 / Render App component to root node
// React.StrictMode帮助检测潜在问题和副作用 / React.StrictMode helps detect potential issues and side effects
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * 学习要点 / Learning Points:
 * 
 * 1. ReactDOM.createRoot是React 18的新特性
 *    ReactDOM.createRoot is a new feature in React 18
 * 
 * 2. StrictMode是开发模式下的检查工具，不会在生产环境中运行
 *    StrictMode is a development tool that doesn't run in production
 * 
 * 3. 这个文件将整个React应用连接到HTML DOM
 *    This file connects the entire React app to the HTML DOM
 */