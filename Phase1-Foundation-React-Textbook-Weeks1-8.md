# Phase 1: Foundation and React Fundamentals Textbook (Weeks 1-8)
# 第一阶段：基础与React基础教程（第1-8周）

*A comprehensive guide to mastering JavaScript ES6+, React fundamentals, and modern web development through hands-on project learning.*

*通过动手项目学习掌握JavaScript ES6+、React基础和现代Web开发的综合指南。*

---

## Table of Contents / 目录

### [Chapter 1: Development Environment Setup / 第1章：开发环境搭建](#chapter-1)
- [1.1 Node.js and npm](#11-nodejs-and-npm)
- [1.2 VS Code Configuration](#12-vs-code-configuration)
- [1.3 Git and Version Control](#13-git-and-version-control)
- [1.4 Browser Developer Tools](#14-browser-developer-tools)

### [Chapter 2: JavaScript ES6+ Fundamentals / 第2章：JavaScript ES6+基础](#chapter-2)
- [2.1 Variables and Data Types](#21-variables-and-data-types)
- [2.2 Arrow Functions](#22-arrow-functions)
- [2.3 Template Literals](#23-template-literals)
- [2.4 Destructuring](#24-destructuring)
- [2.5 Spread and Rest Operators](#25-spread-and-rest-operators)
- [2.6 Array Methods](#26-array-methods)
- [2.7 Objects and Methods](#27-objects-and-methods)
- [2.8 Modules (Import/Export)](#28-modules-importexport)
- [2.9 Promises and Async/Await](#29-promises-and-asyncawait)

### [Chapter 3: Modern HTML and CSS / 第3章：现代HTML和CSS](#chapter-3)
- [3.1 Semantic HTML5](#31-semantic-html5)
- [3.2 Flexbox Layout](#32-flexbox-layout)
- [3.3 CSS Grid](#33-css-grid)
- [3.4 Responsive Design](#34-responsive-design)
- [3.5 CSS Variables](#35-css-variables)
- [3.6 Tailwind CSS Fundamentals](#36-tailwind-css-fundamentals)

### [Chapter 4: React Fundamentals / 第4章：React基础](#chapter-4)
- [4.1 What is React?](#41-what-is-react)
- [4.2 JSX Syntax](#42-jsx-syntax)
- [4.3 Components and Props](#43-components-and-props)
- [4.4 State Management with useState](#44-state-management-with-usestate)
- [4.5 Event Handling](#45-event-handling)
- [4.6 Conditional Rendering](#46-conditional-rendering)
- [4.7 Lists and Keys](#47-lists-and-keys)
- [4.8 Forms and Controlled Components](#48-forms-and-controlled-components)

### [Chapter 5: React Hooks Deep Dive / 第5章：React Hooks深入](#chapter-5)
- [5.1 useEffect Hook](#51-useeffect-hook)
- [5.2 useContext Hook](#52-usecontext-hook)
- [5.3 useReducer Hook](#53-usereducer-hook)
- [5.4 useRef Hook](#54-useref-hook)
- [5.5 useMemo and useCallback](#55-usememo-and-usecallback)
- [5.6 Custom Hooks](#56-custom-hooks)

### [Chapter 6: Development Tools and Workflow / 第6章：开发工具和工作流程](#chapter-6)
- [6.1 Vite Build Tool](#61-vite-build-tool)
- [6.2 Package.json and Dependencies](#62-packagejson-and-dependencies)
- [6.3 ESLint and Code Quality](#63-eslint-and-code-quality)
- [6.4 Debugging Techniques](#64-debugging-techniques)

### [Chapter 7: Next.js Fundamentals / 第7章：Next.js基础](#chapter-7)
- [7.1 Introduction to Next.js](#71-introduction-to-nextjs)
- [7.2 App Router and File-based Routing](#72-app-router-and-file-based-routing)
- [7.3 Server and Client Components](#73-server-and-client-components)
- [7.4 Image and Font Optimization](#74-image-and-font-optimization)
- [7.5 Metadata and SEO](#75-metadata-and-seo)

### [Chapter 8: Project Analysis and Code Deep Dive / 第8章：项目分析和代码深入](#chapter-8)
- [8.1 Todo App Analysis](#81-todo-app-analysis)
- [8.2 Weather Dashboard Analysis](#82-weather-dashboard-analysis)
- [8.3 Calculator App Analysis](#83-calculator-app-analysis)
- [8.4 Personal Portfolio Analysis](#84-personal-portfolio-analysis)

---

## Chapter 1: Development Environment Setup / 第1章：开发环境搭建 {#chapter-1}

Before diving into React development, we need to set up a professional development environment that will support our learning journey through the next 8 weeks.

在深入React开发之前，我们需要设置一个专业的开发环境，以支持我们接下来8周的学习之旅。

### 1.1 Node.js and npm {#11-nodejs-and-npm}

**What is Node.js? / 什么是Node.js？**

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows us to run JavaScript on our computer outside of a web browser, which is essential for modern web development tools.

Node.js是建立在Chrome V8 JavaScript引擎上的JavaScript运行时。它允许我们在网络浏览器之外的计算机上运行JavaScript，这对现代Web开发工具至关重要。

**What is npm? / 什么是npm？**

npm (Node Package Manager) is the default package manager for Node.js. It allows us to install, manage, and share JavaScript packages and dependencies.

npm（Node包管理器）是Node.js的默认包管理器。它允许我们安装、管理和共享JavaScript包和依赖项。

**Installation / 安装**

1. Visit [nodejs.org](https://nodejs.org) and download the LTS (Long Term Support) version
2. Follow the installation wizard for your operating system
3. Verify installation by opening terminal/command prompt and running:

1. 访问[nodejs.org](https://nodejs.org)并下载LTS（长期支持）版本
2. 按照操作系统的安装向导进行安装
3. 通过打开终端/命令提示符并运行以下命令来验证安装：

```bash
node --version
npm --version
```

**Understanding Package Managers / 理解包管理器**

In our projects, you'll see different package managers being used:
- `npm` - The default Node.js package manager
- `yarn` - A faster alternative to npm
- `pnpm` - A more efficient package manager that saves disk space

在我们的项目中，您会看到使用不同的包管理器：
- `npm` - Node.js默认包管理器
- `yarn` - npm的更快替代品
- `pnpm` - 更高效的包管理器，节省磁盘空间

### 1.2 VS Code Configuration {#12-vs-code-configuration}

**Why VS Code? / 为什么选择VS Code？**

Visual Studio Code is a free, powerful code editor with excellent support for JavaScript, React, and web development. It offers:
- Intelligent code completion
- Built-in Git integration
- Extensive extension ecosystem
- Integrated terminal

Visual Studio Code是一个免费、强大的代码编辑器，对JavaScript、React和Web开发有出色的支持。它提供：
- 智能代码补全
- 内置Git集成
- 广泛的扩展生态系统
- 集成终端

**Essential Extensions / 必需扩展**

Install these extensions for optimal React development:

为了最佳的React开发体验，请安装这些扩展：

1. **ES7+ React/Redux/React-Native snippets**
   - Provides code snippets for React development
   - 为React开发提供代码片段

2. **Prettier - Code formatter**
   - Automatically formats your code for consistency
   - 自动格式化代码以保持一致性

3. **ESLint**
   - Identifies and reports JavaScript errors
   - 识别并报告JavaScript错误

4. **Auto Rename Tag**
   - Automatically renames paired HTML/JSX tags
   - 自动重命名配对的HTML/JSX标签

5. **Bracket Pair Colorizer**
   - Colors matching brackets for better readability
   - 为匹配的括号着色以提高可读性

### 1.3 Git and Version Control {#13-git-and-version-control}

**What is Git? / 什么是Git？**

Git is a distributed version control system that tracks changes in your code over time. It's essential for:
- Saving different versions of your code
- Collaborating with other developers
- Backing up your work
- Managing different features in separate branches

Git是一个分布式版本控制系统，用于跟踪代码随时间的变化。它对以下方面至关重要：
- 保存代码的不同版本
- 与其他开发者协作
- 备份工作
- 在不同分支中管理不同功能

**Basic Git Commands / 基本Git命令**

```bash
# Initialize a new Git repository
# 初始化新的Git仓库
git init

# Add files to staging area
# 将文件添加到暂存区
git add .

# Commit changes with a message
# 提交更改并添加消息
git commit -m "Your commit message"

# Check repository status
# 检查仓库状态
git status

# View commit history
# 查看提交历史
git log --oneline
```

### 1.4 Browser Developer Tools {#14-browser-developer-tools}

**Chrome DevTools for React Development / 用于React开发的Chrome开发者工具**

Modern browsers provide powerful developer tools that are essential for React development:

现代浏览器提供强大的开发者工具，这些工具对React开发至关重要：

**Key Panels / 主要面板：**

1. **Elements Tab / 元素标签**
   - Inspect and modify HTML/CSS in real-time
   - 实时检查和修改HTML/CSS

2. **Console Tab / 控制台标签**
   - View JavaScript errors and log messages
   - 查看JavaScript错误和日志消息

3. **Network Tab / 网络标签**
   - Monitor API requests and responses
   - 监控API请求和响应

4. **React Developer Tools Extension / React开发者工具扩展**
   - Install from Chrome Web Store
   - Provides React-specific debugging capabilities
   - 从Chrome网上应用店安装
   - 提供React特定的调试功能

---

## Chapter 2: JavaScript ES6+ Fundamentals / 第2章：JavaScript ES6+基础 {#chapter-2}

Understanding modern JavaScript is crucial for React development. This chapter covers the ES6+ features used extensively in our projects.

理解现代JavaScript对React开发至关重要。本章涵盖了我们项目中广泛使用的ES6+特性。

### 2.1 Variables and Data Types {#21-variables-and-data-types}

**Modern Variable Declarations / 现代变量声明**

```javascript
// Old way (avoid in modern JavaScript)
// 旧方式（在现代JavaScript中避免使用）
var name = "John";

// Modern way - let for variables that change
// 现代方式 - let用于会改变的变量
let age = 25;
age = 26; // Can be reassigned / 可以重新赋值

// Modern way - const for constants
// 现代方式 - const用于常量
const PI = 3.14159;
const user = { name: "Alice", age: 30 };
// PI = 3.14; // Error! Cannot reassign const
// user = {}; // Error! Cannot reassign const
user.age = 31; // OK! Can modify object properties / 可以修改对象属性
```

**Why avoid var? / 为什么避免使用var？**

```javascript
// var has function scope, which can lead to confusion
// var具有函数作用域，可能导致混淆
function example() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }
  console.log(x); // 1 - accessible (可访问)
  console.log(y); // ReferenceError - not accessible (不可访问)
  console.log(z); // ReferenceError - not accessible (不可访问)
}
```

**Practical Example from Todo App:**

```javascript
// In todo-app/src/App.jsx
const [todos, setTodos] = useState([]);     // const for hook declaration
let filteredTodos = [];                     // let for variable we'll reassign
const FILTER_OPTIONS = ['all', 'active'];  // const for constants
```

### 2.2 Arrow Functions {#22-arrow-functions}

**Syntax Comparison / 语法比较**

```javascript
// Traditional function / 传统函数
function add(a, b) {
  return a + b;
}

// Arrow function / 箭头函数
const add = (a, b) => {
  return a + b;
}

// Shorter arrow function (implicit return) / 更短的箭头函数（隐式返回）
const add = (a, b) => a + b;

// Single parameter (parentheses optional) / 单个参数（括号可选）
const square = x => x * x;

// No parameters / 无参数
const greet = () => "Hello World!";
```

**Benefits of Arrow Functions / 箭头函数的好处**

1. **Shorter syntax / 更短的语法**
2. **Lexical `this` binding / 词法`this`绑定**
3. **Great for callback functions / 适合回调函数**

**Examples from Our Projects / 项目中的示例：**

```javascript
// From todo-app: Event handlers / 来自todo-app：事件处理器
const handleSubmit = (e) => {
  e.preventDefault();
  if (inputValue.trim()) {
    addTodo(inputValue.trim());
    setInputValue('');
  }
};

// From calculator-app: Array methods / 来自calculator-app：数组方法
const buttons = buttonData.map((btn) => (
  <Button key={btn.id} data={btn} onClick={handleButtonClick} />
));

// From weather-dashboard: API calls / 来自weather-dashboard：API调用
const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
};
```

### 2.3 Template Literals {#23-template-literals}

**Basic Syntax / 基本语法**

```javascript
// Old way with string concatenation / 旧方式使用字符串连接
const name = "Alice";
const age = 30;
const message = "Hello, my name is " + name + " and I am " + age + " years old.";

// Modern way with template literals / 现代方式使用模板字面量
const message = `Hello, my name is ${name} and I am ${age} years old.`;
```

**Multi-line Strings / 多行字符串**

```javascript
// Old way / 旧方式
const html = "<div>" +
             "  <h1>Title</h1>" +
             "  <p>Content</p>" +
             "</div>";

// Modern way / 现代方式
const html = `
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
`;
```

**Real Examples from Projects / 项目中的实际示例：**

```javascript
// From weather-dashboard: Dynamic API URLs / 来自weather-dashboard：动态API URL
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// From todo-app: Dynamic CSS classes / 来自todo-app：动态CSS类
const todoClass = `
  flex items-center justify-between p-3 border rounded
  ${todo.completed ? 'bg-gray-100 line-through' : 'bg-white'}
  ${todo.completed ? 'text-gray-500' : 'text-gray-900'}
`;

// From calculator-app: Display formatting / 来自calculator-app：显示格式化
const displayValue = `${result || '0'}`;
```

### 2.4 Destructuring {#24-destructuring}

**Array Destructuring / 数组解构**

```javascript
// Traditional way / 传统方式
const colors = ['red', 'green', 'blue'];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// Modern destructuring / 现代解构方式
const [first, second, third] = colors;

// Skip elements / 跳过元素
const [first, , third] = colors; // Skip second element / 跳过第二个元素

// Default values / 默认值
const [a, b, c = 'yellow'] = ['red', 'green']; // c will be 'yellow' / c将是'yellow'
```

**Object Destructuring / 对象解构**

```javascript
// Traditional way / 传统方式
const user = { name: 'Alice', age: 30, city: 'New York' };
const name = user.name;
const age = user.age;
const city = user.city;

// Modern destructuring / 现代解构方式
const { name, age, city } = user;

// Rename variables / 重命名变量
const { name: userName, age: userAge } = user;

// Default values / 默认值
const { name, age, country = 'USA' } = user;

// Nested destructuring / 嵌套解构
const user = {
  name: 'Alice',
  address: {
    city: 'New York',
    zipCode: '10001'
  }
};
const { name, address: { city, zipCode } } = user;
```

**React Hook Destructuring / React Hook解构**

```javascript
// useState returns an array, we destructure it
// useState返回一个数组，我们对其进行解构
const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');

// Component props destructuring / 组件props解构
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onToggle(todo.id)}>Toggle</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};
```

**Examples from Our Projects / 项目中的示例：**

```javascript
// From weather-dashboard: API response destructuring / 来自weather-dashboard：API响应解构
const { name, main: { temp, humidity }, weather } = weatherData;

// From todo-app: Event object destructuring / 来自todo-app：事件对象解构
const handleInputChange = ({ target: { value } }) => {
  setInputValue(value);
};

// From personal-portfolio: Import destructuring / 来自personal-portfolio：导入解构
import { useState, useEffect, useCallback } from 'react';
```

### 2.5 Spread and Rest Operators {#25-spread-and-rest-operators}

**Spread Operator (...) / 展开运算符**

The spread operator allows us to expand arrays, objects, or other iterables.

展开运算符允许我们展开数组、对象或其他可迭代对象。

```javascript
// Array spreading / 数组展开
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Object spreading / 对象展开
const user = { name: 'Alice', age: 30 };
const updatedUser = { ...user, age: 31 }; // { name: 'Alice', age: 31 }

// Function arguments / 函数参数
const sum = (a, b, c) => a + b + c;
const numbers = [1, 2, 3];
const result = sum(...numbers); // Same as sum(1, 2, 3) / 等同于sum(1, 2, 3)
```

**Rest Parameter (...) / 剩余参数**

The rest parameter collects multiple elements into an array.

剩余参数将多个元素收集到一个数组中。

```javascript
// Collect remaining function parameters / 收集剩余的函数参数
const sum = (first, ...rest) => {
  console.log(first); // First parameter / 第一个参数
  console.log(rest);  // Array of remaining parameters / 剩余参数的数组
  return first + rest.reduce((acc, num) => acc + num, 0);
};

sum(1, 2, 3, 4, 5); // first: 1, rest: [2, 3, 4, 5]

// Array destructuring with rest / 数组解构与剩余参数
const [first, second, ...others] = [1, 2, 3, 4, 5];
// first: 1, second: 2, others: [3, 4, 5]

// Object destructuring with rest / 对象解构与剩余参数
const { name, age, ...otherInfo } = { 
  name: 'Alice', 
  age: 30, 
  city: 'NYC', 
  country: 'USA' 
};
// name: 'Alice', age: 30, otherInfo: { city: 'NYC', country: 'USA' }
```

**React State Updates / React状态更新**

```javascript
// Adding to an array immutably / 不可变地添加到数组
const [todos, setTodos] = useState([]);

const addTodo = (newTodo) => {
  setTodos([...todos, newTodo]); // Create new array with spread / 使用展开创建新数组
};

// Updating an object immutably / 不可变地更新对象
const [user, setUser] = useState({ name: 'Alice', age: 30 });

const updateAge = (newAge) => {
  setUser({ ...user, age: newAge }); // Create new object with spread / 使用展开创建新对象
};

// Removing from array immutably / 不可变地从数组中移除
const removeTodo = (todoId) => {
  setTodos(todos.filter(todo => todo.id !== todoId));
};
```

**Examples from Our Projects / 项目中的示例：**

```javascript
// From todo-app: Adding new todos / 来自todo-app：添加新待办事项
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };
  setTodos([...todos, newTodo]);
};

// From calculator-app: Button data / 来自calculator-app：按钮数据
const buttonData = [
  ...numberButtons,
  ...operatorButtons,
  ...functionButtons
];
```

### 2.6 Array Methods {#26-array-methods}

Modern JavaScript provides powerful array methods that are essential for React development.

现代JavaScript提供了强大的数组方法，这些方法对React开发至关重要。

**map() - Transform Arrays / 转换数组**

The `map()` method creates a new array with the results of calling a function for every array element.

`map()`方法通过为每个数组元素调用函数来创建一个新数组。

```javascript
// Basic example / 基础示例
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Object transformation / 对象转换
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const userNames = users.map(user => user.name); // ['Alice', 'Bob']

// React JSX rendering / React JSX渲染
const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
```

**filter() - Filter Arrays / 过滤数组**

The `filter()` method creates a new array with all elements that pass a test function.

`filter()`方法创建一个新数组，包含所有通过测试函数的元素。

```javascript
// Basic filtering / 基础过滤
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4, 6]

// Object filtering / 对象过滤
const todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build app', completed: true }
];
const completedTodos = todos.filter(todo => todo.completed);
const activeTodos = todos.filter(todo => !todo.completed);
```

**find() - Find Single Element / 查找单个元素**

```javascript
const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 }
];

const user = users.find(u => u.id === 1); // { id: 1, name: 'Alice', age: 30 }
const youngUser = users.find(u => u.age < 30); // { id: 2, name: 'Bob', age: 25 }
```

**reduce() - Reduce to Single Value / 减少为单个值**

```javascript
// Sum numbers / 求和
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15

// Count occurrences / 计算出现次数
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {}); // { apple: 2, banana: 2, orange: 1 }
```

**Examples from Our Projects / 项目中的示例：**

```javascript
// From todo-app: Filtering todos based on status / 来自todo-app：基于状态过滤待办事项
const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

// From calculator-app: Rendering button grid / 来自calculator-app：渲染按钮网格
const ButtonGrid = ({ buttons, onButtonClick }) => (
  <div className="button-grid">
    {buttons.map(button => (
      <Button
        key={button.id}
        value={button.value}
        onClick={() => onButtonClick(button.value)}
        className={button.className}
      />
    ))}
  </div>
);

// From weather-dashboard: Processing weather data / 来自weather-dashboard：处理天气数据
const processWeatherData = (data) => {
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed
  };
};
```

### 2.7 Objects and Methods {#27-objects-and-methods}

**Object Shorthand Properties / 对象简写属性**

```javascript
// Traditional way / 传统方式
const name = 'Alice';
const age = 30;
const user = {
  name: name,
  age: age
};

// Modern shorthand / 现代简写
const user = { name, age }; // Same result / 相同结果
```

**Object Methods / 对象方法**

```javascript
const calculator = {
  result: 0,
  
  // Method shorthand / 方法简写
  add(num) {
    this.result += num;
    return this;
  },
  
  // Arrow function (different 'this' behavior) / 箭头函数（不同的'this'行为）
  reset: () => {
    this.result = 0; // 'this' refers to global object / 'this'指向全局对象
  },
  
  // Traditional method / 传统方法
  multiply: function(num) {
    this.result *= num;
    return this;
  }
};

// Method chaining / 方法链
calculator.add(5).multiply(2); // result: 10
```

**Object.keys(), Object.values(), Object.entries()**

```javascript
const user = { name: 'Alice', age: 30, city: 'NYC' };

// Get all keys / 获取所有键
const keys = Object.keys(user); // ['name', 'age', 'city']

// Get all values / 获取所有值
const values = Object.values(user); // ['Alice', 30, 'NYC']

// Get key-value pairs / 获取键值对
const entries = Object.entries(user); 
// [['name', 'Alice'], ['age', 30], ['city', 'NYC']]

// Convert back to object / 转换回对象
const newUser = Object.fromEntries(entries);
```

### 2.8 Modules (Import/Export) {#28-modules-importexport}

**Named Exports / 命名导出**

```javascript
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Multiple exports at once / 一次性多个导出
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
export { multiply, divide };

// Import named exports / 导入命名导出
import { add, subtract } from './utils.js';
import { multiply, divide } from './utils.js';

// Import with different names / 使用不同名称导入
import { add as sum, subtract as minus } from './utils.js';

// Import all named exports / 导入所有命名导出
import * as mathUtils from './utils.js';
mathUtils.add(2, 3);
```

**Default Exports / 默认导出**

```javascript
// Calculator.js
const Calculator = () => {
  return <div>Calculator Component</div>;
};

export default Calculator;

// Import default export / 导入默认导出
import Calculator from './Calculator.js';
import MyCalculator from './Calculator.js'; // Can use any name / 可以使用任何名称
```

**Mixed Imports/Exports / 混合导入/导出**

```javascript
// components.js
export const Button = () => <button>Click me</button>;
export const Input = () => <input type="text" />;

const App = () => <div>Main App</div>;
export default App;

// Import both / 导入两者
import App, { Button, Input } from './components.js';
```

**Examples from Our Projects / 项目中的示例：**

```javascript
// From todo-app/src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// From calculator-app/src/utils/calculations.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => b !== 0 ? a / b : 'Error';

// From personal-portfolio/src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
```

### 2.9 Promises and Async/Await {#29-promises-and-asyncawait}

**Understanding Promises / 理解Promise**

A Promise represents a value that may be available now, in the future, or never.

Promise表示一个可能现在、将来或永远不可用的值。

```javascript
// Creating a Promise / 创建Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ data: 'Success!' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
};

// Using Promises with .then() / 使用.then()处理Promise
fetchData()
  .then(result => {
    console.log('Success:', result.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

**Async/Await Syntax / Async/Await语法**

```javascript
// Using async/await / 使用async/await
const getData = async () => {
  try {
    const result = await fetchData();
    console.log('Success:', result.data);
    return result;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Multiple async operations / 多个异步操作
const processMultipleRequests = async () => {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchComments()
    ]);
    
    return { user, posts, comments };
  } catch (error) {
    console.error('One or more requests failed:', error);
  }
};
```

**Fetch API for HTTP Requests / 用于HTTP请求的Fetch API**

```javascript
// Basic fetch request / 基本fetch请求
const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// POST request with JSON data / 带JSON数据的POST请求
const createUser = async (userData) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error('Create user error:', error);
    throw error;
  }
};
```

**Examples from Our Projects / 项目中的示例：**

```javascript
// From weather-dashboard: API calls / 来自weather-dashboard：API调用
const WeatherService = {
  async getCurrentWeather(city) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      
      const data = await response.json();
      return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  }
};

// React component using async data / 使用异步数据的React组件
const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const searchWeather = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const weatherData = await WeatherService.getCurrentWeather(city);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {weather && <WeatherDisplay data={weather} />}
    </div>
  );
};
```

---

## Chapter 3: Modern HTML and CSS / 第3章：现代HTML和CSS {#chapter-3}

While React handles much of the HTML structure through JSX, understanding modern HTML and CSS is crucial for building effective user interfaces.

虽然React通过JSX处理大部分HTML结构，但理解现代HTML和CSS对于构建有效的用户界面至关重要。

### 3.1 Semantic HTML5 {#31-semantic-html5}

**Semantic Elements / 语义元素**

Semantic HTML elements clearly describe their meaning to both browsers and developers.

语义HTML元素向浏览器和开发者清楚地描述了它们的含义。

```html
<!-- Non-semantic structure / 非语义结构 -->
<div class="header">
  <div class="nav">
    <div>Home</div>
    <div>About</div>
  </div>
</div>
<div class="main">
  <div class="article">
    <div class="title">Article Title</div>
    <div class="content">Article content...</div>
  </div>
</div>

<!-- Semantic structure / 语义结构 -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>
```

**Common Semantic Elements / 常见语义元素**

```html
<header>     <!-- Page or section header / 页面或部分头部 -->
<nav>        <!-- Navigation links / 导航链接 -->
<main>       <!-- Main content area / 主内容区域 -->
<section>    <!-- Thematic grouping of content / 内容的主题分组 -->
<article>    <!-- Standalone piece of content / 独立的内容片段 -->
<aside>      <!-- Sidebar content / 侧边栏内容 -->
<footer>     <!-- Page or section footer / 页面或部分页脚 -->
<figure>     <!-- Media with caption / 带标题的媒体 -->
<figcaption> <!-- Caption for figure / 图形标题 -->
```

**Examples from Our Projects / 项目中的示例：**

```jsx
// From personal-portfolio: Semantic structure / 来自personal-portfolio：语义结构
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// From todo-app: Form semantics / 来自todo-app：表单语义
<form onSubmit={handleSubmit} className="mb-6">
  <label htmlFor="todoInput" className="sr-only">
    Add new todo
  </label>
  <input
    id="todoInput"
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    placeholder="Add a new todo..."
    className="w-full p-3 border rounded"
  />
  <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
    Add Todo
  </button>
</form>
```

### 3.2 Flexbox Layout {#32-flexbox-layout}

**Flexbox Basics / Flexbox基础**

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

Flexbox是一种一维布局方法，用于在行或列中排列项目。

```css
/* Container properties / 容器属性 */
.flex-container {
  display: flex;                    /* Enable flexbox / 启用flexbox */
  flex-direction: row;              /* row | row-reverse | column | column-reverse */
  justify-content: space-between;   /* Main axis alignment / 主轴对齐 */
  align-items: center;              /* Cross axis alignment / 交叉轴对齐 */
  flex-wrap: wrap;                  /* Allow wrapping / 允许换行 */
  gap: 1rem;                        /* Space between items / 项目间距 */
}

/* Item properties / 项目属性 */
.flex-item {
  flex: 1;                          /* Grow and shrink / 增长和收缩 */
  flex-grow: 1;                     /* How much to grow / 增长多少 */
  flex-shrink: 1;                   /* How much to shrink / 收缩多少 */
  flex-basis: auto;                 /* Initial size / 初始大小 */
}
```

**Common Flexbox Patterns / 常见Flexbox模式**

```css
/* Center content horizontally and vertically / 水平垂直居中内容 */
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Navigation bar / 导航栏 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/* Card layout / 卡片布局 */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, min-width / 增长、收缩、最小宽度 */
}
```

**Tailwind CSS Flexbox Classes / Tailwind CSS Flexbox类**

```html
<!-- Basic flex container / 基本flex容器 -->
<div class="flex justify-between items-center">
  <div>Left content</div>
  <div>Right content</div>
</div>

<!-- Responsive flex direction / 响应式flex方向 -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Content 1</div>
  <div class="flex-1">Content 2</div>
</div>

<!-- Center content / 居中内容 -->
<div class="flex items-center justify-center min-h-screen">
  <div>Centered content</div>
</div>
```

### 3.3 CSS Grid {#33-css-grid}

**Grid Basics / Grid基础**

CSS Grid is a two-dimensional layout system perfect for complex layouts.

CSS Grid是一个二维布局系统，非常适合复杂的布局。

```css
/* Grid container / Grid容器 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;      /* Column sizes / 列大小 */
  grid-template-rows: auto 1fr auto;       /* Row sizes / 行大小 */
  grid-gap: 1rem;                          /* Gap between items / 项目间距 */
  min-height: 100vh;
}

/* Named grid lines / 命名网格线 */
.grid-container {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
  grid-template-rows: 
    [header-start] 60px 
    [header-end content-start] 1fr 
    [content-end footer-start] 40px 
    [footer-end];
}

/* Grid item placement / Grid项目放置 */
.header {
  grid-column: 1 / -1;              /* Span all columns / 跨越所有列 */
  grid-row: header;                 /* Use named line / 使用命名线 */
}

.sidebar {
  grid-column: sidebar;
  grid-row: content;
}

.main {
  grid-column: main;
  grid-row: content;
}
```

**Examples from Calculator App / 来自计算器应用的示例：**

```css
/* Calculator button grid / 计算器按钮网格 */
.calculator-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  padding: 16px;
}

.button-zero {
  grid-column: span 2; /* Span two columns / 跨越两列 */
}

.button-equals {
  grid-row: span 2; /* Span two rows / 跨越两行 */
}
```

**Tailwind CSS Grid Classes / Tailwind CSS Grid类**

```html
<!-- Basic grid / 基本网格 -->
<div class="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Responsive grid / 响应式网格 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Calculator layout / 计算器布局 -->
<div class="grid grid-cols-4 gap-2">
  <button class="col-span-2">0</button>
  <button>.</button>
  <button class="row-span-2">=</button>
</div>
```

### 3.4 Responsive Design {#34-responsive-design}

**Mobile-First Approach / 移动优先方法**

Design for mobile devices first, then enhance for larger screens.

首先为移动设备设计，然后为更大的屏幕增强。

```css
/* Mobile-first CSS / 移动优先CSS */
.container {
  padding: 1rem;
  font-size: 14px;
}

/* Tablet and up / 平板电脑及以上 */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 16px;
  }
}

/* Desktop and up / 桌面及以上 */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
    font-size: 18px;
  }
}
```

**Tailwind CSS Responsive Classes / Tailwind CSS响应式类**

```html
<!-- Responsive text sizes / 响应式文本大小 -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

<!-- Responsive layout / 响应式布局 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <!-- Cards that stack on mobile, 2 on tablet, 3 on desktop, 4 on xl -->
  <!-- 在移动设备上堆叠，平板电脑上显示2个，桌面上显示3个，xl上显示4个的卡片 -->
</div>

<!-- Hide/show elements at different sizes / 在不同尺寸下隐藏/显示元素 -->
<div class="hidden md:block">
  Desktop navigation
</div>
<div class="block md:hidden">
  Mobile menu button
</div>
```

**Common Breakpoints / 常见断点**

```javascript
// Tailwind CSS default breakpoints / Tailwind CSS默认断点
const breakpoints = {
  sm: '640px',    // Small devices / 小设备
  md: '768px',    // Medium devices / 中等设备
  lg: '1024px',   // Large devices / 大设备
  xl: '1280px',   // Extra large devices / 超大设备
  '2xl': '1536px' // 2X Extra large devices / 2倍超大设备
};
```

### 3.5 CSS Variables {#35-css-variables}

**CSS Custom Properties / CSS自定义属性**

CSS variables allow you to store values that can be reused throughout your stylesheet.

CSS变量允许您存储可在整个样式表中重用的值。

```css
/* Define variables in :root for global scope / 在:root中定义全局作用域变量 */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --background-color: #f8fafc;
  --text-color: #1e293b;
  --border-radius: 8px;
  --spacing-unit: 1rem;
}

/* Dark theme variables / 暗黑主题变量 */
[data-theme="dark"] {
  --background-color: #1e293b;
  --text-color: #f8fafc;
  --primary-color: #60a5fa;
}

/* Use variables / 使用变量 */
.button {
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  padding: var(--spacing-unit);
  
  /* Fallback value / 回退值 */
  border: 1px solid var(--border-color, #e2e8f0);
}

.button:hover {
  background-color: var(--primary-color);
  filter: brightness(1.1);
}
```

**JavaScript and CSS Variables / JavaScript和CSS变量**

```javascript
// Read CSS variable / 读取CSS变量
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

// Set CSS variable / 设置CSS变量
document.documentElement.style.setProperty('--primary-color', '#ef4444');

// Theme switching / 主题切换
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
};
```

### 3.6 Tailwind CSS Fundamentals {#36-tailwind-css-fundamentals}

**Utility-First Approach / 实用优先方法**

Tailwind CSS uses utility classes to build designs directly in your markup.

Tailwind CSS使用实用类直接在标记中构建设计。

```html
<!-- Traditional CSS approach / 传统CSS方法 -->
<style>
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 16px;
}
</style>
<div class="card">Content</div>

<!-- Tailwind utility approach / Tailwind实用方法 -->
<div class="bg-white rounded-lg shadow-md p-6 mb-4">
  Content
</div>
```

**Common Utility Patterns / 常见实用模式**

```html
<!-- Spacing / 间距 -->
<div class="p-4">Padding all sides</div>
<div class="px-4 py-2">Padding horizontal and vertical</div>
<div class="m-4">Margin all sides</div>
<div class="mt-4 mb-2">Margin top and bottom</div>

<!-- Colors / 颜色 -->
<div class="bg-blue-500 text-white">Blue background, white text</div>
<div class="text-gray-800 bg-gray-100">Gray text on light gray</div>

<!-- Typography / 排版 -->
<h1 class="text-3xl font-bold text-center">Large, bold, centered</h1>
<p class="text-sm text-gray-600 leading-relaxed">Small gray text</p>

<!-- Layout / 布局 -->
<div class="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- States / 状态 -->
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700">
  Interactive button
</button>
```

**Examples from Our Projects / 项目中的示例：**

```jsx
// From todo-app: Todo item styling / 来自todo-app：待办事项样式
const TodoItem = ({ todo, onToggle, onDelete }) => (
  <div className={`
    flex items-center justify-between p-3 border rounded-lg mb-2
    ${todo.completed 
      ? 'bg-gray-50 text-gray-500 line-through' 
      : 'bg-white text-gray-900'
    }
    hover:shadow-md transition-shadow duration-200
  `}>
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
      />
      <span className="flex-1">{todo.text}</span>
    </div>
    <button
      onClick={() => onDelete(todo.id)}
      className="text-red-500 hover:text-red-700 transition-colors duration-200"
    >
      Delete
    </button>
  </div>
);

// From weather-dashboard: Weather card / 来自weather-dashboard：天气卡片
const WeatherCard = ({ weather }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {weather.city}
      </h2>
      <div className="text-6xl font-light text-blue-600 mb-4">
        {weather.temperature}°
      </div>
      <p className="text-gray-600 capitalize mb-4">
        {weather.description}
      </p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-gray-500">Humidity</div>
          <div className="font-semibold">{weather.humidity}%</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-gray-500">Wind Speed</div>
          <div className="font-semibold">{weather.windSpeed} m/s</div>
        </div>
      </div>
    </div>
  </div>
);
```

**Responsive Utilities / 响应式实用程序**

```html
<!-- Responsive padding / 响应式内边距 -->
<div class="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>

<!-- Responsive grid / 响应式网格 -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Responsive text / 响应式文本 -->
<h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
  Responsive heading
</h1>
```

---

## Chapter 4: React Fundamentals / 第4章：React基础 {#chapter-4}

React is a JavaScript library for building user interfaces, especially single-page applications where you need a fast, interactive user experience.

React是一个用于构建用户界面的JavaScript库，特别适用于需要快速、交互式用户体验的单页应用程序。

### 4.1 What is React? {#41-what-is-react}

**Core Concepts / 核心概念**

React is built around several key concepts:

React围绕几个关键概念构建：

1. **Components / 组件**: Reusable pieces of UI
2. **Virtual DOM / 虚拟DOM**: Efficient DOM manipulation
3. **Unidirectional Data Flow / 单向数据流**: Data flows down, events flow up
4. **Declarative / 声明式**: Describe what you want, not how to achieve it

**Why React? / 为什么选择React？**

```javascript
// Without React - Imperative approach / 没有React - 命令式方法
function updateCounter() {
  const counter = document.getElementById('counter');
  const currentValue = parseInt(counter.textContent);
  counter.textContent = currentValue + 1;
  
  if (currentValue + 1 > 10) {
    counter.style.color = 'red';
  }
}

// With React - Declarative approach / 使用React - 声明式方法
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <span style={{ color: count > 10 ? 'red' : 'black' }}>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**Virtual DOM Concept / 虚拟DOM概念**

The Virtual DOM is a JavaScript representation of the actual DOM. React uses it to:

虚拟DOM是实际DOM的JavaScript表示。React使用它来：

1. **Batch Updates / 批量更新**: Group multiple changes together
2. **Efficient Diffing / 高效差异比较**: Only update what changed
3. **Better Performance / 更好的性能**: Minimize expensive DOM operations

```javascript
// React creates a virtual representation / React创建虚拟表示
const virtualDOM = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: { children: 'Hello World' }
      },
      {
        type: 'p',
        props: { children: 'This is a paragraph' }
      }
    ]
  }
};

// React efficiently updates only what changed
// React只高效更新发生变化的部分
```

### 4.2 JSX Syntax {#42-jsx-syntax}

**What is JSX? / 什么是JSX？**

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.

JSX是JavaScript的语法扩展，允许您在JavaScript文件中编写类似HTML的代码。

```jsx
// JSX looks like HTML but it's actually JavaScript
// JSX看起来像HTML，但实际上是JavaScript
const element = <h1>Hello, World!</h1>;

// JSX gets compiled to React.createElement() calls
// JSX被编译为React.createElement()调用
const element = React.createElement('h1', null, 'Hello, World!');
```

**JSX Rules / JSX规则**

1. **Single Parent Element / 单个父元素**
```jsx
// ❌ Multiple parent elements
// ❌ 多个父元素
return (
  <h1>Title</h1>
  <p>Paragraph</p>
);

// ✅ Single parent element
// ✅ 单个父元素
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// ✅ React Fragment (doesn't add extra DOM node)
// ✅ React Fragment（不添加额外的DOM节点）
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

2. **className instead of class**
```jsx
// ❌ HTML class attribute
// ❌ HTML class属性
<div class="container">Content</div>

// ✅ JSX className attribute
// ✅ JSX className属性
<div className="container">Content</div>
```

3. **camelCase for attributes**
```jsx
// HTML attributes become camelCase in JSX
// HTML属性在JSX中变为驼峰命名
<input onclick="handler()" />     // HTML
<input onClick={handler} />       // JSX

<label for="input" />             // HTML
<label htmlFor="input" />         // JSX

<div tabindex="0" />              // HTML
<div tabIndex="0" />              // JSX
```

4. **Self-closing tags must close**
```jsx
// ❌ HTML allows unclosed tags
// ❌ HTML允许未闭合标签
<input type="text">
<img src="image.jpg">

// ✅ JSX requires self-closing tags to close
// ✅ JSX要求自闭合标签必须闭合
<input type="text" />
<img src="image.jpg" />
```

**Embedding JavaScript in JSX / 在JSX中嵌入JavaScript**

```jsx
const WelcomeMessage = ({ user, isLoggedIn }) => {
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="welcome">
      {/* JavaScript expressions in curly braces */}
      {/* JavaScript表达式在大括号中 */}
      <h1>Welcome, {user.name}!</h1>
      <p>Current time: {currentTime}</p>
      
      {/* Conditional rendering */}
      {/* 条件渲染 */}
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <p>Please log in</p>
      )}
      
      {/* Array rendering */}
      {/* 数组渲染 */}
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      
      {/* Function calls */}
      {/* 函数调用 */}
      <p>Uppercase name: {user.name.toUpperCase()}</p>
      
      {/* Object properties */}
      {/* 对象属性 */}
      <p>User age: {user.profile.age}</p>
    </div>
  );
};
```

**JSX and CSS Styling / JSX和CSS样式**

```jsx
const StyledComponent = () => {
  const isActive = true;
  const primaryColor = '#3b82f6';
  
  return (
    <div>
      {/* Inline styles (object syntax) */}
      {/* 内联样式（对象语法） */}
      <h1 style={{
        color: primaryColor,
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        Styled Heading
      </h1>
      
      {/* Dynamic className */}
      {/* 动态className */}
      <button 
        className={`btn ${isActive ? 'btn-active' : 'btn-inactive'}`}
      >
        Dynamic Button
      </button>
      
      {/* Template literal for complex classes */}
      {/* 模板字面量用于复杂类 */}
      <div className={`
        flex items-center justify-center p-4 rounded-lg
        ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}
        hover:shadow-lg transition-all duration-300
      `}>
        Complex Styling
      </div>
    </div>
  );
};
```

### 4.3 Components and Props {#43-components-and-props}

**Function Components / 函数组件**

Modern React primarily uses function components with hooks.

现代React主要使用带有hooks的函数组件。

```jsx
// Simple function component / 简单函数组件
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function component / 箭头函数组件
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

// Implicit return for simple components / 简单组件的隐式返回
const Welcome = () => <h1>Hello, World!</h1>;
```

**Props (Properties) / Props（属性）**

Props are how we pass data from parent to child components.

Props是我们从父组件向子组件传递数据的方式。

```jsx
// Child component receiving props / 接收props的子组件
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Using destructuring for cleaner code / 使用解构获得更清洁的代码
const Greeting = ({ name, age, isVIP }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      {isVIP && <span className="vip-badge">VIP Member</span>}
    </div>
  );
};

// Parent component passing props / 传递props的父组件
const App = () => {
  return (
    <div>
      <Greeting name="Alice" age={30} isVIP={true} />
      <Greeting name="Bob" age={25} isVIP={false} />
    </div>
  );
};
```

**Props Types and Default Values / Props类型和默认值**

```jsx
// Default parameters in function / 函数中的默认参数
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${disabled ? 'btn-disabled' : ''}`}
    >
      {children}
    </button>
  );
};

// Using the Button component / 使用Button组件
const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <div>
      <Button onClick={handleClick}>
        Default Button
      </Button>
      
      <Button onClick={handleClick} variant="secondary">
        Secondary Button
      </Button>
      
      <Button onClick={handleClick} disabled={true}>
        Disabled Button
      </Button>
    </div>
  );
};
```

**Complex Props Examples / 复杂Props示例**

```jsx
// From todo-app: TodoItem component / 来自todo-app：TodoItem组件
const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  
  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };
  
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="view-mode">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span onClick={() => setIsEditing(true)}>
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

// Parent component using TodoItem / 使用TodoItem的父组件
const TodoList = ({ todos }) => {
  const handleToggle = (id) => {
    // Toggle todo completion logic
    // 切换待办事项完成状态的逻辑
  };
  
  const handleDelete = (id) => {
    // Delete todo logic
    // 删除待办事项的逻辑
  };
  
  const handleEdit = (id, newText) => {
    // Edit todo logic
    // 编辑待办事项的逻辑
  };
  
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};
```

**Props Children / Props Children**

```jsx
// Card component that wraps content / 包装内容的Card组件
const Card = ({ title, className, children }) => {
  return (
    <div className={`card ${className || ''}`}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

// Using Card with different content / 使用不同内容的Card
const App = () => {
  return (
    <div>
      <Card title="User Profile" className="user-card">
        <p>Name: Alice Johnson</p>
        <p>Email: alice@example.com</p>
        <button>Edit Profile</button>
      </Card>
      
      <Card title="Statistics">
        <div className="stats">
          <div>Users: 1,234</div>
          <div>Orders: 5,678</div>
          <div>Revenue: $12,345</div>
        </div>
      </Card>
    </div>
  );
};
```

### 4.4 State Management with useState {#44-state-management-with-usestate}

**What is State? / 什么是状态？**

State is data that can change over time and affects what the component renders. When state changes, React re-renders the component to reflect the new state.

状态是随时间变化并影响组件渲染内容的数据。当状态改变时，React会重新渲染组件以反映新状态。

**useState Hook Basics / useState Hook基础**

```jsx
import { useState } from 'react';

const Counter = () => {
  // useState returns [currentValue, setterFunction]
  // useState返回[当前值, 设置函数]
  const [count, setCount] = useState(0); // Initial value is 0 / 初始值为0
  
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
```

**Different Types of State / 不同类型的状态**

```jsx
const StateExamples = () => {
  // String state / 字符串状态
  const [name, setName] = useState('');
  
  // Boolean state / 布尔状态
  const [isVisible, setIsVisible] = useState(true);
  
  // Array state / 数组状态
  const [items, setItems] = useState([]);
  
  // Object state / 对象状态
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  // Adding to array / 添加到数组
  const addItem = (newItem) => {
    setItems([...items, newItem]); // Always create new array / 总是创建新数组
  };
  
  // Removing from array / 从数组中移除
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  
  // Updating object / 更新对象
  const updateUser = (field, value) => {
    setUser({
      ...user,        // Keep existing properties / 保持现有属性
      [field]: value  // Update specific field / 更新特定字段
    });
  };
  
  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      
      {isVisible && <p>This is visible!</p>}
      
      <button onClick={() => addItem(`Item ${items.length + 1}`)}>
        Add Item
      </button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

**Examples from Our Projects / 项目中的示例**

```jsx
// From todo-app: Managing todos array / 来自todo-app：管理待办事项数组
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'
  
  // Add new todo / 添加新待办事项
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple ID generation / 简单ID生成
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };
  
  // Toggle todo completion / 切换待办事项完成状态
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };
  
  // Delete todo / 删除待办事项
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Get filtered todos / 获取过滤后的待办事项
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(''); // Clear input after adding / 添加后清空输入
    }
  };
  
  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
      
      <div className="filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All ({todos.length})
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active ({todos.filter(t => !t.completed).length})
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed ({todos.filter(t => t.completed).length})
        </button>
      </div>
      
      <div className="todo-list">
        {getFilteredTodos().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

// From calculator-app: Managing calculator state / 来自calculator-app：管理计算器状态
const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  
  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };
  
  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }
    
    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };
  
  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };
  
  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };
  
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      {/* Calculator buttons would go here */}
    </div>
  );
};
```

**State Update Patterns / 状态更新模式**

```jsx
const StatePatterns = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Alice', age: 30 });
  const [items, setItems] = useState(['apple', 'banana']);
  
  // Functional updates for better performance / 函数式更新以获得更好性能
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // Use previous value / 使用先前值
  };
  
  // Multiple rapid updates / 多次快速更新
  const incrementByFive = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
  
  // Update nested object properties / 更新嵌套对象属性
  const updateUserAge = () => {
    setUser(prevUser => ({
      ...prevUser,
      age: prevUser.age + 1
    }));
  };
  
  // Complex array operations / 复杂数组操作
  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };
  
  const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };
  
  const updateItem = (index, newValue) => {
    setItems(prevItems => 
      prevItems.map((item, i) => i === index ? newValue : item)
    );
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementByFive}>Increment by 5</button>
      
      <p>User: {user.name}, Age: {user.age}</p>
      <button onClick={updateUserAge}>Age + 1</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem('new item')}>Add Item</button>
    </div>
  );
};
```

### 4.5 Event Handling {#45-event-handling}

**Basic Event Handling / 基本事件处理**

React uses SyntheticEvents, which are React's wrapper around native browser events.

React使用SyntheticEvents，这是React对原生浏览器事件的包装。

```jsx
const EventHandling = () => {
  const [message, setMessage] = useState('');
  
  // Click event / 点击事件
  const handleClick = () => {
    setMessage('Button clicked!');
  };
  
  // Click with parameters / 带参数的点击
  const handleClickWithParam = (text) => {
    setMessage(`Clicked: ${text}`);
  };
  
  // Form submission / 表单提交
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload / 防止页面重新加载
    console.log('Form submitted');
  };
  
  // Input change / 输入变化
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  
  // Key press events / 按键事件
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setMessage('Enter key pressed!');
    }
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
      
      <button onClick={() => handleClickWithParam('Hello')}>
        Click with parameter
      </button>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
      
      <p>Message: {message}</p>
    </div>
  );
};
```

**Common Event Types / 常见事件类型**

```jsx
const EventTypes = () => {
  const [logs, setLogs] = useState([]);
  
  const addLog = (message) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };
  
  return (
    <div className="event-demo">
      {/* Mouse Events / 鼠标事件 */}
      <button
        onClick={() => addLog('Clicked')}
        onMouseEnter={() => addLog('Mouse entered')}
        onMouseLeave={() => addLog('Mouse left')}
        onMouseDown={() => addLog('Mouse down')}
        onMouseUp={() => addLog('Mouse up')}
      >
        Mouse Events Button
      </button>
      
      {/* Keyboard Events / 键盘事件 */}
      <input
        type="text"
        onKeyDown={(e) => addLog(`Key down: ${e.key}`)}
        onKeyUp={(e) => addLog(`Key up: ${e.key}`)}
        onFocus={() => addLog('Input focused')}
        onBlur={() => addLog('Input blurred')}
        placeholder="Keyboard events"
      />
      
      {/* Form Events / 表单事件 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addLog('Form submitted');
        }}
      >
        <select onChange={(e) => addLog(`Selected: ${e.target.value}`)}>
          <option value="">Choose...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        
        <input type="checkbox" 
          onChange={(e) => addLog(`Checkbox: ${e.target.checked}`)} 
        />
        
        <button type="submit">Submit Form</button>
      </form>
      
      {/* Event Log / 事件日志 */}
      <div className="event-log">
        <h3>Event Log:</h3>
        <div style={{ height: '200px', overflow: 'auto', border: '1px solid #ccc' }}>
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
        <button onClick={() => setLogs([])}>Clear Log</button>
      </div>
    </div>
  );
};
```

**Event Object Properties / 事件对象属性**

```jsx
const EventDetails = () => {
  const [eventInfo, setEventInfo] = useState('');
  
  const handleDetailedClick = (e) => {
    // Common event properties / 常见事件属性
    const info = {
      type: e.type,                    // Event type / 事件类型
      target: e.target.tagName,        // Element that triggered event / 触发事件的元素
      currentTarget: e.currentTarget.tagName, // Element with event listener / 有事件监听器的元素
      clientX: e.clientX,              // Mouse X coordinate / 鼠标X坐标
      clientY: e.clientY,              // Mouse Y coordinate / 鼠标Y坐标
      key: e.key,                      // Key pressed (for keyboard events) / 按下的键
      shiftKey: e.shiftKey,            // Was Shift key pressed? / 是否按下Shift键？
      ctrlKey: e.ctrlKey,              // Was Ctrl key pressed? / 是否按下Ctrl键？
      altKey: e.altKey                 // Was Alt key pressed? / 是否按下Alt键？
    };
    
    setEventInfo(JSON.stringify(info, null, 2));
  };
  
  return (
    <div>
      <button onClick={handleDetailedClick}>
        Click for event details
      </button>
      
      <input
        type="text"
        onKeyDown={handleDetailedClick}
        placeholder="Press keys for details"
      />
      
      <pre style={{ background: '#f5f5f5', padding: '10px' }}>
        {eventInfo}
      </pre>
    </div>
  );
};
```

### 4.6 Conditional Rendering {#46-conditional-rendering}

**If-Else with Ternary Operator / 三元运算符的If-Else**

```jsx
const ConditionalBasics = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'Alice', isAdmin: false });
  
  return (
    <div>
      {/* Basic conditional rendering / 基本条件渲染 */}
      {isLoggedIn ? (
        <div>
          <h2>Welcome back!</h2>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}
      
      {/* Nested conditional rendering / 嵌套条件渲染 */}
      {isLoggedIn && (
        <div>
          <p>Hello, {user.name}!</p>
          {user.isAdmin ? (
            <button>Admin Panel</button>
          ) : (
            <p>Regular user access</p>
          )}
        </div>
      )}
    </div>
  );
};
```

**Logical AND (&&) Operator / 逻辑与(&&)运算符**

```jsx
const ConditionalDisplay = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      {/* Show element only if condition is true / 仅在条件为真时显示元素 */}
      {showMessage && <p>This message is conditionally displayed!</p>}
      
      {/* Show content based on array length / 基于数组长度显示内容 */}
      {items.length > 0 && (
        <div>
          <h3>Items ({items.length}):</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Show message when array is empty / 数组为空时显示消息 */}
      {items.length === 0 && <p>No items to display</p>}
      
      {/* Error handling / 错误处理 */}
      {error && (
        <div className="error-message" style={{ color: 'red' }}>
          Error: {error}
        </div>
      )}
      
      {/* Loading state / 加载状态 */}
      {loading && <div>Loading...</div>}
      
      {/* Controls / 控制按钮 */}
      <div>
        <button onClick={() => setShowMessage(!showMessage)}>
          Toggle Message
        </button>
        <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
          Add Item
        </button>
        <button onClick={() => setItems([])}>
          Clear Items
        </button>
        <button onClick={() => setError(error ? '' : 'Something went wrong!')}>
          Toggle Error
        </button>
        <button onClick={() => setLoading(!loading)}>
          Toggle Loading
        </button>
      </div>
    </div>
  );
};
```

**Complex Conditional Logic / 复杂条件逻辑**

```jsx
const StatusDisplay = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Function to simulate API call / 模拟API调用的函数
  const fetchData = async () => {
    setStatus('loading');
    setErrorMessage('');
    
    try {
      // Simulate API delay / 模拟API延迟
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Randomly succeed or fail / 随机成功或失败
      if (Math.random() > 0.5) {
        setData({ message: 'Data loaded successfully!', timestamp: new Date() });
        setStatus('success');
      } else {
        throw new Error('Failed to load data');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setStatus('error');
    }
  };
  
  // Render different content based on status / 根据状态渲染不同内容
  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="loading">
            <p>Loading data...</p>
            <div className="spinner">🔄</div>
          </div>
        );
        
      case 'success':
        return (
          <div className="success">
            <h3>✅ Success!</h3>
            <p>{data.message}</p>
            <p>Loaded at: {data.timestamp.toLocaleTimeString()}</p>
          </div>
        );
        
      case 'error':
        return (
          <div className="error">
            <h3>❌ Error</h3>
            <p>{errorMessage}</p>
            <button onClick={fetchData}>Try Again</button>
          </div>
        );
        
      default: // 'idle'
        return (
          <div className="idle">
            <p>Click the button to load data</p>
            <button onClick={fetchData}>Load Data</button>
          </div>
        );
    }
  };
  
  return (
    <div className="status-display">
      <h2>Status: {status}</h2>
      {renderContent()}
      
      {/* Reset button always visible / 重置按钮始终可见 */}
      {status !== 'idle' && (
        <button 
          onClick={() => {
            setStatus('idle');
            setData(null);
            setErrorMessage('');
          }}
          style={{ marginTop: '10px' }}
        >
          Reset
        </button>
      )}
    </div>
  );
};
```

**Examples from Our Projects / 项目中的示例**

```jsx
// From weather-dashboard: Conditional weather display / 来自weather-dashboard：条件天气显示
const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  
  return (
    <div className="weather-app">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>
      
      {/* Loading state / 加载状态 */}
      {loading && (
        <div className="loading">
          <p>Fetching weather data...</p>
        </div>
      )}
      
      {/* Error state / 错误状态 */}
      {error && (
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}
      
      {/* Success state with weather data / 成功状态和天气数据 */}
      {weather && !loading && !error && (
        <div className="weather-card">
          <h2>{weather.city}</h2>
          <div className="temperature">{weather.temperature}°C</div>
          <p>{weather.description}</p>
          
          {/* Additional details if available / 如果可用则显示额外详情 */}
          {weather.humidity && (
            <p>Humidity: {weather.humidity}%</p>
          )}
          {weather.windSpeed && (
            <p>Wind Speed: {weather.windSpeed} m/s</p>
          )}
          
          {/* Show different icon based on weather condition / 根据天气条件显示不同图标 */}
          <div className="weather-icon">
            {weather.description.includes('rain') && '🌧️'}
            {weather.description.includes('sun') && '☀️'}
            {weather.description.includes('cloud') && '☁️'}
            {weather.description.includes('snow') && '❄️'}
          </div>
        </div>
      )}
      
      {/* No data state / 无数据状态 */}
      {!weather && !loading && !error && (
        <div className="no-data">
          <p>Enter a city name to get weather information</p>
        </div>
      )}
    </div>
  );
};

// From todo-app: Conditional todo filtering / 来自todo-app：条件待办事项过滤
const TodoList = ({ todos, filter }) => {
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };
  
  const filteredTodos = getFilteredTodos();
  
  return (
    <div className="todo-list">
      {/* Show different messages based on filter and todo count / 基于过滤器和待办事项数量显示不同消息 */}
      {filteredTodos.length === 0 && (
        <div className="empty-message">
          {filter === 'active' && todos.length > 0 && (
            <p>🎉 All tasks completed! Great job!</p>
          )}
          {filter === 'completed' && (
            <p>No completed tasks yet</p>
          )}
          {filter === 'all' && (
            <p>No todos yet. Add one above!</p>
          )}
        </div>
      )}
      
      {/* Render filtered todos / 渲染过滤后的待办事项 */}
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
      
      {/* Show stats if there are todos / 如果有待办事项则显示统计 */}
      {todos.length > 0 && (
        <div className="todo-stats">
          <p>
            {todos.filter(t => !t.completed).length} active, 
            {todos.filter(t => t.completed).length} completed
          </p>
        </div>
      )}
    </div>
  );
};
```

### 4.7 Lists and Keys {#47-lists-and-keys}

**Rendering Lists / 渲染列表**

```jsx
const ListBasics = () => {
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
  return (
    <div>
      {/* Simple array rendering / 简单数组渲染 */}
      <h3>Fruits:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      
      {/* Object array rendering / 对象数组渲染 */}
      <h3>Users:</h3>
      <div>
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h4>{user.name}</h4>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
```

**Why Keys Matter / 为什么Keys很重要**

Keys help React identify which items have changed, are added, or are removed. This is crucial for performance and avoiding bugs.

Keys帮助React识别哪些项目已更改、添加或删除。这对性能和避免错误至关重要。

```jsx
const KeyDemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'First item', value: '' },
    { id: 2, name: 'Second item', value: '' },
    { id: 3, name: 'Third item', value: '' }
  ]);
  
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Item ${items.length + 1}`,
      value: ''
    };
    setItems([...items, newItem]);
  };
  
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const updateItemValue = (id, newValue) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, value: newValue } : item
    ));
  };
  
  const insertAtBeginning = () => {
    const newItem = {
      id: Date.now(),
      name: 'New first item',
      value: ''
    };
    setItems([newItem, ...items]);
  };
  
  return (
    <div>
      <h3>Dynamic List with Keys</h3>
      
      <div>
        <button onClick={addItem}>Add Item</button>
        <button onClick={insertAtBeginning}>Insert at Beginning</button>
      </div>
      
      {/* Good: Using unique, stable keys / 好：使用唯一、稳定的keys */}
      <div className="good-example">
        <h4>✅ With proper keys (id):</h4>
        {items.map(item => (
          <div key={item.id} className="item">
            <span>{item.name}: </span>
            <input
              type="text"
              value={item.value}
              onChange={(e) => updateItemValue(item.id, e.target.value)}
              placeholder="Type something..."
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      
      {/* Bad: Using index as key (for comparison) / 不好：使用索引作为key（用于比较） */}
      <div className="bad-example">
        <h4>❌ With index keys (problematic):</h4>
        {items.map((item, index) => (
          <div key={index} className="item">
            <span>{item.name}: </span>
            <input
              type="text"
              value={item.value}
              onChange={(e) => updateItemValue(item.id, e.target.value)}
              placeholder="Type something..."
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
```

**Complex List Rendering / 复杂列表渲染**

```jsx
const ComplexList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
    { id: 2, name: 'Phone', price: 599, category: 'Electronics', inStock: false },
    { id: 3, name: 'Book', price: 29, category: 'Education', inStock: true },
    { id: 4, name: 'Headphones', price: 199, category: 'Electronics', inStock: true }
  ]);
  
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  
  // Filter products / 过滤产品
  const getFilteredProducts = () => {
    let filtered = products;
    
    if (filter === 'inStock') {
      filtered = filtered.filter(product => product.inStock);
    } else if (filter === 'outOfStock') {
      filtered = filtered.filter(product => !product.inStock);
    } else if (filter !== 'all') {
      filtered = filtered.filter(product => product.category === filter);
    }
    
    return filtered;
  };
  
  // Sort products / 排序产品
  const getSortedProducts = (products) => {
    return [...products].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  };
  
  const displayProducts = getSortedProducts(getFilteredProducts());
  
  return (
    <div className="complex-list">
      <div className="controls">
        <div>
          <label>Filter: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Education">Education</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
        
        <div>
          <label>Sort by: </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      
      <div className="product-list">
        {displayProducts.length === 0 ? (
          <p>No products match your criteria</p>
        ) : (
          displayProducts.map(product => (
            <div 
              key={product.id} 
              className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}
            >
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Status: {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}</p>
            </div>
          ))
        )}
      </div>
      
      <div className="summary">
        <p>Showing {displayProducts.length} of {products.length} products</p>
      </div>
    </div>
  );
};
```

**Nested Lists / 嵌套列表**

```jsx
const NestedLists = () => {
  const categories = [
    {
      id: 1,
      name: 'Fruits',
      items: [
        { id: 11, name: 'Apple', color: 'red' },
        { id: 12, name: 'Banana', color: 'yellow' },
        { id: 13, name: 'Orange', color: 'orange' }
      ]
    },
    {
      id: 2,
      name: 'Vegetables',
      items: [
        { id: 21, name: 'Carrot', color: 'orange' },
        { id: 22, name: 'Broccoli', color: 'green' },
        { id: 23, name: 'Tomato', color: 'red' }
      ]
    }
  ];
  
  return (
    <div className="nested-lists">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id} className="item">
                <span style={{ color: item.color }}>●</span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
```

### 4.8 Forms and Controlled Components {#48-forms-and-controlled-components}

**Controlled vs Uncontrolled Components / 受控与非受控组件**

```jsx
// Controlled Component - React controls the input value / 受控组件 - React控制输入值
const ControlledForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}                              // Value controlled by state / 值由状态控制
        onChange={(e) => setName(e.target.value)} // Update state on change / 变化时更新状态
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Uncontrolled Component - DOM controls the input value / 非受控组件 - DOM控制输入值
const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', {
      name: nameRef.current.value,    // Get value directly from DOM / 直接从DOM获取值
      email: emailRef.current.value
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameRef}              // No value prop / 没有value属性
        type="text"
        defaultValue=""            // Use defaultValue instead / 使用defaultValue代替
        placeholder="Name"
      />
      <input
        ref={emailRef}
        type="email"
        defaultValue=""
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

**Comprehensive Form Example / 综合表单示例**

```jsx
const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    interests: [],
    newsletter: false,
    terms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Generic input handler / 通用输入处理器
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing / 用户开始输入时清除错误
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Handle multiple select (interests) / 处理多选（兴趣）
  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };
  
  // Validation function / 验证函数
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 18) {
      newErrors.age = 'Must be 18 or older';
    }
    
    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms';
    }
    
    return newErrors;
  };
  
  // Form submission / 表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call / 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('User registered:', formData);
      alert('Registration successful!');
      
      // Reset form / 重置表单
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
        interests: [],
        newsletter: false,
        terms: false
      });
      
    } catch (error) {
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>User Registration</h2>
      
      {/* Text Inputs / 文本输入 */}
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className={errors.firstName ? 'error' : ''}
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </div>
      
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className={errors.lastName ? 'error' : ''}
        />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>
      
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      
      {/* Password Inputs / 密码输入 */}
      <div className="form-group">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      
      <div className="form-group">
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
          className={errors.confirmPassword ? 'error' : ''}
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
      </div>
      
      {/* Number Input / 数字输入 */}
      <div className="form-group">
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Age"
          className={errors.age ? 'error' : ''}
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>
      
      {/* Select Dropdown / 选择下拉框 */}
      <div className="form-group">
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      {/* Multiple Checkboxes / 多个复选框 */}
      <div className="form-group">
        <label>Interests:</label>
        <div className="checkbox-group">
          {['Technology', 'Sports', 'Music', 'Travel', 'Reading'].map(interest => (
            <label key={interest} className="checkbox-label">
              <input
                type="checkbox"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleInterestChange}
              />
              {interest}
            </label>
          ))}
        </div>
      </div>
      
      {/* Single Checkbox / 单个复选框 */}
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleInputChange}
          />
          Subscribe to newsletter
        </label>
      </div>
      
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleInputChange}
            className={errors.terms ? 'error' : ''}
          />
          I agree to the terms and conditions
        </label>
        {errors.terms && <span className="error-message">{errors.terms}</span>}
      </div>
      
      {/* Submit Button / 提交按钮 */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="submit-button"
      >
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
      
      {/* Form Data Preview (for development) / 表单数据预览（用于开发） */}
      {process.env.NODE_ENV === 'development' && (
        <pre style={{ marginTop: '20px', background: '#f5f5f5', padding: '10px' }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      )}
    </form>
  );
};
```

---

## Chapter 5: React Hooks Deep Dive / 第5章：React Hooks深入 {#chapter-5}

React Hooks allow you to use state and other React features in functional components. They follow a specific set of rules and provide powerful ways to manage component behavior.

React Hooks允许您在函数组件中使用状态和其他React功能。它们遵循特定的规则集，并提供强大的方法来管理组件行为。

### 5.1 useEffect Hook {#51-useeffect-hook}

**What is useEffect? / 什么是useEffect？**

useEffect is a Hook that lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

useEffect是一个Hook，允许您在函数组件中执行副作用。它的作用与componentDidMount、componentDidUpdate和componentWillUnmount的组合相同。

**Basic useEffect Usage / 基本useEffect用法**

```jsx
import { useState, useEffect } from 'react';

