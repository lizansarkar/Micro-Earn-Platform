import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLifeRing, 
  FaExclamationTriangle, 
  FaQuestionCircle, 
  FaTools, 
  FaChevronRight, 
  FaShieldAlt,
  FaHeadset
} from 'react-icons/fa';

export default function Support() {
  const [selectedIssue, setSelectedIssue] = useState("");

  const issues = [
    { id: 'payment', label: 'Payment Issue', icon: '💳' },
    { id: 'task', label: 'Task Tracking', icon: '📈' },
    { id: 'login', label: 'Security', icon: '🔒' },
    { id: 'other', label: 'Other Support', icon: '💬' },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#060010] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 border-b border-gray-100 dark:border-white/5 pb-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-brand font-bold uppercase tracking-[4px] text-[11px] mb-5"
            >
              <div className="p-2 rounded-lg bg-brand/10 group">
                <FaLifeRing className="animate-spin-slow group-hover:text-brand transition-colors" />
              </div>
              Help Desk & Support
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Resolution Center. <br />
              <span className="text-gray-400 font-medium">How can we assist you?</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-[280px] lg:ml-auto leading-relaxed">
              Experience elite-level support. Our specialists ensure a <span className="text-brand font-bold">24-hour turnaround</span> for all tickets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* --- Left: Side Actions (Cards) --- */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 group cursor-pointer transition-all hover:shadow-2xl hover:shadow-brand/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-2xl text-brand mb-6 shadow-sm border border-gray-100 dark:border-white/10">
                <FaQuestionCircle />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Browse Knowledge Base</h4>
              <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 leading-relaxed">Search our comprehensive library for instant solutions to common queries.</p>
              <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Explore FAQ <FaChevronRight size={10}/>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-brand text-white shadow-xl shadow-brand/20 group cursor-pointer relative overflow-hidden"
            >
              <FaShieldAlt className="text-8xl opacity-10 absolute -bottom-4 -right-4 rotate-12" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3 tracking-tight uppercase">System Status</h4>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">Check if our servers are experiencing any technical difficulties at the moment.</p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                   All Systems Operational
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- Right: Ticket Form (Refined) --- */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-[#0c051a] rounded-[2.5rem] p-8 md:p-14 border border-gray-100 dark:border-white/5 shadow-sm relative overflow-hidden">
              
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                    <FaExclamationTriangle className="text-yellow-500 text-xl" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Submit Support Ticket</h3>
                    <p className="text-sm text-slate-500 dark:text-gray-400">Provide details about your experience for faster resolution.</p>
                </div>
              </div>

              <div className="space-y-10">
                {/* Issue Selector */}
                <div className="space-y-5">
                  <label className="text-[11px] font-bold uppercase tracking-[3px] text-gray-400 block ml-1">Select Issue Category</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {issues.map((issue) => (
                      <button
                        key={issue.id}
                        onClick={() => setSelectedIssue(issue.id)}
                        className={`group p-5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all border-2
                          ${selectedIssue === issue.id 
                            ? 'border-brand bg-brand/5 dark:bg-brand/10 ring-4 ring-brand/5' 
                            : 'border-gray-50 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01] hover:border-gray-200 dark:hover:border-white/20'}
                        `}
                      >
                        <span className={`text-2xl transition-transform group-hover:scale-125 ${selectedIssue === issue.id ? 'scale-110' : ''}`}>
                          {issue.icon}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedIssue === issue.id ? 'text-brand' : 'text-gray-400'}`}>
                          {issue.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description Textarea */}
                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-[3px] text-gray-400 block ml-1">Issue Description</label>
                  <textarea 
                    rows="5"
                    className="w-full p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-transparent focus:border-brand/30 focus:bg-white dark:focus:bg-[#060010] focus:ring-4 focus:ring-brand/5 outline-none text-slate-900 dark:text-white transition-all resize-none placeholder:text-gray-300 dark:placeholder:text-gray-600 shadow-inner"
                    placeholder="Describe the incident in detail. Include timestamps or IDs if applicable..."
                  ></textarea>
                </div>

                {/* Footer and Submit */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                    <div className="flex items-center gap-3 text-gray-400">
                        <FaHeadset className="text-brand opacity-50" />
                        <span className="text-[11px] font-medium tracking-wide">Live Agent Availability: <span className="text-green-500 font-bold">Online</span></span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02, shadow: "0 20px 40px -15px rgba(82,39,255,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl uppercase tracking-[3px] text-[11px] shadow-xl transition-all"
                    >
                      Submit Ticket
                    </motion.button>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}