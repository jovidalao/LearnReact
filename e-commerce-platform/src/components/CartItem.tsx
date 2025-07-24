/**
 * 购物车商品项组件
 * Cart item component
 * 
 * 显示购物车中的单个商品，包括数量调整和删除功能
 * Displays individual cart item with quantity adjustment and removal functionality
 */

import React from 'react';
import { CartItem as CartItemType } from '../types/Cart';
import { useCart } from '../context/CartContext';
import './CartItem.css';

interface CartItemProps {
  item: CartItemType;
}

/**
 * 购物车商品项组件
 * Cart item component
 */
export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  
  /**
   * 处理数量变化
   * Handle quantity change
   */
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0 && newQuantity <= item.product.stock) {
      updateQuantity(item.product.id, newQuantity);
    }
  };
  
  /**
   * 增加数量
   * Increase quantity
   */
  const handleIncrement = () => {
    if (item.quantity < item.product.stock) {
      updateQuantity(item.product.id, item.quantity + 1);
    }
  };
  
  /**
   * 减少数量
   * Decrease quantity
   */
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    }
  };
  
  /**
   * 处理删除商品
   * Handle remove item
   */
  const handleRemove = () => {
    removeFromCart(item.product.id);
  };
  
  // 计算小计 / Calculate subtotal
  const subtotal = item.product.price * item.quantity;
  
  return (
    <div className="cart-item">
      {/* 商品图片 / Product image */}
      <div className="cart-item-image">
        <img src={item.product.image} alt={item.product.name} />
      </div>
      
      {/* 商品信息 / Product info */}
      <div className="cart-item-info">
        <h4 className="cart-item-name">{item.product.name}</h4>
        <p className="cart-item-description">{item.product.description}</p>
        
        {/* 商品标签 / Product tags */}
        <div className="cart-item-tags">
          {item.product.tags.map(tag => (
            <span key={tag} className="cart-item-tag">#{tag}</span>
          ))}
        </div>
        
        {/* 库存状态 / Stock status */}
        <div className="stock-status">
          {item.product.stock < 10 && (
            <span className="low-stock">
              ⚠️ 库存不足 / Low stock ({item.product.stock} 剩余 / remaining)
            </span>
          )}
        </div>
      </div>
      
      {/* 数量控制 / Quantity control */}
      <div className="cart-item-quantity">
        <label className="quantity-label">
          数量 / Quantity
        </label>
        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            className="quantity-input"
            value={item.quantity}
            onChange={handleQuantityChange}
            min="1"
            max={item.product.stock}
          />
          <button 
            className="quantity-btn"
            onClick={handleIncrement}
            disabled={item.quantity >= item.product.stock}
          >
            +
          </button>
        </div>
      </div>
      
      {/* 价格信息 / Price info */}
      <div className="cart-item-price">
        <div className="unit-price">
          <span className="price-label">单价 / Unit Price:</span>
          <span className="price-value">${item.product.price}</span>
        </div>
        <div className="subtotal">
          <span className="subtotal-label">小计 / Subtotal:</span>
          <span className="subtotal-value">${subtotal.toFixed(2)}</span>
        </div>
      </div>
      
      {/* 删除按钮 / Remove button */}
      <div className="cart-item-actions">
        <button 
          className="remove-btn"
          onClick={handleRemove}
          title="删除商品 / Remove item"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}