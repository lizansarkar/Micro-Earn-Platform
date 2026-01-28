import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ShieldCheck, Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios"; // সরাসরি axios ব্যবহার করা ভালো Public Route এর জন্য

export default function Login() {
  const { signInUser, signInWithGoogle, logout } = UseAuth();
  const navigate = useNavigate();
  
  const [loginError, setLoginError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // ১. কুইক অ্যাডমিন অ্যাকসেস (আপনার দেওয়া লজিক)
  const handleDemoAdmin = () => {
    setValue("email", "admin@gmail.com");
    setValue("password", "123456Aa");
    setLoginError("");
  };

  // ২. ড্যাশবোর্ডে পাঠানোর আগে ডাটাবেস চেক করার ফাংশন
  const handleUserVerification = async (email) => {
    try {
      // আপনার ব্যাকএন্ড থেকে ইউজারের ডাটা নিয়ে আসা
      const res = await axios.get(`http://localhost:3000/users/${email}`);
      const userData = res.data;

      if (userData) {
        // যদি ডাটাবেসে ইউজার থাকে
        Swal.fire({
          title: "Access Granted!",
          text: `Welcome back, ${userData.name}`,
          icon: "success",
          background: "#060010",
          color: "#fff",
          confirmButtonColor: "#5227ff",
        });
        
        // রোল অনুযায়ী ডাইনামিক নেভিগেশন
        navigate(`/dashboard/${userData.role.toLowerCase()}`);
      } else {
        // যদি ফায়ারবেসে আছে কিন্তু ডাটাবেসে নেই (এমন হওয়ার কথা নয় তবুও সেফটি)
        await logout(); // ফায়ারবেস থেকে লগআউট করে দাও
        setLoginError("User record not found in database. Please register.");
      }
    } catch (error) {
      console.error(error);
      setLoginError("Verification failed or user does not exist.");
    }
  };

  const onSubmit = async (data) => {
    setLoginError("");
    setIsSubmitting(true);
    try {
      // প্রথমে ফায়ারবেস লগইন
      await signInUser(data.email, data.password);
      // তারপর ডাটাবেস ভেরিফিকেশন
      await handleUserVerification(data.email);
    } catch (error) {
      setLoginError("Invalid email or security key.");
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Check your credentials and try again.",
        background: "#060010",
        color: "#fff",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      
      // গুগল লগইনের ক্ষেত্রেও চেক করা উচিত সে আগে রেজিস্টার করেছে কি না
      const res = await axios.get(`http://localhost:3000/users/${user.email}`);
      if (res.data) {
        navigate(`/dashboard/${res.data.role.toLowerCase()}`);
      } else {
        // যদি নতুন গুগল ইউজার হয়, তবে তাকে রেজিস্ট্রেশন পেজে পাঠিয়ে দিন অথবা 
        // আপনি চাইলে অটো-রেজিস্ট্রেশন লজিক এখানে রাখতে পারেন (যেমনটা রেজিস্ট্রেশন পেজে ছিল)
        setLoginError("Please complete registration first.");
        await logout();
      }
    } catch (error) {
      setLoginError("Google authentication failed.");
    }
  };

  // স্টাইল গাইড
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand transition-all backdrop-blur-md";
  const labelStyle = "text-[10px] font-black uppercase tracking-[3px] text-white/40 mb-2 flex items-center gap-2 ml-1";

  return (
    <div className="w-full max-w-md mx-auto relative mt-10 p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={handleDemoAdmin}
        type="button"
        className="absolute -top-6 right-8 bg-brand/20 hover:bg-brand text-brand hover:text-white text-[10px] font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-2 border border-brand/30 backdrop-blur-md z-20"
      >
        <ShieldCheck size={14} /> Admin Access
      </motion.button>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Welcome Back</h2>
        <p className="text-white/40 text-[10px] uppercase tracking-[3px] font-bold mt-2">Access your elite dashboard</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative group">
          <label className={labelStyle}><Mail size={12}/> Access ID (Email)</label>
          <Mail className="absolute left-4 top-[44px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
          <input
            type="email"
            placeholder="example@email.com"
            className={inputStyle}
            {...register("email", { required: "Email is required" })}
          />
        </div>

        <div className="relative group">
          <div className="flex justify-between items-center">
            <label className={labelStyle}><Lock size={12}/> Security Key</label>
            <Link to="/forgot-password" size={12} className="text-[9px] text-white/20 hover:text-brand transition-colors uppercase font-black tracking-widest mb-2">Lost Key?</Link>
          </div>
          <Lock className="absolute left-4 top-[44px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className={inputStyle}
            {...register("password", { required: "Password is required" })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[44px] text-white/20 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {loginError && <p className="text-red-500 text-[10px] text-center font-black uppercase tracking-widest">{loginError}</p>}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-brand py-4 rounded-2xl text-white font-black uppercase tracking-[4px] text-xs shadow-xl shadow-brand/20 flex items-center justify-center gap-3 transition-all mt-4 disabled:opacity-50"
        >
          {isSubmitting ? "Verifying..." : <><LogIn size={18} /> Enter Dashboard</>}
        </motion.button>
      </form>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
        <div className="relative flex justify-center text-[10px] uppercase tracking-[3px]"><span className="bg-[#060010] px-4 text-white/20 font-bold">Secure Gateway</span></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full py-4 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-white/60 hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm"
      >
        <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
        <span className="text-[10px] font-black uppercase tracking-widest">Sign in with Google</span>
      </button>

      <p className="text-center text-[10px] mt-10 text-white/20 uppercase tracking-[2px] font-bold">
        New Personnel? 
        <Link to="/register" className="text-brand font-black ml-2 hover:underline underline-offset-4">Join Now</Link>
      </p>
    </div>
  );
}