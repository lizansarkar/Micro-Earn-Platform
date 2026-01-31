import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import Loading from "../components/common/Loading";
import { motion } from "framer-motion";
import useAuth from "../hooks/UseAuth";
import useRole from "../hooks/useRole";

const WorkerRoute = ({children}) => {
const { role, roleLoading } = useRole();
const { loading: authLoading } = useAuth();
  // AuthProvider থেকে user, userRole এবং loading নিচ্ছি
  const { user, userRole, loading } = useAuth(); 
  const location = useLocation();

  // ১. যদি Auth বা Database Role যেকোনো একটি লোড হতে থাকে
  if (loading) {
    return <Loading />;
  }
  if (authLoading || roleLoading) return <Loading />;

  // ২. যদি ইউজার লগইন থাকে এবং রোল "worker" হয়
  if (user && userRole === "worker") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  // ৩. যদি ইউজার লগইন না থাকে, তবে লগইন পেজে পাঠাবে
  // আর যদি লগইন থাকে কিন্তু রোল worker না হয়, তবে হোমে (/) পাঠিয়ে দেবে
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default WorkerRoute;