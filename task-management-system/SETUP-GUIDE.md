# Setup Guide / 设置指南

This guide will help you set up the Task Management System on your local machine.

本指南将帮助您在本地计算机上设置任务管理系统。

## 📋 Prerequisites / 先决条件

### Required Software / 必需软件
- **Node.js 18+** - JavaScript runtime
- **pnpm** - Package manager (recommended)
- **Git** - Version control
- **VS Code** - Code editor (recommended)

### Recommended VS Code Extensions / 推荐的 VS Code 扩展
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- TypeScript Importer
- GitLens

## 🛠️ Installation Steps / 安装步骤

### 1. Install Node.js / 安装 Node.js

**Windows/macOS:**
- Download from [nodejs.org](https://nodejs.org/)
- Install LTS version (18.x or higher)

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify installation:
```bash
node --version
npm --version
```

### 2. Install pnpm / 安装 pnpm

```bash
npm install -g pnpm
```

Verify installation:
```bash
pnpm --version
```

### 3. Clone the Repository / 克隆仓库

```bash
git clone <repository-url>
cd task-management-system
```

### 4. Install Dependencies / 安装依赖

```bash
pnpm install
```

### 5. Environment Setup / 环境设置

Create `.env` file in the project root:
```bash
cp .env.example .env
```

Edit `.env` file:
```env
# Database configuration
DATABASE_URL="file:./dev.db"

# NextAuth.js configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"

# Optional: OAuth providers
# GITHUB_ID="your-github-app-id"
# GITHUB_SECRET="your-github-app-secret"
```

### 6. Database Setup / 数据库设置

Generate Prisma client:
```bash
pnpm prisma generate
```

Create and migrate database:
```bash
pnpm prisma db push
```

### 7. Run Development Server / 运行开发服务器

```bash
pnpm dev
```

Open browser and navigate to `http://localhost:3000`

## 🔧 Development Commands / 开发命令

### Package Management / 包管理
```bash
# Install dependencies
pnpm install

# Add new package
pnpm add <package-name>

# Add dev dependency
pnpm add -D <package-name>

# Remove package
pnpm remove <package-name>
```

### Development / 开发
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix
```

### Database / 数据库
```bash
# Generate Prisma client
pnpm prisma generate

# Push schema to database
pnpm prisma db push

# View database in browser
pnpm prisma studio

# Reset database
pnpm prisma db reset
```

## 🐛 Troubleshooting / 故障排除

### Common Issues / 常见问题

#### Port Already in Use / 端口已被占用
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -p 3001
```

#### Database Connection Issues / 数据库连接问题
```bash
# Delete and recreate database
rm dev.db
pnpm prisma db push
```

#### Node Modules Issues / Node 模块问题
```bash
# Clear cache and reinstall
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

#### TypeScript Errors / TypeScript 错误
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P -> "TypeScript: Restart TS Server"

# Check TypeScript configuration
pnpm tsc --noEmit
```

## 📱 Testing the Application / 测试应用程序

### 1. User Registration / 用户注册
1. Navigate to `http://localhost:3000`
2. Click "Sign Up / 注册"
3. Fill in the registration form
4. Submit and verify account creation

### 2. User Login / 用户登录
1. Go to sign-in page
2. Enter registered email and password
3. Verify successful login and redirect to dashboard

### 3. Task Management / 任务管理
1. Create a new task
2. Edit task details
3. Change task status
4. Delete a task
5. Test filtering and searching

### 4. Responsive Design / 响应式设计
1. Test on different screen sizes
2. Verify mobile navigation
3. Check touch interactions

## 🔐 Security Considerations / 安全考虑

### Environment Variables / 环境变量
- Never commit `.env` file to version control
- Use strong, unique secrets in production
- Rotate secrets regularly

### Database Security / 数据库安全
- Use environment-specific database URLs
- Implement proper backup strategies
- Monitor database access logs

### Authentication Security / 身份验证安全
- Use HTTPS in production
- Implement rate limiting
- Monitor authentication attempts

## 📊 Performance Optimization / 性能优化

### Development / 开发环境
```bash
# Analyze bundle size
pnpm build && pnpm analyze

# Check performance
pnpm dev --turbo
```

### Production / 生产环境
- Enable gzip compression
- Use CDN for static assets
- Implement proper caching strategies
- Monitor Core Web Vitals

## 🚀 Deployment Preparation / 部署准备

### Environment Variables / 环境变量
Set these in your production environment:
```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="your-production-url"
```

### Build Process / 构建流程
```bash
# Create production build
pnpm build

# Test production build locally
pnpm start
```

### Database Migration / 数据库迁移
```bash
# For production database
pnpm prisma migrate deploy
```

## 📚 Learning Resources / 学习资源

### Official Documentation / 官方文档
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Tutorials / 教程
- [Next.js Tutorial](https://nextjs.org/learn)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Community / 社区
- [Next.js Discord](https://discord.com/invite/nextjs)
- [React Discord](https://discord.com/invite/react)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/nextjs)

## 🤝 Getting Help / 获取帮助

### Common Commands / 常用命令
```bash
# Check versions
node --version
pnpm --version

# Clear cache
pnpm store prune

# Update dependencies
pnpm update

# Check outdated packages
pnpm outdated
```

### Debug Mode / 调试模式
```bash
# Run with debug information
DEBUG=* pnpm dev

# Check environment
pnpm env
```

---

**Happy Coding! / 编程愉快！** 🚀

If you encounter any issues, please check the troubleshooting section or create an issue in the repository.

如果您遇到任何问题，请查看故障排除部分或在仓库中创建问题。