// // // src/App.js
// // import Login from "./components/auth/login";
// // import Register from "./components/auth/register";
// // import Header from "./components/header";
// // import Home from "./components/home";
// // import Main from "./components/main"; // ✅ new import
// // import ProtectedRoute from "./components/ProtectedRoute"; // ✅ new import

// // import { AuthProvider } from "./contexts/authContext";
// // import { useRoutes } from "react-router-dom";

// // function App() {
// //   const routesArray = [
// //     {
// //       path: "/",
// //       element: <Login />,
// //     },
// //     {
// //       path: "/login",
// //       element: <Login />,
// //     },
// //     {
// //       path: "/register",
// //       element: <Register />,
// //     },
// //     {
// //       path: "/home",
// //       element: (
// //         <ProtectedRoute>
// //           <Home />
// //         </ProtectedRoute>
// //       ),
// //     },
// //     {
// //       path: "/main",
// //       element: (
// //         <ProtectedRoute>
// //           <Main />
// //         </ProtectedRoute>
// //       ),
// //     },
// //     {
// //       path: "*",
// //       element: <Login />,
// //     },
// //   ];

// //   const routesElement = useRoutes(routesArray);

// //   return (
// //     <AuthProvider>
// //       <Header />
// //       <div className="w-full h-screen flex flex-col">{routesElement}</div>
// //     </AuthProvider>
// //   );
// // }

// // export default App;

// // import React from "react";
// // import { Navigate, useRoutes } from "react-router-dom";
// // import { AuthProvider, useAuth } from "./contexts/authContext";

// // import Login from "./components/auth/login";
// // import Register from "./components/auth/register";
// // import Header from "./components/header";
// // import Home from "./components/home";
// // import Main from "./components/main";
// // import Profile from "./pages/Profile";   // ✅ new import
// // import Settings from "./pages/Settings"; // ✅ new import
// // import ProtectedRoute from "./components/ProtectedRoute";

// // // ✅ Smart redirect for root — sends user to correct page
// // const RootRedirect = () => {
// //   const { userLoggedIn } = useAuth();
// //   return userLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />;
// // };

// // function AppRoutes() {
// //   const routesArray = [
// //     { path: "/", element: <RootRedirect /> },
// //     { path: "/login", element: <Login /> },
// //     { path: "/register", element: <Register /> },

// //     // ✅ Protected routes
// //     {
// //       path: "/home",
// //       element: (
// //         <ProtectedRoute>
// //           <Home />
// //         </ProtectedRoute>
// //       ),
// //     },
// //     {
// //       path: "/main",
// //       element: (
// //         <ProtectedRoute>
// //           <Main />
// //         </ProtectedRoute>
// //       ),
// //     },
// //     {
// //       path: "/profile",
// //       element: (
// //         <ProtectedRoute>
// //           <Profile />
// //         </ProtectedRoute>
// //       ),
// //     },
// //     {
// //       path: "/settings",
// //       element: (
// //         <ProtectedRoute>
// //           <Settings />
// //         </ProtectedRoute>
// //       ),
// //     },

// //     // ✅ catch-all fallback
// //     { path: "*", element: <Navigate to="/" replace /> },
// //   ];

// //   return useRoutes(routesArray);
// // }

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Header />
// //       <div className="w-full h-screen flex flex-col">
// //         <AppRoutes />
// //       </div>
// //     </AuthProvider>
// //   );
// // }

// // export default App;

// // import React from "react";
// // import { Navigate, useRoutes } from "react-router-dom";
// // import { AuthProvider, useAuth } from "./contexts/authContext";

// // import Login from "./components/auth/login";
// // import Register from "./components/auth/register";
// // import Header from "./components/header";
// // import Home from "./components/home";
// // import Main from "./components/transactions/Transactions";
// // import Profile from "./pages/Profile";
// // import Settings from "./pages/Settings";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import DashboardLayout from "./components/layouts/DashboardLayout"; // ✅ new import

// // const RootRedirect = () => {
// //   const { userLoggedIn } = useAuth();
// //   return userLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />;
// // };

// // function AppRoutes() {
// //   const routesArray = [
// //     { path: "/", element: <RootRedirect /> },
// //     { path: "/login", element: <Login /> },
// //     { path: "/register", element: <Register /> },

// //     // ✅ Protected routes with DashboardLayout
// //     {
// //       path: "/",
// //       element: (
// //         <ProtectedRoute>
// //           <DashboardLayout />
// //         </ProtectedRoute>
// //       ),
// //       children: [
// //         { path: "home", element: <Home /> },
// //         { path: "main", element: <Main /> },
// //         { path: "profile", element: <Profile /> },
// //         { path: "settings", element: <Settings /> },
// //       ],
// //     },

