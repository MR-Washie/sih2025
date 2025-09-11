import React from 'react'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Who from './component/Who'
import AboutPage from './pages/AboutPage'
import Footer from './component/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/who' element={<Who />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      <Footer />  
    </Router>
  )
}

export default App
