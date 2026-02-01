import React, { useState } from "react";
import { Outlet } from "react-router";
import DashboardNav from "./layoutUI/DashboardNav";
import Sidebar from "./layoutUI/Sidebar";

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-slate-50 dark:bg-[#020008] text-slate-900 dark:text-white flex p-3 lg:p-5 gap-5 overflow-hidden font-sans transition-colors duration-500">
      
      {/* ১. সাইডবার: এটি ফিক্সড থাকবে */}
      <aside className={`
        fixed lg:relative z-50 h-[calc(100vh-40px)] 
        w-72 /* সাইডবারের একটি ফিক্সড উইডথ দিন */
        ${isSidebarOpen ? "left-3" : "-left-80 lg:left-0"} 
        transition-all duration-500 ease-in-out
      `}>
        <Sidebar setSidebarOpen={setSidebarOpen} />
      </aside>

      {/* ২. মেইন এরিয়া: এটি পুরো স্ক্রিন জুড়ে থাকবে কিন্তু স্ক্রল হবে না */}
      <main className="flex-1 flex flex-col h-[calc(100vh-40px)] gap-5 min-w-0">
        
        {/* Navbar: এটি উপরে ফিক্সড থাকবে */}
        <header className="flex-shrink-0">
          <DashboardNav setSidebarOpen={setSidebarOpen} />
        </header>

        {/* ৩. কন্টেন্ট ডিসপ্লে সেকশন: শুধুমাত্র এই অংশটি স্ক্রল হবে */}
        <section className="flex-1 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] p-6 lg:p-8 backdrop-blur-3xl overflow-y-auto shadow-sm dark:shadow-none scrollbar-hide">
          <div className="max-w-7xl mx-auto"> {/* কন্টেন্টকে সেন্টারে রাখার জন্য */}
            <Outlet />
          </div>
        </section>
      </main>

      {/* মোবাইল ওভারলে */}
      {isSidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </div>
  );
}