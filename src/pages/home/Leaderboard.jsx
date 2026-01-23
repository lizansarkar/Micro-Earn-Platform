import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";
import { FaCrown, FaFire, FaTrophy, FaBolt, FaStar } from "react-icons/fa";

const leaderboardData = [
  { id: 1, name: "Zayan Ahmed", amount: 450.50, image: "https://i.pravatar.cc/150?u=11", tasks: 1240 },
  { id: 2, name: "Sara Khan", amount: 380.20, image: "https://i.pravatar.cc/150?u=12", tasks: 980 },
  { id: 3, name: "Tanvir Sadi", amount: 310.00, image: "https://i.pravatar.cc/150?u=13", tasks: 850 },
  { id: 4, name: "Anika Jahan", amount: 290.45, image: "https://i.pravatar.cc/150?u=14", tasks: 720 },
  { id: 5, name: "Rakib Ahmed", amount: 250.00, image: "https://i.pravatar.cc/150?u=15", tasks: 610 },
];

const ChampionCard = ({ champion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="lg:col-span-5 sticky top-24"
    >
      <div className="relative group p-[3px] rounded-[3.5rem] overflow-hidden shadow-[0_20px_60px_rgba(184,134,11,0.4)]">
        
        {/* গোল্ডেন এনিমেটেড বর্ডার - এটি যেকোনো ব্যাকগ্রাউন্ডে ফুটবে */}
        <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bf953f_0%,#fcf6ba_25%,#b38728_50%,#fcf6ba_75%,#bf953f_100%)]" />

        {/* মেইন বডি - এখানে bg-slate-900 ব্যবহার করেছি যা ডার্ক মোড ছাড়াও ব্ল্যাকিশ দেখাবে */}
        <div className="relative bg-[#ffffff] dark:bg-[black] rounded-[3.5rem] p-8 md:p-12 overflow-hidden border border-white/10">
          
          {/* শাইন এনিমেশন (সাদা আলোর ঝিলিক) */}
          <motion.div 
            animate={{ x: ['-150%', '150%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-10"
          />

          <div className="relative z-20 text-center">
            <div className="relative inline-block mb-6">
              {/* গোল্ডেন প্রোফাইল রিং */}
              <div className="relative p-1.5 bg-gradient-to-tr from-[#bf953f] via-[#fcf6ba] to-[#b38728] rounded-full shadow-[0_0_30px_rgba(191,149,63,0.4)]">
                <img 
                  src={champion.image} 
                  className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#0f172a] object-cover mx-auto" 
                  alt={champion.name} 
                />
              </div>
              
              {/* ফ্লোটিং মুকুট */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              >
                <FaCrown className="text-5xl text-[#fcf6ba]" />
              </motion.div>
            </div>

            {/* গোল্ডেন নাম */}
            <h3 className="text-3xl md:text-5xl font-black mb-2 bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
              {champion.name}
            </h3>
            
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 font-black uppercase text-[10px] tracking-[4px]">
              <FaTrophy className="animate-bounce" /> Hall of Fame
            </div>

            {/* স্ট্যাটাস বক্স */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10">
                <p className="text-[10px] uppercase font-black text-slate-400 mb-1">Total Earned</p>
                <p className="text-2xl font-black text-[#fcf6ba]">${champion.amount}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Tasks Done</p>
                <p className="text-2xl font-black text-white">{champion.tasks}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Leaderboard() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const champion = leaderboardData[0];

  useEffect(() => {
    if (isInView) {
      const end = Date.now() + 2 * 1000;
      const colors = ["#006bb3", "#ffffff", "#facc15"];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-24 px-4 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-xs mb-2">
              <FaFire className="text-orange-500" /> Real-time Earnings
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-none">
              Hall of <span className="text-brand">Fame</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xs text-sm italic">
            "Every small task counts. Rise to the top and claim your rewards!"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* --- LEFT SIDE (Golden Champion) --- */}
          <ChampionCard champion={champion} />

          {/* --- RIGHT SIDE: RANKINGS LIST --- */}
          <div className="lg:col-span-7 space-y-4">
            {leaderboardData.slice(1).map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: -10 }}
                className="group flex items-center justify-between p-4 md:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand/50 rounded-3xl transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center font-black text-slate-300 dark:text-slate-700 text-2xl group-hover:text-brand">
                    #{index + 2}
                  </div>
                  <img src={user.image} className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover border-2 border-slate-100 dark:border-slate-800 group-hover:border-brand" alt="" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                      {user.name}
                    </h4>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {user.tasks} Completed
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg md:text-xl font-black text-slate-900 dark:text-white">
                    ${user.amount.toFixed(2)}
                  </p>
                  <div className="h-1 w-12 bg-slate-100 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      className="h-full bg-brand"
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-widest text-xs shadow-xl mt-4"
            >
              See All Rankings
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}