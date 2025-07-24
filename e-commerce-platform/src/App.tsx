/**
 * 主应用组件
 * Main application component
 * 
 * 这是应用的根组件，负责页面路由、状态管理和整体布局
 * This is the root component of the app, responsible for page routing, state management, and overall layout
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { mockProducts } from './data/mockProducts';
import './App.css';

/**
 * 页面类型定义
 * Page type definition
 */
type Page = 'home' | 'products' | 'cart' | 'checkout';

/**
 * 主应用组件
 * Main application component
 */
function App() {
  // 当前页面状态 / Current page state
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  /**
   * 处理页面变化
   * Handle page change
   */
  const handlePageChange = (page: string) => {
    setCurrentPage(page as Page);
  };
  
  /**
   * 渲染页面内容
   * Render page content
   */
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="home-page">
            <div className="hero-section">
              <h1>欢迎来到 E-Shop / Welcome to E-Shop</h1>
              <p>
                发现最新的产品，享受便捷的购物体验
                <br />
                Discover the latest products and enjoy a convenient shopping experience
              </p>
              <button 
                className="cta-button"
                onClick={() => handlePageChange('products')}
              >
                开始购物 / Start Shopping
              </button>
            </div>
            
            <div className="features-section">
              <h2>为什么选择我们？ / Why Choose Us?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🚚</div>
                  <h3>免费送货 / Free Shipping</h3>
                  <p>订单满$100免费送货 / Free shipping on orders over $100</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⚡</div>
                  <h3>快速配送 / Fast Delivery</h3>
                  <p>5-7个工作日内送达 / Delivery within 5-7 business days</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3>安全支付 / Secure Payment</h3>
                  <p>SSL加密，支付安全有保障 / SSL encrypted, secure payment guaranteed</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h3>精选商品 / Curated Products</h3>
                  <p>精心挑选的高品质商品 / Carefully selected high-quality products</p>
                </div>
              </div>
            </div>
            
            <div className="popular-products-section">
              <h2>热门商品 / Popular Products</h2>
              <div className="popular-products-grid">
                {mockProducts.slice(0, 4).map(product => (
                  <div key={product.id} className="popular-product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className="price">${product.price}</p>
                    <div className="rating">
                      {'★'.repeat(Math.floor(product.rating))}
                      <span>({product.rating})</span>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                className="view-all-button"
                onClick={() => handlePageChange('products')}
              >
                查看全部商品 / View All Products
              </button>
            </div>
          </div>
        );
      
      case 'products':
        return <ProductList products={mockProducts} />;
      
      case 'cart':
        return (
          <div className="cart-page">
            <Cart />
            <div className="cart-actions">
              <button 
                className="continue-shopping-btn"
                onClick={() => handlePageChange('products')}
              >
                继续购物 / Continue Shopping
              </button>
              <button 
                className="checkout-btn"
                onClick={() => handlePageChange('checkout')}
              >
                去结账 / Proceed to Checkout
              </button>
            </div>
          </div>
        );
      
      case 'checkout':
        return <Checkout />;
      
      default:
        return null;
    }
  };
  
  return (
    <CartProvider>
      <div className="app">
        {/* 头部导航 / Header navigation */}
        <Header 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />
        
        {/* 主要内容区域 / Main content area */}
        <main className="main-content">
          {renderPageContent()}
        </main>
        
        {/* 页脚 / Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>关于我们 / About Us</h4>
              <p>
                E-Shop 是一个现代化的电子商务平台，致力于为用户提供最优质的购物体验。
                <br />
                E-Shop is a modern e-commerce platform dedicated to providing users with the best shopping experience.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>客户服务 / Customer Service</h4>
              <ul>
                <li>联系我们 / Contact Us</li>
                <li>常见问题 / FAQ</li>
                <li>退换政策 / Return Policy</li>
                <li>配送信息 / Shipping Info</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>关注我们 / Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>
              © 2024 E-Shop. All rights reserved. | 
              使用 React + TypeScript + Vite 构建 / Built with React + TypeScript + Vite
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;