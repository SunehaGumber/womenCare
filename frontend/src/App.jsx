import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Tracker from './components/Tracker'
import Articles from './components/Articles'
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router';
import './index.css'
import Login from './components/Login';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
 
  return (
    <>
     <div className="flex flex-col min-h-screen">
  <div className="flex-1 bg-pink-50 flex flex-col items-center w-full">
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/tracker' element={<Tracker />} />
      <Route path='/articles' element={<Articles />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
  <Footer />
</div>

    </>
  )
}

export default App
