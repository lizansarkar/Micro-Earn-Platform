import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // আপনার ডিপেন্ডেন্সিতে এটি আছে
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaPaperPlane 
} from "react-icons/fa";

const Contact = () => {
  // React Hook Form Setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Form Submit Handler
  const onSubmit = async (data) => {
    // এখানে আপনার API কল বা Firebase লজিক বসবে
    console.log("Form Data:", data);
    
    // একটি ডেমো ডিলে (যাতে ইউজার প্রিমিয়াম ফিল পায়)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonColor: "#your-brand-color", // আপনার ব্র্যান্ড কালার দিন
    });
    
    reset(); // ফর্ম ক্লিয়ার করা
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Our Location", desc: "123 Business Avenue, Dhaka" },
    { icon: <FaEnvelope />, title: "Email Address", desc: "support@microearn.com" },
    { icon: <FaPhoneAlt />, title: "Phone Number", desc: "+880 1234 567 890" },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black mb-4 dark:text-white text-slate-900"
          >
            Get In <span className="text-brand">Touch</span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-5 p-6 rounded-[2rem] glass-effect border border-black/5 dark:border-white/5 hover:border-brand/30 transition-all">
                <div className="p-4 rounded-2xl bg-brand/10 text-brand">{info.icon}</div>
                <div>
                  <h4 className="font-bold dark:text-white text-slate-800">{info.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{info.desc}</p>
                </div>
              </div>
            ))}
            
            <div className="p-8 rounded-[2.5rem] bg-brand text-white relative overflow-hidden group">
              <h4 className="text-xl font-bold relative z-10">Follow Us</h4>
              <div className="flex gap-4 mt-3 relative z-10">
                <FaFacebook className="cursor-pointer hover:scale-125 transition-transform" />
                <FaTwitter className="cursor-pointer hover:scale-125 transition-transform" />
                <FaLinkedin className="cursor-pointer hover:scale-125 transition-transform" />
              </div>
              <FaPaperPlane className="text-8xl absolute -right-5 -bottom-5 opacity-20" />
            </div>
          </motion.div>

          {/* Right Side: Professional Hook Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7 glass-effect border border-black/5 dark:border-white/5 rounded-[3rem] p-8 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name Field */}
                <div className="space-y-1">
                  <label className="text-sm font-bold ml-2 opacity-70">Name</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-6 py-4 rounded-2xl bg-black/5 dark:bg-white/5 border ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-brand outline-none transition-all dark:text-white`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-2 mt-1">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-sm font-bold ml-2 opacity-70">Email</label>
                  <input 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                    })}
                    className={`w-full px-6 py-4 rounded-2xl bg-black/5 dark:bg-white/5 border ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-brand outline-none transition-all dark:text-white`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-2 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1">
                <label className="text-sm font-bold ml-2 opacity-70">Subject</label>
                <input 
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full px-6 py-4 rounded-2xl bg-black/5 dark:bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-transparent'} focus:border-brand outline-none transition-all dark:text-white`}
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-500 text-xs ml-2 mt-1">{errors.subject.message}</p>}
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label className="text-sm font-bold ml-2 opacity-70">Message</label>
                <textarea 
                  rows="4"
                  {...register("message", { required: "Message cannot be empty", minLength: { value: 10, message: "Minimum 10 characters required" } })}
                  className={`w-full px-6 py-4 rounded-3xl bg-black/5 dark:bg-white/5 border ${errors.message ? 'border-red-500' : 'border-transparent'} focus:border-brand outline-none transition-all dark:text-white resize-none`}
                  placeholder="Write details..."
                />
                {errors.message && <p className="text-red-500 text-xs ml-2 mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button 
                disabled={isSubmitting}
                type="submit"
                className="w-full py-5 rounded-2xl bg-brand text-white font-bold text-lg shadow-xl shadow-brand/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane className={isSubmitting ? "animate-ping" : ""} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;