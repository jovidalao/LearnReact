// vite.config.js
// Vite 配置文件 / Vite config file
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // 使用 React 插件 / Use React plugin
  // 你可以在这里添加更多 Vite 配置 / Add more Vite config here if needed
}); 