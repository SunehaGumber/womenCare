import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = ({ onSubmitTracker }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [cramps, setCramps] = useState(false);
  const [moodSwings, setMoodSwings] = useState(false);
  const [headAche, setHeadAche] = useState(false);
  const [bloating, setBloating] = useState(false);
  
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("form submitted");
    if (!startDate || !endDate || !cycleLength) {
      alert("Please fill all fields!");
      return;
    }

    const symptoms = {
      cramps,
      moodSwings,
      headAche,
      bloating,
    };

    const selectedSymptoms = Object.keys(symptoms).filter(
      (key) => symptoms[key] == true
    );
    const newData = { startDate, endDate, cycleLength, selectedSymptoms };

    try {
      const res = await fetch("http://localhost:3000/tracker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newData),
      });

      const savedData = await res.json();
      console.log("Saved tracker data:", savedData);

      onSubmitTracker(savedData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
    navigate('/dashboard');

    setStartDate("");
    setEndDate("");
    setCramps(false);
    setMoodSwings(false);
    setHeadAche(false);
    setBloating(false);
    setCycleLength("");
  };
  return (
    <>
      <div className="flex justify-center mt-5 bg-pink-50">
        <form
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
          onSubmit={(e) => submitHandler(e)}
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Track Your Cycle
          </h2>

          <label className="block mb-2 text-sm font-medium">Start Date</label>
          <input
            type="date"
            className="w-full border rounded p-2 mb-4"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label className="block mb-2 text-sm font-medium">End Date</label>
          <input
            type="date"
            className="w-full border rounded p-2 mb-4"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <label className="block mb-2 text-sm font-medium">Cycle-Length</label>
          <input
            type="text"
            className="w-full border rounded p-2 mb-4"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
          />

          <label className="block mb-2 text-sm font-medium">Symptoms</label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                id="cramps"
                type="checkbox"
                className="h-4 w-4 text-pink-600"
                checked={cramps}
                onChange={(e) => setCramps(e.target.checked)}
              />
              <label htmlFor="cramps" className="text-sm">
                Cramps
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="mood"
                type="checkbox"
                className="h-4 w-4 text-pink-600"
                checked={moodSwings}
                onChange={(e) => setMoodSwings(e.target.checked)}
              />
              <label htmlFor="mood" className="text-sm">
                Mood Swings
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="headache"
                type="checkbox"
                className="h-4 w-4 text-pink-600"
                checked={headAche}
                onChange={(e) => setHeadAche(e.target.checked)}
              />
              <label htmlFor="headache" className="text-sm">
                Headache
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="bloating"
                type="checkbox"
                className="h-4 w-4 text-pink-600"
                checked={bloating}
                onChange={(e) => setBloating(e.target.checked)}
              />
              <label htmlFor="bloating" className="text-sm">
                Bloating
              </label>
            </div>
          </div>

          <button className="w-full bg-pink-600 text-white py-2 mt-5 rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
