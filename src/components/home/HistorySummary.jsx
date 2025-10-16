// import React, { useMemo } from "react";

// const HistorySummary = ({ transactions = [], selectedPortfolio }) => {
//   // 🧮 Group transactions for the selected portfolio
//   const history = useMemo(() => {
//     const grouped = {};

//     transactions
//       .filter((tx) => tx.portfolio === selectedPortfolio)
//       .forEach((tx) => {
//         const { symbol, type, quantity, price } = tx;
//         const qty = parseFloat(quantity) || 0;
//         const p = parseFloat(price) || 0;
//         const t = (type || "").toLowerCase();

//         if (!grouped[symbol]) {
//           grouped[symbol] = {
//             buys: [],
//             sells: [],
//             dividends: [],
//             totalBuy: 0,
//             totalSell: 0,
//             totalDividend: 0,
//           };
//         }

//         if (t === "buy") {
//           grouped[symbol].buys.push({ qty, p });
//           grouped[symbol].totalBuy += qty * p;
//         } else if (t === "sell") {
//           grouped[symbol].sells.push({ qty, p });
//           grouped[symbol].totalSell += qty * p;
//         } else if (t === "dividend") {
//           grouped[symbol].dividends.push({ qty, p });
//           grouped[symbol].totalDividend += qty * p;
//         }
//       });

//     const summaries = [];
//     for (const [symbol, data] of Object.entries(grouped)) {
//       if (data.sells.length > 0) {
//         const totalBuy = data.totalBuy || 1;
//         const gain = data.totalSell - data.totalBuy;
//         const pct = (gain / totalBuy) * 100;
//         summaries.push({
//           symbol,
//           gain,
//           pct,
//           type: "sell",
//         });
//       }

//       if (data.totalDividend > 0) {
//         summaries.push({
//           symbol,
//           gain: data.totalDividend,
//           pct: null,
//           type: "dividend",
//         });
//       }
//     }

//     return summaries;
//   }, [transactions, selectedPortfolio]);

//   if (!history.length)
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );

//   return (
//     <div className="mt-10">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">
//         📜 Realized History for {selectedPortfolio}
//       </h2>
//       <div className="bg-white rounded-xl shadow p-5 space-y-3">
//         {history.map((item, idx) => {
//           const profitColor = item.gain >= 0 ? "text-green-600" : "text-red-600";
//           const actionText =
//             item.type === "sell"
//               ? item.gain >= 0
//                 ? "made a total profit"
//                 : "incurred a total loss"
//               : "received dividends worth";

//           return (
//             <div key={idx} className="text-gray-700">
//               <span className="font-semibold">{item.symbol}</span>:{" "}
//               You{" "}
//               <span className={`font-semibold ${profitColor}`}>
//                 {actionText} Rs. {Math.abs(item.gain).toLocaleString(undefined, {
//                   maximumFractionDigits: 0,
//                 })}
//               </span>
//               {item.pct !== null && (
//                 <>
//                   {" "}
//                   with an{" "}
//                   <span className={`font-semibold ${profitColor}`}>
//                     {item.pct >= 0 ? "+" : ""}
//                     {item.pct.toFixed(2)}%
//                   </span>{" "}
//                   {item.gain >= 0 ? "increase" : "decrease"}.
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HistorySummary;

// import React, { useMemo } from "react";

// const HistorySummary = ({ transactions = [], selectedPortfolio }) => {
//   const history = useMemo(() => {
//     const grouped = {};

//     transactions
//       .filter((tx) => tx.portfolio === selectedPortfolio)
//       .forEach((tx) => {
//         const { symbol, type, quantity, price, date } = tx;
//         const qty = parseFloat(quantity) || 0;
//         const p = parseFloat(price) || 0;
//         const t = (type || "").toLowerCase();

//         if (!grouped[symbol]) {
//           grouped[symbol] = {
//             buys: [],
//             sells: [],
//             dividends: [],
//             totalBuy: 0,
//             totalSell: 0,
//             totalDividend: 0,
//             lastDate: date,
//           };
//         }

//         grouped[symbol].lastDate = date;

//         if (t === "buy") {
//           grouped[symbol].buys.push({ qty, p, date });
//           grouped[symbol].totalBuy += qty * p;
//         } else if (t === "sell") {
//           grouped[symbol].sells.push({ qty, p, date });
//           grouped[symbol].totalSell += qty * p;
//         } else if (t === "dividend") {
//           grouped[symbol].dividends.push({ qty, p, date });
//           grouped[symbol].totalDividend += qty * p;
//         }
//       });

