import React from 'react'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import Footer from './component/Footer'
import CollegeSignupPage from './pages/CollegeSignupPage'
import StudentLoginPage from './pages/StudentLoginPage'
import Who from './component/Who'
import FacultyLoginPage from './pages/FacultyLoginPage'
import CollegeLoginPage from './pages/CollegeLoginPage'
import StudentDashboard from './dashboard/StudentDashboard'
import FacultyDashboard from './dashboard/FacultyDashboard'

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/who' element={<Who />} />
          <Route path='/collegeSignup' element={<CollegeSignupPage />} />
          <Route path='/studentLogin' element={<StudentLoginPage />} />
          <Route path='/facultyLogin' element={<FacultyLoginPage />} />
          <Route path='/collegeLogin' element={<CollegeLoginPage />} />
          <Route path='/studentDashboard' element={<StudentDashboard />} />
          <Route path='/facultyDashboard' element={<FacultyDashboard />} />

        </Routes>
      <Footer />  
    </Router>
  )
}

export default App
