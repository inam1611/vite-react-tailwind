// import React, { useMemo } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   CartesianGrid,
//   Cell,
// } from "recharts";

// const GainLossBarChart = ({ holdings, stockData }) => {
//   const chartData = useMemo(() => {
//     return holdings.map((h) => {
//       const data = stockData[h.symbol] || {};

//       // ✅ Use correct live data fields and clean numeric conversion
//       const rawPrice =
//         data.currentPrice ??
//         data.closingPrice ??
//         data.lastPrice ??
//         0;

//       const currentPrice =
//         parseFloat(String(rawPrice).replace(/[^\d.-]/g, "")) || 0;

//       const avgCost = Number(h.avgCost) || 0;
//       const quantity = Number(h.quantity) || 0;

//       const gainLoss = (currentPrice - avgCost) * quantity;

//       return {
//         name: h.symbol,
//         gainLoss,
//       };
//     });
//   }, [holdings, stockData]);

//   const total = chartData.reduce((sum, d) => sum + d.gainLoss, 0);

//   if (!chartData.length)
//     return <p className="text-gray-500 text-center">No data to display</p>;

//   return (
//     <div className="bg-white rounded-2xl shadow p-6">
//       <h3 className="text-lg font-medium mb-4">
//         Unrealized Gain/Loss by Stock
//       </h3>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart
//           data={chartData}
//           margin={{ top: 10, right: 20, left: 0, bottom: 30 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" vertical={false} />
//           <XAxis dataKey="name" />
//           <YAxis
//             tickFormatter={(val) =>
//               `Rs. ${val.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
//             }
//           />
//           <Tooltip
//             formatter={(value) =>
//               `Rs. ${Number(value).toLocaleString("en-IN", {
//                 maximumFractionDigits: 2,
//               })}`
//             }
//           />
//           <Legend />
//           <Bar dataKey="gainLoss" name="Unrealized Gain/Loss">
//             {chartData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={entry.gainLoss >= 0 ? "#10b981" : "#ef4444"}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>

//       <p className="text-center mt-4 font-medium">
//         Total Unrealized {total >= 0 ? "Gain" : "Loss"}:{" "}
//         <span
//           className={`${
//             total >= 0 ? "text-green-600" : "text-red-600"
//           } font-semibold`}
//         >
//           Rs. {Math.abs(total).toLocaleString("en-IN", {
//             maximumFractionDigits: 0,
//           })}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default GainLossBarChart;

// import React, { useMemo } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   CartesianGrid,
//   Cell,
// } from "recharts";

// // 🔹 Utility to format numbers compactly (10k, 1.2M, etc.)
// const formatCompact = (num) => {
//   const absVal = Math.abs(num);
//   if (absVal >= 1_000_000) return `Rs ${(num / 1_000_000).toFixed(1)}M`;
//   if (absVal >= 1_000) return `Rs ${(num / 1_000).toFixed(1)}k`;
//   return `Rs ${num.toFixed(0)}`;
// };

// const GainLossBarChart = ({ holdings, stockData }) => {
//   const chartData = useMemo(() => {
//     return holdings.map((h) => {
//       const data = stockData[h.symbol] || {};

//       const rawPrice =
//         data.currentPrice ??
//         data.closingPrice ??
//         data.lastPrice ??
//         0;

//       const currentPrice =
//         parseFloat(String(rawPrice).replace(/[^\d.-]/g, "")) || 0;

//       const avgCost = Number(h.avgCost) || 0;
//       const quantity = Number(h.quantity) || 0;

//       const gainLoss = (currentPrice - avgCost) * quantity;

//       return { name: h.symbol, gainLoss };
//     });
//   }, [holdings, stockData]);

//   const total = chartData.reduce((sum, d) => sum + d.gainLoss, 0);

//   if (!chartData.length)
//     return <p className="text-gray-500 text-center">No data to display</p>;

//   return (
//     <div className="bg-white rounded-2xl shadow p-6">
//       <h3 className="text-lg font-medium mb-4">
//         Unrealized Gain/Loss by Stock
//       </h3>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart
//           data={chartData}
//           margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" vertical={false} />
//           <XAxis dataKey="name" />
//           <YAxis tickFormatter={(val) => formatCompact(val)} width={80} />
//           <Tooltip
//             formatter={(value) =>
//               `Rs ${Number(value).toLocaleString("en-IN", {
//                 maximumFractionDigits: 2,
//               })}`
//             }
//           />
//           <Legend />
//           <Bar dataKey="gainLoss" name="Unrealized Gain/Loss">
//             {chartData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={entry.gainLoss >= 0 ? "#10b981" : "#ef4444"}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>

//       <p className="text-center mt-4 font-medium">
//         Total Unrealized {total >= 0 ? "Gain" : "Loss"}:{" "}
//         <span
//           className={`${
//             total >= 0 ? "text-green-600" : "text-red-600"
//           } font-semibold`}
//         >
//           Rs {Math.abs(total).toLocaleString("en-IN", {
//             maximumFractionDigits: 0,
//           })}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default GainLossBarChart;

// import React, { useMemo } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   CartesianGrid,
//   Cell,
// } from "recharts";

