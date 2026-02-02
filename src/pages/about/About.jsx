import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Rocket, Target, Zap, Shield, Globe, Award, Sparkles, MoveRight } from 'lucide-react';

const stats = [
  { id: 1, label: "Active Workers", value: "50K+", color: "bg-blue-500" },
  { id: 2, label: "Tasks Done", value: "1.2M+", color: "bg-yellow-500" },
  { id: 3, label: "Total Payout", value: "$250K", color: "bg-emerald-500" },
];

export default function About() {
  const containerRef = useRef(null);
  
  // স্ক্রল প্রগ্রেস ট্র্যাকিং
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // স্ক্রল স্মুথ করার জন্য স্প্রিং অ্যানিমেশন
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // ডাইনামিক ভ্যালু যা স্ক্রল এর সাথে সাথে কাজ করবে
  const textX = useTransform(smoothProgress, [0, 1], [0, 300]);
  const textXReverse = useTransform(smoothProgress, [0, 1], [0, -300]);
  const rotateS = useTransform(smoothProgress, [0, 1], [0, 360]);
  const scaleS = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div ref={containerRef} className="bg-white dark:bg-[#020008] transition-colors duration-500 overflow-x-hidden pt-0">
      
      {/* --- SECTION 1: INFINITE FEEL HERO --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div style={{ x: textX }} className="text-[12vw] font-black text-slate-100 dark:text-white/[0.02] whitespace-nowrap leading-none absolute top-20 left-0 uppercase">
             MicroEarn Innovation MicroEarn Innovation
           </motion.div>
           <motion.div style={{ x: textXReverse }} className="text-[12vw] font-black text-slate-100 dark:text-white/[0.02] whitespace-nowrap leading-none absolute bottom-20 right-0 uppercase">
             Digital Economy Digital Economy
           </motion.div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="px-6 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-black text-[10px] tracking-[5px] mb-8">
               ESTABLISHED 2024
            </div>
            <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tighter dark:text-white text-slate-900 uppercase">
              WORK <br /> <span className="text-brand italic">SMARTER.</span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl font-medium">
              We are disrupting the micro-task industry with a focus on speed, style, and absolute transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: FLOATING STATS GRID --- */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-[2px] rounded-[3rem] overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-50 dark:bg-[#0a0a12] p-12 rounded-[3rem] h-full flex flex-col items-center text-center">
                <span className="text-6xl font-black dark:text-white text-slate-900 mb-4">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-[4px] text-brand">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE PARALLAX VISION --- */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          
          <div className="lg:w-1/2">
            <motion.h2 
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="text-5xl md:text-7xl font-black dark:text-white text-slate-900 uppercase tracking-tighter mb-10"
            >
              Our Unique <br /> <span className="text-yellow-500">DNA.</span>
            </motion.h2 >
            <div className="space-y-12">
              {[
                { title: "Military Security", desc: "No compromised data. Ever.", icon: <Shield size={24} /> },
                { title: "Global Reach", desc: "150+ Countries supported.", icon: <Globe size={24} /> },
                { title: "Elite Rewards", desc: "Earn more than industry standards.", icon: <Award size={24} /> }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand text-white flex items-center justify-center shrink-0 shadow-lg shadow-brand/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center">
             <motion.div 
               style={{ rotate: rotateS, scale: scaleS }} 
               className="w-72 h-72 md:w-[450px] md:h-[450px] border-2 border-brand/20 border-dashed rounded-full flex items-center justify-center p-10"
             >
                <div className="w-full h-full bg-gradient-to-tr from-brand to-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(82,39,255,0.3)]">
                   <Zap size={100} className="text-white fill-white animate-pulse" />
                </div>
             </motion.div>
             
             <motion.div 
               style={{ y: textXReverse }}
               className="absolute -top-10 right-0 md:-right-10 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-brand/10 z-20"
             >
                <Rocket className="text-brand mb-2" />
                <span className="text-[10px] font-black uppercase tracking-widest block">Level: Elite</span>
                <div className="h-1 w-20 bg-brand mt-2 rounded-full"></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             initial={{ borderRadius: "10rem" }}
             whileInView={{ borderRadius: "4rem" }}
             className="bg-brand p-12 md:p-32 text-center relative overflow-hidden group cursor-pointer"
           >
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                 <h2 className="text-[15vw] font-black text-white uppercase italic">Elite</h2>
              </div>

              <div className="relative z-10">
                 <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12 leading-tight">
                   Ready to Join <br /> The <span className="underline decoration-yellow-400 underline-offset-8">Future?</span>
                 </h2>
                 
                 <motion.button 
                   whileHover={{ x: 20 }}
                   className="inline-flex items-center gap-4 text-xl md:text-2xl font-black text-white uppercase tracking-widest group"
                 >
                   Launch Dashboard <MoveRight size={32} className="group-hover:translate-x-4 transition-transform" />
                 </motion.button>
              </div>

              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-20 group-hover:-translate-x-20 transition-transform duration-700"></div>
           </motion.div>
        </div>
      </section>

      <div className="h-2 w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-20"></div>
    </div>
  );
}