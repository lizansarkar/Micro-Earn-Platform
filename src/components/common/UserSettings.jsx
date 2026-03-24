import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User, Mail, Shield, Bell, Globe, Camera,
    Save, Lock, Trash2, Smartphone, CheckCircle
} from 'lucide-react';

export default function UserSettings() {
    const [activeTab, setActiveTab] = useState('general');

    const sidebarItems = [
        { id: 'general', label: 'General Info', icon: <User size={18} /> },
        { id: 'security', label: 'Security & Password', icon: <Shield size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
        { id: 'privacy', label: 'Privacy & Data', icon: <Lock size={18} /> },
    ];

    return (
        <div className="min-h-screen bg-transparent p-4 lg:p-10 font-sans">

            {/* --- PAGE HEADER --- */}
            <div className="mb-10 text-center lg:text-left">
                <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                    User Settings
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium italic mt-2">
                    Customize your profile, security, and application preferences.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                {/* --- LEFT SIDE: TABS NAVIGATION --- */}
                <aside className="xl:col-span-3 space-y-3">
                    <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-4 rounded-[2.5rem] shadow-sm">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 mb-2 ${activeTab === item.id
                                        ? 'bg-brand text-white shadow-xl shadow-brand/30'
                                        : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'
                                    }`}
                            >
                                {item.icon} {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Quick Help Box */}
                    <div className="bg-brand/5 border border-brand/10 p-6 rounded-[2rem] text-center">
                        <p className="text-[10px] font-black text-brand uppercase tracking-widest mb-2">Need Support?</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                            Facing issues with your account? <br />
                            <span className="text-brand underline cursor-pointer">Contact Support</span>
                        </p>
                    </div>
                </aside>

                {/* --- RIGHT SIDE: CONTENT AREA --- */}
                <main className="xl:col-span-9">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-[3rem] p-8 lg:p-12 shadow-sm min-h-[600px] relative overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none"></div>

                        {activeTab === 'general' && (
                            <div className="space-y-12 relative z-10">
                                {/* Profile Photo Section */}
                                <div className="flex flex-col md:flex-row items-center gap-10 border-b border-black/5 dark:border-white/5 pb-12">
                                    <div className="relative group">
                                        <div className="w-36 h-36 rounded-[3rem] bg-gradient-to-tr from-brand to-purple-600 p-1">
                                            <div className="w-full h-full rounded-[2.8rem] bg-white dark:bg-[#020008] overflow-hidden flex items-center justify-center">
                                                <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=worker" alt="Avatar" className="w-24 h-24" />
                                            </div>
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-white dark:bg-brand text-brand dark:text-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-slate-50 dark:border-[#020008] hover:scale-110 transition-transform">
                                            <Camera size={20} />
                                        </button>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Your Identity</h2>
                                        <p className="text-sm text-slate-400 mt-1 font-medium">Update your profile picture and personal info.</p>
                                    </div>
                                </div>

                                {/* Info Form */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-2 italic">Full Name</label>
                                        <div className="relative group">
                                            <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand transition-transform group-focus-within:scale-110" />
                                            <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold dark:text-white outline-none focus:border-brand/50 transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-2 italic">Email Address</label>
                                        <div className="relative group">
                                            <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand transition-transform group-focus-within:scale-110" />
                                            <input type="email" placeholder="worker@platform.com" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold dark:text-white outline-none focus:border-brand/50 transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-2 italic">Contact Number</label>
                                        <div className="relative group">
                                            <Smartphone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand" />
                                            <input type="text" placeholder="+880 1XXX-XXXXXX" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold dark:text-white outline-none focus:border-brand/50 transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-2 italic">Current Location</label>
                                        <div className="relative group">
                                            <Globe size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand" />
                                            <select className="w-full bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold dark:text-white outline-none focus:border-brand/50 appearance-none transition-all">
                                                <option>Bangladesh</option>
                                                <option>United States</option>
                                                <option>India</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button className="w-full md:w-auto px-12 py-5 bg-brand text-white rounded-[2rem] font-black uppercase tracking-[3px] text-[10px] shadow-2xl shadow-brand/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3">
                                        <Save size={18} /> Save Profile Changes
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="max-w-xl space-y-10 relative z-10">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Security Wall</h2>
                                    <p className="text-sm text-slate-400 mt-1 font-medium italic">Keep your account safe with a strong password.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-2">Current Password</label>
                                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl py-5 px-8 text-sm font-bold dark:text-white outline-none focus:border-brand/50 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-2">New Password</label>
                                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-2xl py-5 px-8 text-sm font-bold dark:text-white outline-none focus:border-brand/50 transition-all" />
                                    </div>
                                </div>

                                <div className="bg-yellow-500/5 border border-yellow-500/10 p-6 rounded-[2rem]">
                                    <p className="text-[11px] font-bold text-yellow-600 dark:text-yellow-400 italic">
                                        Pro Tip: Use at least 8 characters with a mix of letters, numbers, and symbols for maximum protection.
                                    </p>
                                </div>

                                <button className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black uppercase tracking-[4px] text-[10px] shadow-xl hover:scale-[1.01] transition-all">
                                    Update Security Credentials
                                </button>
                            </div>
                        )}

                        {/* Privacy Section Placeholder */}
                        {activeTab === 'privacy' && (
                            <div className="space-y-10 relative z-10">
                                <div className="p-10 border-2 border-dashed border-red-500/20 rounded-[3rem] bg-red-500/5 text-center">
                                    <Trash2 size={40} className="text-red-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Delete Account</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold max-w-sm mx-auto mb-6">Once you delete your account, there is no going back. Please be certain.</p>
                                    <button className="px-10 py-4 bg-red-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">
                                        Deactivate Forever
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
