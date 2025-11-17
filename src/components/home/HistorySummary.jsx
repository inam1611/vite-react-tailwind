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
//   onTotalsComputed, // callback to pass totals upward
// }) => {
//   const [expandedMonths, setExpandedMonths] = useState({});

//   const { history, totals } = useMemo(() => {
//     const grouped = {};
//     let totalGain = 0;
//     let totalDividends = 0;
//     let totalInvested = 0;

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
//           totalInvested += qty * p;
//         } else if (t === "sell") {
//           sym.sells.push({ qty, p, date });
//           sym.totalSell += qty * p;
//         } else if (t === "dividend") {
//           sym.dividends.push({ qty, p, date });
//           sym.totalDividend += qty * p;
//           totalDividends += qty * p;
//         }
//       });

//     const monthlySummaries = Object.entries(grouped).map(([month, symbols]) => {
//       const entries = [];
//       let monthGain = 0;
//       let monthDiv = 0;

//       for (const [symbol, data] of Object.entries(symbols)) {
//         if (data.sells.length > 0) {
//           const gain = data.totalSell - data.totalBuy;
//           const pct = data.totalBuy > 0 ? (gain / data.totalBuy) * 100 : 0;
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

//       return {
//         month,
//         entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date)),
//         monthGain,
//         monthDiv,
//       };
//     });

//     // Compute realized return % based on totalInvested
//     const realizedReturn =
//       totalInvested > 0 ? (totalGain / totalInvested) * 100 : 0;

//     return {
//       history: monthlySummaries.sort(
//         (a, b) =>
//           new Date(b.entries[0]?.date || 0) - new Date(a.entries[0]?.date || 0)
//       ),
//       totals: {
//         realizedGain: totalGain,
//         realizedReturn,
//         totalDividends,
//       },
//     };
//   }, [transactions, selectedPortfolio]);

//   // Emit totals upward whenever they change
//   useEffect(() => {
//     if (onTotalsComputed) onTotalsComputed(totals);
//   }, [totals, onTotalsComputed]);

//   const toggleMonth = (month) =>
//     setExpandedMonths((prev) => ({ ...prev, [month]: !prev[month] }));

//   if (!history.length)
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );

//   return (
//     // <div className="mt-10">
//     <div className="mt-10 bg-white rounded-xl shadow p-6">
//       {/* Header Summary */}
//       <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
//         <FileText className="w-5 h-5 text-indigo-600" />
//         History
//       </h2>

//       <div className="mb-6 p-4 bg-white rounded-xl flex flex-col sm:flex-row justify-between items-center shadow border-t border-indigo-300">
//         <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
//           <Wallet className="w-5 h-5 text-green-600" />
//           All-Time Realized Gain/Loss:
//           <span
//             className={`ml-2 font-semibold ${
//               totals.realizedGain >= 0 ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             Rs.{" "}
//             {Math.abs(totals.realizedGain).toLocaleString(undefined, {
//               maximumFractionDigits: 0,
//             })}
//           </span>
//         </div>

//         <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-0 flex items-center gap-2">
//           <Coins className="w-5 h-5 text-amber-600" />
//           Total Dividends:
//           <span className="ml-1 font-semibold text-amber-600">
//             Rs.{" "}
//             {totals.totalDividends.toLocaleString(undefined, {
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
//           <div
//             key={month}
//             className="mb-4 bg-white rounded-xl shadow overflow-hidden"
//           >
//             <button
//               onClick={() => toggleMonth(month)}
//               className="w-full flex justify-between items-center px-5 py-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition rounded-t-xl"
//             >
//               <div className="flex items-center gap-2 font-semibold">
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
//                     : "received dividend income worth";
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
//                           with{" "}
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
//   onTotalsComputed, // callback to pass totals upward
// }) => {
//   const [expandedMonths, setExpandedMonths] = useState({});

//   const { history, totals } = useMemo(() => {
//     const grouped = {};
//     let totalGain = 0;
//     let totalDividends = 0;
//     let totalInvested = 0;

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
//           totalInvested += qty * p;
//         } else if (t === "sell") {
//           sym.sells.push({ qty, p, date });
//           sym.totalSell += qty * p;
//         } else if (t === "dividend") {
//           sym.dividends.push({ qty, p, date });
//           sym.totalDividend += qty * p;
//           totalDividends += qty * p;
//         }
//       });

