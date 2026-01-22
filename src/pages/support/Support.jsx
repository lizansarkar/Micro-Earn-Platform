import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLifeRing, FaExclamationTriangle, FaQuestionCircle, FaTools, FaChevronRight } from 'react-icons/fa';

export default function Support() {
  const [selectedIssue, setSelectedIssue] = useState("");

  const issues = [
    { id: 'payment', label: 'Payment Problem', icon: '💰' },
    { id: 'task', label: 'Task Not Counting', icon: '🎯' },
    { id: 'login', label: 'Account Access', icon: '🔐' },
    { id: 'other', label: 'Something Else', icon: '🛠️' },
  ];

  return (
    <section className="py-24 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand font-black uppercase tracking-[4px] text-xs mb-3">
              <FaLifeRing className="animate-spin-slow" /> Support Center
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase leading-none">
              Having <span className="text-brand">Issues?</span> <br /> We're here to help.
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic text-sm md:text-right max-w-[250px]">
            "Your satisfaction is our priority. Report any problem and we'll fix it within 24 hours."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Left: Quick FAQ/Help Cards --- */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group cursor-pointer hover:border-brand/50 transition-all">
              <FaQuestionCircle className="text-4xl text-brand mb-4" />
              <h4 className="text-xl font-black dark:text-white mb-2 uppercase">Read FAQ</h4>
              <p className="text-sm text-slate-500 mb-4">Find quick answers to common questions.</p>
              <FaChevronRight className="text-slate-300 group-hover:text-brand transition-all" />
            </div>

            <div className="p-8 rounded-[2.5rem] bg-brand text-white shadow-2xl shadow-brand/30 group cursor-pointer overflow-hidden relative">
              <FaTools className="text-5xl opacity-20 absolute -bottom-2 -right-2 rotate-12" />
              <h4 className="text-xl font-black mb-2 uppercase">Report a Bug</h4>
              <p className="text-sm text-white/80">Found a technical glitch? Let our developers know.</p>
            </div>
          </div>

          {/* --- Right: Detailed Issue Reporter (Unique Form) --- */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-black dark:text-white uppercase mb-8 flex items-center gap-3">
                <FaExclamationTriangle className="text-yellow-500" /> Submit a Ticket
              </h3>

              <div className="space-y-8">
                {/* Step 1: Select Issue Type */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-4 block ml-2">What's the issue about?</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {issues.map((issue) => (
                      <button
                        key={issue.id}
                        onClick={() => setSelectedIssue(issue.id)}
                        className={`p-4 rounded-2xl text-xs font-black uppercase border-2 transition-all
                          ${selectedIssue === issue.id 
                            ? 'border-brand bg-brand/5 text-brand shadow-lg' 
                            : 'border-slate-100 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'}
                        `}
                      >
                        <span className="block text-2xl mb-2">{issue.icon}</span>
                        {issue.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Description */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-2 block ml-2">Explain in detail</label>
                  <textarea 
                    rows="4"
                    className="w-full p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border-none focus:ring-2 focus:ring-brand outline-none dark:text-white transition-all resize-none shadow-inner"
                    placeholder="Describe what happened..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-[2rem] uppercase tracking-widest text-sm shadow-xl flex items-center justify-center gap-3"
                >
                  Submit Ticket
                </motion.button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}