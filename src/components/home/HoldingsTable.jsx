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

import React from "react";

const HoldingsTable = ({ holdings, stockData }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Current Holdings
      </h2>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr className="text-gray-700 text-left">
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Industry</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Avg. Price (After Tax)</th>
            <th className="p-2 border">Current Price</th>
            <th className="p-2 border">Change</th>
            <th className="p-2 border">Total Cost (After Tax)</th>
            <th className="p-2 border">Current Value</th>
            <th className="p-2 border">Gain/Loss</th>
            <th className="p-2 border">Return %</th>
          </tr>
        </thead>
        <tbody>
          {holdings.length > 0 ? (
            holdings.map((h) => {
              const data = stockData[h.symbol] || {};
              const currentPrice = data.currentPrice || 0;
              const avgPrice = h.totalCost / (h.quantity || 1);
              const totalCost = h.totalCost;
              const currentValue = h.quantity * currentPrice;
              const gainLoss = currentValue - totalCost;
              const returnPct = totalCost ? (gainLoss / totalCost) * 100 : 0;

              return (
                <tr key={h.symbol} className="border-t text-gray-700">
                  <td className="p-2 border font-medium">
                    <div className="flex flex-col">
                      <span>{h.symbol}</span>
                      <span className="text-sm text-gray-500">
                        {data.name || ""}
                      </span>
                    </div>
                  </td>
                  <td className="p-2 border">{data.industry || "—"}</td>
                  <td className="p-2 border">{h.quantity.toFixed(0)}</td>
                  <td className="p-2 border">Rs. {avgPrice.toFixed(2)}</td>
                  <td className="p-2 border">
                    Rs. {currentPrice ? currentPrice.toFixed(2) : "—"}
                  </td>

                  {/* ✅ Modern Change column */}
                  <td className="p-2 border text-center">
                    {data.changeValue != null ? (
                      <div
                        className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full text-sm font-medium
                          ${
                            data.changeValue > 0
                              ? "bg-green-100 text-green-700"
                              : data.changeValue < 0
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                      >
                        <span>
                          {data.changeValue > 0 ? "▲" : data.changeValue < 0 ? "▼" : "•"}
                        </span>
                        <span>
                          {Math.abs(data.changeValue).toFixed(2)}{" "}
                          <span className="text-xs opacity-80">
                            ({data.changePercent?.replace(/[()]/g, "") || "0%"})
                          </span>
                        </span>
                      </div>
                    ) : (
                      "—"
                    )}
                  </td>

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
              <td className="p-4 text-gray-500 text-center" colSpan="10">
                No holdings yet for this portfolio.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;
