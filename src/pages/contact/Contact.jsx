import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock,
  FaHeadset 
} from 'react-icons/fa';

export default function Contact() {
  
  // প্রফেশনাল কন্টাক্ট লিস্ট
  const contactDetails = [
    {
      icon: <FaEnvelope className="text-brand" />,
      title: "Email Address",
      info: "support@etuitionbd.com",
      sub: "Response within 24 hours"
    },
    {
      icon: <FaPhoneAlt className="text-brand" />,
      title: "Official Phone",
      info: "+880 1234 567 890",
      sub: "Mon - Fri, 9am - 6pm"
    },
    {
      icon: <FaMapMarkerAlt className="text-brand" />,
      title: "Headquarters",
      info: "Dhanmondi, Dhaka",
      sub: "Bangladesh"
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-white dark:bg-[#060010] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- বাম দিক: প্রফেশনাল কন্টেন্ট --- */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-brand font-bold uppercase tracking-[4px] text-xs flex items-center gap-2 mb-4"
              >
                <span className="w-8 h-[2px] bg-brand"></span> Contact Us
              </motion.span>
              <h1 className="text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                Let’s start a <br /> 
                <span className="text-brand">Conversation.</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                Have questions about our platform or need technical assistance? 
                Our team is here to help you grow your academic or professional journey.
              </p>
            </div>

            {/* কন্টাক্ট ইনফো লিস্ট */}
            <div className="space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-xl transition-all group-hover:bg-brand group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white/90 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-900 dark:text-white font-medium">{item.info}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- ডান দিক: সলিড প্রফেশনাল ফর্ম --- */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-50 dark:bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none relative overflow-hidden"
            >
              {/* ফর্ম হেডার */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a Message</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic font-medium">Fields marked with * are required.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-white dark:bg-[#0c051a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all dark:text-white"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      className="w-full bg-white dark:bg-[#0c051a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                  <select className="w-full bg-white dark:bg-[#0c051a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:border-brand outline-none transition-all dark:text-white appearance-none cursor-pointer">
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Issue</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message *</label>
                  <textarea 
                    rows="5" 
                    placeholder="How can we assist you?"
                    className="w-full bg-white dark:bg-[#0c051a] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all dark:text-white resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-brand text-white font-bold py-4 rounded-xl shadow-lg shadow-brand/20 hover:shadow-brand/30 flex items-center justify-center gap-3 transition-all tracking-widest uppercase text-xs"
                >
                  <FaPaperPlane size={14} /> Send Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}