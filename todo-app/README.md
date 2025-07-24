# Todo App

启动和构建命令如下：

- 开发模式 / Development: `npm run dev`
- 构建生产包 / Build for production: `npm run build`
- 预览生产包 / Preview: `npm run preview`

---

# Todo List Application / 待办事项列表应用

A simple and elegant todo list application built with React, designed for Week 2 of the Full-Stack Development Learning Plan.

一个使用React构建的简单优雅的待办事项列表应用，专为全栈开发学习计划的第2周设计。

## 📋 Project Overview / 项目概述

This Todo List Application demonstrates the fundamental React concepts and JavaScript skills you should master in your first two weeks of study. It showcases modern React development practices with comprehensive bilingual comments for learning purposes.

此待办事项列表应用演示了您在前两周学习中应该掌握的基本React概念和JavaScript技能。它展示了现代React开发实践，并提供了用于学习目的的全面双语注释。

## ✨ Features / 功能特性

### Core Features / 核心功能
- ✅ **Add Todo Items** / **添加待办事项** - Create new tasks with input validation
- ✏️ **Edit Todo Items** / **编辑待办事项** - Double-click to edit existing tasks
- ✅ **Toggle Completion** / **切换完成状态** - Mark tasks as complete or incomplete
- 🗑️ **Delete Todo Items** / **删除待办事项** - Remove tasks from the list
- 🔍 **Filter Todos** / **过滤待办事项** - View all, active, or completed tasks
- 💾 **Local Storage** / **本地存储** - Persist todos between browser sessions
- 📱 **Responsive Design** / **响应式设计** - Works on desktop and mobile devices

### Additional Features / 附加功能
- 🚀 **Quick Add Buttons** / **快速添加按钮** - One-click addition of common tasks
- 📊 **Statistics Display** / **统计信息显示** - Show total, active, and completed counts
- ⌨️ **Keyboard Shortcuts** / **键盘快捷键** - Efficient task management
- 🎨 **Modern UI** / **现代UI** - Clean and intuitive interface
- 🌐 **Bilingual Support** / **双语支持** - English and Chinese interface elements

## 🛠️ Technologies Used / 使用技术

- **React 19** - Modern React with hooks
- **Vite** - Next-generation frontend tooling / 新一代前端构建工具
- **JavaScript ES6+** - Arrow functions, destructuring, spread operator
- **CSS3** - Flexbox, Grid, CSS variables, animations
- **Local Storage API** - Data persistence
- **HTML5** - Semantic markup

## 📚 Learning Objectives / 学习目标

This project demonstrates the following concepts from Week 1-2 of your learning plan:

此项目演示了您学习计划第1-2周的以下概念：

### Week 1 Skills / 第1周技能
- **JavaScript ES6+** / **JavaScript ES6+**
  - Arrow functions / 箭头函数
  - Destructuring / 解构
  - Template literals / 模板字符串
  - Spread operator / 展开运算符
  - Array methods (map, filter, reduce) / 数组方法

### Week 2 Skills / 第2周技能
- **React Fundamentals** / **React基础**
  - Components and JSX / 组件和JSX
  - Props and state / 属性和状态
  - Event handling / 事件处理
  - Conditional rendering / 条件渲染
  - Lists and keys / 列表和键

- **React Hooks** / **React钩子**
  - useState / useState状态钩子
  - useEffect / useEffect副作用钩子

- **CSS Skills** / **CSS技能**
  - Flexbox layout / Flexbox布局
  - CSS Grid / CSS网格
  - Responsive design / 响应式设计
  - CSS variables / CSS变量

## 🚀 Getting Started / 开始使用

### Prerequisites / 前提条件
- Node.js (v14 or higher) / Node.js (v14或更高版本)
- npm or yarn package manager / npm或yarn包管理器

### Installation / 安装

1. **Clone or download the project** / **克隆或下载项目**
   ```bash
   # Navigate to the project directory
   # 导航到项目目录
   cd todo-app
   ```

2. **Install dependencies** / **安装依赖**
   ```bash
   npm install
   # or / 或者
   yarn install
   ```

3. **Start the development server** / **启动开发服务器**
   ```bash
   npm start
   # or / 或者
   yarn start
   ```

4. **Open your browser** / **打开浏览器**
   - Navigate to `http://localhost:3000`
   - 导航到 `http://localhost:3000`

## 📁 Project Structure / 项目结构

```
todo-app/
├── public/
│   └── index.html          # Main HTML file / 主HTML文件
├── src/
│   ├── components/         # React components / React组件
│   │   ├── AddTodo.js     # Add todo form component / 添加待办事项表单组件
│   │   ├── TodoItem.js    # Individual todo item component / 单个待办事项组件
│   │   └── TodoList.js    # Todo list container component / 待办事项列表容器组件
│   ├── App.js             # Main application component / 主应用组件
│   ├── App.css            # Application styles / 应用样式
│   └── index.js           # React entry point / React入口点
├── package.json           # Project configuration / 项目配置
└── README.md             # This file / 此文件
```

