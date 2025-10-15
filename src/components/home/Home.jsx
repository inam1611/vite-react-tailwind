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

// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch user data (transactions + selectedPortfolio)
//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
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

//     fetchUserData();
//   }, [currentUser]);

//   // 🔹 Clear cache on logout
//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   // 🔹 Filter transactions by selected portfolio
//   const filteredTransactions = useMemo(() => {
//     return transactions.filter(
//       (tx) => tx.portfolio === selectedPortfolio
//     );
//   }, [transactions, selectedPortfolio]);

//   // 🔹 Calculate Holdings
//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += qty * p;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= qty * p;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   // 🔹 Mock current price logic (temporary)
//   const getCurrentPrice = (symbol) => {
//     return (Math.random() * 0.2 + 0.9) * 100; // simulate 90%–110% of base 100
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

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">
//           {selectedPortfolio}
//         </span>
//       </p>

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
//                   No holdings yet for this portfolio.
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

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
//         } else setTransactions([]);
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += qty * p;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= qty * p;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   const getCurrentPrice = (symbol) => (Math.random() * 0.2 + 0.9) * 100;

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

//   if (loading)
//   return (
//     <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//       <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   );


//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName ? currentUser.displayName : currentUser.email}
//         </span>
//       </div>

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
//       </p>

//       <DashboardCards summary={summary} />
//       <HoldingsTable holdings={holdings} getCurrentPrice={getCurrentPrice} />
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
//         } else setTransactions([]);
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += qty * p;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= qty * p;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   const getCurrentPrice = (symbol) => (Math.random() * 0.2 + 0.9) * 100;

//   // 🔹 Updated summary calculation using real holdings
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalValue = 0;

//     holdings.forEach((h) => {
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
//       todayPerf: 3344,    // placeholder
//       todayReturn: -0.1,  // placeholder
//       weekPerf: 122,      // placeholder
//       weekReturn: 20,     // placeholder
//     };
//   }, [holdings]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName ? currentUser.displayName : currentUser.email}
//         </span>
//       </div>

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
//       </p>

//       <DashboardCards summary={summary} />
//       <HoldingsTable holdings={holdings} getCurrentPrice={getCurrentPrice} />
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);

//   // Helper: Calculate Fees
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   // Fetch transactions & selected portfolio
//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
//         } else setTransactions([]);
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   // Filter transactions for selected portfolio
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // Compute holdings with after-tax cost
//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       const fees = calculateFees(tx);
//       const priceAfterTax = p + fees / (qty || 1);
//       const totalAfterTax = priceAfterTax * qty;

//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += totalAfterTax;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= totalAfterTax;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   // Mock current price for now
//   const getCurrentPrice = (symbol) => (Math.random() * 0.2 + 0.9) * 100;

//   // Dashboard summary based on real holdings
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalValue = 0;

//     holdings.forEach((h) => {
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
//       todayPerf: 3344,    // placeholder
//       todayReturn: -0.1,  // placeholder
//       weekPerf: 122,      // placeholder
//       weekReturn: 20,     // placeholder
//     };
//   }, [holdings]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName ? currentUser.displayName : currentUser.email}
//         </span>
//       </div>

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
//       </p>

//       <DashboardCards summary={summary} />
//       <HoldingsTable holdings={holdings} getCurrentPrice={getCurrentPrice} />
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);

//   // Helper: Calculate Fees
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   // Fetch transactions & selected portfolio
//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
//         } else setTransactions([]);
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   // Filter transactions for selected portfolio
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // Compute holdings with after-tax cost
//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       const fees = calculateFees(tx);
//       const priceAfterTax = p + fees / (qty || 1);
//       const totalAfterTax = priceAfterTax * qty;

//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += totalAfterTax;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= totalAfterTax;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   // Mock current price for now
//   const getCurrentPrice = (symbol) => (Math.random() * 0.2 + 0.9) * 100;

//   // Dashboard summary based on real holdings (after-tax)
//   const summary = useMemo(() => {
//   let totalInvested = 0;
//   let totalGainLoss = 0;

//   holdings.forEach((h) => {
//     const currentPrice = getCurrentPrice(h.symbol);
//     const currentValue = h.quantity * currentPrice;
//     const gainLoss = currentValue - h.totalCost;

