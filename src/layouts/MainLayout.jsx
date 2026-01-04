import React from "react";
import { Outlet } from "react-router"; // react-router use korcho bole
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

/**
 * MainLayout:
 * সব public pages এর জন্য layout
 * Navbar + Footer সব page এ থাকবে
 * Outlet এর জায়গায় specific page content render হবে
 */
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar সব page এ */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      {/* Footer সব page এ */}
      <Footer />
    </div>
  );
};

export default MainLayout;
