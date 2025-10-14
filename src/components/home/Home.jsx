// import React from "react";
// import { useAuth } from "../../contexts/authContext";
// import {
//   DollarSign,
//   Wallet,
//   TrendingUp,
//   TrendingDown,
//   Percent,
// } from "lucide-react";

// const Home = () => {
//   const { currentUser } = useAuth();

//   const userName = currentUser.displayName
//     ? currentUser.displayName
//     : currentUser.email;

//   return (
//     <div className="pt-14 px-6">
//       {/* Greeting */}
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">
//         Welcome back,&nbsp;
//         <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//           {userName}
//         </span>
//         👋
//       </h1>

//       {/* Dashboard Summary */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         {/* Block 1 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Total Invested
//             </h2>
//             <DollarSign className="text-green-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 100</p>

//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Total Value
//             </h2>
//             <Wallet className="text-indigo-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800">Rs. 120</p>
//         </div>

//         {/* Block 2 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Total Gain/Loss
//             </h2>
//             <TrendingUp className="text-green-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-green-600 mb-4">Rs. 20</p>

//           <div className="flex justify-between items-center mb-1">
//             <p className="text-gray-600 text-sm font-semibold uppercase">
//               Return %
//             </p>
//             <TrendingUp className="text-green-600 w-4 h-4" />
//           </div>
//           <p className="text-xl font-bold text-green-600">+10.0%</p>
//         </div>

//         {/* Block 3 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Today Performance
//             </h2>
//             <TrendingDown className="text-red-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 3,344</p>

//           <div className="flex justify-between items-center mb-1">
//             <p className="text-gray-600 text-sm font-semibold uppercase">
//               Return %
//             </p>
//             <TrendingDown className="text-red-600 w-4 h-4" />
//           </div>
//           <p className="text-xl font-bold text-red-600">-0.10%</p>
//         </div>

//         {/* Block 4 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Last 7 Days Performance
//             </h2>
//             <TrendingUp className="text-indigo-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 122</p>

//           <div className="flex justify-between items-center mb-1">
//             <p className="text-gray-600 text-sm font-semibold uppercase">
//               Return %
//             </p>
//             <TrendingUp className="text-green-600 w-4 h-4" />
//           </div>
//           <p className="text-xl font-bold text-green-600">+20.0%</p>
//         </div>
//       </div>

//       {/* Current Holdings Table */}
//       <div className="bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">
//           Current Holdings
//         </h2>
//         <table className="w-full border-collapse text-center min-w-[600px]">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               <th className="p-2 border">Symbol</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">Avg. Price</th>
//               <th className="p-2 border">Current Price</th>
//               <th className="p-2 border">Total Value</th>
//               <th className="p-2 border">Profit/Loss</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-t">
//               <td className="p-2 border text-gray-500" colSpan="6">
//                 No holdings yet.
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useAuth } from "../../contexts/authContext";
// import {
//   DollarSign,
//   Wallet,
//   TrendingUp,
//   TrendingDown,
//   Percent,
// } from "lucide-react";

// const Home = () => {
//   const { currentUser } = useAuth();

//   const userName = currentUser.displayName
//     ? currentUser.displayName
//     : currentUser.email;

//   return (
//     <div className="pt-14 px-6">
//       {/* Greeting */}
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">
//         Welcome back,&nbsp;
//         <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//           {userName}
//         </span>
//         👋
//       </h1>

//       {/* Dashboard Summary */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         {/* Block 1 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Total Invested
//             </h2>
//             <DollarSign className="text-green-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 100</p>

//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Total Value
//             </h2>
//             <Wallet className="text-indigo-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800">Rs. 120</p>
//         </div>

//         {/* Block 2 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Total Gain/Loss
//             </h2>
//             <TrendingUp className="text-green-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-green-600 mb-4">Rs. 20</p>

