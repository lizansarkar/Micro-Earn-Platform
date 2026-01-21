import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaTrophy, FaBolt, FaStar } from "react-icons/fa";

const ChampionCard = ({ champion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative group p-[3px] rounded-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(184,134,11,0.3)]"
    >
      {/* ১. অ্যানিমেটেড গোল্ডেন বর্ডার লাইট */}
      <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bf953f_0%,#fcf6ba_25%,#b38728_50%,#fcf6ba_75%,#bf953f_100%)]" />

      {/* ২. মেইন কার্ড বডি (মেটালিক লুক) */}
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-black rounded-[3.5rem] p-10 md:p-14 overflow-hidden">
        
        {/* থ্রি-ডি শাইন ইফেক্ট (কার্ডের ওপর দিয়ে সাদা আলো বয়ে যাবে) */}
        <motion.div 
          animate={{ x: ['-150%', '150%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent -skew-x-12 z-10"
        />

        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
        <FaStar className="absolute top-10 left-10 text-yellow-500/20 animate-ping" />
        <FaStar className="absolute bottom-20 right-10 text-yellow-500/20 animate-pulse" />

        <div className="relative z-20 text-center">
          {/* প্রোফাইল ইমেজ উইথ গোল্ডেন রিং */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] blur-lg opacity-50 animate-pulse"></div>
            <div className="relative p-1.5 bg-gradient-to-tr from-[#bf953f] via-[#fcf6ba] to-[#b38728] rounded-full">
              <img 
                src={champion.image} 
                className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white dark:border-slate-900 object-cover mx-auto shadow-2xl" 
                alt={champion.name} 
              />
            </div>
            
            {/* ফ্লোটিং গোল্ডেন মুকুট */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 drop-shadow-[0_0_15px_rgba(252,246,186,0.8)]"
            >
              <FaCrown className="text-6xl text-[#fcf6ba]" />
            </motion.div>
          </div>

          {/* চ্যাম্পিয়ন নাম (গোল্ডেন টেক্সট ইফেক্ট) */}
          <h3 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent drop-shadow-sm">
            {champion.name}
          </h3>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 font-black uppercase text-xs tracking-[4px]">
            <FaTrophy className="animate-bounce" /> Hall of Fame
          </div>

          {/* স্ট্যাটাস বক্স (মেটালিক গ্লাস) */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-[2.5rem] border border-[#bf953f]/30 shadow-lg group-hover:border-[#fcf6ba] transition-all duration-500">
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Weekly Payout</p>
              <p className="text-3xl font-black bg-gradient-to-r from-[#bf953f] to-[#b38728] bg-clip-text text-transparent">
                ${champion.amount}
              </p>
            </div>

            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-[2.5rem] border border-[#bf953f]/30 shadow-lg group-hover:border-[#fcf6ba] transition-all duration-500">
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Tasks Done</p>
              <p className="text-3xl font-black text-slate-800 dark:text-white">
                {champion.tasks}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChampionCard;