/**
 * 产品筛选器组件
 * Product filter component
 * 
 * 提供产品筛选功能，包括分类、价格范围、评分等
 * Provides product filtering functionality including category, price range, rating, etc.
 */

import React from 'react';
import { ProductCategory, ProductFilters, SortOption } from '../types/Product';
import './ProductFilter.css';

interface ProductFilterProps {
  filters: ProductFilters;
  sortBy: SortOption;
  onFiltersChange: (filters: ProductFilters) => void;
  onSortChange: (sortBy: SortOption) => void;
}

/**
 * 产品筛选器组件
 * Product filter component
 */
export function ProductFilter({ 
  filters, 
  sortBy, 
  onFiltersChange, 
  onSortChange 
}: ProductFilterProps) {
  
  /**
   * 处理搜索输入变化
   * Handle search input change
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      searchTerm: e.target.value
    });
  };
  
  /**
   * 处理分类变化
   * Handle category change
   */
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as ProductCategory;
    onFiltersChange({
      ...filters,
      category: category || undefined
    });
  };
  
  /**
   * 处理最低价格变化
   * Handle minimum price change
   */
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minPrice = parseFloat(e.target.value) || undefined;
    onFiltersChange({
      ...filters,
      minPrice
    });
  };
  
  /**
   * 处理最高价格变化
   * Handle maximum price change
   */
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxPrice = parseFloat(e.target.value) || undefined;
    onFiltersChange({
      ...filters,
      maxPrice
    });
  };
  
  /**
   * 处理最低评分变化
   * Handle minimum rating change
   */
  const handleMinRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const minRating = parseFloat(e.target.value) || undefined;
    onFiltersChange({
      ...filters,
      minRating
    });
  };
  
  /**
   * 处理排序变化
   * Handle sort change
   */
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value as SortOption);
  };
  
  /**
   * 清除所有筛选器
   * Clear all filters
   */
  const clearFilters = () => {
    onFiltersChange({});
  };
  
  return (
    <div className="product-filter">
      <h3 className="filter-title">筛选和排序 / Filter & Sort</h3>
      
      {/* 搜索框 / Search box */}
      <div className="filter-group">
        <label className="filter-label">
          搜索产品 / Search Products
        </label>
        <input
          type="text"
          className="filter-input"
          placeholder="输入产品名称... / Enter product name..."
          value={filters.searchTerm || ''}
          onChange={handleSearchChange}
        />
      </div>
      
      {/* 分类筛选 / Category filter */}
      <div className="filter-group">
        <label className="filter-label">
          分类 / Category
        </label>
        <select
          className="filter-select"
          value={filters.category || ''}
          onChange={handleCategoryChange}
        >
          <option value="">所有分类 / All Categories</option>
          <option value="electronics">电子产品 / Electronics</option>
          <option value="clothing">服装 / Clothing</option>
          <option value="home">家居 / Home</option>
          <option value="books">图书 / Books</option>
          <option value="sports">运动 / Sports</option>
        </select>
      </div>
      
      {/* 价格范围 / Price range */}
      <div className="filter-group">
        <label className="filter-label">
          价格范围 / Price Range
        </label>
        <div className="price-range">
          <input
            type="number"
            className="filter-input price-input"
            placeholder="最低价 / Min"
            value={filters.minPrice || ''}
            onChange={handleMinPriceChange}
            min="0"
          />
          <span className="price-separator">-</span>
          <input
            type="number"
            className="filter-input price-input"
            placeholder="最高价 / Max"
            value={filters.maxPrice || ''}
            onChange={handleMaxPriceChange}
            min="0"
          />
        </div>
      </div>
      
      {/* 评分筛选 / Rating filter */}
      <div className="filter-group">
        <label className="filter-label">
          最低评分 / Minimum Rating
        </label>
        <select
          className="filter-select"
          value={filters.minRating || ''}
          onChange={handleMinRatingChange}
        >
          <option value="">所有评分 / All Ratings</option>
          <option value="4">4+ 星 / 4+ Stars</option>
          <option value="3">3+ 星 / 3+ Stars</option>
          <option value="2">2+ 星 / 2+ Stars</option>
          <option value="1">1+ 星 / 1+ Stars</option>
        </select>
      </div>
      
      {/* 排序选项 / Sort options */}
      <div className="filter-group">
        <label className="filter-label">
          排序方式 / Sort By
        </label>
        <select
          className="filter-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="name">名称 / Name</option>
          <option value="price-low">价格：低到高 / Price: Low to High</option>
          <option value="price-high">价格：高到低 / Price: High to Low</option>
          <option value="rating">评分 / Rating</option>
        </select>
      </div>
      
      {/* 清除筛选器按钮 / Clear filters button */}
      <button 
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        清除筛选 / Clear Filters
      </button>
    </div>
  );
}