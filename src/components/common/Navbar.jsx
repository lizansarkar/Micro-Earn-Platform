import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMoon,
  FaSun,
  FaSearch,
  FaHome,
  FaTasks,
  FaInfoCircle,
  FaEnvelope,
  FaSignOutAlt,
  FaThLarge, // FaLayout এর বদলে এটি ব্যবহার করা হয়েছে এরর এড়াতে
} from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/users/${user.email}`)
        .then((res) => setDbUser(res.data))
        .catch((err) => console.error("Error fetching user data", err));
    }
  }, [user?.email, axiosSecure]);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = async () => {
    await logOut();
    setIsOpen(false);
    navigate("/");
  };

  // রোলের ওপর ভিত্তি করে সঠিক ড্যাশবোর্ড লিঙ্ক রিটার্ন করবে
  const getDashboardPath = () => {
    if (dbUser?.role === "worker") return "/dashboard/worker";
    if (dbUser?.role === "buyer") return "/dashboard/buyer";
    if (dbUser?.role === "admin") return "/dashboard"; // আপনার অ্যাডমিন রাউট অনুযায়ী
    return "/dashboard";
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
    { name: "Support", path: "/support", icon: <FaEnvelope /> },
    { name: "Dashboard", path: getDashboardPath(), icon: <FaTasks /> },
  ];

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between px-8 py-3 transition-all duration-500 rounded-full border shadow-2xl ${
          isScrolling
            ? "w-[95%] lg:w-[1400px] glass-effect shadow-brand/10"
            : "w-[90%] lg:w-[1300px] bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="MicroEarn"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links (Center) */}
        <div className="absolute left-1/3 -translate-x-1/2 flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-bold tracking-wide transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-brand"
                  : "opacity-70 hover:opacity-100 hover:text-brand"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side: Search, Auth, Theme */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative group hidden lg:block">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="pl-10 pr-4 py-1.5 rounded-full outline-none text-sm transition-all duration-500 ease-in-out w-40 focus:w-64 focus:ring-1 focus:ring-brand bg-black/5 border border-black/10 text-gray-800 dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          {/* Auth Buttons / Profile Card */}
          <div className="flex gap-2 ml-2 items-center">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 p-1 pr-3 rounded-full bg-brand/10 border border-brand/20 hover:bg-brand/20 transition-all cursor-pointer"
                >
                  <img
                    src={user?.photoURL || "https://i.ibb.co/mR79YyZ/user.png"}
                    className="w-8 h-8 rounded-full border border-brand object-cover shadow-sm"
                    alt="User"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      {dbUser?.coin || 0} Coins
                    </span>
                    <span className="text-[11px] font-bold dark:text-white text-gray-800">
                      {user?.displayName?.split(" ")[0]}
                    </span>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-[110]"
                        onClick={() => setIsOpen(false)}
                      ></div>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute right-0 mt-3 w-48 glass-effect border border-white/10 rounded-2xl shadow-2xl p-2 z-[120]"
                      >
                        <Link
                          to="/dashboard"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-brand hover:text-white text-sm font-bold transition-all"
                        >
                          <FaThLarge size={14} /> Dashboard
                        </Link>
                        <button
                          onClick={handleLogOut}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-500 text-sm font-bold transition-all cursor-pointer text-left"
                        >
                          <FaSignOutAlt size={14} /> Logout
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="px-5 py-2 text-sm font-bold hover:text-brand transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="group relative flex items-center justify-center gap-2.5 px-5 py-2 overflow-hidden rounded-full bg-brand text-white font-bold text-[15px] border-[3px] border-white/30 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-white/60 active:scale-95 outline-none"
                >
                  <span className="relative z-10">Join Free</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <motion.div
                    initial={{ left: "-100px" }}
                    animate={{ left: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeOut",
                      repeatDelay: 1,
                    }}
                    className="absolute top-0 w-[100px] h-full opacity-60 z-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%)",
                    }}
                  />
                </Link>
              </>
            )}
          </div>

          {/* Theme Toggle (একদম শেষে আপনার ডিজাইন অনুযায়ী) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-brand hover:text-white transition-all cursor-pointer border border-transparent dark:border-white/5"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM DOCK --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[420px]">
        <div className="flex items-center justify-around glass-effect p-3 rounded-[2rem] shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center gap-1 transition-all ${location.pathname === link.path ? "text-brand scale-110" : "opacity-60"}`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                {link.name}
              </span>
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={`p-2 rounded-full shadow-md ${theme === "dark" ? "bg-yellow-400 text-black" : "bg-brand text-white"}`}
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </div>
            <span className="text-[10px] font-black uppercase opacity-60">
              Mode
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 w-full p-4 flex justify-between items-center glass-effect !bg-transparent !border-none z-50">
        <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
        {user ? (
          <Link to="/dashboard">
            <img
              src={user?.photoURL}
              className="w-10 h-10 rounded-full border-2 border-brand shadow-lg"
              alt="Profile"
            />
          </Link>
        ) : (
          <Link
            to="/auth/register"
            className="group relative flex items-center justify-center gap-2.5 px-5 py-2 overflow-hidden rounded-full bg-brand text-white font-bold text-[15px] border-[3px] border-white/30 shadow-2xl"
          >
            <span className="relative z-10">Join Free</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              ></path>
            </svg>
            <motion.div
              initial={{ left: "-100px" }}
              animate={{ left: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeOut",
                repeatDelay: 1,
              }}
              className="absolute top-0 w-[100px] h-full opacity-60 z-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%)",
              }}
            />
          </Link>
        )}
      </div>
    </>
  );
}
