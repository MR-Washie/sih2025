import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-18">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Smart Classroom & Timetable Scheduler
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Our mission is to simplify class scheduling, reduce stress for students and faculty, and optimize classroom usage.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Automatic Timetabling
            </h3>
            <p className="text-gray-600">
              Generate optimized schedules automatically based on faculty availability and student preferences.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Conflict-Free Scheduling
            </h3>
            <p className="text-gray-600">
              Avoid overlapping classes and ensure smooth scheduling for students and teachers.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Analytics & Insights
            </h3>
            <p className="text-gray-600">
              Track classroom utilization, attendance, and faculty workloads with detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-indigo-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Why Choose Our Scheduler?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Manual timetabling often leads to clashes, underutilized classrooms, and increased stress for students and faculty. Our smart scheduler automates the process, saves time, and ensures optimal utilization of resources while providing a seamless academic experience.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
