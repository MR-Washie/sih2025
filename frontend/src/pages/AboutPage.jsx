// import React from "react";

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 pt-18">
//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20">
//         <div className="container mx-auto text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             About Smart Classroom & Timetable Scheduler
//           </h1>
//           <p className="text-lg md:text-xl mb-8">
//             Our mission is to simplify class scheduling, reduce stress for students and faculty, and optimize classroom usage.
//           </p>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           Key Features
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Feature Card 1 */}
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">
//               Automatic Timetabling
//             </h3>
//             <p className="text-gray-600">
//               Generate optimized schedules automatically based on faculty availability and student preferences.
//             </p>
//           </div>

//           {/* Feature Card 2 */}
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">
//               Conflict-Free Scheduling
//             </h3>
//             <p className="text-gray-600">
//               Avoid overlapping classes and ensure smooth scheduling for students and teachers.
//             </p>
//           </div>

//           {/* Feature Card 3 */}
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">
//               Analytics & Insights
//             </h3>
//             <p className="text-gray-600">
//               Track classroom utilization, attendance, and faculty workloads with detailed analytics.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-indigo-100 py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-6 text-blue-800">
//             Why Choose Our Scheduler?
//           </h2>
//           <p className="text-gray-700 max-w-2xl mx-auto mb-6">
//             Manual timetabling often leads to clashes, underutilized classrooms, and increased stress for students and faculty. Our smart scheduler automates the process, saves time, and ensures optimal utilization of resources while providing a seamless academic experience.
//           </p>
//           <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition">
//             Learn More
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }


// src/pages/About.jsx

import React from "react";
import { Calendar, Users, Clock, Brain, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen pt-30 bg-gradient-to-b from-indigo-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Smart Classroom & Timetable Scheduler
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to simplify educational scheduling by combining smart
            AI-driven solutions with modern technology. We help institutions,
            faculty, and students save time, reduce conflicts, and focus on
            what matters most — learning and teaching.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Automated Scheduling
            </h3>
            <p className="mt-2 text-gray-600">
              Generate clash-free timetables instantly with AI-powered
              optimization and smart resource allocation.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Multi-role Support
            </h3>
            <p className="mt-2 text-gray-600">
              Separate dashboards for Students, Faculty, and Colleges with
              tailored features for each role.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Clock className="h-12 w-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Save Valuable Time
            </h3>
            <p className="mt-2 text-gray-600">
              Reduce manual work and planning efforts by up to 90% with
              automation and smart suggestions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Brain className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              AI Optimization
            </h3>
            <p className="mt-2 text-gray-600">
              Ensure efficient use of classrooms, resources, and faculty time
              with intelligent algorithms.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <BookOpen className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Student Friendly
            </h3>
            <p className="mt-2 text-gray-600">
              Provide students with easy access to personalized timetables and
              class updates in real-time.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Users className="h-12 w-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Collaborative Platform
            </h3>
            <p className="mt-2 text-gray-600">
              Strengthen coordination between administration, faculty, and
              students with a unified platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
