import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, CheckSquare, Wallet, History, 
  Users, ShieldAlert, PlusCircle, LayoutList, LogOut, ArrowLeftRight 
} from "lucide-react";
import useAuth from "../../hooks/UseAuth";

const Sidebar = ({ setSidebarOpen }) => {
  const { logOut, userRole } = useAuth(); 

  // ৩টি রোলের জন্য মেনু সেট (Professional Labels)
  const menuItems = {
    worker: [
      { name: "Dashboard", path: "/dashboard/worker", icon: <LayoutDashboard size={18}/> },
      { name: "My Submissions", path: "/dashboard/worker/submissions", icon: <CheckSquare size={18}/> },
      { name: "Withdrawals", path: "/dashboard/worker/withdraw", icon: <Wallet size={18}/> },
    ],
    buyer: [
      { name: "Dashboard", path: "/dashboard/buyer", icon: <LayoutDashboard size={18}/> },
      { name: "Create Task", path: "/dashboard/buyer/add-task", icon: <PlusCircle size={18}/> },
      { name: "Manage Tasks", path: "/dashboard/buyer/my-tasks", icon: <LayoutList size={18}/> },
      { name: "Get Credits", path: "/dashboard/buyer/purchase", icon: <ArrowLeftRight size={18}/> },
    ],
    admin: [
      { name: "Admin Stats", path: "/dashboard/admin", icon: <LayoutDashboard size={18}/> },
      { name: "Users Directory", path: "/dashboard/admin/users", icon: <Users size={18}/> },
      { name: "Verify Tasks", path: "/dashboard/admin/tasks", icon: <ShieldAlert size={18}/> },
    ],
  };

  const role = userRole?.toLowerCase() || "worker"; // Default safety
  const currentMenu = menuItems[role] || [];

  // লিঙ্ক স্টাইলস (থিম ফ্রেন্ডলি)
  const activeLink = "bg-brand text-white shadow-lg shadow-brand/30 border-brand";
  const normalLink = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-brand dark:hover:text-white border-transparent";

  return (
    <div className="w-64 h-full bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-6 flex flex-col backdrop-blur-3xl shadow-xl dark:shadow-none transition-all duration-300">
      
      {/* ১. লোগো সেকশন */}
      <div className="mb-10 px-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/40">
            <span className="text-white font-black text-xl">M</span>
          </div>
          <h2 className="text-xl font-black tracking-tighter text-gray-900 dark:text-white">
            Micro<span className="text-brand">Earn</span>
          </h2>
        </div>
        <p className="text-[9px] font-black uppercase tracking-[3px] text-gray-400 dark:text-white/20 mt-2 ml-1">
          {role} portal
        </p>
      </div>

      {/* ২. নেভিগেশন লিংকস */}
      <nav className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
        {currentMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) => `
              group flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 
              font-bold text-[11px] uppercase tracking-widest border
              ${isActive ? activeLink : normalLink}
            `}
          >
            <span className="transition-transform group-hover:scale-110 duration-300">
              {item.icon}
            </span> 
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* ৩. ফুটোর সেকশন (Logout) */}
      <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5">
        <button 
          onClick={logOut}
          className="group flex items-center gap-4 px-5 py-4 w-full text-gray-400 hover:text-red-500 hover:bg-red-500/5 transition-all duration-300 rounded-2xl font-bold text-[11px] uppercase tracking-widest cursor-pointer"
        >
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          Logout System
        </button>
      </div>

      {/* ডেকোরেশন এলিমেন্ট (ঐচ্ছিক) */}
      <div className="mt-4 p-4 bg-brand/5 dark:bg-brand/10 rounded-3xl border border-brand/10">
        <p className="text-[10px] text-brand font-bold text-center leading-tight">
          Need help? <br />
          <span className="text-gray-400 text-[8px] uppercase tracking-tighter font-medium">Visit Support Center</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;