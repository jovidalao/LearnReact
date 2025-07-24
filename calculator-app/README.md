# Calculator App - Week 6 Project / 计算器应用 - 第6周项目

## Project Overview / 项目概述

This is a comprehensive calculator application built with React for Week 6 of the Full-Stack Development Learning Plan. It demonstrates mastery of React fundamentals including hooks, state management, event handling, and responsive design.

这是一个用React构建的综合计算器应用，是全栈开发学习计划第6周的项目。它展示了对React基础知识的掌握，包括hooks、状态管理、事件处理和响应式设计。

## Learning Objectives / 学习目标

By Week 6, you should have mastered:
到第6周，你应该已经掌握了：

- ✅ React components and JSX / React组件和JSX
- ✅ Props and state management / Props和状态管理
- ✅ Event handling / 事件处理
- ✅ React hooks (useState, useEffect) / React hooks（useState, useEffect）
- ✅ Modern CSS and responsive design / 现代CSS和响应式设计
- ✅ Component lifecycle / 组件生命周期

## Features / 功能特性

### Core Calculator Functions / 核心计算功能
- ➕ Basic arithmetic operations (addition, subtraction, multiplication, division) / 基本算术运算（加减乘除）
- 🧮 Decimal point calculations / 小数点计算
- 🔄 Clear and All Clear functionality / 清除和全部清除功能
- ⌫ Backspace/Delete last entry / 退格/删除最后输入
- 📊 Real-time display updates / 实时显示更新

### Advanced Features / 高级功能
- 💾 Memory functions (M+, M-, MR, MC) / 内存功能（M+, M-, MR, MC）
- 📈 Calculation history / 计算历史
- 🎯 Keyboard support / 键盘支持
- 📱 Responsive design for mobile and desktop / 移动端和桌面端响应式设计
- ⚠️ Error handling for invalid operations / 无效操作的错误处理

## Project Structure / 项目结构

```
calculator-app/
├── public/
│   └── index.html              # HTML template / HTML模板
├── src/
│   ├── components/
│   │   ├── Calculator.js       # Main calculator component / 主计算器组件
│   │   ├── Display.js          # Display screen component / 显示屏组件
│   │   ├── Button.js           # Reusable button component / 可复用按钮组件
│   │   ├── ButtonGrid.js       # Button layout component / 按钮布局组件
│   │   ├── History.js          # Calculation history component / 计算历史组件
│   │   └── Memory.js           # Memory functions component / 内存功能组件
│   ├── styles/
│   │   ├── Calculator.css      # Main calculator styles / 主计算器样式
│   │   ├── Display.css         # Display styles / 显示器样式
│   │   ├── Button.css          # Button styles / 按钮样式
│   │   └── responsive.css      # Responsive design styles / 响应式设计样式
│   ├── utils/
│   │   ├── calculations.js     # Calculation logic / 计算逻辑
│   │   └── constants.js        # App constants / 应用常量
│   ├── App.js                  # Root component / 根组件
│   ├── App.css                 # Global styles / 全局样式
│   └── index.js                # App entry point / 应用入口点
├── package.json                # Dependencies / 依赖项
└── README.md                   # Documentation / 文档
```

## Key React Concepts Demonstrated / 展示的关键React概念

### 1. Component Architecture / 组件架构
- Functional components with hooks / 使用hooks的函数式组件
- Component composition and reusability / 组件组合和复用
- Props passing between components / 组件间的props传递

### 2. State Management / 状态管理
- `useState` for local component state / 使用useState管理局部组件状态
- State lifting for shared data / 状态提升共享数据
- Complex state updates with previous state / 使用先前状态进行复杂状态更新

### 3. Event Handling / 事件处理
- onClick handlers for buttons / 按钮的onClick处理器
- Keyboard event listeners / 键盘事件监听器
- Event delegation and propagation / 事件委托和传播

### 4. Side Effects / 副作用
- `useEffect` for keyboard listeners / 使用useEffect处理键盘监听器
- Cleanup functions for event listeners / 事件监听器的清理函数
- Effect dependencies array / effect依赖数组

## Installation and Setup / 安装和设置

1. **Clone or download the project / 克隆或下载项目**
   ```bash
   cd calculator-app
   ```

2. **Install dependencies / 安装依赖**
   ```bash
   npm install
   ```

3. **Start the development server / 启动开发服务器**
   ```bash
   npm start
   ```

4. **Open your browser / 打开浏览器**
   Navigate to `http://localhost:3000`
   导航到 `http://localhost:3000`

## Usage Guide / 使用指南

