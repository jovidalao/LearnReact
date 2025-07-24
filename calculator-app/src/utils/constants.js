/**
 * 应用程序常量 / Application Constants
 * 
 * 这个文件包含了计算器应用中使用的所有常量
 * This file contains all constants used in the calculator application
 */

// 操作符常量 / Operator Constants
export const OPERATORS = {
  ADD: '+',        // 加法 / Addition
  SUBTRACT: '-',   // 减法 / Subtraction  
  MULTIPLY: '*',   // 乘法 / Multiplication
  DIVIDE: '/',     // 除法 / Division
  EQUALS: '='      // 等于 / Equals
};

// 特殊功能按钮 / Special Function Buttons
export const ACTIONS = {
  CLEAR: 'C',           // 清除当前输入 / Clear current input
  ALL_CLEAR: 'AC',      // 清除所有 / All clear
  BACKSPACE: '⌫',       // 退格 / Backspace
  DECIMAL: '.',         // 小数点 / Decimal point
  EQUALS: '='           // 计算结果 / Calculate result
};

// 内存功能常量 / Memory Function Constants
export const MEMORY = {
  ADD: 'M+',           // 内存加 / Memory add
  SUBTRACT: 'M-',      // 内存减 / Memory subtract
  RECALL: 'MR',        // 内存读取 / Memory recall
  CLEAR: 'MC'          // 内存清除 / Memory clear
};

// 数字按钮数组 / Number Button Array
export const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// 键盘映射 / Keyboard Mapping
export const KEYBOARD_MAP = {
  // 数字键 / Number keys
  '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
  '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
  
  // 操作符键 / Operator keys
  '+': '+',
  '-': '-', 
  '*': '*',
  '/': '/',
  
  // 功能键 / Function keys
  'Enter': '=',         // 回车键执行计算 / Enter key executes calculation
  '=': '=',
  '.': '.',             // 小数点 / Decimal point
  'Escape': 'AC',       // ESC键全部清除 / ESC key for all clear
  'c': 'C',             // C键清除当前输入 / C key for current clear
  'C': 'C',
  'Backspace': '⌫'      // 退格键 / Backspace key
};

// 按钮布局配置 / Button Layout Configuration
export const BUTTON_LAYOUT = [
  // 第一行：内存和清除功能 / First row: Memory and clear functions
  ['MC', 'MR', 'M+', 'M-'],
  
  // 第二行：全部清除、清除、退格、除法 / Second row: All clear, clear, backspace, division
  ['AC', 'C', '⌫', '/'],
  
  // 第三行：7、8、9、乘法 / Third row: 7, 8, 9, multiplication
  ['7', '8', '9', '*'],
  
  // 第四行：4、5、6、减法 / Fourth row: 4, 5, 6, subtraction
  ['4', '5', '6', '-'],
  
  // 第五行：1、2、3、加法 / Fifth row: 1, 2, 3, addition
  ['1', '2', '3', '+'],
  
  // 第六行：0（占两格）、小数点、等于 / Sixth row: 0 (spans two columns), decimal, equals
  ['0', '.', '=']
];

// 按钮样式类名映射 / Button Style Class Name Mapping
export const BUTTON_TYPES = {
  NUMBER: 'number',         // 数字按钮样式 / Number button style
  OPERATOR: 'operator',     // 操作符按钮样式 / Operator button style
  FUNCTION: 'function',     // 功能按钮样式 / Function button style
  MEMORY: 'memory',         // 内存按钮样式 / Memory button style
  EQUALS: 'equals',         // 等于按钮样式 / Equals button style
  ZERO: 'zero'              // 零按钮（特殊宽度）/ Zero button (special width)
};

// 错误消息常量 / Error Message Constants
export const ERROR_MESSAGES = {
  DIVISION_BY_ZERO: {
    en: 'Cannot divide by zero',        // 英文错误信息 / English error message
    zh: '不能除以零'                     // 中文错误信息 / Chinese error message
  },
  INVALID_OPERATION: {
    en: 'Invalid operation',
    zh: '无效操作'
  },
  OVERFLOW: {
    en: 'Number too large',
    zh: '数字过大'
  },
  SYNTAX_ERROR: {
    en: 'Syntax error',
    zh: '语法错误'
  }
};

// 显示限制常量 / Display Limit Constants
export const DISPLAY_LIMITS = {
  MAX_DIGITS: 12,           // 最大显示位数 / Maximum display digits
  MAX_DECIMAL_PLACES: 8,    // 最大小数位数 / Maximum decimal places
  SCIENTIFIC_THRESHOLD: 1e10 // 科学计数法阈值 / Scientific notation threshold
};

// 动画和过渡时间 / Animation and Transition Times
export const TIMING = {
  BUTTON_PRESS: 150,        // 按钮按下动画时间（毫秒）/ Button press animation time (ms)
  DISPLAY_UPDATE: 200,      // 显示更新动画时间 / Display update animation time
  ERROR_SHOW: 300          // 错误信息显示时间 / Error message display time
};

/**
 * 工具函数：检查是否为数字 / Utility function: Check if value is a number
 * @param {string} value - 要检查的值 / Value to check
 * @returns {boolean} - 是否为数字 / Whether it's a number
 */
export const isNumber = (value) => {
  return NUMBERS.includes(value);
};

/**
 * 工具函数：检查是否为操作符 / Utility function: Check if value is an operator
 * @param {string} value - 要检查的值 / Value to check  
 * @returns {boolean} - 是否为操作符 / Whether it's an operator
 */
export const isOperator = (value) => {
  return Object.values(OPERATORS).includes(value) && value !== '=';
};

/**
 * 工具函数：检查是否为内存功能 / Utility function: Check if value is a memory function
 * @param {string} value - 要检查的值 / Value to check
 * @returns {boolean} - 是否为内存功能 / Whether it's a memory function
 */
export const isMemoryFunction = (value) => {
  return Object.values(MEMORY).includes(value);
};

/**
 * 工具函数：根据按钮值获取按钮类型 / Utility function: Get button type based on button value
 * @param {string} value - 按钮值 / Button value
 * @returns {string} - 按钮类型 / Button type
 */
export const getButtonType = (value) => {
  if (value === '0') return BUTTON_TYPES.ZERO;
  if (value === '=') return BUTTON_TYPES.EQUALS;
  if (isNumber(value)) return BUTTON_TYPES.NUMBER;
  if (isOperator(value)) return BUTTON_TYPES.OPERATOR;
  if (isMemoryFunction(value)) return BUTTON_TYPES.MEMORY;
  return BUTTON_TYPES.FUNCTION;
};