const BasicEffect = () => {
  const [count, setCount] = useState(0);
  
  // Effect runs after every render / Effect在每次渲染后运行
  useEffect(() => {
    document.title = `Count: ${count}`;
  });
  
  // Effect with dependency array / 带依赖数组的Effect
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Only runs when count changes / 只在count改变时运行
  
  // Effect that runs only once (on mount) / 只运行一次的Effect（挂载时）
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty dependency array / 空依赖数组
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
```

**Examples from Our Projects / 项目中的示例**

```jsx
// From weather-dashboard: Weather API calls / 来自weather-dashboard：天气API调用
const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');
  
  // Effect to fetch weather when city changes / 当城市改变时获取天气的Effect
  useEffect(() => {
    const fetchWeather = async () => {
      if (!city.trim()) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const API_KEY = 'your-api-key-here';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
          throw new Error('Weather data not found');
        }
        
        const data = await response.json();
        setWeather({
          city: data.name,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed
        });
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchWeather();
  }, [city]); // Re-run when city changes / 当city改变时重新运行
  
  return (
    <div className="weather-dashboard">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      
      {loading && <div>Loading weather data...</div>}
      {error && <div>Error: {error}</div>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.city}</h2>
          <p>{weather.temperature}°C</p>
          <p>{weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} m/s</p>
        </div>
      )}
    </div>
  );
};

