import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 dark:bg-[#060010]/60 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
            MicroEarn
          </span>
        </div>

        {/* Nav Links + Toggle + Auth */}
        <div className="flex items-center space-x-4">
          {/* Nav Links */}
          <a
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:underline transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/dashboard"
            className="text-gray-800 dark:text-gray-200 hover:underline transition-colors duration-200"
          >
            Dashboard
          </a>
          <a
            href="/about"
            className="text-gray-800 dark:text-gray-200 hover:underline transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-800 dark:text-gray-200 hover:underline transition-colors duration-200"
          >
            Contact
          </a>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            title="Toggle Dark/Light Mode"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-900 dark:text-gray-200" />
            )}
          </button>

          {/* Auth Buttons */}
          <div className="flex space-x-2">
            <a
              href="/login"
              className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
