# Personal Portfolio Website | 个人作品集网站

A responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases web development skills learned during the first 8 weeks of React fundamentals study.

一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的响应式个人作品集网站。这个项目展示了在前 8 周 React 基础学习期间掌握的网页开发技能。

## 🚀 Live Demo | 在线演示

[View Live Site](https://your-portfolio.vercel.app) | [查看在线网站](https://your-portfolio.vercel.app)

## 📋 Table of Contents | 目录

- [Features](#features--功能特性)
- [Technologies Used](#technologies-used--使用技术)
- [Getting Started](#getting-started--开始使用)
- [Project Structure](#project-structure--项目结构)
- [Development Notes](#development-notes--开发说明)
- [Learning Objectives](#learning-objectives--学习目标)
- [Deployment](#deployment--部署)
- [Contributing](#contributing--贡献)
- [License](#license--许可证)

## ✨ Features | 功能特性

### Core Features | 核心功能
- **Responsive Design** | **响应式设计**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX** | **现代化界面**: Clean, professional design with smooth animations
- **Interactive Components** | **交互式组件**: Typewriter effect, smooth scrolling, modal dialogs
- **Project Showcase** | **项目展示**: Filterable portfolio with detailed project information
- **Contact Form** | **联系表单**: Fully functional contact form with validation
- **SEO Optimized** | **SEO优化**: Meta tags, Open Graph tags, and semantic HTML

### Technical Features | 技术特性
- **TypeScript** | **TypeScript**: Type-safe development experience
- **Next.js App Router** | **Next.js应用路由**: Modern routing and performance optimization
- **Component Architecture** | **组件架构**: Modular, reusable React components
- **State Management** | **状态管理**: React hooks for local state management
- **Form Handling** | **表单处理**: Client-side validation and error handling
- **Performance** | **性能**: Image optimization, code splitting, and lazy loading

## 🛠 Technologies Used | 使用技术

### Frontend Framework | 前端框架
- **Next.js 15** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript

### Styling | 样式
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Modern styling features
- **Responsive Design** - Mobile-first approach

### Development Tools | 开发工具
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting for consistent code style
- **Git** - Version control system
- **VS Code** - Recommended code editor

### Skills Demonstrated | 展示的技能
- ✅ **React Hooks**: useState, useEffect, custom hooks
- ✅ **Component Lifecycle**: Proper component mounting and unmounting
- ✅ **Event Handling**: Form submission, click events, keyboard navigation
- ✅ **State Management**: Local state with React hooks
- ✅ **API Integration**: Form submission and data handling
- ✅ **Responsive Design**: Mobile-first CSS with Tailwind
- ✅ **TypeScript**: Type definitions and interfaces
- ✅ **Next.js Fundamentals**: File-based routing, metadata, image optimization

## 🚀 Getting Started | 开始使用

### Prerequisites | 先决条件
- Node.js 18.0 or higher
- pnpm (recommended) or npm
- Git

### Installation | 安装

1. **Clone the repository | 克隆仓库**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies | 安装依赖**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server | 启动开发服务器**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser | 在浏览器中打开**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production | 生产构建

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure | 项目结构

```
personal-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with typewriter effect
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Projects.tsx        # Project portfolio
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer component
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🔧 Development Notes | 开发说明

### Component Architecture | 组件架构
Each component is designed to be:
- **Self-contained** | **独立完整**: No external dependencies
- **Reusable** | **可重用**: Can be used in different contexts
- **Typed** | **类型化**: Full TypeScript support
- **Responsive** | **响应式**: Mobile-first design

### State Management | 状态管理
- Uses React hooks for local state management
- Form state handled with controlled components
- No external state management library needed for this project

### Styling Approach | 样式方法
- **Tailwind CSS**: Utility-first approach for rapid development
- **Mobile-first**: Responsive design starting from mobile
- **Consistent spacing**: Using Tailwind's spacing scale
- **Dark mode ready**: Color scheme supports dark mode

### Code Quality | 代码质量
- **TypeScript**: Type safety throughout the application
- **ESLint**: Code linting with Next.js configuration
- **Consistent formatting**: Prettier integration
- **Semantic HTML**: Proper HTML structure for accessibility

## 🎯 Learning Objectives | 学习目标

This project demonstrates mastery of Week 1-8 learning objectives:

本项目展示了第1-8周学习目标的掌握：

### Week 1-2: JavaScript ES6+ | JavaScript ES6+
- ✅ Arrow functions, destructuring, modules
- ✅ Async/await, promises
- ✅ Modern JavaScript features

### Week 3-4: React Fundamentals | React基础
- ✅ Components, JSX, props, state
- ✅ Event handling, lifecycle methods
- ✅ Conditional rendering, lists

### Week 5-6: React Hooks | React钩子
- ✅ useState, useEffect, custom hooks
- ✅ Component lifecycle with hooks
- ✅ State management patterns

### Week 7-8: Development Environment | 开发环境
- ✅ Next.js basics, file-based routing
- ✅ TypeScript integration
- ✅ Tailwind CSS styling
- ✅ Development tools setup

## 🚀 Deployment | 部署

### Vercel (Recommended) | Vercel（推荐）

1. **Connect to GitHub | 连接到GitHub**
   - Fork this repository
   - Sign up for [Vercel](https://vercel.com)
   - Connect your GitHub account

2. **Deploy | 部署**
   - Import your repository
   - Configure build settings (usually automatic)
   - Deploy with one click

3. **Custom Domain | 自定义域名**
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

### Other Deployment Options | 其他部署选项
- **Netlify**: Similar to Vercel with GitHub integration
- **GitHub Pages**: Free hosting for static sites
- **AWS S3**: Cloud storage with CloudFront CDN

## 📈 Performance | 性能

### Optimization Features | 优化特性
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting
- **Static Generation**: Pre-built HTML pages
- **Lazy Loading**: Components loaded on demand

### Best Practices | 最佳实践
- **Semantic HTML**: Proper HTML structure
- **Accessibility**: ARIA labels and keyboard navigation
- **SEO**: Meta tags and Open Graph
- **Performance**: Core Web Vitals optimization

## 🤝 Contributing | 贡献

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License | 许可证

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments | 致谢

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **React Team**: For the powerful library
- **Vercel**: For the deployment platform

---

**Built with ❤️ by [Your Name]** | **由 [您的姓名] 用 ❤️ 构建**

*This project is part of a 40-week full-stack development learning journey.*

*这个项目是40周全栈开发学习之旅的一部分。*