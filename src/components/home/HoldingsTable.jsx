// import React from "react";

// const HoldingsTable = ({ holdings, getCurrentPrice }) => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price</th>
//             <th className="p-2 border">Current Price</th>
//             <th className="p-2 border">Total Cost</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const avgPrice = h.totalCost / (h.quantity || 1);
//               const currentPrice = getCurrentPrice(h.symbol);
//               const totalCost = h.totalCost;
//               const currentValue = h.quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">{h.symbol}</td>
//                   <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                   <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td className="p-4 text-gray-500 text-center" colSpan="8">
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;


// import React from "react";

// const HoldingsTable = ({ holdings, getCurrentPrice }) => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price (After Tax)</th>
//             <th className="p-2 border">Current Price</th>
//             <th className="p-2 border">Total Cost (After Tax)</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const avgPrice = h.totalCost / (h.quantity || 1);
//               const currentPrice = getCurrentPrice(h.symbol);
//               const totalCost = h.totalCost;
//               const currentValue = h.quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">{h.symbol}</td>
//                   <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                   <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td className="p-4 text-gray-500 text-center" colSpan="8">
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;

// import React from "react";

// const HoldingsTable = ({ holdings, getCurrentPrice }) => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price (After Tax)</th>
//             <th className="p-2 border">Current Price</th>
//             <th className="p-2 border">Total Cost (After Tax)</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const avgPrice = h.totalCost / (h.quantity || 1);
//               const currentPrice = getCurrentPrice(h.symbol);
//               const totalCost = h.totalCost;
//               const currentValue = h.quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">{h.symbol}</td>
//                   <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                   <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td className="p-4 text-gray-500 text-center" colSpan="8">
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;


// import React from "react";

// const HoldingsTable = ({ holdings, currentPrices }) => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price (After Tax)</th>
//             <th className="p-2 border">Current Price</th>
//             <th className="p-2 border">Total Cost (After Tax)</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const currentPrice = currentPrices[h.symbol] || 0;
//               const avgPrice = h.totalCost / (h.quantity || 1);
//               const totalCost = h.totalCost;
//               const currentValue = h.quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">{h.symbol}</td>
//                   <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                   <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td className="p-4 text-gray-500 text-center" colSpan="8">
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;


// import React from "react";

// const HoldingsTable = ({ holdings, currentPrices, stockInfo }) => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price (After Tax)</th>
//             <th className="p-2 border">Current Price</th>
//             <th className="p-2 border">Total Cost (After Tax)</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const currentPrice = currentPrices[h.symbol] || 0;
//               const avgPrice = h.totalCost / (h.quantity || 1);
//               const totalCost = h.totalCost;
//               const currentValue = h.quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">
//                     {h.symbol}
//                     {stockInfo[h.symbol]?.name && (
//                       <div className="text-xs text-gray-500">{stockInfo[h.symbol].name}</div>
//                     )}
//                   </td>
//                   <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                   <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td className="p-4 text-gray-500 text-center" colSpan="8">
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;

// import React from "react";

// const HoldingsTable = ({ holdings, currentPrices, stockInfo }) => {
//   // Helper: Convert "TECHNOLOGY & COMMUNICATION" → "Technology & Communication"
//   const toTitleCase = (str) => {
//     if (!str) return "—";
//     return str
//       .toLowerCase()
//       .split(" ")
//       .map((word) =>
//         word.length > 2
//           ? word.charAt(0).toUpperCase() + word.slice(1)
//           : word.toUpperCase()
//       )
//       .join(" ");
//   };

//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Industry</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price (After Tax)</th>
//             <th className="p-2 border">Current Price (PSX)</th>
//             <th className="p-2 border">Total Cost (After Tax)</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>

//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const info = stockInfo[h.symbol] || {};
//               const currentPrice = currentPrices[h.symbol] || 0;
//               const avgPrice = h.totalCost / (h.quantity || 1);
//               const totalCost = h.totalCost;
//               const currentValue = h.quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">
//                     {h.symbol}
//                     {info.name && (
//                       <div className="text-xs text-gray-500">{info.name}</div>
//                     )}
//                   </td>
//                   <td className="p-2 border text-sm text-gray-600">
//                     {toTitleCase(info.industry)}
//                   </td>
//                   <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                   <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                   <td className="p-2 border font-semibold text-indigo-700">
//                     Rs. {currentPrice.toFixed(2)}
//                   </td>
//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td className="p-4 text-gray-500 text-center" colSpan="9">
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;

// import React from "react";

// const HoldingsTable = ({ holdings, stockData }) => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">
//         Current Holdings
//       </h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Industry</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price (After Tax)</th>
//             <th className="p-2 border">Current Price</th>
//             <th className="p-2 border">Change</th>
//             <th className="p-2 border">Total Cost (After Tax)</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const data = stockData[h.symbol] || {};
//               const currentPrice = data.currentPrice || 0;
//               const avgPrice = h.totalCost / (h.quantity || 1);
//               const totalCost = h.totalCost;
//               const currentValue = h.quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">
//                     <div className="flex flex-col">
//                       <span>{h.symbol}</span>
//                       <span className="text-sm text-gray-500">
//                         {data.name || ""}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="p-2 border">{data.industry || "—"}</td>
//                   <td className="p-2 border">{h.quantity.toFixed(0)}</td>
//                   <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
//                   <td className="p-2 border">
//                     Rs. {currentPrice ? currentPrice.toFixed(2) : "—"}
//                   </td>

//                   {/* ✅ Modern Change column */}
//                   <td className="p-2 border text-center">
//                     {data.changeValue != null ? (
//                       <div
//                         className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full text-sm font-medium
//                           ${
//                             data.changeValue > 0
//                               ? "bg-green-100 text-green-700"
//                               : data.changeValue < 0
//                               ? "bg-red-100 text-red-700"
//                               : "bg-gray-100 text-gray-600"
//                           }`}
//                       >
//                         <span>
//                           {data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}
//                         </span>
//                         <span>
//                           {Math.abs(data.changeValue).toFixed(2)}{" "}
//                           <span className="text-xs opacity-80">
//                             ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                           </span>
//                         </span>
//                       </div>
//                     ) : (
//                       "—"
//                     )}
//                   </td>

//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>
//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td className="p-4 text-gray-500 text-center" colSpan="10">
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;


// import React from "react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">
//         Current Holdings
//       </h2>

//       <table className="w-full border-collapse">
//         <thead className="bg-gray-100">
//           <tr className="text-gray-700 text-left">
//             <th className="p-2 border">Stock</th>
//             <th className="p-2 border">Industry</th>
//             <th className="p-2 border">Quantity</th>
//             <th className="p-2 border">Avg. Price (After Tax)</th>
//             <th className="p-2 border">Current Price</th>
//             <th className="p-2 border">Change</th>
//             <th className="p-2 border">Total Cost (After Tax)</th>
//             <th className="p-2 border">Current Value</th>
//             <th className="p-2 border">Gain/Loss</th>
//             <th className="p-2 border">Return %</th>
//           </tr>
//         </thead>