// From todo-app: Local storage persistence / 来自todo-app：本地存储持久化
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  
  // Load todos from localStorage on component mount / 组件挂载时从localStorage加载待办事项
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Failed to parse saved todos:', error);
      }
    }
  }, []); // Run once on mount / 挂载时运行一次
  
  // Save todos to localStorage whenever todos change / 每当todos改变时保存到localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Run whenever todos array changes / 每当todos数组改变时运行
  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };
  
  return (
    <div className="todo-app">
      {/* Todo app UI components */}
    </div>
  );
};
```

---

## Chapter 6: Development Tools and Workflow / 第6章：开发工具和工作流程 {#chapter-6}

Understanding the development tools and workflow is crucial for efficient React development. This chapter covers the essential tools you'll use daily.

理解开发工具和工作流程对于高效的React开发至关重要。本章涵盖您每天将使用的基本工具。

### 6.1 Vite Build Tool {#61-vite-build-tool}

**What is Vite? / 什么是Vite？**

Vite is a build tool that provides a faster and leaner development experience for modern web projects. It serves as the foundation for our React applications.

Vite是一个构建工具，为现代Web项目提供更快、更精简的开发体验。它作为我们React应用程序的基础。

**Key Features / 主要特性**

- **Fast Cold Start / 快速冷启动**: No bundling required in development
- **Hot Module Replacement (HMR) / 热模块替换**: Instant updates when you save files
- **Optimized Build / 优化构建**: Uses Rollup for production builds
- **TypeScript Support / TypeScript支持**: Built-in TypeScript support

**Vite Configuration / Vite配置**

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Development server configuration / 开发服务器配置
  server: {
    port: 3000,
    open: true, // Automatically open browser / 自动打开浏览器
    host: true  // Allow external connections / 允许外部连接
  },
  
  // Build configuration / 构建配置
  build: {
    outDir: 'dist',
    sourcemap: true, // Generate source maps / 生成源映射
    
    // Bundle analysis / 包分析
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    }
  },
  
  // Path aliases / 路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },
  
  // Environment variables / 环境变量
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  }
})
```

