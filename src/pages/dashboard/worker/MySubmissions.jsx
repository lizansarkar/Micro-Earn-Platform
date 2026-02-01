import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Coins, 
  ExternalLink, 
  Search 
} from "lucide-react";

const MySubmissions = () => {
  // ডামি ডাটা
  const submissions = [
    {
      _id: "1",
      task_title: "Watch YouTube Video & Subscribe",
      buyer_name: "John Doe",
      payable_amount: 50,
      status: "pending",
      submitted_at: "2024-05-10",
    },
    {
      _id: "2",
      task_title: "App Download & Review",
      buyer_name: "Jane Smith",
      payable_amount: 120,
      status: "approved",
      submitted_at: "2024-05-08",
    },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      pending: "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
      approved: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
      rejected: "bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 border-rose-200 dark:border-rose-500/20",
    };

    const icons = {
      pending: <Clock size={14} />,
      approved: <CheckCircle2 size={14} />,
      rejected: <XCircle size={14} />,
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 w-fit capitalize ${styles[status]}`}>
        {icons[status]} {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black dark:text-white text-slate-800">
            My <span className="text-brand">Submissions</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Track your task status and earnings progress.
          </p>
        </div>

        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search submissions..." 
            className="pl-12 pr-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:border-brand transition-all w-full md:w-64"
          />
        </div>
      </div>

      {/* Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/[0.03] border-b border-slate-200 dark:border-white/10">
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Task Info</th>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Buyer</th>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Reward</th>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {submissions.map((sub, index) => (
                <motion.tr 
                  key={sub._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-slate-50/50 dark:hover:bg-white/[0.01] transition-colors group"
                >
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand transition-colors cursor-pointer flex items-center gap-2">
                      {sub.task_title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400">
                    {sub.buyer_name}
                  </td>
                  <td className="px-6 py-4 font-black text-brand flex items-center gap-2">
                    <Coins size={16} /> {sub.payable_amount}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(sub.status)}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {sub.submitted_at}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {submissions.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold dark:text-white">No submissions found</h3>
            <p className="text-slate-500">You haven't submitted any tasks yet.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MySubmissions;