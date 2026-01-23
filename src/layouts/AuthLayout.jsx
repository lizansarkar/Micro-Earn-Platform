import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShieldAlt, FaRocket, FaCheckCircle } from 'react-icons/fa'

export default function AuthLayout() {
  const location = useLocation();

  return (
    // ১. Full Width এবং Full Screen Height নিশ্চিত করা হয়েছে
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#060010] overflow-hidden">
      
      {/* --- বাম পাশ: ব্র্যান্ড ডিটেইলস (৫0% Width on Desktop) --- */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-center p-20 bg-gradient-to-br from-brand to-[#1a0b5e] overflow-hidden">
        {/* ব্যাকগ্রাউন্ড প্যাটার্ন */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative z-10"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-10 shadow-2xl border border-white/20">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          
          <h1 className="text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            Start Your <br /> <span className="text-yellow-400">Digital</span> <br /> Journey
          </h1>

          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-white/80 font-medium text-lg">
               <FaCheckCircle className="text-yellow-400" /> Secure Encryption
            </li>
            <li className="flex items-center gap-3 text-white/80 font-medium text-lg">
               <FaCheckCircle className="text-yellow-400" /> Instant Rewards
            </li>
            <li className="flex items-center gap-3 text-white/80 font-medium text-lg">
               <FaCheckCircle className="text-yellow-400" /> 24/7 Support Center
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

      {/* --- ডান পাশ: ডাইনামিক ফর্ম সেকশন (Outlet) --- */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center p-8 md:p-20 relative bg-[#060010]">
        
        {/* মোবাইল ভিউর জন্য লোগো */}
        <div className="lg:hidden mb-10 flex justify-center">
            <FaShieldAlt className="text-brand text-5xl" />
        </div>

        <div className="max-w-md w-full mx-auto">
          {/* ২. ট্যাব সুইচার: NavLink ব্যবহার করা হয়েছে রাউটিং কন্ট্রোল করতে */}
          <div className="flex bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-3xl mb-12 w-full border border-white/5">
             <NavLink 
                to="/auth/login"
                className={({ isActive }) => `flex-1 py-4 rounded-2xl text-xs font-black uppercase tracking-[2px] text-center transition-all ${isActive ? 'bg-brand text-white shadow-2xl scale-[1.02]' : 'text-slate-500 hover:text-slate-300'}`}
             >
                Login
             </NavLink>
             <NavLink 
                to="/auth/register"
                className={({ isActive }) => `flex-1 py-4 rounded-2xl text-xs font-black uppercase tracking-[2px] text-center transition-all ${isActive ? 'bg-brand text-white shadow-2xl scale-[1.02]' : 'text-slate-500 hover:text-slate-300'}`}
             >
                Register
             </NavLink>
          </div>

          {/* ৩. আউটলেট: এখানে Login বা Register কম্পোনেন্ট রেন্ডার হবে */}
          <div className="relative">
             <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                >
                  <Outlet />
                </motion.div>
             </AnimatePresence>
          </div>

          <p className="mt-10 text-center text-slate-500 text-sm font-medium">
             By continuing, you agree to our <span className="text-brand cursor-pointer hover:underline">Terms of Service</span>
          </p>
        </div>
      </div>
    </div>
  )
}