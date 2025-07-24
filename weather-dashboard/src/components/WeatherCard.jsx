// Main weather card component displaying current weather information
// 显示当前天气信息的主要天气卡片组件
import React from 'react';
import './WeatherCard.css';

/**
 * WeatherCard component displays the main weather information
 * WeatherCard组件显示主要天气信息
 * @param {Object} weatherData - Formatted weather data / 格式化的天气数据
 */
const WeatherCard = ({ weatherData }) => {
  // If no weather data is provided, don't render anything
  // 如果没有提供天气数据，不渲染任何内容
  if (!weatherData) return null;

  /**
   * Get weather icon URL from OpenWeatherMap
   * 从OpenWeatherMap获取天气图标URL
   * @param {string} iconCode - Weather icon code / 天气图标代码
   * @returns {string} Icon URL / 图标URL
   */
  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  /**
   * Capitalize first letter of each word
   * 每个单词的首字母大写
   * @param {string} str - Input string / 输入字符串
   * @returns {string} Capitalized string / 首字母大写的字符串
   */
  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="weather-card">
      {/* Header section with city name and country */}
      {/* 带有城市名称和国家的头部部分 */}
      <div className="weather-header">
        <h2 className="city-name">
          {weatherData.city}, {weatherData.country}
        </h2>
        <p className="weather-description">
          {capitalize(weatherData.description)}
        </p>
      </div>

      {/* Main weather information */}
      {/* 主要天气信息 */}
      <div className="weather-main">
        <div className="temperature-section">
          <img
            src={getWeatherIconUrl(weatherData.icon)}
            alt={weatherData.description}
            className="weather-icon"
          />
          <div className="temperature-info">
            <span className="temperature">{weatherData.temperature}°C</span>
            <span className="feels-like">
              Feels like {weatherData.feelsLike}°C
              <br />
              <span className="feels-like-chinese">体感温度 {weatherData.feelsLike}°C</span>
            </span>
          </div>
        </div>
      </div>

      {/* Additional weather details */}
      {/* 额外的天气详细信息 */}
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">
            Humidity / 湿度
          </span>
          <span className="detail-value">{weatherData.humidity}%</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">
            Wind Speed / 风速
          </span>
          <span className="detail-value">{weatherData.windSpeed} m/s</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">
            Pressure / 气压
          </span>
          <span className="detail-value">{weatherData.pressure} hPa</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">
            Visibility / 能见度
          </span>
          <span className="detail-value">{weatherData.visibility} km</span>
        </div>
      </div>

      {/* Timestamp */}
      {/* 时间戳 */}
      <div className="weather-timestamp">
        <span className="timestamp-text">
          Last updated: {new Date().toLocaleString()}
          <br />
          <span className="timestamp-chinese">
            最后更新：{new Date().toLocaleString('zh-CN')}
          </span>
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;