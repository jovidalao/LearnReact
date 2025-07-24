/**
 * Display组件 - 计算器显示屏 / Display Component - Calculator Display Screen
 * 
 * 这个组件负责显示当前的数字、计算结果和错误信息
 * This component is responsible for displaying current numbers, calculation results, and error messages
 */

import React from 'react';
import './Display.css';
import { formatDisplayValue, isErrorMessage } from '../utils/calculations';

/**
 * Display组件 / Display Component
 * @param {Object} props - 组件属性 / Component props
 * @param {string} props.value - 要显示的值 / Value to display
 * @param {string} props.expression - 当前的表达式（可选）/ Current expression (optional)
 * @param {boolean} props.hasMemory - 是否有内存值 / Whether there's a memory value
 */
const Display = ({ value, expression = '', hasMemory = false }) => {
  
  /**
   * 格式化显示值 / Format display value
   * 这里我们使用导入的工具函数来格式化显示值
   * Here we use imported utility function to format display value
   */
  const formattedValue = formatDisplayValue(value);
  
  /**
   * 确定显示屏的CSS类名 / Determine display screen CSS class name
   * 根据内容类型添加不同的样式类
   * Add different style classes based on content type
   */
  const getDisplayClassName = () => {
    let className = 'display';
    
    // 如果是错误信息，添加错误样式 / If it's error message, add error style
    if (isErrorMessage(formattedValue)) {
      className += ' display--error';
    }
    
    // 如果内容太长，添加小字体样式 / If content is too long, add small font style
    if (formattedValue.length > 10) {
      className += ' display--small-text';
    }
    
    return className;
  };

  return (
    <div className="display-container">
      {/* 
        表达式显示区域（显示当前的计算表达式）
        Expression display area (shows current calculation expression)
      */}
      {expression && (
        <div className="display-expression">
          {expression}
        </div>
      )}
      
      {/* 
        主显示区域 
        Main display area 
      */}
      <div className={getDisplayClassName()}>
        {/* 
          内存指示器 - 当有内存值时显示M标记
          Memory indicator - shows M mark when there's a memory value
        */}
        {hasMemory && (
          <span className="memory-indicator" title="Memory has value / 内存中有值">
            M
          </span>
        )}
        
        {/* 
          数值显示 
          Number display 
        */}
        <span className="display-value">
          {formattedValue}
        </span>
      </div>
      
      {/* 
        如果是错误信息，显示额外的错误提示
        If it's an error message, show additional error hint
      */}
      {isErrorMessage(formattedValue) && (
        <div className="error-hint">
          Press C to clear / 按C键清除
        </div>
      )}
    </div>
  );
};

/**
 * 导出Display组件 / Export Display component
 * 
 * 学习要点 / Learning Points:
 * 
 * 1. 函数式组件的使用 / Using functional components
 *    - 使用箭头函数定义组件 / Define component with arrow function
 *    - 接收props作为参数 / Receive props as parameter
 * 
 * 2. 条件渲染 / Conditional rendering
 *    - 使用&&操作符进行条件渲染 / Use && operator for conditional rendering
 *    - 根据状态显示不同内容 / Show different content based on state
 * 
 * 3. CSS类名动态生成 / Dynamic CSS class name generation
 *    - 根据状态动态添加CSS类 / Dynamically add CSS classes based on state
 *    - 使用模板字符串组合类名 / Use template strings to combine class names
 * 
 * 4. 工具函数的使用 / Using utility functions
 *    - 将复杂逻辑提取到工具函数 / Extract complex logic to utility functions
 *    - 保持组件代码的简洁性 / Keep component code clean
 * 
 * 5. 可访问性考虑 / Accessibility considerations
 *    - 使用title属性提供额外信息 / Use title attribute for additional info
 *    - 语义化的HTML结构 / Semantic HTML structure
 */
export default Display;