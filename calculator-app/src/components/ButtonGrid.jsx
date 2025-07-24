/**
 * ButtonGrid组件 - 计算器按钮网格布局 / ButtonGrid Component - Calculator Button Grid Layout
 * 
 * 这个组件负责排列和显示所有计算器按钮
 * This component is responsible for arranging and displaying all calculator buttons
 */

import React from 'react';
import Button from './Button.jsx';
import './ButtonGrid.css';
import { BUTTON_LAYOUT } from '../utils/constants';

/**
 * ButtonGrid组件 / ButtonGrid Component
 * @param {Object} props - 组件属性 / Component props
 * @param {function} props.onButtonClick - 按钮点击事件处理函数 / Button click event handler function
 * @param {Array} props.disabledButtons - 禁用的按钮列表（可选）/ List of disabled buttons (optional)
 */
const ButtonGrid = ({ onButtonClick, disabledButtons = [] }) => {
  
  /**
   * 检查按钮是否应该被禁用 / Check if button should be disabled
   * @param {string} value - 按钮值 / Button value
   * @returns {boolean} - 是否禁用 / Whether to disable
   */
  const isButtonDisabled = (value) => {
    return disabledButtons.includes(value);
  };

  /**
   * 获取按钮的特殊属性 / Get special properties for button
   * @param {string} value - 按钮值 / Button value
   * @returns {Object} - 按钮属性对象 / Button properties object
   */
  const getButtonProps = (value) => {
    const props = {
      key: value, // React key for list rendering / React列表渲染的key
      value: value, // 按钮显示的值 / Value displayed on button
      onClick: onButtonClick, // 点击处理函数 / Click handler function
      disabled: isButtonDisabled(value) // 是否禁用 / Whether disabled
    };

    // 为特殊按钮添加额外的类名和属性 / Add extra class names and properties for special buttons
    switch (value) {
      case '0':
        // 零按钮通常跨越两列 / Zero button usually spans two columns
        props.className = 'button-zero';
        props.title = 'Zero / 零';
        break;
      case '=':
        // 等于按钮的特殊样式 / Special styling for equals button
        props.className = 'button-equals';
        props.title = 'Calculate result / 计算结果';
        break;
      case 'AC':
        props.title = 'All Clear - Clear everything / 全部清除 - 清除所有内容';
        break;
      case 'C':
        props.title = 'Clear current input / 清除当前输入';
        break;
      case '⌫':
        props.title = 'Backspace - Delete last digit / 退格 - 删除最后一位';
        break;
      case '+':
        props.title = 'Addition / 加法';
        break;
      case '-':
        props.title = 'Subtraction / 减法';
        break;
      case '*':
        props.title = 'Multiplication / 乘法';
        break;
      case '/':
        props.title = 'Division / 除法';
        break;
      case '.':
        props.title = 'Decimal point / 小数点';
        break;
      case 'M+':
        props.title = 'Memory Add - Add to memory / 内存加 - 添加到内存';
        break;
      case 'M-':
        props.title = 'Memory Subtract - Subtract from memory / 内存减 - 从内存减去';
        break;
      case 'MR':
        props.title = 'Memory Recall - Recall from memory / 内存调用 - 从内存调用';
        break;
      case 'MC':
        props.title = 'Memory Clear - Clear memory / 内存清除 - 清除内存';
        break;
      default:
        // 数字按钮 / Number buttons
        if (/^\d$/.test(value)) {
          props.title = `Number ${value} / 数字 ${value}`;
        }
        break;
    }

    return props;
  };

  /**
   * 渲染按钮行 / Render button row
   * @param {Array} row - 按钮行数据 / Button row data
   * @param {number} rowIndex - 行索引 / Row index
   * @returns {JSX.Element} - 渲染的按钮行 / Rendered button row
   */
  const renderButtonRow = (row, rowIndex) => {
    return (
      <div key={rowIndex} className="button-row">
        {row.map((buttonValue) => (
          <Button {...getButtonProps(buttonValue)} />
        ))}
      </div>
    );
  };

  return (
    <div className="button-grid">
      {/* 
        渲染所有按钮行 
        Render all button rows 
      */}
      {BUTTON_LAYOUT.map((row, rowIndex) => renderButtonRow(row, rowIndex))}
      
      {/* 
        键盘快捷键提示（可选显示）
        Keyboard shortcut hints (optional display)
      */}
      <div className="keyboard-hints">
        <div className="hint-title">
          Keyboard Shortcuts / 键盘快捷键:
        </div>
        <div className="hint-content">
          <span>Numbers: 0-9 / 数字: 0-9</span>
          <span>Operators: +, -, *, / / 运算符: +, -, *, /</span>
          <span>Execute: Enter or = / 执行: Enter 或 =</span>
          <span>Clear: Esc or C / 清除: Esc 或 C</span>
          <span>Backspace: ⌫ / 退格: ⌫</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 导出ButtonGrid组件 / Export ButtonGrid component
 * 
 * 学习要点 / Learning Points:
 * 
 * 1. 组件组合 (Component Composition) / Component Composition
 *    - ButtonGrid组合多个Button组件 / ButtonGrid composes multiple Button components
 *    - 通过props向子组件传递数据和函数 / Pass data and functions to child components via props
 * 
 * 2. 数据映射和渲染 / Data mapping and rendering
 *    - 使用map函数渲染列表 / Use map function to render lists
 *    - 为每个列表项提供唯一的key / Provide unique key for each list item
 * 
 * 3. 条件逻辑处理 / Conditional logic handling
 *    - 根据按钮类型应用不同的属性 / Apply different properties based on button type
 *    - 使用switch语句处理多种情况 / Use switch statement to handle multiple cases
 * 
 * 4. 布局结构设计 / Layout structure design
 *    - 使用CSS Grid进行网格布局 / Use CSS Grid for grid layout
 *    - 嵌套的div结构管理行和列 / Nested div structure to manage rows and columns
 * 
 * 5. 可访问性和用户体验 / Accessibility and user experience
 *    - 为每个按钮提供描述性的title / Provide descriptive title for each button
 *    - 显示键盘快捷键提示 / Display keyboard shortcut hints
 * 
 * 6. 函数抽取和复用 / Function extraction and reuse
 *    - 将复杂逻辑提取到辅助函数 / Extract complex logic to helper functions
 *    - 保持渲染函数的简洁性 / Keep render functions clean
 * 
 * 7. 默认参数使用 / Default parameter usage
 *    - 为可选props提供默认值 / Provide default values for optional props
 *    - 防止undefined错误 / Prevent undefined errors
 */
export default ButtonGrid;