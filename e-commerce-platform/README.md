# E-commerce Platform / 电子商务平台

一个使用 React + TypeScript + Vite 构建的现代化电子商务平台，专为学习 Week 12 的内容而设计。

A modern e-commerce platform built with React + TypeScript + Vite, designed for Week 12 learning content.

## 项目特色 / Project Features

### 核心功能 / Core Features
- ✅ **产品目录** / Product Catalog - 完整的产品展示和浏览
- ✅ **搜索和筛选** / Search & Filter - 按分类、价格、评分筛选产品
- ✅ **购物车管理** / Cart Management - 添加、删除、更新购物车商品
- ✅ **结账流程** / Checkout Process - 完整的订单处理和表单验证
- ✅ **用户认证** / User Authentication - 简单的登录/登出功能
- ✅ **响应式设计** / Responsive Design - 适配各种设备屏幕
- ✅ **双语支持** / Bilingual Support - 中英文双语界面和文档

### 技术栈 / Tech Stack
- **前端框架** / Frontend Framework: React 18 + TypeScript
- **构建工具** / Build Tool: Vite
- **状态管理** / State Management: React Context + useReducer
- **样式系统** / Styling: CSS Modules + Flexbox/Grid
- **类型系统** / Type System: TypeScript
- **开发工具** / Development Tools: ESLint + Prettier

## 快速开始 / Quick Start

### 环境要求 / Requirements
- Node.js 16.0+
- npm 7.0+ 或 yarn 1.22+

### 安装和运行 / Installation & Running

```bash
# 进入项目目录 / Enter project directory
cd e-commerce-platform

# 安装依赖 / Install dependencies
npm install

# 启动开发服务器 / Start development server
npm run dev

# 构建生产版本 / Build for production
npm run build

# 预览生产版本 / Preview production build
npm run preview
```

## 项目结构 / Project Structure

```
e-commerce-platform/
├── src/
│   ├── components/          # 组件目录 / Components
│   │   ├── Header.tsx       # 头部导航 / Header navigation
│   │   ├── ProductCard.tsx  # 产品卡片 / Product card
│   │   ├── ProductList.tsx  # 产品列表 / Product list
│   │   ├── ProductFilter.tsx # 产品筛选器 / Product filter
│   │   ├── Cart.tsx         # 购物车 / Shopping cart
│   │   ├── CartItem.tsx     # 购物车项目 / Cart item
│   │   ├── Checkout.tsx     # 结账页面 / Checkout page
│   │   └── *.css           # 组件样式 / Component styles
│   ├── context/            # 上下文目录 / Context
│   │   └── CartContext.tsx # 购物车上下文 / Cart context
│   ├── types/              # 类型定义 / Type definitions
│   │   ├── Product.ts      # 产品类型 / Product types
│   │   └── Cart.ts         # 购物车类型 / Cart types
│   ├── data/               # 数据目录 / Data
│   │   └── mockProducts.ts # 模拟产品数据 / Mock product data
│   ├── App.tsx             # 主应用组件 / Main app component
│   ├── App.css             # 主应用样式 / Main app styles
│   └── main.tsx            # 应用入口 / App entry point
├── public/                 # 公共资源 / Public assets
├── package.json            # 项目配置 / Project configuration
├── tsconfig.json           # TypeScript 配置 / TypeScript config
├── vite.config.ts          # Vite 配置 / Vite config
└── README.md               # 项目文档 / Project documentation
```

## 核心概念学习 / Core Concepts Learning

### 1. React Context API 使用 / React Context API Usage

```typescript
// 购物车上下文实现 / Cart context implementation
const CartContext = createContext<CartContextType | undefined>(undefined);

// 使用 useReducer 管理复杂状态 / Using useReducer for complex state
const [state, dispatch] = useReducer(cartReducer, initialState);
```

### 2. TypeScript 类型系统 / TypeScript Type System

```typescript
// 产品接口定义 / Product interface definition
interface Product {
  id: number;
  name: string;
  price: number;
  // ... 其他属性 / other properties
}

// 联合类型使用 / Union types usage
type ProductCategory = 'electronics' | 'clothing' | 'home' | 'books' | 'sports';
```

