// components/SurveyCard.js
import React from "react";

const SurveyCard = ({ onClick }) => {
  return (
    <div onClick={onClick} className="mt-4 flex items-center justify-center p-4 hover:shadow-2xl">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          <img
            src="/card.jpg"
            alt="Product"
            className="w-full h-52 object-cover"
          />
          <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            survey
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Take a quick survey</h3>
            <p className="text-gray-500 mt-1">Premium assistance</p>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
            Take survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
