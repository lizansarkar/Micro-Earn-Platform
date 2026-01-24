import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ShieldCheck, Eye, EyeOff, Globe } from "lucide-react";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function Login() {
  const { signInUser, signInWithGoogle } = UseAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  
  const [loginError, setLoginError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // কুইক অ্যাডমিন অ্যাকসেস লজিক
  const handleDemoAdmin = () => {
    setValue("email", "admin@gmail.com");
    setValue("password", "123456Aa");
    setLoginError("");
  };

  const redirectToDashboard = async (email) => {
    try {
      const res = await axiosSecure.get(`/users/${email}/role`);
      const role = res.data.role;
      // রোল অনুযায়ী ডায়নামিক নেভিগেশন
      const targetPath = role ? `/dashboard/${role.toLowerCase()}` : "/dashboard";
      navigate(targetPath, { replace: true });
    } catch (error) {
      navigate("/dashboard", { replace: true });
    }
  };

  const onSubmit = async (data) => {
    setLoginError("");
    setIsSubmitting(true);
    try {
      await signInUser(data.email, data.password);
      await redirectToDashboard(data.email);
    } catch (error) {
      setLoginError(error.code === "auth/invalid-credential" ? "Invalid email or password." : "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      await redirectToDashboard(result.user.email);
    } catch (error) {
      setLoginError("Google login failed.");
    }
  };

  // স্টাইল গাইড (Register পেজের সাথে মিল রেখে)
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand transition-all backdrop-blur-md";
  const labelStyle = "text-[10px] font-black uppercase tracking-[3px] text-white/40 mb-2 flex items-center gap-2 ml-1";

  return (
    <div className="w-full max-w-md mx-auto relative group">
      
      {/* ১. কুইক অ্যাডমিন ব্যাজ */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={handleDemoAdmin}
        type="button"
        className="absolute -top-12 right-0 bg-brand/20 hover:bg-brand text-brand hover:text-white text-[10px] font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-2 border border-brand/30 backdrop-blur-md z-20"
      >
        <ShieldCheck size={14} /> Quick Admin Access
      </motion.button>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Welcome Back</h2>
        <p className="text-white/40 text-sm mt-2">Access your elite dashboard</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Email Field */}
        <div className="relative group">
          <label className={labelStyle}><Mail size={12}/> Access ID (Email)</label>
          <Mail className="absolute left-4 top-[44px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
          <input
            type="email"
            placeholder="example@email.com"
            className={inputStyle}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase tracking-wider">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="relative group">
          <div className="flex justify-between items-center">
            <label className={labelStyle}><Lock size={12}/> Security Key</label>
            <Link to="/forgot-password" size={12} className="text-[10px] text-white/20 hover:text-brand transition-colors uppercase font-bold tracking-widest mb-2">Recover?</Link>
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
            onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword); }}
            className="absolute right-4 top-[44px] text-white/20 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && <p className="text-red-500 text-[10px] mt-1 ml-2 font-bold uppercase tracking-wider">{errors.password.message}</p>}
        </div>

        {loginError && <p className="bg-red-500/10 border border-red-500/20 text-red-500 text-[11px] py-3 rounded-xl text-center font-bold uppercase tracking-widest">{loginError}</p>}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-brand hover:bg-brand/90 text-white font-black uppercase tracking-[4px] py-4 rounded-2xl shadow-[0_10px_40px_rgba(82,39,255,0.4)] flex items-center justify-center gap-3 transition-all mt-4 disabled:opacity-50"
        >
          {isSubmitting ? "Authenticating..." : <><LogIn size={18} /> Enter Dashboard</>}
        </motion.button>
      </form>

      {/* Social Divider */}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
        <div className="relative flex justify-center text-[10px] uppercase tracking-[3px]"><span className="bg-[#060010] px-4 text-white/20">Secure Gateway</span></div>
      </div>

      {/* Google Login */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={handleGoogleLogin}
        className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-md"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-[10px] font-black uppercase tracking-[2px]">Sign in with Google</span>
      </motion.button>

      <p className="text-center text-xs mt-10 text-white/20 uppercase tracking-[2px]">
        New Personnel? 
        <Link to="/register" className="text-brand font-black ml-2 hover:text-white transition-colors underline underline-offset-4">Get Access</Link>
      </p>
    </div>
  );
}