### 6.2 Package.json and Dependencies {#62-packagejson-and-dependencies}

**Understanding package.json / 理解package.json**

The package.json file is the heart of any Node.js project. It contains metadata about your project and manages dependencies.

package.json文件是任何Node.js项目的核心。它包含项目的元数据并管理依赖项。

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "type": "module",
  "description": "A React application built with Vite",
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "test": "jest",
    "test:watch": "jest --watch",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\""
  },
  
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^3.2.5",
    "vite": "^5.2.0"
  },
  
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

**Dependency Types / 依赖类型**

- **dependencies**: Required for production / 生产环境必需
- **devDependencies**: Only needed during development / 仅在开发期间需要
- **peerDependencies**: Expected to be provided by the consumer / 期望由使用者提供

**Common npm Commands / 常见npm命令**

```bash
# Install all dependencies / 安装所有依赖
npm install

# Install a package / 安装包
npm install lodash

# Install a dev dependency / 安装开发依赖
npm install --save-dev jest

# Update packages / 更新包
npm update

# Check for outdated packages / 检查过时的包
npm outdated

# Remove a package / 移除包
npm uninstall lodash

# Run scripts / 运行脚本
npm run dev
npm run build
npm run test
```

### 6.3 ESLint and Code Quality {#63-eslint-and-code-quality}

