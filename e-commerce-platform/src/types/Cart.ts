/**
 * 购物车相关类型定义
 * Shopping cart related type definitions
 */

import { Product } from './Product';

/**
 * 购物车项目接口
 * Shopping cart item interface
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

/**
 * 购物车上下文类型
 * Shopping cart context type
 */
export interface CartContextType {
  // 购物车中的商品 / Items in cart
  items: CartItem[];
  
  // 添加商品到购物车 / Add item to cart
  addToCart: (product: Product, quantity?: number) => void;
  
  // 从购物车移除商品 / Remove item from cart
  removeFromCart: (productId: number) => void;
  
  // 更新商品数量 / Update item quantity
  updateQuantity: (productId: number, quantity: number) => void;
  
  // 清空购物车 / Clear cart
  clearCart: () => void;
  
  // 获取购物车总数量 / Get total items count
  getTotalItems: () => number;
  
  // 获取购物车总价格 / Get total price
  getTotalPrice: () => number;
}