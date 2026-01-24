import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import errorAnimation from '../assets/lottie/notfound.json'; 

export default function ErrorPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  // ১. AuthLayout এর সাথে হুবহু মিল রেখে ব্যাকগ্রাউন্ড স্টাইল
  const fullBackgroundStyle = {
    background: 'linear-gradient(to bottom right, #060010, #130a40, #060010)',
    position: 'relative',
    minHeight: '100vh',
    width: '100%'
  };

  // ২. আপনার সিগনেচার ফোঁটা ফোঁটা ডট প্যাটার্ন
  const patternOverlay = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
    backgroundSize: '32px 32px',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    pointerEvents: 'none'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div style={fullBackgroundStyle} className="flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* ফোঁটা ফোঁটা প্যাটার্ন লেয়ার */}
      <div style={patternOverlay}></div>

      {/* মেইন কন্টেন্ট সেকশন */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        
        {/* লট্টি এনিমেশন (ফ্লোটিং ইফেক্টসহ) */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full max-w-[300px] md:max-w-md mb-4"
        >
          <Lottie animationData={errorAnimation} loop={true} />
        </motion.div>

        {/* এরর মেসেজ এবং টেক্সট */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
              4<span className="text-brand drop-shadow-[0_0_20px_rgba(82,39,255,0.8)]">0</span>4
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-white/90 uppercase tracking-[0.3em] mt-2">
              Page Not Found
            </h2>
          </motion.div>
          
          <p className="text-slate-400 text-sm md:text-lg font-medium max-w-lg mx-auto leading-relaxed">
            The page you are looking for has been moved or deleted. <br />
            Returning home in <span className="text-yellow-400 font-black text-xl">{countdown}</span> seconds...
          </p>

          {/* অ্যাকশন বাটনস (AuthLayout স্টাইল বাটন) */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <FaArrowLeft /> Back
            </button>

            <Link 
              to="/" 
              className="w-full sm:w-auto px-12 py-4 rounded-2xl bg-brand text-white font-black uppercase tracking-widest text-[10px] shadow-[0_15px_30px_rgba(82,39,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <FaHome /> Home Base
            </Link>
          </div>
        </div>
      </div>

      {/* হালকা ডেকোরেটিভ গ্লো (ঐচ্ছিক, আপনার কালার অনুযায়ী) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 blur-[150px] rounded-full pointer-events-none"></div>
    </div>
  );
}