**What is ESLint? / 什么是ESLint？**

ESLint is a static code analysis tool for identifying problematic patterns in JavaScript code. It helps maintain code quality and consistency.

ESLint是一个静态代码分析工具，用于识别JavaScript代码中的问题模式。它有助于维护代码质量和一致性。

**ESLint Configuration / ESLint配置**

```javascript
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      
      // Custom rules / 自定义规则
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Code style rules / 代码样式规则
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-console': 'warn',
      'no-unused-vars': 'error'
    },
  },
]
```

**Common ESLint Rules / 常见ESLint规则**

```javascript
// Good practices / 良好实践
"no-console": "warn",                    // Warn about console.log / 警告console.log
"no-unused-vars": "error",              // Error on unused variables / 未使用变量报错
"no-undef": "error",                    // Error on undefined variables / 未定义变量报错

// React specific / React特定
"react/prop-types": "warn",             // Warn about missing prop types / 警告缺少prop类型
"react/jsx-uses-react": "error",        // Prevent React being marked as unused / 防止React被标记为未使用
"react/jsx-uses-vars": "error",         // Prevent variables used in JSX being marked as unused / 防止JSX中使用的变量被标记为未使用
"react-hooks/rules-of-hooks": "error",  // Enforce Rules of Hooks / 强制执行Hooks规则
"react-hooks/exhaustive-deps": "warn"   // Warn about missing dependencies / 警告缺少依赖项
```

### 6.4 Debugging Techniques {#64-debugging-techniques}

**Browser Developer Tools / 浏览器开发者工具**

```jsx
const DebuggingExample = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  
  // Console logging / 控制台日志
  console.log('Component rendered, count:', count);
  console.table(users); // Better for arrays/objects / 对数组/对象更好
  console.group('User Operations'); // Group related logs / 分组相关日志
  console.log('Fetching users...');
  console.groupEnd();
  
  // Conditional logging / 条件日志
  if (count > 5) {
    console.warn('Count is getting high!');
  }
  
  // Error logging / 错误日志
  const handleError = (error) => {
    console.error('An error occurred:', error);
    console.trace(); // Show stack trace / 显示堆栈跟踪
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
```

**React Developer Tools / React开发者工具**

The React Developer Tools browser extension provides powerful debugging capabilities:

React开发者工具浏览器扩展提供强大的调试功能：

1. **Components Tab / 组件标签**: Inspect component hierarchy and props
2. **Profiler Tab / 分析器标签**: Measure component performance
3. **Props Editing / Props编辑**: Modify props in real-time
4. **State Inspection / 状态检查**: View and modify component state

**Debugging Hooks / 调试Hooks**

```jsx
import { useEffect, useDebugValue } from 'react';

// Custom hook with debug information / 带调试信息的自定义hook
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  // Show debug information in React DevTools / 在React DevTools中显示调试信息
  useDebugValue(count > 5 ? 'High count' : 'Normal count');
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  
  return [count, { increment, decrement }];
};

// Error boundary for catching React errors / 用于捕获React错误的错误边界
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

**Performance Debugging / 性能调试**

```jsx
import { Profiler } from 'react';

const App = () => {
  // Profiler callback to measure render performance / Profiler回调来测量渲染性能
  const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('Profiler:', {
      id,           // Component that triggered the render / 触发渲染的组件
      phase,        // "mount" or "update" / "挂载"或"更新"
      actualDuration, // Time spent rendering / 渲染花费的时间
      baseDuration,   // Estimated time without memoization / 不使用记忆化的估计时间
      startTime,      // When render started / 渲染开始时间
      commitTime      // When changes were committed / 更改提交时间
    });
  };
  
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Profiler>
  );
};
```

---

## Chapter 7: Next.js Fundamentals / 第7章：Next.js基础 {#chapter-7}

Next.js is a React framework that provides additional features like server-side rendering, static site generation, and API routes.

Next.js是一个React框架，提供服务器端渲染、静态站点生成和API路由等附加功能。

### 7.1 Introduction to Next.js {#71-introduction-to-nextjs}

**Why Next.js? / 为什么选择Next.js？**

Next.js solves many common problems in React development:

Next.js解决了React开发中的许多常见问题：

- **Zero Configuration / 零配置**: Works out of the box
- **File-based Routing / 基于文件的路由**: Automatic routing based on file structure
- **Server-side Rendering / 服务器端渲染**: Better SEO and performance
- **Static Site Generation / 静态站点生成**: Pre-built pages for fastest loading
- **API Routes / API路由**: Backend functionality built-in

**Project Structure / 项目结构**

```
my-nextjs-app/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── globals.css        # Global styles / 全局样式
│   │   ├── layout.tsx         # Root layout / 根布局
│   │   ├── page.tsx           # Home page / 首页
│   │   ├── about/
│   │   │   └── page.tsx       # About page / 关于页面
│   │   └── api/
│   │       └── users/
│   │           └── route.ts   # API endpoint / API端点
│   └── components/            # Reusable components / 可重用组件
│       ├── Header.tsx
│       └── Footer.tsx
├── public/                    # Static assets / 静态资源
│   ├── images/
│   └── favicon.ico
├── next.config.js            # Next.js configuration / Next.js配置
└── package.json
```

### 7.2 App Router and File-based Routing {#72-app-router-and-file-based-routing}

**App Router Basics / App Router基础**

The App Router uses the `app` directory and follows these conventions:

App Router使用`app`目录并遵循以下约定：

```tsx
// src/app/layout.tsx - Root Layout / 根布局
import './globals.css'

export const metadata = {
  title: 'My Next.js App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>My App Navigation</nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 My App</footer>
      </body>
    </html>
  )
}

// src/app/page.tsx - Home Page / 首页
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
    </div>
  )
}

// src/app/about/page.tsx - About Page / 关于页面
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  )
}
```

**Dynamic Routes / 动态路由**

```tsx
// src/app/blog/[slug]/page.tsx - Dynamic Blog Post / 动态博客文章
interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Content for {slug}</p>
    </div>
  )
}

// src/app/shop/[...segments]/page.tsx - Catch-all Routes / 捕获所有路由
interface ShopProps {
  params: {
    segments: string[]
  }
}

export default function ShopPage({ params }: ShopProps) {
  const { segments } = params
  
  return (
    <div>
      <h1>Shop</h1>
      <p>Segments: {segments.join(' / ')}</p>
    </div>
  )
}
```

### 7.3 Server and Client Components {#73-server-and-client-components}

**Server Components (Default) / 服务器组件（默认）**

Server Components run on the server and can access server resources directly:

服务器组件在服务器上运行，可以直接访问服务器资源：

```tsx
// This is a Server Component by default / 默认情况下这是服务器组件
async function ServerComponent() {
  // This runs on the server / 这在服务器上运行
  const data = await fetch('https://api.example.com/data')
  const result = await data.json()
  
  return (
    <div>
      <h1>Server Component</h1>
      <p>Data fetched on server: {result.message}</p>
    </div>
  )
}
```

**Client Components / 客户端组件**

Client Components run in the browser and can use React hooks and browser APIs:

客户端组件在浏览器中运行，可以使用React hooks和浏览器API：

```tsx
'use client' // This directive makes it a Client Component / 这个指令使其成为客户端组件

import { useState, useEffect } from 'react'