//     const summaries = [];
//     for (const [symbol, data] of Object.entries(grouped)) {
//       if (data.sells.length > 0) {
//         const totalBuy = data.totalBuy || 1;
//         const gain = data.totalSell - data.totalBuy;
//         const pct = (gain / totalBuy) * 100;
//         const lastDate = data.sells[data.sells.length - 1].date;
//         summaries.push({
//           symbol,
//           gain,
//           pct,
//           type: "sell",
//           date: lastDate,
//         });
//       }

//       if (data.totalDividend > 0) {
//         const lastDate = data.dividends[data.dividends.length - 1].date;
//         summaries.push({
//           symbol,
//           gain: data.totalDividend,
//           pct: null,
//           type: "dividend",
//           date: lastDate,
//         });
//       }
//     }

//     // Sort by latest date descending
//     return summaries.sort((a, b) => new Date(b.date) - new Date(a.date));
//   }, [transactions, selectedPortfolio]);

//   if (!history.length)
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );

//   return (
//     <div className="mt-10">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">
//         📜 Realized History for {selectedPortfolio}
//       </h2>
//       <div className="bg-white rounded-xl shadow p-5 space-y-3">
//         {history.map((item, idx) => {
//           const profitColor =
//             item.gain >= 0 ? "text-green-600" : "text-red-600";
//           const actionText =
//             item.type === "sell"
//               ? item.gain >= 0
//                 ? "made a total profit of"
//                 : "incurred a total loss of"
//               : "received dividends worth";

//           const dateStr = new Date(item.date).toLocaleDateString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           });

//           return (
//             <div key={idx} className="text-gray-700">
//               <span className="font-semibold">{item.symbol}</span> —{" "}
//               <span className="text-sm text-gray-500">({dateStr})</span>: You{" "}
//               {actionText}{" "}
//               <span className={`font-semibold ${profitColor}`}>
//                 Rs. {Math.abs(item.gain).toLocaleString(undefined, {
//                   maximumFractionDigits: 0,
//                 })}
//               </span>
//               {item.pct !== null && (
//                 <>
//                   {" "}
//                   with an{" "}
//                   <span className={`font-semibold ${profitColor}`}>
//                     {item.pct >= 0 ? "+" : ""}
//                     {item.pct.toFixed(2)}%
//                   </span>{" "}
//                   {item.gain >= 0 ? "increase" : "decrease"}.
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HistorySummary;

// import React, { useMemo, useState } from "react";
// import {
//   ChevronDown,
//   ChevronRight,
//   TrendingUp,
//   TrendingDown,
//   Coins,
// } from "lucide-react";

// const HistorySummary = ({ transactions = [], selectedPortfolio }) => {
//   const [expandedMonths, setExpandedMonths] = useState({});

//   const { history, totalAllTime } = useMemo(() => {
//     const grouped = {};
//     let totalGain = 0;
//     let totalDividends = 0;

//     // --- Group transactions by symbol
//     transactions
//       .filter((tx) => tx.portfolio === selectedPortfolio)
//       .forEach((tx) => {
//         const { symbol, type, quantity, price, date } = tx;
//         const qty = parseFloat(quantity) || 0;
//         const p = parseFloat(price) || 0;
//         const t = (type || "").toLowerCase();
//         const monthKey = new Date(date).toLocaleString("default", {
//           month: "short",
//           year: "numeric",
//         });

//         if (!grouped[monthKey]) grouped[monthKey] = {};
//         if (!grouped[monthKey][symbol]) {
//           grouped[monthKey][symbol] = {
//             buys: [],
//             sells: [],
//             dividends: [],
//             totalBuy: 0,
//             totalSell: 0,
//             totalDividend: 0,
//             lastDate: date,
//           };
//         }

//         const sym = grouped[monthKey][symbol];
//         sym.lastDate = date;

//         if (t === "buy") {
//           sym.buys.push({ qty, p, date });
//           sym.totalBuy += qty * p;
//         } else if (t === "sell") {
//           sym.sells.push({ qty, p, date });
//           sym.totalSell += qty * p;
//         } else if (t === "dividend") {
//           sym.dividends.push({ qty, p, date });
//           sym.totalDividend += qty * p;
//         }
//       });

//     // --- Compute summaries per month
//     const monthlySummaries = Object.entries(grouped).map(([month, symbols]) => {
//       const entries = [];
//       let monthGain = 0;
//       let monthDiv = 0;

//       for (const [symbol, data] of Object.entries(symbols)) {
//         if (data.sells.length > 0) {
//           const totalBuy = data.totalBuy || 1;
//           const gain = data.totalSell - data.totalBuy;
//           const pct = (gain / totalBuy) * 100;
//           const lastDate = data.sells[data.sells.length - 1].date;
//           monthGain += gain;
//           entries.push({
//             symbol,
//             gain,
//             pct,
//             type: "sell",
//             date: lastDate,
//           });
//         }

