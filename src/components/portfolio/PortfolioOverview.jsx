// import React, { useMemo } from "react";
// import { useAuth } from "../../contexts/authContext";
// import useTransactions from "../home/hooks/useTransactions";
// import useHoldings from "../home/hooks/useHoldings";
// import useStockData from "../home/hooks/useStockData";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   BarChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Bar,
// } from "recharts";

// const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#3b82f6", "#ec4899"];

// const PortfolioOverview = () => {
//   const { currentUser } = useAuth();
//   const { transactions, selectedPortfolio } = useTransactions(currentUser);
//   const holdings = useHoldings(transactions, selectedPortfolio);
//   const { stockData } = useStockData(holdings);

//   // Pie chart: portfolio allocation by stock
//   const pieDataStocks = useMemo(() => {
//     return holdings.map((h) => ({
//       name: h.symbol || "Unknown",
//       value: Number(h.totalCost) || 0,
//     }));
//   }, [holdings]);

//   // Pie chart: portfolio allocation by industry
//   const pieDataIndustry = useMemo(() => {
//     const map = {};
//     holdings.forEach((h) => {
//       const industry = stockData[h.symbol]?.industry || "Unknown";
//       map[industry] = (map[industry] || 0) + Number(h.totalCost || 0);
//     });
//     return Object.entries(map).map(([name, value]) => ({ name, value }));
//   }, [holdings, stockData]);

//   // Bar chart: dividends per stock (show all stocks)
//   const { dividendData, totalDividends } = useMemo(() => {
//     const map = {};
//     holdings.forEach((h) => (map[h.symbol] = 0));

//     let totalDiv = 0;

//     transactions
//       .filter((t) => t.portfolio === selectedPortfolio)
//       .forEach((t) => {
//         const symbol = t.symbol;
//         const type = (t.type || "").toLowerCase();
//         const amount = Number(t.quantity) * Number(t.price) || 0;
//         if (type === "dividend" && map[symbol] !== undefined) {
//           map[symbol] += amount;
//           totalDiv += amount;
//         }
//       });

//     return {
//       dividendData: Object.entries(map).map(([symbol, value]) => ({ name: symbol, value })),
//       totalDividends: totalDiv,
//     };
//   }, [transactions, holdings, selectedPortfolio]);

//   return (
//     <div className="pt-14 px-6 space-y-8">
//       <h2 className="text-3xl font-semibold mb-6 text-gray-800">
//         Portfolio Overview - <span className="text-indigo-600">{selectedPortfolio}</span>
//       </h2>

//       {/* Top Summary Card */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//         <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-center">
//           <span className="text-sm text-gray-500">Total Dividends</span>
//           <span className="text-2xl font-semibold text-amber-600">
//             Rs. {totalDividends.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
//           </span>
//         </div>
//       </div>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Pie Chart: Stocks */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h3 className="text-lg font-medium mb-4">Portfolio Allocation by Stock</h3>
//           {pieDataStocks.length > 0 ? (
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={pieDataStocks}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={100}
//                   label
//                 >
//                   {pieDataStocks.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip formatter={(value) => `Rs. ${value.toLocaleString("en-IN")}`} />
//                 <Legend verticalAlign="bottom" height={36} />
//               </PieChart>
//             </ResponsiveContainer>
//           ) : (
//             <p className="text-gray-500 text-center">No holdings to display</p>
//           )}
//         </div>

//         {/* Pie Chart: Industry */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h3 className="text-lg font-medium mb-4">Portfolio Allocation by Industry</h3>
//           {pieDataIndustry.length > 0 ? (
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={pieDataIndustry}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={100}
//                   label
//                 >
//                   {pieDataIndustry.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip formatter={(value) => `Rs. ${value.toLocaleString("en-IN")}`} />
//                 <Legend verticalAlign="bottom" height={36} />
//               </PieChart>
//             </ResponsiveContainer>
//           ) : (
//             <p className="text-gray-500 text-center">No industry data to display</p>
//           )}
//         </div>

//         {/* Bar Chart: Dividends */}
//         <div className="bg-white rounded-2xl shadow p-6 md:col-span-2">
//           <h3 className="text-lg font-medium mb-4">Dividends by Stock</h3>
//           {dividendData.length > 0 ? (
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={dividendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip formatter={(value) => `Rs. ${value.toLocaleString("en-IN")}`} />
//                 <Bar dataKey="value" fill="#10b981" />
//               </BarChart>
//             </ResponsiveContainer>
//           ) : (
//             <p className="text-gray-500 text-center">No dividend data available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioOverview;

import React, { useMemo } from "react";
import { useAuth } from "../../contexts/authContext";
import useTransactions from "../home/hooks/useTransactions";
import useHoldings from "../home/hooks/useHoldings";
import useStockData from "../home/hooks/useStockData";

import StockAllocationPie from "./StockAllocationPie";
import IndustryAllocationPie from "./IndustryAllocationPie";
import DividendBarChart from "./DividendBarChart";

const PortfolioOverview = () => {
  const { currentUser } = useAuth();
  const { transactions, selectedPortfolio } = useTransactions(currentUser);
  const holdings = useHoldings(transactions, selectedPortfolio);
  const { stockData } = useStockData(holdings);

  // Compute total dividends
  const totalDividends = useMemo(() => {
    return transactions
      .filter((tx) => tx.portfolio === selectedPortfolio && (tx.type || "").toLowerCase() === "dividend")
      .reduce((sum, tx) => sum + (Number(tx.quantity) || 0) * (Number(tx.price) || 0), 0);
  }, [transactions, selectedPortfolio]);

  return (
    <div className="pt-14 px-6 space-y-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Portfolio Overview - <span className="text-indigo-600">{selectedPortfolio}</span>
      </h2>

      {/* Total Dividends Summary Card */}
      <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1v22M5 5l14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Total Dividends</div>
          <div className="text-xl font-semibold text-amber-600">
            Rs. {totalDividends.toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StockAllocationPie holdings={holdings} />
        <IndustryAllocationPie holdings={holdings} stockData={stockData} />
      </div>

      {/* Dividends Bar Chart */}
      <DividendBarChart
        holdings={holdings}
        transactions={transactions}
        selectedPortfolio={selectedPortfolio}
      />
    </div>
  );
};

export default PortfolioOverview;
