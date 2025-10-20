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

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { doSignOut } from "../../firebase/auth";

// const Header = () => {
//   const navigate = useNavigate();
//   const { userLoggedIn, currentUser } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     doSignOut().then(() => navigate("/login"));
//   };

//   return (
//     <nav className="flex items-center justify-between w-full fixed top-0 left-0 h-12 px-6 border-b bg-gray-200 z-20 shadow-sm">
//       {/* Left: App Name or Logo */}
//       <div className="text-lg font-semibold text-gray-800 tracking-wide">
//         My WebApp
//       </div>

//       {/* Right: Buttons / Dropdown */}
//       <div className="relative" ref={dropdownRef}>
//         {userLoggedIn ? (
//           <>
//             {/* Avatar / Icon Button */}
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition duration-300 focus:outline-none"
//             >
//               {currentUser?.email?.[0]?.toUpperCase() || "U"}
//             </button>

//             {/* Dropdown Menu */}
//             {menuOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 animate-fadeIn">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   to="/settings"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Settings
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="flex items-center gap-x-3">
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
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { doSignOut } from "../../firebase/auth";

// const Header = ({ onToggleSidebar }) => {
//   const navigate = useNavigate();
//   const { userLoggedIn, currentUser } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // ✅ Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     doSignOut().then(() => navigate("/login"));
//   };

//   return (
//     <nav className="flex items-center justify-between w-full fixed top-0 left-0 h-12 px-4 md:px-6 border-b bg-gray-200 z-20 shadow-sm">
//       {/* ===== Left Section: Sidebar Toggle + Logo ===== */}
//       <div className="flex items-center gap-3">
//         {/* ✅ Sidebar Toggle (only visible on mobile) */}
//         {userLoggedIn && (
//           <button
//             onClick={onToggleSidebar}
//             className="md:hidden p-2 rounded-md hover:bg-gray-300 transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-gray-800"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         )}

//         <div className="text-lg font-semibold text-gray-800 tracking-wide select-none">
//           My WebApp
//         </div>
//       </div>

//       {/* ===== Right Section: Dropdown or Auth Buttons ===== */}
//       <div className="relative" ref={dropdownRef}>
//         {userLoggedIn ? (
//           <>
//             {/* ✅ Avatar Icon */}
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition duration-300 focus:outline-none"
//             >
//               {currentUser?.email?.[0]?.toUpperCase() || "U"}
//             </button>

//             {/* ✅ Dropdown Menu */}
//             {menuOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 animate-fadeIn">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   to="/settings"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   Settings
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="flex items-center gap-x-3">
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
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;


// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { doSignOut } from "../../firebase/auth";

// const Header = ({ onToggleSidebar }) => {
//   const navigate = useNavigate();
//   const { userLoggedIn, currentUser } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // ✅ Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     doSignOut().then(() => navigate("/login"));
//   };

//   return (
//     <nav className="flex items-center justify-between w-full fixed top-0 left-0 h-12 px-4 md:px-6 border-b bg-gray-200 z-20 shadow-sm">
//       {/* ===== Left Section: Sidebar Toggle + Logo ===== */}
//       <div className="flex items-center gap-3">
//         {/* ✅ Sidebar Toggle (mobile only) */}
//         {userLoggedIn && (
//           <button
//             onClick={onToggleSidebar}
//             className="md:hidden p-2 rounded-md hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             aria-label="Toggle Sidebar"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-gray-800"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         )}

//         {/* App Title */}
//         <div
//           className="text-lg font-semibold text-gray-800 tracking-wide select-none cursor-pointer"
//           onClick={() => navigate(userLoggedIn ? "/home" : "/")}
//         >
//           My WebApp
//         </div>
//       </div>

//       {/* ===== Right Section: Dropdown or Auth Buttons ===== */}
//       <div className="relative" ref={dropdownRef}>
//         {userLoggedIn ? (
//           <>
//             {/* ✅ Avatar Icon */}
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               aria-label="User menu"
//             >
//               {currentUser?.email?.[0]?.toUpperCase() || "U"}
//             </button>

//             {/* ✅ Dropdown Menu */}
//             <div
//               className={`absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 transform transition-all duration-200 origin-top-right ${
//                 menuOpen
//                   ? "scale-100 opacity-100 visible"
//                   : "scale-95 opacity-0 invisible"
//               }`}
//             >
//               <Link
//                 to="/profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//               >
//                 Profile
//               </Link>
//               <Link
//                 to="/settings"
//                 onClick={() => setMenuOpen(false)}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//               >
//                 Settings
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center gap-x-3">
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
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { doSignOut } from "../../firebase/auth";

// const Header = ({ sidebarWidth = 64 }) => {
//   const navigate = useNavigate();
//   const { userLoggedIn, currentUser } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     doSignOut().then(() => navigate("/login"));
//   };

//   return (
//     <nav
//       className="flex items-center justify-between fixed top-0 h-12 px-4 md:px-6 border-b bg-gray-200 z-20 shadow-sm transition-all duration-300"
//       style={{ left: sidebarWidth, width: `calc(100% - ${sidebarWidth}px)` }}
//     >
//       {/* Left: App Title */}
//       <div
//         className="text-lg font-semibold text-gray-800 tracking-wide select-none cursor-pointer"
//         onClick={() => navigate(userLoggedIn ? "/home" : "/")}
//       >
//         My WebApp
//       </div>

