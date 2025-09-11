import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Left: Logo + Description */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="logo.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-white">Smart ClassRoom & Timetable Scheduler</span>
          </div>
          <p className="text-gray-400 max-w-xs">
            Smart Classroom & Timetable Scheduler helps institutions optimize
            class schedules, reduce stress, and improve learning efficiency.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/who" className="hover:text-blue-400 transition-colors">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact / Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-4">
            Email: support@mentorwhiz.com
          </p>
          <div className="flex space-x-4">
            {/* Social Icons (replace with real icons if needed) */}
            <a href="#" className="hover:text-blue-400 transition-colors">🐦</a>
            <a href="#" className="hover:text-blue-400 transition-colors">📘</a>
            <a href="#" className="hover:text-blue-400 transition-colors">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-21 border-t border-gray-700 pt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Smart ClassRoom & Timetable Scheduler. All rights reserved.
      </div>
    </footer>
  );
}