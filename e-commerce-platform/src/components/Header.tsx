/**
 * 头部导航组件
 * Header navigation component
 * 
 * 包含网站标题、导航菜单、购物车图标和用户认证状态
 * Contains site title, navigation menu, cart icon, and user authentication status
 */

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

/**
 * 头部导航组件
 * Header navigation component
 */
export function Header({ currentPage, onPageChange }: HeaderProps) {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 模拟用户认证状态 / Mock user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '用户 / User', email: 'user@example.com' });
  
  /**
   * 处理菜单切换
   * Handle menu toggle
   */
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  /**
   * 处理页面切换
   * Handle page change
   */
  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };
  
  /**
   * 处理登录/登出
   * Handle login/logout
   */
  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  /**
   * 获取导航项类名
   * Get navigation item class name
   */
  const getNavItemClass = (page: string) => {
    return `nav-item ${currentPage === page ? 'active' : ''}`;
  };
  
  return (
    <header className="header">
      <div className="header-container">
        {/* 网站标题 / Site title */}
        <div className="header-logo">
          <h1 onClick={() => handlePageChange('home')}>
            🛍️ E-Shop
          </h1>
          <p className="logo-subtitle">
            购物平台 / Shopping Platform
          </p>
        </div>
        
        {/* 桌面导航菜单 / Desktop navigation menu */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className={getNavItemClass('home')}>
              <button onClick={() => handlePageChange('home')}>
                首页 / Home
              </button>
            </li>
            <li className={getNavItemClass('products')}>
              <button onClick={() => handlePageChange('products')}>
                商品 / Products
              </button>
            </li>
            <li className={getNavItemClass('cart')}>
              <button onClick={() => handlePageChange('cart')}>
                购物车 / Cart
                {getTotalItems() > 0 && (
                  <span className="cart-badge">{getTotalItems()}</span>
                )}
              </button>
            </li>
          </ul>
        </nav>
        
        {/* 用户认证区域 / User authentication area */}
        <div className="header-auth">
          {isLoggedIn ? (
            <div className="user-menu">
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
              </div>
              <button className="auth-btn logout" onClick={handleAuthToggle}>
                登出 / Logout
              </button>
            </div>
          ) : (
            <button className="auth-btn login" onClick={handleAuthToggle}>
              登录 / Login
            </button>
          )}
        </div>
        
        {/* 移动端菜单按钮 / Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      
      {/* 移动端导航菜单 / Mobile navigation menu */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className={getNavItemClass('home')}>
            <button onClick={() => handlePageChange('home')}>
              🏠 首页 / Home
            </button>
          </li>
          <li className={getNavItemClass('products')}>
            <button onClick={() => handlePageChange('products')}>
              📦 商品 / Products
            </button>
          </li>
          <li className={getNavItemClass('cart')}>
            <button onClick={() => handlePageChange('cart')}>
              🛒 购物车 / Cart
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </button>
          </li>
          <li className="auth-item">
            {isLoggedIn ? (
              <div className="mobile-user-menu">
                <div className="mobile-user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-email">{user.email}</span>
                </div>
                <button className="auth-btn logout" onClick={handleAuthToggle}>
                  登出 / Logout
                </button>
              </div>
            ) : (
              <button className="auth-btn login" onClick={handleAuthToggle}>
                👤 登录 / Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}