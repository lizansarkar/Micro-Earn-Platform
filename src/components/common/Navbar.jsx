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
    { name: "Support", path: "/support", icon: <FaEnvelope /> },
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
          <div className="flex gap-2 ml-2 items-center">
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-bold hover:text-brand transition-colors"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="group relative flex items-center justify-center gap-2.5 px-5 py-2 overflow-hidden rounded-full bg-brand text-white font-bold text-[15px] border-[3px] border-white/30 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-white/60 active:scale-95 outline-none"
            >
              {/* Button Text */}
              <span className="relative z-10">Join Free</span>

              {/* SVG Icon - Hover করলে ডানে সরবে */}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>

              {/* Shine Effect - Framer Motion দিয়ে এনিমেটেড */}
              <motion.div
                initial={{ left: "-100px" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeOut",
                  repeatDelay: 1,
                }}
                className="absolute top-0 w-[100px] h-full opacity-60 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%)",
                }}
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
          to="/register"
          className="group relative flex items-center justify-center gap-2.5 px-5 py-2 overflow-hidden rounded-full bg-brand text-white font-bold text-[15px] border-[3px] border-white/30 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-white/60 active:scale-95 outline-none"
        >
          {/* Button Text */}
          <span className="relative z-10">Join Free</span>

          {/* SVG Icon - Hover করলে ডানে সরবে */}
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>

          {/* Shine Effect - Framer Motion দিয়ে এনিমেটেড */}
          <motion.div
            initial={{ left: "-100px" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeOut",
              repeatDelay: 1,
            }}
            className="absolute top-0 w-[100px] h-full opacity-60 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%)",
            }}
          />
        </Link>
      </div>
    </>
  );
}
