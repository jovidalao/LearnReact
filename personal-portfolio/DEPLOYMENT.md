# Deployment Guide | 部署指南

This guide provides step-by-step instructions for deploying your personal portfolio to various platforms.

这份指南提供了将个人作品集部署到各种平台的详细步骤。

## 🚀 Vercel Deployment (Recommended) | Vercel部署（推荐）

Vercel is the recommended platform for deploying Next.js applications, created by the same team that built Next.js.

Vercel是部署Next.js应用程序的推荐平台，由创建Next.js的同一个团队开发。

### Prerequisites | 先决条件

1. **GitHub Account** | **GitHub账户**: Create a GitHub account if you don't have one
2. **Vercel Account** | **Vercel账户**: Sign up at [vercel.com](https://vercel.com) using your GitHub account
3. **Project Repository** | **项目仓库**: Push your project to a GitHub repository

### Step-by-Step Deployment | 逐步部署

#### 1. Push to GitHub | 推送到GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Personal portfolio website

🎨 Features:
- Responsive design with Tailwind CSS
- Interactive components with React hooks
- Project showcase with filtering
- Contact form with validation
- SEO optimization
- Bilingual support (English/Chinese)

🛠 Tech Stack:
- Next.js 15 with App Router
- React 19 with TypeScript
- Tailwind CSS for styling
- ESLint for code quality

📱 Week 8 milestone project demonstrating:
- JavaScript ES6+ proficiency
- React fundamentals and hooks
- Next.js basics and routing
- Modern development workflow

🚀 Generated with Claude Code
https://claude.ai/code

Co-Authored-By: Claude <noreply@anthropic.com>"

# Add remote repository (replace with your GitHub username)
git remote add origin https://github.com/yourusername/personal-portfolio.git

# Push to GitHub
git push -u origin main
```

#### 2. Import to Vercel | 导入到Vercel

1. **Go to Vercel Dashboard** | **前往Vercel仪表板**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with your GitHub account

2. **Import Repository** | **导入仓库**
   - Click "Import Git Repository"
   - Select your `personal-portfolio` repository
   - Click "Import"

3. **Configure Project** | **配置项目**
   - **Project Name**: `personal-portfolio` (or your preferred name)
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `pnpm install` (or `npm install`)

4. **Deploy** | **部署**
   - Click "Deploy"
   - Wait for the build process to complete (usually 1-3 minutes)
   - Your site will be available at `https://your-project-name.vercel.app`

#### 3. Custom Domain (Optional) | 自定义域名（可选）

1. **Purchase Domain** | **购买域名**
   - Buy a domain from providers like Namecheap, GoDaddy, or Cloudflare

2. **Add Domain to Vercel** | **将域名添加到Vercel**
   - Go to your project dashboard
   - Click "Settings" → "Domains"
   - Add your custom domain

3. **Configure DNS** | **配置DNS**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to Vercel's IP addresses

### Environment Variables | 环境变量

If you need to add environment variables (for contact form, analytics, etc.):

如果需要添加环境变量（用于联系表单、分析等）：

1. Go to project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   EMAILJS_SERVICE_ID=your-emailjs-service-id
   EMAILJS_TEMPLATE_ID=your-emailjs-template-id
   EMAILJS_PUBLIC_KEY=your-emailjs-public-key
   ```

### Automatic Deployments | 自动部署

Every time you push to your main branch, Vercel will automatically:
- Build your application
- Run tests (if configured)
- Deploy to production
- Update your live site

每次推送到主分支时，Vercel会自动：
- 构建您的应用程序
- 运行测试（如果已配置）
- 部署到生产环境
- 更新您的实时网站

## 📦 Alternative Deployment Options | 其他部署选项

### Netlify

1. **Connect Repository** | **连接仓库**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings** | **构建设置**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Node version: 18 or higher

3. **Deploy** | **部署**
   - Click "Deploy site"
   - Your site will be available at `https://random-name.netlify.app`

### GitHub Pages

1. **Install gh-pages** | **安装gh-pages**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Add Scripts** | **添加脚本**
   ```json
   {
     "scripts": {
       "predeploy": "pnpm build",
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Configure Next.js** | **配置Next.js**
   ```javascript
   // next.config.js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     basePath: '/personal-portfolio',
     assetPrefix: '/personal-portfolio/',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. **Deploy** | **部署**
   ```bash
   pnpm deploy
   ```

### AWS S3 + CloudFront

1. **Build Application** | **构建应用程序**
   ```bash
   pnpm build
   ```

2. **Create S3 Bucket** | **创建S3存储桶**
   - Enable static website hosting
   - Set index document to `index.html`

3. **Upload Files** | **上传文件**
   - Upload the contents of the `out` folder to S3

4. **Configure CloudFront** | **配置CloudFront**
   - Create CloudFront distribution
   - Point to your S3 bucket
   - Configure custom domain (optional)

## 🔧 Build Optimization | 构建优化

### Production Checklist | 生产检查清单

Before deploying, ensure:
部署前，请确保：

- [ ] **Build succeeds** | **构建成功**: `pnpm build` runs without errors
- [ ] **No console errors** | **无控制台错误**: Check browser console for errors
- [ ] **Images optimized** | **图片优化**: All images are properly sized and compressed
- [ ] **Meta tags** | **元标签**: SEO meta tags are properly configured
- [ ] **Links work** | **链接工作**: All internal and external links function correctly
- [ ] **Forms tested** | **表单测试**: Contact form validation works properly
- [ ] **Mobile responsive** | **移动响应**: Site works well on all device sizes
- [ ] **Performance** | **性能**: Good Core Web Vitals scores
- [ ] **Accessibility** | **可访问性**: Proper ARIA labels and keyboard navigation

### Performance Optimization | 性能优化

1. **Image Optimization** | **图片优化**
   - Use Next.js `Image` component
   - Provide proper `alt` attributes
   - Use appropriate image formats (WebP when possible)

2. **Code Splitting** | **代码分割**
   - Next.js automatically splits code
   - Use dynamic imports for heavy components

3. **Caching** | **缓存**
   - Vercel automatically handles caching
   - Use appropriate cache headers

4. **Bundle Analysis** | **包分析**
   ```bash
   pnpm add -D @next/bundle-analyzer
   ```

## 🌍 Custom Domain Setup | 自定义域名设置

### Domain Provider Configuration | 域名提供商配置

1. **Namecheap**
   - Go to Domain List → Manage
   - Advanced DNS → Add New Record
   - Type: CNAME, Host: www, Value: cname.vercel-dns.com

2. **GoDaddy**
   - Go to DNS Management
   - Add CNAME record: www → cname.vercel-dns.com

3. **Cloudflare**
   - Go to DNS settings
   - Add CNAME record: www → cname.vercel-dns.com

### SSL Certificate | SSL证书

Vercel automatically provides SSL certificates for custom domains:
- Free SSL certificates
- Automatic renewal
- No configuration required

## 📊 Analytics and Monitoring | 分析和监控

### Google Analytics

1. **Create GA4 Property** | **创建GA4属性**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property for your domain

2. **Add to Next.js** | **添加到Next.js**
   ```javascript
   // app/layout.tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout() {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

### Vercel Analytics

1. **Enable Analytics** | **启用分析**
   - Go to project dashboard
   - Click "Analytics" tab
   - Enable Vercel Analytics

2. **Add to Project** | **添加到项目**
   ```bash
   pnpm add @vercel/analytics
   ```

## 🚨 Troubleshooting | 故障排除

### Common Issues | 常见问题

1. **Build Fails** | **构建失败**
   - Check ESLint errors
   - Verify all imports are correct
   - Ensure TypeScript types are properly defined

2. **Images Not Loading** | **图片未加载**
   - Verify image paths are correct
   - Check if images are in the `public` folder
   - Ensure proper Next.js Image component usage

3. **Environment Variables** | **环境变量**
   - Make sure variables are properly configured in Vercel
   - Use `NEXT_PUBLIC_` prefix for client-side variables

4. **404 Errors** | **404错误**
   - Check if all routes are properly configured
   - Verify dynamic routes are working correctly

### Support Resources | 支持资源

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Create issues in your repository for tracking
- **Community**: Stack Overflow, Discord, Reddit

---

**Deployment Complete!** | **部署完成！**

Your personal portfolio is now live and accessible to the world. Remember to:
- Keep your code updated
- Monitor performance metrics
- Regularly update content
- Maintain security best practices

您的个人作品集现在已经上线，全世界都可以访问。记住要：
- 保持代码更新
- 监控性能指标
- 定期更新内容
- 维护安全最佳实践