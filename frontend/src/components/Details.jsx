import React from "react";

const Details = ({ formData }) => {
  return (
    <>
      <div className="bg-pink-50 flex justify-center items-center p-6">
        <div className="bg-gradient-to-br from-pink-100 to-pink-200 shadow-lg rounded-2xl p-6 w-[320px] min-h-[260px] flex flex-col gap-4">
          {/* Dates */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-sm text-pink-700 font-medium">Start Date</h2>
              <p className="text-lg font-semibold text-pink-900">
                {formData.startDate}
              </p>
            </div>
            <div>
              <h2 className="text-sm text-pink-700 font-medium">End Date</h2>
              <p className="text-lg font-semibold text-pink-900">
                {formData.endDate}
              </p>
            </div>
          </div>

          {/* Cycle Length */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <p className="text-xs text-gray-500">Cycle Length</p>
            <p className="text-2xl font-bold text-pink-800">
              {formData.cycleLength} days
            </p>
          </div>

          {/* Symptoms */}
          <div>
            <p className="text-sm text-pink-700 font-medium mb-2">Symptoms</p>
            <div className="flex flex-wrap gap-2">
              {formData.selectedSymptoms &&
               formData.selectedSymptoms.length > 0 ? (
                formData.selectedSymptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-300 text-pink-900 px-3 py-1 rounded-full text-sm font-medium shadow-sm capitalize"
                  >
                    {symptom}
                  </span>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">
                  No symptoms logged
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
