/**
 * 购物车组件
 * Shopping cart component
 * 
 * 显示购物车中的商品，提供数量调整和删除功能
 * Displays cart items with quantity adjustment and removal functionality
 */

import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import './Cart.css';

/**
 * 购物车组件
 * Shopping cart component
 */
export function Cart() {
  const { items, getTotalItems, getTotalPrice, clearCart } = useCart();
  
  /**
   * 处理清空购物车
   * Handle clear cart
   */
  const handleClearCart = () => {
    if (window.confirm('确定要清空购物车吗？ / Are you sure you want to clear the cart?')) {
      clearCart();
    }
  };
  
  // 如果购物车为空 / If cart is empty
  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-cart-icon">🛒</div>
        <h3>购物车为空</h3>
        <p>Your cart is empty</p>
        <p className="empty-cart-subtitle">
          浏览我们的产品，开始购物吧！
          <br />
          Browse our products and start shopping!
        </p>
      </div>
    );
  }
  
  return (
    <div className="cart">
      {/* 购物车头部 / Cart header */}
      <div className="cart-header">
        <h2>购物车 / Shopping Cart</h2>
        <div className="cart-summary">
          <span className="item-count">
            {getTotalItems()} 件商品 / {getTotalItems()} items
          </span>
          <button 
            className="clear-cart-btn"
            onClick={handleClearCart}
          >
            清空购物车 / Clear Cart
          </button>
        </div>
      </div>
      
      {/* 购物车商品列表 / Cart items list */}
      <div className="cart-items">
        {items.map(item => (
          <CartItem 
            key={item.product.id} 
            item={item} 
          />
        ))}
      </div>
      
      {/* 购物车底部总计 / Cart footer total */}
      <div className="cart-footer">
        <div className="cart-total">
          <div className="total-row">
            <span className="total-label">小计 / Subtotal:</span>
            <span className="total-amount">${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="total-row">
            <span className="total-label">运费 / Shipping:</span>
            <span className="total-amount">
              {getTotalPrice() > 100 ? '免费 / Free' : '$9.99'}
            </span>
          </div>
          <div className="total-row total-final">
            <span className="total-label">总计 / Total:</span>
            <span className="total-amount">
              ${(getTotalPrice() + (getTotalPrice() > 100 ? 0 : 9.99)).toFixed(2)}
            </span>
          </div>
        </div>
        
        <div className="cart-actions">
          <button className="checkout-btn">
            结账 / Checkout
          </button>
          <p className="shipping-note">
            {getTotalPrice() > 100 ? (
              <>
                🎉 恭喜！您已享受免费送货
                <br />
                🎉 Congratulations! You qualify for free shipping
              </>
            ) : (
              <>
                再消费 ${(100 - getTotalPrice()).toFixed(2)} 即可享受免费送货
                <br />
                Spend ${(100 - getTotalPrice()).toFixed(2)} more for free shipping
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}