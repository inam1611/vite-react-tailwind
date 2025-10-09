// src/components/main/index.jsx
import React from "react";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";

const Main = () => {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await doSignOut();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-96 p-6 bg-white shadow-xl rounded-lg text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Welcome 👋</h1>
        <p className="text-gray-600">
          {currentUser?.email
            ? `You are logged in as ${currentUser.email}`
            : "User info not available."}
        </p>

        <button
          onClick={handleLogout}
          className="px-4 py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Main;