//       {/* Right: User Menu or Auth Buttons */}
//       <div className="relative" ref={dropdownRef}>
//         {userLoggedIn ? (
//           <>
//             {/* Avatar */}
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               aria-label="User menu"
//             >
//               {currentUser?.email?.[0]?.toUpperCase() || "U"}
//             </button>

//             {/* Dropdown */}
//             <div
//               className={`absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 transform transition-all duration-200 origin-top-right ${
//                 menuOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
//               }`}
//             >
//               <Link
//                 to="/profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//               >
//                 Profile
//               </Link>
//               <Link
//                 to="/settings"
//                 onClick={() => setMenuOpen(false)}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//               >
//                 Settings
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center gap-x-3">
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
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/authContext";
// import { doSignOut } from "../../firebase/auth";

// const Header = ({ sidebarWidth = 64 }) => {
//   const navigate = useNavigate();
//   const { userLoggedIn, currentUser } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     doSignOut().then(() => navigate("/login"));
//   };

//   return (
//     <nav
//       className="flex items-center justify-between fixed top-0 h-14 px-5 md:px-8 z-20 border-b 
//                  bg-white/70 backdrop-blur-lg shadow-sm transition-all duration-300"
//       style={{
//         left: sidebarWidth,
//         width: `calc(100% - ${sidebarWidth}px)`,
//       }}
//     >
//       {/* ===== Left: Brand Title ===== */}
//       <div
//         onClick={() => navigate(userLoggedIn ? "/home" : "/")}
//         className="text-xl font-semibold text-indigo-700 tracking-wide cursor-pointer select-none 
//                    hover:text-indigo-800 transition-colors duration-300"
//       >
//         PSX Tracker
//       </div>

//       {/* ===== Right: User Menu / Auth Buttons ===== */}
//       <div className="relative" ref={dropdownRef}>
//         {userLoggedIn ? (
//           <>
//             {/* Avatar Button */}
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 
//                          text-white font-semibold flex items-center justify-center 
//                          hover:shadow-md hover:from-indigo-600 hover:to-indigo-800 
//                          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             >
//               {currentUser?.email?.[0]?.toUpperCase() || "U"}
//             </button>

//             {/* Dropdown */}
//             <div
//               className={`absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-gray-100 
//                           py-2 transition-all duration-200 origin-top-right 
//                           ${menuOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
//             >
//               <Link
//                 to="/profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition rounded-md"
//               >
//                 Profile
//               </Link>
//               <Link
//                 to="/settings"
//                 onClick={() => setMenuOpen(false)}
//                 className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition rounded-md"
//               >
//                 Settings
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition rounded-md"
//               >
//                 Logout
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center gap-x-3">
//             <Link
//               to="/login"
//               className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 
//                          rounded-lg hover:from-indigo-600 hover:to-indigo-700 shadow-sm transition-all duration-300"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="px-4 py-1.5 text-sm font-medium text-indigo-600 border border-indigo-500 
//                          rounded-lg hover:bg-indigo-50 transition-all duration-300"
//             >
//               Register
//             </Link>
//           </div>
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
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Header = ({ sidebarWidth = 64 }) => {
  const navigate = useNavigate();
  const { userLoggedIn, currentUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const dropdownRef = useRef(null);

  // Fetch user data including avatar
  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser) return;
      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setCurrentUserData(snap.data());
    };
    fetchUserData();
  }, [currentUser]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    doSignOut().then(() => navigate("/login"));
  };

  return (
    <nav
      className="flex items-center justify-between fixed top-0 h-14 px-5 md:px-8 z-20 border-b 
                 bg-white/70 backdrop-blur-lg shadow-sm transition-all duration-300"
      style={{
        left: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
    >
      {/* Left: Brand */}
      <div
        onClick={() => navigate(userLoggedIn ? "/home" : "/")}
        className="text-xl font-semibold text-indigo-700 tracking-wide cursor-pointer select-none 
                   hover:text-indigo-800 transition-colors duration-300"
      >
        PSX Tracker
      </div>

      {/* Right: User Menu */}
      <div className="relative" ref={dropdownRef}>
        {userLoggedIn ? (
          <>
            {/* Avatar Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center 
                        hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400
                        border-2 border-indigo-500"
            >
              {currentUserData?.avatar ? (
                <img
                  src={currentUserData.avatar}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-indigo-700 
                                text-white font-semibold flex items-center justify-center">
                  {currentUser?.email?.[0]?.toUpperCase() || "U"}
                </div>
              )}
            </button>


            {/* Dropdown */}
            <div
              className={`absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-gray-100 
                          py-2 transition-all duration-200 origin-top-right 
                          ${menuOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
            >
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition rounded-md"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition rounded-md"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition rounded-md"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-x-3">
            <Link
              to="/login"
              className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 
                         rounded-lg hover:from-indigo-600 hover:to-indigo-700 shadow-sm transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1.5 text-sm font-medium text-indigo-600 border border-indigo-500 
                         rounded-lg hover:bg-indigo-50 transition-all duration-300"
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