//         if (data.totalDividend > 0) {
//           const lastDate = data.dividends[data.dividends.length - 1].date;
//           monthDiv += data.totalDividend;
//           entries.push({
//             symbol,
//             gain: data.totalDividend,
//             pct: null,
//             type: "dividend",
//             date: lastDate,
//           });
//         }
//       }

//       totalGain += monthGain;
//       totalDividends += monthDiv;

//       return {
//         month,
//         entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date)),
//         monthGain,
//         monthDiv,
//       };
//     });

//     return {
//       history: monthlySummaries.sort(
//         (a, b) =>
//           new Date(b.entries[0]?.date || 0) - new Date(a.entries[0]?.date || 0)
//       ),
//       totalAllTime: { totalGain, totalDividends },
//     };
//   }, [transactions, selectedPortfolio]);

//   const toggleMonth = (month) =>
//     setExpandedMonths((prev) => ({ ...prev, [month]: !prev[month] }));

//   if (!history.length)
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );

//   return (
//     <div className="mt-10">
//       {/* --- Header Summary --- */}
//       <h2 className="text-xl font-semibold mb-2 text-gray-800">
//         📜 Realized History for {selectedPortfolio}
//       </h2>
//       <div className="mb-6 p-4 bg-indigo-50 rounded-xl flex flex-col sm:flex-row justify-between items-center shadow">
//         <div className="text-lg font-medium text-gray-700">
//           <Coins className="inline w-5 h-5 text-indigo-600 mr-1" />
//           All-Time Realized Gain/Loss:
//           <span
//             className={`ml-2 font-semibold ${
//               totalAllTime.totalGain >= 0 ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             Rs. {Math.abs(totalAllTime.totalGain).toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </span>
//         </div>
//         <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-0">
//           💰 Total Dividends:
//           <span className="ml-2 font-semibold text-amber-600">
//             Rs. {Math.abs(totalAllTime.totalDividends).toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </span>
//         </div>
//       </div>

//       {/* --- Monthly Blocks --- */}
//       {history.map(({ month, entries, monthGain, monthDiv }) => {
//         const isExpanded = expandedMonths[month];
//         const totalMonth =
//           (monthGain >= 0 ? "+" : "") +
//           monthGain.toLocaleString(undefined, { maximumFractionDigits: 0 });
//         return (
//           <div key={month} className="mb-4 bg-white rounded-xl shadow overflow-hidden">
//             {/* Header Row */}
//             <button
//               onClick={() => toggleMonth(month)}
//               className="w-full flex justify-between items-center px-5 py-3 bg-indigo-100 hover:bg-indigo-200 transition"
//             >
//               <div className="flex items-center gap-2 text-gray-800 font-semibold">
//                 {isExpanded ? (
//                   <ChevronDown className="w-5 h-5 text-indigo-600" />
//                 ) : (
//                   <ChevronRight className="w-5 h-5 text-indigo-600" />
//                 )}
//                 {month}
//               </div>
//               <div className="text-sm text-gray-600">
//                 📊 Total Realized:{" "}
//                 <span
//                   className={`font-semibold ${
//                     monthGain >= 0 ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   Rs. {totalMonth}
//                 </span>{" "}
//                 | 💰 Dividends:{" "}
//                 <span className="font-semibold text-amber-600">
//                   Rs. {monthDiv.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//                 </span>
//               </div>
//             </button>

//             {/* Expandable Section */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 isExpanded ? "max-h-[1000px] p-5" : "max-h-0"
//               }`}
//             >
//               {entries.map((item, idx) => {
//                 const profitColor =
//                   item.gain >= 0 ? "text-green-600" : "text-red-600";
//                 const Icon =
//                   item.type === "sell"
//                     ? item.gain >= 0
//                       ? TrendingUp
//                       : TrendingDown
//                     : Coins;

//                 const actionText =
//                   item.type === "sell"
//                     ? item.gain >= 0
//                       ? "made a profit of"
//                       : "incurred a loss of"
//                     : "received dividends worth";

//                 const dateStr = new Date(item.date).toLocaleDateString(
//                   "en-GB",
//                   { day: "2-digit", month: "short", year: "numeric" }
//                 );

//                 return (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-2 text-gray-700 py-1 border-b border-gray-100 last:border-none"
//                   >
//                     <Icon className={`${profitColor} w-4 h-4`} />
//                     <div>
//                       <span className="font-semibold">{item.symbol}</span>{" "}
//                       <span className="text-sm text-gray-500">({dateStr})</span>{" "}
//                       — You {actionText}{" "}
//                       <span className={`font-semibold ${profitColor}`}>
//                         Rs.{" "}
//                         {Math.abs(item.gain).toLocaleString(undefined, {
//                           maximumFractionDigits: 0,
//                         })}
//                       </span>
//                       {item.pct !== null && (
//                         <>
//                           {" "}
//                           with an{" "}
//                           <span className={`font-semibold ${profitColor}`}>
//                             {item.pct >= 0 ? "+" : ""}
//                             {item.pct.toFixed(2)}%
//                           </span>{" "}
//                           {item.gain >= 0 ? "increase" : "decrease"}.
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HistorySummary;


