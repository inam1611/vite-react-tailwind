// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../contexts/authContext'
// import { doSignOut } from '../../firebase/auth'

// const Header = () => {
//     const navigate = useNavigate()
//     const { userLoggedIn } = useAuth()
//     return (
//         <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
//             {
//                 userLoggedIn
//                     ?
//                     <>
//                         <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
//                     </>
//                     :
//                     <>
//                         <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
//                         <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
//                     </>
//             }

//         </nav>
//     )
// }

// export default Header

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { doSignOut } from "../../firebase/auth";

// const Header = () => {
//   const navigate = useNavigate();
//   const { userLoggedIn } = useAuth();

//   return (
//     <nav className="flex items-center justify-between w-full fixed top-0 left-0 h-12 px-6 border-b bg-gray-200 z-20 shadow-sm">
//       {/* Left side - Logo or title */}
//       <div className="text-lg font-semibold text-gray-800 tracking-wide">
//         My WebApp
//       </div>

//       {/* Right side - Buttons */}
//       <div className="flex items-center gap-x-3">
//         {userLoggedIn ? (
//           <button
//             onClick={() => {
//               doSignOut().then(() => navigate("/login"));
//             }}
//             className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
//           >
//             Logout
//           </button>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn, currentUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    doSignOut().then(() => navigate("/login"));
  };

  return (
    <nav className="flex items-center justify-between w-full fixed top-0 left-0 h-12 px-6 border-b bg-gray-200 z-20 shadow-sm">
      {/* Left: App Name or Logo */}
      <div className="text-lg font-semibold text-gray-800 tracking-wide">
        My WebApp
      </div>

      {/* Right: Buttons / Dropdown */}
      <div className="relative" ref={dropdownRef}>
        {userLoggedIn ? (
          <>
            {/* Avatar / Icon Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition duration-300 focus:outline-none"
            >
              {currentUser?.email?.[0]?.toUpperCase() || "U"}
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 animate-fadeIn">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-x-3">
            <Link
              to="/login"
              className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
