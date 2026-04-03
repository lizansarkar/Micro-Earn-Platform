import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  ExternalLink,
  Send,
  AlertCircle,
  Info,
  ShieldCheck,
  ChevronRight,
  Layout,
  Image as ImageIcon,
  MessageSquare,
} from "lucide-react";

export default function TaskDetails() {
  const [submission, setSubmission] = useState("");
  const [fileSelected, setFileSelected] = useState(false);

  const task = {
    title: "Subscribe to YouTube & Leave a Review",
    buyer: "Elite Marketing Group",
    price: 0.5,
    timeLimit: "30 Minutes",
    description:
      "Go to our official YouTube channel and subscribe. Watch at least 2 minutes of the latest video and leave a meaningful comment.",
    instructions: [
      "Must use a permanent YouTube account.",
      "Watch the video for at least 2 minutes.",
      "The comment must be 5+ words.",
      "Screenshot must show the 'Subscribed' button clearly.",
    ],
    link: "https://youtube.com/c/example",
  };

  return (
    <div className="min-h-screen bg-transparent p-0 lg:p-4 font-sans">
      {/* --- DASHBOARD HEADER BREADCRUMB --- */}
      <div className="flex items-center gap-3 mb-8 ml-2">
        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
          <Layout size={20} />
        </div>
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[2px] text-slate-400">
          Worker <ChevronRight size={14} /> Tasks <ChevronRight size={14} />
          <span className="text-brand">Task Details</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* --- LEFT: MAIN TASK CONTENT (2 COLUMNS) --- */}
        <div className="xl:col-span-2 space-y-6">
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[40px] rounded-full -mr-10 -mt-10"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter max-w-md">
                {task.title}
              </h1>
              <div className="text-center bg-brand text-white px-6 py-3 rounded-2xl shadow-lg shadow-brand/20 shrink-0">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">
                  Reward
                </p>
                <p className="text-2xl font-black">${task.price}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 relative z-10">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest">
                <Clock size={14} /> {task.timeLimit}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={14} /> Verified Buyer
              </span>
            </div>
          </motion.div>

          {/* Description & Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
                <FileText size={18} />
              </div>
              <h3 className="font-black uppercase tracking-widest text-sm dark:text-white">
                Instruction Guide
              </h3>
            </div>

            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed italic">
              "{task.description}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {task.instructions.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center text-[10px] font-black shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-bold leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href={task.link}
              target="_blank"
              className="mt-8 w-full flex items-center justify-center gap-3 py-5 rounded-3xl bg-brand/5 dark:bg-brand/10 text-brand font-black uppercase tracking-[3px] text-xs border border-brand/20 hover:bg-brand hover:text-white transition-all"
            >
              Open Task Link <ExternalLink size={16} />
            </motion.a>
          </motion.div>

          {/* Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#060010] p-8 rounded-[2.5rem] border border-black/5 dark:border-white/5 relative overflow-hidden shadow-xl shadow-black/[0.02] dark:shadow-none"
          >
            {/* সেন্টারিং নিশ্চিত করার জন্য একটি ম্যাক্স উইডথ কন্টেইনার (ঐচ্ছিক চাইলে বাদ দিতে পারেন) */}
            <div className="max-w-3xl mx-auto relative z-10">
              {/* Header */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 text-slate-900 dark:text-white">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  <Send size={20} />
                </div>
                <h3 className="font-black uppercase tracking-widest text-sm">
                  Submit Proof
                </h3>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Textarea Area */}
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute top-6 left-6 text-brand/50"
                  />
                  <textarea
                    value={submission}
                    onChange={(e) => setSubmission(e.target.value)}
                    placeholder="Write your submission notes or required text info here..."
                    className="w-full h-40 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2rem] p-6 pl-14 text-sm text-slate-700 dark:text-white outline-none focus:border-brand/50 focus:ring-4 focus:ring-brand/5 transition-all resize-none"
                  />
                </div>

                {/* Upload Area */}
                <div
                  onClick={() => setFileSelected(true)}
                  className={`border-2 border-dashed rounded-[2rem] p-10 text-center transition-all cursor-pointer flex flex-col items-center justify-center group
          ${
            fileSelected
              ? "border-brand bg-brand/5"
              : "border-slate-200 dark:border-white/10 hover:border-brand/40 bg-slate-50/50 dark:bg-white/[0.02]"
          }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 
          ${fileSelected ? "bg-brand text-white" : "bg-slate-100 dark:bg-white/5 text-slate-400"}`}
                  >
                    <ImageIcon size={24} />
                  </div>

                  <p className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">
                    {fileSelected
                      ? "Screenshot Selected"
                      : "Upload Screenshot Proof"}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-2 uppercase font-bold tracking-tight">
                    PNG, JPG or PDF (MAX 2MB)
                  </p>
                </div>

                {/* Submit Button */}
                <button className="w-full py-6 bg-brand text-white rounded-[2rem] font-black uppercase tracking-[4px] text-[10px] shadow-xl shadow-brand/30 hover:shadow-brand/40 hover:scale-[1.01] active:scale-[0.98] transition-all">
                  Finish & Submit Task
                </button>
              </div>
            </div>

            {/* Background Decoration - */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/5 dark:bg-brand/10 blur-[80px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>

        {/* --- RIGHT: SIDEBAR (1 COLUMN) --- */}
        <div className="space-y-6">
          {/* Buyer Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-6 flex items-center gap-2">
              <ShieldCheck size={14} className="text-brand" /> About Employer
            </h4>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand to-yellow-500 flex items-center justify-center text-white font-black text-xl">
                {task.buyer.charAt(0)}
              </div>
              <div>
                <p className="font-black dark:text-white uppercase tracking-tight">
                  {task.buyer}
                </p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className="w-2 h-2 rounded-full bg-yellow-500"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02]">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Success Rate
                </span>
                <span className="text-sm font-black text-brand italic">
                  99%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02]">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Avg. Payment
                </span>
                <span className="text-sm font-black text-yellow-500 italic">
                  Fast
                </span>
              </div>
            </div>
          </motion.div>

          {/* Warning Card */}
          <div className="bg-yellow-500/5 border border-yellow-500/10 p-8 rounded-[2.5rem]">
            <div className="flex items-center gap-3 text-yellow-500 mb-4">
              <AlertCircle size={18} />
              <p className="font-black uppercase text-[10px] tracking-widest">
                Strict Rules
              </p>
            </div>
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed italic">
              "Fake submissions will lead to an immediate ban. We use AI to
              track completion time and proof validity."
            </p>
          </div>

          {/* Help/Support Card */}
          <div className="bg-brand/5 border border-brand/10 p-8 rounded-[2.5rem] relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-black text-brand uppercase text-[10px] tracking-widest mb-2">
                Need Help?
              </p>
              <p className="text-xs font-bold text-slate-500 mb-4 tracking-tight">
                Facing issues with this task? Contact our support agent.
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand underline underline-offset-4">
                Open Support Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
