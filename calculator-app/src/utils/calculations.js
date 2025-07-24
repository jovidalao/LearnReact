/**
 * 计算逻辑工具函数 / Calculation Logic Utility Functions
 * 
 * 这个文件包含所有计算相关的逻辑，保持组件的纯净性
 * This file contains all calculation-related logic, keeping components clean
 */

import { ERROR_MESSAGES, DISPLAY_LIMITS } from './constants';

/**
 * 执行基本算术运算 / Perform basic arithmetic operations
 * @param {number} num1 - 第一个操作数 / First operand
 * @param {number} num2 - 第二个操作数 / Second operand  
 * @param {string} operator - 操作符 / Operator
 * @returns {number|string} - 计算结果或错误信息 / Calculation result or error message
 */
export const performCalculation = (num1, num2, operator) => {
  // 将字符串转换为数字 / Convert strings to numbers
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  
  // 检查输入是否有效 / Check if inputs are valid
  if (isNaN(a) || isNaN(b)) {
    return ERROR_MESSAGES.INVALID_OPERATION.en; // 返回英文错误信息 / Return English error message
  }
  
  let result;
  
  // 根据操作符执行相应的计算 / Perform calculation based on operator
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      // 检查除零错误 / Check for division by zero
      if (b === 0) {
        return ERROR_MESSAGES.DIVISION_BY_ZERO.en;
      }
      result = a / b;
      break;
    default:
      return ERROR_MESSAGES.INVALID_OPERATION.en;
  }
  
  // 检查结果是否溢出 / Check if result overflows
  if (!isFinite(result)) {
    return ERROR_MESSAGES.OVERFLOW.en;
  }
  
  // 格式化结果 / Format result
  return formatResult(result);
};

/**
 * 格式化计算结果用于显示 / Format calculation result for display
 * @param {number} result - 原始计算结果 / Raw calculation result
 * @returns {string} - 格式化后的结果 / Formatted result
 */
export const formatResult = (result) => {
  // 如果结果是整数，直接返回 / If result is integer, return directly
  if (Number.isInteger(result)) {
    return result.toString();
  }
  
  // 处理很大或很小的数字，使用科学计数法 / Handle very large or small numbers with scientific notation
  if (Math.abs(result) >= DISPLAY_LIMITS.SCIENTIFIC_THRESHOLD || 
      (Math.abs(result) < 0.0001 && result !== 0)) {
    return result.toExponential(DISPLAY_LIMITS.MAX_DECIMAL_PLACES);
  }
  
  // 限制小数位数 / Limit decimal places
  const formatted = result.toFixed(DISPLAY_LIMITS.MAX_DECIMAL_PLACES);
  
  // 移除尾随的零 / Remove trailing zeros
  return parseFloat(formatted).toString();
};

/**
 * 格式化显示的数字（添加千位分隔符等）/ Format display number (add thousand separators, etc.)
 * @param {string} value - 要格式化的值 / Value to format
 * @returns {string} - 格式化后的值 / Formatted value
 */
export const formatDisplayValue = (value) => {
  // 如果是错误信息，直接返回 / If it's an error message, return directly
  if (typeof value === 'string' && isErrorMessage(value)) {
    return value;
  }
  
  // 限制显示长度 / Limit display length
  if (value.length > DISPLAY_LIMITS.MAX_DIGITS) {
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    
    // 使用科学计数法显示大数字 / Use scientific notation for large numbers
    return num.toExponential(6);
  }
  
  return value;
};

/**
 * 检查值是否为错误信息 / Check if value is an error message
 * @param {string} value - 要检查的值 / Value to check
 * @returns {boolean} - 是否为错误信息 / Whether it's an error message
 */
export const isErrorMessage = (value) => {
  const errorValues = Object.values(ERROR_MESSAGES).flatMap(msg => [msg.en, msg.zh]);
  return errorValues.includes(value);
};

/**
 * 验证输入的数字是否有效 / Validate if input number is valid
 * @param {string} currentValue - 当前显示值 / Current display value
 * @param {string} newDigit - 新输入的数字 / New input digit
 * @returns {boolean} - 是否可以添加这个数字 / Whether this digit can be added
 */
export const canAddDigit = (currentValue, newDigit) => {
  // 如果当前值是错误信息，不能添加数字 / If current value is error message, cannot add digit
  if (isErrorMessage(currentValue)) {
    return false;
  }
  
  // 检查是否超过最大位数限制 / Check if exceeds maximum digit limit
  if (currentValue.length >= DISPLAY_LIMITS.MAX_DIGITS) {
    return false;
  }
  
  // 如果是小数点，检查是否已经存在小数点 / If it's decimal point, check if decimal point already exists
  if (newDigit === '.' && currentValue.includes('.')) {
    return false;
  }
  
  return true;
};

/**
 * 处理数字输入 / Handle number input
 * @param {string} currentValue - 当前显示值 / Current display value
 * @param {string} digit - 输入的数字 / Input digit
 * @returns {string} - 新的显示值 / New display value
 */
