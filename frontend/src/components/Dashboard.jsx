import React from "react";
import Last from "./Last";
import CycleChart from "./CycleChart";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import NextPeriod from "./NextPeriod";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [trackerData, setTrackerData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (data.error) {
        navigate("/login");
      } else {
        setUserData(data);
      }
      console.log(data);
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
  const fetchTracker = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/tracker", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTrackerData(data);
  };

  fetchTracker();
}, []);

  return (
    <div className="min-h-screen bg-pink-50 md:p-6 w-full p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 mt-5">
        <h1 className="text-2xl text-pink-800 font-bold italic tracking-tighter">
          Hi {userData?.name || "user"} 👋
        </h1>
        <button
          className="bg-pink-600 hover:bg-pink-700 transition-colors text-white rounded-lg px-5 py-2 shadow"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Log Out
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full">
          <Last data={trackerData[trackerData.length - 1]} />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6" w-full>
          <NextPeriod data={trackerData[trackerData.length - 1]} />
        </div>
      </div>
      <CycleChart data={trackerData}/>

      {/* Tips Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold text-pink-700 mb-3">
          🌸 Tips for this phase
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Exercise:</span> yoga, light cardio
          </li>
          <li>
            <span className="font-medium">Nutrition:</span> iron-rich foods,
            hydration
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
