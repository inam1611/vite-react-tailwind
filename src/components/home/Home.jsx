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
//             <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
//               <th className="p-2 border">Stock</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">AVG. Price</th>
//               <th className="p-2 border">Current Price</th>
//               <th className="p-2 border">Total Cost</th>
//               <th className="p-2 border">Current Value</th>
//               <th className="p-2 border">Gain/Loss</th>
//               <th className="p-2 border">Return %</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-t">
//               <td className="p-2 border text-gray-500" colSpan="8">
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


// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch transactions (with localStorage cache)
//   useEffect(() => {
//     const cached = localStorage.getItem("homeTransactions");
//     if (cached) setTransactions(JSON.parse(cached));

//     const fetchTransactions = async () => {
//       if (!currentUser) return;
//       try {
//         const q = collection(db, `users/${currentUser.uid}/transactions`);
//         const querySnapshot = await getDocs(q);
//         const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setTransactions(data);
//         localStorage.setItem("homeTransactions", JSON.stringify(data));
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, [currentUser]);

//   // 🔹 Calculate Holdings per Stock
//   const holdings = useMemo(() => {
//     const grouped = {};
//     transactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += qty * p;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//       }
//     });
//     return Object.values(grouped);
//   }, [transactions]);

//   // 🔹 Mock current price logic (later connect to API)
//   const getCurrentPrice = (symbol) => {
//     // For now: simulate current price with ±10% variation
//     return (Math.random() * 0.2 + 0.9) * 100;
//   };

//   // 🔹 Compute Summary Stats
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalValue = 0;

//     holdings.forEach((h) => {
//       const avgPrice = h.totalCost / (h.quantity || 1);
//       const currentPrice = getCurrentPrice(h.symbol);
//       totalInvested += h.totalCost;
//       totalValue += h.quantity * currentPrice;
//     });

//     const gainLoss = totalValue - totalInvested;
//     const returnPercent = totalInvested ? (gainLoss / totalInvested) * 100 : 0;

//     return {
//       totalInvested,
//       totalValue,
//       gainLoss,
//       returnPercent,
//       todayPerf: 3344, // mock data for now
//       todayReturn: -0.1,
//       weekPerf: 122,
//       weekReturn: 20,
//     };
//   }, [holdings]);

//   // 🔹 Clear cache on logout
//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeTransactions");
//   }, [currentUser]);

//   if (loading) return <div className="pt-14 text-lg">Loading your portfolio...</div>;

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName
//             ? currentUser.displayName
//             : currentUser.email}
//         </span>
//       </div>

//       {/* 🔹 Dashboard Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         {/* Total Invested */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Total Invested</h3>
//             <DollarSign className="text-indigo-600" />
//           </div>
//           <p className="text-2xl font-bold mt-2">
//             Rs. {summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">Total Value</p>
//           <p className="text-lg font-semibold text-green-600">
//             Rs. {summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </p>
//         </div>

//         {/* Total Gain/Loss */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Total Gain/Loss</h3>
//             {summary.gainLoss >= 0 ? (
//               <TrendingUp className="text-green-600" />
//             ) : (
//               <TrendingDown className="text-red-600" />
//             )}
//           </div>
//           <p
//             className={`text-2xl font-bold mt-2 ${
//               summary.gainLoss >= 0 ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             Rs. {summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </p>
//           <div className="flex justify-between text-sm text-gray-500 mt-1">
//             <span>Return</span>
//             <span className="text-indigo-600 font-semibold">
//               <Percent className="inline w-4 h-4 mr-1" />
//               {summary.returnPercent.toFixed(2)}%
//             </span>
//           </div>
//         </div>

//         {/* Today Performance */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Today Performance</h3>
//             {summary.todayReturn >= 0 ? (
//               <TrendingUp className="text-green-600" />
//             ) : (
//               <TrendingDown className="text-red-600" />
//             )}
//           </div>
//           <p className="text-2xl font-bold mt-2 text-indigo-700">
//             Rs. {summary.todayPerf.toLocaleString()}
//           </p>
//           <div className="flex justify-between text-sm text-gray-500 mt-1">
//             <span>Return</span>
//             <span
//               className={`font-semibold ${
//                 summary.todayReturn >= 0 ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               <Percent className="inline w-4 h-4 mr-1" />
//               {summary.todayReturn > 0 ? "+" : ""}
//               {summary.todayReturn.toFixed(2)}%
//             </span>
//           </div>
//         </div>

