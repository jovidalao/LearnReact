// Main App component - Entry point for the Weather Dashboard
// 主应用组件 - 天气仪表板的入口点
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import { getCurrentWeather, formatWeatherData } from './services/weatherService';
import './App.css';

/**
 * Main App component that manages the weather dashboard state and functionality
 * 管理天气仪表板状态和功能的主应用组件
 */
function App() {
  // State management using useState hook (Week 4 concept)
  // 使用useState钩子进行状态管理（第4周概念）
  
  // Weather data state - stores the current weather information
  // 天气数据状态 - 存储当前天气信息
  const [weatherData, setWeatherData] = useState(null);
  
  // Loading state - indicates if API request is in progress
  // 加载状态 - 指示API请求是否正在进行
  const [isLoading, setIsLoading] = useState(false);
  
  // Error state - stores error messages when API calls fail
  // 错误状态 - 当API调用失败时存储错误消息
  const [error, setError] = useState(null);
  
  // Current city state - stores the currently searched city
  // 当前城市状态 - 存储当前搜索的城市
  const [currentCity, setCurrentCity] = useState('');

  /**
   * Function to fetch weather data for a given city
   * 获取指定城市天气数据的函数
   * @param {string} city - The city name to search for / 要搜索的城市名称
   */
  const fetchWeatherData = async (city) => {
    // Set loading state to true when starting the API request
    // 开始API请求时将加载状态设置为true
    setIsLoading(true);
    
    // Clear any previous errors
    // 清除之前的错误
    setError(null);
    
    try {
      // Call the weather service to get current weather data
      // 调用天气服务获取当前天气数据
      const rawWeatherData = await getCurrentWeather(city);
      
      // Format the raw API data for display
      // 格式化原始API数据以便显示
      const formattedData = formatWeatherData(rawWeatherData);
      
      // Update the weather data state with the formatted data
      // 使用格式化的数据更新天气数据状态
      setWeatherData(formattedData);
      
      // Store the current city name
      // 存储当前城市名称
      setCurrentCity(city);
      
    } catch (err) {
      // Handle different types of errors
      // 处理不同类型的错误
      console.error('Error fetching weather:', err);
      
      // Set appropriate error message based on the error type
      // 根据错误类型设置适当的错误消息
      if (err.message.includes('404')) {
        setError('City not found');
      } else if (err.message.includes('401')) {
        setError('Invalid API key');
      } else if (err.message.includes('Failed to fetch')) {
        setError('Network error');
      } else {
        setError('API error');
      }
      
      // Clear weather data on error
      // 出错时清除天气数据
      setWeatherData(null);
      
    } finally {
      // Always set loading to false when the request completes
      // 请求完成时总是将加载状态设置为false
      setIsLoading(false);
    }
  };

  /**
   * Handle search form submission
   * 处理搜索表单提交
   * @param {string} city - The city name from the search input / 来自搜索输入的城市名称
   */
  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  /**
   * Handle retry button click in error message
   * 处理错误消息中的重试按钮点击
   */
  const handleRetry = () => {
    if (currentCity) {
      fetchWeatherData(currentCity);
    }
  };

  /**
   * useEffect hook to load default weather data on app startup
   * useEffect钩子在应用启动时加载默认天气数据
   */
  useEffect(() => {
    // Load weather for a default city when the app starts
    // 应用启动时加载默认城市的天气
    fetchWeatherData('Beijing');
  }, []); // Empty dependency array means this runs once on mount / 空依赖数组表示这在挂载时运行一次

  return (
    <div className="app">
      {/* App header with title */}
      {/* 带有标题的应用头部 */}
      <header className="app-header">
        <h1 className="app-title">
          Weather Dashboard
          <span className="app-title-chinese">天气仪表板</span>
        </h1>
        <p className="app-subtitle">
          Get current weather information for any city
          <br />
          <span className="app-subtitle-chinese">获取任何城市的当前天气信息</span>
        </p>
      </header>

      {/* Main content area */}
      {/* 主要内容区域 */}
      <main className="app-main">
        {/* Search bar component */}
        {/* 搜索栏组件 */}
        <SearchBar 
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        {/* Conditional rendering based on application state */}
        {/* 根据应用状态进行条件渲染 */}
        {isLoading && (
          <LoadingSpinner />
        )}

        {error && !isLoading && (
          <ErrorMessage 
            message={error}
            onRetry={handleRetry}
          />
        )}

        {weatherData && !isLoading && !error && (
          <WeatherCard weatherData={weatherData} />
        )}

        {/* Show welcome message if no data, loading, or error */}
        {/* 如果没有数据、加载或错误，显示欢迎消息 */}
        {!weatherData && !isLoading && !error && (
          <div className="welcome-message">
            <p className="welcome-text">
              Enter a city name to get started
              <br />
              <span className="welcome-text-chinese">输入城市名称开始使用</span>
            </p>
          </div>
        )}
      </main>

      {/* App footer */}
      {/* 应用页脚 */}
      <footer className="app-footer">
        <p className="footer-text">
          Weather data provided by OpenWeatherMap API
          <br />
          <span className="footer-text-chinese">天气数据由OpenWeatherMap API提供</span>
        </p>
      </footer>
    </div>
  );
}

export default App;