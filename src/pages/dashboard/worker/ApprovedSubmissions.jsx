import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Calendar, DollarSign, ExternalLink, 
  Search, Filter, ArrowUpRight, Award, BadgeCheck 
} from 'lucide-react';

const approvedTasks = [
  { id: 1, title: "YouTube Subscription", buyer: "Tech Master", reward: 0.50, date: "10 Feb 2026", transactionId: "TXN-88210" },
  { id: 2, title: "App Review & Rating", buyer: "Digital Apps Ltd", reward: 1.20, date: "08 Feb 2026", transactionId: "TXN-88155" },
  { id: 3, title: "Social Media Share", buyer: "Growth Agency", reward: 0.30, date: "05 Feb 2026", transactionId: "TXN-88092" },
  { id: 4, title: "Website Testing", buyer: "UI/UX Lab", reward: 2.50, date: "02 Feb 2026", transactionId: "TXN-87941" },
];

export default function ApprovedSubmissions() {
  return (
    <div className="min-h-screen bg-transparent p-4 lg:p-8">
      
      {/* --- HEADER & STATS --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-3">
             <BadgeCheck className="text-emerald-500" size={32} /> Approved Work
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic mt-1">List of your successfully completed and verified tasks.</p>
        </div>

        <div className="flex gap-4">
           <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-4 px-8 rounded-3xl flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                 <Award size={20} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Approved</p>
                 <p className="text-xl font-black dark:text-white text-slate-900 leading-none mt-1">128</p>
              </div>
           </div>
        </div>
      </div>

      {/* --- FILTER & SEARCH BAR --- */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
         <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by task or buyer..."
              className="w-full bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold dark:text-white outline-none focus:border-brand/50 transition-all"
            />
         </div>
         <button className="px-8 py-4 bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-2xl flex items-center gap-2 text-xs font-black uppercase tracking-widest dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
            <Filter size={16} /> Filter
         </button>
      </div>

      {/* --- SUBMISSIONS TABLE --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/5 dark:border-white/5">
                <th className="p-6 px-8 text-[10px] font-black uppercase tracking-[2px] text-slate-400">Task Details</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[2px] text-slate-400">Buyer</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[2px] text-slate-400">Date</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[2px] text-slate-400 text-center">Reward</th>
                <th className="p-6 px-8 text-[10px] font-black uppercase tracking-[2px] text-slate-400 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {approvedTasks.map((task, i) => (
                <motion.tr 
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group hover:bg-slate-50/50 dark:hover:bg-white/[0.01] transition-colors"
                >
                  <td className="p-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand/5 text-brand rounded-xl flex items-center justify-center shrink-0">
                        <CheckCircle size={18} />
                      </div>
                      <div>
                        <p className="font-black text-sm dark:text-white text-slate-900 uppercase tracking-tight">{task.title}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{task.transactionId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-xs font-bold dark:text-slate-300 text-slate-600 uppercase italic underline underline-offset-4 decoration-brand/20 cursor-pointer hover:text-brand transition-colors">
                      {task.buyer}
                    </p>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <Calendar size={14} />
                      <span className="text-xs font-bold">{task.date}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col items-center">
                       <span className="text-sm font-black text-emerald-500 tracking-tight">+${task.reward.toFixed(2)}</span>
                       <span className="text-[8px] font-black uppercase text-slate-400 tracking-[1px] mt-1 italic">Paid</span>
                    </div>
                  </td>
                  <td className="p-6 px-8 text-right">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                      <ArrowUpRight size={12} /> Approved
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Placeholder */}
        <div className="p-6 border-t border-black/5 dark:border-white/5 flex justify-center">
           <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">
              Load More History
           </button>
        </div>
      </motion.div>
    </div>
  );
}