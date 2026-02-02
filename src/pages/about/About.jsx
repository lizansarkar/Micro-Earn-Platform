import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target, Zap, Shield, Globe, Award, Sparkles } from 'lucide-react';

const stats = [
  { id: 1, label: "Active Workers", value: "50K+", color: "bg-blue-500" },
  { id: 2, label: "Tasks Done", value: "1.2M+", color: "bg-yellow-500" },
  { id: 3, label: "Total Payout", value: "$250K", color: "bg-emerald-500" },
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-[#020008] transition-colors duration-500">
      
      {/* --- SECTION 1: ASYMMETRIC HERO --- */}
      <section className="relative pt-32 pb-20 px-6">
        {/* আঁকাবাঁকা ব্যাকগ্রাউন্ড শেপ (Blob) */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-brand/10 border border-brand/20 text-brand font-black text-[10px] tracking-[4px] mb-8">
              <Sparkles size={14} className="animate-spin-slow" /> INNOVATING REWARDS
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter dark:text-white text-slate-900 uppercase">
              Beyond <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-500">Earnings.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-500 dark:text-slate-400 max-w-lg font-medium leading-relaxed italic border-l-4 border-brand pl-6">
              "We didn't just build a platform; we carved a digital sanctuary where every second you spend is valued with precision."
            </p>
          </motion.div>

          {/* Unique Floating Image/Shape Block */}
          <motion.div style={{ y: yRange }} className="lg:w-1/2 relative">
             <div className="relative w-full h-[400px] md:h-[500px]">
                {/* ইউনিক বাঁকানো শেপ কার্ড */}
                <div className="absolute top-10 left-10 w-full h-full bg-brand rounded-[4rem] rotate-6 opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[4rem] -rotate-3 overflow-hidden backdrop-blur-3xl flex items-center justify-center p-12">
                   <div className="text-center">
                      <Rocket size={80} className="text-brand mx-auto mb-6 animate-bounce" />
                      <div className="space-y-4">
                         <div className="h-2 w-32 bg-brand/20 mx-auto rounded-full"></div>
                         <div className="h-2 w-48 bg-brand/10 mx-auto rounded-full"></div>
                         <div className="h-2 w-24 bg-brand/30 mx-auto rounded-full"></div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: BENTO GRID STATS --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                whileHover={{ scale: 1.02 }}
                className={`${i === 1 ? 'md:col-span-6' : 'md:col-span-3'} bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 p-10 rounded-[3rem] flex flex-col justify-center items-center group transition-all`}
              >
                <div className={`w-12 h-1 ${stat.color} mb-6 rounded-full group-hover:w-24 transition-all duration-500`}></div>
                <h2 className="text-5xl font-black dark:text-white text-slate-900">{stat.value}</h2>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-4">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE "CURVY" VISION --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-brand/[0.03] dark:bg-brand/[0.07] border border-brand/10 rounded-[5rem] p-8 md:p-20 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 blur-[80px] rounded-full"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Target size={48} className="text-brand mb-6" />
                <h2 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 uppercase tracking-tighter mb-8 italic">
                  Our Unfair <br /> Advantage
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: <Shield size={20} />, title: "Military Grade Security", desc: "Encrypted transactions for every cent." },
                    { icon: <Globe size={20} />, title: "No Borders", desc: "Work from anywhere, get paid everywhere." },
                    { icon: <Award size={20} />, title: "Instant Payouts", desc: "No more waiting weeks for your hard-earned money." }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-5 items-start group">
                      <div className="mt-1 bg-brand text-white p-2 rounded-xl group-hover:rotate-12 transition-transform">{item.icon}</div>
                      <div>
                        <h4 className="font-bold dark:text-white text-slate-800">{item.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ইউনিক জ্যামিতিক শেপ */}
              <div className="relative flex justify-center">
                 <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-brand to-purple-600 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(82,39,255,0.3)] animate-spin-slow" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}>
                    <Zap size={100} className="text-white -rotate-12" />
                 </div>
                 {/* Floating Badges */}
                 <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-0 right-0 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-brand/20 font-bold text-xs flex items-center gap-2">
                    <Award className="text-yellow-500" /> Top Rated Platform
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: THE FINAL POP --- */}
      <section className="py-24 px-6">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="max-w-5xl mx-auto relative bg-[#060010] rounded-[4rem] p-12 md:p-24 text-center overflow-hidden border border-white/5"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent opacity-50"></div>
           <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 relative z-10">
              Join the <span className="text-brand italic">Elite</span> <br /> 1% of Earners.
           </h2>
           <button className="relative z-10 group bg-brand px-10 py-5 rounded-2xl text-white font-black uppercase tracking-[4px] text-xs hover:bg-white hover:text-brand transition-all duration-500 shadow-2xl shadow-brand/40">
              Launch Dashboard
           </button>
           
           {/* Decorative elements */}
           <div className="absolute top-10 left-10 w-2 h-2 bg-brand rounded-full animate-ping"></div>
           <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
        </motion.div>
      </section>
    </div>
  );
}