// //     { path: "*", element: <Navigate to="/" replace /> },
// //   ];

// //   return useRoutes(routesArray);
// // }

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <div className="w-full h-screen flex flex-col">
// //         <AppRoutes />
// //       </div>
// //     </AuthProvider>
// //   );
// // }

// // export default App;


// // import React from "react";
// // import { Navigate, useRoutes } from "react-router-dom";
// // import { AuthProvider, useAuth } from "./contexts/authContext";

// // import Login from "./components/auth/login";
// // import Register from "./components/auth/register";
// // import Header from "./components/header";
// // import Home from "./components/home/Home";
// // import Transactions from "./components/transactions/Transactions"; // ✅ renamed
// // import Profile from "./pages/Profile";
// // import Settings from "./pages/Settings";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import DashboardLayout from "./components/layouts/DashboardLayout"; // ✅ new import

// // const RootRedirect = () => {
// //   const { userLoggedIn } = useAuth();
// //   return userLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />;
// // };

// // function AppRoutes() {
// //   const routesArray = [
// //     { path: "/", element: <RootRedirect /> },
// //     { path: "/login", element: <Login /> },
// //     { path: "/register", element: <Register /> },

// //     // ✅ Protected routes with DashboardLayout
// //     {
// //       path: "/",
// //       element: (
// //         <ProtectedRoute>
// //           <DashboardLayout />
// //         </ProtectedRoute>
// //       ),
// //       children: [
// //         { path: "home", element: <Home /> },
// //         { path: "transactions", element: <Transactions /> }, // ✅ replaced main
// //         { path: "profile", element: <Profile /> },
// //         { path: "settings", element: <Settings /> },
// //       ],
// //     },

// //     { path: "*", element: <Navigate to="/" replace /> },
// //   ];

// //   return useRoutes(routesArray);
// // }

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <div className="w-full h-screen flex flex-col">
// //         <AppRoutes />
// //       </div>
// //     </AuthProvider>
// //   );
// // }

// // export default App;

// // import React from "react";
// // import { Navigate, useRoutes } from "react-router-dom";
// // import { AuthProvider, useAuth } from "./contexts/authContext";

// // import Login from "./components/auth/login";
// // import Register from "./components/auth/register";
// // import Home from "./components/home/Home";
// // import Transactions from "./components/transactions/Transactions";
// // import PortfolioOverview from "./components/portfolio/PortfolioOverview"; 
// // import Profile from "./pages/Profile";
// // import Settings from "./pages/Settings";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import DashboardLayout from "./components/layouts/DashboardLayout";

// // const RootRedirect = () => {
// //   const { userLoggedIn } = useAuth();
// //   return userLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />;
// // };

// // function AppRoutes() {
// //   const routesArray = [
// //     { path: "/", element: <RootRedirect /> },
// //     { path: "/login", element: <Login /> },
// //     { path: "/register", element: <Register /> },

// //     // ✅ Protected routes with DashboardLayout
// //     {
// //       path: "/",
// //       element: (
// //         <ProtectedRoute>
// //           <DashboardLayout />
// //         </ProtectedRoute>
// //       ),
// //       children: [
// //         { path: "home", element: <Home /> },
// //         { path: "portfolio", element: <PortfolioOverview /> }, // ✅ new route
// //         { path: "transactions", element: <Transactions /> },
// //         { path: "profile", element: <Profile /> },
// //         { path: "settings", element: <Settings /> },
// //       ],
// //     },

// //     { path: "*", element: <Navigate to="/" replace /> },
// //   ];

// //   return useRoutes(routesArray);
// // }

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <div className="w-full h-screen flex flex-col">
// //         <AppRoutes />
// //       </div>
// //     </AuthProvider>
// //   );
// // }

// // export default App;

// // import React from "react";
// // import { Navigate, useRoutes } from "react-router-dom";
// // import { AuthProvider, useAuth } from "./contexts/authContext";
// // import { ThemeProvider } from "./contexts/ThemeContext";
// // import { PortfolioProvider } from "./contexts/PortfolioContext";

// // import Login from "./components/auth/login";
// // import Register from "./components/auth/register";
// // import Home from "./components/home/Home";
// // import Transactions from "./components/transactions/Transactions";
// // import PortfolioOverview from "./components/portfolio/PortfolioOverview";
// // import Profile from "./pages/Profile";
// // import Settings from "./pages/Settings";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import DashboardLayout from "./components/layouts/DashboardLayout";

