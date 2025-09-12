// src/pages/FacultyLogin.jsx
import React, { useState } from "react";
import { UserCog, Mail, Lock } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FacultyLoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/facultyLogin", formData);
    navigate("/facultyDashboard");
    console.log("Faculty Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-white px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <div className="text-center mb-8">
          <UserCog className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">Faculty Login</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Manage your courses, schedules, and resources.
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
              placeholder="Enter faculty email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
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
              placeholder="Enter password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:opacity-90 transition"
          >
            Login as Faculty
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacultyLoginPage;
