import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wallet, ArrowUpRight, Clock, CheckCircle2, 
  AlertCircle, Building2, CreditCard, Landmark, 
  ChevronRight, History, DollarSign
} from 'lucide-react';

const paymentMethods = [
  { id: 'bkash', name: 'bKash', icon: <div className="w-8 h-8 bg-[#D12053] rounded-lg" />, fee: '2%' },
  { id: 'nagad', name: 'Nagad', icon: <div className="w-8 h-8 bg-[#F7941D] rounded-lg" />, fee: '1.5%' },
  { id: 'rocket', name: 'Rocket', icon: <div className="w-8 h-8 bg-[#8C3494] rounded-lg" />, fee: '2%' },
  { id: 'bank', name: 'Bank Transfer', icon: <Landmark className="text-blue-500" />, fee: 'Free' },
];

const withdrawalHistory = [
  { id: "#WD-9821", date: "Oct 24, 2024", amount: 45.00, method: "bKash", status: "Completed" },
  { id: "#WD-9750", date: "Oct 12, 2024", amount: 120.50, method: "Bank Transfer", status: "Pending" },
  { id: "#WD-9612", date: "Sep 28, 2024", amount: 15.00, method: "Nagad", status: "Rejected" },
];

export default function Withdrawals() {
  const [selectedMethod, setSelectedMethod] = useState('bkash');
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-transparent p-4 lg:p-8">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">My Wallet</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic">Withdraw your earnings to your local accounts.</p>
        </div>
        
        <div className="bg-brand p-1 rounded-[2rem] flex items-center pr-8 shadow-xl shadow-brand/20">
          <div className="w-14 h-14 rounded-[1.8rem] bg-white/20 flex items-center justify-center text-white shrink-0">
            <Wallet size={24} />
          </div>
          <div className="ml-4">
            <p className="text-[10px] font-black text-white/70 uppercase tracking-widest">Available Balance</p>
            <p className="text-2xl font-black text-white">$458.20</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* --- LEFT: WITHDRAWAL FORM (7 COLUMNS) --- */}
        <div className="xl:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-lg font-black dark:text-white text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
              <ArrowUpRight className="text-brand" /> Withdrawal Request
            </h3>

            <div className="space-y-8">
              {/* Method Selection */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-4 block ml-2">Select Method</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
                        selectedMethod === method.id 
                        ? 'border-brand bg-brand/5 dark:bg-brand/10' 
                        : 'border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] opacity-60 hover:opacity-100'
                      }`}
                    >
                      {method.icon}
                      <span className="text-[10px] font-black uppercase tracking-tighter dark:text-white">{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-3 block ml-2">Amount (USD)</label>
                  <div className="relative">
                    <DollarSign size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand" />
                    <input 
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-lg font-black dark:text-white outline-none focus:border-brand/50 transition-all"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-3 block ml-2">Account Number</label>
                  <input 
                    type="text"
                    placeholder="e.g. 017XXXXXXXX"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 px-6 text-sm font-bold dark:text-white outline-none focus:border-brand/50 transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full py-6 bg-brand text-white rounded-[2rem] font-black uppercase tracking-[4px] text-xs shadow-xl shadow-brand/20 hover:scale-[1.01] active:scale-[0.98] transition-all">
                Process Withdrawal
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: RECENT HISTORY (5 COLUMNS) --- */}
        <div className="xl:col-span-5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 h-full"
          >
            <h3 className="text-sm font-black dark:text-white text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
              <History size={18} className="text-brand" /> Recent History
            </h3>

            <div className="space-y-4">
              {withdrawalHistory.map((item, i) => (
                <div 
                  key={i} 
                  className="group flex items-center justify-between p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-brand/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                      item.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      {item.status === 'Completed' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                    </div>
                    <div>
                      <p className="text-xs font-black dark:text-white uppercase tracking-tight">{item.id}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{item.date} • {item.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black dark:text-white tracking-tight">-${item.amount}</p>
                    <p className={`text-[9px] font-black uppercase tracking-widest mt-1 ${
                      item.status === 'Completed' ? 'text-emerald-500' : 
                      item.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'
                    }`}>{item.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-4 rounded-2xl border border-brand/20 text-brand font-black uppercase tracking-widest text-[10px] hover:bg-brand hover:text-white transition-all">
              View Full Statement
            </button>
          </motion.div>
        </div>
      </div>

      {/* Warning Alert */}
      <div className="mt-8 bg-brand/5 border border-brand/10 p-6 rounded-[2rem] flex items-start gap-4">
        <AlertCircle className="text-brand shrink-0" size={20} />
        <div>
          <p className="text-[10px] font-black text-brand uppercase tracking-widest mb-1">Important Note</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic">
            Minimum withdrawal amount is $10.00. Payments are processed within 24-72 hours. Please double-check your account number before submitting.
          </p>
        </div>
      </div>
    </div>
  );
}