//         {/* 7-Day Performance */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Last 7 Days Performance</h3>
//             {summary.weekReturn >= 0 ? (
//               <TrendingUp className="text-green-600" />
//             ) : (
//               <TrendingDown className="text-red-600" />
//             )}
//           </div>
//           <p className="text-2xl font-bold mt-2 text-indigo-700">
//             Rs. {summary.weekPerf.toLocaleString()}
//           </p>
//           <div className="flex justify-between text-sm text-gray-500 mt-1">
//             <span>Return</span>
//             <span
//               className={`font-semibold ${
//                 summary.weekReturn >= 0 ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               <Percent className="inline w-4 h-4 mr-1" />
//               {summary.weekReturn > 0 ? "+" : ""}
//               {summary.weekReturn.toFixed(2)}%
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Holdings Table */}
//       <div className="bg-white shadow rounded-xl p-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//         <table className="w-full border-collapse">
//           <thead className="bg-gray-100">
//             <tr className="text-gray-700 text-left">
//               <th className="p-2 border">Stock</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">Avg. Price</th>
//               <th className="p-2 border">Current Price</th>
//               <th className="p-2 border">Total Cost</th>
//               <th className="p-2 border">Current Value</th>
//               <th className="p-2 border">Gain/Loss</th>
//               <th className="p-2 border">Return %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const avgPrice = h.totalCost / (h.quantity || 1);
//                 const currentPrice = getCurrentPrice(h.symbol);
//                 const totalCost = h.totalCost;
//                 const currentValue = h.quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//                 return (
//                   <tr key={h.symbol} className="border-t text-gray-700">
//                     <td className="p-2 border font-medium">{h.symbol}</td>
//                     <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                     <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                     <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
//                     <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                     <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                     <td
//                       className={`p-2 border font-semibold ${
//                         gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       Rs. {gainLoss.toFixed(2)}
//                     </td>
//                     <td
//                       className={`p-2 border font-semibold ${
//                         returnPct >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {returnPct.toFixed(2)}%
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-4 text-gray-500 text-center" colSpan="8">
//                   No holdings yet.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch transactions (with localStorage cache)
//   useEffect(() => {
//     const cached = localStorage.getItem("homeTransactions");
//     if (cached) setTransactions(JSON.parse(cached));

//     const fetchTransactions = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           setTransactions(txs);
//           localStorage.setItem("homeTransactions", JSON.stringify(txs));
//         } else {
//           console.warn("No user data found in Firestore");
//           setTransactions([]);
//         }
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, [currentUser]);

//   // 🔹 Calculate Holdings per Stock
//   const holdings = useMemo(() => {
//     const grouped = {};
//     transactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += qty * p;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//       }
//     });
//     return Object.values(grouped);
//   }, [transactions]);

//   // 🔹 Mock current price logic (temporary)
//   const getCurrentPrice = (symbol) => {
//     return (Math.random() * 0.2 + 0.9) * 100;
//   };

//   // 🔹 Compute Summary Stats
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalValue = 0;

//     holdings.forEach((h) => {
//       const avgPrice = h.totalCost / (h.quantity || 1);
//       const currentPrice = getCurrentPrice(h.symbol);
//       totalInvested += h.totalCost;
//       totalValue += h.quantity * currentPrice;
//     });

//     const gainLoss = totalValue - totalInvested;
//     const returnPercent = totalInvested ? (gainLoss / totalInvested) * 100 : 0;

//     return {
//       totalInvested,
//       totalValue,
//       gainLoss,
//       returnPercent,
//       todayPerf: 3344,
//       todayReturn: -0.1,
//       weekPerf: 122,
//       weekReturn: 20,
//     };
//   }, [holdings]);

//   // 🔹 Clear cache on logout
//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeTransactions");
//   }, [currentUser]);

//   if (loading) return <div className="pt-14 text-lg">Loading your portfolio...</div>;

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName
//             ? currentUser.displayName
//             : currentUser.email}
//         </span>
//       </div>

//       {/* 🔹 Dashboard Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         {/* Total Invested */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Total Invested</h3>
//             <DollarSign className="text-indigo-600" />
//           </div>
//           <p className="text-2xl font-bold mt-2">
//             Rs. {summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">Total Value</p>
//           <p className="text-lg font-semibold text-green-600">
//             Rs. {summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </p>
//         </div>

//         {/* Total Gain/Loss */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Total Gain/Loss</h3>
//             {summary.gainLoss >= 0 ? (
//               <TrendingUp className="text-green-600" />
//             ) : (
//               <TrendingDown className="text-red-600" />
//             )}
//           </div>
//           <p
//             className={`text-2xl font-bold mt-2 ${
//               summary.gainLoss >= 0 ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             Rs. {summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </p>
//           <div className="flex justify-between text-sm text-gray-500 mt-1">
//             <span>Return</span>
//             <span className="text-indigo-600 font-semibold">
//               <Percent className="inline w-4 h-4 mr-1" />
//               {summary.returnPercent.toFixed(2)}%
//             </span>
//           </div>
//         </div>

