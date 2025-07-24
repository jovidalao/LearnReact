/**
 * 模拟产品数据
 * Mock product data for e-commerce platform
 */

import { Product } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    description: '最新款iPhone，配备A17 Pro芯片和钛金属设计 / Latest iPhone with A17 Pro chip and titanium design',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    rating: 4.8,
    stock: 50,
    tags: ['smartphone', 'apple', 'premium']
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 1199,
    description: '轻薄便携的笔记本电脑，搭载M2芯片 / Lightweight laptop with M2 chip',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    rating: 4.9,
    stock: 30,
    tags: ['laptop', 'apple', 'ultrabook']
  },
  {
    id: 3,
    name: 'Nike Air Max 270',
    price: 150,
    description: '舒适的跑步鞋，具有出色的缓震性能 / Comfortable running shoes with excellent cushioning',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
    rating: 4.5,
    stock: 100,
    tags: ['shoes', 'running', 'nike']
  },
  {
    id: 4,
    name: 'Samsung Galaxy S24',
    price: 799,
    description: '高性能Android手机，配备先进的摄像系统 / High-performance Android phone with advanced camera system',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    rating: 4.6,
    stock: 75,
    tags: ['smartphone', 'samsung', 'android']
  },
  {
    id: 5,
    name: 'Levi\'s 501 Jeans',
    price: 89,
    description: '经典款牛仔裤，永不过时的设计 / Classic jeans with timeless design',
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    rating: 4.3,
    stock: 200,
    tags: ['jeans', 'casual', 'denim']
  },
  {
    id: 6,
    name: 'Ikea Desk Lamp',
    price: 25,
    description: '简约现代的台灯，适合办公和学习 / Modern minimalist desk lamp for office and study',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.2,
    stock: 150,
    tags: ['lamp', 'furniture', 'office']
  },
  {
    id: 7,
    name: 'The Great Gatsby',
    price: 12,
    description: '经典美国文学作品，菲茨杰拉德的代表作 / Classic American literature by F. Scott Fitzgerald',
    category: 'books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    rating: 4.7,
    stock: 80,
    tags: ['fiction', 'classic', 'literature']
  },
  {
    id: 8,
    name: 'Yoga Mat',
    price: 35,
    description: '高品质瑜伽垫，提供excellent抓地力和舒适性 / High-quality yoga mat with excellent grip and comfort',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    rating: 4.4,
    stock: 120,
    tags: ['yoga', 'fitness', 'exercise']
  },
  {
    id: 9,
    name: 'Wireless Headphones',
    price: 299,
    description: '高品质无线耳机，具有主动降噪功能 / High-quality wireless headphones with active noise cancellation',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    rating: 4.6,
    stock: 60,
    tags: ['headphones', 'wireless', 'audio']
  },
  {
    id: 10,
    name: 'Cotton T-Shirt',
    price: 25,
    description: '100%纯棉T恤，柔软舒适 / 100% cotton t-shirt, soft and comfortable',
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    rating: 4.1,
    stock: 300,
    tags: ['t-shirt', 'cotton', 'casual']
  }
];