//         <tbody>
//           {holdings.length > 0 ? (
//             holdings.map((h) => {
//               const data = stockData[h.symbol] || {};
//               const currentPrice = Number(data.currentPrice) || 0;
//               const quantity = Number(h.quantity) || 0;
//               const totalCost = Number(h.totalCost) || 0;

//               const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//               const currentValue = quantity * currentPrice;
//               const gainLoss = currentValue - totalCost;
//               const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//               return (
//                 <tr key={h.symbol} className="border-t text-gray-700">
//                   <td className="p-2 border font-medium">
//                     <div className="flex flex-col">
//                       <span>{h.symbol}</span>
//                       <span className="text-sm text-gray-500">
//                         {data.name || ""}
//                       </span>
//                     </div>
//                   </td>

//                   <td className="p-2 border">{data.industry || "—"}</td>
//                   <td className="p-2 border">{quantity.toFixed(0)}</td>
//                   <td className="p-2 border">
//                     Rs. {avgPrice.toFixed(2)}
//                   </td>
//                   <td className="p-2 border">
//                     Rs. {currentPrice ? currentPrice.toFixed(2) : "—"}
//                   </td>

//                   {/* ✅ Change column with better safety */}
//                   <td className="p-2 border text-center">
//                     {data.changeValue != null ? (
//                       <div
//                         className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full text-sm font-medium
//                           ${
//                             data.changeValue > 0
//                               ? "bg-green-100 text-green-700"
//                               : data.changeValue < 0
//                               ? "bg-red-100 text-red-700"
//                               : "bg-gray-100 text-gray-600"
//                           }`}
//                       >
//                         <span>
//                           {data.changeValue > 0
//                             ? "▲"
//                             : data.changeValue < 0
//                             ? "▼"
//                             : "•"}
//                         </span>
//                         <span>
//                           {Math.abs(data.changeValue).toFixed(2)}{" "}
//                           <span className="text-xs opacity-80">
//                             ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                           </span>
//                         </span>
//                       </div>
//                     ) : (
//                       "—"
//                     )}
//                   </td>

//                   <td className="p-2 border">Rs. {totalCost.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {currentValue.toFixed(2)}</td>

//                   <td
//                     className={`p-2 border font-semibold ${
//                       gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     Rs. {gainLoss.toFixed(2)}
//                   </td>

//                   <td
//                     className={`p-2 border font-semibold ${
//                       returnPct >= 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {returnPct.toFixed(2)}%
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td
//                 className="p-4 text-gray-500 text-center"
//                 colSpan="10"
//               >
//                 No holdings yet for this portfolio.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HoldingsTable;


// import React from "react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm">
//           <thead>
//             <tr className="bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">
//                 Avg. Price (After Tax)
//               </th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const data = stockData[h.symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 return (
//                   <tr
//                     key={h.symbol}
//                     className="hover:bg-indigo-50/50 transition-colors duration-200"
//                   >
//                     <td className="p-3 font-medium text-gray-800">
//                       <div className="flex flex-col">
//                         <span>{h.symbol}</span>
//                         <span className="text-xs text-gray-500">
//                           {data.name || ""}
//                         </span>
//                       </div>
//                     </td>

//                     <td className="p-3 text-gray-600">{data.industry || "—"}</td>
//                     <td className="p-3 text-right text-gray-800">
//                       {quantity.toLocaleString("en-IN")}
//                     </td>
//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(avgPrice)}
//                     </td>
//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {currentPrice ? formatNumber(currentPrice) : "—"}
//                     </td>

//                     {/* ✅ Change Column */}
//                     <td className="p-3 text-center">
//                       {data.changeValue != null ? (
//                         <div
//                           className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                             ${
//                               data.changeValue > 0
//                                 ? "bg-green-50 text-green-700"
//                                 : data.changeValue < 0
//                                 ? "bg-red-50 text-red-700"
//                                 : "bg-gray-50 text-gray-600"
//                             }`}
//                         >
//                           <span>
//                             {data.changeValue > 0
//                               ? "▲"
//                               : data.changeValue < 0
//                               ? "▼"
//                               : "•"}
//                           </span>
//                           <span>
//                             {Math.abs(data.changeValue).toFixed(2)}{" "}
//                             <span className="text-[10px] opacity-70">
//                               ({data.changePercent?.replace(/[()]/g, "") ||
//                                 "0%"})
//                             </span>
//                           </span>
//                         </div>
//                       ) : (
//                         <span className="text-gray-400">—</span>
//                       )}
//                     </td>

//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(totalCost)}
//                     </td>
//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(currentValue)}
//                     </td>

//                     <td
//                       className={`p-3 text-right font-semibold ${
//                         gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       Rs. {formatNumber(gainLoss)}
//                     </td>

//                     <td
//                       className={`p-3 text-right font-semibold ${
//                         returnPct >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {formatNumber(returnPct, 2)}%
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;

// import React from "react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm">
//           <thead>
//             <tr className="bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">
//                 Avg. Price (After Tax)
//               </th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 return (
//                   <tr
//                     key={symbol}
//                     className="hover:bg-indigo-50/50 transition-colors duration-200"
//                   >
//                     <td className="p-3 font-medium text-gray-800">
//                       <div className="flex flex-col">
//                         <span>{symbol}</span>
//                         <span className="text-xs text-gray-500">
//                           {data.name || ""}
//                         </span>
//                       </div>
//                     </td>

//                     <td className="p-3 text-gray-600">{data.industry || "—"}</td>
//                     <td className="p-3 text-right text-gray-800">
//                       {quantity.toLocaleString("en-IN")}
//                     </td>
//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(avgPrice)}
//                     </td>

//                     {/* ✅ Current Price (no background flash) */}
//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(currentPrice)}
//                     </td>

//                     {/* ✅ Change */}
//                     <td className="p-3 text-center">
//                       {data.changeValue != null ? (
//                         <div
//                           className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                             ${
//                               data.changeValue > 0
//                                 ? "bg-green-50 text-green-700"
//                                 : data.changeValue < 0
//                                 ? "bg-red-50 text-red-700"
//                                 : "bg-gray-50 text-gray-600"
//                             }`}
//                         >
//                           <span>
//                             {data.changeValue > 0
//                               ? "▲"
//                               : data.changeValue < 0
//                               ? "▼"
//                               : "•"}
//                           </span>
//                           <span>
//                             {Math.abs(data.changeValue).toFixed(2)}{" "}
//                             <span className="text-[10px] opacity-70">
//                               ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                             </span>
//                           </span>
//                         </div>
//                       ) : (
//                         <span className="text-gray-400">—</span>
//                       )}
//                     </td>

//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(totalCost)}
//                     </td>

