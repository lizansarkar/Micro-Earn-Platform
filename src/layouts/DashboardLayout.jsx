import React, { useState } from "react";
import { Outlet } from "react-router";
import DashboardNav from "./layoutUI/DashboardNav";
import Sidebar from "./layoutUI/Sidebar";

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    /* পরিবর্তন এখানে: bg-white dark:bg-[#020008] এবং text-black dark:text-white */
    <div className="min-h-screen bg-slate-50 dark:bg-[#020008] text-slate-900 dark:text-white flex p-3 lg:p-5 gap-5 overflow-hidden font-sans transition-colors duration-500">
      
      {/* ১. সাইডবার */}
      <aside className={`
        fixed lg:relative z-50 h-[calc(100vh-40px)] 
        ${isSidebarOpen ? "left-3" : "-left-80 lg:left-0"} 
        transition-all duration-500 ease-in-out
      `}>
        <Sidebar setSidebarOpen={setSidebarOpen} />
      </aside>

      {/* ২. মেইন কন্টেন্ট এরিয়া */}
      <main className="flex-1 flex flex-col gap-5 w-full">
        <DashboardNav setSidebarOpen={setSidebarOpen} />

        {/* ৩. কন্টেন্ট ডিসপ্লে সেকশন - এখানেও ডার্ক মোড ক্লাস যোগ করা হয়েছে */}
        <section className="flex-1 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] p-6 lg:p-8 backdrop-blur-3xl overflow-y-auto shadow-sm dark:shadow-none">
          <Outlet />
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