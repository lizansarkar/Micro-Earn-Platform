import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaCrown } from 'react-icons/fa';

export default function BestWorkers() {
  const workers = [
    { id: 1, name: "Ariful Islam", coins: 4500, image: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sumaiya Akter", coins: 4200, image: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Rakib Hossain", coins: 3900, image: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Mehedi Hasan", coins: 3850, image: "https://i.pravatar.cc/150?u=4" },
    { id: 5, name: "Nusrat Jahan", coins: 3700, image: "https://i.pravatar.cc/150?u=5" },
    { id: 6, name: "Sabbir Ahmed", coins: 3500, image: "https://i.pravatar.cc/150?u=6" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "backOut" } 
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-width-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-[2px] w-8 bg-brand"></div>
            <span className="text-brand font-black uppercase tracking-[4px] text-xs">
              Top Contributors
            </span>
            <div className="h-[2px] w-8 bg-brand"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-4"
          >
            Elite <span className="text-brand">Workers</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-gray-400 mt-4 max-w-xl mx-auto font-medium">
            Recognizing the top earners who have achieved the maximum coins this week.
          </p>
        </div>

        {/* Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {workers.map((worker, index) => (
            <motion.div
              key={worker.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Card Body */}
              <div className="glass-effect p-8 rounded-[3rem] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(82,39,255,0.3)] bg-white/40 dark:bg-white/[0.03]">
                
                {/* Image Container with Rank */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-brand rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Floating Crown for Rank 1 */}
                  {index === 0 && (
                    <motion.div 
                      animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-500 text-3xl z-30"
                    >
                      <FaCrown />
                    </motion.div>
                  )}

                  <img 
                    src={worker.image} 
                    alt={worker.name}
                    className="w-28 h-28 rounded-full border-4 border-white dark:border-white/10 relative z-10 object-cover shadow-xl"
                  />
                  
                  {/* Rank Badge */}
                  <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center font-black border-4 border-white dark:border-[#060010] z-20 shadow-lg ${
                    index === 0 ? "bg-yellow-500 text-white" : 
                    index === 1 ? "bg-slate-300 text-slate-700" :
                    index === 2 ? "bg-orange-400 text-white" : "bg-brand text-white"
                  }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Name - Theme Responsive */}
                <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-3 transition-colors group-hover:text-brand">
                  {worker.name}
                </h3>
                
                {/* Coins Container - Theme Responsive */}
                <div className="flex items-center gap-3 bg-slate-100 dark:bg-white/5 px-6 py-2.5 rounded-2xl border border-slate-200 dark:border-white/5 mb-6 group-hover:scale-105 transition-transform">
                  <FaCoins className="text-yellow-500 text-xl" />
                  <span className="text-xl font-black text-slate-700 dark:text-gray-100">
                    {worker.coins.toLocaleString()} 
                    <span className="text-xs text-slate-400 dark:text-gray-500 font-bold ml-1 tracking-tighter uppercase">Coins</span>
                  </span>
                </div>

                {/* Badge/Tag */}
                <div className={`px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${
                  index < 3 
                  ? "bg-brand/10 text-brand border border-brand/20 opacity-100" 
                  : "bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-gray-600 border border-transparent opacity-60 group-hover:opacity-100"
                }`}>
                  {index < 3 ? "🏆 Premium Member" : "Verified Worker"}
                </div>
              </div>

              {/* Gradient Aura on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand/20 to-purple-500/20 rounded-[3.2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}