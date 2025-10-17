// import React from "react";
// // Example chart imports
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const PortfolioOverview = ({ chartData }) => {
//   return (
//     <div className="space-y-8">
//       {/* Portfolio Overview Title */}
//       <h2 className="text-xl font-semibold text-gray-800">Portfolio Overview</h2>

//       {/* Performance Charts */}
//       <div className="bg-white rounded-2xl shadow p-6">
//         <h3 className="text-lg font-medium mb-4">Portfolio Value Over Time</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={chartData}>
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* You can add more charts or comparison graphs here */}
//     </div>
//   );
// };

// export default PortfolioOverview;

import React from "react";
import { useAuth } from "../../contexts/authContext";
import useTransactions from "../home/hooks/useTransactions";
import useHoldings from "../home/hooks/useHoldings";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from "recharts";

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#3b82f6", "#ec4899"];

const PortfolioOverview = () => {
  const { currentUser } = useAuth();
  const { transactions, selectedPortfolio } = useTransactions(currentUser);
  const holdings = useHoldings(transactions, selectedPortfolio) || [];

  // Prepare pie data safely
  const pieData = holdings
    .filter((h) => h.totalCost > 0)
    .map((h) => ({
      name: h.symbol || "Unknown",
      value: Number(h.totalCost) || 0,
    }));

  // Total cost for percentage labels
  const totalCost = pieData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="pt-14 px-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Portfolio Overview - <span className="text-indigo-600">{selectedPortfolio || "N/A"}</span>
      </h2>

      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-medium mb-4">Portfolio Allocation</h3>

        {pieData.length > 0 ? (
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                paddingAngle={3}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(1)}%`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => {
                  const percent = ((value / totalCost) * 100).toFixed(2);
                  return [`Rs. ${value.toLocaleString("en-IN")} (${percent}%)`, name];
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-center py-10">No holdings to display</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioOverview;