// import React, { useMemo, useState } from "react";
// import {
//   ChevronDown,
//   ChevronRight,
//   TrendingUp,
//   TrendingDown,
//   Coins,
//   FileText,
//   BarChart3,
//   Wallet,
// } from "lucide-react";

// const HistorySummary = ({ transactions = [], selectedPortfolio }) => {
//   const [expandedMonths, setExpandedMonths] = useState({});

//   const { history, totalAllTime } = useMemo(() => {
//     const grouped = {};
//     let totalGain = 0;
//     let totalDividends = 0;

//     transactions
//       .filter((tx) => tx.portfolio === selectedPortfolio)
//       .forEach((tx) => {
//         const { symbol, type, quantity, price, date } = tx;
//         const qty = parseFloat(quantity) || 0;
//         const p = parseFloat(price) || 0;
//         const t = (type || "").toLowerCase();
//         const monthKey = new Date(date).toLocaleString("default", {
//           month: "short",
//           year: "numeric",
//         });

//         if (!grouped[monthKey]) grouped[monthKey] = {};
//         if (!grouped[monthKey][symbol]) {
//           grouped[monthKey][symbol] = {
//             buys: [],
//             sells: [],
//             dividends: [],
//             totalBuy: 0,
//             totalSell: 0,
//             totalDividend: 0,
//             lastDate: date,
//           };
//         }

//         const sym = grouped[monthKey][symbol];
//         sym.lastDate = date;

//         if (t === "buy") {
//           sym.buys.push({ qty, p, date });
//           sym.totalBuy += qty * p;
//         } else if (t === "sell") {
//           sym.sells.push({ qty, p, date });
//           sym.totalSell += qty * p;
//         } else if (t === "dividend") {
//           sym.dividends.push({ qty, p, date });
//           sym.totalDividend += qty * p;
//         }
//       });

//     // --- Monthly summaries
//     const monthlySummaries = Object.entries(grouped).map(([month, symbols]) => {
//       const entries = [];
//       let monthGain = 0;
//       let monthDiv = 0;

//       for (const [symbol, data] of Object.entries(symbols)) {
//         if (data.sells.length > 0) {
//           const totalBuy = data.totalBuy || 1;
//           const gain = data.totalSell - data.totalBuy;
//           const pct = (gain / totalBuy) * 100;
//           const lastDate = data.sells[data.sells.length - 1].date;
//           monthGain += gain;
//           entries.push({
//             symbol,
//             gain,
//             pct,
//             type: "sell",
//             date: lastDate,
//           });
//         }

//         if (data.totalDividend > 0) {
//           const lastDate = data.dividends[data.dividends.length - 1].date;
//           monthDiv += data.totalDividend;
//           entries.push({
//             symbol,
//             gain: data.totalDividend,
//             pct: null,
//             type: "dividend",
//             date: lastDate,
//           });
//         }
//       }

//       totalGain += monthGain;
//       totalDividends += monthDiv;

//       return {
//         month,
//         entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date)),
//         monthGain,
//         monthDiv,
//       };
//     });

//     return {
//       history: monthlySummaries.sort(
//         (a, b) =>
//           new Date(b.entries[0]?.date || 0) - new Date(a.entries[0]?.date || 0)
//       ),
//       totalAllTime: { totalGain, totalDividends },
//     };
//   }, [transactions, selectedPortfolio]);

//   const toggleMonth = (month) =>
//     setExpandedMonths((prev) => ({ ...prev, [month]: !prev[month] }));

//   if (!history.length)
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );

//   return (
//     <div className="mt-10">
//       {/* --- Header Summary --- */}
//       <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
//         <FileText className="w-5 h-5 text-indigo-600" />
//         Realized History for {selectedPortfolio}
//       </h2>

//       <div className="mb-6 p-4 bg-indigo-50 rounded-xl flex flex-col sm:flex-row justify-between items-center shadow">
//         <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
//           <Wallet className="w-5 h-5 text-green-600" />
//           All-Time Realized Gain/Loss:
//           <span
//             className={`ml-2 font-semibold ${
//               totalAllTime.totalGain >= 0 ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             Rs.{" "}
//             {Math.abs(totalAllTime.totalGain).toLocaleString(undefined, {
//               maximumFractionDigits: 0,
//             })}
//           </span>
//         </div>
//         <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-0 flex items-center gap-2">
//           <Coins className="w-5 h-5 text-amber-600" />
//           Total Dividends:
//           <span className="ml-1 font-semibold text-amber-600">
//             Rs.{" "}
//             {Math.abs(totalAllTime.totalDividends).toLocaleString(undefined, {
//               maximumFractionDigits: 0,
//             })}
//           </span>
//         </div>
//       </div>