export default function ClientComponent() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // This runs in the browser / 这在浏览器中运行
    document.title = `Count: ${count}`
  }, [count])
  
  return (
    <div>
      <h1>Client Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

**Mixing Server and Client Components / 混合服务器和客户端组件**

```tsx
// Server Component / 服务器组件
import ClientComponent from './ClientComponent'

async function ServerParent() {
  const serverData = await fetch('https://api.example.com/data')
  const data = await serverData.json()
  
  return (
    <div>
      <h1>Server Parent</h1>
      <p>Server data: {data.message}</p>
      
      {/* Client Component nested inside Server Component */}
      {/* 客户端组件嵌套在服务器组件内 */}
      <ClientComponent initialData={data} />
    </div>
  )
}
```

### 7.4 Image and Font Optimization {#74-image-and-font-optimization}

**Next.js Image Component / Next.js图像组件**

```tsx
import Image from 'next/image'

export default function ImageExample() {
  return (
    <div>
      {/* Optimized image with automatic sizing / 自动调整大小的优化图像 */}
      <Image
        src="/hero-image.jpg"
        alt="Hero image"
        width={800}
        height={400}
        priority // Load this image first / 首先加载此图像
      />
      
      {/* Responsive image / 响应式图像 */}
      <Image
        src="/profile.jpg"
        alt="Profile picture"
        fill
        className="object-cover"
      />
      
      {/* External image / 外部图像 */}
      <Image
        src="https://example.com/image.jpg"
        alt="External image"
        width={300}
        height={200}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    </div>
  )
}
```

**Font Optimization / 字体优化**

```tsx
// src/app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google'

// Configure Google Fonts / 配置Google字体
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className={robotoMono.className}>
          This text uses Roboto Mono
        </div>
        {children}
      </body>
    </html>
  )
}
```

### 7.5 Metadata and SEO {#75-metadata-and-seo}

**Static Metadata / 静态元数据**

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A comprehensive Next.js application',
  keywords: ['Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'My Next.js App',
    description: 'A comprehensive Next.js application',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Next.js App',
    description: 'A comprehensive Next.js application',
    images: ['/twitter-image.jpg'],
  },
}
```

**Dynamic Metadata / 动态元数据**

```tsx
// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next'

interface BlogPostProps {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: BlogPostProps
): Promise<Metadata> {
  // Fetch data / 获取数据
  const post = await fetch(`https://api.example.com/posts/${params.slug}`)
    .then(res => res.json())
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <article>
      <h1>Blog Post: {params.slug}</h1>
      {/* Blog post content */}
    </article>
  )
}
```

---

## Chapter 8: Project Analysis and Code Deep Dive / 第8章：项目分析和代码深入 {#chapter-8}

This chapter provides detailed analysis of the four beginner projects, explaining every line of code to help you understand the practical application of all concepts learned in previous chapters.

本章提供四个初学者项目的详细分析，解释每一行代码，帮助您理解前面章节中学到的所有概念的实际应用。

### 8.1 Todo App Analysis / 待办事项应用分析 {#81-todo-app-analysis}

The Todo App demonstrates fundamental React concepts including state management, event handling, conditional rendering, and local storage persistence.

待办事项应用程序演示了基本的React概念，包括状态管理、事件处理、条件渲染和本地存储持久化。

**Project Structure Analysis / 项目结构分析**

```
todo-app/
├── src/
│   ├── main.jsx           # Entry point / 入口点
│   ├── App.jsx            # Main application component / 主应用组件
│   ├── App.css            # Main styles / 主样式
│   └── components/        # Reusable components / 可重用组件
│       ├── AddTodo.jsx    # Add todo form / 添加待办事项表单
│       ├── TodoItem.jsx   # Individual todo item / 单个待办事项
│       ├── TodoList.jsx   # List of todos / 待办事项列表
│       └── FilterButtons.jsx # Filter controls / 过滤控件
├── index.html            # HTML template / HTML模板
├── package.json          # Project configuration / 项目配置
└── vite.config.js       # Vite configuration / Vite配置
```

**main.jsx - Application Entry Point / 应用程序入口点**

```jsx
// main.jsx
import React from 'react'                    // Import React library / 导入React库
import ReactDOM from 'react-dom/client'      // Import ReactDOM for rendering / 导入ReactDOM用于渲染
import App from './App.jsx'                  // Import main App component / 导入主App组件
import './index.css'                         // Import global CSS styles / 导入全局CSS样式

// Create root element and render the App component / 创建根元素并渲染App组件
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>                         {/* Enables additional checks in development / 在开发中启用额外检查 */}
    <App />                                  {/* Main application component / 主应用组件 */}
  </React.StrictMode>,
)
```

**Line-by-line Explanation / 逐行解释：**
- **Line 1**: Imports React library needed for JSX and component functionality
- **Line 2**: Imports ReactDOM's `createRoot` method for React 18+ rendering
- **Line 3**: Imports the main App component using ES6 module syntax
- **Line 4**: Imports global CSS styles that apply to the entire application
- **Line 7**: Creates a React root on the DOM element with id="root"
- **Line 8**: StrictMode wrapper helps identify potential problems during development
- **Line 9**: Renders the App component as the root of the component tree

**App.jsx - Main Application Logic / 主应用逻辑**

```jsx
// App.jsx
import { useState, useEffect } from 'react'  // Import React hooks / 导入React hooks
import AddTodo from './components/AddTodo'    // Import AddTodo component / 导入添加待办事项组件
import TodoList from './components/TodoList' // Import TodoList component / 导入待办事项列表组件
import FilterButtons from './components/FilterButtons' // Import filter component / 导入过滤组件
import './App.css'                           // Import component-specific styles / 导入组件特定样式

function App() {
  // State for storing all todos / 存储所有待办事项的状态
  const [todos, setTodos] = useState([])     // Initialize empty array / 初始化空数组
  
  // State for current filter ('all', 'active', 'completed') / 当前过滤器的状态
  const [filter, setFilter] = useState('all') // Default to show all todos / 默认显示所有待办事项

  // Load todos from localStorage when component mounts / 组件挂载时从localStorage加载待办事项
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos') // Get saved todos string / 获取保存的待办事项字符串
    if (savedTodos) {                               // Check if data exists / 检查数据是否存在
      try {
        setTodos(JSON.parse(savedTodos))            // Parse and set todos / 解析并设置待办事项
      } catch (error) {
        console.error('Failed to parse saved todos:', error) // Handle parsing errors / 处理解析错误
      }
    }
  }, []) // Empty dependency array means run once on mount / 空依赖数组意味着仅在挂载时运行一次

  // Save todos to localStorage whenever todos change / 每当待办事项改变时保存到localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) // Convert to string and save / 转换为字符串并保存
  }, [todos]) // Run whenever todos array changes / 每当todos数组改变时运行

  // Function to add a new todo / 添加新待办事项的函数
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),                        // Simple ID using timestamp / 使用时间戳的简单ID
      text: text.trim(),                     // Remove whitespace / 移除空白字符
      completed: false,                      // New todos start incomplete / 新待办事项开始时未完成
      createdAt: new Date().toISOString()    // Store creation time / 存储创建时间
    }
    setTodos([...todos, newTodo])            // Add to existing todos using spread operator / 使用展开运算符添加到现有待办事项
  }

  // Function to toggle todo completion status / 切换待办事项完成状态的函数
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>               // Map over all todos / 遍历所有待办事项
      todo.id === id                         // Find the todo with matching ID / 查找匹配ID的待办事项
        ? { ...todo, completed: !todo.completed } // Toggle completed status / 切换完成状态
        : todo                               // Keep other todos unchanged / 保持其他待办事项不变
    ))
  }

  // Function to delete a todo / 删除待办事项的函数
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)) // Filter out the todo with matching ID / 过滤掉匹配ID的待办事项
  }

  // Function to get filtered todos based on current filter / 根据当前过滤器获取过滤待办事项的函数
  const getFilteredTodos = () => {
    switch (filter) {                        // Check current filter value / 检查当前过滤器值
      case 'active':
        return todos.filter(todo => !todo.completed) // Return only incomplete todos / 只返回未完成的待办事项
      case 'completed':
        return todos.filter(todo => todo.completed)  // Return only completed todos / 只返回已完成的待办事项
      default:
        return todos                         // Return all todos / 返回所有待办事项
    }
  }

  return (
    <div className="app">                    {/* Main application container / 主应用容器 */}
      <header className="app-header">        {/* Application header / 应用头部 */}
        <h1>Todo App</h1>                    {/* Application title / 应用标题 */}
      </header>
      
      <main className="app-main">           {/* Main content area / 主内容区域 */}
        <AddTodo onAddTodo={addTodo} />      {/* Pass addTodo function as prop / 将addTodo函数作为prop传递 */}
        
        <FilterButtons 
          currentFilter={filter}             // Current filter state / 当前过滤器状态
          onFilterChange={setFilter}         // Function to change filter / 更改过滤器的函数
          todoCount={todos.length}           // Total number of todos / 待办事项总数
          activeCount={todos.filter(t => !t.completed).length} // Number of active todos / 活动待办事项数
          completedCount={todos.filter(t => t.completed).length} // Number of completed todos / 已完成待办事项数
        />
        
        <TodoList 
          todos={getFilteredTodos()}         // Pass filtered todos / 传递过滤后的待办事项
          onToggleTodo={toggleTodo}          // Pass toggle function / 传递切换函数
          onDeleteTodo={deleteTodo}          // Pass delete function / 传递删除函数
        />
      </main>
    </div>
  )
}

export default App                          // Export App component as default / 将App组件作为默认导出
```

**AddTodo.jsx - Add Todo Form Component / 添加待办事项表单组件**

```jsx
// AddTodo.jsx
import { useState } from 'react'             // Import useState hook / 导入useState hook

const AddTodo = ({ onAddTodo }) => {         // Destructure onAddTodo prop / 解构onAddTodo属性
  const [inputValue, setInputValue] = useState('') // State for input field value / 输入字段值的状态

  // Handle form submission / 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault()                       // Prevent default form submission / 阻止默认表单提交
    
    if (inputValue.trim()) {                 // Check if input has content (after trimming whitespace) / 检查输入是否有内容（修剪空白后）
      onAddTodo(inputValue)                  // Call parent's addTodo function / 调用父组件的addTodo函数
      setInputValue('')                      // Clear input field / 清空输入字段
    }
  }

  // Handle input value changes / 处理输入值变化
  const handleInputChange = (e) => {
    setInputValue(e.target.value)            // Update state with input value / 用输入值更新状态
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo-form"> {/* Form with submit handler / 带提交处理器的表单 */}
      <div className="input-group">          {/* Input container / 输入容器 */}
        <input
          type="text"                        // Text input type / 文本输入类型
          value={inputValue}                 // Controlled input value / 受控输入值
          onChange={handleInputChange}       // Handle value changes / 处理值变化
          placeholder="Add a new todo..."    // Placeholder text / 占位符文本
          className="todo-input"             // CSS class for styling / 用于样式的CSS类
          autoFocus                          // Focus on component mount / 组件挂载时聚焦
        />
        <button 
          type="submit"                      // Submit button type / 提交按钮类型
          className="add-button"             // CSS class for styling / 用于样式的CSS类
          disabled={!inputValue.trim()}      // Disable if input is empty / 如果输入为空则禁用
        >
          Add Todo                           {/* Button text / 按钮文本 */}
        </button>
      </div>
    </form>
  )
}

export default AddTodo                       // Export component / 导出组件
```

**TodoItem.jsx - Individual Todo Item Component / 单个待办事项组件**

```jsx
// TodoItem.jsx
const TodoItem = ({ todo, onToggle, onDelete }) => { // Destructure props / 解构属性
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}> {/* Dynamic CSS class / 动态CSS类 */}
      <div className="todo-content">         {/* Todo content container / 待办事项内容容器 */}
        <input
          type="checkbox"                    // Checkbox input / 复选框输入
          checked={todo.completed}           // Controlled checkbox state / 受控复选框状态
          onChange={() => onToggle(todo.id)} // Toggle completion on change / 改变时切换完成状态
          className="todo-checkbox"          // CSS class for styling / 用于样式的CSS类
        />
        <span className="todo-text">        {/* Todo text display / 待办事项文本显示 */}
          {todo.text}                        // Display todo text / 显示待办事项文本
        </span>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}   // Delete todo on click / 点击时删除待办事项
        className="delete-button"           // CSS class for styling / 用于样式的CSS类
        title="Delete todo"                 // Tooltip text / 工具提示文本
      >
        ×                                   {/* Delete symbol / 删除符号 */}
      </button>
    </div>
  )
}

export default TodoItem                      // Export component / 导出组件
```

**TodoList.jsx - Todo List Container / 待办事项列表容器**

```jsx
// TodoList.jsx
import TodoItem from './TodoItem'            // Import TodoItem component / 导入TodoItem组件

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => { // Destructure props / 解构属性
  // Handle empty state / 处理空状态
  if (todos.length === 0) {
    return (
      <div className="empty-state">          {/* Empty state container / 空状态容器 */}
        <p>No todos yet. Add one above!</p>  {/* Empty state message / 空状态消息 */}
      </div>
    )
  }

  return (
    <div className="todo-list">              {/* Todo list container / 待办事项列表容器 */}
      {todos.map(todo => (                   // Map over todos array / 遍历待办事项数组
        <TodoItem
          key={todo.id}                      // Unique key for React reconciliation / React协调的唯一键
          todo={todo}                        // Pass todo object / 传递待办事项对象
          onToggle={onToggleTodo}            // Pass toggle function / 传递切换函数
          onDelete={onDeleteTodo}            // Pass delete function / 传递删除函数
        />
      ))}
    </div>
  )
}