//                     {/* ✅ Current Value (no background flash) */}
//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(currentValue)}
//                     </td>

//                     <td
//                       className={`p-3 text-right font-semibold ${
//                         gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       Rs. {formatNumber(gainLoss)}
//                     </td>

//                     <td
//                       className={`p-3 text-right font-semibold ${
//                         returnPct >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {formatNumber(returnPct, 2)}%
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;


// import React from "react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>
//       </div>

//       <div className="overflow-x-auto max-h-[600px] rounded-lg">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">
//                 Avg. Price (After Tax)
//               </th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 return (
//                   <tr
//                     key={symbol}
//                     className="hover:bg-indigo-50/50 transition-colors duration-200"
//                   >
//                     <td className="p-3 font-medium text-gray-800">
//                       <div className="flex flex-col">
//                         <span>{symbol}</span>
//                         <span className="text-xs text-gray-500">
//                           {data.name || ""}
//                         </span>
//                       </div>
//                     </td>

//                     <td className="p-3 text-gray-600">{data.industry || "—"}</td>

//                     <td className="p-3 text-right text-gray-800">
//                       {quantity.toLocaleString("en-IN")}
//                     </td>

//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(avgPrice)}
//                     </td>

//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(currentPrice)}
//                     </td>

//                     <td className="p-3 text-center">
//                       {data.changeValue != null ? (
//                         <div
//                           className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                             ${
//                               data.changeValue > 0
//                                 ? "bg-green-50 text-green-700"
//                                 : data.changeValue < 0
//                                 ? "bg-red-50 text-red-700"
//                                 : "bg-gray-50 text-gray-600"
//                             }`}
//                         >
//                           <span>
//                             {data.changeValue > 0
//                               ? "▲"
//                               : data.changeValue < 0
//                               ? "▼"
//                               : "•"}
//                           </span>
//                           <span>
//                             {Math.abs(data.changeValue).toFixed(2)}{" "}
//                             <span className="text-[10px] opacity-70">
//                               ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                             </span>
//                           </span>
//                         </div>
//                       ) : (
//                         <span className="text-gray-400">—</span>
//                       )}
//                     </td>

//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(totalCost)}
//                     </td>

//                     <td className="p-3 text-right text-gray-700">
//                       Rs. {formatNumber(currentValue)}
//                     </td>

//                     <td
//                       className={`p-3 text-right font-semibold ${
//                         gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       Rs. {formatNumber(gainLoss)}
//                     </td>

//                     <td
//                       className={`p-3 text-right font-semibold ${
//                         returnPct >= 0 ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {formatNumber(returnPct, 2)}%
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;

