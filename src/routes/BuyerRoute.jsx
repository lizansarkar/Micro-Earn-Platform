import React from "react";
import { Navigate, Outlet } from "react-router";
import useRole from "../hooks/useRole";
import Loading from "../components/common/Loading";


const BuyerRoute = () => {
  const { role, roleLoading } = useRole();

  // role এখনও load হচ্ছে
  if (roleLoading) {
    return <Loading />;
  }

  // যদি user buyer না হয়
  if (role !== "buyer") {
    return <Navigate to="/" replace />;
  }

  // buyer হলে, child routes render করবে
  return <Outlet />;
};

export default BuyerRoute;
