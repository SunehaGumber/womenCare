import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {

    e.preventDefault();
    try {
      
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name:userName,
          email,
          password,
        })
      });
      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      setEmail("");
      setPassword("");
      setuserName("");

    } catch (error) {
      console.error("Error:",error);
    }
    navigate('/tracker');
  }

  return (
    <div className="flex justify-center items-center bg-pink-50 w-full min-h-screen">
      <form
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
        onSubmit={submitHandler}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

        <label className="block mb-2 text-sm font-medium" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          className="w-full border rounded p-2 mb-4"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full border rounded p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 mt-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
