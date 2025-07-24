/**
 * 产品列表组件
 * Product list component
 * 
 * 显示产品网格并处理筛选和排序逻辑
 * Displays product grid and handles filtering and sorting logic
 */

import React, { useState, useMemo } from 'react';
import { Product, ProductFilters, SortOption } from '../types/Product';
import { ProductCard } from './ProductCard';
import { ProductFilter } from './ProductFilter';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
}

/**
 * 产品列表组件
 * Product list component
 */
export function ProductList({ products }: ProductListProps) {
  // 筛选器状态 / Filter state
  const [filters, setFilters] = useState<ProductFilters>({});
  
  // 排序状态 / Sort state
  const [sortBy, setSortBy] = useState<SortOption>('name');
  
  /**
   * 筛选和排序产品
   * Filter and sort products
   */
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];
    
    // 应用搜索筛选 / Apply search filter
    if (filters.searchTerm) {
      const searchTerm = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    // 应用分类筛选 / Apply category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    
    // 应用价格范围筛选 / Apply price range filter
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= filters.minPrice!);
    }
    
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice!);
    }
    
    // 应用评分筛选 / Apply rating filter
    if (filters.minRating !== undefined) {
      filtered = filtered.filter(product => product.rating >= filters.minRating!);
    }
    
    // 应用排序 / Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [products, filters, sortBy]);
  
  /**
   * 处理筛选器变化
   * Handle filter changes
   */
  const handleFiltersChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };
  
  /**
   * 处理排序变化
   * Handle sort changes
   */
  const handleSortChange = (newSortBy: SortOption) => {
    setSortBy(newSortBy);
  };
  
  return (
    <div className="product-list-container">
      {/* 侧边栏筛选器 / Sidebar filter */}
      <div className="filter-sidebar">
        <ProductFilter
          filters={filters}
          sortBy={sortBy}
          onFiltersChange={handleFiltersChange}
          onSortChange={handleSortChange}
        />
      </div>
      
      {/* 主要内容区域 / Main content area */}
      <div className="product-list-main">
        {/* 结果统计 / Results summary */}
        <div className="results-summary">
          <h2>
            找到 {filteredAndSortedProducts.length} 个产品
            <br />
            <span className="results-subtitle">
              Found {filteredAndSortedProducts.length} products
            </span>
          </h2>
        </div>
        
        {/* 产品网格 / Product grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="product-grid">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* 空状态 / Empty state */
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>未找到匹配的产品</h3>
            <p>No products found matching your criteria</p>
            <button 
              className="reset-filters-btn"
              onClick={() => setFilters({})}
            >
              重置筛选器 / Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}