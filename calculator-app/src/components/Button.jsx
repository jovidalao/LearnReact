/**
 * Button组件 - 可复用的计算器按钮 / Button Component - Reusable Calculator Button
 * 
 * 这个组件创建了一个可复用的按钮，用于计算器的所有按钮
 * This component creates a reusable button for all calculator buttons
 */

import React from 'react';
import './Button.css';
import { getButtonType } from '../utils/constants';

/**
 * Button组件 / Button Component
 * @param {Object} props - 组件属性 / Component props
 * @param {string} props.value - 按钮显示的值 / Value displayed on button
 * @param {function} props.onClick - 点击事件处理函数 / Click event handler function
 * @param {string} props.className - 额外的CSS类名（可选）/ Additional CSS class name (optional)
 * @param {boolean} props.disabled - 是否禁用按钮（可选）/ Whether button is disabled (optional)
 * @param {string} props.title - 鼠标悬停提示（可选）/ Mouse hover tooltip (optional)
 */
const Button = ({ 
  value, 
  onClick, 
  className = '', 
  disabled = false, 
  title = '' 
}) => {
  
  /**
   * 处理按钮点击事件 / Handle button click event
   * 这个函数确保只有在按钮没有被禁用时才执行点击处理
   * This function ensures click handling only executes when button is not disabled
   */
  const handleClick = () => {
    if (!disabled && onClick) {
      // 调用传入的点击处理函数，传递按钮的值 / Call passed click handler function with button value
      onClick(value);
    }
  };

  /**
   * 处理键盘事件 / Handle keyboard events
   * 支持键盘导航和操作 / Support keyboard navigation and operations
   */
  const handleKeyDown = (event) => {
    // 当按下Enter或Space键时触发点击 / Trigger click when Enter or Space is pressed
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // 防止默认行为 / Prevent default behavior
      handleClick();
    }
  };

  /**
   * 生成按钮的CSS类名 / Generate button CSS class names
   * 根据按钮类型和状态组合类名 / Combine class names based on button type and state
   */
  const getButtonClassName = () => {
    // 基础类名 / Base class name
    let buttonClass = 'button';
    
    // 根据按钮值确定按钮类型，添加对应的样式类 / Determine button type based on value, add corresponding style class
    const buttonType = getButtonType(value);
    buttonClass += ` button--${buttonType}`;
    
    // 如果按钮被禁用，添加禁用样式 / If button is disabled, add disabled style
    if (disabled) {
      buttonClass += ' button--disabled';
    }
    
    // 添加传入的额外类名 / Add additional passed class name
    if (className) {
      buttonClass += ` ${className}`;
    }
    
    return buttonClass;
  };

  /**
   * 获取按钮的可访问性标签 / Get button accessibility label
   * 为屏幕阅读器用户提供更好的体验 / Provide better experience for screen reader users
   */
  const getAriaLabel = () => {
    // 根据按钮值提供描述性的标签 / Provide descriptive labels based on button value
    const ariaLabels = {
      '+': 'Plus / 加',
      '-': 'Minus / 减',
      '*': 'Multiply / 乘',
      '/': 'Divide / 除',
      '=': 'Equals / 等于',
      'C': 'Clear / 清除',
      'AC': 'All Clear / 全部清除',
      '⌫': 'Backspace / 退格',
      '.': 'Decimal point / 小数点',
      'M+': 'Memory add / 内存加',
      'M-': 'Memory subtract / 内存减',
      'MR': 'Memory recall / 内存调用',
      'MC': 'Memory clear / 内存清除'
    };
    
    return ariaLabels[value] || `Number ${value} / 数字 ${value}`;
  };

  return (
    <button
      className={getButtonClassName()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      title={title || getAriaLabel()} // 使用title或生成的标签作为提示 / Use title or generated label as tooltip
      aria-label={getAriaLabel()} // 可访问性标签 / Accessibility label
      tabIndex={disabled ? -1 : 0} // 禁用的按钮不参与tab导航 / Disabled buttons don't participate in tab navigation
    >
      {/* 
        按钮内容显示 
        Button content display 
      */}
      <span className="button-content">
        {value}
      </span>
      
      {/* 
        按钮按压效果的内部元素 
        Inner element for button press effect 
      */}
      <span className="button-ripple"></span>
    </button>
  );
};

/**
 * 导出Button组件 / Export Button component
 * 
 * 学习要点 / Learning Points:
 * 
 * 1. 组件的可复用性设计 / Reusable component design
 *    - 通过props接收外部数据和函数 / Receive external data and functions via props
 *    - 组件内部处理通用逻辑 / Handle common logic inside component
 * 
 * 2. 事件处理 / Event handling
 *    - onClick事件处理 / onClick event handling
 *    - 键盘事件支持 / Keyboard event support
 *    - 事件参数传递 / Event parameter passing
 * 
 * 3. 条件渲染和动态样式 / Conditional rendering and dynamic styles
 *    - 根据props动态生成类名 / Dynamically generate class names based on props
 *    - 条件性地应用样式 / Conditionally apply styles
 * 
 * 4. 可访问性 (Accessibility) / Accessibility
 *    - aria-label for screen readers / 为屏幕阅读器提供aria-label
 *    - tabIndex管理 / tabIndex management
 *    - 键盘导航支持 / Keyboard navigation support
 * 
 * 5. 默认参数 / Default parameters
 *    - 使用ES6默认参数语法 / Use ES6 default parameter syntax
 *    - 提供可选的props / Provide optional props
 * 
 * 6. 函数式组件的最佳实践 / Functional component best practices
 *    - 纯函数组件（没有副作用）/ Pure functional component (no side effects)
 *    - 清晰的参数解构 / Clear parameter destructuring
 */
export default Button;