//     // Only include months with actual activity
//     const monthlySummaries = Object.entries(grouped)
//       .map(([month, symbols]) => {
//         const entries = [];
//         let monthGain = 0;
//         let monthDiv = 0;

//         for (const [symbol, data] of Object.entries(symbols)) {
//           // Add sell entries with non-zero gain
//           if (data.sells.length > 0) {
//             const gain = data.totalSell - data.totalBuy;
//             if (gain !== 0) {
//               const pct = data.totalBuy > 0 ? (gain / data.totalBuy) * 100 : 0;
//               const lastDate = data.sells[data.sells.length - 1].date;
//               monthGain += gain;
//               entries.push({
//                 symbol,
//                 gain,
//                 pct,
//                 type: "sell",
//                 date: lastDate,
//               });
//             }
//           }

//           // Add dividend entries with non-zero value
//           if (data.totalDividend > 0) {
//             const lastDate = data.dividends[data.dividends.length - 1].date;
//             monthDiv += data.totalDividend;
//             entries.push({
//               symbol,
//               gain: data.totalDividend,
//               pct: null,
//               type: "dividend",
//               date: lastDate,
//             });
//           }
//         }

//         totalGain += monthGain;

//         // Only include month if it has gain or dividends
//         if (monthGain !== 0 || monthDiv !== 0) {
//           return {
//             month,
//             entries: entries.sort(
//               (a, b) => new Date(b.date) - new Date(a.date)
//             ),
//             monthGain,
//             monthDiv,
//           };
//         } else {
//           return null;
//         }
//       })
//       .filter(Boolean);

//     const realizedReturn =
//       totalInvested > 0 ? (totalGain / totalInvested) * 100 : 0;

//     return {
//       history: monthlySummaries.sort(
//         (a, b) => new Date(b.entries[0]?.date || 0) - new Date(a.entries[0]?.date || 0)
//       ),
//       totals: {
//         realizedGain: totalGain,
//         realizedReturn,
//         totalDividends,
//       },
//     };
//   }, [transactions, selectedPortfolio]);

//   useEffect(() => {
//     if (onTotalsComputed) onTotalsComputed(totals);
//   }, [totals, onTotalsComputed]);

//   const toggleMonth = (month) =>
//     setExpandedMonths((prev) => ({ ...prev, [month]: !prev[month] }));

//   if (!history.length)
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );

//   return (
//     <div className="mt-10 bg-white rounded-xl shadow p-6">
//       {/* Header Summary */}
//       <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
//         <FileText className="w-5 h-5 text-indigo-600" />
//         History
//       </h2>

//       <div className="mb-6 p-4 bg-white rounded-xl flex flex-col sm:flex-row justify-between items-center shadow border-t border-indigo-300">
//         <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
//           <Wallet className="w-5 h-5 text-green-600" />
//           All-Time Realized Gain/Loss:
//           <span
//             className={`ml-2 font-semibold ${
//               totals.realizedGain >= 0 ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             Rs.{" "}
//             {Math.abs(totals.realizedGain).toLocaleString(undefined, {
//               maximumFractionDigits: 0,
//             })}
//           </span>
//         </div>

//         <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-0 flex items-center gap-2">
//           <Coins className="w-5 h-5 text-amber-600" />
//           Total Dividends:
//           <span className="ml-1 font-semibold text-amber-600">
//             Rs.{" "}
//             {totals.totalDividends.toLocaleString(undefined, {
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
//           <div
//             key={month}
//             className="mb-4 bg-white rounded-xl shadow overflow-hidden"
//           >
//             <button
//               onClick={() => toggleMonth(month)}
//               className="w-full flex justify-between items-center px-5 py-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition rounded-t-xl"
//             >
//               <div className="flex items-center gap-2 font-semibold">
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
//                     : "received dividend income worth";
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
//                           with{" "}
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

// /** Fiscal year label: Jul 1 -> Jun 30 */
// function fiscalYearLabel(dateStr) {
//   const d = new Date(dateStr);
//   const year = d.getFullYear();
//   const month = d.getMonth();
//   if (month >= 6) {
//     return `${year}-${String((year + 1) % 100).padStart(2, "0")}`;
//   } else {
//     return `${year - 1}-${String(year % 100).padStart(2, "0")}`;
//   }
// }

