import React from "react";
import { Navigate, Outlet } from "react-router";
import useRole from "../hooks/useRole";
import Loading from "../components/common/Loading";

const WorkerRoute = () => {
  const { role, roleLoading } = useRole();

  // role এখনও load হচ্ছে
  if (roleLoading) {
    return <Loading />;
  }

  // যদি user worker না হয়
  if (role !== "worker") {
    return <Navigate to="/" replace />;
  }

  // worker হলে, child routes render করবে
  return <Outlet />;
};

export default WorkerRoute;
