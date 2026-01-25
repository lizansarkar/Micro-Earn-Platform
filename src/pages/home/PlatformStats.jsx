import React from "react";
import { motion } from "framer-motion";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from "recharts";
import { FaUsers, FaTasks, FaDollarSign } from "react-icons/fa";

// Sample Data
const data = [
  { name: "Aug", users: 2000, paid: 800 },
  { name: "Sep", users: 3500, paid: 1500 },
  { name: "Oct", users: 5000, paid: 2800 },
  { name: "Nov", users: 7000, paid: 3500 },
  { name: "Dec", users: 8500, paid: 4200 },
  { name: "Jan", users: 10000, paid: 5000 },
];

const stats = [
  { id: 1, label: "Total Users", value: "10,000+", icon: <FaUsers />, color: "bg-blue-500" },
  { id: 2, label: "Tasks Done", value: "50,000+", icon: <FaTasks />, color: "bg-green-500" },
  { id: 3, label: "Total Paid", value: "$5,000+", icon: <FaDollarSign />, color: "bg-brand" },
];

export default function PlatformStats() {
  return (
    <section className="py-20 px-4 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Stats Cards */}
          <div className="relative">
            {/* Background Accent for 3D feel */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/10 blur-[80px] rounded-full -z-10"></div>
            
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand font-black uppercase tracking-[4px] text-[10px] md:text-xs mb-4 block"
            >
              Platform Growth
            </motion.span>
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Scaling New <span className="text-brand">Heights</span> <br /> 
              Together with You.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {stats.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 rounded-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-none relative overflow-hidden group"
                >
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 dark:bg-white/5 rounded-bl-full -z-0 transition-colors group-hover:bg-brand/10"></div>

                  <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center mb-5 shadow-lg relative z-10`}>
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  
                  <h3 className="text-2xl font-black relative z-10">
                    {item.value}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mt-1 relative z-10">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Recharts AreaChart (3D Container) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[400px] w-full p-6 md:p-8 rounded-[2rem] dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-2xl relative"
          >
            {/* Chart Glow */}
            <div className="absolute inset-0 bg-brand/5 dark:bg-brand/10 blur-3xl -z-10 rounded-full"></div>

            <div className="flex justify-between items-center mb-8">
              <h4 className="dark:text-slate-200 text-sm font-black uppercase tracking-widest">
                Payout Trends
              </h4>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-brand"></div>
                <div className="w-3 h-3 rounded-full bg-brand/30"></div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006bb3" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#006bb3" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888815" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 11, fontWeight: 600}}
                  dy={15}
                />
                <YAxis hide={true} />
                <Tooltip 
                  cursor={{ stroke: '#006bb3', strokeWidth: 2 }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    backgroundColor: '#1e293b', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    color: '#fff',
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="paid" 
                  stroke="#006bb3" 
                  strokeWidth={5}
                  fillOpacity={1} 
                  fill="url(#colorPaid)" 
                  animationDuration={2500}
                />
              </AreaChart>
            </ResponsiveContainer>
            
            <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-4">
              * Statistics are updated in real-time based on platform activity.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}