### Basic Operations / 基本操作
1. Click number buttons to input values / 点击数字按钮输入数值
2. Click operation buttons (+, -, ×, ÷) for calculations / 点击运算按钮（+, -, ×, ÷）进行计算
3. Press = or Enter to get results / 按下=或Enter键获得结果
4. Use C to clear current input, AC to clear everything / 使用C清除当前输入，AC清除所有内容

### Memory Functions / 内存功能
- **M+**: Add current display to memory / 将当前显示添加到内存
- **M-**: Subtract current display from memory / 从内存中减去当前显示
- **MR**: Recall memory value / 调用内存值
- **MC**: Clear memory / 清除内存

### Keyboard Shortcuts / 键盘快捷键
- Numbers: `0-9` / 数字：`0-9`
- Operations: `+`, `-`, `*`, `/` / 运算：`+`, `-`, `*`, `/`
- Execute: `Enter` or `=` / 执行：`Enter`或`=`
- Clear: `Escape` or `c` / 清除：`Escape`或`c`
- Backspace: `Backspace` / 退格：`Backspace`

## Code Examples / 代码示例

### useState Hook Example / useState Hook示例
```javascript
// Managing calculator state / 管理计算器状态
const [display, setDisplay] = useState('0');
const [previousValue, setPreviousValue] = useState(null);
const [operation, setOperation] = useState(null);
const [waitingForNewValue, setWaitingForNewValue] = useState(false);
```

### Event Handling Example / 事件处理示例
```javascript
// Button click handler / 按钮点击处理器
const handleButtonClick = (value) => {
  if (isNumber(value)) {
    handleNumber(value);
  } else if (isOperator(value)) {
    handleOperator(value);
  } else if (value === '=') {
    handleEquals();
  }
};
```

### useEffect Hook Example / useEffect Hook示例
```javascript
// Keyboard event listener / 键盘事件监听器
useEffect(() => {
  const handleKeyPress = (event) => {
    const key = event.key;
    handleButtonClick(key);
  };

  document.addEventListener('keydown', handleKeyPress);
  
  // Cleanup function / 清理函数
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
}, []);
```

## Testing Scenarios / 测试场景

### Basic Functionality Tests / 基本功能测试
1. ✅ Addition: `5 + 3 = 8` / 加法：`5 + 3 = 8`
2. ✅ Subtraction: `10 - 4 = 6` / 减法：`10 - 4 = 6`
3. ✅ Multiplication: `7 × 6 = 42` / 乘法：`7 × 6 = 42`
4. ✅ Division: `15 ÷ 3 = 5` / 除法：`15 ÷ 3 = 5`
5. ✅ Decimals: `3.14 + 2.86 = 6` / 小数：`3.14 + 2.86 = 6`

### Edge Cases / 边界情况
1. ✅ Division by zero handling / 除零处理
2. ✅ Multiple decimal points prevention / 防止多个小数点
3. ✅ Large number display formatting / 大数字显示格式化
4. ✅ Memory overflow protection / 内存溢出保护

## Learning Reflection Questions / 学习反思问题

1. **State Management / 状态管理**
   - How did you decide which state to keep in which component? / 你是如何决定在哪个组件中保持哪种状态的？
   - When did you need to lift state up? / 何时需要状态提升？

2. **Component Design / 组件设计**
   - How did you ensure components are reusable? / 你是如何确保组件可复用的？
   - What props did you pass between components? / 你在组件之间传递了哪些props？

3. **Event Handling / 事件处理**
   - How did you handle both click and keyboard events? / 你是如何处理点击和键盘事件的？
   - What challenges did you face with event delegation? / 在事件委托方面遇到了哪些挑战？

## Next Steps / 下一步

After completing this calculator app, you should be ready for:
完成这个计算器应用后，你应该准备好进行：

- Week 7-8: Development Environment and Testing / 第7-8周：开发环境和测试
- More complex state management patterns / 更复杂的状态管理模式
- Introduction to Context API / Context API介绍
- Unit testing with Jest and React Testing Library / 使用Jest和React Testing Library进行单元测试

## Resources / 资源

- [React Documentation](https://react.dev/) / React文档
- [React Hooks Guide](https://react.dev/reference/react) / React Hooks指南
- [JavaScript Calculator Logic](https://www.freecodecamp.org/news/how-to-build-a-calculator-app/) / JavaScript计算器逻辑
- [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/) / CSS网格布局

---

**Time Investment: 20 hours / 时间投入：20小时**
**Difficulty Level: Intermediate Beginner / 难度级别：中级初学者**
**Prerequisites: React Fundamentals (Weeks 1-5) / 先决条件：React基础（第1-5周）**