//         {/* Today Performance */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Today Performance</h3>
//             {summary.todayReturn >= 0 ? (
//               <TrendingUp className="text-green-600" />
//             ) : (
//               <TrendingDown className="text-red-600" />
//             )}
//           </div>
//           <p className="text-2xl font-bold mt-2 text-indigo-700">
//             Rs. {summary.todayPerf.toLocaleString()}
//           </p>
//           <div className="flex justify-between text-sm text-gray-500 mt-1">
//             <span>Return</span>
//             <span
//               className={`font-semibold ${
//                 summary.todayReturn >= 0 ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               <Percent className="inline w-4 h-4 mr-1" />
//               {summary.todayReturn > 0 ? "+" : ""}
//               {summary.todayReturn.toFixed(2)}%
//             </span>
//           </div>
//         </div>

//         {/* 7-Day Performance */}
//         <div className="bg-white shadow rounded-xl p-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-600 font-medium">Last 7 Days Performance</h3>
//             {summary.weekReturn >= 0 ? (
//               <TrendingUp className="text-green-600" />
//             ) : (
//               <TrendingDown className="text-red-600" />
//             )}
//           </div>
//           <p className="text-2xl font-bold mt-2 text-indigo-700">
//             Rs. {summary.weekPerf.toLocaleString()}
//           </p>
//           <div className="flex justify-between text-sm text-gray-500 mt-1">
//             <span>Return</span>
//             <span
//               className={`font-semibold ${
//                 summary.weekReturn >= 0 ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               <Percent className="inline w-4 h-4 mr-1" />
//               {summary.weekReturn > 0 ? "+" : ""}
//               {summary.weekReturn.toFixed(2)}%
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Holdings Table */}
//       <div className="bg-white shadow rounded-xl p-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//         <table className="w-full border-collapse">
//           <thead className="bg-gray-100">
//             <tr className="text-gray-700 text-left">
//               <th className="p-2 border">Stock</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">Avg. Price</th>
//               <th className="p-2 border">Current Price</th>
//               <th className="p-2 border">Total Cost</th>
//               <th className="p-2 border">Current Value</th>
//               <th className="p-2 border">Gain/Loss</th>
//               <th className="p-2 border">Return %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const avgPrice = h.totalCost / (h.quantity || 1);
//                 const currentPrice = getCurrentPrice(h.symbol);
//                 const totalCost = h.totalCost;
//                 const currentValue = h.quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//                 return (
//                   <tr key={h.symbol} className="border-t text-gray-700">
//                     <td className="p-2 border font-medium">{h.symbol}</td>
//                     <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                     <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                     <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
//                     <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                     <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                     <td
//                       className={`p-2 border font-semibold ${
//                         gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       Rs. {gainLoss.toFixed(2)}
//                     </td>
//                     <td
//                       className={`p-2 border font-semibold ${
//                         returnPct >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {returnPct.toFixed(2)}%
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-4 text-gray-500 text-center" colSpan="8">
//                   No holdings yet.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState, useMemo } from "react";
import { useAuth } from "../../contexts/authContext";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