### 3. 表单处理和验证 / Form Handling & Validation

```typescript
// 表单验证函数 / Form validation function
const validateForm = (): boolean => {
  // 验证逻辑 / Validation logic
  return Object.keys(newErrors).length === 0;
};
```

### 4. 响应式设计 / Responsive Design

```css
/* 网格布局 / Grid layout */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
```

## 学习建议 / Learning Recommendations

### 适合的学习阶段 / Suitable Learning Stage
这个项目适合已经掌握以下知识的学习者：
This project is suitable for learners who have mastered:

- React 基础概念 / React basics
- TypeScript 基础语法 / TypeScript basics
- CSS 和响应式设计 / CSS and responsive design
- 现代 JavaScript (ES6+) / Modern JavaScript (ES6+)

### 学习路径 / Learning Path
1. **理解项目结构** / Understand project structure
2. **学习组件设计** / Learn component design
3. **掌握状态管理** / Master state management
4. **实践表单处理** / Practice form handling
5. **优化用户体验** / Optimize user experience

## 功能详解 / Feature Details

### 产品目录 / Product Catalog
- 产品卡片展示 / Product card display
- 图片加载和优化 / Image loading and optimization
- 评分系统显示 / Rating system display
- 库存状态提示 / Stock status indication

### 搜索和筛选 / Search & Filter
- 关键词搜索 / Keyword search
- 分类筛选 / Category filtering
- 价格范围筛选 / Price range filtering
- 评分筛选 / Rating filtering
- 排序功能 / Sorting functionality

### 购物车管理 / Cart Management
- 添加商品到购物车 / Add items to cart
- 更新商品数量 / Update item quantities
- 删除商品 / Remove items
- 购物车总计计算 / Cart total calculation
- 运费计算 / Shipping calculation

### 结账流程 / Checkout Process
- 用户信息收集 / User information collection
- 地址信息管理 / Address information management
- 支付信息处理 / Payment information handling
- 表单验证 / Form validation
- 订单确认 / Order confirmation

## 扩展功能 / Extended Features

### 可以添加的功能 / Features to Add
- [ ] 用户注册和认证 / User registration and authentication
- [ ] 产品评论系统 / Product review system
- [ ] 收藏夹功能 / Favorites functionality
- [ ] 订单历史 / Order history
- [ ] 支付集成 / Payment integration
- [ ] 实时通知 / Real-time notifications
- [ ] 多语言支持 / Multi-language support
- [ ] 主题切换 / Theme switching
- [ ] 数据持久化 / Data persistence
- [ ] 单元测试 / Unit testing

## 部署 / Deployment

### 部署选项 / Deployment Options
1. **Vercel** - 推荐用于静态站点 / Recommended for static sites
2. **Netlify** - 简单的静态站点部署 / Simple static site deployment
3. **GitHub Pages** - 免费的静态站点托管 / Free static site hosting

### 部署命令 / Deployment Commands
```bash
# 构建生产版本 / Build for production
npm run build

# 部署到 Vercel / Deploy to Vercel
npx vercel

# 部署到 Netlify / Deploy to Netlify
npm run build && npx netlify deploy --prod --dir=dist
```

## 故障排除 / Troubleshooting

### 常见问题 / Common Issues
1. **端口冲突** / Port Conflicts
   ```bash
   # 指定端口运行 / Run on specific port
   npm run dev -- --port 3001
   ```

2. **类型错误** / Type Errors
   - 检查 TypeScript 配置 / Check TypeScript configuration
   - 确认类型定义正确 / Verify type definitions are correct

3. **构建错误** / Build Errors
   - 重新安装依赖 / Reinstall dependencies: `rm -rf node_modules && npm install`

## 许可证 / License

MIT License - 详见 LICENSE 文件 / See LICENSE file for details

---

**学习提示 / Learning Tips:**
这个项目包含了 React 开发的核心概念和最佳实践，建议按照代码中的注释逐步学习，理解每个功能的实现原理。

This project contains core concepts and best practices of React development. It's recommended to learn step by step following the comments in the code and understand the implementation principles of each feature.

**Happy Learning! 学习愉快！** 🚀