//       {/* --- Monthly Blocks --- */}
//       {history.map(({ month, entries, monthGain, monthDiv }) => {
//         const isExpanded = expandedMonths[month];
//         const totalMonth =
//           (monthGain >= 0 ? "+" : "") +
//           monthGain.toLocaleString(undefined, { maximumFractionDigits: 0 });

//         return (
//           <div key={month} className="mb-4 bg-white rounded-xl shadow overflow-hidden">
//             {/* Header Row */}
//             <button
//               onClick={() => toggleMonth(month)}
//               className="w-full flex justify-between items-center px-5 py-3 bg-indigo-100 hover:bg-indigo-200 transition"
//             >
//               <div className="flex items-center gap-2 text-gray-800 font-semibold">
//                 {isExpanded ? (
//                   <ChevronDown className="w-5 h-5 text-indigo-600" />
//                 ) : (
//                   <ChevronRight className="w-5 h-5 text-indigo-600" />
//                 )}
//                 {month}
//               </div>
//               <div className="text-sm text-gray-600 flex items-center gap-2">
//                 <BarChart3 className="w-4 h-4 text-indigo-500" />
//                 Total Realized:
//                 <span
//                   className={`font-semibold ${
//                     monthGain >= 0 ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   Rs. {totalMonth}
//                 </span>
//                 <Coins className="w-4 h-4 text-amber-500 ml-2" />
//                 Dividends:
//                 <span className="font-semibold text-amber-600">
//                   Rs.{" "}
//                   {monthDiv.toLocaleString(undefined, {
//                     maximumFractionDigits: 0,
//                   })}
//                 </span>
//               </div>
//             </button>

//             {/* Expandable Section */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 isExpanded ? "max-h-[1000px] p-5" : "max-h-0"
//               }`}
//             >
//               {entries.map((item, idx) => {
//                 const profitColor =
//                   item.gain >= 0 ? "text-green-600" : "text-red-600";
//                 const Icon =
//                   item.type === "sell"
//                     ? item.gain >= 0
//                       ? TrendingUp
//                       : TrendingDown
//                     : Coins;

//                 const actionText =
//                   item.type === "sell"
//                     ? item.gain >= 0
//                       ? "made a profit of"
//                       : "incurred a loss of"
//                     : "received dividends worth";

//                 const dateStr = new Date(item.date).toLocaleDateString(
//                   "en-GB",
//                   { day: "2-digit", month: "short", year: "numeric" }
//                 );

//                 return (
//                   <div
//                     key={idx}
//                     className="flex items-start gap-2 text-gray-700 py-2 border-b border-gray-100 last:border-none"
//                   >
//                     <Icon className={`${profitColor} w-4 h-4 mt-1`} />
//                     <div>
//                       <span className="font-semibold">{item.symbol}</span>{" "}
//                       <span className="text-sm text-gray-500">({dateStr})</span>{" "}
//                       — You {actionText}{" "}
//                       <span className={`font-semibold ${profitColor}`}>
//                         Rs.{" "}
//                         {Math.abs(item.gain).toLocaleString(undefined, {
//                           maximumFractionDigits: 0,
//                         })}
//                       </span>
//                       {item.pct !== null && (
//                         <>
//                           {" "}
//                           with an{" "}
//                           <span className={`font-semibold ${profitColor}`}>
//                             {item.pct >= 0 ? "+" : ""}
//                             {item.pct.toFixed(2)}%
//                           </span>{" "}
//                           {item.gain >= 0 ? "increase" : "decrease"}.
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HistorySummary;

// import React, { useMemo, useState, useEffect } from "react";
// import {
//   ChevronDown,
//   ChevronRight,
//   TrendingUp,
//   TrendingDown,
//   Coins,
//   FileText,
//   BarChart3,
//   Wallet,
// } from "lucide-react";

// const HistorySummary = ({
//   transactions = [],
//   selectedPortfolio,
//   onTotalsComputed, // 🟢 NEW callback
// }) => {
//   const [expandedMonths, setExpandedMonths] = useState({});

//   const { history, totalAllTime } = useMemo(() => {
//     const grouped = {};
//     let totalGain = 0;
//     let totalDividends = 0;

//     transactions
//       .filter((tx) => tx.portfolio === selectedPortfolio)
//       .forEach((tx) => {
//         const { symbol, type, quantity, price, date } = tx;
//         const qty = parseFloat(quantity) || 0;
//         const p = parseFloat(price) || 0;
//         const t = (type || "").toLowerCase();
//         const monthKey = new Date(date).toLocaleString("default", {
//           month: "short",
//           year: "numeric",
//         });

