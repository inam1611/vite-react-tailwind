// import React, { useMemo } from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#3b82f6", "#ec4899"];

// const IndustryAllocationPie = ({ holdings, stockData }) => {
//   const pieData = useMemo(() => {
//     const map = {};
//     holdings.forEach((h) => {
//       const industry = stockData[h.symbol]?.industry || "Unknown";
//       map[industry] = (map[industry] || 0) + Number(h.totalCost || 0);
//     });
//     return Object.entries(map).map(([name, value]) => ({ name, value }));
//   }, [holdings, stockData]);

//   if (!pieData.length) return <p className="text-gray-500 text-center">No industry data to display</p>;

//   return (
//     <div className="bg-white rounded-2xl shadow p-6">
//       <h3 className="text-lg font-medium mb-4">Portfolio Allocation by Industry</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
//             {pieData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip formatter={(value) => `Rs. ${value.toLocaleString("en-IN")}`} />
//           <Legend verticalAlign="bottom" height={36} />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default IndustryAllocationPie;

import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
  "#4f46e5",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#3b82f6",
  "#ec4899",
];

const IndustryAllocationPie = ({ holdings, stockData }) => {
  const pieData = useMemo(() => {
    const map = {};
    holdings.forEach((h) => {
      const industry = stockData[h.symbol]?.industry || "Unknown";
      map[industry] = (map[industry] || 0) + Number(h.totalCost || 0);
    });

    const total = Object.values(map).reduce((sum, v) => sum + v, 0);

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
      percentage: total > 0 ? (value / total) * 100 : 0,
    }));
  }, [holdings, stockData]);

  if (!pieData.length)
    return <p className="text-gray-500 text-center">No industry data to display</p>;

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-medium mb-4">Portfolio Allocation by Industry</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="percentage"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value, name, { payload }) =>
              [`Rs. ${payload.value.toLocaleString("en-IN")}`, name]
            }
          />

          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndustryAllocationPie;
