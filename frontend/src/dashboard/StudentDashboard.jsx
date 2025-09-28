import React, { useState } from 'react';
import { CalendarDays, ClipboardCheck, BookOpen, Bell, ChevronRight, FolderKanban, FileText, Download, ArrowLeft } from 'lucide-react';

// --- MOCK DATA (Replace with your API data later) ---
const studentData = {
  name: 'Ragib',
  profilePic: 'https://i.pravatar.cc/150?u=anjali', // Placeholder image
};

const todaysSchedule = [
  { time: '09:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Sharma', room: 'C-301', color: 'border-blue-500' },
  { time: '10:00 - 11:00', subject: 'Database Systems', faculty: 'Prof. Verma', room: 'Lab-1', color: 'border-purple-500' },
  { time: '11:15 - 12:15', subject: 'Operating Systems', faculty: 'Dr. Gupta', room: 'A-102', color: 'border-green-500' },
  { time: '13:30 - 14:30', subject: 'Web Development Lab', faculty: 'Ms. Singh', room: 'Lab-3', color: 'border-red-500' },
];

const weeklySchedule = {
  'Monday': [{ time: '10:00 - 11:00', subject: 'Database Systems', type: 'Lab', color: 'bg-purple-100 text-purple-800' }, { time: '11:15 - 12:15', subject: 'Operating Systems', type: 'Theory', color: 'bg-green-100 text-green-800' }],
  'Tuesday': [{ time: '09:00 - 10:00', subject: 'Data Structures', type: 'Theory', color: 'bg-blue-100 text-blue-800' }, { time: '13:30 - 14:30', subject: 'Software Eng.', type: 'Theory', color: 'bg-yellow-100 text-yellow-800' }],
  'Wednesday': [{ time: '09:00 - 10:00', subject: 'Data Structures', type: 'Theory', color: 'bg-blue-100 text-blue-800' }, { time: '10:00 - 11:00', subject: 'Database Systems', type: 'Theory', color: 'bg-purple-100 text-purple-800' }, { time: '11:15 - 12:15', subject: 'Operating Systems', type: 'Lab', color: 'bg-green-100 text-green-800' }],
  'Thursday': [{ time: '13:30 - 14:30', subject: 'Web Dev Lab', type: 'Lab', color: 'bg-red-100 text-red-800' }],
  'Friday': [{ time: '09:00 - 10:00', subject: 'Data Structures', type: 'Lab', color: 'bg-blue-100 text-blue-800' }, { time: '10:00 - 11:00', subject: 'Database Systems', type: 'Theory', color: 'bg-purple-100 text-purple-800' }],
};

const timeSlots = ['09:00 - 10:00', '10:00 - 11:00', '11:15 - 12:15', '12:15 - 13:30', '13:30 - 14:30'];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const assignments = [
  { subject: 'Database Systems', title: 'ER Diagram for University', dueDate: 'Sep 15, 2025', status: 'Pending' },
  { subject: 'Data Structures', title: 'Implement a Linked List', dueDate: 'Sep 18, 2025', status: 'Pending' },
  { subject: 'Operating Systems', title: 'Case Study on Linux Kernel', dueDate: 'Sep 12, 2025', status: 'Submitted' },
];

const subjects = [
  { name: 'Data Structures', code: 'CS-301' },
  { name: 'Database Systems', code: 'CS-302' },
  { name: 'Operating Systems', code: 'CS-303' },
  { name: 'Web Development', code: 'IT-304' },
  { name: 'Software Engineering', code: 'CS-305' },
];

const studyMaterials = {
  'CS-301': [
    { title: 'Lecture 1 - Intro to Arrays.pdf', type: 'Notes', uploaded: 'Sep 3, 2025' },
    { title: 'Lecture 3 - Linked Lists.pdf', type: 'Notes', uploaded: 'Sep 10, 2025' },
  ],
  'CS-302': [
    { title: 'Normalization Explained.pdf', type: 'Slides', uploaded: 'Sep 9, 2025' },
  ],
  'CS-303': [
    { title: 'Lecture 5 - Process Scheduling.pdf', type: 'Notes', uploaded: 'Sep 8, 2025' },
  ],
};
// --- END OF MOCK DATA ---

// --- Sub-Component for the Subject Details View ---
const SubjectDetailsView = ({ subject, onBack }) => {
  const materials = studyMaterials[subject.code] || [];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <button onClick={onBack} className="flex items-center text-gray-500 hover:text-gray-800 font-semibold mb-4">
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </button>
        <h1 className="text-3xl md:text-4xl font-bold">{subject.name}</h1>
        <p className="text-gray-500">{subject.code}</p>
      </header>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FolderKanban className="mr-3 text-yellow-500" /> Study Materials
        </h2>
        {materials.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-4 divide-y divide-gray-100">
            {materials.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3">
                <div className="flex items-center space-x-4">
                  <FileText className="text-gray-400" />
                  <div>
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">Uploaded: {item.uploaded}</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors">
                  <Download size={16} />
                  <span className="text-sm font-semibold">Download</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
            <p>No study materials have been uploaded for this subject yet.</p>
          </div>
        )}
      </section>
    </div>
  );
};