//     totalInvested += h.totalCost;
//     totalGainLoss += gainLoss;
//   });

//   const returnPercent = totalInvested ? (totalGainLoss / totalInvested) * 100 : 0;

//   return {
//     totalInvested,
//     totalValue: totalInvested + totalGainLoss, // optional, can keep for consistency
//     gainLoss: totalGainLoss,
//     returnPercent,
//     todayPerf: 3344,    // placeholder
//     todayReturn: -0.1,  // placeholder
//     weekPerf: 122,      // placeholder
//     weekReturn: 20,     // placeholder
//   };
// }, [holdings]);


//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName ? currentUser.displayName : currentUser.email}
//         </span>
//       </div>

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
//       </p>

//       <DashboardCards summary={summary} />
//       <HoldingsTable holdings={holdings} getCurrentPrice={getCurrentPrice} />
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);

//   // Helper: Calculate Fees
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   // Fetch transactions & selected portfolio
//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
//         } else setTransactions([]);
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   // Filter transactions for selected portfolio
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // Compute holdings with after-tax cost
//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       const fees = calculateFees(tx);
//       const priceAfterTax = p + fees / (qty || 1);
//       const totalAfterTax = priceAfterTax * qty;

//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += totalAfterTax;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= totalAfterTax;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   // Generate current prices once for all holdings (to keep dashboard & table consistent)
//   const currentPrices = useMemo(() => {
//     const prices = {};
//     holdings.forEach((h) => {
//       prices[h.symbol] = (Math.random() * 0.2 + 0.9) * 100; // mock price
//     });
//     return prices;
//   }, [holdings]);

//   // Dashboard summary based on real holdings (after-tax)
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const currentPrice = currentPrices[h.symbol];
//       const currentValue = h.quantity * currentPrice;
//       const gainLoss = currentValue - h.totalCost;

//       totalInvested += h.totalCost;
//       totalGainLoss += gainLoss;
//     });

//     const returnPercent = totalInvested ? (totalGainLoss / totalInvested) * 100 : 0;

//     return {
//       totalInvested,
//       totalValue: totalInvested + totalGainLoss, // optional, can keep for consistency
//       gainLoss: totalGainLoss,
//       returnPercent,
//       todayPerf: 3344,    // placeholder
//       todayReturn: -0.1,  // placeholder
//       weekPerf: 122,      // placeholder
//       weekReturn: 20,     // placeholder
//     };
//   }, [holdings, currentPrices]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName ? currentUser.displayName : currentUser.email}
//         </span>
//       </div>

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
//       </p>

//       <DashboardCards summary={summary} />
//       <HoldingsTable holdings={holdings} currentPrices={currentPrices} />
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);
//   const [stockInfo, setStockInfo] = useState({}); // <-- Added for live stock data

//   // Helper: Calculate Fees
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   // Fetch transactions & selected portfolio
//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
//         } else setTransactions([]);
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   // Filter transactions for selected portfolio
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // Compute holdings with after-tax cost
//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       const fees = calculateFees(tx);
//       const priceAfterTax = p + fees / (qty || 1);
//       const totalAfterTax = priceAfterTax * qty;

//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += totalAfterTax;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= totalAfterTax;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   // Fetch live stock info from Render API
//   useEffect(() => {
//     const fetchStockInfo = async () => {
//       const info = {};
//       await Promise.all(
//         holdings.map(async (h) => {
//           try {
//             const res = await fetch(
//               `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
//             );
//             const data = await res.json();
//             info[h.symbol] = data;
//           } catch (err) {
//             console.error(`Failed to fetch info for ${h.symbol}`, err);
//             info[h.symbol] = { name: null, closingPrice: 0 };
//           }
//         })
//       );
//       setStockInfo(info);
//     };

//     if (holdings.length > 0) fetchStockInfo();
//   }, [holdings]);

//   // Generate current prices once for all holdings (from live stock info)
//   const currentPrices = useMemo(() => {
//     const prices = {};
//     holdings.forEach((h) => {
//       prices[h.symbol] = stockInfo[h.symbol]?.closingPrice || 0;
//     });
//     return prices;
//   }, [holdings, stockInfo]);

