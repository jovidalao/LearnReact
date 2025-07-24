/**
 * App组件 - React应用的根组件 / App Component - Root component of the React application
 * 
 * 这是应用程序的主入口组件，负责渲染整个计算器应用
 * This is the main entry component of the application, responsible for rendering the entire calculator app
 */

import React from 'react';
import Calculator from './components/Calculator.jsx';
import './App.css';

/**
 * App主组件 / App Main Component
 * 
 * 这个组件作为应用的根容器，包含全局样式和布局
 * This component serves as the root container of the app, containing global styles and layout
 */
function App() {
  return (
    <div className="App">
      {/* 
        应用标题区域（可选显示）
        App title area (optional display)
      */}
      <header className="App-header">
        {/* 
          主计算器组件 
          Main calculator component 
        */}
        <Calculator />
        
        {/* 
          学习信息和版权区域 
          Learning information and copyright area 
        */}
        <footer className="App-footer">
          <div className="learning-info">
            <p>
              📚 <strong>Learning Project</strong> / 学习项目
            </p>
            <p>
              Week 6 of Full-Stack Development Learning Plan<br />
              全栈开发学习计划第6周
            </p>
            <div className="skills-demonstrated">
              <h4>Skills Demonstrated / 展示的技能:</h4>
              <ul>
                <li>✅ React Components & JSX / React组件与JSX</li>
                <li>✅ useState & useEffect Hooks / useState与useEffect钩子</li>
                <li>✅ Event Handling / 事件处理</li>
                <li>✅ State Management / 状态管理</li>
                <li>✅ Responsive CSS Design / 响应式CSS设计</li>
                <li>✅ Component Composition / 组件组合</li>
                <li>✅ Keyboard Accessibility / 键盘可访问性</li>
              </ul>
            </div>
          </div>
          
          <div className="project-info">
            <p>
              🚀 Built with React 18 & Modern JavaScript<br />
              使用React 18和现代JavaScript构建
            </p>
            <p>
              💡 Includes bilingual comments for better learning<br />
              包含双语注释以提高学习效果
            </p>
          </div>
        </footer>
      </header>
    </div>
  );
}

/**
 * 导出App组件 / Export App component
 * 
 * 学习要点 / Learning Points:
 * 
 * 1. 函数式组件 / Functional Components
 *    - 使用function关键字定义组件 / Define component with function keyword
 *    - 简单的组件结构和JSX返回 / Simple component structure and JSX return
 * 
 * 2. 组件导入和使用 / Component Import and Usage
 *    - 从其他文件导入组件 / Import components from other files
 *    - 在JSX中使用自定义组件 / Use custom components in JSX
 * 
 * 3. CSS导入 / CSS Import
 *    - 导入CSS文件应用样式 / Import CSS files to apply styles
 *    - 全局样式的管理 / Global styles management
 * 
 * 4. JSX结构 / JSX Structure
 *    - 语义化的HTML标签使用 / Use of semantic HTML tags
 *    - 注释的正确写法 / Proper way to write comments
 * 
 * 5. 应用架构 / Application Architecture
 *    - 根组件的职责 / Responsibilities of root component
 *    - 应用级别的布局设计 / Application-level layout design
 * 
 * 6. 信息展示 / Information Display
 *    - 项目信息的清晰展示 / Clear display of project information
 *    - 学习目标的可视化 / Visualization of learning objectives
 */
export default App;