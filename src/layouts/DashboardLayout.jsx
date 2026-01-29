import React, { useState } from "react";
import { Outlet } from "react-router";
import DashboardNav from "./layoutUI/DashboardNav";
import Sidebar from "./layoutUI/Sidebar";

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020008] text-white flex p-3 lg:p-5 gap-5 overflow-hidden font-sans">
      
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
        {/* টপ ন্যাভবার */}
        <DashboardNav setSidebarOpen={setSidebarOpen} />

        {/* ৩. কন্টেন্ট ডিসপ্লে সেকশন */}
        <section className="flex-1 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 lg:p-8 backdrop-blur-3xl overflow-y-auto">
          <Outlet /> {/* Outlet থাকবে সেকশনের ভেতরে */}
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