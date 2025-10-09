// import React from "react";
// import { NavLink } from "react-router-dom";
// import Header from "../header";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* ===== Sidebar ===== */}
//       <aside className="w-64 bg-white border-r flex flex-col">
//         <div className="px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold text-indigo-600">My WebApp</h2>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           <NavLink
//             to="/home"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             🏠 Home
//           </NavLink>
//           <NavLink
//             to="/main"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             📊 Main
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             👤 Profile
//           </NavLink>
//           <NavLink
//             to="/settings"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             ⚙️ Settings
//           </NavLink>
//         </nav>
//       </aside>

//       {/* ===== Main Content ===== */}
//       <div className="flex flex-col flex-1 overflow-y-auto">
//         {/* top bar */}
//         <Header />
//         <main className="p-6 mt-12">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Header from "../header";

// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* ===== Sidebar ===== */}
//       <aside className="hidden md:flex w-64 bg-white border-r flex-col">
//         <div className="px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold text-indigo-600">My WebApp</h2>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           <NavLink
//             to="/home"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             🏠 Home
//           </NavLink>
//           <NavLink
//             to="/main"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             📊 Main
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             👤 Profile
//           </NavLink>
//           <NavLink
//             to="/settings"
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-md font-medium ${
//                 isActive
//                   ? "bg-indigo-100 text-indigo-700"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`
//             }
//           >
//             ⚙️ Settings
//           </NavLink>
//         </nav>
//       </aside>

//       {/* ===== Main Content ===== */}
//       <div className="flex flex-col flex-1 overflow-y-auto">
//         <Header onToggleSidebar={toggleSidebar} />
//         {/* 👇👇 This is the KEY part 👇👇 */}
//         <main className="p-6 mt-12">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Header from "../header";

// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* ===== Sidebar (Desktop) ===== */}
//       <aside className="hidden md:flex w-64 bg-white border-r flex-col">
//         <div className="px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold text-indigo-600">My WebApp</h2>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           {["home", "main", "profile", "settings"].map((item) => (
//             <NavLink
//               key={item}
//               to={`/${item}`}
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-md font-medium capitalize ${
//                   isActive
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               {item}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* ===== Sidebar (Mobile) ===== */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
//           sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={closeSidebar}
//       ></div>

//       <aside
//         className={`fixed top-0 left-0 z-50 w-64 h-full bg-white border-r transform transition-transform duration-300 md:hidden ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="px-6 py-4 border-b flex justify-between items-center">
//           <h2 className="text-lg font-semibold text-indigo-600">My WebApp</h2>
//           <button onClick={closeSidebar} className="text-gray-600 text-xl">
//             ✕
//           </button>
//         </div>

//         <nav className="flex-1 p-4 space-y-2">
//           {["home", "main", "profile", "settings"].map((item) => (
//             <NavLink
//               key={item}
//               to={`/${item}`}
//               onClick={closeSidebar}
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-md font-medium capitalize ${
//                   isActive
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               {item}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* ===== Main Content ===== */}
//       <div className="flex flex-col flex-1 overflow-y-auto">
//         <Header onToggleSidebar={toggleSidebar} />
//         <main className="p-6 mt-12">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Header from "../header";

// const DashboardLayout = () => {
//   const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* ===== Sidebar ===== */}
//       <aside
//         className={`${
//           collapsed ? "w-16" : "w-64"
//         } bg-white border-r flex flex-col transition-all duration-300 fixed md:relative z-30 h-screen`}
//       >
//         {/* ==== Sidebar Top: Brand + Collapse Toggle ==== */}
//         <div className="flex items-center justify-between px-3 py-3 border-b">
//           {!collapsed && (
//             <h2 className="text-lg font-semibold text-indigo-600 whitespace-nowrap">
  
//             </h2>
//           )}
//           <button
//             onClick={() => setCollapsed((prev) => !prev)}
//             className="p-2 rounded-md hover:bg-gray-200 transition"
//             aria-label="Toggle sidebar"
//           >
//             {/* Icon changes direction */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
//                 collapsed ? "rotate-180" : ""
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* ==== Navigation ==== */}
//         <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
//           {[
//             { path: "/home", icon: "🏠", label: "Home" },
//             { path: "/main", icon: "📊", label: "Main" },
//             { path: "/profile", icon: "👤", label: "Profile" },
//             { path: "/settings", icon: "⚙️", label: "Settings" },
//           ].map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               title={collapsed ? item.label : ""} // Tooltip on hover when collapsed
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
//                   isActive
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span>{item.label}</span>}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* ===== Main Content ===== */}
//       <div className="flex flex-col flex-1 overflow-y-auto md:ml-0 ml-16 md:ml-0">
//         <Header onToggleSidebar={() => setCollapsed((prev) => !prev)} />
//         <main className="p-6 mt-12 transition-all duration-300">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Header from "../header";

