import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMoon,
  FaSun,
  FaSearch,
  FaHome,
  FaTasks,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  // স্ক্রল ডিটেকশন
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

  // বাটন শাইন ইফেক্ট ভেরিয়েন্ট
  const shineVariant = {
    initial: { x: "-100%" },
    animate: { x: "200%" },
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between px-8 py-3 transition-all duration-500 rounded-full border shadow-2xl ${
          isScrolling
            ? "w-[95%] lg:w-[1400px] glass-effect shadow-brand/10"
            : "w-[90%] lg:w-[1300px] bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="MicroEarn"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links (Center) */}
        <div className="absolute left-1/3 -translate-x-1/2 flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-bold tracking-wide transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-brand"
                  : "opacity-70 hover:opacity-100 hover:text-brand"
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
              className="pl-10 pr-4 py-1.5 rounded-full outline-none text-sm transition-all duration-500 ease-in-out w-40  focus:w-64 focus:ring-1 focus:ring-brand bg-black/5 border border-black/10 text-gray-800 dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-brand hover:text-white transition-all cursor-pointer border border-transparent dark:border-white/5"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Auth Buttons */}
          <div className="flex gap-2 ml-2">
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-bold hover:text-brand transition-colors"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="relative overflow-hidden px-6 py-2 text-sm font-bold bg-brand text-white rounded-full shadow-lg hover:scale-105 transition-all active:scale-95"
            >
              <span className="relative z-10">Join Free</span>
              <motion.div
                variants={shineVariant}
                initial="initial"
                animate="animate"
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  repeatDelay: 1,
                }}
                className="absolute top-0 left-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] z-0"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM DOCK --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[420px]">
        <div className="flex items-center justify-around glass-effect p-3 rounded-[2rem] shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center gap-1 transition-all ${
                location.pathname === link.path
                  ? "text-brand scale-110"
                  : "opacity-60"
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                {link.name}
              </span>
            </Link>
          ))}

          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={`p-2 rounded-full shadow-md ${
                theme === "dark"
                  ? "bg-yellow-400 text-black"
                  : "bg-brand text-white"
              }`}
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </div>
            <span className="text-[10px] font-black uppercase opacity-60">
              Mode
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 w-full p-4 flex justify-between items-center glass-effect !bg-transparent !border-none z-50">
        <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
        <Link
          to="/login"
          className="relative overflow-hidden px-5 py-1.5 text-xs font-black uppercase bg-brand text-white rounded-lg"
        >
          <span className="relative z-10">Login</span>
          <motion.div
            variants={shineVariant}
            initial="initial"
            animate="animate"
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-white/30 skew-x-[-30deg]"
          />
        </Link>
      </div>
    </>
  );
}
