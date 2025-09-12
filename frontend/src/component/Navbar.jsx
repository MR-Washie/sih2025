// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-900 px-20 py-2 flex items-center justify-between fixed w-full shadow-md">
//       {/* Left: Logo + Name */}
//       <a href="/">
//         <div className="flex items-center space-x-4">
//             <img
//             src="logo.jpg"
//             alt="Logo"
//             className="w-auto h-15 rounded-full"
//             />
//             <span className="text-2xl font-bold text-white">Smart ClassRoom & Timetable Scheduler</span>
//         </div>
//       </a>

//       {/* Right: Links */}
//       <div className="flex space-x-10">
//         <a
//           href="/"
//           className="text-white hover:text-blue-600 font-bold text-xl px-4 py-2 hover:bg-white rounded-xl duration-600"
//         >
//           Home
//         </a>
//         <a
//           href="about"
//           className="text-white hover:text-blue-600 font-bold text-xl px-4 py-2 hover:bg-white rounded-xl duration-600"
//         >
//           About
//         </a>
//         <a
//           href="who"
//           className="text-white hover:text-blue-600 font-bold text-xl px-4 py-2 hover:bg-white rounded-xl duration-600"
//         >
//           Login
//         </a>
//       </div>
//     </nav>
//   );
// }


import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Using react-icons for the menu icon

export default function Navbar() {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track the active link
  const [activePath, setActivePath] = useState(window.location.pathname);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/who" },
  ];

  // Effect to update active path on route change
  useEffect(() => {
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };
    // Listen for changes in the URL
    window.addEventListener("popstate", handleLocationChange);
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-lg border-b border-gray-700/50 px-4 sm:px-8 md:px-20 py-3 flex items-center justify-between z-50">
      {/* Left: Logo + Brand */}
      <a href="/" className="flex items-center space-x-3">
        <div className="relative w-12 h-12">
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-600 opacity-70 blur-lg"></div>
          <img
            src="logo.jpg" // Replace with your logo (preferably SVG)
            alt="Logo"
            className="relative w-full h-full rounded-full border-2 border-white/50"
          />
        </div>
        <span className="text-2xl ml-4 font-bold text-black-800 tracking-wide">
          Smart Classroom
        </span>
      </a>

      {/* Right: Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative text-black-600 px-4 text-lg py-2 font-bold transition-colors duration-300 hover:text-blue-700 hover:bg-green-600 rounded-lg
              ${
                activePath === link.href
                  ? "text-blue-700 after:w-full"
                  : "after:w-0"
              }
              after:absolute after:left-0 after:-bottom-1 after:h-[2.5px] after:bg-black after:transition-all after:duration-300`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <HiX size={28} />
          ) : (
            <HiMenu size={28} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md md:hidden flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg ${activePath === link.href ? 'text-cyan-400' : 'text-gray-300'} font-semibold`}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}