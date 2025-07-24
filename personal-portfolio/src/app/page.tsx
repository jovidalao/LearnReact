// 导入必要的组件 / Import necessary components
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// 主页组件 / Home page component
// 这是作品集网站的主要入口点，展示所有重要部分
// This is the main entry point for the portfolio website, showcasing all important sections
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 页面头部导航 / Page header navigation */}
      <Header />
      
      {/* 主要内容区域 / Main content area */}
      <main>
        {/* 英雄区域 - 第一印象很重要 / Hero section - first impression is important */}
        <Hero />
        
        {/* 关于我部分 / About me section */}
        <About />
        
        {/* 技能展示 / Skills showcase */}
        <Skills />
        
        {/* 项目作品集 / Projects portfolio */}
        <Projects />
        
        {/* 联系表单 / Contact form */}
        <Contact />
      </main>
      
      {/* 页脚 / Footer */}
      <Footer />
    </div>
  );
}