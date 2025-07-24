// Search bar component for entering city names
// 用于输入城市名称的搜索栏组件
import React, { useState } from 'react';
import './SearchBar.css';

/**
 * SearchBar component allows users to input city names for weather search
 * SearchBar组件允许用户输入城市名称以搜索天气
 * @param {Function} onSearch - Callback function when search is performed / 执行搜索时的回调函数
 * @param {boolean} isLoading - Loading state to disable search during API calls / 加载状态，在API调用期间禁用搜索
 */
const SearchBar = ({ onSearch, isLoading }) => {
  // State to manage the input value
  // 管理输入值的状态
  const [city, setCity] = useState('');

  /**
   * Handle form submission
   * 处理表单提交
   * @param {Event} e - Form submit event / 表单提交事件
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission / 阻止默认表单提交
    
    // Only search if there's a city name and not currently loading
    // 只有在有城市名称且当前未加载时才搜索
    if (city.trim() && !isLoading) {
      onSearch(city.trim()); // Call the search function with trimmed city name / 使用修剪后的城市名称调用搜索函数
    }
  };

  /**
   * Handle input change
   * 处理输入变化
   * @param {Event} e - Input change event / 输入变化事件
   */
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name... / 输入城市名称..."
            className="search-input"
            disabled={isLoading} // Disable input during loading / 在加载期间禁用输入
          />
          <button
            type="submit"
            className={`search-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || !city.trim()} // Disable if loading or empty input / 如果正在加载或输入为空则禁用
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              <span className="search-icon">🔍</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;