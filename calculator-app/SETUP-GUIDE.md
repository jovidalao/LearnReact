# Calculator App Setup Guide / 计算器应用设置指南

## Prerequisites / 先决条件

Before setting up this calculator app, ensure you have:
在设置这个计算器应用之前，请确保你有：

- Node.js (version 14 or higher) / Node.js（14版本或更高）
- npm or yarn package manager / npm或yarn包管理器
- Basic knowledge of React / React基础知识

## Installation Steps / 安装步骤

### Method 1: Direct Setup / 方法1：直接设置

1. **Navigate to the project directory / 导航到项目目录**
   ```bash
   cd calculator-app
   ```

2. **Install dependencies / 安装依赖**
   ```bash
   npm install
   # or / 或者
   yarn install
   ```

3. **Start the development server / 启动开发服务器**
   ```bash
   npm start
   # or / 或者
   yarn start
   ```

4. **Open your browser / 打开浏览器**
   Navigate to `http://localhost:3000`
   导航到 `http://localhost:3000`

### Method 2: Create React App Alternative / 方法2：Create React App替代方案

If you encounter npm permission issues, try this approach:
如果遇到npm权限问题，尝试这种方法：

1. **Create a new React app / 创建新的React应用**
   ```bash
   npx create-react-app my-calculator-app
   cd my-calculator-app
   ```

2. **Replace the default files with our calculator files / 用我们的计算器文件替换默认文件**
   - Copy all files from `src/` to the new app's `src/` folder
   - Copy `public/index.html` to replace the default
   - Copy `README.md` and any other documentation

3. **Start the app / 启动应用**
   ```bash
   npm start
   ```

## Troubleshooting / 故障排除

### Common Issues / 常见问题

1. **npm permission errors / npm权限错误**
   ```bash
   # Fix npm permissions / 修复npm权限
   sudo chown -R $(whoami) ~/.npm
   
   # Or use yarn instead / 或者使用yarn
   npm install -g yarn
   yarn install
   yarn start
   ```

2. **Port 3000 already in use / 端口3000已被使用**
   ```bash
   # Kill the process using port 3000 / 终止使用端口3000的进程
   lsof -ti:3000 | xargs kill -9
   
   # Or use a different port / 或者使用不同端口
   PORT=3001 npm start
   ```

3. **Module not found errors / 模块未找到错误**
   ```bash
   # Clear npm cache / 清除npm缓存
   npm cache clean --force
   
   # Delete node_modules and reinstall / 删除node_modules并重新安装
   rm -rf node_modules package-lock.json
   npm install
   ```

## File Structure Verification / 文件结构验证

Make sure your project structure looks like this:
确保你的项目结构如下所示：

```
calculator-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Button.css
│   │   ├── ButtonGrid.js
│   │   ├── ButtonGrid.css
│   │   ├── Calculator.js
│   │   ├── Calculator.css
│   │   ├── Display.js
│   │   └── Display.css
│   ├── utils/
│   │   ├── calculations.js
│   │   └── constants.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── SETUP-GUIDE.md
```

## Testing the Application / 测试应用

### Basic Functionality Tests / 基本功能测试

Once the app is running, test these features:
应用运行后，测试这些功能：

1. **Number Input / 数字输入**
   - Click number buttons (0-9) / 点击数字按钮（0-9）
   - Verify display updates correctly / 验证显示正确更新

2. **Basic Operations / 基本运算**
   - Test addition: `5 + 3 = 8` / 测试加法：`5 + 3 = 8`
   - Test subtraction: `10 - 4 = 6` / 测试减法：`10 - 4 = 6`
   - Test multiplication: `7 × 6 = 42` / 测试乘法：`7 × 6 = 42`
   - Test division: `15 ÷ 3 = 5` / 测试除法：`15 ÷ 3 = 5`

3. **Decimal Operations / 小数运算**
   - Test decimal input: `3.14 + 2.86` / 测试小数输入：`3.14 + 2.86`
   - Verify decimal point can only be added once / 验证小数点只能添加一次

4. **Clear Functions / 清除功能**
   - Test C (clear current) / 测试C（清除当前）
   - Test AC (all clear) / 测试AC（全部清除）
   - Test backspace (⌫) / 测试退格（⌫）

5. **Memory Functions / 内存功能**
   - Test M+ (memory add) / 测试M+（内存加）
   - Test M- (memory subtract) / 测试M-（内存减）
   - Test MR (memory recall) / 测试MR（内存调用）
   - Test MC (memory clear) / 测试MC（内存清除）

6. **Keyboard Support / 键盘支持**
   - Test number keys / 测试数字键
   - Test operator keys (+, -, *, /) / 测试运算符键（+, -, *, /）
   - Test Enter key for equals / 测试Enter键执行计算
   - Test Escape key for clear / 测试Escape键清除

7. **Error Handling / 错误处理**
   - Test division by zero / 测试除以零
   - Test very large numbers / 测试非常大的数字

### Performance Testing / 性能测试

1. **Responsive Design / 响应式设计**
   - Test on different screen sizes / 在不同屏幕尺寸上测试
   - Test portrait and landscape orientations / 测试竖屏和横屏模式

2. **Accessibility / 可访问性**
   - Test keyboard navigation / 测试键盘导航
   - Test with screen readers (if available) / 测试屏幕阅读器（如果可用）

## Learning Objectives Checklist / 学习目标检查清单

After completing this project, you should understand:
完成这个项目后，你应该理解：

- [ ] React functional components / React函数式组件
- [ ] useState hook for state management / useState钩子进行状态管理
- [ ] useEffect hook for side effects / useEffect钩子处理副作用
- [ ] useCallback hook for optimization / useCallback钩子进行优化
- [ ] Event handling in React / React中的事件处理
- [ ] Component composition / 组件组合
- [ ] Props passing between components / 组件间的props传递
- [ ] CSS modules and styling / CSS模块和样式
- [ ] Responsive design principles / 响应式设计原则
- [ ] Accessibility best practices / 可访问性最佳实践
- [ ] Error handling in React / React中的错误处理
- [ ] Code organization and structure / 代码组织和结构

## Next Steps / 下一步

After successfully running the calculator:
成功运行计算器后：

1. **Code Review / 代码审查**
   - Read through all the bilingual comments / 阅读所有双语注释
   - Understand the data flow between components / 理解组件间的数据流

2. **Experimentation / 实验**
   - Try modifying the button layout / 尝试修改按钮布局
   - Add new features (e.g., square root, percentage) / 添加新功能（例如平方根、百分比）
   - Change the color scheme / 改变配色方案

3. **Advanced Features / 高级功能**
   - Add calculation history persistence / 添加计算历史持久化
   - Implement themes (light/dark mode) / 实现主题（亮色/暗色模式）
   - Add unit tests / 添加单元测试

4. **Deployment / 部署**
   - Build the production version / 构建生产版本
   - Deploy to platforms like Netlify or Vercel / 部署到Netlify或Vercel等平台

## Resources / 资源

- [React Documentation](https://react.dev/) / React文档
- [Create React App Documentation](https://create-react-app.dev/) / Create React App文档
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) / CSS网格指南
- [JavaScript Calculator Tutorial](https://www.freecodecamp.org/news/how-to-build-a-calculator-app/) / JavaScript计算器教程

---

**Happy Coding! / 编程愉快！** 🚀