import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from"react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        alert(data.message || "Login Failed");
        return;
      }

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate('/dashboard'); 
      } else {
        alert(data.error || "login failed");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center bg-pink-50 w-full min-h-screen">
        <form
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
          onSubmit={(e) => submitHandler(e)}
        >
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

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
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 mt-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
