/**
 * 产品卡片组件
 * Product card component
 * 
 * 显示单个产品的信息，包括图片、名称、价格和添加到购物车按钮
 * Displays information for a single product including image, name, price, and add to cart button
 */

import React from 'react';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

/**
 * 产品卡片组件
 * Product card component
 */
export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  /**
   * 处理添加到购物车
   * Handle add to cart
   */
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  /**
   * 渲染评分星星
   * Render rating stars
   */
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // 完整星星 / Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    
    // 半星 / Half star
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    // 空星星 / Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };
  
  return (
    <div className="product-card">
      {/* 产品图片 / Product image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.stock < 10 && (
          <div className="low-stock-badge">
            库存不足 / Low Stock
          </div>
        )}
      </div>
      
      {/* 产品信息 / Product information */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        {/* 评分 / Rating */}
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-value">({product.rating})</span>
        </div>
        
        {/* 价格 / Price */}
        <div className="product-price">
          <span className="price">${product.price}</span>
          <span className="currency">USD</span>
        </div>
        
        {/* 标签 / Tags */}
        <div className="product-tags">
          {product.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
        
        {/* 添加到购物车按钮 / Add to cart button */}
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? (
            '缺货 / Out of Stock'
          ) : (
            '加入购物车 / Add to Cart'
          )}
        </button>
        
        {/* 库存信息 / Stock information */}
        <div className="stock-info">
          库存：{product.stock} 件 / Stock: {product.stock} items
        </div>
      </div>
    </div>
  );
}