import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Mail, User, Lock, Phone, UserCog, EyeOff, Eye, Rocket } from "lucide-react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function Register() {
  const { registerUser, updateUserProfile, signInWithGoogle } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setRegisterError("");
    try {
      const result = await registerUser(data.email, data.password);
      const firebaseUser = result.user;

      await updateUserProfile({ displayName: data.name });

      const userData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        firebaseUID: firebaseUser.uid,
        photoURL: firebaseUser.photoURL || null,
      };

      await axiosSicure.post(`/users`, userData);

      Swal.fire({
        title: "Success!",
        text: `Welcome to the mission, ${data.name}!`,
        icon: "success",
        background: '#1a0b5e',
        color: '#fff',
        confirmButtonColor: "#5227ff",
      });

      navigate(`/dashboard/${data.role}`);
    } catch (error) {
      setRegisterError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        role: "student",
        firebaseUID: user.uid,
        photoURL: user.photoURL,
      };

      await axiosSicure.post("/users", userData);
      const roleRes = await axiosSicure.get(`/users/${user.email}/role`);
      navigate(`/dashboard/${roleRes.data.role || 'student'}`);
    } catch (error) {
      console.log(error);
    }
  };

  // ইনপুট ফিল্ডের কমন ডিজাইন
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all backdrop-blur-md";
  const labelStyle = "text-xs font-black uppercase tracking-[2px] text-white/40 mb-2 flex items-center gap-2 ml-1";

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Create Account</h2>
        <p className="text-white/40 text-sm mt-2">Join the elite community of eTuitionBD</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Full Name */}
        <div className="relative group">
          <label className={labelStyle}><User size={14}/> Full Name</label>
          <User className="absolute left-4 top-[46px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
          <input
            type="text"
            placeholder="John Doe"
            className={inputStyle}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-2 uppercase font-bold">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="relative group">
          <label className={labelStyle}><Mail size={14}/> Email Address</label>
          <Mail className="absolute left-4 top-[46px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
          <input
            type="email"
            placeholder="email@example.com"
            className={inputStyle}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 uppercase font-bold">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="relative group">
            <label className={labelStyle}><Phone size={14}/> Phone</label>
            <Phone className="absolute left-4 top-[46px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
            <input
                type="text"
                placeholder="+880"
                className={inputStyle}
                {...register("phone", { required: "Required" })}
            />
            </div>

            {/* Role Selection */}
            <div className="relative group">
            <label className={labelStyle}><UserCog size={14}/> I am a</label>
            <UserCog className="absolute left-4 top-[46px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
            <select
                className={`${inputStyle} appearance-none cursor-pointer`}
                {...register("role", { required: true })}
                defaultValue="student"
            >
                <option value="student" className="bg-[#1a0b5e]">Student</option>
                <option value="tutor" className="bg-[#1a0b5e]">Tutor</option>
            </select>
            </div>
        </div>

        {/* Password */}
        <div className="relative group">
          <label className={labelStyle}><Lock size={14}/> Password</label>
          <Lock className="absolute left-4 top-[46px] text-white/20 group-focus-within:text-brand transition-colors" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className={inputStyle}
            {...register("password", { 
              required: "Password required",
              minLength: { value: 6, message: "Min 6 chars" }
            })}
          />
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword); }}
            className="absolute right-4 top-[46px] text-white/20 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && <p className="text-red-500 text-[10px] mt-1 ml-2 uppercase font-bold">{errors.password.message}</p>}
        </div>

        {registerError && <p className="text-red-500 text-center text-xs font-bold uppercase">{registerError}</p>}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          type="submit"
          className="w-full bg-brand hover:bg-brand/90 text-white font-black uppercase tracking-[3px] py-4 rounded-2xl shadow-[0_10px_30px_rgba(82,39,255,0.4)] flex items-center justify-center gap-3 transition-all mt-6 disabled:opacity-50"
        >
          {loading ? "Processing..." : <><Rocket size={18} /> Register Now</>}
        </motion.button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
        <div className="relative flex justify-center text-xs uppercase tracking-[2px]"><span className="bg-[#060010] px-4 text-white/20">Social Connect</span></div>
      </div>

      {/* Google Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={handleGoogleLogin}
        className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.85-3.21 3.42v2.82h5.2c3.04-2.8 4.79-6.94 4.79-11.89c0-.81-.08-1.59-.22-2.3z" fill="#4285F4"/><path fill="currentColor" d="M12.18 21.43c2.73 0 5.02-.89 6.69-2.38l-5.2-2.82c-.64.44-1.48.69-2.3.69c-2.53 0-4.68-1.71-5.45-4.01H.72v2.91a10.8 10.8 0 0 0 11.46 5.61z" fill="#34A853"/><path fill="currentColor" d="M6.73 12.91c-.19-.58-.3-1.2-.3-1.84c0-.64.11-1.26.3-1.84V6.32H.72a10.81 10.81 0 0 0 0 9.5l6.01-2.91z" fill="#FBBC05"/><path fill="currentColor" d="M12.18 6.07c1.49 0 2.82.51 3.87 1.52l2.91-2.91C17.19 2.92 14.89 2.07 12.18 2.07a10.8 10.8 0 0 0-11.46 7.16l6.01 2.91c.77-2.3 2.92-4.01 5.45-4.01z" fill="#EA4335"/></svg>
        <span className="text-[10px] font-black uppercase tracking-[2px]">Register with Google</span>
      </motion.button>
    </div>
  );
}