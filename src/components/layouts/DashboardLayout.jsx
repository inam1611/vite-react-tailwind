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

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* ===== Sidebar ===== */}
      <aside className="hidden md:flex w-64 bg-white border-r flex-col">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-indigo-600">My WebApp</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            🏠 Home
          </NavLink>
          <NavLink
            to="/main"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            📊 Main
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            👤 Profile
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            ⚙️ Settings
          </NavLink>
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header onToggleSidebar={toggleSidebar} />
        {/* 👇👇 This is the KEY part 👇👇 */}
        <main className="p-6 mt-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
