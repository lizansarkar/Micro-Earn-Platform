import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router"; // বা react-router-dom
import { FaCoins, FaClock, FaUserTie, FaArrowRight } from "react-icons/fa";

const TaskList = () => {
  // ডামি ডাটা (পরে আপনি API থেকে ডাটা নিয়ে আসবেন)
  const tasks = [
    {
      _id: "1",
      title: "Watch YouTube Video & Subscribe",
      buyer_name: "John Doe",
      payable_amount: 50,
      completion_date: "2024-06-20",
      required_workers: 10,
      total_submissions: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      _id: "2",
      title: "App Download & Review",
      buyer_name: "Jane Smith",
      payable_amount: 120,
      completion_date: "2024-06-25",
      required_workers: 5,
      total_submissions: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      _id: "3",
      title: "Complete a Simple Survey",
      buyer_name: "Alex Vance",
      payable_amount: 30,
      completion_date: "2024-06-18",
      required_workers: 20,
      total_submissions: 15,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black dark:text-white text-slate-800">
            Available <span className="text-brand">Tasks</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Choose a task, complete it honestly, and earn coins instantly.
          </p>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-brand/10 border border-brand/20 rounded-2xl">
          <FaCoins className="text-brand text-xl" />
          <span className="font-bold text-brand">Total Tasks: {tasks.length}</span>
        </div>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <motion.div
            key={task._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-6 hover:border-brand/50 transition-all duration-500 shadow-xl shadow-black/[0.02]"
          >
            {/* Reward Badge */}
            <div className="absolute top-4 right-4 bg-brand text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-brand/30">
              <FaCoins /> {task.payable_amount}
            </div>

            {/* Buyer Info */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <FaUserTie className="text-slate-500" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Buyer</p>
                <h4 className="text-sm font-bold dark:text-slate-200 text-slate-700">{task.buyer_name}</h4>
              </div>
            </div>

            {/* Task Title */}
            <h3 className="text-xl font-bold dark:text-white text-slate-800 mb-4 line-clamp-2 min-h-[3.5rem]">
              {task.title}
            </h3>

            {/* Stats */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-2">
                  <FaClock /> Deadline:
                </span>
                <span className="font-semibold dark:text-slate-300">{task.completion_date}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Vacancy:</span>
                <span className="font-semibold text-brand">
                  {task.total_submissions} / {task.required_workers}
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(task.total_submissions / task.required_workers) * 100}%` }}
                  className="h-full bg-brand rounded-full"
                ></motion.div>
              </div>
            </div>

            {/* View Details Button */}
            <Link to={`/dashboard/worker/task/${task._id}`}>
              <button className="w-full py-4 rounded-2xl bg-slate-100 dark:bg-white/5 dark:text-white font-bold flex items-center justify-center gap-3 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                View Details
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;