import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, desc, btnText, link, protectedPage = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");

    if (protectedPage && !token) {
      alert("Please Login or Sign Up to access this page");
      return;
    }
    navigate(link);
  };

  return (
    <div className="bg-pink-100 rounded shadow p-4 flex flex-col justify-between min-h-[220px]">
      <div>
        <h3 className="font-bold text-lg text-pink-800">{title}</h3>
        <p className="mt-2 md:text-sm">{desc}</p>
      </div>
      <button
        onClick={handleClick}
        className="mt-4 bg-pink-600 text-white py-2 px-4 rounded"
      >
        {btnText}
      </button>
    </div>
  );
};

export default Card;