//           <div className="flex justify-between items-center mb-1">
//             <p className="text-gray-600 text-sm font-semibold uppercase">
//               Return
//             </p>
//             <Percent className="text-green-600 w-4 h-4" />
//           </div>
//           <p className="text-xl font-bold text-green-600">+10.0%</p>
//         </div>

//         {/* Block 3 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Today Performance
//             </h2>
//             <TrendingDown className="text-red-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 3,344</p>

//           <div className="flex justify-between items-center mb-1">
//             <p className="text-gray-600 text-sm font-semibold uppercase">
//               Return
//             </p>
//             <Percent className="text-red-600 w-4 h-4" />
//           </div>
//           <p className="text-xl font-bold text-red-600">-0.10%</p>
//         </div>

//         {/* Block 4 */}
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-gray-600 text-sm font-semibold uppercase">
//               Last 7 Days Performance
//             </h2>
//             <TrendingUp className="text-indigo-600 w-5 h-5" />
//           </div>
//           <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 122</p>

//           <div className="flex justify-between items-center mb-1">
//             <p className="text-gray-600 text-sm font-semibold uppercase">
//               Return
//             </p>
//             <Percent className="text-green-600 w-4 h-4" />
//           </div>
//           <p className="text-xl font-bold text-green-600">+20.0%</p>
//         </div>
//       </div>

//       {/* Current Holdings Table */}
//       <div className="bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">
//           Current Holdings
//         </h2>
//         <table className="w-full border-collapse text-center min-w-[600px]">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               <th className="p-2 border">Symbol</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">Avg. Price</th>
//               <th className="p-2 border">Current Price</th>
//               <th className="p-2 border">Total Value</th>
//               <th className="p-2 border">Profit/Loss</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-t">
//               <td className="p-2 border text-gray-500" colSpan="6">
//                 No holdings yet.
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { useAuth } from "../../contexts/authContext";
import {
  DollarSign,
  Wallet,
  TrendingUp,
  TrendingDown,
  Percent,
} from "lucide-react";

const Home = () => {
  const { currentUser } = useAuth();

  const userName = currentUser.displayName
    ? currentUser.displayName
    : currentUser.email;

  return (
    <div className="pt-14 px-6">
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Welcome back,&nbsp;
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {userName}
        </span>
        👋
      </h1>

      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Block 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Total Invested
            </h2>
            <DollarSign className="text-green-600 w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 100</p>

          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Total Value
            </h2>
            <Wallet className="text-indigo-600 w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-800">Rs. 120</p>
        </div>

        {/* Block 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Total Gain/Loss
            </h2>
            <TrendingUp className="text-green-600 w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-green-600 mb-4">Rs. 20</p>

          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Return
            </p>
            <Percent className="text-green-600 w-4 h-4" />
          </div>
          <p className="text-xl font-bold text-green-600">+10.0%</p>
        </div>

        {/* Block 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Today Performance
            </h2>
            <TrendingDown className="text-red-600 w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 3,344</p>

          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Return
            </p>
            <Percent className="text-red-600 w-4 h-4" />
          </div>
          <p className="text-xl font-bold text-red-600">-0.10%</p>
        </div>

        {/* Block 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-600 text-sm font-semibold uppercase">
              Last 7 Days Performance
            </h2>
            <TrendingUp className="text-indigo-600 w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-4">Rs. 122</p>

          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-600 text-sm font-semibold uppercase">
              Return
            </p>
            <Percent className="text-green-600 w-4 h-4" />
          </div>
          <p className="text-xl font-bold text-green-600">+20.0%</p>
        </div>
      </div>

      {/* Current Holdings Table */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Current Holdings
        </h2>
        <table className="w-full border-collapse text-center min-w-[600px]">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
              <th className="p-2 border">Stock</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">AVG. Price</th>
              <th className="p-2 border">Current Price</th>
              <th className="p-2 border">Total Cost</th>
              <th className="p-2 border">Current Value</th>
              <th className="p-2 border">Gain/Loss</th>
              <th className="p-2 border">Return %</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 border text-gray-500" colSpan="8">
                No holdings yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