## 🎯 Key Learning Points / 关键学习点

### 1. Component Architecture / 组件架构
- **App.js** - Main container managing global state
- **AddTodo.js** - Form handling and input validation
- **TodoList.js** - List rendering and data display
- **TodoItem.js** - Individual item interactions

### 2. State Management / 状态管理
```javascript
// Example of useState hook / useState钩子示例
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState('all');
```

### 3. Event Handling / 事件处理
```javascript
// Example of event handler / 事件处理程序示例
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission / 处理表单提交
};
```

### 4. Local Storage Integration / 本地存储集成
```javascript
// Example of useEffect for data persistence / 用于数据持久化的useEffect示例
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

## 💡 Usage Instructions / 使用说明

### Adding Todos / 添加待办事项
1. Type your task in the input field / 在输入字段中输入您的任务
2. Press Enter or click "Add" button / 按Enter或点击"添加"按钮
3. Use quick-add buttons for common tasks / 使用快速添加按钮添加常见任务

### Managing Todos / 管理待办事项
- **Toggle completion** / **切换完成状态**: Click the checkbox / 点击复选框
- **Edit a todo** / **编辑待办事项**: Double-click the text / 双击文本
- **Delete a todo** / **删除待办事项**: Click the delete button / 点击删除按钮

### Filtering Todos / 过滤待办事项
- **All** / **全部**: Show all todos / 显示所有待办事项
- **Active** / **活跃**: Show only incomplete todos / 只显示未完成的待办事项
- **Completed** / **已完成**: Show only completed todos / 只显示已完成的待办事项

### Keyboard Shortcuts / 键盘快捷键
- **Double-click** on todo text to edit / **双击**待办事项文本进行编辑
- **Enter** to save when editing / **Enter**编辑时保存
- **Escape** to cancel editing / **Escape**取消编辑

## 🔧 Available Scripts / 可用脚本

In the project directory, you can run / 在项目目录中，您可以运行：

```bash
# Start development server / 启动开发服务器
npm run dev

# Build for production / 构建生产版本
npm run build

# Preview production build / 预览生产版本
npm run preview

# Run tests / 运行测试
npm test
```

- 开发服务器默认地址为 http://localhost:5173/ （Vite 默认端口）
- The dev server runs at http://localhost:5173/ by default (Vite default port)

## 📱 Responsive Design / 响应式设计

The application is fully responsive and works on:
应用程序完全响应式，适用于：

- 🖥️ **Desktop** / **桌面** (1024px+)
- 📱 **Tablet** / **平板** (768px - 1023px)
- 📱 **Mobile** / **手机** (320px - 767px)

## 🎨 Customization / 自定义

### Styling / 样式
- Modify `src/App.css` for styling changes / 修改 `src/App.css` 进行样式更改
- CSS variables are defined in `:root` for easy theming / CSS变量在 `:root` 中定义，便于主题设置

### Adding Features / 添加功能
- Add new components in `src/components/` / 在 `src/components/` 中添加新组件
- Extend state management in `App.js` / 在 `App.js` 中扩展状态管理

## 🐛 Common Issues / 常见问题

### Issue: Todos not saving / 问题：待办事项未保存
**Solution**: Check if localStorage is enabled in your browser
**解决方案**: 检查浏览器是否启用了localStorage

### Issue: Styling not applied / 问题：样式未应用
**Solution**: Ensure `App.css` is properly imported in `App.js`
**解决方案**: 确保在 `App.js` 中正确导入了 `App.css`

## 📈 Next Steps / 后续步骤

After completing this project, you should be ready to:
完成此项目后，您应该准备好：

1. **Add more complex state management** / **添加更复杂的状态管理** (Redux, Context API)
2. **Implement API integration** / **实现API集成** (fetch, axios)
3. **Add routing** / **添加路由** (React Router)
4. **Include testing** / **包含测试** (Jest, React Testing Library)
5. **Deploy the application** / **部署应用程序** (Netlify, Vercel)

## 🤝 Contributing / 贡献

This is a learning project. Feel free to:
这是一个学习项目。欢迎您：

- Fork and modify for your own learning / 分叉并修改用于您自己的学习
- Submit improvements or bug fixes / 提交改进或错误修复
- Add new features as practice / 添加新功能作为练习

## 📄 License / 许可证

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

此项目是开源的，遵循 [MIT许可证](https://opensource.org/licenses/MIT)。

## 🙏 Acknowledgments / 致谢

- React team for the excellent documentation / React团队提供的优秀文档
- Full-Stack Development Learning Plan contributors / 全栈开发学习计划贡献者
- All developers who believe in learning through building / 所有相信通过构建学习的开发者

---

**Happy Coding! / 编程愉快！** 🚀

---

*This project is part of the Week 2 milestone in the Full-Stack Development Learning Plan. It demonstrates fundamental React concepts and modern JavaScript practices through a practical, real-world application.*

*此项目是全栈开发学习计划第2周里程碑的一部分。它通过实用的现实世界应用程序演示了基本的React概念和现代JavaScript实践。*