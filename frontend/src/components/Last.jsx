import React from "react";

const Last = ({ data }) => {
  if (!data) return <p>No tracker data yet.</p>;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full">
      <div className="bg-pink-100 shadow-md rounded-2xl p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-pink-900">Last period..</h2>
        <p>Start: {formatDate(data.startDate)}</p>
        <p>End: {formatDate(data.endDate)}</p>
        <p>Symptoms: {data.selectedSymptoms?.join(", ")}</p>
      </div>
    </div>
  );
};

export default Last;
