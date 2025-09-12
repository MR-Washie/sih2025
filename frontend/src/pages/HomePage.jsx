// import React from "react";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-50 pt-18">
//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20">
//         <div className="container mx-auto text-center px-6">
//           <div><h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Welcome to Smart Classroom & Timetable Scheduler
//           </h1>
//           <p className="text-lg md:text-2xl mb-8">
//             Optimize your class schedules, manage time efficiently, and enhance learning experiences.
//           </p>
//           <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
//             Get Started
//           </button></div>
//           <div>
//             <img src="" alt="" />
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           Why Choose Our Scheduler?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Feature Card 1 */}
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">Automatic Timetable</h3>
//             <p className="text-gray-600">
//               Generate optimized timetables automatically based on faculty availability and student preferences.
//             </p>
//           </div>

//           {/* Feature Card 2 */}
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">Conflict-Free Scheduling</h3>
//             <p className="text-gray-600">
//               Avoid overlapping classes and ensure smooth scheduling for both students and teachers.
//             </p>
//           </div>

//           {/* Feature Card 3 */}
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">Analytics & Insights</h3>
//             <p className="text-gray-600">
//               Track classroom utilization, student attendance, and faculty workloads with detailed analytics.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="bg-blue-100 py-16">
//         <div className="text-center px-6">
//           <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to streamline your schedule?</h2>
//           <p className="mb-6 text-gray-700">
//             Join the thousands of institutions already benefiting from our smart scheduling system.
//           </p>
//           <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
//             Sign Up Now
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }



import React from "react";
import Home from "../component/HomeComp1";
import About from "./AboutPage";
import HomeComp2 from "../component/HomeCom2"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-18">
      <Home/>
      <About />
      <HomeComp2 />
        </div>
  );
}