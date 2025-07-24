"use client";

// 关于我组件 / About me component
// 展示个人背景、经历和兴趣
// Shows personal background, experience, and interests
export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
            <span className="text-gray-500 text-lg block mt-2">关于我</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 个人介绍文本 / Personal introduction text */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="leading-relaxed">
                Hello! I&apos;m a passionate web developer with a love for creating 
                beautiful and functional digital experiences. My journey into 
                programming started during my studies, and I&apos;ve been hooked ever since.
              </p>
              <p className="leading-relaxed text-gray-600">
                你好！我是一名充满热情的网页开发者，热爱创造美观且实用的数字体验。
                我的编程之旅始于学习期间，从那时起我就深深着迷于此。
              </p>
              
              <p className="leading-relaxed">
                I specialize in React, Next.js, and modern JavaScript, always 
                staying up-to-date with the latest web technologies. I believe 
                in writing clean, maintainable code and creating user-centered designs.
              </p>
              <p className="leading-relaxed text-gray-600">
                我专注于React、Next.js和现代JavaScript，始终跟上最新的网络技术。
                我相信编写清洁、可维护的代码并创建以用户为中心的设计。
              </p>
            </div>

            {/* 个人特质 / Personal qualities */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Problem Solver</h3>
                <p className="text-sm text-blue-700">
                  I enjoy tackling complex challenges and finding elegant solutions.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Lifelong Learner</h3>
                <p className="text-sm text-green-700">
                  Always eager to learn new technologies and improve my skills.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Team Player</h3>
                <p className="text-sm text-purple-700">
                  I thrive in collaborative environments and enjoy mentoring others.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Detail Oriented</h3>
                <p className="text-sm text-orange-700">
                  I pay attention to the small details that make a big difference.
                </p>
              </div>
            </div>
          </div>

          {/* 技术统计和兴趣 / Technical stats and interests */}
          <div className="space-y-8">
            {/* 经验统计 / Experience stats */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Facts
                <span className="text-gray-500 text-sm block">快速了解</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Years Learning</span>
                  <span className="font-semibold text-blue-600">2+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="font-semibold text-blue-600">10+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Technologies Used</span>
                  <span className="font-semibold text-blue-600">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coffee Consumed</span>
                  <span className="font-semibold text-blue-600">∞</span>
                </div>
              </div>
            </div>

            {/* 兴趣爱好 / Interests and hobbies */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                When I&apos;m Not Coding
                <span className="text-gray-500 text-sm block">业余时间</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📚</span>
                  <span className="text-gray-700">Reading</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎵</span>
                  <span className="text-gray-700">Music</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎮</span>
                  <span className="text-gray-700">Gaming</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌱</span>
                  <span className="text-gray-700">Gardening</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📸</span>
                  <span className="text-gray-700">Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏃</span>
                  <span className="text-gray-700">Running</span>
                </div>
              </div>
            </div>

            {/* 下载简历按钮 / Download resume button */}
            <div className="text-center">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}