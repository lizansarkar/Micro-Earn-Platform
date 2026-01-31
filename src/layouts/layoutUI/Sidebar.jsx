import React from "react";
import { Link, NavLink, useNavigate } from "react-router"; // useNavigate যোগ করা হয়েছে
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CheckSquare,
  Wallet,
  Users,
  ShieldAlert,
  PlusCircle,
  LayoutList,
  LogOut,
  ArrowLeftRight,
  HeadphonesIcon,
} from "lucide-react";
import useAuth from "../../hooks/UseAuth";

const Sidebar = ({ setSidebarOpen }) => {
  const { logOut, userRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  // রোলের মেনু সেট
  const menuItems = {
    worker: [
      { name: "Dashboard", path: "/dashboard/worker", icon: <LayoutDashboard size={18} /> },
      { name: "My Submissions", path: "/dashboard/worker/my-submissions", icon: <CheckSquare size={18} /> },
      { name: "Withdrawals", path: "/dashboard/worker/withdraw", icon: <Wallet size={18} /> },
    ],
    buyer: [
      { name: "Dashboard", path: "/dashboard/buyer", icon: <LayoutDashboard size={18} /> },
      { name: "Create Task", path: "/dashboard/buyer/add-task", icon: <PlusCircle size={18} /> },
      { name: "Manage Tasks", path: "/dashboard/buyer/my-tasks", icon: <LayoutList size={18} /> },
      { name: "Get Credits", path: "/dashboard/buyer/purchase", icon: <ArrowLeftRight size={18} /> },
    ],
    admin: [
      { name: "Admin Stats", path: "/dashboard/admin", icon: <LayoutDashboard size={18} /> },
      { name: "Users Directory", path: "/dashboard/admin/users", icon: <Users size={18} /> },
      { name: "Verify Tasks", path: "/dashboard/admin/tasks", icon: <ShieldAlert size={18} /> },
    ],
  };

  const role = userRole?.toLowerCase() || "worker";
  const currentMenu = menuItems[role] || [];

  // লিঙ্ক স্টাইলস
  const activeLink = "bg-brand text-white shadow-lg shadow-brand/30 border-brand";
  const normalLink = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-brand dark:hover:text-white border-transparent";

  return (
    <div className="w-64 h-full bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-6 flex flex-col backdrop-blur-3xl shadow-xl dark:shadow-none transition-all duration-300">
      
      {/* ১. লোগো সেকশন */}
      <Link to="/" className="flex items-center mb-8 px-2">
        <img
          src="/src/assets/logo.png"
          alt="MicroEarn"
          className="h-10 w-auto object-contain"
        />
      </Link>

      {/* ২. নেভিগেশন লিংকস */}
      <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
        {currentMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path.split('/').length <= 3} // ড্যাশবোর্ড মেইন লিঙ্কের জন্য 'end' প্রপ
            onClick={() => setSidebarOpen && setSidebarOpen(false)}
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

      {/* ৩. নিচের অপশনগুলো (Logout & Help) */}
      <div className="mt-auto space-y-3 pt-4">
        {/* Support Card */}
        <div className="p-4 bg-brand/5 dark:bg-brand/10 rounded-3xl border border-brand/10">
          <div className="flex items-center gap-3 mb-2">
             <HeadphonesIcon size={14} className="text-brand"/>
             <span className="text-[10px] text-brand font-black uppercase">Support</span>
          </div>
          <p className="text-gray-400 text-[8px] uppercase tracking-tighter font-medium">
            Need any help with tasks? <br />
            Visit our 24/7 center.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;