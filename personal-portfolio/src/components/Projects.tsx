"use client";

// 导入必要的依赖 / Import necessary dependencies
import { useState } from "react";
import Image from "next/image";

// 项目数据接口 / Project data interface
interface Project {
  id: number;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo: string;
  features: string[];
  featuresZh: string[];
}

// 项目数据 / Projects data
// 这些是Week 8之前应该完成的项目
// These are projects that should be completed before Week 8
const projects: Project[] = [
  {
    id: 1,
    title: "Todo List Application",
    titleZh: "待办事项应用",
    description: "A fully functional todo app with CRUD operations, local storage, and filtering capabilities.",
    descriptionZh: "具有CRUD操作、本地存储和过滤功能的完整待办事项应用。",
    image: "/project-todo.jpg",
    technologies: ["React", "TypeScript", "CSS3", "Local Storage"],
    category: "Web App",
    github: "https://github.com/yourusername/todo-app",
    demo: "https://your-todo-app.vercel.app",
    features: [
      "Add, edit, and delete tasks",
      "Mark tasks as complete",
      "Filter by status",
      "Persistent storage",
      "Responsive design"
    ],
    featuresZh: [
      "添加、编辑和删除任务",
      "标记任务为完成",
      "按状态过滤",
      "持久化存储",
      "响应式设计"
    ]
  },
  {
    id: 2,
    title: "Weather Dashboard",
    titleZh: "天气仪表板",
    description: "A weather app that displays current weather and forecasts with beautiful UI and API integration.",
    descriptionZh: "显示当前天气和预报的天气应用，具有美观的界面和API集成。",
    image: "/project-weather.jpg",
    technologies: ["React", "JavaScript", "CSS3", "Weather API"],
    category: "Web App",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://your-weather-app.vercel.app",
    features: [
      "Current weather display",
      "7-day forecast",
      "Location search",
      "Responsive design",
      "Error handling"
    ],
    featuresZh: [
      "当前天气显示",
      "7天预报",
      "位置搜索",
      "响应式设计",
      "错误处理"
    ]
  },
  {
    id: 3,
    title: "Calculator App",
    titleZh: "计算器应用",
    description: "A fully functional calculator with advanced operations, memory functions, and calculation history.",
    descriptionZh: "具有高级运算、内存功能和计算历史的完整计算器。",
    image: "/project-calculator.jpg",
    technologies: ["React", "TypeScript", "CSS3", "Math.js"],
    category: "Utility",
    github: "https://github.com/yourusername/calculator-app",
    demo: "https://your-calculator-app.vercel.app",
    features: [
      "Basic arithmetic operations",
      "Scientific functions",
      "Memory operations",
      "Calculation history",
      "Keyboard support"
    ],
    featuresZh: [
      "基本算术运算",
      "科学函数",
      "内存操作",
      "计算历史",
      "键盘支持"
    ]
  },
  {
    id: 4,
    title: "Personal Portfolio",
    titleZh: "个人作品集",
    description: "This responsive portfolio website showcasing my projects, skills, and contact information.",
    descriptionZh: "这个响应式作品集网站展示了我的项目、技能和联系信息。",
    image: "/project-portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Portfolio",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
    features: [
      "Responsive design",
      "Project showcase",
      "Contact form",
      "SEO optimization",
      "Smooth animations"
    ],
    featuresZh: [
      "响应式设计",
      "项目展示",
      "联系表单",
      "SEO优化",
      "流畅动画"
    ]
  }
];

// 项目分类 / Project categories
const categories = ["All", "Web App", "Utility", "Portfolio"];

// 项目组件 / Projects component
// 展示项目作品集
// Shows project portfolio
export function Projects() {
  // 当前选择的分类 / Currently selected category
  const [activeCategory, setActiveCategory] = useState("All");
  // 当前选择的项目 / Currently selected project
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 过滤项目 / Filter projects
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
            <span className="text-gray-500 text-lg block mt-2">精选项目</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some projects I&apos;ve worked on during my learning journey
            <br />
            <span className="text-gray-500">这些是我在学习过程中完成的一些项目</span>
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
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 项目网格 / Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 项目图片 / Project image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // 图片加载失败时的占位符 / Placeholder when image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* 图片加载失败时的占位符 / Placeholder when image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="text-sm font-medium">{project.title}</div>
                  </div>
                </div>
                
                {/* 项目分类标签 / Project category tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* 项目内容 / Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* 技术栈 / Technology stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 项目链接 / Project links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                    <span className="text-sm">Demo</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                    </svg>
                    <span className="text-sm">Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 项目详情模态框 / Project details modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-500">{selectedProject.titleZh}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {selectedProject.descriptionZh}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                          • {feature}
                          <span className="text-gray-500 ml-2">
                            ({selectedProject.featuresZh[index]})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}