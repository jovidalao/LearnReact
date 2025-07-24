"use client";

// 导入必要的依赖 / Import necessary dependencies
import { useState } from "react";

// 技能数据接口 / Skills data interface
interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
  descriptionZh: string;
}

// 技能数据 / Skills data
const skills: Skill[] = [
  // 前端技能 / Frontend skills
  {
    name: "React",
    level: 85,
    category: "Frontend",
    icon: "⚛️",
    description: "Building interactive user interfaces with hooks and modern patterns",
    descriptionZh: "使用钩子和现代模式构建交互式用户界面"
  },
  {
    name: "Next.js",
    level: 80,
    category: "Frontend",
    icon: "🔺",
    description: "Full-stack React framework with SSR and routing",
    descriptionZh: "具有SSR和路由的全栈React框架"
  },
  {
    name: "TypeScript",
    level: 75,
    category: "Frontend",
    icon: "🔷",
    description: "Type-safe JavaScript for better development experience",
    descriptionZh: "类型安全的JavaScript，提供更好的开发体验"
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend",
    icon: "🎨",
    description: "Utility-first CSS framework for rapid UI development",
    descriptionZh: "实用优先的CSS框架，用于快速UI开发"
  },
  {
    name: "JavaScript ES6+",
    level: 85,
    category: "Programming",
    icon: "🟨",
    description: "Modern JavaScript features and best practices",
    descriptionZh: "现代JavaScript特性和最佳实践"
  },
  {
    name: "HTML5",
    level: 95,
    category: "Frontend",
    icon: "🌐",
    description: "Semantic markup and accessibility best practices",
    descriptionZh: "语义化标记和无障碍访问最佳实践"
  },
  {
    name: "CSS3",
    level: 90,
    category: "Frontend",
    icon: "🎨",
    description: "Responsive design, animations, and modern layouts",
    descriptionZh: "响应式设计、动画和现代布局"
  },
  // 工具技能 / Tools skills
  {
    name: "Git",
    level: 80,
    category: "Tools",
    icon: "🔀",
    description: "Version control and collaborative development",
    descriptionZh: "版本控制和协作开发"
  },
  {
    name: "VS Code",
    level: 90,
    category: "Tools",
    icon: "💻",
    description: "Efficient coding with extensions and shortcuts",
    descriptionZh: "通过扩展和快捷键高效编码"
  },
  {
    name: "npm/pnpm",
    level: 85,
    category: "Tools",
    icon: "📦",
    description: "Package management and dependency handling",
    descriptionZh: "包管理和依赖处理"
  },
  // 其他技能 / Other skills
  {
    name: "Responsive Design",
    level: 90,
    category: "Design",
    icon: "📱",
    description: "Mobile-first design and cross-device compatibility",
    descriptionZh: "移动优先设计和跨设备兼容性"
  },
  {
    name: "API Integration",
    level: 75,
    category: "Backend",
    icon: "🔌",
    description: "RESTful APIs and data fetching strategies",
    descriptionZh: "RESTful API和数据获取策略"
  }
];

// 技能分类 / Skill categories
const categories = ["All", "Frontend", "Programming", "Tools", "Design", "Backend"];

// 技能组件 / Skills component
// 展示技术技能和熟练程度
// Shows technical skills and proficiency levels
export function Skills() {
  // 当前选择的分类 / Currently selected category
  const [activeCategory, setActiveCategory] = useState("All");

  // 过滤技能 / Filter skills
  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
            <span className="text-gray-500 text-lg block mt-2">技能与技术</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I&apos;ve been working with and continuously learning
            <br />
            <span className="text-gray-500">这些是我一直在使用并持续学习的技术</span>
          </p>
        </div>

        {/* 分类筛选 / Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 技能网格 / Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 技能头部 / Skill header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>

              {/* 技能描述 / Skill description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                {skill.descriptionZh}
              </p>

              {/* 技能等级进度条 / Skill level progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Proficiency</span>
                  <span className="text-blue-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 学习进度说明 / Learning progress explanation */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-blue-800">Proficient (80-100%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-blue-800">Intermediate (60-79%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <span className="text-sm text-blue-800">Learning (40-59%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}