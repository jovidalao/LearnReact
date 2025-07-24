// Loading spinner component for showing loading states
// 用于显示加载状态的加载旋转器组件
import React from 'react';
import './LoadingSpinner.css';

/**
 * LoadingSpinner component displays a loading animation with bilingual text
 * LoadingSpinner组件显示带有双语文本的加载动画
 * @param {string} message - Optional custom loading message / 可选的自定义加载消息
 */
const LoadingSpinner = ({ message }) => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      
      <div className="loading-text">
        <p className="loading-text-en">
          {message || 'Loading weather data...'}
        </p>
        <p className="loading-text-zh">
          {message ? '正在加载...' : '正在加载天气数据...'}
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;