//         if (!grouped[monthKey]) grouped[monthKey] = {};
//         if (!grouped[monthKey][symbol]) {
//           grouped[monthKey][symbol] = {
//             buys: [],
//             sells: [],
//             dividends: [],
//             totalBuy: 0,
//             totalSell: 0,
//             totalDividend: 0,
//             lastDate: date,
//           };
//         }

//         const sym = grouped[monthKey][symbol];
//         sym.lastDate = date;

//         if (t === "buy") {
//           sym.buys.push({ qty, p, date });
//           sym.totalBuy += qty * p;
//         } else if (t === "sell") {
//           sym.sells.push({ qty, p, date });
//           sym.totalSell += qty * p;
//         } else if (t === "dividend") {
//           sym.dividends.push({ qty, p, date });
//           sym.totalDividend += qty * p;
//         }
//       });

//     const monthlySummaries = Object.entries(grouped).map(([month, symbols]) => {
//       const entries = [];
//       let monthGain = 0;
//       let monthDiv = 0;

//       for (const [symbol, data] of Object.entries(symbols)) {
//         if (data.sells.length > 0) {
//           const gain = data.totalSell - data.totalBuy;
//           const totalBuy = data.totalBuy || 1;
//           const pct = totalBuy > 0 ? (gain / totalBuy) * 100 : 0;
//           const lastDate = data.sells[data.sells.length - 1].date;
//           monthGain += gain;
//           entries.push({
//             symbol,
//             gain,
//             pct,
//             type: "sell",
//             date: lastDate,
//           });
//         }

//         if (data.totalDividend > 0) {
//           const lastDate = data.dividends[data.dividends.length - 1].date;
//           monthDiv += data.totalDividend;
//           entries.push({
//             symbol,
//             gain: data.totalDividend,
//             pct: null,
//             type: "dividend",
//             date: lastDate,
//           });
//         }
//       }

//       totalGain += monthGain;
//       totalDividends += monthDiv;

//       return {
//         month,
//         entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date)),
//         monthGain,
//         monthDiv,
//       };
//     });

//     return {
//       history: monthlySummaries.sort(
//         (a, b) => new Date(b.entries[0]?.date || 0) - new Date(a.entries[0]?.date || 0)
//       ),
//       totalAllTime: { totalGain, totalDividends },
//     };
//   }, [transactions, selectedPortfolio]);

//   // 🟢 Emit totals upward whenever they change
//   useEffect(() => {
//     if (onTotalsComputed) onTotalsComputed(totalAllTime);
//   }, [totalAllTime, onTotalsComputed]);

//   const toggleMonth = (month) =>
//     setExpandedMonths((prev) => ({ ...prev, [month]: !prev[month] }));

//   if (!history.length)
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );

//   return (
//     <div className="mt-10">
//       {/* Header Summary */}
//       <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
//         <FileText className="w-5 h-5 text-indigo-600" />
//         Realized History for {selectedPortfolio}
//       </h2>

//       <div className="mb-6 p-4 bg-indigo-50 rounded-xl flex flex-col sm:flex-row justify-between items-center shadow">
//         <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
//           <Wallet className="w-5 h-5 text-green-600" />
//           All-Time Realized Gain/Loss:
//           <span
//             className={`ml-2 font-semibold ${
//               totalAllTime.totalGain >= 0 ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             Rs.{" "}
//             {Math.abs(totalAllTime.totalGain).toLocaleString(undefined, {
//               maximumFractionDigits: 0,
//             })}
//           </span>
//         </div>
//         <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-0 flex items-center gap-2">
//           <Coins className="w-5 h-5 text-amber-600" />
//           Total Dividends:
//           <span className="ml-1 font-semibold text-amber-600">
//             Rs.{" "}
//             {Math.abs(totalAllTime.totalDividends).toLocaleString(undefined, {
//               maximumFractionDigits: 0,
//             })}
//           </span>
//         </div>
//       </div>

//       {/* Monthly Blocks */}
//       {history.map(({ month, entries, monthGain, monthDiv }) => {
//         const isExpanded = expandedMonths[month];
//         const totalMonth =
//           (monthGain >= 0 ? "+" : "") +
//           monthGain.toLocaleString(undefined, { maximumFractionDigits: 0 });

