import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      
      {/* Fixed Navbar */}
      <Navbar />
      
      <main className="flex-1 w-full pt-16">
        <div className="">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