export const handleNumberInput = (currentValue, digit) => {
  // 如果当前值是'0'且输入的不是小数点，替换'0' / If current value is '0' and input is not decimal, replace '0'
  if (currentValue === '0' && digit !== '.') {
    return digit;
  }
  
  // 如果当前值是错误信息，重新开始 / If current value is error message, start over
  if (isErrorMessage(currentValue)) {
    return digit;
  }
  
  // 检查是否可以添加这个数字 / Check if this digit can be added
  if (!canAddDigit(currentValue, digit)) {
    return currentValue;
  }
  
  // 添加数字到当前值 / Add digit to current value
  return currentValue + digit;
};

/**
 * 处理退格操作 / Handle backspace operation
 * @param {string} currentValue - 当前显示值 / Current display value
 * @returns {string} - 新的显示值 / New display value
 */
export const handleBackspace = (currentValue) => {
  // 如果是错误信息或只有一个字符，返回'0' / If it's error message or only one character, return '0'
  if (isErrorMessage(currentValue) || currentValue.length <= 1) {
    return '0';
  }
  
  // 移除最后一个字符 / Remove last character
  const newValue = currentValue.slice(0, -1);
  
  // 如果删除后为空，返回'0' / If empty after deletion, return '0'
  return newValue === '' ? '0' : newValue;
};

/**
 * 内存计算函数 / Memory calculation functions
 */

/**
 * 添加值到内存 / Add value to memory
 * @param {string} memoryValue - 当前内存值 / Current memory value
 * @param {string} displayValue - 要添加的值 / Value to add
 * @returns {string} - 新的内存值 / New memory value
 */
export const addToMemory = (memoryValue, displayValue) => {
  const current = parseFloat(memoryValue) || 0;
  const toAdd = parseFloat(displayValue) || 0;
  return (current + toAdd).toString();
};

/**
 * 从内存减去值 / Subtract value from memory
 * @param {string} memoryValue - 当前内存值 / Current memory value
 * @param {string} displayValue - 要减去的值 / Value to subtract
 * @returns {string} - 新的内存值 / New memory value
 */
export const subtractFromMemory = (memoryValue, displayValue) => {
  const current = parseFloat(memoryValue) || 0;
  const toSubtract = parseFloat(displayValue) || 0;
  return (current - toSubtract).toString();
};

/**
 * 清除内存 / Clear memory
 * @returns {string} - 清空的内存值 / Cleared memory value
 */
export const clearMemory = () => {
  return '0';
};

/**
 * 检查内存是否有值 / Check if memory has value
 * @param {string} memoryValue - 内存值 / Memory value
 * @returns {boolean} - 内存是否有值 / Whether memory has value
 */
export const hasMemoryValue = (memoryValue) => {
  const value = parseFloat(memoryValue);
  return !isNaN(value) && value !== 0;
};

/**
 * 计算历史记录格式化 / Calculation history formatting
 * @param {string} num1 - 第一个数 / First number
 * @param {string} operator - 操作符 / Operator
 * @param {string} num2 - 第二个数 / Second number
 * @param {string} result - 结果 / Result
 * @returns {string} - 格式化的历史记录条目 / Formatted history entry
 */
export const formatHistoryEntry = (num1, operator, num2, result) => {
  return `${num1} ${operator} ${num2} = ${result}`;
};

/**
 * 安全的数学运算（防止精度问题）/ Safe mathematical operations (prevent precision issues)
 * 
 * JavaScript的浮点数运算可能存在精度问题，例如0.1 + 0.2 = 0.30000000000000004
 * JavaScript floating point operations may have precision issues, e.g., 0.1 + 0.2 = 0.30000000000000004
 */

/**
 * 安全的加法运算 / Safe addition operation
 * @param {number} a - 第一个数 / First number
 * @param {number} b - 第二个数 / Second number
 * @returns {number} - 精确的结果 / Precise result
 */
export const safeAdd = (a, b) => {
  const factor = Math.pow(10, Math.max(getDecimalPlaces(a), getDecimalPlaces(b)));
  return (Math.round(a * factor) + Math.round(b * factor)) / factor;
};

/**
 * 安全的减法运算 / Safe subtraction operation
 * @param {number} a - 被减数 / Minuend
 * @param {number} b - 减数 / Subtrahend
 * @returns {number} - 精确的结果 / Precise result
 */
export const safeSubtract = (a, b) => {
  const factor = Math.pow(10, Math.max(getDecimalPlaces(a), getDecimalPlaces(b)));
  return (Math.round(a * factor) - Math.round(b * factor)) / factor;
};

/**
 * 获取数字的小数位数 / Get decimal places of a number
 * @param {number} num - 要检查的数字 / Number to check
 * @returns {number} - 小数位数 / Number of decimal places
 */
const getDecimalPlaces = (num) => {
  const str = num.toString();
  const decimalIndex = str.indexOf('.');
  return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
};