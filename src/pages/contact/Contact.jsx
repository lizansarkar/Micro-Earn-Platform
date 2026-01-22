import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaTelegramPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-black uppercase text-[10px] tracking-[4px] mb-4"
          >
            <FaHeadset className="animate-pulse" /> 24/7 Support
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Get in <span className="text-brand">Touch</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-4 font-medium italic max-w-xl mx-auto">
            Have a question or need help? Our team is always here to assist you on your journey to the top.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT SIDE: CONTACT INFO CARDS --- */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">
              Quick Connect
            </h3>
            
            {/* Telegram Card */}
            <motion.a 
              href="#"
              whileHover={{ x: 15 }}
              className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group transition-all"
            >
              <div className="w-16 h-16 rounded-3xl bg-[#229ED9]/10 flex items-center justify-center text-[#229ED9] text-3xl group-hover:bg-[#229ED9] group-hover:text-white transition-all">
                <FaTelegramPlane />
              </div>
              <div>
                <h4 className="font-black dark:text-white uppercase text-sm tracking-widest">Telegram</h4>
                <p className="text-slate-500 text-sm">@YourBrandSupport</p>
              </div>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a 
              href="#"
              whileHover={{ x: 15 }}
              className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group transition-all"
            >
              <div className="w-16 h-16 rounded-3xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] text-3xl group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <FaWhatsapp />
              </div>
              <div>
                <h4 className="font-black dark:text-white uppercase text-sm tracking-widest">WhatsApp</h4>
                <p className="text-slate-500 text-sm">+1 234 567 890</p>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.div 
              className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group transition-all"
            >
              <div className="w-16 h-16 rounded-3xl bg-brand/10 flex items-center justify-center text-brand text-3xl group-hover:bg-brand group-hover:text-white transition-all">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-black dark:text-white uppercase text-sm tracking-widest">Email Us</h4>
                <p className="text-slate-500 text-sm">hello@yourbrand.com</p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: UNIQUE CONTACT FORM --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 relative"
          >
            {/* Golden Glow Behind Form */}
            <div className="absolute inset-0 bg-brand/5 blur-[100px] rounded-full"></div>
            
            <form className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 md:p-12 rounded-[4rem] border border-white dark:border-slate-800 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand dark:text-white outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand dark:text-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4">How can we help?</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell us about your project or issue..." 
                  className="w-full px-6 py-4 rounded-3xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand dark:text-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand text-white font-black rounded-3xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-[0_15px_30px_rgba(82,39,255,0.3)] hover:shadow-[0_15px_40px_rgba(82,39,255,0.5)] transition-all"
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}