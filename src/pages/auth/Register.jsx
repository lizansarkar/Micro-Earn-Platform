import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  Lock,
  Image as ImageIcon,
  UserCog,
  EyeOff,
  Eye,
  Rocket,
} from "lucide-react";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setRegisterError("");

    // রিকয়ারমেন্ট অনুযায়ী কয়েন ক্যালকুলেশন
    const initialCoin = data.role === "worker" ? 10 : 50;

    try {
      // ১. ফায়ারবেস রেজিস্ট্রেশন
      const result = await registerUser(data.email, data.password);

      // ২. ফায়ারবেস প্রোফাইল আপডেট
      await updateUserProfile(data.name, data.photoURL);

      // ৩. ডাটাবেসে ইউজার ডাটা পাঠানো (MongoDB)
      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: data.photoURL,
        role: data.role,
        coin: initialCoin,
        createdAt: new Date(),
      };

      const res = await axiosSecure.post("/users", userInfo);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Mission Started!",
          text: `Welcome! You've received ${initialCoin} coins as a ${data.role}.`,
          icon: "success",
          background: "#060010",
          color: "#fff",
          confirmButtonColor: "#5227ff",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      setRegisterError(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      // গুগল লগইনের ক্ষেত্রে ডিফল্ট রোল 'worker' এবং ১০ কয়েন
      const userInfo = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role: "worker",
        coin: 10,
        createdAt: new Date(),
      };

      await axiosSecure.post("/users", userInfo);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyle =
    "w-full bg-white/[0.03] border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand transition-all backdrop-blur-md";
  const labelStyle =
    "text-[10px] font-black uppercase tracking-[2px] text-white/40 mb-2 flex items-center gap-2 ml-1";

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
          Join <span className="text-brand">MicroEarn</span>
        </h2>
        <p className="text-white/40 text-xs mt-2 uppercase tracking-widest font-bold">
          Start earning or building today
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name & Role Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <label className={labelStyle}>
              <User size={12} /> Full Name
            </label>
            <User
              className="absolute left-4 top-[42px] text-white/20 group-focus-within:text-brand transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="John Doe"
              className={inputStyle}
              {...register("name", { required: true })}
            />
          </div>

          <div className="relative group">
            <label className={labelStyle}>
              <UserCog size={12} /> Select Role
            </label>
            <UserCog
              className="absolute left-4 top-[42px] text-white/20 group-focus-within:text-brand transition-colors"
              size={18}
            />
            <select
              className={`${inputStyle} appearance-none cursor-pointer`}
              {...register("role", { required: true })}
            >
              <option value="worker" className="bg-[#060010]">
                Worker (Earn)
              </option>
              <option value="buyer" className="bg-[#060010]">
                Buyer (Hire)
              </option>
            </select>
          </div>
        </div>

        {/* Email */}
        <div className="relative group">
          <label className={labelStyle}>
            <Mail size={12} /> Email Address
          </label>
          <Mail
            className="absolute left-4 top-[42px] text-white/20 group-focus-within:text-brand transition-colors"
            size={18}
          />
          <input
            type="email"
            placeholder="commander@earn.com"
            className={inputStyle}
            {...register("email", { required: "Email is required" })}
          />
        </div>

        {/* Photo URL */}
        <div className="relative group">
          <label className={labelStyle}>
            <ImageIcon size={12} /> Profile Picture URL
          </label>
          <ImageIcon
            className="absolute left-4 top-[42px] text-white/20 group-focus-within:text-brand transition-colors"
            size={18}
          />
          <input
            type="url"
            placeholder="https://imgbb.com/your-image"
            className={inputStyle}
            {...register("photoURL", { required: "Photo URL is required" })}
          />
        </div>

        {/* Password */}
        <div className="relative group">
          <label className={labelStyle}>
            <Lock size={12} /> Secure Password
          </label>
          <Lock
            className="absolute left-4 top-[42px] text-white/20 group-focus-within:text-brand transition-colors"
            size={18}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className={inputStyle}
            {...register("password", {
              required: "Password required",
              minLength: { value: 6, message: "Min 6 characters" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                message:
                  "Must have at least one Uppercase and one Lowercase letter",
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[42px] text-white/20 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-[9px] mt-1 font-black uppercase">
              {errors.password.message}
            </p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          disabled={loading}
          className="w-full bg-brand py-4 rounded-2xl text-white font-black uppercase tracking-[3px] text-xs shadow-xl shadow-brand/20 flex items-center justify-center gap-3 mt-4 disabled:opacity-50 transition-all"
        >
          {loading ? (
            "Initializing..."
          ) : (
            <>
              <Rocket size={16} /> Complete Registration
            </>
          )}
        </motion.button>
      </form>

      {/* Social Register */}
      <div className="flex items-center gap-4 my-8">
        <div className="h-[1px] bg-white/5 flex-grow"></div>
        <span className="text-[10px] text-white/20 font-black tracking-widest">
          OR CONNECT
        </span>
        <div className="h-[1px] bg-white/5 flex-grow"></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full py-4 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-white/60 hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm"
      >
        <img
          src="https://www.google.com/favicon.ico"
          className="w-4 h-4"
          alt="Google"
        />
        <span className="text-[10px] font-black uppercase tracking-widest">
          Register with Google
        </span>
      </button>

      <p className="text-center text-white/30 text-xs mt-8">
        Already have an account?{" "}
        <Link to="/login" className="text-brand font-bold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
