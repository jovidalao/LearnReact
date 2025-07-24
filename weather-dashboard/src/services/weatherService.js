// Weather API service for fetching weather data
// 用于获取天气数据的天气API服务

// Note: You'll need to get a free API key from OpenWeatherMap
// 注意：您需要从OpenWeatherMap获取免费的API密钥
// Visit: https://openweathermap.org/api
// 访问：https://openweathermap.org/api

const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key / 替换为您的实际API密钥
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetches current weather data for a given city
 * 获取指定城市的当前天气数据
 * @param {string} city - The city name / 城市名称
 * @returns {Promise<Object>} Weather data object / 天气数据对象
 */
export const getCurrentWeather = async (city) => {
  try {
    // Construct the API URL with city name, API key, and metric units
    // 构建包含城市名称、API密钥和公制单位的API URL
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    // Make the API request
    // 发出API请求
    const response = await fetch(url);
    
    // Check if the response is successful
    // 检查响应是否成功
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Parse and return the JSON data
    // 解析并返回JSON数据
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error for debugging
    // 记录错误以供调试
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

/**
 * Fetches 5-day weather forecast for a given city
 * 获取指定城市的5天天气预报
 * @param {string} city - The city name / 城市名称
 * @returns {Promise<Object>} Forecast data object / 预报数据对象
 */
export const getWeatherForecast = async (city) => {
  try {
    const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

/**
 * Formats weather data for display
 * 格式化天气数据用于显示
 * @param {Object} weatherData - Raw weather data from API / 来自API的原始天气数据
 * @returns {Object} Formatted weather data / 格式化的天气数据
 */
export const formatWeatherData = (weatherData) => {
  return {
    city: weatherData.name,
    country: weatherData.sys.country,
    temperature: Math.round(weatherData.main.temp),
    description: weatherData.weather[0].description,
    icon: weatherData.weather[0].icon,
    humidity: weatherData.main.humidity,
    windSpeed: weatherData.wind.speed,
    pressure: weatherData.main.pressure,
    feelsLike: Math.round(weatherData.main.feels_like),
    visibility: weatherData.visibility / 1000, // Convert to kilometers / 转换为公里
  };
};