// /** Build fiscal-year history with FIFO P/L */
// function buildHistoryWithFifo(transactions = [], selectedPortfolio) {
//   const txs = (transactions || [])
//     .filter((t) => (selectedPortfolio ? t.portfolio === selectedPortfolio : true))
//     .map((t) => ({
//       ...t,
//       dateObj: new Date(t.date),
//       qty: Number(t.quantity ?? t.units ?? 0),
//       price: Number(t.price ?? t.rate ?? t.amount ?? 0),
//       type: (t.type || "").toLowerCase(),
//     }))
//     .sort((a, b) => a.dateObj - b.dateObj);

//   const buysBySymbol = {};
//   const fyMap = {};
//   let overallRealized = 0;
//   let overallDividends = 0;
//   let overallInvested = 0;
//   let overallSellAmount = 0; // NEW: total sell proceeds

//   for (const tx of txs) {
//     const { symbol, type, qty, price, dateObj } = tx;
//     if (!symbol) continue;
//     const fy = fiscalYearLabel(dateObj.toISOString());
//     if (!fyMap[fy]) fyMap[fy] = { entries: [], totalRealized: 0, totalDividends: 0, totalSellAmount: 0 };

//     if (!buysBySymbol[symbol]) buysBySymbol[symbol] = [];

//     if (type === "buy") {
//       if (qty > 0 && price != null && !Number.isNaN(price)) {
//         buysBySymbol[symbol].push({
//           qtyRemaining: qty,
//           pricePerShare: price,
//           date: dateObj,
//         });
//         overallInvested += qty * price;
//       }
//     } else if (type === "sell") {
//       if (qty <= 0) continue;

//       let qtyToSell = qty;
//       let realizedForThisSell = 0;
//       let matchedCostBasis = 0;
//       // let matchedQtyTotal = 0;
//       const queue = buysBySymbol[symbol];

//       while (qtyToSell > 0 && queue && queue.length > 0) {
//         const lot = queue[0];
//         const matchQty = Math.min(lot.qtyRemaining, qtyToSell);
//         const cost = matchQty * lot.pricePerShare;
//         const proceeds = matchQty * price;

//         realizedForThisSell += proceeds - cost;
//         matchedCostBasis += cost;
//         // matchedQtyTotal += matchQty;

//         lot.qtyRemaining -= matchQty;
//         qtyToSell -= matchQty;

//         if (lot.qtyRemaining <= 0) queue.shift();
//       }

//       const pct = matchedCostBasis > 0 ? (realizedForThisSell / matchedCostBasis) * 100 : null;

//       const sellEntry = {
//         symbol,
//         type: "sell",
//         date: dateObj,
//         qty: qty,
//         sellPrice: price,
//         realized: realizedForThisSell,
//         costBasis: matchedCostBasis,
//         pct,
//         totalSell: qty * price, // NEW: store total sell amount
//       };

//       fyMap[fy].entries.push(sellEntry);
//       fyMap[fy].totalRealized += realizedForThisSell;
//       fyMap[fy].totalSellAmount += sellEntry.totalSell; // accumulate per FY
//       overallRealized += realizedForThisSell;
//       overallSellAmount += sellEntry.totalSell; // accumulate overall
//     } else if (type === "dividend") {
//       const divAmount = qty * price;
//       const divEntry = {
//         symbol,
//         type: "dividend",
//         date: dateObj,
//         qty,
//         dividendAmount: divAmount,
//       };
//       fyMap[fy].entries.push(divEntry);
//       fyMap[fy].totalDividends += divAmount;
//       overallDividends += divAmount;
//     }
//   }

//   const yearList = Object.entries(fyMap)
//     .map(([fy, data]) => ({
//       fy,
//       entries: data.entries.sort((a, b) => b.date - a.date),
//       totalRealized: data.totalRealized,
//       totalDividends: data.totalDividends,
//       totalSellAmount: data.totalSellAmount, // NEW
//       lastDate: data.entries.length ? data.entries[0].date : new Date(0),
//     }))
//     .sort((a, b) => b.lastDate - a.lastDate);

//   return {
//     yearList,
//     totals: {
//       realizedGain: overallRealized,
//       totalDividends: overallDividends,
//       totalInvested: overallInvested,
//       totalSellAmount: overallSellAmount, // NEW
//     },
//   };
// }