// const DashboardLayout = () => {
//   const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state

//   // Sidebar width in px
//   const sidebarWidth = collapsed ? 64 : 256;

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* ===== Sidebar ===== */}
//       <aside
//         className={`bg-white border-r flex flex-col transition-all duration-300 fixed md:relative z-30 h-screen`}
//         style={{ width: sidebarWidth }}
//       >
//         {/* ==== Sidebar Top: Brand + Collapse Toggle ==== */}
//         <div className="flex items-center justify-between px-3 py-3 border-b">
//           {!collapsed && (
//             <h2 className="text-lg font-semibold text-indigo-600 whitespace-nowrap">
//               My WebApp
//             </h2>
//           )}
//           <button
//             onClick={() => setCollapsed((prev) => !prev)}
//             className="p-2 rounded-md hover:bg-gray-200 transition"
//             aria-label="Toggle sidebar"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
//                 collapsed ? "rotate-180" : ""
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* ==== Navigation ==== */}
//         <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
//           {[
//             { path: "/home", icon: "🏠", label: "Home" },
//             { path: "/main", icon: "📊", label: "Main" },
//             { path: "/profile", icon: "👤", label: "Profile" },
//             { path: "/settings", icon: "⚙️", label: "Settings" },
//           ].map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               title={collapsed ? item.label : ""}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
//                   isActive
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!collapsed && <span>{item.label}</span>}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* ===== Main Content ===== */}
//       <div className="flex flex-col flex-1 overflow-y-auto transition-all duration-300" style={{ marginLeft: sidebarWidth }}>
//         {/* Header dynamically adjusts based on sidebar width */}
//         <Header sidebarWidth={sidebarWidth} />

//         <main className="p-6 mt-12 transition-all duration-300">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Header from "../header";
// import { HomeIcon, ChartBarIcon, UserIcon, CogIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

// const DashboardLayout = () => {
//   const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state
//   const sidebarWidth = collapsed ? 64 : 256;

//   const navItems = [
//     { path: "/home", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
//     { path: "/main", icon: <ChartBarIcon className="w-5 h-5" />, label: "Main" },
//     { path: "/profile", icon: <UserIcon className="w-5 h-5" />, label: "Profile" },
//     { path: "/settings", icon: <CogIcon className="w-5 h-5" />, label: "Settings" },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* ===== Sidebar ===== */}
//       <aside
//         className="bg-white border-r flex flex-col transition-all duration-300 fixed md:relative z-30 h-screen"
//         style={{ width: sidebarWidth }}
//       >
//         {/* Sidebar Top */}
//         <div
//         className="flex items-center justify-between px-3 border-b"
//         style={{ height: "3rem" }} // 3rem = 12 * 0.25rem = 48px, same as header h-12
//         >
//         {!collapsed && (
//             <h2 className="text-lg font-semibold text-indigo-600 whitespace-nowrap">
//             My WebApp
//             </h2>
//         )}
//         <button
//             onClick={() => setCollapsed((prev) => !prev)}
//             className="p-2 rounded-md hover:bg-gray-200 transition flex items-center justify-center h-full"
//             aria-label="Toggle sidebar"
//         >
//             <ChevronLeftIcon
//             className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
//                 collapsed ? "rotate-180" : ""
//             }`}
//             />
//         </button>
//         </div>