// --- Main Student Dashboard Component ---
export default function StudentDashboard() {
  const [scheduleView, setScheduleView] = useState('today');
  const [selectedSubject, setSelectedSubject] = useState(null);

  const mainContainerClasses = "min-h-screen bg-gray-50 text-gray-800 pt-24 px-4 sm:px-6 lg:px-8 pb-8";

  // If a subject is selected, show the details view
  if (selectedSubject) {
    return (
      <div className={mainContainerClasses}>
        <SubjectDetailsView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
      </div>
    );
  }

  // Otherwise, show the main dashboard view
  return (
    <div className={mainContainerClasses}>
      <div className="max-w-7xl mx-auto">
        
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Welcome back, {studentData.name}!</h1>
            <p className="text-gray-500 mt-1">Here's your dashboard for Friday, September 12.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500 hover:text-gray-800 cursor-pointer" />
            <img src={studentData.profilePic} alt="Profile" className="w-12 h-12 rounded-full border-2 border-purple-500" />
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Schedule Section with Toggle */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold flex items-center">
                  <CalendarDays className="mr-3 text-blue-500" /> Schedule
                </h2>
                <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
                  <button onClick={() => setScheduleView('today')} className={`px-4 py-1 rounded-md text-sm font-semibold transition-colors ${scheduleView === 'today' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'}`}>Today</button>
                  <button onClick={() => setScheduleView('week')} className={`px-4 py-1 rounded-md text-sm font-semibold transition-colors ${scheduleView === 'week' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'}`}>This Week</button>
                </div>
              </div>

              {scheduleView === 'today' ? (
                <div className="space-y-4">
                  {todaysSchedule.map((item, index) => (
                    <div key={index} className={`bg-white p-4 rounded-lg flex items-center space-x-4 border-l-4 shadow-sm ${item.color}`}>
                      <div className="font-semibold text-gray-600 w-40">{item.time}</div>
                      <div className="flex-grow">
                        <p className="font-bold text-gray-800">{item.subject}</p>
                        <p className="text-sm text-gray-500">{item.faculty} • Room: {item.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-4 rounded-lg shadow-sm overflow-x-auto">
                  <table className="w-full border-collapse text-center">
                    <thead>
                      <tr>
                        <th className="p-2 border-b-2 border-gray-100 text-sm font-semibold text-gray-500 w-32">Time</th>
                        {daysOfWeek.map(day => <th key={day} className="p-2 border-b-2 border-gray-100 text-sm font-semibold text-gray-500">{day}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map(slot => (
                        <tr key={slot}>
                          <td className="p-2 border-b border-gray-100 text-sm font-semibold text-gray-600">{slot}</td>
                          {daysOfWeek.map(day => {
                            const classInfo = weeklySchedule[day]?.find(c => c.time === slot);
                            if(slot === '12:15 - 13:30') {
                                return (
                                    <td key={day} className="p-2 border-b border-gray-100 bg-gray-50">
                                        <div className="font-semibold text-gray-400 text-xs">Lunch</div>
                                    </td>
                                )
                            }
                            return (
                              <td key={day} className="p-2 border-b border-gray-100">
                                {classInfo ? (
                                  <div className={`p-2 rounded-lg ${classInfo.color}`}>
                                    <p className="font-bold text-sm">{classInfo.subject}</p>
                                    <p className="text-xs">{classInfo.type}</p>
                                  </div>
                                ) : null}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* Assignments Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center"><ClipboardCheck className="mr-3 text-purple-500" /> Upcoming Assignments</h2>
              <div className="bg-white rounded-lg shadow-sm p-4 divide-y divide-gray-100">
                {assignments.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-bold text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.subject} • Due: {item.dueDate}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.status === 'Pending' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center"><BookOpen className="mr-3 text-green-500" /> My Subjects</h2>
              <div className="space-y-3">
                {subjects.map((subject) => (
                  <div 
                    key={subject.code} 
                    onClick={() => setSelectedSubject(subject)}
                    className="bg-white shadow-sm p-4 rounded-lg flex justify-between items-center cursor-pointer hover:shadow-lg hover:bg-purple-500 hover:text-white group transition-all duration-300"
                  >
                    <div>
                      <p className="font-semibold">{subject.name}</p>
                      <p className="text-xs text-gray-500 group-hover:text-purple-100">{subject.code}</p>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-white" />
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}