//   // Dashboard summary based on real holdings (after-tax)
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const currentPrice = currentPrices[h.symbol];
//       const currentValue = h.quantity * currentPrice;
//       const gainLoss = currentValue - h.totalCost;

//       totalInvested += h.totalCost;
//       totalGainLoss += gainLoss;
//     });

//     const returnPercent = totalInvested ? (totalGainLoss / totalInvested) * 100 : 0;

//     return {
//       totalInvested,
//       totalValue: totalInvested + totalGainLoss, 
//       gainLoss: totalGainLoss,
//       returnPercent,
//       todayPerf: 3344,    
//       todayReturn: -0.1,  
//       weekPerf: 122,      
//       weekReturn: 20,     
//     };
//   }, [holdings, currentPrices]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName ? currentUser.displayName : currentUser.email}
//         </span>
//       </div>

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
//       </p>

//       <DashboardCards summary={summary} />
//       <HoldingsTable holdings={holdings} currentPrices={currentPrices} stockInfo={stockInfo} />
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);
//   const [stockInfo, setStockInfo] = useState({}); // Live PSX data

//   // --- Calculate fees (same as before)
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   // --- Load transactions from Firebase
//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const data = userSnap.data();
//           const txs = data.transactions || [];
//           const portfolio = data.selectedPortfolio || "Main Portfolio";
//           setTransactions(txs);
//           setSelectedPortfolio(portfolio);
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({ transactions: txs, selectedPortfolio: portfolio })
//           );
//         } else setTransactions([]);
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   // --- Filter portfolio
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // --- Group holdings
//   const holdings = useMemo(() => {
//     const grouped = {};
//     filteredTransactions.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       const fees = calculateFees(tx);
//       const priceAfterTax = p + fees / (qty || 1);
//       const totalAfterTax = priceAfterTax * qty;

//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type?.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += totalAfterTax;
//       } else if (type?.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= totalAfterTax;
//       }
//     });
//     return Object.values(grouped);
//   }, [filteredTransactions]);

//   // --- Fetch live PSX data
//   useEffect(() => {
//     const fetchStockInfo = async () => {
//       const info = {};
//       await Promise.all(
//         holdings.map(async (h) => {
//           try {
//             const res = await fetch(
//               `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
//             );
//             const data = await res.json();
//             info[h.symbol] = data;
//           } catch (err) {
//             console.error(`Failed to fetch info for ${h.symbol}`, err);
//             info[h.symbol] = { name: null, industry: null, closingPrice: 0 };
//           }
//         })
//       );
//       setStockInfo(info);
//     };

//     if (holdings.length > 0) fetchStockInfo();
//   }, [holdings]);

//   // --- Get real-time prices
//   const currentPrices = useMemo(() => {
//     const prices = {};
//     holdings.forEach((h) => {
//       prices[h.symbol] = stockInfo[h.symbol]?.closingPrice || 0;
//     });
//     return prices;
//   }, [holdings, stockInfo]);

//   // --- Dashboard summary
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const currentPrice = currentPrices[h.symbol];
//       const currentValue = h.quantity * currentPrice;
//       const gainLoss = currentValue - h.totalCost;

//       totalInvested += h.totalCost;
//       totalGainLoss += gainLoss;
//     });

//     const returnPercent = totalInvested ? (totalGainLoss / totalInvested) * 100 : 0;

//     return {
//       totalInvested,
//       totalValue: totalInvested + totalGainLoss,
//       gainLoss: totalGainLoss,
//       returnPercent,
//       todayPerf: 3344,
//       todayReturn: -0.1,
//       weekPerf: 122,
//       weekReturn: 20,
//     };
//   }, [holdings, currentPrices]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );

//   return (
//     <div className="pt-14 px-6">
//       <div className="text-3xl font-semibold mb-6 text-gray-800">
//         Hello,{" "}
//         <span className="text-indigo-600">
//           {currentUser.displayName ? currentUser.displayName : currentUser.email}
//         </span>
//       </div>

//       <p className="text-gray-600 mb-6">
//         Showing holdings for:{" "}
//         <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
//       </p>

