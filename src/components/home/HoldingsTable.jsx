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


import React from "react";

const HoldingsTable = ({ holdings, currentPrices }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Holdings</h2>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr className="text-gray-700 text-left">
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Avg. Price (After Tax)</th>
            <th className="p-2 border">Current Price</th>
            <th className="p-2 border">Total Cost (After Tax)</th>
            <th className="p-2 border">Current Value</th>
            <th className="p-2 border">Gain/Loss</th>
            <th className="p-2 border">Return %</th>
          </tr>
        </thead>
        <tbody>
          {holdings.length > 0 ? (
            holdings.map((h) => {
              const currentPrice = currentPrices[h.symbol] || 0;
              const avgPrice = h.totalCost / (h.quantity || 1);
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
  );
};

export default HoldingsTable;
