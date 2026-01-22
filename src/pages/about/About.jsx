import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaEye, FaAward, FaBolt } from 'react-icons/fa';

const stats = [
  { id: 1, label: "Active Users", value: "50K+", icon: <FaUsers className="text-blue-500" /> },
  { id: 2, label: "Tasks Completed", value: "1.2M", icon: <FaBolt className="text-yellow-500" /> },
  { id: 3, label: "Paid Out", value: "$250K", icon: <FaAward className="text-emerald-500" /> },
];

export default function About() {
  return (
    <div className="min-height-screen transition-colors duration-500">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-black uppercase text-[10px] tracking-[4px] mb-6"
          >
            <FaRocket className="animate-bounce" /> Who We Are
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none"
          >
            Redefining the <br />
            <span className="text-brand">Digital Economy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            We are more than just a task platform. We are a community-driven ecosystem where effort meets reward in the most transparent and stylish way possible.
          </motion.p>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[3rem] text-center card-hover transition-all"
            >
              <div className="text-4xl mb-4 flex justify-center">{stat.icon}</div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">{stat.value}</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MISSION & VISION (The Golden Card) --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Mission Card */}
          <motion.div 
            whileHover={{ rotateY: -5, rotateX: 5 }}
            className="relative p-[2px] rounded-[4rem] overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#5227ff_0%,#facc15_50%,#5227ff_100%)] opacity-30"></div>
            <div className="relative bg-white dark:bg-[#060010] p-12 rounded-[4rem] h-full transition-colors duration-500">
               <div className="w-16 h-16 bg-brand rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-brand/30">
                  <FaEye className="text-white text-3xl" />
               </div>
               <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">Our Mission</h3>
               <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                 To empower millions of people worldwide by providing accessible digital opportunities. We believe that everyone's time has value, and we've built the world's most elegant platform to prove it.
               </p>
            </div>
          </motion.div>

          {/* Right Side Info */}
          <div className="space-y-8">
            <div className="flex gap-6 p-8 rounded-[2.5rem] bg-slate-100 dark:bg-slate-900/50 border border-transparent hover:border-brand/30 transition-all cursor-default">
              <div className="shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-black">1</div>
              <div>
                <h4 className="text-xl font-bold dark:text-white mb-2 tracking-tight">Community First</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">We grow when you grow. Our support and community are at the heart of everything we build.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-[2.5rem] bg-slate-100 dark:bg-slate-900/50 border border-transparent hover:border-yellow-500/30 transition-all cursor-default">
              <div className="shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-black">2</div>
              <div>
                <h4 className="text-xl font-bold dark:text-white mb-2 tracking-tight">Security & Trust</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Your data and earnings are protected by military-grade encryption and secure protocols.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-[2.5rem] bg-slate-100 dark:bg-slate-900/50 border border-transparent hover:border-emerald-500/30 transition-all cursor-default">
              <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black">3</div>
              <div>
                <h4 className="text-xl font-bold dark:text-white mb-2 tracking-tight">Global Accessibility</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">No matter where you are in the world, you can start earning with just a few clicks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- JOIN US FOOTER --- */}
      <section className="py-24 px-4 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-brand rounded-[4rem] p-16 text-white max-w-5xl mx-auto shadow-[0_20px_50px_rgba(82,39,255,0.4)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 relative z-10">Ready to start your <br /> journey with us?</h2>
          <button className="px-12 py-5 bg-white text-brand font-black rounded-2xl hover:bg-yellow-400 hover:text-white transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest text-sm relative z-10">
            Get Started Now
          </button>
        </motion.div>
      </section>
    </div>
  );
}