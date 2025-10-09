import React from "react";
import { useAuth } from "../contexts/authContext";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
      <div className="bg-white shadow-md rounded-lg p-6 w-96 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h1>
        {currentUser ? (
          <>
            <p className="text-gray-600">
              <strong>Email:</strong> {currentUser.email}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>UID:</strong> {currentUser.uid}
            </p>
          </>
        ) : (
          <p className="text-gray-500">No user information available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