// const HistorySummary = ({ transactions = [], selectedPortfolio, onTotalsComputed }) => {
//   const [expandedFY, setExpandedFY] = useState({});

//   const { yearList, totals } = useMemo(
//     () => buildHistoryWithFifo(transactions, selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   useEffect(() => {
//     if (onTotalsComputed) onTotalsComputed({
//       realizedGain: totals.realizedGain,
//       realizedReturn: totals.totalInvested > 0 ? (totals.realizedGain / totals.totalInvested) * 100 : 0,
//       totalDividends: totals.totalDividends,
//       totalSellAmount: totals.totalSellAmount, // NEW
//     });
//   }, [totals, onTotalsComputed]);

//   const toggleFY = (fy) => setExpandedFY((p) => ({ ...p, [fy]: !p[fy] }));

//   if (!yearList.length) {
//     return (
//       <div className="mt-10 text-gray-500 text-center italic">
//         No realized history yet for this portfolio.
//       </div>
//     );
//   }

//   return (
//     <div className="mt-10 bg-white rounded-xl shadow p-6">
//       <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
//         <FileText className="w-5 h-5 text-indigo-600" />
//         History (Fiscal Years)
//       </h2>

//       <div className="mb-6 p-4 bg-white rounded-xl flex flex-col sm:flex-row justify-between items-center shadow border-t border-indigo-300">
//         <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
//           <Wallet className="w-5 h-5 text-green-600" />
//           All-Time Realized:
//           <span className="ml-2 font-semibold text-green-600">
//             Rs. {totals.totalSellAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </span>
//         </div>

//         <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-0 flex items-center gap-2">
//           <Coins className="w-5 h-5 text-amber-600" />
//           Total Dividends:
//           <span className="ml-1 font-semibold text-amber-600">
//             Rs. {totals.totalDividends.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//           </span>
//         </div>
//       </div>

//       {yearList.map(({ fy, entries, totalRealized, totalDividends }) => {
//         const open = !!expandedFY[fy];
//         return (
//           <div key={fy} className="mb-6 bg-white rounded-xl shadow overflow-hidden">
//             <button
//               onClick={() => toggleFY(fy)}
//               className="w-full flex justify-between items-center px-5 py-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition"
//             >
//               <div className="flex items-center gap-2 font-semibold">
//                 {open ? <ChevronDown className="w-5 h-5 text-indigo-600" /> : <ChevronRight className="w-5 h-5 text-indigo-600" />}
//                 FY {fy}
//               </div>

//               <div className="text-sm text-gray-600 flex items-center gap-3">
//                 <BarChart3 className="w-4 h-4 text-indigo-500" />
//                 <span className={`font-semibold ${totalRealized >= 0 ? "text-green-600" : "text-red-600"}`}>
//                   Rs. {totalRealized.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//                 </span>

//                 <Coins className="w-4 h-4 text-amber-500 ml-2" />
//                 <span className="font-semibold text-amber-600">
//                   Rs. {totalDividends.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//                 </span>
//               </div>
//             </button>

//             <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[2000px] p-5" : "max-h-0"}`}>
//               {entries.length === 0 ? (
//                 <div className="text-gray-500">No activity in this fiscal year.</div>
//               ) : (
//                 entries.map((item, idx) => {
//                   const isSell = item.type === "sell";
//                   const profitColor = isSell ? (item.realized >= 0 ? "text-green-600" : "text-red-600") : "text-amber-600";
//                   const Icon = isSell ? (item.realized >= 0 ? TrendingUp : TrendingDown) : Coins;

//                   const dateStr = new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

//                   return (
//                     <div key={idx} className="flex items-start gap-3 text-gray-700 py-3 border-b last:border-none">
//                       <Icon className={`${profitColor} w-4 h-4 mt-1`} />
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <span className="font-semibold">{item.symbol}</span>{" "}
//                             <span className="text-sm text-gray-500 ml-2">({dateStr})</span>
//                           </div>
//                           <div className="text-right">
//                             {isSell ? (
//                               <>
//                                 <div className={`font-semibold ${profitColor}`}>
//                                   Rs. {(item.qty * item.sellPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                                 </div>
//                                 <div className="text-sm text-gray-500">
//                                   Qty: {item.qty.toLocaleString(undefined)} @ Rs. {item.sellPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                                 </div>
//                               </>
//                             ) : (
//                               <>
//                                 <div className="font-semibold text-amber-600">
//                                   Rs. {item.dividendAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//                                 </div>
//                                 <div className="text-sm text-gray-500">Qty: {item.qty.toLocaleString(undefined)}</div>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })
//               )}
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