//         return (
//           <div key={month} className="mb-4 bg-white rounded-xl shadow overflow-hidden">
//             {/* Header Row */}
//             <button
//               onClick={() => toggleMonth(month)}
//               className="w-full flex justify-between items-center px-5 py-3 bg-indigo-100 hover:bg-indigo-200 transition"
//             >
//               <div className="flex items-center gap-2 text-gray-800 font-semibold">
//                 {isExpanded ? (
//                   <ChevronDown className="w-5 h-5 text-indigo-600" />
//                 ) : (
//                   <ChevronRight className="w-5 h-5 text-indigo-600" />
//                 )}
//                 {month}
//               </div>
//               <div className="text-sm text-gray-600 flex items-center gap-2">
//                 <BarChart3 className="w-4 h-4 text-indigo-500" />
//                 Total Realized:
//                 <span
//                   className={`font-semibold ${
//                     monthGain >= 0 ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   Rs. {totalMonth}
//                 </span>
//                 <Coins className="w-4 h-4 text-amber-500 ml-2" />
//                 Dividends:
//                 <span className="font-semibold text-amber-600">
//                   Rs.{" "}
//                   {monthDiv.toLocaleString(undefined, {
//                     maximumFractionDigits: 0,
//                   })}
//                 </span>
//               </div>
//             </button>

//             {/* Expandable Section */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 isExpanded ? "max-h-[1000px] p-5" : "max-h-0"
//               }`}
//             >
//               {entries.map((item, idx) => {
//                 const profitColor =
//                   item.gain >= 0 ? "text-green-600" : "text-red-600";
//                 const Icon =
//                   item.type === "sell"
//                     ? item.gain >= 0
//                       ? TrendingUp
//                       : TrendingDown
//                     : Coins;

//                 const actionText =
//                   item.type === "sell"
//                     ? item.gain >= 0
//                       ? "made a profit of"
//                       : "incurred a loss of"
//                     : "received dividends worth";

//                 const dateStr = new Date(item.date).toLocaleDateString(
//                   "en-GB",
//                   { day: "2-digit", month: "short", year: "numeric" }
//                 );

//                 return (
//                   <div
//                     key={idx}
//                     className="flex items-start gap-2 text-gray-700 py-2 border-b border-gray-100 last:border-none"
//                   >
//                     <Icon className={`${profitColor} w-4 h-4 mt-1`} />
//                     <div>
//                       <span className="font-semibold">{item.symbol}</span>{" "}
//                       <span className="text-sm text-gray-500">({dateStr})</span>{" "}
//                       — You {actionText}{" "}
//                       <span className={`font-semibold ${profitColor}`}>
//                         Rs.{" "}
//                         {Math.abs(item.gain).toLocaleString(undefined, {
//                           maximumFractionDigits: 0,
//                         })}
//                       </span>
//                       {item.pct !== null && (
//                         <>
//                           {" "}
//                           with an{" "}
//                           <span className={`font-semibold ${profitColor}`}>
//                             {item.pct >= 0 ? "+" : ""}
//                             {item.pct.toFixed(2)}%
//                           </span>{" "}
//                           {item.gain >= 0 ? "increase" : "decrease"}.
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HistorySummary;

import React, { useMemo, useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Coins,
  FileText,
  BarChart3,
  Wallet,
} from "lucide-react";

