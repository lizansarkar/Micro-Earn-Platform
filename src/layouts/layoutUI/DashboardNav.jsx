import React, { useState, useEffect } from "react";
import { Menu, Coins, Sun, Moon, LogOut, Settings, Home, LayoutDashboard, Zap } from "lucide-react";
import useAuth from "../../hooks/UseAuth";
import useTheme from "../../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, NavLink } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DashboardNav = ({ setSidebarOpen }) => {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [dbUser, setDbUser] = useState(null);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // MongoDB থেকে ইউজারের ডাটা লোড করা
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/users/${user.email}`)
        .then(res => setDbUser(res.data))
        .catch(err => console.error("Error fetching user:", err));
    }
  }, [user?.email, axiosSecure]);

  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };

  // নেভিগেশন লিংক স্টাইল (daisyUI ও থিম ফ্রেন্ডলি)
  const navLinkStyle = "flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer";

  return (
    <header className="w-full dark:bg-neutral/20 border border-gray-100 dark:border-white/10 shadow-xl dark:shadow-none rounded-[2rem] px-4 lg:px-6 py-3 flex items-center justify-between backdrop-blur-md relative z-[100] transition-colors duration-300">
      
      {/* ১. বাম দিকের সেকশন: কুইক লিংকস */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarOpen(true)} 
          className="lg:hidden p-2 hover:bg-base-content/10 rounded-xl text-base-content/60 cursor-pointer transition-colors"
        >
          <Menu size={24} />
        </button>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={({isActive}) => `${navLinkStyle} ${isActive ? 'shadow-lg shadow-primary/20' : 'hover:text-primary hover:bg-base-content/5'}`}>
            <Home size={14}/> Home
          </NavLink>
          <NavLink to="/dashboard" end className={({isActive}) => `${navLinkStyle} ${isActive ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' : 'hover:text-primary hover:bg-base-content/5'}`}>
            <LayoutDashboard size={14}/> Stats
          </NavLink>
        </nav>
      </div>

      {/* ২. ডান পাশের সেকশন: Coin, Theme, User */}
      <div className="flex items-center gap-3 lg:gap-6">
        
        {/* কয়েন ডিসপ্লে (HUD) */}
        <div className="border border-primary/20 px-3 lg:px-5 py-2 rounded-2xl flex items-center gap-2 lg:gap-3 select-none">
          <div className="bg-primary p-1.5 rounded-lg shadow-sm">
            <Coins className="" size={14} />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xs lg:text-sm leading-none">{dbUser?.coin || 0}</span>
            <span className="text-[8px] uppercase font-bold tracking-wider">Balance</span>
          </div>
        </div>

        {/* থিম টগল বাটন */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-base-content/5 hover:bg-primary hover:text-primary-content transition-all border border-base-content/10 cursor-pointer group flex items-center justify-center shadow-sm active:scale-95"
          title="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun size={18} className="group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon size={18} className="group-hover:-rotate-12 transition-transform" />
          )}
        </button>

        {/* প্রোফাইল ড্রপডাউন */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 p-1 pr-3 rounded-2xl hover:bg-base-content/5 transition-all border border-transparent hover:border-base-content/10 cursor-pointer active:scale-95"
          >
            <div className="relative">
              <img 
                src={user?.photoURL || "https://i.ibb.co/mR79YyZ/user.png"} 
                className="w-10 h-10 rounded-full border-2 border-primary/30 object-cover shadow-md" 
                alt="Profile"
              />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-success border-2 border-base-100 rounded-full"></span>
            </div>
            
            <div className="hidden md:flex flex-col text-left">
              <span className="font-black text-xs uppercase tracking-tighter leading-none">
                {dbUser?.name?.split(' ')[0] || user?.displayName?.split(' ')[0] || "User"}
              </span>
              <span className="text-primary text-[9px] font-bold uppercase tracking-[2px] mt-1 opacity-80">
                {dbUser?.role || 'Member'}
              </span>
            </div>
          </button>

          {/* ড্রপডাউন মেনু */}
          <AnimatePresence>
            {isOpen && (
              <>
                <div className="fixed inset-0 z-[110] cursor-default" onClick={() => setIsOpen(false)}></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-64 bg-base-200 border border-base-content/10 rounded-[1.5rem] shadow-2xl p-3 z-[120] backdrop-blur-2xl overflow-hidden"
                >
                  {/* ইউজার কার্ড */}
                  <div className="px-4 py-4 border-b border-base-content/5 mb-2 bg-base-300/50 rounded-2xl">
                    <p className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest italic">{dbUser?.role} Profile</p>
                    <p className="text-sm font-black text-base-content truncate mt-1">{dbUser?.name || user?.displayName}</p>
                    <p className="text-[10px] text-primary font-bold truncate">{user?.email}</p>
                  </div>

                  <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-base-content/70 hover:text-primary transition-all text-xs font-bold uppercase cursor-pointer group">
                      <Zap size={16} className="text-primary group-hover:scale-110 transition-transform" /> My Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 text-base-content/70 hover:text-primary transition-all text-xs font-bold uppercase cursor-pointer group">
                      <Settings size={16} className="text-primary group-hover:rotate-45 transition-transform" /> Settings
                    </button>
                  </div>

                  <div className="h-[1px] bg-base-content/5 my-2 mx-2"></div>

                  {/* লগআউট বাটন */}
                  <button 
                    onClick={handleLogOut}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-error/5 hover:bg-error/20 text-error transition-all text-xs font-black uppercase tracking-[2px] cursor-pointer"
                  >
                    <LogOut size={16} /> Logout Securely
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;