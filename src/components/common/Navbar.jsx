import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router"; // Router v7 অনুযায়ী
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaSearch, FaHome, FaTasks, FaInfoCircle, FaEnvelope, FaUserCircle, FaCog } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  // স্ক্রল করলে নেভবার স্টাইল পরিবর্তন করার জন্য
  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaTasks /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-full border shadow-2xl ${
        isScrolling 
        ? "w-[95%] lg:w-[1400px] bg-white/70 dark:bg-[#060010]/70 backdrop-blur-xl border-white/20" 
        : "w-[90%] lg:w-[1300px] bg-white dark:bg-[#0b041a] border-transparent"
      }`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/src/assets/logo.png" alt="MicroEarn" className="h-10 w-auto object-contain" />
        </Link>

        {/* Navigation Links (Center) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path 
                ? "text-brand" 
                : "text-gray-600 dark:text-gray-300 hover:text-brand"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side: Search, Theme, Auth */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative group hidden lg:block">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="pl-10 pr-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 border-none focus:ring-2 focus:ring-brand w-40 focus:w-60 transition-all outline-none text-sm"
            />
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-brand hover:text-white transition-all cursor-pointer"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Auth Buttons */}
          <div className="flex gap-2 ml-2">
            <Link to="/login" className="px-5 py-2 text-sm font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              Login
            </Link>
            <Link to="/register" className="px-5 py-2 text-sm font-semibold bg-brand text-white rounded-full shadow-lg shadow-brand/30 hover:scale-105 transition-transform active:scale-95">
              Join Free
            </Link>
          </div>
        </div>
      </nav>


      {/* --- MOBILE BOTTOM DOCK (LinkedIn Style) --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
        <div className="flex items-center justify-around bg-white/80 dark:bg-[#060010]/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-3 rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
          
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`flex flex-col items-center gap-1 transition-all ${
                location.pathname === link.path ? "text-brand scale-110" : "text-gray-500"
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">{link.name}</span>
            </Link>
          ))}

          {/* Mobile Profile/Settings Toggle */}
          <button 
             onClick={toggleTheme}
             className="flex flex-col items-center gap-1 text-gray-500"
          >
            <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-yellow-400 text-black' : 'bg-brand text-white'}`}>
               {theme === "dark" ? <FaSun /> : <FaMoon />}
            </div>
            <span className="text-[10px] font-bold uppercase">Mode</span>
          </button>
        </div>
      </div>

      {/* Mobile Top Header (Only for Logo) */}
      <div className="md:hidden fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent z-50">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          <div className="flex gap-3">
             <Link to="/login" className="text-xs font-bold uppercase tracking-widest text-brand">Login</Link>
          </div>
      </div>
    </>
  );
}