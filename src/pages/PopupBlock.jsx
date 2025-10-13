import React from "react";
import { useNavigate } from "react-router-dom";

export default function PopupBlock() {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute top-0 left-0 w-[700px] h-[400px] bg-gradient-to-r from-green-300 via-teal-300 to-orange-300 rounded-b-full opacity-60 blur-2xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[400px] bg-gradient-to-r from-orange-300 via-teal-300 to-green-300 rounded-t-full opacity-60 blur-2xl -z-10"></div>

      {/* Card */}
      <div className="bg-white border border-teal-300 rounded-xl shadow-lg p-10 max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.061-1.061M6.697 6.697L5.636 5.636m12.728 0l-1.061 1.061M6.697 17.303l-1.061 1.061"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Your Account Has Been Blocked
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          For your security, your account has been temporarily blocked. <br />
          Please contact our Customer Service to verify your identity and
          restore access to your account.
        </p>

        {/* Contact info */}
        <div className="text-gray-700 text-sm mb-6">
          <p className="flex items-center justify-center gap-2">
            <span>📞</span> Contact CS : <span>324598011</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>✉️</span> wandoor@darderdor.com
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-teal-400 hover:bg-teal-500 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
}
