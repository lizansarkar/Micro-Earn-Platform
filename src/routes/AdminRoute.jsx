import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loading from "../components/common/Loading";

const AdminRoute = () => {
  const { user } = useAuth();
  const { role, roleLoading } = useRole();

  // 🔄 auth বা role এখনও load হচ্ছে
  if (!user || roleLoading) {
    return <Loading />;
  }

  // ❌ যদি role admin না হয়
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ admin হলে, nested routes render হবে
  return <Outlet />;
};

export default AdminRoute;
