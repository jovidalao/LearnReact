// Error message component for displaying error states
// 用于显示错误状态的错误消息组件
import React from 'react';
import './ErrorMessage.css';

/**
 * ErrorMessage component displays error messages with bilingual support
 * ErrorMessage组件显示带有双语支持的错误消息
 * @param {string} message - Error message to display / 要显示的错误消息
 * @param {Function} onRetry - Optional retry callback function / 可选的重试回调函数
 */
const ErrorMessage = ({ message, onRetry }) => {
  /**
   * Get bilingual error message based on the error type
   * 根据错误类型获取双语错误消息
   * @param {string} errorMessage - Original error message / 原始错误消息
   * @returns {Object} Bilingual error message / 双语错误消息
   */
  const getBilingualMessage = (errorMessage) => {
    // Common error message mappings
    // 常见错误消息映射
    const errorMappings = {
      'City not found': {
        en: 'City not found. Please check the spelling and try again.',
        zh: '未找到城市。请检查拼写并重试。'
      },
      'Network error': {
        en: 'Network error. Please check your internet connection.',
        zh: '网络错误。请检查您的互联网连接。'
      },
      'API error': {
        en: 'Weather service temporarily unavailable. Please try again later.',
        zh: '天气服务暂时不可用。请稍后重试。'
      },
      'Invalid API key': {
        en: 'Invalid API key. Please check your configuration.',
        zh: '无效的API密钥。请检查您的配置。'
      }
    };

    // Check if error message contains known error types
    // 检查错误消息是否包含已知的错误类型
    for (const [key, value] of Object.entries(errorMappings)) {
      if (errorMessage.toLowerCase().includes(key.toLowerCase())) {
        return value;
      }
    }

    // Default error message if no specific mapping found
    // 如果没有找到特定映射，则使用默认错误消息
    return {
      en: 'An error occurred while fetching weather data. Please try again.',
      zh: '获取天气数据时发生错误。请重试。'
    };
  };

  const bilingualMessage = getBilingualMessage(message);

  return (
    <div className="error-message">
      <div className="error-icon">⚠️</div>
      <div className="error-content">
        <h3 className="error-title">
          Error / 错误
        </h3>
        <p className="error-text-en">{bilingualMessage.en}</p>
        <p className="error-text-zh">{bilingualMessage.zh}</p>
        
        {/* Show retry button if onRetry function is provided */}
        {/* 如果提供了onRetry函数，显示重试按钮 */}
        {onRetry && (
          <button 
            className="retry-button"
            onClick={onRetry}
            aria-label="Retry / 重试"
          >
            <span className="retry-icon">🔄</span>
            <span className="retry-text">
              Try Again / 重试
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;