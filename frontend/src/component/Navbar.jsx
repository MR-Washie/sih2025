import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 px-20 py-2 flex items-center justify-between fixed w-full shadow-md">
      {/* Left: Logo + Name */}
      <a href="/">
        <div className="flex items-center space-x-4">
            <img
            src="logo.jpg"
            alt="Logo"
            className="w-auto h-15 rounded-full"
            />
            <span className="text-2xl font-bold text-white">Smart ClassRoom & Timetable Scheduler</span>
        </div>
      </a>

      {/* Right: Links */}
      <div className="flex space-x-10">
        <a
          href="/"
          className="text-white hover:text-blue-600 font-bold text-xl px-4 py-2 hover:bg-white rounded-xl duration-600"
        >
          Home
        </a>
        <a
          href="about"
          className="text-white hover:text-blue-600 font-bold text-xl px-4 py-2 hover:bg-white rounded-xl duration-600"
        >
          About
        </a>
        <a
          href="who"
          className="text-white hover:text-blue-600 font-bold text-xl px-4 py-2 hover:bg-white rounded-xl duration-600"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
