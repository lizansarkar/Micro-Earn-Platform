import React from "react";
import { motion } from "framer-motion";
import { FaGift, FaRocket, FaLock, FaCheckCircle } from "react-icons/fa";

const milestones = [
  { id: 1, title: "Starter", tasks: 5, reward: "$1.00 Bonus", status: "completed" },
  { id: 2, title: "Pro Earner", tasks: 20, reward: "$5.00 Bonus", status: "current" },
  { id: 3, title: "Elite Master", tasks: 50, reward: "$15.00 Bonus", status: "locked" },
  { id: 4, title: "God Mode", tasks: 100, reward: "$50.00 Bonus", status: "locked" },
];

export default function RewardMilestones() {
  return (
    <section className="py-20 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase">
            Claim Your <span className="text-brand">Rewards</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium italic">Complete tasks and unlock massive bonuses!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {milestones.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[2.5rem] border-2 transition-all duration-300 overflow-hidden
                ${item.status === 'completed' ? 'bg-green-500/10 border-green-500/30' : 
                  item.status === 'current' ? 'bg-brand/10 border-brand shadow-[0_0_30px_rgba(82,39,255,0.2)]' : 
                  'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'}
              `}
            >
              {/* Status Icon */}
              <div className="mb-6">
                {item.status === 'completed' ? (
                  <FaCheckCircle className="text-4xl text-green-500" />
                ) : item.status === 'current' ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
                    <FaRocket className="text-4xl text-brand" />
                  </motion.div>
                ) : (
                  <FaLock className="text-4xl text-slate-400" />
                )}
              </div>

              <h4 className={`font-black text-xl mb-1 ${item.status === 'locked' ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                {item.title}
              </h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                {item.tasks} Tasks Required
              </p>

              <div className={`inline-block px-4 py-2 rounded-2xl font-black text-sm
                ${item.status === 'locked' ? 'bg-slate-100 dark:bg-slate-800 text-slate-500' : 'bg-brand text-white shadow-lg'}
              `}>
                {item.reward}
              </div>

              {/* Background Glow for current task */}
              {item.status === 'current' && (
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand opacity-20 blur-3xl rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Total Progress Bar */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex justify-between items-end mb-4">
                <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">Your Progress</span>
                <span className="text-brand font-black text-2xl">45%</span>
            </div>
            <div className="w-full h-6 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-1 shadow-inner">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '45%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand to-blue-400 rounded-full shadow-lg relative"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
                </motion.div>
            </div>
            <p className="mt-4 text-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                Just 5 more tasks to unlock "Pro Earner" reward!
            </p>
        </div>
      </div>
    </section>
  );
}