// // 🔹 Compact number formatter (Rs 10k, Rs 2.3M)
// const formatCompact = (num) => {
//   const absVal = Math.abs(num);
//   if (absVal >= 1_000_000_000) return `Rs ${(num / 1_000_000_000).toFixed(1)}B`;
//   if (absVal >= 1_000_000) return `Rs ${(num / 1_000_000).toFixed(1)}M`;
//   if (absVal >= 1_000) return `Rs ${(num / 1_000).toFixed(0)}k`;
//   return `Rs ${num.toFixed(0)}`;
// };

// const GainLossBarChart = ({ holdings, stockData }) => {
//   const chartData = useMemo(() => {
//     if (!holdings?.length || !stockData) return [];

//     return holdings.map((h) => {
//       const data = stockData[h.symbol] || {};
//       const currentPrice =
//         parseFloat(data.currentPrice ?? data.closingPrice ?? 0) || 0;

//       const quantity = Number(h.quantity) || 0;
//       const totalCost = Number(h.totalCost) || Number(h.avgCost) * quantity || 0;
//       const currentValue = quantity * currentPrice;

//       // ✅ Proper Unrealized Gain/Loss
//       const gainLoss = currentValue - totalCost;

//       return {
//         name: h.symbol,
//         gainLoss,
//         currentValue,
//         totalCost,
//       };
//     });
//   }, [holdings, stockData]);

//   const total = chartData.reduce((sum, d) => sum + d.gainLoss, 0);

//   if (!chartData.length)
//     return <p className="text-gray-500 text-center">No data to display</p>;

//   return (
//     <div className="bg-white rounded-2xl shadow p-6">
//       <h3 className="text-lg font-medium mb-4">Unrealized Gain/Loss by Stock</h3>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart
//           data={chartData}
//           margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" vertical={false} />
//           <XAxis dataKey="name" />
//           <YAxis tickFormatter={formatCompact} width={80} />
//           <Tooltip
//             formatter={(value) =>
//               `Rs ${Number(value).toLocaleString("en-IN", {
//                 maximumFractionDigits: 2,
//               })}`
//             }
//           />
//           <Legend />
//           <Bar dataKey="gainLoss" name="Unrealized Gain/Loss">
//             {chartData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={entry.gainLoss >= 0 ? "#10b981" : "#ef4444"}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>

//       <p className="text-center mt-4 font-medium">
//         Total Unrealized {total >= 0 ? "Gain" : "Loss"}:{" "}
//         <span
//           className={`${
//             total >= 0 ? "text-green-600" : "text-red-600"
//           } font-semibold`}
//         >
//           Rs {Math.abs(total).toLocaleString("en-IN", {
//             maximumFractionDigits: 0,
//           })}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default GainLossBarChart;

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts";

// 🔹 Compact number formatter (Rs 10k, Rs 2.3M)
const formatCompact = (num) => {
  const absVal = Math.abs(num);
  if (absVal >= 1_000_000_000) return `Rs ${(num / 1_000_000_000).toFixed(1)}B`;
  if (absVal >= 1_000_000) return `Rs ${(num / 1_000_000).toFixed(1)}M`;
  if (absVal >= 1_000) return `Rs ${(num / 1_000).toFixed(0)}k`;
  return `Rs ${num.toFixed(0)}`;
};

const GainLossBarChart = ({ holdings, stockData }) => {
  const chartData = useMemo(() => {
    if (!holdings?.length || !stockData) return [];

    return holdings.map((h) => {
      const data = stockData[h.symbol] || {};
      const currentPrice =
        parseFloat(data.currentPrice ?? data.closingPrice ?? 0) || 0;

      const quantity = Number(h.quantity) || 0;
      const totalCost = Number(h.totalCost) || Number(h.avgCost) * quantity || 0;
      const currentValue = quantity * currentPrice;

      const gainLoss = currentValue - totalCost;
      const percentReturn = totalCost > 0 ? (gainLoss / totalCost) * 100 : 0;

      return {
        name: h.symbol,
        gainLoss,
        percentReturn,
      };
    });
  }, [holdings, stockData]);

  const total = chartData.reduce((sum, d) => sum + d.gainLoss, 0);

  if (!chartData.length)
    return <p className="text-gray-500 text-center">No data to display</p>;

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-medium mb-4">
        Unrealized Gain/Loss by Stock
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 10, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatCompact} width={80} />
          <Tooltip
            formatter={(value, name, props) => {
              const { payload } = props;
              const percent = payload.percentReturn?.toFixed(1);
              const sign = percent >= 0 ? "+" : "–";
              return [
                `Rs ${Number(value).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })} (${sign}${Math.abs(percent)}%)`,
                "Unrealized Gain/Loss",
              ];
            }}
          />
          <Legend />
          <Bar dataKey="gainLoss" name="Unrealized Gain/Loss">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.gainLoss >= 0 ? "#10b981" : "#ef4444"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="text-center mt-4 font-medium">
        Total Unrealized {total >= 0 ? "Gain" : "Loss"}:{" "}
        <span
          className={`${
            total >= 0 ? "text-green-600" : "text-red-600"
          } font-semibold`}
        >
          Rs {Math.abs(total).toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}
        </span>
      </p>
    </div>
  );
};

export default GainLossBarChart;
