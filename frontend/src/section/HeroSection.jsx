import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-45 min-h-screen">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20">
        
        {/* Left Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Smart Classroom &{" "}
            <span className="text-blue-500">Timetable</span> Scheduler
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Revolutionize your educational institution's scheduling with
            AI-powered optimization. Maximize classroom utilization, minimize
            conflicts, and create perfect timetables effortlessly.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Create Timetable
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl">📅</span>
              <h3 className="text-xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600 text-sm">Optimized</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🏫</span>
              <h3 className="text-xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600 text-sm">Institutions</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">⏱️</span>
              <h3 className="text-xl font-bold text-gray-900">90%</h3>
              <p className="text-gray-600 text-sm">Time Saved</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">📖</span>
              <h3 className="text-xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600 text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center relative">
          <img
            src="time.jpg"
            alt="Timetable"
            className="rounded-xl shadow-lg w-full  lg:max-w-xl"
          />

          {/* Tag top-right
          <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg shadow">
            AI-Powered
          </span> */}

          {/* Tag bottom-left */}
          <span className="absolute bottom-4 left-4 bg-green-600 text-white text-sm px-5 py-3 rounded-lg shadow">
            Real-time Updates
          </span>
        </div>
      </div>
    </section>
  );
}