export default TodoList                      // Export component / 导出组件
```

**FilterButtons.jsx - Filter Controls / 过滤控件**

```jsx
// FilterButtons.jsx
const FilterButtons = ({ 
  currentFilter, 
  onFilterChange, 
  todoCount, 
  activeCount, 
  completedCount 
}) => {                                      // Destructure all props / 解构所有属性
  
  return (
    <div className="filter-buttons">         {/* Filter buttons container / 过滤按钮容器 */}
      <button
        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`} // Dynamic active class / 动态活动类
        onClick={() => onFilterChange('all')} // Set filter to 'all' / 将过滤器设置为'all'
      >
        All ({todoCount})                    {/* Show total count / 显示总数 */}
      </button>
      
      <button
        className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
        onClick={() => onFilterChange('active')}
      >
        Active ({activeCount})               {/* Show active count / 显示活动数 */}
      </button>
      
      <button
        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        Completed ({completedCount})         {/* Show completed count / 显示已完成数 */}
      </button>
    </div>
  )
}

export default FilterButtons                 // Export component / 导出组件
```

### 8.2 Weather Dashboard Analysis / 天气仪表板分析 {#82-weather-dashboard-analysis}

The Weather Dashboard demonstrates API integration, async operations, error handling, and conditional rendering based on loading states.

天气仪表板演示了API集成、异步操作、错误处理和基于加载状态的条件渲染。

**App.jsx - Main Weather Application / 主天气应用程序**

```jsx
// App.jsx
import { useState, useEffect } from 'react'  // Import React hooks / 导入React hooks
import SearchBar from './components/SearchBar' // Import search component / 导入搜索组件
import WeatherCard from './components/WeatherCard' // Import weather display / 导入天气显示
import LoadingSpinner from './components/LoadingSpinner' // Import loading indicator / 导入加载指示器
import ErrorMessage from './components/ErrorMessage' // Import error display / 导入错误显示
import './App.css'                           // Import styles / 导入样式

// Weather service configuration / 天气服务配置
const API_KEY = 'your-openweathermap-api-key' // API key (should be in environment variables) / API密钥（应在环境变量中）
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5' // API base URL / API基础URL

function App() {
  // State for weather data / 天气数据状态
  const [weather, setWeather] = useState(null) // Initialize as null / 初始化为null
  
  // State for loading indicator / 加载指示器状态
  const [loading, setLoading] = useState(false) // Initialize as false / 初始化为false
  
  // State for error messages / 错误消息状态
  const [error, setError] = useState(null)     // Initialize as null / 初始化为null
  
  // State for search input / 搜索输入状态
  const [city, setCity] = useState('')         // Initialize as empty string / 初始化为空字符串

  // Function to fetch weather data / 获取天气数据的函数
  const fetchWeather = async (cityName) => {
    // Validate input / 验证输入
    if (!cityName.trim()) {                    // Check if city name is empty / 检查城市名称是否为空
      setError('Please enter a city name')     // Set error message / 设置错误消息
      return                                   // Exit function early / 提前退出函数
    }

    setLoading(true)                           // Start loading / 开始加载
    setError(null)                             // Clear previous errors / 清除之前的错误
    setWeather(null)                           // Clear previous weather data / 清除之前的天气数据

    try {
      // Construct API URL / 构建API URL
      const url = `${API_BASE_URL}/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
      
      // Make API request / 发起API请求
      const response = await fetch(url)        // Fetch data from API / 从API获取数据
      
      // Check if response is successful / 检查响应是否成功
      if (!response.ok) {                      // HTTP status is not 2xx / HTTP状态不是2xx
        if (response.status === 404) {         // City not found / 城市未找到
          throw new Error('City not found. Please check the spelling and try again.')
        } else if (response.status === 401) {  // Invalid API key / 无效API密钥
          throw new Error('Invalid API key. Please check your configuration.')
        } else {                               // Other HTTP errors / 其他HTTP错误
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      }

      // Parse JSON response / 解析JSON响应
      const data = await response.json()      // Convert response to JSON / 将响应转换为JSON

      // Transform API data to our format / 将API数据转换为我们的格式
      const weatherData = {
        city: data.name,                       // City name from API / 来自API的城市名称
        country: data.sys.country,             // Country code / 国家代码
        temperature: Math.round(data.main.temp), // Round temperature / 四舍五入温度
        description: data.weather[0].description, // Weather description / 天气描述
        icon: data.weather[0].icon,            // Weather icon code / 天气图标代码
        humidity: data.main.humidity,          // Humidity percentage / 湿度百分比
        windSpeed: data.wind.speed,            // Wind speed / 风速
        pressure: data.main.pressure,          // Atmospheric pressure / 大气压力
        feelsLike: Math.round(data.main.feels_like), // "Feels like" temperature / "体感"温度
        timestamp: new Date().toISOString()    // Current timestamp / 当前时间戳
      }

      setWeather(weatherData)                  // Set weather data in state / 在状态中设置天气数据
      
    } catch (err) {                            // Handle any errors / 处理任何错误
      console.error('Weather fetch error:', err) // Log error for debugging / 记录错误以进行调试
      setError(err.message)                    // Set error message in state / 在状态中设置错误消息
    } finally {                                // Always execute / 总是执行
      setLoading(false)                        // Stop loading indicator / 停止加载指示器
    }
  }

  // Handle search form submission / 处理搜索表单提交
  const handleSearch = (searchCity) => {
    setCity(searchCity)                        // Update city state / 更新城市状态
    fetchWeather(searchCity)                   // Fetch weather for city / 获取城市天气
  }

  // Load default city weather on component mount / 组件挂载时加载默认城市天气
  useEffect(() => {
    fetchWeather('London')                     // Default to London / 默认为伦敦
  }, [])                                       // Empty dependency array / 空依赖数组

  return (
    <div className="app">                      {/* Main application container / 主应用容器 */}
      <header className="app-header">          {/* Application header / 应用头部 */}
        <h1>Weather Dashboard</h1>             {/* Application title / 应用标题 */}
        <SearchBar 
          onSearch={handleSearch}              // Pass search handler / 传递搜索处理器
          isLoading={loading}                  // Pass loading state / 传递加载状态
        />
      </header>

      <main className="app-main">              {/* Main content area / 主内容区域 */}
        {/* Conditional rendering based on state / 基于状态的条件渲染 */}
        {loading && <LoadingSpinner />}        {/* Show loading spinner / 显示加载旋转器 */}
        
        {error && !loading && (                // Show error if exists and not loading / 如果存在错误且未加载则显示错误
          <ErrorMessage 
            message={error}                    // Pass error message / 传递错误消息
            onRetry={() => fetchWeather(city)} // Pass retry function / 传递重试函数
          />
        )}
        
        {weather && !loading && !error && (   // Show weather if data exists, not loading, and no error / 如果数据存在、未加载且无错误则显示天气
          <WeatherCard weather={weather} />   // Display weather data / 显示天气数据
        )}
        
        {!weather && !loading && !error && (  // Show default message when no data / 无数据时显示默认消息
          <div className="no-data">
            <p>Enter a city name to get weather information</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App                            // Export App component / 导出App组件
```

**SearchBar.jsx - Search Input Component / 搜索输入组件**

```jsx
// SearchBar.jsx
import { useState } from 'react'              // Import useState hook / 导入useState hook

const SearchBar = ({ onSearch, isLoading }) => { // Destructure props / 解构属性
  const [inputValue, setInputValue] = useState('') // Local state for input / 输入的本地状态

  // Handle form submission / 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault()                         // Prevent default form submission / 阻止默认表单提交
    
    const searchTerm = inputValue.trim()       // Remove whitespace / 移除空白字符
    if (searchTerm) {                          // Check if input has content / 检查输入是否有内容
      onSearch(searchTerm)                     // Call parent's search function / 调用父组件的搜索函数
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form"> {/* Search form / 搜索表单 */}
      <div className="search-input-group">     {/* Input group container / 输入组容器 */}
        <input
          type="text"                          // Text input type / 文本输入类型
          value={inputValue}                   // Controlled input value / 受控输入值
          onChange={(e) => setInputValue(e.target.value)} // Update state on change / 改变时更新状态
          placeholder="Enter city name..."     // Placeholder text / 占位符文本
          className="search-input"             // CSS class for styling / 用于样式的CSS类
          disabled={isLoading}                 // Disable during loading / 加载期间禁用
        />
        <button 
          type="submit"                        // Submit button type / 提交按钮类型
          className="search-button"            // CSS class for styling / 用于样式的CSS类
          disabled={isLoading || !inputValue.trim()} // Disable if loading or empty input / 如果正在加载或输入为空则禁用
        >
          {isLoading ? 'Searching...' : 'Search'} {/* Dynamic button text / 动态按钮文本 */}
        </button>
      </div>
    </form>
  )
}

export default SearchBar                      // Export component / 导出组件
```

**WeatherCard.jsx - Weather Display Component / 天气显示组件**

```jsx
// WeatherCard.jsx
const WeatherCard = ({ weather }) => {        // Destructure weather prop / 解构天气属性
  // Function to get weather icon URL / 获取天气图标URL的函数
  const getIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png` // Construct icon URL / 构建图标URL
  }

  // Function to format timestamp / 格式化时间戳的函数
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleString() // Convert to local time string / 转换为本地时间字符串
  }

  return (
    <div className="weather-card">             {/* Weather card container / 天气卡片容器 */}
      <div className="weather-header">         {/* Weather header section / 天气头部部分 */}
        <h2 className="city-name">             {/* City name heading / 城市名称标题 */}
          {weather.city}, {weather.country}   {/* Display city and country / 显示城市和国家 */}
        </h2>
        <p className="last-updated">           {/* Last updated info / 最后更新信息 */}
          Last updated: {formatTime(weather.timestamp)} {/* Show formatted timestamp / 显示格式化时间戳 */}
        </p>
      </div>

      <div className="weather-main">           {/* Main weather display / 主天气显示 */}
        <div className="temperature-section">  {/* Temperature section / 温度部分 */}
          <img 
            src={getIconUrl(weather.icon)}     // Weather icon source / 天气图标源
            alt={weather.description}          // Alt text for accessibility / 无障碍的替代文本
            className="weather-icon"           // CSS class for styling / 用于样式的CSS类
          />
          <div className="temperature-info">   {/* Temperature information / 温度信息 */}
            <span className="temperature">     {/* Main temperature / 主要温度 */}
              {weather.temperature}°C          // Display temperature with unit / 显示带单位的温度
            </span>
            <span className="feels-like">      {/* Feels like temperature / 体感温度 */}
              Feels like {weather.feelsLike}°C // Display feels like temperature / 显示体感温度
            </span>
          </div>
        </div>

        <div className="weather-description">  {/* Weather description / 天气描述 */}
          <p className="description-text">     {/* Description text / 描述文本 */}
            {weather.description.charAt(0).toUpperCase() + weather.description.slice(1)} 
            {/* Capitalize first letter of description / 将描述的首字母大写 */}
          </p>
        </div>
      </div>

      <div className="weather-details">        {/* Weather details section / 天气详情部分 */}
        <div className="detail-item">          {/* Individual detail item / 单个详情项目 */}
          <span className="detail-label">Humidity</span> {/* Detail label / 详情标签 */}
          <span className="detail-value">{weather.humidity}%</span> {/* Detail value / 详情值 */}
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{weather.windSpeed} m/s</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{weather.pressure} hPa</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard                    // Export component / 导出组件
```

### 8.3 Calculator App Analysis / 计算器应用分析 {#83-calculator-app-analysis}

The Calculator App demonstrates complex state management, mathematical operations, and advanced React patterns.

计算器应用程序演示了复杂的状态管理、数学运算和高级React模式。

**App.jsx - Main Calculator Application / 主计算器应用程序**

```jsx
// App.jsx
import { useState } from 'react'              // Import useState hook / 导入useState hook
import Display from './components/Display'    // Import display component / 导入显示组件
import ButtonGrid from './components/ButtonGrid' // Import button grid / 导入按钮网格
import { calculate } from './utils/calculations' // Import calculation utilities / 导入计算工具
import { buttonData } from './utils/constants' // Import button configuration / 导入按钮配置
import './App.css'                            // Import styles / 导入样式

function App() {
  // Calculator state management / 计算器状态管理
  const [display, setDisplay] = useState('0') // Current display value / 当前显示值
  const [previousValue, setPreviousValue] = useState(null) // Previous calculation value / 上一个计算值
  const [operation, setOperation] = useState(null) // Current operation / 当前操作
  const [waitingForNewValue, setWaitingForNewValue] = useState(false) // Flag for new input / 新输入的标志

  // Handle number input / 处理数字输入
  const inputNumber = (num) => {
    if (waitingForNewValue) {                 // If waiting for new value / 如果等待新值
      setDisplay(String(num))                 // Replace display with new number / 用新数字替换显示
      setWaitingForNewValue(false)            // No longer waiting / 不再等待
    } else {                                  // If continuing current number / 如果继续当前数字
      setDisplay(display === '0' ? String(num) : display + num) // Append or replace / 追加或替换
    }
  }

  // Handle decimal point input / 处理小数点输入
  const inputDecimal = () => {
    if (waitingForNewValue) {                 // If waiting for new value / 如果等待新值
      setDisplay('0.')                        // Start with 0. / 以0.开始
      setWaitingForNewValue(false)            // No longer waiting / 不再等待
    } else if (display.indexOf('.') === -1) { // If no decimal point exists / 如果不存在小数点
      setDisplay(display + '.')               // Add decimal point / 添加小数点
    }
  }

  // Handle operation input (+, -, *, /) / 处理操作输入
  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)    // Convert display to number / 将显示转换为数字

    if (previousValue === null) {             // If no previous value / 如果没有上一个值
      setPreviousValue(inputValue)            // Set current as previous / 将当前设置为上一个
    } else if (operation) {                   // If there's a pending operation / 如果有待处理的操作
      const currentValue = previousValue || 0 // Get previous value or 0 / 获取上一个值或0
      const newValue = calculate(currentValue, inputValue, operation) // Perform calculation / 执行计算
      
      setDisplay(String(newValue))            // Update display / 更新显示
      setPreviousValue(newValue)              // Set result as previous / 将结果设置为上一个
    }

    setWaitingForNewValue(true)               // Wait for new input / 等待新输入
    setOperation(nextOperation)               // Set the operation / 设置操作
  }

  // Handle equals operation / 处理等号操作
  const calculate = () => {
    const inputValue = parseFloat(display)    // Convert display to number / 将显示转换为数字
    
    if (previousValue !== null && operation) { // If we have values and operation / 如果我们有值和操作
      const newValue = calculate(previousValue, inputValue, operation) // Perform calculation / 执行计算
      setDisplay(String(newValue))            // Show result / 显示结果
      setPreviousValue(null)                  // Clear previous value / 清除上一个值
      setOperation(null)                      // Clear operation / 清除操作
      setWaitingForNewValue(true)             // Wait for new input / 等待新输入
    }
  }

  // Handle clear operation / 处理清除操作
  const clear = () => {
    setDisplay('0')                           // Reset display / 重置显示
    setPreviousValue(null)                    // Clear previous value / 清除上一个值
    setOperation(null)                        // Clear operation / 清除操作
    setWaitingForNewValue(false)              // Not waiting for input / 不等待输入
  }

  // Handle button clicks / 处理按钮点击
  const handleButtonClick = (value) => {
    if (typeof value === 'number') {          // If button is a number / 如果按钮是数字
      inputNumber(value)                      // Handle number input / 处理数字输入
    } else {                                  // If button is an operation / 如果按钮是操作
      switch (value) {                        // Check operation type / 检查操作类型
        case '+':
        case '-':
        case '*':
        case '/':
          inputOperation(value)               // Handle mathematical operation / 处理数学操作
          break
        case '=':
          calculate()                         // Handle equals / 处理等号
          break
        case '.':
          inputDecimal()                      // Handle decimal point / 处理小数点
          break
        case 'C':
          clear()                             // Handle clear / 处理清除
          break
        case '±':
          setDisplay(String(parseFloat(display) * -1)) // Handle sign change / 处理符号变化
          break
        case '%':
          setDisplay(String(parseFloat(display) / 100)) // Handle percentage / 处理百分比
          break
        default:
          break
      }
    }
  }

  return (
    <div className="calculator">              {/* Calculator container / 计算器容器 */}
      <Display value={display} />             {/* Display component / 显示组件 */}
      <ButtonGrid 
        buttons={buttonData}                  // Button configuration / 按钮配置
        onButtonClick={handleButtonClick}     // Button click handler / 按钮点击处理器
      />
    </div>
  )
}

export default App                            // Export App component / 导出App组件
```

**calculations.js - Calculation Utilities / 计算工具**

```jsx
// utils/calculations.js
// Utility functions for calculator operations / 计算器操作的工具函数

// Main calculation function / 主计算函数
export const calculate = (firstValue, secondValue, operation) => {
  const first = parseFloat(firstValue)        // Ensure first value is number / 确保第一个值是数字
  const second = parseFloat(secondValue)      // Ensure second value is number / 确保第二个值是数字

  // Check for invalid numbers / 检查无效数字
  if (isNaN(first) || isNaN(second)) {
    return 0                                  // Return 0 for invalid input / 无效输入返回0
  }

  switch (operation) {                        // Perform operation based on type / 根据类型执行操作
    case '+':
      return add(first, second)               // Addition / 加法
    case '-':
      return subtract(first, second)          // Subtraction / 减法
    case '*':
      return multiply(first, second)          // Multiplication / 乘法
    case '/':
      return divide(first, second)            // Division / 除法
    default:
      return second                           // Return second value for unknown operation / 未知操作返回第二个值
  }
}

// Addition function / 加法函数
export const add = (a, b) => {
  return Number((a + b).toFixed(10))          // Add and round to 10 decimal places / 相加并四舍五入到10位小数
}

// Subtraction function / 减法函数
export const subtract = (a, b) => {
  return Number((a - b).toFixed(10))          // Subtract and round / 相减并四舍五入
}

// Multiplication function / 乘法函数
export const multiply = (a, b) => {
  return Number((a * b).toFixed(10))          // Multiply and round / 相乘并四舍五入
}

// Division function / 除法函数
export const divide = (a, b) => {
  if (b === 0) {                              // Check for division by zero / 检查除零
    return 'Error'                            // Return error for division by zero / 除零返回错误
  }
  return Number((a / b).toFixed(10))          // Divide and round / 相除并四舍五入
}

// Percentage function / 百分比函数
export const percentage = (value) => {
  return Number((value / 100).toFixed(10))    // Convert to percentage / 转换为百分比
}

// Sign change function / 符号变化函数
export const changeSign = (value) => {
  return Number((-value).toFixed(10))         // Change sign / 改变符号
}
```

### 8.4 Personal Portfolio Analysis / 个人作品集分析 {#84-personal-portfolio-analysis}

The Personal Portfolio demonstrates Next.js features including server components, metadata, and modern web development practices.

个人作品集演示了Next.js功能，包括服务器组件、元数据和现代Web开发实践。

**layout.tsx - Root Layout / 根布局**

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'          // Import Metadata type / 导入Metadata类型
import { Inter } from 'next/font/google'      // Import Google Font / 导入Google字体
import './globals.css'                        // Import global styles / 导入全局样式

// Configure Inter font / 配置Inter字体
const inter = Inter({ 
  subsets: ['latin'],                         // Font subsets to load / 要加载的字体子集
  display: 'swap',                            // Font display strategy / 字体显示策略
})

// Static metadata for SEO / SEO的静态元数据
export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer',   // Page title / 页面标题
  description: 'Personal portfolio showcasing web development projects and skills', // Page description / 页面描述
  keywords: ['web developer', 'React', 'Next.js', 'portfolio'], // SEO keywords / SEO关键词
  authors: [{ name: 'John Doe' }],            // Author information / 作者信息
  openGraph: {                                // Open Graph metadata for social sharing / 社交分享的Open Graph元数据
    title: 'John Doe - Full Stack Developer',
    description: 'Personal portfolio showcasing web development projects and skills',
    images: ['/og-image.jpg'],                // Social media preview image / 社交媒体预览图像
    locale: 'en_US',                          // Locale / 地区
    type: 'website',                          // Content type / 内容类型
  },
  twitter: {                                  // Twitter-specific metadata / Twitter特定元数据
    card: 'summary_large_image',              // Twitter card type / Twitter卡片类型
    title: 'John Doe - Full Stack Developer',
    description: 'Personal portfolio showcasing web development projects and skills',
    images: ['/twitter-image.jpg'],           // Twitter preview image / Twitter预览图像
  },
}

// Root layout component / 根布局组件
export default function RootLayout({
  children,                                   // Child components / 子组件
}: {
  children: React.ReactNode                   // TypeScript type for children / children的TypeScript类型
}) {
  return (
    <html lang="en" className={inter.className}> {/* HTML root with font class / 带字体类的HTML根 */}
      <body>                                  {/* Body element / Body元素 */}
        <div className="min-h-screen flex flex-col"> {/* Full height flex container / 全高度flex容器 */}
          <header className="bg-white shadow-sm"> {/* Header with styling / 带样式的头部 */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Navigation container / 导航容器 */}
              <div className="flex justify-between items-center py-6"> {/* Nav flex layout / 导航flex布局 */}
                <div className="flex-shrink-0">  {/* Logo section / 标志部分 */}
                  <h1 className="text-2xl font-bold text-gray-900"> {/* Site title / 站点标题 */}
                    John Doe
                  </h1>
                </div>
                <div className="hidden md:block"> {/* Desktop navigation / 桌面导航 */}
                  <div className="ml-10 flex items-baseline space-x-4"> {/* Nav links container / 导航链接容器 */}
                    <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2"> {/* Nav link / 导航链接 */}
                      About
                    </a>
                    <a href="#projects" className="text-gray-900 hover:text-blue-600 px-3 py-2">
                      Projects
                    </a>
                    <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          
          <main className="flex-1">            {/* Main content area with flex-1 to fill space / 主内容区域用flex-1填充空间 */}
            {children}                          {/* Render child pages / 渲染子页面 */}
          </main>
          
          <footer className="bg-gray-50">      {/* Footer section / 页脚部分 */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> {/* Footer container / 页脚容器 */}
              <div className="text-center text-gray-500"> {/* Footer text / 页脚文本 */}
                <p>&copy; 2024 John Doe. All rights reserved.</p> {/* Copyright notice / 版权声明 */}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
```

**page.tsx - Home Page / 首页**

```tsx
// src/app/page.tsx
import Hero from '@/components/Hero'          // Import Hero component / 导入Hero组件  
import About from '@/components/About'        // Import About component / 导入About组件
import Skills from '@/components/Skills'      // Import Skills component / 导入Skills组件
import Projects from '@/components/Projects'  // Import Projects component / 导入Projects组件
import Contact from '@/components/Contact'    // Import Contact component / 导入Contact组件

// Home page component (Server Component by default) / 首页组件（默认为服务器组件）
export default function Home() {
  return (
    <div>                                     {/* Page container / 页面容器 */}
      <Hero />                                {/* Hero section / Hero部分 */}
      <About />                               {/* About section / 关于部分 */}
      <Skills />                              {/* Skills section / 技能部分 */}
      <Projects />                            {/* Projects section / 项目部分 */}
      <Contact />                             {/* Contact section / 联系部分 */}
    </div>
  )
}
```

**Hero.tsx - Hero Section Component / Hero部分组件**

```tsx
// src/components/Hero.tsx
'use client'                                  // Client component directive / 客户端组件指令

import { useState, useEffect } from 'react'   // Import React hooks / 导入React hooks

const Hero = () => {
  const [displayText, setDisplayText] = useState('') // State for typewriter effect / 打字机效果的状态
  const [currentIndex, setCurrentIndex] = useState(0) // Current character index / 当前字符索引
  
  const fullText = 'Full Stack Developer'     // Text to animate / 要动画化的文本

  // Typewriter effect using useEffect / 使用useEffect实现打字机效果
  useEffect(() => {
    if (currentIndex < fullText.length) {    // If not finished typing / 如果未完成打字
      const timeout = setTimeout(() => {     // Set delay for next character / 为下一个字符设置延迟
        setDisplayText(prev => prev + fullText[currentIndex]) // Add next character / 添加下一个字符
        setCurrentIndex(prev => prev + 1)    // Move to next character / 移动到下一个字符
      }, 100)                               // 100ms delay between characters / 字符间100ms延迟

      return () => clearTimeout(timeout)     // Cleanup timeout / 清理超时
    }
  }, [currentIndex, fullText])              // Re-run when index changes / 当索引改变时重新运行

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white"> {/* Hero section with gradient / 带渐变的Hero部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> {/* Container with padding / 带内边距的容器 */}
        <div className="text-center">          {/* Center-aligned content / 居中对齐的内容 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6"> {/* Main heading with responsive sizing / 带响应式大小的主标题 */}
            Hi, I'm John Doe                   {/* Name / 姓名 */}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 h-12"> {/* Subtitle with typewriter effect / 带打字机效果的副标题 */}
            {displayText}                       {/* Animated text / 动画文本 */}
            <span className="animate-pulse">|</span> {/* Blinking cursor / 闪烁光标 */}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto"> {/* Description paragraph / 描述段落 */}
            I create beautiful and functional web applications using modern technologies
            like React, Next.js, and Node.js.  {/* Description text / 描述文本 */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"> {/* Button container / 按钮容器 */}
            <a 
              href="#projects"                  // Link to projects section / 链接到项目部分
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" // Button styling / 按钮样式
            >
              View My Work                      {/* Button text / 按钮文本 */}
            </a>
            <a 
              href="#contact"                   // Link to contact section / 链接到联系部分
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" // Outline button styling / 轮廓按钮样式
            >
              Get In Touch                      {/* Button text / 按钮文本 */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero                           // Export Hero component / 导出Hero组件
```

**Skills.tsx - Skills Section Component / 技能部分组件**

```tsx
// src/components/Skills.tsx
const Skills = () => {
  // Skills data array / 技能数据数组
  const skills = [
    {
      category: 'Frontend',                   // Skill category / 技能类别
      items: [                                // Skills in this category / 此类别中的技能
        { name: 'React', level: 90 },         // Skill name and proficiency level / 技能名称和熟练程度
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'MongoDB', level: 60 }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 55 },
        { name: 'Figma', level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50"> {/* Skills section with padding and background / 带内边距和背景的技能部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container / 容器 */}
        <div className="text-center mb-16">    {/* Section header / 部分标题 */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> {/* Section title / 部分标题 */}
            Skills & Expertise                 {/* Title text / 标题文本 */}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {/* Section description / 部分描述 */}
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Skills grid layout / 技能网格布局 */}
          {skills.map((skillCategory, categoryIndex) => ( // Map over skill categories / 遍历技能类别
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6"> {/* Skill category card / 技能类别卡片 */}
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center"> {/* Category title / 类别标题 */}
                {skillCategory.category}        {/* Display category name / 显示类别名称 */}
              </h3>
              <div className="space-y-4">       {/* Skills list container / 技能列表容器 */}
                {skillCategory.items.map((skill, skillIndex) => ( // Map over skills in category / 遍历类别中的技能
                  <div key={skillIndex} className="skill-item"> {/* Individual skill item / 单个技能项目 */}
                    <div className="flex justify-between items-center mb-2"> {/* Skill header / 技能标题 */}
                      <span className="text-sm font-medium text-gray-900"> {/* Skill name / 技能名称 */}
                        {skill.name}             // Display skill name / 显示技能名称
                      </span>
                      <span className="text-sm text-gray-500"> {/* Skill level percentage / 技能水平百分比 */}
                        {skill.level}%           // Display skill level / 显示技能水平
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2"> {/* Progress bar background / 进度条背景 */}
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" // Progress bar fill / 进度条填充
                        style={{ width: `${skill.level}%` }} // Dynamic width based on skill level / 基于技能水平的动态宽度
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills                         // Export Skills component / 导出Skills组件
```

**Contact.tsx - Contact Section Component / 联系部分组件**

```tsx
// src/components/Contact.tsx
'use client'                                  // Client component directive / 客户端组件指令

import { useState } from 'react'              // Import useState hook / 导入useState hook

const Contact = () => {
  // Form state management / 表单状态管理
  const [formData, setFormData] = useState({  // Form data state / 表单数据状态
    name: '',                                 // Name field / 姓名字段
    email: '',                                // Email field / 邮箱字段
    message: ''                               // Message field / 消息字段
  })
  const [isSubmitting, setIsSubmitting] = useState(false) // Submission state / 提交状态
  const [submitMessage, setSubmitMessage] = useState('') // Submit feedback message / 提交反馈消息

  // Handle input changes / 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target          // Destructure name and value from event / 从事件中解构name和value
    setFormData(prev => ({                    // Update form data state / 更新表单数据状态
      ...prev,                                // Keep existing data / 保持现有数据
      [name]: value                           // Update specific field / 更新特定字段
    }))
  }

  // Handle form submission / 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()                        // Prevent default form submission / 阻止默认表单提交
    setIsSubmitting(true)                     // Start submission / 开始提交
    setSubmitMessage('')                      // Clear previous messages / 清除之前的消息

    try {
      // Simulate API call (replace with actual endpoint) / 模拟API调用（替换为实际端点）
      await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay / 2秒延迟
      
      setSubmitMessage('Thank you! Your message has been sent successfully.') // Success message / 成功消息
      setFormData({ name: '', email: '', message: '' }) // Reset form / 重置表单
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.') // Error message / 错误消息
    } finally {
      setIsSubmitting(false)                  // End submission / 结束提交
    }
  }

  return (
    <section id="contact" className="py-20 bg-white"> {/* Contact section / 联系部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container / 容器 */}
        <div className="text-center mb-16">    {/* Section header / 部分标题 */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> {/* Section title / 部分标题 */}
            Get In Touch                        {/* Title text / 标题文本 */}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {/* Section description / 部分描述 */}
            Have a project in mind? I'd love to hear from you. Send me a message and let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">    {/* Form container / 表单容器 */}
          <form onSubmit={handleSubmit} className="space-y-6"> {/* Contact form / 联系表单 */}
            <div>                               {/* Name field container / 姓名字段容器 */}
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> {/* Field label / 字段标签 */}
                Name
              </label>
              <input
                type="text"                     // Input type / 输入类型
                id="name"                       // Input ID / 输入ID
                name="name"                     // Input name / 输入名称
                value={formData.name}           // Controlled value / 受控值
                onChange={handleInputChange}   // Change handler / 变化处理器
                required                        // Required field / 必填字段
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" // Input styling / 输入样式
                placeholder="Your Name"         // Placeholder text / 占位符文本
              />
            </div>

            <div>                               {/* Email field container / 邮箱字段容器 */}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"                    // Email input type / 邮箱输入类型
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>                               {/* Message field container / 消息字段容器 */}
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}                        // Textarea rows / 文本区域行数
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical" // Textarea styling / 文本区域样式
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <div>                               {/* Submit button container / 提交按钮容器 */}
              <button
                type="submit"                   // Submit button type / 提交按钮类型
                disabled={isSubmitting}         // Disable during submission / 提交期间禁用
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" // Button styling / 按钮样式
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {/* Dynamic button text / 动态按钮文本 */}
              </button>
            </div>

            {submitMessage && (                 // Show submit message if exists / 如果存在则显示提交消息
              <div className={`text-center p-4 rounded-lg ${
                submitMessage.includes('error') 
                  ? 'bg-red-50 text-red-700'    // Error styling / 错误样式
                  : 'bg-green-50 text-green-700' // Success styling / 成功样式
              }`}>
                {submitMessage}                 {/* Display message / 显示消息 */}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact                        // Export Contact component / 导出Contact组件
```

---

## Summary and Next Steps / 总结和下一步 {#summary-and-next-steps}

### What You've Learned / 您学到了什么

This comprehensive textbook has covered all the essential concepts for **Phase 1: Foundation and React Fundamentals (Weeks 1-8)** of your full-stack development journey:

这本综合教材涵盖了您全栈开发之旅**第一阶段：基础和React基础（第1-8周）**的所有基本概念：

**✅ Development Environment (Week 1)**
- Node.js, npm, VS Code setup and configuration
- Git version control and browser developer tools
- Project structure and development workflow

**✅ JavaScript ES6+ (Weeks 1-2)**
- Modern variable declarations, arrow functions, template literals
- Destructuring, spread/rest operators, array methods
- Modules, promises, and async/await patterns

**✅ Modern HTML & CSS (Weeks 2-3)**
- Semantic HTML5 elements and accessibility
- Flexbox and CSS Grid layouts
- Responsive design and Tailwind CSS utility framework

**✅ React Fundamentals (Weeks 3-5)**
- Components, JSX, props, and state management
- Event handling, conditional rendering, lists and keys
- Forms and controlled components

**✅ React Hooks (Weeks 5-6)**
- useState, useEffect, useContext, useReducer
- useRef, useMemo, useCallback optimization hooks
- Custom hooks for reusable logic

**✅ Development Tools (Week 6)**
- Vite build tool and package.json management
- ESLint code quality and debugging techniques
- Performance profiling and optimization

**✅ Next.js Introduction (Weeks 7-8)**
- App Router, file-based routing, server/client components
- Image and font optimization, SEO and metadata
- Production-ready deployment patterns

**✅ Real Project Analysis (Week 8)**
- Line-by-line code explanations of four complete projects
- Practical application of all learned concepts
- Best practices and professional development patterns

### Your Four Completed Projects / 您完成的四个项目

1. **Todo App** - State management, local storage, filtering
2. **Weather Dashboard** - API integration, async operations, error handling  
3. **Calculator App** - Complex state, mathematical operations, utility functions
4. **Personal Portfolio** - Next.js, TypeScript, responsive design, SEO

### Ready for Phase 2 / 准备第二阶段

You now have a solid foundation to move to **Phase 2: Intermediate React and State Management (Weeks 9-16)**, which will cover:

您现在有了扎实的基础，可以进入**第二阶段：中级React和状态管理（第9-16周）**，其中将涵盖：

- Advanced React patterns and custom hooks
- Redux Toolkit and global state management  
- React Router and complex navigation
- Testing with Jest and React Testing Library
- Performance optimization and code splitting

### Continuous Learning Tips / 持续学习技巧

- **Practice Daily**: Build small projects to reinforce concepts
- **Read Documentation**: Stay updated with React and Next.js docs
- **Join Communities**: Participate in React developer communities
- **Code Reviews**: Study open-source React projects on GitHub
- **Build Portfolio**: Continue adding projects to showcase your skills

**恭喜完成第一阶段！您已经掌握了现代React开发的基础知识。继续练习和构建项目，您将成为一名熟练的全栈开发者。**

**Congratulations on completing Phase 1! You've mastered the fundamentals of modern React development. Keep practicing and building projects, and you'll become a proficient full-stack developer.**