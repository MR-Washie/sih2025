import React, { useState } from 'react';
import { CalendarDays, ClipboardPlus, Upload, Bell, X, BookCopy, PlusCircle } from 'lucide-react';

// --- MOCK DATA (Updated with Batch and Room Info) ---
const facultyData = {
  name: 'Dr. Abhimanyu',
  profilePic: 'https://i.pravatar.cc/150?u=drsharma',
  subjects: [ 
    { name: 'Data Structures', code: 'CS-301' },
    { name: 'Software Engineering', code: 'CS-305' },
  ],
};

const fullWeeklySchedule = {
  'Monday': [{ time: '10:00 - 11:00', subject: 'Database Systems', faculty: 'Prof. Verma', batch: 'CS-B', room: 'C-302', color: 'bg-purple-100 text-purple-800' }],
  'Tuesday': [{ time: '09:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Sharma', batch: 'CS-A', room: 'C-301', color: 'bg-blue-100 text-blue-800' }, { time: '13:30 - 14:30', subject: 'Software Eng.', faculty: 'Dr. Sharma', batch: 'CS-B', room: 'A-101', color: 'bg-yellow-100 text-yellow-800' }],
  'Wednesday': [{ time: '09:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Sharma', batch: 'CS-A', room: 'C-301', color: 'bg-blue-100 text-blue-800' }, { time: '11:15 - 12:15', subject: 'Operating Systems', faculty: 'Dr. Gupta', batch: 'CS-A', room: 'A-102', color: 'bg-green-100 text-green-800' }],
  'Thursday': [{ time: '13:30 - 14:30', subject: 'Web Dev Lab', faculty: 'Ms. Singh', batch: 'IT-A', room: 'Lab-3', color: 'bg-red-100 text-red-800' }],
  'Friday': [{ time: '09:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Sharma', batch: 'CS-A', room: 'Lab-2', color: 'bg-blue-100 text-blue-800' }],
};

const timeSlots = ['09:00 - 10:00', '10:00 - 11:00', '11:15 - 12:15', '12:15 - 13:30', '13:30 - 14:30'];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// --- END OF MOCK DATA ---


// --- Main Faculty Dashboard Component ---
export default function FacultyDashboard() {
  const [modal, setModal] = useState(null); 
  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Welcome, {facultyData.name}!</h1>
            <div className="flex items-center space-x-4">
                <Bell className="text-gray-500 hover:text-gray-800 cursor-pointer" />
                <img src={facultyData.profilePic} alt="Profile" className="w-12 h-12 rounded-full border-2 border-blue-500" />
            </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3 space-y-8">
            
            {/* Action Buttons */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button onClick={() => openModal('addMaterial')} className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-lg hover:bg-blue-50 transition-all">
                    <div className="bg-blue-100 p-3 rounded-full"><Upload className="text-blue-600"/></div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">Upload Material</h3>
                        <p className="text-gray-500 text-sm">Add notes or resources for your subjects.</p>
                    </div>
                </button>
                 <button onClick={() => openModal('addAssignment')} className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-lg hover:bg-purple-50 transition-all">
                    <div className="bg-purple-100 p-3 rounded-full"><ClipboardPlus className="text-purple-600"/></div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">Create Assignment</h3>
                        <p className="text-gray-500 text-sm">Set a new assignment with instructions and a due date.</p>
                    </div>
                </button>
            </section>
            
            {/* Faculty Schedule Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CalendarDays className="mr-3 text-blue-500" /> Your Weekly Schedule
              </h2>
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
                          const classInfo = fullWeeklySchedule[day]?.find(c => c.time === slot);
                          
                          if (slot === '12:15 - 13:30') {
                            return <td key={day} className="p-2 border-b border-gray-100 bg-gray-50"><div className="font-semibold text-gray-400 text-xs">Lunch</div></td>;
                          }

                          // **CHANGE**: Only render the cell if the class belongs to this faculty
                          if (classInfo && classInfo.faculty === facultyData.name) {
                            return (
                                <td key={day} className="p-2 border-b border-gray-100">
                                    <div className={`p-2 rounded-lg text-left ${classInfo.color}`}>
                                        <p className="font-bold text-sm">{classInfo.subject}</p>
                                        <p className="text-xs text-gray-600 mt-1">Batch: {classInfo.batch}</p>
                                        <p className="text-xs text-gray-600">Room: {classInfo.room}</p>
                                    </div>
                                </td>
                            );
                          }
                          
                          // Render an empty cell for all other cases
                          return <td key={day} className="p-2 border-b border-gray-100"></td>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* --- MODALS --- (The code for modals remains the same) */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"><X /></button>
            
            {/* Add Material Modal */}
            {modal === 'addMaterial' && (
              <form className="space-y-4">
                <h3 className="text-xl font-bold flex items-center"><BookCopy className="mr-2 text-blue-500"/>Upload Study Material</h3>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <select id="subject" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                    {facultyData.subjects.map(s => <option key={s.code}>{s.name}</option>)}
                  </select>
                </div>
                 <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title / Description</label>
                  <input type="text" id="title" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholder="e.g., Lecture 1 - Intro to Arrays"/>
                </div>
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">File</label>
                  <input type="file" id="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                    <button type="button" onClick={closeModal} className="px-4 py-2 rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 font-semibold">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 font-semibold flex items-center"><Upload size={16} className="mr-2"/>Upload</button>
                </div>
              </form>
            )}

            {/* Add Assignment Modal */}
            {modal === 'addAssignment' && (
               <form className="space-y-4">
                <h3 className="text-xl font-bold flex items-center"><PlusCircle className="mr-2 text-purple-500"/>Create New Assignment</h3>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <select id="subject" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                    {facultyData.subjects.map(s => <option key={s.code}>{s.name}</option>)}
                  </select>
                </div>
                 <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Assignment Title</label>
                  <input type="text" id="title" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholder="e.g., ER Diagram for University"/>
                </div>
                 <div>
                  <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
                  <textarea id="instructions" rows="3" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></textarea>
                </div>
                 <div>
                  <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                  <input type="date" id="dueDate" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                    <button type="button" onClick={closeModal} className="px-4 py-2 rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 font-semibold">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700 font-semibold flex items-center"><ClipboardPlus size={16} className="mr-2"/>Create</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
