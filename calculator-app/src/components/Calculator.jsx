/**
 * Calculator组件 - 主计算器组件 / Calculator Component - Main Calculator Component
 * 
 * 这是计算器应用的核心组件，管理所有状态和逻辑
 * This is the core component of the calculator app, managing all state and logic
 */

import React, { useState, useEffect, useCallback } from 'react';
import Display from './Display.jsx';
import ButtonGrid from './ButtonGrid.jsx';
import './Calculator.css';
import { 
  performCalculation, 
  handleNumberInput, 
  handleBackspace,
  addToMemory,
  subtractFromMemory,
  clearMemory,
  hasMemoryValue,
  formatHistoryEntry,
  isErrorMessage
} from '../utils/calculations';
import { 
  OPERATORS, 
  ACTIONS, 
  MEMORY, 
  KEYBOARD_MAP,
  isNumber,
  isOperator,
  isMemoryFunction
} from '../utils/constants';

/**
 * Calculator主组件 / Calculator Main Component
 */
const Calculator = () => {
  
  // ========== 状态管理 / State Management ==========
  
  /**
   * 显示值状态 - 当前显示在屏幕上的数字
   * Display value state - number currently shown on screen
   */
  const [display, setDisplay] = useState('0');
  
  /**
   * 前一个操作数 - 用于计算的第一个数字
   * Previous operand - first number for calculation
   */
  const [previousValue, setPreviousValue] = useState(null);
  
  /**
   * 当前操作符 - 当前选择的数学操作
   * Current operator - currently selected mathematical operation
   */
  const [operation, setOperation] = useState(null);
  
  /**
   * 等待新值标志 - 指示是否应该清除显示并开始新输入
   * Waiting for new value flag - indicates if display should be cleared for new input
   */
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  
  /**
   * 内存值 - 存储在内存中的数字
   * Memory value - number stored in memory
   */
  const [memoryValue, setMemoryValue] = useState('0');
  
  /**
   * 计算历史 - 存储过去的计算记录
   * Calculation history - stores past calculation records
   */
  const [history, setHistory] = useState([]);
  
  /**
   * 当前表达式 - 显示正在构建的表达式
   * Current expression - shows the expression being built
   */
  const [currentExpression, setCurrentExpression] = useState('');

  // ========== 核心计算功能 / Core Calculation Functions ==========
  
  /**
   * 处理数字输入 / Handle number input
   * @param {string} digit - 输入的数字或小数点 / Input digit or decimal point
   */
  const handleNumber = useCallback((digit) => {
    if (waitingForNewValue) {
      // 如果在等待新值，清除显示并开始新输入 / If waiting for new value, clear display and start new input
      setDisplay(digit === '.' ? '0.' : digit);
      setWaitingForNewValue(false);
    } else {
      // 否则添加到当前显示值 / Otherwise add to current display value
      setDisplay(prevDisplay => handleNumberInput(prevDisplay, digit));
    }
  }, [waitingForNewValue]);

  /**
   * 处理操作符输入 / Handle operator input
   * @param {string} nextOperator - 输入的操作符 / Input operator
   */
  const handleOperator = useCallback((nextOperator) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      // 如果没有前一个值，设置当前值为前一个值 / If no previous value, set current value as previous
      setPreviousValue(inputValue);
      setCurrentExpression(`${display} ${nextOperator}`);
    } else if (operation) {
      // 如果有前一个值和操作符，执行计算 / If there's previous value and operator, perform calculation
      const currentValue = previousValue || 0;
      const result = performCalculation(currentValue, inputValue, operation);
      
      if (isErrorMessage(result)) {
        // 如果是错误，显示错误信息并重置 / If error, show error message and reset
        setDisplay(result);
        setPreviousValue(null);
        setOperation(null);
        setCurrentExpression('');
        setWaitingForNewValue(true);
        return;
      }

      // 将计算添加到历史记录 / Add calculation to history
      const historyEntry = formatHistoryEntry(currentValue, operation, inputValue, result);
      setHistory(prev => [historyEntry, ...prev.slice(0, 9)]); // 保持最多10条记录 / Keep maximum 10 records

      // 更新状态 / Update states
      setDisplay(String(result));
      setPreviousValue(result);
      setCurrentExpression(`${result} ${nextOperator}`);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperator);
  }, [display, previousValue, operation]);

  /**
   * 处理等号计算 / Handle equals calculation
   */
  const handleEquals = useCallback(() => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = performCalculation(previousValue, inputValue, operation);
      
      if (isErrorMessage(result)) {
        // 错误处理 / Error handling
        setDisplay(result);
      } else {
        // 成功计算 / Successful calculation
        const historyEntry = formatHistoryEntry(previousValue, operation, inputValue, result);
        setHistory(prev => [historyEntry, ...prev.slice(0, 9)]);
        setDisplay(String(result));
      }
      
      // 重置计算状态 / Reset calculation state
      setPreviousValue(null);
      setOperation(null);
      setCurrentExpression('');
      setWaitingForNewValue(true);
    }
  }, [display, previousValue, operation]);

  /**
   * 处理清除操作 / Handle clear operations
   * @param {string} clearType - 清除类型 ('C' 或 'AC') / Clear type ('C' or 'AC')
   */
  const handleClear = useCallback((clearType) => {
    if (clearType === 'AC') {
      // 全部清除 / All clear
      setDisplay('0');
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(false);
      setCurrentExpression('');
    } else {
      // 清除当前输入 / Clear current input
      setDisplay('0');
      setWaitingForNewValue(false);
    }
  }, []);

  /**
   * 处理退格操作 / Handle backspace operation
   */
  const handleBackspaceOperation = useCallback(() => {
    if (!waitingForNewValue) {
      setDisplay(prevDisplay => handleBackspace(prevDisplay));
    }
  }, [waitingForNewValue]);

  // ========== 内存功能 / Memory Functions ==========

  /**
   * 处理内存操作 / Handle memory operations
   * @param {string} memoryAction - 内存操作类型 / Memory action type
   */
  const handleMemory = useCallback((memoryAction) => {
    const currentValue = display;
    
    switch (memoryAction) {
      case MEMORY.ADD:
        // 内存加 / Memory add
        setMemoryValue(prev => addToMemory(prev, currentValue));
        break;
      case MEMORY.SUBTRACT:
        // 内存减 / Memory subtract
        setMemoryValue(prev => subtractFromMemory(prev, currentValue));
        break;
      case MEMORY.RECALL:
        // 内存调用 / Memory recall
        if (hasMemoryValue(memoryValue)) {
          setDisplay(memoryValue);
          setWaitingForNewValue(true);
        }
        break;
      case MEMORY.CLEAR:
        // 内存清除 / Memory clear
        setMemoryValue(clearMemory());
        break;
      default:
        break;
    }
  }, [display, memoryValue]);

  // ========== 按钮点击处理 / Button Click Handling ==========

  /**
   * 统一的按钮点击处理函数 / Unified button click handler
   * @param {string} value - 按钮值 / Button value
   */
  const handleButtonClick = useCallback((value) => {
    console.log('Button clicked:', value); // 调试信息 / Debug info

    if (isNumber(value) || value === '.') {
      // 数字和小数点处理 / Number and decimal point handling
      handleNumber(value);
    } else if (isOperator(value)) {
      // 操作符处理 / Operator handling
      handleOperator(value);
    } else if (value === ACTIONS.EQUALS) {
      // 等号处理 / Equals handling
      handleEquals();
    } else if (value === ACTIONS.CLEAR || value === ACTIONS.ALL_CLEAR) {
      // 清除处理 / Clear handling
      handleClear(value);
    } else if (value === ACTIONS.BACKSPACE) {
      // 退格处理 / Backspace handling
      handleBackspaceOperation();
    } else if (isMemoryFunction(value)) {
      // 内存功能处理 / Memory function handling
      handleMemory(value);
    }
  }, [handleNumber, handleOperator, handleEquals, handleClear, handleBackspaceOperation, handleMemory]);

  // ========== 键盘事件处理 / Keyboard Event Handling ==========

  /**
   * 键盘事件处理函数 / Keyboard event handler
   * @param {KeyboardEvent} event - 键盘事件 / Keyboard event
   */
  const handleKeyPress = useCallback((event) => {
    const key = event.key;
    
    // 防止某些键的默认行为 / Prevent default behavior for certain keys
    if (['Enter', '=', 'Escape', 'Backspace'].includes(key)) {
      event.preventDefault();
    }
    
    // 映射键盘按键到计算器按钮 / Map keyboard keys to calculator buttons
    const mappedValue = KEYBOARD_MAP[key];
    if (mappedValue) {
      handleButtonClick(mappedValue);
    }
  }, [handleButtonClick]);

  // ========== 副作用处理 / Side Effects ==========

  /**
   * 键盘事件监听器设置 / Keyboard event listener setup
   * 使用useEffect在组件挂载时添加事件监听器，卸载时清理
   * Use useEffect to add event listener on mount, cleanup on unmount
   */
  useEffect(() => {
    // 添加键盘事件监听器 / Add keyboard event listener
    document.addEventListener('keydown', handleKeyPress);
    
    // 清理函数：组件卸载时移除事件监听器 / Cleanup function: remove event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]); // 依赖数组确保useEffect在handleKeyPress改变时重新执行 / Dependency array ensures useEffect re-runs when handleKeyPress changes

  /**
   * 调试信息输出 / Debug information output
   * 开发环境下输出当前状态信息
   * Output current state information in development environment
   */
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Calculator State:', {
        display,
        previousValue,
        operation,
        waitingForNewValue,
        memoryValue,
        currentExpression
      });
    }
  }, [display, previousValue, operation, waitingForNewValue, memoryValue, currentExpression]);

  // ========== 渲染 / Render ==========

  return (
    <div className="calculator">
      {/* 计算器标题 / Calculator title */}
      <div className="calculator-header">
        <h1>React Calculator / React计算器</h1>
        <p>Week 6 Learning Project / 第6周学习项目</p>
      </div>

      {/* 显示屏组件 / Display component */}
      <Display 
        value={display}
        expression={currentExpression}
        hasMemory={hasMemoryValue(memoryValue)}
      />

      {/* 按钮网格组件 / Button grid component */}
      <ButtonGrid 
        onButtonClick={handleButtonClick}
        disabledButtons={[]} // 可以根据需要禁用某些按钮 / Can disable certain buttons as needed
      />

      {/* 计算历史显示（可选） / Calculation history display (optional) */}
      {history.length > 0 && (
        <div className="calculator-history">
          <div className="history-header">
            History / 历史记录:
          </div>
          <div className="history-list">
            {history.slice(0, 3).map((entry, index) => (
              <div key={index} className="history-item">
                {entry}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * 导出Calculator组件 / Export Calculator component
 * 
 * 学习要点 / Learning Points:
 * 
 * 1. useState Hook的使用 / Using useState Hook
 *    - 管理多个状态变量 / Managing multiple state variables
 *    - 状态更新的异步性质 / Asynchronous nature of state updates
 * 
 * 2. useEffect Hook的使用 / Using useEffect Hook
 *    - 设置和清理事件监听器 / Setting up and cleaning up event listeners
 *    - 依赖数组的重要性 / Importance of dependency arrays
 * 
 * 3. useCallback Hook的使用 / Using useCallback Hook
 *    - 优化函数的重新创建 / Optimize function re-creation
 *    - 防止不必要的重新渲染 / Prevent unnecessary re-renders
 * 
 * 4. 状态管理策略 / State management strategy
 *    - 何时提升状态 / When to lift state up
 *    - 状态的结构设计 / State structure design
 * 
 * 5. 事件处理 / Event handling
 *    - 统一的事件处理策略 / Unified event handling strategy
 *    - 键盘和鼠标事件的协调 / Coordination between keyboard and mouse events
 * 
 * 6. 组件通信 / Component communication
 *    - 通过props向下传递数据和函数 / Passing data and functions down via props
 *    - 回调函数的使用 / Using callback functions
 * 
 * 7. 副作用管理 / Side effect management
 *    - 事件监听器的添加和移除 / Adding and removing event listeners
 *    - 内存泄漏防护 / Memory leak prevention
 */
export default Calculator;