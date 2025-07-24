/**
 * Home Page Component
 * 主页组件
 * 
 * This is the landing page of the application that provides
 * information about the task management system and navigation.
 * 
 * 这是应用程序的登录页面，提供有关任务管理系统的信息和导航。
 */

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        {/* 标题 */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Task Management System
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            任务管理系统
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A comprehensive solution for managing tasks, collaborating with teams, and tracking progress efficiently.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            一个用于管理任务、与团队协作和高效跟踪进度的综合解决方案。
          </p>
        </header>

        {/* Features Section */}
        {/* 功能部分 */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Task Management / 任务管理
            </h3>
            <p className="text-gray-600">
              Create, organize, and track tasks with priorities, due dates, and status updates.
            </p>
            <p className="text-gray-600 mt-2">
              创建、组织和跟踪具有优先级、截止日期和状态更新的任务。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Team Collaboration / 团队协作
            </h3>
            <p className="text-gray-600">
              Work together with team members, assign tasks, and communicate effectively.
            </p>
            <p className="text-gray-600 mt-2">
              与团队成员合作，分配任务，并有效沟通。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Progress Tracking / 进度跟踪
            </h3>
            <p className="text-gray-600">
              Monitor project progress with visual indicators and comprehensive analytics.
            </p>
            <p className="text-gray-600 mt-2">
              使用视觉指示器和综合分析监控项目进度。
            </p>
          </div>
        </section>

        {/* Call to Action */}
        {/* 行动号召 */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            准备开始了吗？
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Sign Up / 注册
            </Link>
            <Link
              href="/auth/signin"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors inline-block"
            >
              Sign In / 登录
            </Link>
          </div>
        </section>

        {/* Technology Stack */}
        {/* 技术栈 */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Built with Modern Technology
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            使用现代技术构建
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-blue-600">Next.js</span>
              </div>
              <p className="text-sm text-gray-600">React Framework</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-purple-600">Prisma</span>
              </div>
              <p className="text-sm text-gray-600">Database ORM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-green-600">Auth</span>
              </div>
              <p className="text-sm text-gray-600">NextAuth.js</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-blue-400">CSS</span>
              </div>
              <p className="text-sm text-gray-600">Tailwind CSS</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
