import React from "react";
import { BarChart3, Users, Clock } from "lucide-react"; // icons
import { useNavigate } from "react-router-dom";

export default function AnalyticsSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gray-50 py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Timetable Scheduler <br /> for Smart Classrooms
          </h2>

          <p className="text-lg text-gray-600 max-w-md">
            Track classroom utilization, student attendance, and faculty
            workloads with beautiful visual analytics that drive real insights.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div 
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate('/who')}
            >
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-gray-800 font-bold text-md">Attendance</p>
            </div>
            <div 
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate('/who')}
            >
              <Clock className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <p className="font-bold text-md text-gray-800">Create Timetable</p>
              
            </div>
            <div 
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate('/who')}
            >
              <BarChart3 className="w-8 h-8 mx-auto text-indigo-600 mb-2" />
              <p className=" text-gray-800 font-bold text-md">Utilization</p>
            </div>
          </div>

          <button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate('/who')}
          >
            Classroom
          </button>
        </div>

        {/* Right Side Image with Gradient Glow & 3D effect */}
        <div className="relative group">
          {/* Glow background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

          {/* Timetable Image */}
          <img
            src="time.jpg"
            alt="Timetable Example"
            className="relative z-10 w-full rounded-2xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-3xl transition duration-700"
          />
        </div>
      </div>
    </section>
  );
}