import React from 'react'
import { Outlet, NavLink, useLocation, Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShieldAlt, FaCheckCircle } from 'react-icons/fa'

export default function AuthLayout() {
  const location = useLocation();

  // ১. সম্পূর্ণ ব্যাকগ্রাউন্ড গ্র্যাডিয়েন্ট স্টাইল
  const fullBackgroundStyle = {
    background: 'linear-gradient(to bottom right, #060010, #130a40, #060010)',
    position: 'relative',
    minHeight: '100vh',
    width: '100%'
  };

  // ২. সেই ফোঁটা ফোঁটা ডট প্যাটার্ন (Dot Pattern Overlay)
  const patternOverlay = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`, // এখানে কালার এবং সাইজ বাড়ানো হয়েছে
    backgroundSize: '30px 30px',
    position: 'absolute',
    inset: 0,
    zIndex: 1, // কন্টেন্টের নিচে থাকবে
    pointerEvents: 'none'
  };

  return (
    <div style={fullBackgroundStyle} className="flex flex-col lg:flex-row overflow-hidden relative">
      
      {/* ৩. ফোঁটা ফোঁটা প্যাটার্ন লেয়ার */}
      <div style={patternOverlay}></div>

      {/* ৪. ফ্লোটিং হোম লোগো (সেন্টার) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="MicroEarn"
            className="h-10 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Tagline */}
        <p className="mt-2 text-sm text-white/70 text-center flex items-center gap-2 justify-center">
          <FaShieldAlt className="text-yellow-400" /> Go Home
        </p>
      </div>

      {/* --- বাম পাশ: ব্র্যান্ড কন্টেন্ট --- */}
      <div className="relative z-10 hidden lg:flex lg:w-1/2 flex-col justify-center p-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            Start Your <br /> <span className="text-yellow-400">Digital</span> <br /> Journey
          </h1>

          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-white/80 font-medium text-lg">
               <FaCheckCircle className="text-yellow-400 shadow-sm" /> Secure Encryption
            </li>
            <li className="flex items-center gap-3 text-white/80 font-medium text-lg">
               <FaCheckCircle className="text-yellow-400 shadow-sm" /> Instant Rewards
            </li>
            <li className="flex items-center gap-3 text-white/80 font-medium text-lg">
               <FaCheckCircle className="text-yellow-400 shadow-sm" /> 24/7 Support Center
            </li>
          </ul>

          <div className="flex gap-12 border-t border-white/10 pt-10">
             <div>
                <p className="text-4xl font-black text-white">50K+</p>
                <p className="text-xs uppercase font-bold text-white/40 tracking-[3px]">Global Users</p>
             </div>
             <div>
                <p className="text-4xl font-black text-white">$250K</p>
                <p className="text-xs uppercase font-bold text-white/40 tracking-[3px]">Total Payout</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* ৫. মাঝখানের উজ্জ্বল ডিভাইডার */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5px] h-[75%] bg-gradient-to-b from-transparent via-white/20 to-transparent z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand rounded-full blur-[6px] animate-pulse"></div>
      </div>

      {/* --- ডান পাশ: রাউটিং কন্টেন্ট --- */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center p-8 md:p-20 relative z-10">
        <div className="max-w-md w-full mx-auto">
          {/* ট্যাব সুইচার */}
          <div className="flex bg-white/5 backdrop-blur-xl p-1.5 rounded-[2rem] mb-12 w-full border border-white/10 shadow-2xl">
             <NavLink 
                to="/auth/login"
                className={({ isActive }) => `flex-1 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-[2px] text-center transition-all ${isActive ? 'bg-brand text-white shadow-[0_10px_25px_rgba(82,39,255,0.4)] scale-[1.02]' : 'text-white/40 hover:text-white'}`}
             >
                Login
             </NavLink>
             <NavLink 
                to="/auth/register"
                className={({ isActive }) => `flex-1 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-[2px] text-center transition-all ${isActive ? 'bg-brand text-white shadow-[0_10px_25px_rgba(82,39,255,0.4)] scale-[1.02]' : 'text-white/40 hover:text-white'}`}
             >
                Register
             </NavLink>
          </div>

          <div className="relative">
             <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Outlet />
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}