/**
 * 购物车上下文组件
 * Shopping cart context component
 * 
 * 这个文件实现了购物车的全局状态管理，使用React Context API
 * This file implements global state management for the shopping cart using React Context API
 */

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, CartContextType } from '../types/Cart';
import { Product } from '../types/Product';

// 创建购物车上下文 / Create cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 购物车动作类型 / Cart action types
type CartAction = 
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' };

// 购物车状态类型 / Cart state type
interface CartState {
  items: CartItem[];
}

// 初始状态 / Initial state
const initialState: CartState = {
  items: []
};

/**
 * 购物车减速器函数
 * Cart reducer function
 * 
 * 处理购物车状态的所有更新逻辑
 * Handles all cart state update logic
 */
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      
      // 检查商品是否已存在于购物车中 / Check if product already exists in cart
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id
      );
      
      if (existingItemIndex >= 0) {
        // 如果商品已存在，增加数量 / If product exists, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        return { ...state, items: updatedItems };
      } else {
        // 如果商品不存在，添加新项目 / If product doesn't exist, add new item
        return {
          ...state,
          items: [...state.items, { product, quantity }]
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const { productId } = action.payload;
      
      // 过滤掉指定ID的商品 / Filter out product with specified ID
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== productId)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        // 如果数量为0或负数，移除商品 / If quantity is 0 or negative, remove product
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== productId)
        };
      }
      
      // 更新商品数量 / Update product quantity
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        )
      };
    }
    
    case 'CLEAR_CART':
      // 清空购物车 / Clear cart
      return { ...state, items: [] };
    
    default:
      return state;
  }
}

/**
 * 购物车提供者组件属性
 * Cart provider component props
 */
interface CartProviderProps {
  children: ReactNode;
}

/**
 * 购物车提供者组件
 * Cart provider component
 * 
 * 为整个应用提供购物车状态和操作方法
 * Provides cart state and methods to the entire application
 */
export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // 添加商品到购物车 / Add item to cart
  const addToCart = (product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };
  
  // 从购物车移除商品 / Remove item from cart
  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };
  
  // 更新商品数量 / Update item quantity
  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };
  
  // 清空购物车 / Clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  // 获取购物车总数量 / Get total items count
  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };
  
  // 获取购物车总价格 / Get total price
  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };
  
  // 上下文值 / Context value
  const value: CartContextType = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * 使用购物车钩子
 * Use cart hook
 * 
 * 自定义钩子用于访问购物车上下文
 * Custom hook to access cart context
 */
export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
}