const HistorySummary = ({
  transactions = [],
  selectedPortfolio,
  onTotalsComputed, // callback to pass totals upward
}) => {
  const [expandedMonths, setExpandedMonths] = useState({});

  const { history, totals } = useMemo(() => {
    const grouped = {};
    let totalGain = 0;
    let totalDividends = 0;
    let totalInvested = 0;

    transactions
      .filter((tx) => tx.portfolio === selectedPortfolio)
      .forEach((tx) => {
        const { symbol, type, quantity, price, date } = tx;
        const qty = parseFloat(quantity) || 0;
        const p = parseFloat(price) || 0;
        const t = (type || "").toLowerCase();

        const monthKey = new Date(date).toLocaleString("default", {
          month: "short",
          year: "numeric",
        });

        if (!grouped[monthKey]) grouped[monthKey] = {};
        if (!grouped[monthKey][symbol]) {
          grouped[monthKey][symbol] = {
            buys: [],
            sells: [],
            dividends: [],
            totalBuy: 0,
            totalSell: 0,
            totalDividend: 0,
            lastDate: date,
          };
        }

        const sym = grouped[monthKey][symbol];
        sym.lastDate = date;

        if (t === "buy") {
          sym.buys.push({ qty, p, date });
          sym.totalBuy += qty * p;
          totalInvested += qty * p;
        } else if (t === "sell") {
          sym.sells.push({ qty, p, date });
          sym.totalSell += qty * p;
        } else if (t === "dividend") {
          sym.dividends.push({ qty, p, date });
          sym.totalDividend += qty * p;
          totalDividends += qty * p;
        }
      });

    const monthlySummaries = Object.entries(grouped).map(([month, symbols]) => {
      const entries = [];
      let monthGain = 0;
      let monthDiv = 0;

      for (const [symbol, data] of Object.entries(symbols)) {
        if (data.sells.length > 0) {
          const gain = data.totalSell - data.totalBuy;
          const pct = data.totalBuy > 0 ? (gain / data.totalBuy) * 100 : 0;
          const lastDate = data.sells[data.sells.length - 1].date;
          monthGain += gain;
          entries.push({
            symbol,
            gain,
            pct,
            type: "sell",
            date: lastDate,
          });
        }

        if (data.totalDividend > 0) {
          const lastDate = data.dividends[data.dividends.length - 1].date;
          monthDiv += data.totalDividend;
          entries.push({
            symbol,
            gain: data.totalDividend,
            pct: null,
            type: "dividend",
            date: lastDate,
          });
        }
      }

      totalGain += monthGain;

      return {
        month,
        entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date)),
        monthGain,
        monthDiv,
      };
    });

    // Compute realized return % based on totalInvested
    const realizedReturn = totalInvested > 0 ? (totalGain / totalInvested) * 100 : 0;

    return {
      history: monthlySummaries.sort(
        (a, b) => new Date(b.entries[0]?.date || 0) - new Date(a.entries[0]?.date || 0)
      ),
      totals: {
        realizedGain: totalGain,
        realizedReturn,
        totalDividends,
      },
    };
  }, [transactions, selectedPortfolio]);

  // Emit totals upward whenever they change
  useEffect(() => {
    if (onTotalsComputed) onTotalsComputed(totals);
  }, [totals, onTotalsComputed]);

  const toggleMonth = (month) =>
    setExpandedMonths((prev) => ({ ...prev, [month]: !prev[month] }));

  if (!history.length)
    return (
      <div className="mt-10 text-gray-500 text-center italic">
        No realized history yet for this portfolio.
      </div>
    );

  return (
    <div className="mt-10">
      {/* Header Summary */}
      <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
        <FileText className="w-5 h-5 text-indigo-600" />
        History
      </h2>

      <div className="mb-6 p-4 bg-white rounded-xl flex flex-col sm:flex-row justify-between items-center shadow">
        <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
          <Wallet className="w-5 h-5 text-green-600" />
          All-Time Realized Gain/Loss:
          <span
            className={`ml-2 font-semibold ${
              totals.realizedGain >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            Rs. {Math.abs(totals.realizedGain).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
        <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-0 flex items-center gap-2">
          <Coins className="w-5 h-5 text-amber-600" />
          Total Dividends:
          <span className="ml-1 font-semibold text-amber-600">
            Rs. {totals.totalDividends.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
      </div>

      {/* Monthly Blocks */}
      {history.map(({ month, entries, monthGain, monthDiv }) => {
        const isExpanded = expandedMonths[month];
        const totalMonth =
          (monthGain >= 0 ? "+" : "") + monthGain.toLocaleString(undefined, { maximumFractionDigits: 0 });

        return (
          <div key={month} className="mb-4 bg-white rounded-xl shadow overflow-hidden">
            <button
              onClick={() => toggleMonth(month)}
              className="w-full flex justify-between items-center px-5 py-3 bg-indigo-100 hover:bg-indigo-200 transition"
            >
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                {isExpanded ? <ChevronDown className="w-5 h-5 text-indigo-600" /> : <ChevronRight className="w-5 h-5 text-indigo-600" />}
                {month}
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-500" />
                Total Realized:
                <span className={`font-semibold ${monthGain >= 0 ? "text-green-600" : "text-red-600"}`}>
                  Rs. {totalMonth}
                </span>
                <Coins className="w-4 h-4 text-amber-500 ml-2" />
                Dividends:
                <span className="font-semibold text-amber-600">
                  Rs. {monthDiv.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            </button>

            {/* Expandable Section */}
            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? "max-h-[1000px] p-5" : "max-h-0"}`}>
              {entries.map((item, idx) => {
                const profitColor = item.gain >= 0 ? "text-green-600" : "text-red-600";
                const Icon = item.type === "sell" ? (item.gain >= 0 ? TrendingUp : TrendingDown) : Coins;
                const actionText = item.type === "sell" ? (item.gain >= 0 ? "made a profit of" : "incurred a loss of") : "received dividend income worth";
                const dateStr = new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

                return (
                  <div key={idx} className="flex items-start gap-2 text-gray-700 py-2 border-b border-gray-100 last:border-none">
                    <Icon className={`${profitColor} w-4 h-4 mt-1`} />
                    <div>
                      <span className="font-semibold">{item.symbol}</span>{" "}
                      <span className="text-sm text-gray-500">({dateStr})</span>{" "}
                      — You {actionText}{" "}
                      <span className={`font-semibold ${profitColor}`}>
                        Rs. {Math.abs(item.gain).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </span>
                      {item.pct !== null && (
                        <>
                          {" "}with{" "}
                          <span className={`font-semibold ${profitColor}`}>
                            {item.pct >= 0 ? "+" : ""}{item.pct.toFixed(2)}%
                          </span>{" "}
                          {item.gain >= 0 ? "increase" : "decrease"}.
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistorySummary;