// // const RootRedirect = () => {
// //   const { userLoggedIn } = useAuth();
// //   return userLoggedIn ? (
// //     <Navigate to="/home" replace />
// //   ) : (
// //     <Navigate to="/login" replace />
// //   );
// // };

// // function AppRoutes() {
// //   const routesArray = [
// //     { path: "/", element: <RootRedirect /> },
// //     { path: "/login", element: <Login /> },
// //     { path: "/register", element: <Register /> },

// //     // ✅ Protected layout routes
// //     {
// //       path: "/",
// //       element: (
// //         <ProtectedRoute>
// //           <DashboardLayout />
// //         </ProtectedRoute>
// //       ),
// //       children: [
// //         { path: "home", element: <Home /> },
// //         { path: "portfolio", element: <PortfolioOverview /> },
// //         { path: "transactions", element: <Transactions /> },
// //         { path: "profile", element: <Profile /> },
// //         { path: "settings", element: <Settings /> },
// //       ],
// //     },

// //     { path: "*", element: <Navigate to="/" replace /> },
// //   ];

// //   return useRoutes(routesArray);
// // }

// // function App() {
// //   return (
// //     <ThemeProvider>
// //       <AuthProvider>
// //         <PortfolioProvider>
// //           <div className="w-full h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
// //             <AppRoutes />
// //           </div>
// //         </PortfolioProvider>
// //       </AuthProvider>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;

// import React from "react";
// import { Navigate, useRoutes } from "react-router-dom";
// import { AuthProvider, useAuth } from "./contexts/authContext";
// import { PortfolioProvider } from "./contexts/PortfolioContext";

// import Login from "./components/auth/login";
// import Register from "./components/auth/register";
// import Home from "./components/home/Home";
// import Transactions from "./components/transactions/Transactions";
// import PortfolioOverview from "./components/portfolio/PortfolioOverview";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import ProtectedRoute from "./components/ProtectedRoute";
// import DashboardLayout from "./components/layouts/DashboardLayout";

// // 🔹 Redirect root path based on login state
// const RootRedirect = () => {
//   const { userLoggedIn } = useAuth();
//   return userLoggedIn ? (
//     <Navigate to="/home" replace />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// function AppRoutes() {
//   const routesArray = [
//     { path: "/", element: <RootRedirect /> },
//     { path: "/login", element: <Login /> },
//     { path: "/register", element: <Register /> },

//     // ✅ Protected layout routes
//     {
//       path: "/",
//       element: (
//         <ProtectedRoute>
//           <DashboardLayout />
//         </ProtectedRoute>
//       ),
//       children: [
//         { path: "home", element: <Home /> },
//         { path: "portfolio", element: <PortfolioOverview /> },
//         { path: "transactions", element: <Transactions /> },
//         { path: "profile", element: <Profile /> },
//         { path: "settings", element: <Settings /> },
//       ],
//     },

//     // Fallback
//     { path: "*", element: <Navigate to="/" replace /> },
//   ];

//   return useRoutes(routesArray);
// }

// function App() {
//   return (
//     <AuthProvider>
//       <PortfolioProvider>
//         <div className="w-full h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
//           <AppRoutes />
//         </div>
//       </PortfolioProvider>
//     </AuthProvider>
//   );
// }

// export default App;

import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/authContext";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import { SpeedInsights } from "@vercel/speed-insights/react"; // ✅ import component
import { Analytics } from "@vercel/analytics/react"
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home/Home";
import Transactions from "./components/transactions/Transactions";
import PortfolioOverview from "./components/portfolio/PortfolioOverview";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/layouts/DashboardLayout";

// 🔹 Redirect root path based on login state
const RootRedirect = () => {
  const { userLoggedIn } = useAuth();
  return userLoggedIn ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

function AppRoutes() {
  const routesArray = [
    { path: "/", element: <RootRedirect /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },

    // ✅ Protected layout routes
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "home", element: <Home /> },
        { path: "portfolio", element: <PortfolioOverview /> },
        { path: "transactions", element: <Transactions /> },
        { path: "profile", element: <Profile /> },
        { path: "settings", element: <Settings /> },
      ],
    },

    // Fallback
    { path: "*", element: <Navigate to="/" replace /> },
  ];

  return useRoutes(routesArray);
}

function App() {
  return (
    <AuthProvider>
      <PortfolioProvider>
        {/* ✅ Include SpeedInsights for performance monitoring */}
        <SpeedInsights projectId="YOUR_PROJECT_ID" />
        <Analytics />
        <div className="w-full h-screen flex flex-col bg-gray-50 transition-colors">
          <AppRoutes />
        </div>
      </PortfolioProvider>
    </AuthProvider>
  );
}

export default App;
