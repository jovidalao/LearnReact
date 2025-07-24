"use client";

// 导入必要的依赖 / Import necessary dependencies
import { useState } from "react";
import Link from "next/link";

// 导航项目数据 / Navigation items data
const navigationItems = [
  { href: "#home", label: "Home", labelZh: "首页" },
  { href: "#about", label: "About", labelZh: "关于" },
  { href: "#skills", label: "Skills", labelZh: "技能" },
  { href: "#projects", label: "Projects", labelZh: "项目" },
  { href: "#contact", label: "Contact", labelZh: "联系" },
];

// 头部导航组件 / Header navigation component
// 提供网站导航功能，包含响应式设计
// Provides website navigation functionality with responsive design
export function Header() {
  // 控制移动端菜单显示状态 / Control mobile menu display state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 切换菜单状态 / Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 处理导航点击，平滑滚动到目标区域 / Handle navigation click, smooth scroll to target section
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 品牌Logo / Brand Logo */}
          <Link href="#home" className="text-xl font-bold text-gray-900">
            Portfolio
          </Link>

          {/* 桌面导航 / Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 移动端菜单按钮 / Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端菜单 / Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md border-t">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-2 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}