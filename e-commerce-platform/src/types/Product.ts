/**
 * 产品数据类型定义
 * Product data type definitions
 */

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
  tags: string[];
}

/**
 * 产品分类类型
 * Product category type
 */
export type ProductCategory = 'electronics' | 'clothing' | 'home' | 'books' | 'sports';

/**
 * 排序选项类型
 * Sort option type
 */
export type SortOption = 'name' | 'price-low' | 'price-high' | 'rating';

/**
 * 筛选器类型
 * Filter type
 */
export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  searchTerm?: string;
}