/** Fiscal year label: Jul 1 -> Jun 30 */
function fiscalYearLabel(dateStr) {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = d.getMonth();
  if (month >= 6) {
    return `${year}-${String((year + 1) % 100).padStart(2, "0")}`;
  } else {
    return `${year - 1}-${String(year % 100).padStart(2, "0")}`;
  }
}

/** Build fiscal-year history with FIFO P/L */
function buildHistoryWithFifo(transactions = [], selectedPortfolio) {
  const txs = (transactions || [])
    .filter((t) => (selectedPortfolio ? t.portfolio === selectedPortfolio : true))
    .map((t) => ({
      ...t,
      dateObj: new Date(t.date),
      qty: Number(t.quantity ?? t.units ?? 0),
      price: Number(t.price ?? t.rate ?? t.amount ?? 0),
      type: (t.type || "").toLowerCase(),
    }))
    .sort((a, b) => a.dateObj - b.dateObj);

  const buysBySymbol = {};
  const fyMap = {};
  let overallRealized = 0;
  let overallDividends = 0;
  let overallInvested = 0;
  let overallSellAmount = 0; // total sell proceeds

  for (const tx of txs) {
    const { symbol, type, qty, price, dateObj } = tx;
    if (!symbol) continue;
    const fy = fiscalYearLabel(dateObj.toISOString());
    if (!fyMap[fy]) fyMap[fy] = { entries: [], totalRealized: 0, totalDividends: 0, totalSellAmount: 0 };

    if (!buysBySymbol[symbol]) buysBySymbol[symbol] = [];

    if (type === "buy") {
      if (qty > 0 && price != null && !Number.isNaN(price)) {
        buysBySymbol[symbol].push({
          qtyRemaining: qty,
          pricePerShare: price,
          date: dateObj,
        });
        overallInvested += qty * price;
      }
    } else if (type === "sell") {
      if (qty <= 0) continue;

      let qtyToSell = qty;
      let realizedForThisSell = 0;
      let matchedCostBasis = 0;
      const queue = buysBySymbol[symbol];

      while (qtyToSell > 0 && queue && queue.length > 0) {
        const lot = queue[0];
        const matchQty = Math.min(lot.qtyRemaining, qtyToSell);
        const cost = matchQty * lot.pricePerShare;
        const proceeds = matchQty * price;

        realizedForThisSell += proceeds - cost;
        matchedCostBasis += cost;

        lot.qtyRemaining -= matchQty;
        qtyToSell -= matchQty;

        if (lot.qtyRemaining <= 0) queue.shift();
      }

      const pct = matchedCostBasis > 0 ? (realizedForThisSell / matchedCostBasis) * 100 : null;

      const sellEntry = {
        symbol,
        type: "sell",
        date: dateObj,
        qty: qty,
        sellPrice: price,
        realized: realizedForThisSell,
        costBasis: matchedCostBasis,
        pct,
        totalSell: qty * price, // store total sell amount
      };

      fyMap[fy].entries.push(sellEntry);
      fyMap[fy].totalRealized += realizedForThisSell;
      fyMap[fy].totalSellAmount += sellEntry.totalSell; // accumulate per FY
      overallRealized += realizedForThisSell;
      overallSellAmount += sellEntry.totalSell; // accumulate overall
    } else if (type === "dividend") {
      const divAmount = qty * price;
      const divEntry = {
        symbol,
        type: "dividend",
        date: dateObj,
        qty,
        dividendAmount: divAmount,
      };
      fyMap[fy].entries.push(divEntry);
      fyMap[fy].totalDividends += divAmount;
      overallDividends += divAmount;
    }
  }

  const yearList = Object.entries(fyMap)
    .map(([fy, data]) => ({
      fy,
      entries: data.entries.sort((a, b) => b.date - a.date),
      totalRealized: data.totalRealized,
      totalDividends: data.totalDividends,
      totalSellAmount: data.totalSellAmount, // NEW
      lastDate: data.entries.length ? data.entries[0].date : new Date(0),
    }))
    .sort((a, b) => b.lastDate - a.lastDate);

  return {
    yearList,
    totals: {
      realizedGain: overallRealized,
      totalDividends: overallDividends,
      totalInvested: overallInvested,
      totalSellAmount: overallSellAmount, // NEW
    },
  };
}

