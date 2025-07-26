import React from 'react';

// FilterButtons 组件 - 用于显示和控制待办事项的过滤选项
// FilterButtons component - for displaying and controlling todo item filter options
const FilterButtons = ({ currentFilter, onFilterChange }) => {
  // 过滤选项配置数组 / Filter options configuration array
  const filterOptions = [
    { key: 'all', label: 'All' },        // 全部 / All
    { key: 'active', label: 'Active' },  // 未完成 / Active
    { key: 'completed', label: 'Completed' } // 已完成 / Completed
  ];

  return (
    <div className="flex gap-2 justify-center bg-white p-4 rounded-xl shadow-sm flex-wrap">
      {filterOptions.map(({ key, label }) => (
        <button 
          key={key}
          className={`px-4 py-2 border-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 ${
            currentFilter === key 
              ? 'bg-blue-500 text-white border-blue-500' // 选中状态样式 / Selected state style
              : 'bg-white border-gray-300 hover:border-blue-500 hover:text-blue-500' // 未选中状态样式 / Unselected state style
          }`}
          onClick={() => onFilterChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons; 