// import React, { useState } from "react";
// import { Info } from "lucide-react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const [expandedSymbol, setExpandedSymbol] = useState(null);

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   const toggleExpand = (symbol) => {
//     setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
//   };

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
//             {/* Header with hover info */}
//             <div className="flex items-center justify-between mb-4">
//   <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//     Current Holdings
//   </h2>

//   {/* Info Icon with animated tooltip */}
//   <div className="relative group">
//     <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
//     <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
//       Click stock symbol to see more info
//     </span>
//   </div>
// </div>


//       <div className="overflow-x-auto max-h-[600px] rounded-lg">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">Avg. Price (After Tax)</th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 const isExpanded = expandedSymbol === symbol;

//                 return (
//                   <React.Fragment key={symbol}>
//                     <tr
//                       className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
//                       onClick={() => toggleExpand(symbol)}
//                     >
//                       <td className="p-3 font-medium text-gray-800">
//                         <div className="flex flex-col">
//                           <span className="underline">{symbol}</span>
//                           <span className="text-xs text-gray-500">{data.name || ""}</span>
//                         </div>
//                       </td>

//                       <td className="p-3 text-gray-600">{data.industry || "—"}</td>

//                       <td className="p-3 text-right text-gray-800">{quantity.toLocaleString("en-IN")}</td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(avgPrice)}</td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentPrice)}</td>

//                       <td className="p-3 text-center">
//                         {data.changeValue != null ? (
//                           <div
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                               ${
//                                 data.changeValue > 0
//                                   ? "bg-green-50 text-green-700"
//                                   : data.changeValue < 0
//                                   ? "bg-red-50 text-red-700"
//                                   : "bg-gray-50 text-gray-600"
//                               }`}
//                           >
//                             <span>{data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}</span>
//                             <span>
//                               {Math.abs(data.changeValue).toFixed(2)}{" "}
//                               <span className="text-[10px] opacity-70">
//                                 ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                               </span>
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-gray-400">—</span>
//                         )}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(totalCost)}</td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentValue)}</td>

//                       <td className={`p-3 text-right font-semibold ${gainLoss >= 0 ? "text-green-600" : "text-red-600"}`}>
//                         Rs. {formatNumber(gainLoss)}
//                       </td>

//                       <td className={`p-3 text-right font-semibold ${returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>
//                         {formatNumber(returnPct, 2)}%
//                       </td>
//                     </tr>

//                     {/* Expanded Row for Stock Details */}
//                     {isExpanded && (
//                       <tr className="bg-indigo-50/30">
//                         <td colSpan={10} className="p-4 text-gray-700 text-sm">
//                           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                             <div><strong>Open:</strong> Rs. {formatNumber(data.open)}</div>
//                             <div><strong>High:</strong> Rs. {formatNumber(data.high)}</div>
//                             <div><strong>Low:</strong> Rs. {formatNumber(data.low)}</div>
//                             <div><strong>Volume:</strong> {formatNumber(data.volume, 0)}</div>
//                             <div><strong>PE Ratio:</strong> {formatNumber(data.peRatio)}</div>
//                             <div><strong>52W High:</strong> Rs. {formatNumber(data.high52Week)}</div>
//                             <div><strong>52W Low:</strong> Rs. {formatNumber(data.low52Week)}</div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;

// import React, { useState } from "react";
// import { Info, TrendingUp, TrendingDown, BarChart2 } from "lucide-react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const [expandedSymbol, setExpandedSymbol] = useState(null);

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   const toggleExpand = (symbol) => {
//     setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
//   };

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
//       {/* Header with hover info */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>
//         <div className="relative group">
//           <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
//           <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
//             Click stock symbol to see more info
//           </span>
//         </div>
//       </div>

//       <div className="overflow-x-auto max-h-[600px] rounded-lg">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">Avg. Price</th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;
//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 const isExpanded = expandedSymbol === symbol;

//                 return (
//                   <React.Fragment key={symbol}>
//                     {/* Main row */}
//                     <tr
//                       className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
//                       onClick={() => toggleExpand(symbol)}
//                     >
//                       <td className="p-3 font-medium text-gray-800">
//                         <div className="flex flex-col">
//                           <span className="underline">{symbol}</span>
//                           <span className="text-xs text-gray-500">{data.name || ""}</span>
//                         </div>
//                       </td>

//                       <td className="p-3 text-gray-600">{data.industry || "—"}</td>
//                       <td className="p-3 text-right text-gray-800">{quantity.toLocaleString("en-IN")}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(avgPrice)}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentPrice)}</td>
//                       <td className="p-3 text-center">
//                         {data.changeValue != null ? (
//                           <div
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                               ${data.changeValue > 0 ? "bg-green-50 text-green-700" : data.changeValue < 0 ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-600"}`}
//                           >
//                             <span>{data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}</span>
//                             <span>
//                               {Math.abs(data.changeValue).toFixed(2)}{" "}
//                               <span className="text-[10px] opacity-70">({data.changePercent?.replace(/[()]/g, "") || "0%"})</span>
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-gray-400">—</span>
//                         )}
//                       </td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(totalCost)}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentValue)}</td>
//                       <td className={`p-3 text-right font-semibold ${gainLoss >= 0 ? "text-green-600" : "text-red-600"}`}>Rs. {formatNumber(gainLoss)}</td>
//                       <td className={`p-3 text-right font-semibold ${returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>{formatNumber(returnPct, 2)}%</td>
//                     </tr>

//                     {/* Expanded row */}
//                     {isExpanded && (
//                       <tr className="bg-indigo-50/30 transition-all duration-300 ease-in-out">
//                         <td colSpan={10} className="p-4 text-gray-700 text-sm">
//                           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                             <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-500" /> <span><strong>Open:</strong> Rs. {formatNumber(data.open)}</span></div>
//                             <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-green-600" /> <span><strong>High:</strong> Rs. {formatNumber(data.high)}</span></div>
//                             <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-red-600" /> <span><strong>Low:</strong> Rs. {formatNumber(data.low)}</span></div>
//                             <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-600" /> <span><strong>Volume:</strong> {formatNumber(data.volume, 0)}</span></div>
//                             <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-500" /> <span><strong>PE Ratio:</strong> {formatNumber(data.peRatio)}</span></div>
//                             <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-600" /> <span><strong>52W High:</strong> Rs. {formatNumber(data.high52Week)}</span></div>
//                             <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-600" /> <span><strong>52W Low:</strong> Rs. {formatNumber(data.low52Week)}</span></div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">No holdings yet for this portfolio.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default HoldingsTable;


// import React, { useState } from "react";
// import { Info, BarChart2 } from "lucide-react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const [expandedSymbol, setExpandedSymbol] = useState(null);

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   const toggleExpand = (symbol) => {
//     setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
//   };

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
//       {/* Header with hover info */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>
//         <div className="relative group">
//           <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
//           <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
//             Click stock symbol to see more info
//           </span>
//         </div>
//       </div>

//       <div className="overflow-x-auto max-h-[600px] rounded-lg">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">Avg. Price</th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;
//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;
//                 const isExpanded = expandedSymbol === symbol;

//                 return (
//                   <React.Fragment key={symbol}>
//                     {/* Main row */}
//                     <tr
//                       className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
//                       onClick={() => toggleExpand(symbol)}
//                     >
//                       <td className="p-3 font-medium text-gray-800">
//                         <div className="flex flex-col">
//                           <span className="underline">{symbol}</span>
//                           <span className="text-xs text-gray-500">{data.name || ""}</span>
//                         </div>
//                       </td>

//                       <td className="p-3 text-gray-600">{data.industry || "—"}</td>
//                       <td className="p-3 text-right text-gray-800">{quantity.toLocaleString("en-IN")}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(avgPrice)}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentPrice)}</td>
//                       <td className="p-3 text-center">
//                         {data.changeValue != null ? (
//                           <div
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                               ${data.changeValue > 0 ? "bg-green-50 text-green-700" : data.changeValue < 0 ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-600"}`}
//                           >
//                             <span>{data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}</span>
//                             <span>
//                               {Math.abs(data.changeValue).toFixed(2)}{" "}
//                               <span className="text-[10px] opacity-70">({data.changePercent?.replace(/[()]/g, "") || "0%"})</span>
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-gray-400">—</span>
//                         )}
//                       </td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(totalCost)}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentValue)}</td>
//                       <td className={`p-3 text-right font-semibold ${gainLoss >= 0 ? "text-green-600" : "text-red-600"}`}>Rs. {formatNumber(gainLoss)}</td>
//                       <td className={`p-3 text-right font-semibold ${returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>{formatNumber(returnPct, 2)}%</td>
//                     </tr>

//                     {/* Expanded row as smooth slide card */}
//                     <tr>
//                       <td colSpan={10} className="p-0">
//                         <div
//                           className={`overflow-hidden transform-gpu transition-transform duration-300 origin-top ${
//                             isExpanded ? "scale-y-100 p-4" : "scale-y-0 p-0"
//                           }`}
//                         >
//                           <div className="bg-white rounded-xl shadow p-4 border border-gray-100">
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm">
//                               <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-500" /><span><strong>Open:</strong> Rs. {formatNumber(data.open)}</span></div>
//                               <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-green-600" /><span><strong>High:</strong> Rs. {formatNumber(data.high)}</span></div>
//                               <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-red-600" /><span><strong>Low:</strong> Rs. {formatNumber(data.low)}</span></div>
//                               <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-600" /><span><strong>Volume:</strong> {formatNumber(data.volume, 0)}</span></div>
//                               <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-500" /><span><strong>PE Ratio:</strong> {formatNumber(data.peRatio)}</span></div>
//                               <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-600" /><span><strong>52W High:</strong> Rs. {formatNumber(data.high52Week)}</span></div>
//                               <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4 text-indigo-600" /><span><strong>52W Low:</strong> Rs. {formatNumber(data.low52Week)}</span></div>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">No holdings yet for this portfolio.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default HoldingsTable;


// import React, { useState } from "react";
// import { Info, BarChart2 } from "lucide-react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const [expandedSymbol, setExpandedSymbol] = useState(null);

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   const toggleExpand = (symbol) => {
//     setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
//   };

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 relative">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>

//         {/* Info Icon */}
//         <div className="relative group">
//           <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
//           <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
//             Click stock symbol to see more info
//           </span>
//         </div>
//       </div>

//       <div className="overflow-x-auto max-h-[600px] rounded-lg relative">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">Avg. Price (After Tax)</th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700 relative">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 const isExpanded = expandedSymbol === symbol;

//                 return (
//                   <React.Fragment key={symbol}>
//                     {/* Main Row */}
//                     <tr
//                       className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
//                       onClick={() => toggleExpand(symbol)}
//                     >
//                       <td className="p-3 font-medium text-gray-800">
//                         <div className="flex flex-col">
//                           <span className="underline">{symbol}</span>
//                           <span className="text-xs text-gray-500">{data.name || ""}</span>
//                         </div>
//                       </td>

//                       <td className="p-3 text-gray-600">{data.industry || "—"}</td>

//                       <td className="p-3 text-right text-gray-800">{quantity.toLocaleString("en-IN")}</td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(avgPrice)}</td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentPrice)}</td>

//                       <td className="p-3 text-center">
//                         {data.changeValue != null ? (
//                           <div
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                               ${
//                                 data.changeValue > 0
//                                   ? "bg-green-50 text-green-700"
//                                   : data.changeValue < 0
//                                   ? "bg-red-50 text-red-700"
//                                   : "bg-gray-50 text-gray-600"
//                               }`}
//                           >
//                             <span>{data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}</span>
//                             <span>
//                               {Math.abs(data.changeValue).toFixed(2)}{" "}
//                               <span className="text-[10px] opacity-70">
//                                 ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                               </span>
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-gray-400">—</span>
//                         )}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(totalCost)}</td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentValue)}</td>

//                       <td className={`p-3 text-right font-semibold ${gainLoss >= 0 ? "text-green-600" : "text-red-600"}`}>
//                         Rs. {formatNumber(gainLoss)}
//                       </td>

//                       <td className={`p-3 text-right font-semibold ${returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>
//                         {formatNumber(returnPct, 2)}%
//                       </td>
//                     </tr>

//                     {/* Expanded Row */}
//                     {isExpanded && (
//                       <tr className="bg-indigo-50/30 transition-all duration-300 ease-in-out">
//                         <td colSpan={10} className="p-0 relative">
//                           <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm bg-white border border-gray-100 rounded-xl shadow">
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span><strong>Open:</strong> Rs. {formatNumber(data.open)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-green-600" />
//                               <span><strong>High:</strong> Rs. {formatNumber(data.high)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-red-600" />
//                               <span><strong>Low:</strong> Rs. {formatNumber(data.low)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span><strong>Volume:</strong> {formatNumber(data.volume, 0)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span><strong>PE Ratio:</strong> {formatNumber(data.peRatio)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span><strong>52W High:</strong> Rs. {formatNumber(data.high52Week)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span><strong>52W Low:</strong> Rs. {formatNumber(data.low52Week)}</span>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;

// import React, { useState } from "react";
// import { Info, BarChart2 } from "lucide-react";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const [expandedSymbol, setExpandedSymbol] = useState(null);

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   const toggleExpand = (symbol) => {
//     setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
//   };

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 relative">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>

//         <div className="relative group">
//           <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
//           <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
//             Click stock symbol to see more info
//           </span>
//         </div>
//       </div>

//       <div className="overflow-x-auto max-h-[600px] rounded-lg relative">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">Avg. Price (After Tax)</th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700 relative">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 const isExpanded = expandedSymbol === symbol;

//                 // Detect “XD” or “CD” tags from name, but remove them for display
//                 let name = data.name || "";
//                 const badges = [];
//                 if (name.toUpperCase().includes("XD")) {
//                   badges.push("XD");
//                   name = name.replace(/XD/gi, "").trim();
//                 }
//                 if (name.toUpperCase().includes("CD")) {
//                   badges.push("CD");
//                   name = name.replace(/CD/gi, "").trim();
//                 }

//                 return (
//                   <React.Fragment key={symbol}>
//                     {/* Main Row */}
//                     <tr
//                       className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
//                       onClick={() => toggleExpand(symbol)}
//                     >
//                       <td className="p-3 font-medium text-gray-800">
//                         <div className="flex flex-col">
//                           <div className="flex items-center gap-2">
//                             <span className="underline">{symbol}</span>
//                             {badges.map((badge) => (
//                               <span
//                                 key={badge}
//                                 className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold border ${
//                                   badge === "XD"
//                                     ? "bg-yellow-100 text-yellow-700 border-yellow-200"
//                                     : "bg-blue-100 text-blue-700 border-blue-200"
//                                 }`}
//                               >
//                                 {badge}
//                               </span>
//                             ))}
//                           </div>
//                           <span className="text-xs text-gray-500">{name}</span>
//                         </div>
//                       </td>

//                       <td className="p-3 text-gray-600">{data.industry || "—"}</td>

//                       <td className="p-3 text-right text-gray-800">
//                         {quantity.toLocaleString("en-IN")}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(avgPrice)}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(currentPrice)}
//                       </td>

//                       <td className="p-3 text-center">
//                         {data.changeValue != null ? (
//                           <div
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                               ${
//                                 data.changeValue > 0
//                                   ? "bg-green-50 text-green-700"
//                                   : data.changeValue < 0
//                                   ? "bg-red-50 text-red-700"
//                                   : "bg-gray-50 text-gray-600"
//                               }`}
//                           >
//                             <span>
//                               {data.changeValue > 0
//                                 ? "▲"
//                                 : data.changeValue < 0
//                                 ? "▼"
//                                 : "•"}
//                             </span>
//                             <span>
//                               {Math.abs(data.changeValue).toFixed(2)}{" "}
//                               <span className="text-[10px] opacity-70">
//                                 ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                               </span>
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-gray-400">—</span>
//                         )}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(totalCost)}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(currentValue)}
//                       </td>

//                       <td
//                         className={`p-3 text-right font-semibold ${
//                           gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                         }`}
//                       >
//                         Rs. {formatNumber(gainLoss)}
//                       </td>

//                       <td
//                         className={`p-3 text-right font-semibold ${
//                           returnPct >= 0 ? "text-green-600" : "text-red-600"
//                         }`}
//                       >
//                         {formatNumber(returnPct, 2)}%
//                       </td>
//                     </tr>

//                     {/* Expanded Row */}
//                     {isExpanded && (
//                       <tr className="bg-indigo-50/30 transition-all duration-300 ease-in-out">
//                         <td colSpan={10} className="p-0 relative">
//                           <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm bg-white border border-gray-100 rounded-xl shadow">
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span>
//                                 <strong>Open:</strong> Rs. {formatNumber(data.open)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-green-600" />
//                               <span>
//                                 <strong>High:</strong> Rs. {formatNumber(data.high)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-red-600" />
//                               <span>
//                                 <strong>Low:</strong> Rs. {formatNumber(data.low)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span>
//                                 <strong>Volume:</strong> {formatNumber(data.volume, 0)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span>
//                                 <strong>PE Ratio:</strong> {formatNumber(data.peRatio)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span>
//                                 <strong>52W High:</strong> Rs.{" "}
//                                 {formatNumber(data.high52Week)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span>
//                                 <strong>52W Low:</strong> Rs.{" "}
//                                 {formatNumber(data.low52Week)}
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;

// import React, { useState, useEffect } from "react";
// import { Info, BarChart2 } from "lucide-react";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// const HoldingsTable = ({ holdings = [], stockData = {} }) => {
//   const [expandedSymbol, setExpandedSymbol] = useState(null);
//   const [firebaseData, setFirebaseData] = useState({});

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   const toggleExpand = (symbol) => {
//     setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
//   };

//   // ✅ Fetch name/industry from Firebase or API
//   useEffect(() => {
//     const fetchData = async () => {
//       const newData = {};
//       await Promise.all(
//         holdings.map(async (h) => {
//           const symbol = h.symbol;
//           if (!symbol) return;

//           const ref = doc(db, "globalStocks", symbol);
//           const snap = await getDoc(ref);

//           if (snap.exists()) {
//             const data = snap.data();
//             newData[symbol] = {
//               name: data.name || symbol,
//               industry: data.industry || "—",
//             };
//           } else {
//             // Fetch from API if not in Firebase
//             try {
//               const res = await fetch(
//                 `https://psx-api-zxcv.onrender.com/api/stock-info/${symbol}`
//               );
//               if (!res.ok) return;

//               const apiData = await res.json();
//               if (apiData && apiData.ticker) {
//                 const name = apiData.name || symbol;
//                 const industry = apiData.industry
//                   ? apiData.industry
//                       .split(" ")
//                       .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
//                       .join(" ")
//                   : "—";

//                 // Save to Firebase for future use
//                 await setDoc(ref, { name, industry }, { merge: true });

//                 newData[symbol] = { name, industry };
//               }
//             } catch (err) {
//               console.error(`Error fetching ${symbol} from API:`, err);
//             }
//           }
//         })
//       );
//       setFirebaseData((prev) => ({ ...prev, ...newData }));
//     };

//     fetchData();
//   }, [holdings]);

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 relative">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>
//         <div className="relative group">
//           <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
//           <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
//             Click stock symbol to see more info
//           </span>
//         </div>
//       </div>

//       <div className="overflow-x-auto max-h-[600px] rounded-lg relative">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">Avg. Price (After Tax)</th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700 relative">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const fbData = firebaseData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 const isExpanded = expandedSymbol === symbol;

//                 // Use Firebase/API name & industry
//                 let name = fbData.name || data.name || "";
//                 const industry = fbData.industry || data.industry || "—";

//                 const badges = [];
//                 if (name.toUpperCase().includes("XD")) {
//                   badges.push("XD");
//                   name = name.replace(/XD/gi, "").trim();
//                 }
//                 if (name.toUpperCase().includes("CD")) {
//                   badges.push("CD");
//                   name = name.replace(/CD/gi, "").trim();
//                 }

//                 return (
//                   <React.Fragment key={symbol}>
//                     {/* Main Row */}
//                     <tr
//                       className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
//                       onClick={() => toggleExpand(symbol)}
//                     >
//                       <td className="p-3 font-medium text-gray-800">
//                         <div className="flex flex-col">
//                           <div className="flex items-center gap-2">
//                             <span className="underline">{symbol}</span>
//                             {badges.map((badge) => (
//                               <span
//                                 key={badge}
//                                 className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold border ${
//                                   badge === "XD"
//                                     ? "bg-yellow-100 text-yellow-700 border-yellow-200"
//                                     : "bg-blue-100 text-blue-700 border-blue-200"
//                                 }`}
//                               >
//                                 {badge}
//                               </span>
//                             ))}
//                           </div>
//                           <span className="text-xs text-gray-500">{name}</span>
//                         </div>
//                       </td>

//                       <td className="p-3 text-gray-600">{industry}</td>

//                       <td className="p-3 text-right text-gray-800">
//                         {quantity.toLocaleString("en-IN")}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(avgPrice)}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(currentPrice)}
//                       </td>

//                       <td className="p-3 text-center">
//                         {data.changeValue != null ? (
//                           <div
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                               ${
//                                 data.changeValue > 0
//                                   ? "bg-green-50 text-green-700"
//                                   : data.changeValue < 0
//                                   ? "bg-red-50 text-red-700"
//                                   : "bg-gray-50 text-gray-600"
//                               }`}
//                           >
//                             <span>
//                               {data.changeValue > 0
//                                 ? "▲"
//                                 : data.changeValue < 0
//                                 ? "▼"
//                                 : "•"}
//                             </span>
//                             <span>
//                               {Math.abs(data.changeValue).toFixed(2)}{" "}
//                               <span className="text-[10px] opacity-70">
//                                 ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                               </span>
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-gray-400">—</span>
//                         )}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(totalCost)}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">
//                         Rs. {formatNumber(currentValue)}
//                       </td>

//                       <td
//                         className={`p-3 text-right font-semibold ${
//                           gainLoss >= 0 ? "text-green-600" : "text-red-600"
//                         }`}
//                       >
//                         Rs. {formatNumber(gainLoss)}
//                       </td>

//                       <td
//                         className={`p-3 text-right font-semibold ${
//                           returnPct >= 0 ? "text-green-600" : "text-red-600"
//                         }`}
//                       >
//                         {formatNumber(returnPct, 2)}%
//                       </td>
//                     </tr>

//                     {/* Expanded Row */}
//                     {isExpanded && (
//                       <tr className="bg-indigo-50/30 transition-all duration-300 ease-in-out">
//                         <td colSpan={10} className="p-0 relative">
//                           <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm bg-white border border-gray-100 rounded-xl shadow">
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span>
//                                 <strong>Open:</strong> Rs. {formatNumber(data.open)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-green-600" />
//                               <span>
//                                 <strong>High:</strong> Rs. {formatNumber(data.high)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-red-600" />
//                               <span>
//                                 <strong>Low:</strong> Rs. {formatNumber(data.low)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span>
//                                 <strong>Volume:</strong> {formatNumber(data.volume, 0)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span>
//                                 <strong>PE Ratio:</strong> {formatNumber(data.peRatio)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span>
//                                 <strong>52W High:</strong> Rs. {formatNumber(data.high52Week)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span>
//                                 <strong>52W Low:</strong> Rs. {formatNumber(data.low52Week)}
//                               </span>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;

// import React, { useState, useEffect } from "react";
// import { Info, BarChart2, RefreshCw } from "lucide-react";
// import { db } from "../../firebase/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// const HoldingsTable = ({ holdings = [], stockData = {}, manualRefresh }) => {
//   const [expandedSymbol, setExpandedSymbol] = useState(null);
//   const [firebaseData, setFirebaseData] = useState({});

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });

//   const toggleExpand = (symbol) => {
//     setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
//   };

//   // Fetch name/industry from Firebase or API
//   useEffect(() => {
//     const fetchData = async () => {
//       const newData = {};
//       await Promise.all(
//         holdings.map(async (h) => {
//           const symbol = h.symbol;
//           if (!symbol) return;

//           const ref = doc(db, "globalStocks", symbol);
//           const snap = await getDoc(ref);

//           if (snap.exists()) {
//             const data = snap.data();
//             newData[symbol] = { name: data.name || symbol, industry: data.industry || "—" };
//           } else {
//             try {
//               const res = await fetch(
//                 `https://psx-api-zxcv.onrender.com/api/stock-info/${symbol}`
//               );
//               if (!res.ok) return;

//               const apiData = await res.json();
//               if (apiData && apiData.ticker) {
//                 const name = apiData.name || symbol;
//                 const industry = apiData.industry
//                   ? apiData.industry
//                       .split(" ")
//                       .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
//                       .join(" ")
//                   : "—";

//                 await setDoc(ref, { name, industry }, { merge: true });
//                 newData[symbol] = { name, industry };
//               }
//             } catch (err) {
//               console.error(`Error fetching ${symbol} from API:`, err);
//             }
//           }
//         })
//       );
//       setFirebaseData((prev) => ({ ...prev, ...newData }));
//     };

//     fetchData();
//   }, [holdings]);

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 relative">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Current Holdings
//         </h2>
//         <div className="flex items-center gap-4">
//           <div className="relative group">
//             <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
//             <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
//               Click stock symbol to see more info
//             </span>
//           </div>
//           {manualRefresh && (
//             <button
//               onClick={manualRefresh}
//               className="p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition"
//               title="Refresh Stock Data"
//             >
//               <RefreshCw className="w-5 h-5" />
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="overflow-x-auto max-h-[600px] rounded-lg relative">
//         <table className="min-w-full text-sm">
//           <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
//             <tr>
//               <th className="p-3 text-left font-semibold">Stock</th>
//               <th className="p-3 text-left font-semibold">Industry</th>
//               <th className="p-3 text-right font-semibold">Quantity</th>
//               <th className="p-3 text-right font-semibold">Avg. Price (After Tax)</th>
//               <th className="p-3 text-right font-semibold">Current Price</th>
//               <th className="p-3 text-center font-semibold">Change</th>
//               <th className="p-3 text-right font-semibold">Total Cost</th>
//               <th className="p-3 text-right font-semibold">Current Value</th>
//               <th className="p-3 text-right font-semibold">Gain/Loss</th>
//               <th className="p-3 text-right font-semibold">Return %</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100 text-gray-700 relative">
//             {holdings.length > 0 ? (
//               holdings.map((h) => {
//                 const symbol = h.symbol;
//                 const data = stockData[symbol] || {};
//                 const fbData = firebaseData[symbol] || {};
//                 const currentPrice = Number(data.currentPrice) || 0;
//                 const quantity = Number(h.quantity) || 0;
//                 const totalCost = Number(h.totalCost) || 0;

//                 const avgPrice = quantity > 0 ? totalCost / quantity : 0;
//                 const currentValue = quantity * currentPrice;
//                 const gainLoss = currentValue - totalCost;
//                 const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

//                 const isExpanded = expandedSymbol === symbol;
//                 let name = fbData.name || data.name || "";
//                 const industry = fbData.industry || data.industry || "—";

//                 const badges = [];
//                 if (name.toUpperCase().includes("XD")) {
//                   badges.push("XD");
//                   name = name.replace(/XD/gi, "").trim();
//                 }
//                 if (name.toUpperCase().includes("CD")) {
//                   badges.push("CD");
//                   name = name.replace(/CD/gi, "").trim();
//                 }

//                 return (
//                   <React.Fragment key={symbol}>
//                     <tr
//                       className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
//                       onClick={() => toggleExpand(symbol)}
//                     >
//                       <td className="p-3 font-medium text-gray-800">
//                         <div className="flex flex-col">
//                           <div className="flex items-center gap-2">
//                             <span className="underline">{symbol}</span>
//                             {badges.map((badge) => (
//                               <span
//                                 key={badge}
//                                 className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold border ${
//                                   badge === "XD"
//                                     ? "bg-yellow-100 text-yellow-700 border-yellow-200"
//                                     : "bg-blue-100 text-blue-700 border-blue-200"
//                                 }`}
//                               >
//                                 {badge}
//                               </span>
//                             ))}
//                           </div>
//                           <span className="text-xs text-gray-500">{name}</span>
//                         </div>
//                       </td>

//                       <td className="p-3 text-gray-600">{industry}</td>
//                       <td className="p-3 text-right text-gray-800">{quantity.toLocaleString("en-IN")}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(avgPrice)}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentPrice)}</td>

//                       <td className="p-3 text-center">
//                         {data.changeValue != null ? (
//                           <div
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
//                               ${
//                                 data.changeValue > 0
//                                   ? "bg-green-50 text-green-700"
//                                   : data.changeValue < 0
//                                   ? "bg-red-50 text-red-700"
//                                   : "bg-gray-50 text-gray-600"
//                               }`}
//                           >
//                             <span>{data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}</span>
//                             <span>
//                               {Math.abs(data.changeValue).toFixed(2)}{" "}
//                               <span className="text-[10px] opacity-70">
//                                 ({data.changePercent?.replace(/[()]/g, "") || "0%"})
//                               </span>
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-gray-400">—</span>
//                         )}
//                       </td>

//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(totalCost)}</td>
//                       <td className="p-3 text-right text-gray-700">Rs. {formatNumber(currentValue)}</td>
//                       <td className={`p-3 text-right font-semibold ${gainLoss >= 0 ? "text-green-600" : "text-red-600"}`}>
//                         Rs. {formatNumber(gainLoss)}
//                       </td>
//                       <td className={`p-3 text-right font-semibold ${returnPct >= 0 ? "text-green-600" : "text-red-600"}`}>
//                         {formatNumber(returnPct, 2)}%
//                       </td>
//                     </tr>

//                     {isExpanded && (
//                       <tr className="bg-indigo-50/30 transition-all duration-300 ease-in-out">
//                         <td colSpan={10} className="p-0 relative">
//                           <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm bg-white border border-gray-100 rounded-xl shadow">
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span><strong>Open:</strong> Rs. {formatNumber(data.open)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-green-600" />
//                               <span><strong>High:</strong> Rs. {formatNumber(data.high)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-red-600" />
//                               <span><strong>Low:</strong> Rs. {formatNumber(data.low)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span><strong>Volume:</strong> {formatNumber(data.volume, 0)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-500" />
//                               <span><strong>PE Ratio:</strong> {formatNumber(data.peRatio)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span><strong>52W High:</strong> Rs. {formatNumber(data.high52Week)}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <BarChart2 className="w-4 h-4 text-indigo-600" />
//                               <span><strong>52W Low:</strong> Rs. {formatNumber(data.low52Week)}</span>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="p-6 text-gray-500 text-center" colSpan="10">
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

// export default HoldingsTable;

import React, { useState, useEffect } from "react";
import { Info, BarChart2, RefreshCw } from "lucide-react";
import { db } from "../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const HoldingsTable = ({ holdings = [], stockData = {}, manualRefresh }) => {
  const [expandedSymbol, setExpandedSymbol] = useState(null);
  const [firebaseData, setFirebaseData] = useState({});

  const formatNumber = (num, decimals = 2) =>
    num?.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  const toggleExpand = (symbol) => {
    setExpandedSymbol(expandedSymbol === symbol ? null : symbol);
  };

  // Fetch name/industry from Firebase or API
  useEffect(() => {
    const fetchData = async () => {
      const newData = {};
      await Promise.all(
        holdings.map(async (h) => {
          const symbol = h.symbol;
          if (!symbol) return;

          const ref = doc(db, "globalStocks", symbol);
          const snap = await getDoc(ref);

          if (snap.exists()) {
            const data = snap.data();
            newData[symbol] = { name: data.name || symbol, industry: data.industry || "—" };
          } else {
            try {
              const res = await fetch(
                `https://psx-api-zxcv.onrender.com/api/stock-info/${symbol}`
              );
              if (!res.ok) return;

              const apiData = await res.json();
              if (apiData && apiData.ticker) {
                const name = apiData.name || symbol;
                const industry = apiData.industry
                  ? apiData.industry
                      .split(" ")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                      .join(" ")
                  : "—";

                await setDoc(ref, { name, industry }, { merge: true });
                newData[symbol] = { name, industry };
              }
            } catch (err) {
              console.error(`Error fetching ${symbol} from API:`, err);
            }
          }
        })
      );
      setFirebaseData((prev) => ({ ...prev, ...newData }));
    };

    fetchData();
  }, [holdings]);

  // FILTER OUT ZERO-QUANTITY HOLDINGS
  const activeHoldings = holdings.filter((h) => Number(h.quantity) > 0);

  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Current Holdings
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Info className="w-5 h-5 text-indigo-600 cursor-pointer" />
            <span className="absolute -top-8 right-0 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap">
              Click stock symbol to see more info
            </span>
          </div>
          {manualRefresh && (
            <button
              onClick={manualRefresh}
              className="p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition"
              title="Refresh Stock Data"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto max-h-[600px] rounded-lg relative">
        <table className="min-w-full text-sm">
          <thead className="sticky top-0 z-10 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider">
            <tr>
              <th className="p-3 text-left font-semibold">Stock</th>
              <th className="p-3 text-left font-semibold">Industry</th>
              <th className="p-3 text-right font-semibold">Quantity</th>
              <th className="p-3 text-right font-semibold">Avg. Price (After Tax)</th>
              <th className="p-3 text-right font-semibold">Current Price</th>
              <th className="p-3 text-center font-semibold">Change</th>
              <th className="p-3 text-right font-semibold">Total Cost</th>
              <th className="p-3 text-right font-semibold">Current Value</th>
              <th className="p-3 text-right font-semibold">Gain/Loss</th>
              <th className="p-3 text-right font-semibold">Return %</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-gray-700 relative">
            {activeHoldings.length > 0 ? (
              activeHoldings.map((h) => {
                const symbol = h.symbol;
                const data = stockData[symbol] || {};
                const fbData = firebaseData[symbol] || {};
                const currentPrice = Number(data.currentPrice) || 0;
                const quantity = Number(h.quantity) || 0;
                const totalCost = Number(h.totalCost) || 0;

                const avgPrice = quantity > 0 ? totalCost / quantity : 0;
                const currentValue = quantity * currentPrice;
                const gainLoss = currentValue - totalCost;
                const returnPct = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

                const isExpanded = expandedSymbol === symbol;
                let name = fbData.name || data.name || "";
                const industry = fbData.industry || data.industry || "—";

                const badges = [];
                if (name.toUpperCase().includes("XD")) {
                  badges.push("XD");
                  name = name.replace(/XD/gi, "").trim();
                }
                if (name.toUpperCase().includes("CD")) {
                  badges.push("CD");
                  name = name.replace(/CD/gi, "").trim();
                }

                return (
                  <React.Fragment key={symbol}>
                    <tr
                      className="hover:bg-indigo-50/50 transition-colors duration-200 cursor-pointer"
                      onClick={() => toggleExpand(symbol)}
                    >
                      <td className="p-3 font-medium text-gray-800">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="underline">{symbol}</span>
                            {badges.map((badge) => (
                              <span
                                key={badge}
                                className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold border ${
                                  badge === "XD"
                                    ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                    : "bg-blue-100 text-blue-700 border-blue-200"
                                }`}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{name}</span>
                        </div>
                      </td>

                      <td className="p-3 text-gray-600">{industry}</td>
                      <td className="p-3 text-right text-gray-800">
                        {quantity.toLocaleString("en-IN")}
                      </td>
                      <td className="p-3 text-right text-gray-700">
                        Rs. {formatNumber(avgPrice)}
                      </td>
                      <td className="p-3 text-right text-gray-700">
                        Rs. {formatNumber(currentPrice)}
                      </td>

                      <td className="p-3 text-center">
                        {data.changeValue != null ? (
                          <div
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                              ${
                                data.changeValue > 0
                                  ? "bg-green-50 text-green-700"
                                  : data.changeValue < 0
                                  ? "bg-red-50 text-red-700"
                                  : "bg-gray-50 text-gray-600"
                              }`}
                          >
                            <span>{data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}</span>
                            <span>
                              {Math.abs(data.changeValue).toFixed(2)}{" "}
                              <span className="text-[10px] opacity-70">
                                ({data.changePercent?.replace(/[()]/g, "") || "0%"})
                              </span>
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>

                      <td className="p-3 text-right text-gray-700">
                        Rs. {formatNumber(totalCost)}
                      </td>
                      <td className="p-3 text-right text-gray-700">
                        Rs. {formatNumber(currentValue)}
                      </td>
                      <td
                        className={`p-3 text-right font-semibold ${
                          gainLoss >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        Rs. {formatNumber(gainLoss)}
                      </td>
                      <td
                        className={`p-3 text-right font-semibold ${
                          returnPct >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {formatNumber(returnPct, 2)}%
                      </td>
                    </tr>

                    {isExpanded && (
                      <tr className="bg-indigo-50/30 transition-all duration-300 ease-in-out">
                        <td colSpan={10} className="p-0 relative">
                          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm bg-white border border-gray-100 rounded-xl shadow">
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-4 h-4 text-indigo-500" />
                              <span>
                                <strong>Open:</strong> Rs. {formatNumber(data.open)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-4 h-4 text-green-600" />
                              <span>
                                <strong>High:</strong> Rs. {formatNumber(data.high)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-4 h-4 text-red-600" />
                              <span>
                                <strong>Low:</strong> Rs. {formatNumber(data.low)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-4 h-4 text-indigo-600" />
                              <span>
                                <strong>Volume:</strong> {formatNumber(data.volume, 0)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-4 h-4 text-indigo-500" />
                              <span>
                                <strong>PE Ratio:</strong> {formatNumber(data.peRatio)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-4 h-4 text-indigo-600" />
                              <span>
                                <strong>52W High:</strong> Rs. {formatNumber(data.high52Week)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart2 className="w-4 h-4 text-indigo-600" />
                              <span>
                                <strong>52W Low:</strong> Rs. {formatNumber(data.low52Week)}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td className="p-6 text-gray-500 text-center" colSpan="10">
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

export default HoldingsTable;
