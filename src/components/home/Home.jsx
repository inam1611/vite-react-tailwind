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
//   const [stockData, setStockData] = useState({});

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

//   // Fetch transactions
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

//   // Filter transactions
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // Compute holdings
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

//   // ✅ Fetch stock data (price, industry, change)
//   useEffect(() => {
//     const fetchStockData = async () => {
//       const results = {};
//       for (const h of holdings) {
//         try {
//           const res = await fetch(
//             `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
//           );
//           const data = await res.json();
//           if (data && data.ticker) {
//             results[h.symbol] = {
//               name: data.name || h.symbol,
//               industry: data.industry
//                 ? data.industry
//                     .split(" ")
//                     .map(
//                       (w) =>
//                         w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
//                     )
//                     .join(" ")
//                 : "—",
//               currentPrice: data.closingPrice || 0,
//               changeValue: data.changeValue || 0,
//               changePercent: data.changePercent || "(0%)",
//             };
//           }
//         } catch (err) {
//           console.error(`Error fetching data for ${h.symbol}:`, err);
//         }
//       }
//       setStockData(results);
//     };

//     if (holdings.length > 0) fetchStockData();
//   }, [holdings]);

//   // ✅ Dashboard summary
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const currentPrice = stockData[h.symbol]?.currentPrice || 0;
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
//   }, [holdings, stockData]);

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
//       <HoldingsTable holdings={holdings} stockData={stockData} />
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useMemo, useRef } from "react";
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
//   const [stockData, setStockData] = useState({});
//   const refreshInterval = useRef(null); // ✅ for cleanup reference
//   const REFRESH_TIME = 3 * 60 * 1000; // 3 minutes

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

//   // Fetch transactions
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

//   // Filter transactions
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // Compute holdings
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

//   // ✅ Fetch stock data (price, industry, change)
//   const fetchStockData = async () => {
//     if (holdings.length === 0) return;
//     const results = {};
//     for (const h of holdings) {
//       try {
//         const res = await fetch(
//           `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
//         );
//         const data = await res.json();
//         if (data && data.ticker) {
//           results[h.symbol] = {
//             name: data.name || h.symbol,
//             industry: data.industry
//               ? data.industry
//                   .split(" ")
//                   .map(
//                     (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
//                   )
//                   .join(" ")
//               : "—",
//             currentPrice: data.closingPrice || 0,
//             changeValue: data.changeValue || 0,
//             changePercent: data.changePercent || "(0%)",
//           };
//         }
//       } catch (err) {
//         console.error(`Error fetching data for ${h.symbol}:`, err);
//       }
//     }
//     setStockData(results);
//   };

//   // ✅ Auto-refresh stock data every few minutes
//   useEffect(() => {
//     fetchStockData(); // initial fetch

//     // clear existing interval before creating a new one
//     if (refreshInterval.current) clearInterval(refreshInterval.current);
//     refreshInterval.current = setInterval(fetchStockData, REFRESH_TIME);

//     // handle tab visibility (pause/resume updates)
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         clearInterval(refreshInterval.current);
//       } else {
//         fetchStockData();
//         refreshInterval.current = setInterval(fetchStockData, REFRESH_TIME);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     // cleanup
//     return () => {
//       clearInterval(refreshInterval.current);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, [holdings]);

//   // ✅ Dashboard summary
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const currentPrice = stockData[h.symbol]?.currentPrice || 0;
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
//   }, [holdings, stockData]);

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
//       <HoldingsTable holdings={holdings} stockData={stockData} />
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
// import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// import DashboardCards from "./DashboardCards";
// import HoldingsTable from "./HoldingsTable";

// // ✅ Keep outside component so ESLint doesn’t complain
// const REFRESH_TIME = 3 * 60 * 1000; // 3 minutes

// const Home = () => {
//   const { currentUser } = useAuth();
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);
//   const [stockData, setStockData] = useState({});
//   const refreshInterval = useRef(null); // ✅ store interval ID for cleanup

//   // ------------------------------------------
//   // 🧮 Helper: Calculate Fees
//   // ------------------------------------------
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

//   // ------------------------------------------
//   // 📥 Fetch user transactions & portfolio
//   // ------------------------------------------
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

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   // ------------------------------------------
//   // 🧩 Filter transactions for selected portfolio
//   // ------------------------------------------
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // ------------------------------------------
//   // 📊 Compute Holdings
//   // ------------------------------------------
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

//   // ------------------------------------------
//   // 🌐 Fetch Stock Data (Prices, Industry, Changes)
//   // ------------------------------------------
//   const fetchStockData = useCallback(async () => {
//     if (holdings.length === 0) return;
//     const results = {};
//     for (const h of holdings) {
//       try {
//         const res = await fetch(
//           `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
//         );
//         const data = await res.json();
//         if (data && data.ticker) {
//           results[h.symbol] = {
//             name: data.name || h.symbol,
//             industry: data.industry
//               ? data.industry
//                   .split(" ")
//                   .map(
//                     (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
//                   )
//                   .join(" ")
//               : "—",
//             currentPrice: data.closingPrice || 0,
//             changeValue: data.changeValue || 0,
//             changePercent: data.changePercent || "(0%)",
//           };
//         }
//       } catch (err) {
//         console.error(`Error fetching data for ${h.symbol}:`, err);
//       }
//     }
//     setStockData(results);
//   }, [holdings]);