//       <DashboardCards summary={summary} />
//       <HoldingsTable holdings={holdings} currentPrices={currentPrices} stockInfo={stockInfo} />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState, useMemo } from "react";
import { useAuth } from "../../contexts/authContext";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

import DashboardCards from "./DashboardCards";
import HoldingsTable from "./HoldingsTable";

const Home = () => {
  const { currentUser } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
  const [loading, setLoading] = useState(true);
  const [stockData, setStockData] = useState({});

  // Helper: Calculate Fees
  const calculateFees = (tx) => {
    const units = parseFloat(tx.quantity) || 0;
    const price = parseFloat(tx.price) || 0;
    const type = (tx.type || "").toLowerCase();
    let fees = 0;

    if (type === "buy" || type === "sell") {
      const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
      const salesTax = commission * 0.15;
      const cdcCharges = units * 0.005;
      fees = commission + salesTax + cdcCharges;
    } else if (type === "dividend") {
      fees = units * price * 0.15;
    }
    return fees;
  };

  // Fetch transactions
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
        } else setTransactions([]);
      } catch (err) {
        console.error("Error loading transactions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) localStorage.removeItem("homeData");
  }, [currentUser]);

  // Filter transactions
  const filteredTransactions = useMemo(
    () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
    [transactions, selectedPortfolio]
  );

  // Compute holdings
  const holdings = useMemo(() => {
    const grouped = {};
    filteredTransactions.forEach((tx) => {
      const { symbol, type, quantity, price } = tx;
      const qty = parseFloat(quantity) || 0;
      const p = parseFloat(price) || 0;
      const fees = calculateFees(tx);
      const priceAfterTax = p + fees / (qty || 1);
      const totalAfterTax = priceAfterTax * qty;

      if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

      if (type?.toLowerCase() === "buy") {
        grouped[symbol].quantity += qty;
        grouped[symbol].totalCost += totalAfterTax;
      } else if (type?.toLowerCase() === "sell") {
        grouped[symbol].quantity -= qty;
        grouped[symbol].totalCost -= totalAfterTax;
      }
    });
    return Object.values(grouped);
  }, [filteredTransactions]);

  // ✅ Fetch stock data (price, industry, change)
  useEffect(() => {
    const fetchStockData = async () => {
      const results = {};
      for (const h of holdings) {
        try {
          const res = await fetch(
            `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
          );
          const data = await res.json();
          if (data && data.ticker) {
            results[h.symbol] = {
              name: data.name || h.symbol,
              industry: data.industry
                ? data.industry
                    .split(" ")
                    .map(
                      (w) =>
                        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                    )
                    .join(" ")
                : "—",
              currentPrice: data.closingPrice || 0,
              changeValue: data.changeValue || 0,
              changePercent: data.changePercent || "(0%)",
            };
          }
        } catch (err) {
          console.error(`Error fetching data for ${h.symbol}:`, err);
        }
      }
      setStockData(results);
    };

    if (holdings.length > 0) fetchStockData();
  }, [holdings]);

  // ✅ Dashboard summary
  const summary = useMemo(() => {
    let totalInvested = 0;
    let totalGainLoss = 0;

    holdings.forEach((h) => {
      const currentPrice = stockData[h.symbol]?.currentPrice || 0;
      const currentValue = h.quantity * currentPrice;
      const gainLoss = currentValue - h.totalCost;
      totalInvested += h.totalCost;
      totalGainLoss += gainLoss;
    });

    const returnPercent = totalInvested ? (totalGainLoss / totalInvested) * 100 : 0;

    return {
      totalInvested,
      totalValue: totalInvested + totalGainLoss,
      gainLoss: totalGainLoss,
      returnPercent,
      todayPerf: 3344,
      todayReturn: -0.1,
      weekPerf: 122,
      weekReturn: 20,
    };
  }, [holdings, stockData]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="pt-14 px-6">
      <div className="text-3xl font-semibold mb-6 text-gray-800">
        Hello,{" "}
        <span className="text-indigo-600">
          {currentUser.displayName ? currentUser.displayName : currentUser.email}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Showing holdings for:{" "}
        <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
      </p>

      <DashboardCards summary={summary} />
      <HoldingsTable holdings={holdings} stockData={stockData} />
    </div>
  );
};

export default Home;
