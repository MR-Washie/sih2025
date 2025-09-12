// src/pages/StudentLogin.jsx
import React, { useState } from "react";
import { GraduationCap, Mail, Lock } from "lucide-react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const API_URL = import.meta.env.VITE_API_URL;

const StudentLoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = await axios.post(`${API_URL}/api/studentLogin`, formData);

    console.log("Student Login Data:", formData);
    navigate("/studentDashboard");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-white px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <div className="text-center mb-8">
          <GraduationCap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">Student Login</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Access your personalized timetable and class updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition"
          >
            Login as Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLoginPage;
