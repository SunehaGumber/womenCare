import React from "react";

const NextPeriod = ({ data }) => {
  if (!data) return <p>No prediction available.</p>;

  // Ensure cycleLength number ho
  const cycleLength = 28; // fallback 28 days
  const lastEnd = new Date(data.endDate);
  const nextDate = new Date(lastEnd);
  nextDate.setDate(nextDate.getDate() + cycleLength);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-pink-100 shadow-md rounded-2xl p-4">
      <h2 className="text-lg font-semibold text-pink-900">🔮 Next Expected Period</h2>
      <p>{formatDate(nextDate)}</p>
    </div>
  );
};

export default NextPeriod;