//   // ------------------------------------------
//   // ⏱️ Auto-refresh Stock Data Every Few Minutes
//   // ------------------------------------------
//   useEffect(() => {
//     fetchStockData(); // initial fetch

//     if (refreshInterval.current) clearInterval(refreshInterval.current);
//     refreshInterval.current = setInterval(fetchStockData, REFRESH_TIME);

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         clearInterval(refreshInterval.current);
//       } else {
//         fetchStockData();
//         refreshInterval.current = setInterval(fetchStockData, REFRESH_TIME);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       clearInterval(refreshInterval.current);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, [fetchStockData]);

//   // ------------------------------------------
//   // 💰 Dashboard Summary
//   // ------------------------------------------
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const currentPrice = stockData[h.symbol]?.currentPrice || 0;
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
//   }, [holdings, stockData]);

//   // ------------------------------------------
//   // 🌀 Loader
//   // ------------------------------------------
//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
//         <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );

//   // ------------------------------------------
//   // 🧭 Render
//   // ------------------------------------------
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
//       <HoldingsTable holdings={holdings} stockData={stockData} />
//     </div>
//   );
// };

// export default Home;

// import React, {
//   useEffect,
//   useState,
//   useMemo,
//   useRef,
//   useCallback,
// } from "react";
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
//   const [stockData, setStockData] = useState({});
//   const [lastUpdated, setLastUpdated] = useState(null);
//   const [fade, setFade] = useState(false); // ✅ for fade animation
//   const refreshInterval = useRef(null);
//   const REFRESH_TIME = 3 * 60 * 1000; // 3 minutes

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

//   // Fetch user data
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
//             JSON.stringify({
//               transactions: txs,
//               selectedPortfolio: portfolio,
//             })
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

//   // Filter transactions
//   const filteredTransactions = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   // Compute holdings
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

//   // ✅ Fetch stock data (price, industry, change)
//   const fetchStockData = useCallback(async () => {
//     if (holdings.length === 0) return;
//     const results = {};
//     for (const h of holdings) {
//       try {
//         const res = await fetch(
//           `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
//         );
//         const data = await res.json();
//         if (data && data.ticker) {
//           results[h.symbol] = {
//             name: data.name || h.symbol,
//             industry: data.industry
//               ? data.industry
//                   .split(" ")
//                   .map(
//                     (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
//                   )
//                   .join(" ")
//               : "—",
//             currentPrice: data.closingPrice || 0,
//             changeValue: data.changeValue || 0,
//             changePercent: data.changePercent || "(0%)",
//           };
//         }
//       } catch (err) {
//         console.error(`Error fetching data for ${h.symbol}:`, err);
//       }
//     }
//     setStockData(results);
//     setLastUpdated(new Date());

//     // ✅ Trigger fade animation
//     setFade(true);
//     setTimeout(() => setFade(false), 800);
//   }, [holdings]);

//   // ✅ Auto-refresh stock data every few minutes
//   useEffect(() => {
//     fetchStockData();

//     if (refreshInterval.current) clearInterval(refreshInterval.current);
//     refreshInterval.current = setInterval(fetchStockData, REFRESH_TIME);

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         clearInterval(refreshInterval.current);
//       } else {
//         fetchStockData();
//         refreshInterval.current = setInterval(fetchStockData, REFRESH_TIME);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       clearInterval(refreshInterval.current);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, [fetchStockData, REFRESH_TIME]);

//   // ✅ Dashboard summary
//   const summary = useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const currentPrice = stockData[h.symbol]?.currentPrice || 0;
//       const currentValue = h.quantity * currentPrice;
//       const gainLoss = currentValue - h.totalCost;
//       totalInvested += h.totalCost;
//       totalGainLoss += gainLoss;
//     });

//     const returnPercent = totalInvested
//       ? (totalGainLoss / totalInvested) * 100
//       : 0;

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
//   }, [holdings, stockData]);

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
//       <HoldingsTable holdings={holdings} stockData={stockData} />

//       {/* ✅ Animated last-updated timestamp */}
//       {lastUpdated && (
//         <p
//           className={`text-sm text-right mt-4 transition-opacity duration-700 ${
//             fade ? "opacity-100 text-indigo-600" : "opacity-60 text-gray-500"
//           }`}
//         >
//           Last Updated:{" "}
//           <span className="font-medium">
//             {lastUpdated.toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//               second: "2-digit",
//             })}
//           </span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useAuth } from "../../contexts/authContext";
import useTransactions from "./hooks/useTransactions";
import useHoldings from "./hooks/useHoldings";
import useStockData from "./hooks/useStockData";
import useSummary from "./hooks/useSummary";
import DashboardCards from "./DashboardCards";
import HoldingsTable from "./HoldingsTable";
import LastUpdated from "./LastUpdated";

const Home = () => {
  const { currentUser } = useAuth();
  const { transactions, selectedPortfolio, loading } = useTransactions(currentUser);
  const holdings = useHoldings(transactions, selectedPortfolio);
  const { stockData, lastUpdated } = useStockData(holdings);
  const summary = useSummary(holdings, stockData);

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
          {currentUser.displayName || currentUser.email}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Showing holdings for:{" "}
        <span className="font-semibold text-indigo-700">{selectedPortfolio}</span>
      </p>

      <DashboardCards summary={summary} />
      <HoldingsTable holdings={holdings} stockData={stockData} />
      <LastUpdated date={lastUpdated} />
    </div>
  );
};

export default Home;
