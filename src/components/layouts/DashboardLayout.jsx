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
  const sidebarWidth = collapsed ? 70 : 190; // px values (Tailwind equivalents)

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
        // style={{ paddingLeft: sidebarWidth }}
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