const HistorySummary = ({ transactions = [], selectedPortfolio, onTotalsComputed }) => {
  const [expandedFY, setExpandedFY] = useState({});

  const { yearList, totals } = useMemo(
    () => buildHistoryWithFifo(transactions, selectedPortfolio),
    [transactions, selectedPortfolio]
  );

  useEffect(() => {
    if (onTotalsComputed) onTotalsComputed({
      realizedGain: totals.realizedGain,
      realizedReturn: totals.totalInvested > 0 ? (totals.realizedGain / totals.totalInvested) * 100 : 0,
      totalDividends: totals.totalDividends,
      totalSellAmount: totals.totalSellAmount, // NEW
    });
  }, [totals, onTotalsComputed]);

  const toggleFY = (fy) => setExpandedFY((p) => ({ ...p, [fy]: !p[fy] }));

  if (!yearList.length) {
    return (
      <div className="mt-10 text-gray-500 text-center italic">
        No realized history yet for this portfolio.
      </div>
    );
  }

  return (
    <div className="mt-10 bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
        <FileText className="w-5 h-5 text-indigo-600" />
        History (Fiscal Years)
      </h2>

      <div className="mb-6 p-4 bg-white rounded-xl flex flex-col sm:flex-row justify-between items-center shadow border-t border-indigo-300">
        <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
          <Wallet className="w-5 h-5 text-green-600" />
          Total Realized:
          <span className="ml-2 font-semibold text-green-600">
            Rs. {totals.totalSellAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
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

      {yearList.map(({ fy, entries, totalSellAmount, totalDividends }) => {
        const open = !!expandedFY[fy];
        return (
          <div key={fy} className="mb-6 bg-white rounded-xl shadow overflow-hidden">
            <button
              onClick={() => toggleFY(fy)}
              className="w-full flex justify-between items-center px-5 py-3 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition"
            >
              <div className="flex items-center gap-2 font-semibold">
                {open ? <ChevronDown className="w-5 h-5 text-indigo-600" /> : <ChevronRight className="w-5 h-5 text-indigo-600" />}
                FY {fy}
              </div>

              <div className="text-sm text-gray-600 flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-indigo-500" />
                <span className="font-semibold text-green-600">
                  Rs. {totalSellAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>

                <Coins className="w-4 h-4 text-amber-500 ml-2" />
                <span className="font-semibold text-amber-600">
                  Rs. {totalDividends.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            </button>

            <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[2000px] p-5" : "max-h-0"}`}>
              {entries.length === 0 ? (
                <div className="text-gray-500">No activity in this fiscal year.</div>
              ) : (
                entries.map((item, idx) => {
                  const isSell = item.type === "sell";
                  const profitColor = isSell ? (item.realized >= 0 ? "text-green-600" : "text-red-600") : "text-amber-600";
                  const Icon = isSell ? (item.realized >= 0 ? TrendingUp : TrendingDown) : Coins;

                  const dateStr = new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

                  return (
                    <div key={idx} className="flex items-start gap-3 text-gray-700 py-3 border-b last:border-none">
                      <Icon className={`${profitColor} w-4 h-4 mt-1`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-semibold">{item.symbol}</span>{" "}
                            <span className="text-sm text-gray-500 ml-2">({dateStr})</span>
                          </div>
                          <div className="text-right">
                            {isSell ? (
                              <>
                                <div className={`font-semibold ${profitColor}`}>
                                  Rs. {(item.qty * item.sellPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Qty: {item.qty.toLocaleString(undefined)} @ Rs. {item.sellPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                </div>
                                {item.costBasis > 0 && item.pct !== null && (
                                  <div className="text-sm text-gray-500">
                                    Gain: Rs. {item.realized.toLocaleString(undefined, { maximumFractionDigits: 0 })} — <span className={`${profitColor} font-semibold`}>{item.pct >= 0 ? "+" : ""}{item.pct.toFixed(2)}%</span>
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <div className="font-semibold text-amber-600">
                                  Rs. {item.dividendAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </div>
                                <div className="text-sm text-gray-500">Qty: {item.qty.toLocaleString(undefined)}</div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistorySummary;
