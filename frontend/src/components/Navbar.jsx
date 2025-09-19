import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleTrackerClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login or Sign Up to access the Tracker");
      return;
    }

    navigate("/tracker");
  };

  const handleDashboardClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login or Sign Up to access the Dashboard");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className='flex bg-pink-900 justify-between items-center p-3 text-white w-full'>
      <h1 className='font-bold'>WomenCare🌸</h1>
      <div className='flex gap-4 cursor-pointer'>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={handleTrackerClick}>Tracker</button>
        <button onClick={handleDashboardClick}>Dashboard</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Signup</button>
      </div>
    </div>
  )
}

export default Navbar;



