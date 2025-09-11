import React from "react";

export default function Who() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
        Who are you?
      </h1>
      <p className="text-gray-600 text-lg mb-12 text-center">
        Please select your role to get the best experience
      </p>

      {/* Options */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Student */}
        <button className="bg-blue-600 text-white px-8 py-6 rounded-lg shadow hover:bg-blue-700 transition flex flex-col items-center">
          <span className="text-2xl font-semibold mb-2">🎓</span>
          <span className="text-lg font-medium">Student</span>
        </button>

        {/* Faculty */}
        <button className="bg-green-600 text-white px-8 py-6 rounded-lg shadow hover:bg-green-700 transition flex flex-col items-center">
          <span className="text-2xl font-semibold mb-2">👩‍🏫</span>
          <span className="text-lg font-medium">Faculty</span>
        </button>

        {/* College */}
        <button className="bg-purple-600 text-white px-8 py-6 rounded-lg shadow hover:bg-purple-700 transition flex flex-col items-center">
          <span className="text-2xl font-semibold mb-2">🏫</span>
          <span className="text-lg font-medium">College</span>
        </button>
      </div>
    </div>
  );
}