//         {/* Navigation */}
//         <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               title={collapsed ? item.label : ""}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
//                   isActive
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               {item.icon}
//               {!collapsed && <span>{item.label}</span>}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div
//         className="flex flex-col flex-1 overflow-y-auto transition-all duration-300"
//         style={{ marginLeft: sidebarWidth }}
//       >
//         <Header sidebarWidth={sidebarWidth} />
//         <main className="p-6 mt-12 transition-all duration-300">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Header from "../header";
// import {
//   HomeIcon,
//   ChartBarIcon,
//   UserIcon,
//   CogIcon,
//   ChevronLeftIcon,
// } from "@heroicons/react/24/outline";

// const DashboardLayout = () => {
//   const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state
//   const sidebarWidth = collapsed ? 64 : 256; // px values (Tailwind equivalents)

//   const navItems = [
//     { path: "/home", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
//     { path: "/main", icon: <ChartBarIcon className="w-5 h-5" />, label: "Main" },
//     { path: "/profile", icon: <UserIcon className="w-5 h-5" />, label: "Profile" },
//     { path: "/settings", icon: <CogIcon className="w-5 h-5" />, label: "Settings" },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* ===== Sidebar ===== */}
//       <aside
//         className="bg-white border-r flex flex-col transition-all duration-300 fixed md:relative z-30 h-screen"
//         style={{ width: sidebarWidth }}
//       >
//         {/* Sidebar Top */}
//         <div
//           className="flex items-center justify-between px-3 border-b"
//           style={{ height: "3rem" }} // 48px, matches header height
//         >
//           {!collapsed && (
//             <h2 className="text-lg font-semibold text-indigo-600 whitespace-nowrap">
//               My WebApp
//             </h2>
//           )}
//           <button
//             onClick={() => setCollapsed((prev) => !prev)}
//             className="p-2 rounded-md hover:bg-gray-200 transition flex items-center justify-center h-full"
//             aria-label="Toggle sidebar"
//           >
//             <ChevronLeftIcon
//               className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
//                 collapsed ? "rotate-180" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               title={collapsed ? item.label : ""}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
//                   isActive
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               {item.icon}
//               {!collapsed && <span>{item.label}</span>}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* ===== Main Content ===== */}
//       <div
//         className="flex flex-col flex-1 overflow-y-auto transition-all duration-300 bg-gray-100"
//         style={{ paddingLeft: sidebarWidth }}
//       >
//         <Header sidebarWidth={sidebarWidth} />

//         {/* Page content area */}
//         <main className="p-6 mt-12 transition-all duration-300 min-h-[calc(100vh-3rem)]">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../header";
import {
  HomeIcon,
  BanknotesIcon,
  UserIcon,
  CogIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state
  const sidebarWidth = collapsed ? 64 : 200; // px values (Tailwind equivalents)

  const navItems = [
    { path: "/home", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
    {
      path: "/transactions",
      icon: <BanknotesIcon className="w-5 h-5" />, // 💰 better icon for transactions
      label: "Transactions",
    },
    { path: "/profile", icon: <UserIcon className="w-5 h-5" />, label: "Profile" },
    { path: "/settings", icon: <CogIcon className="w-5 h-5" />, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* ===== Sidebar ===== */}
      <aside
        className="bg-white border-r flex flex-col transition-all duration-300 fixed md:relative z-30 h-screen"
        style={{ width: sidebarWidth }}
      >
        {/* Sidebar Top */}
        <div
          className="flex items-center justify-between px-3 border-b"
          style={{ height: "3.5rem" }} 
        >
          {!collapsed && (
            <h2 className="text-lg font-semibold text-indigo-600 whitespace-nowrap">
              PSX Tracker
            </h2>
          )}
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="p-2 rounded-md hover:bg-gray-200 transition flex items-center justify-center h-full"
            aria-label="Toggle sidebar"
          >
            <ChevronLeftIcon
              className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              title={collapsed ? item.label : ""}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <div
        className="flex flex-col flex-1 overflow-y-auto transition-all duration-300 bg-gray-100"
        style={{ paddingLeft: sidebarWidth }}
      >
        <Header sidebarWidth={sidebarWidth} />

        {/* Page content area */}
        <main className="p-6 mt-12 transition-all duration-300 min-h-[calc(100vh-3rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