const Home = () => {
  const { currentUser } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch user data (transactions + selectedPortfolio)
  useEffect(() => {
    const cached = localStorage.getItem("homeData");
    if (cached) {
      const parsed = JSON.parse(cached);
      setTransactions(parsed.transactions || []);
      setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
    }

    const fetchUserData = async () => {
      if (!currentUser) return;
      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          const txs = data.transactions || [];
          const portfolio = data.selectedPortfolio || "Main Portfolio";
          setTransactions(txs);
          setSelectedPortfolio(portfolio);
          localStorage.setItem(
            "homeData",
            JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
          );
        } else {
          console.warn("No user data found in Firestore");
          setTransactions([]);
        }
      } catch (err) {
        console.error("Error loading transactions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  // 🔹 Clear cache on logout
  useEffect(() => {
    if (!currentUser) localStorage.removeItem("homeData");
  }, [currentUser]);

  // 🔹 Filter transactions by selected portfolio
  const filteredTransactions = useMemo(() => {
    return transactions.filter(
      (tx) => tx.portfolio === selectedPortfolio
    );
  }, [transactions, selectedPortfolio]);

  // 🔹 Calculate Holdings
  const holdings = useMemo(() => {
    const grouped = {};
    filteredTransactions.forEach((tx) => {
      const { symbol, type, quantity, price } = tx;
      const qty = parseFloat(quantity) || 0;
      const p = parseFloat(price) || 0;
      if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

      if (type?.toLowerCase() === "buy") {
        grouped[symbol].quantity += qty;
        grouped[symbol].totalCost += qty * p;
      } else if (type?.toLowerCase() === "sell") {
        grouped[symbol].quantity -= qty;
        grouped[symbol].totalCost -= qty * p;
      }
    });
    return Object.values(grouped);
  }, [filteredTransactions]);

  // 🔹 Mock current price logic (temporary)
  const getCurrentPrice = (symbol) => {
    return (Math.random() * 0.2 + 0.9) * 100; // simulate 90%–110% of base 100
  };

  // 🔹 Compute Summary Stats
  const summary = useMemo(() => {
    let totalInvested = 0;
    let totalValue = 0;

    holdings.forEach((h) => {
      const avgPrice = h.totalCost / (h.quantity || 1);
      const currentPrice = getCurrentPrice(h.symbol);
      totalInvested += h.totalCost;
      totalValue += h.quantity * currentPrice;
    });

    const gainLoss = totalValue - totalInvested;
    const returnPercent = totalInvested ? (gainLoss / totalInvested) * 100 : 0;

    return {
      totalInvested,
      totalValue,
      gainLoss,
      returnPercent,
      todayPerf: 3344,
      todayReturn: -0.1,
      weekPerf: 122,
      weekReturn: 20,
    };
  }, [holdings]);

  if (loading) return <div className="pt-14 text-lg">Loading your portfolio...</div>;

  return (
    <div className="pt-14 px-6">
      <div className="text-3xl font-semibold mb-6 text-gray-800">
        Hello,{" "}
        <span className="text-indigo-600">
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Showing holdings for:{" "}
        <span className="font-semibold text-indigo-700">
          {selectedPortfolio}
        </span>
      </p>

      {/* 🔹 Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Invested */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Total Invested</h3>
            <DollarSign className="text-indigo-600" />
          </div>
          <p className="text-2xl font-bold mt-2">
            Rs. {summary.totalInvested.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-sm text-gray-500 mt-1">Total Value</p>
          <p className="text-lg font-semibold text-green-600">
            Rs. {summary.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>

        {/* Total Gain/Loss */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Total Gain/Loss</h3>
            {summary.gainLoss >= 0 ? (
              <TrendingUp className="text-green-600" />
            ) : (
              <TrendingDown className="text-red-600" />
            )}
          </div>
          <p
            className={`text-2xl font-bold mt-2 ${
              summary.gainLoss >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            Rs. {summary.gainLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Return</span>
            <span className="text-indigo-600 font-semibold">
              <Percent className="inline w-4 h-4 mr-1" />
              {summary.returnPercent.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Today Performance */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Today Performance</h3>
            {summary.todayReturn >= 0 ? (
              <TrendingUp className="text-green-600" />
            ) : (
              <TrendingDown className="text-red-600" />
            )}
          </div>
          <p className="text-2xl font-bold mt-2 text-indigo-700">
            Rs. {summary.todayPerf.toLocaleString()}
          </p>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Return</span>
            <span
              className={`font-semibold ${
                summary.todayReturn >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              <Percent className="inline w-4 h-4 mr-1" />
              {summary.todayReturn > 0 ? "+" : ""}
              {summary.todayReturn.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* 7-Day Performance */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Last 7 Days Performance</h3>
            {summary.weekReturn >= 0 ? (
              <TrendingUp className="text-green-600" />
            ) : (
              <TrendingDown className="text-red-600" />
            )}
          </div>
          <p className="text-2xl font-bold mt-2 text-indigo-700">
            Rs. {summary.weekPerf.toLocaleString()}
          </p>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Return</span>
            <span
              className={`font-semibold ${
                summary.weekReturn >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              <Percent className="inline w-4 h-4 mr-1" />
              {summary.weekReturn > 0 ? "+" : ""}
              {summary.weekReturn.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Holdings Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-gray-700 text-left">
              <th className="p-2 border">Stock</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Avg. Price</th>
              <th className="p-2 border">Current Price</th>
              <th className="p-2 border">Total Cost</th>
              <th className="p-2 border">Current Value</th>
              <th className="p-2 border">Gain/Loss</th>
              <th className="p-2 border">Return %</th>
            </tr>
          </thead>
          <tbody>
            {holdings.length > 0 ? (
              holdings.map((h) => {
                const avgPrice = h.totalCost / (h.quantity || 1);
                const currentPrice = getCurrentPrice(h.symbol);
                const totalCost = h.totalCost;
                const currentValue = h.quantity * currentPrice;
                const gainLoss = currentValue - totalCost;
                const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

                return (
                  <tr key={h.symbol} className="border-t text-gray-700">
                    <td className="p-2 border font-medium">{h.symbol}</td>
                    <td className="p-2 border">{h.quantity.toFixed(0)}</td>
                    <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
                    <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
                    <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
                    <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
                    <td
                      className={`p-2 border font-semibold ${
                        gainLoss >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      Rs. {gainLoss.toFixed(2)}
                    </td>
                    <td
                      className={`p-2 border font-semibold ${
                        returnPct >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {returnPct.toFixed(2)}%
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="p-4 text-gray-500 text-center" colSpan="8">
                  No holdings yet for this portfolio.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
