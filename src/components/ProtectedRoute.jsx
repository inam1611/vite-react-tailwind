// // src/components/ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/authContext";

// const ProtectedRoute = ({ children }) => {
//   const { currentUser, userLoggedIn } = useAuth();

//   if (!userLoggedIn || !currentUser) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser, userLoggedIn, loading } = useAuth(); // ✅ assume loading state in context

  if (loading) {
    // ✅ show a centered Tailwind spinner
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="w-10 h-10 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!userLoggedIn || !currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
