// import React, { useMemo } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import dayjs from "dayjs";

// const InvestmentValueAreaChart = ({
//   transactions,
//   stockData,
//   selectedPortfolio,
// }) => {
//   const chartData = useMemo(() => {
//     if (!transactions?.length) return [];

//     // 🔹 Filter and sort transactions
//     const filtered = transactions
//       .filter((tx) => tx.portfolio === selectedPortfolio)
//       .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

//     if (!filtered.length) return [];

//     // 🔹 Group transactions by month
//     const txByMonth = {};
//     filtered.forEach((tx) => {
//       const monthKey = dayjs(tx.date).format("YYYY-MM");
//       if (!txByMonth[monthKey]) txByMonth[monthKey] = [];
//       txByMonth[monthKey].push(tx);
//     });

//     // 🔹 Simulate portfolio month by month
//     let holdings = {};
//     let cumulativeInvested = 0;
//     const sortedMonths = Object.keys(txByMonth).sort();

//     const monthlyData = sortedMonths
//       .map((month) => {
//         const monthTx = txByMonth[month];
//         let monthHadInvestment = false;

//         monthTx.forEach((tx) => {
//           const symbol = tx.symbol?.trim();
//           const qty = parseFloat(tx.quantity) || 0;
//           const price = parseFloat(tx.price) || 0;
//           const type = tx.type?.toLowerCase();

//           if (type === "buy" || type === "sell") monthHadInvestment = true;

//           if (!symbol) return;

//           if (type === "buy") {
//             cumulativeInvested += qty * price;
//             holdings[symbol] = (holdings[symbol] || 0) + qty;
//           } else if (type === "sell") {
//             holdings[symbol] = (holdings[symbol] || 0) - qty;
//             if (holdings[symbol] < 0) holdings[symbol] = 0;
//           }
//         });

//         // Skip months with no buy/sell (only dividend)
//         if (!monthHadInvestment) return null;

//         let totalValue = 0;
//         Object.entries(holdings).forEach(([symbol, qty]) => {
//           const price =
//             parseFloat(stockData?.[symbol]?.currentPrice) ||
//             parseFloat(stockData?.[symbol]?.closingPrice) ||
//             0;
//           totalValue += qty * price;
//         });

//         return {
//           month: dayjs(month).format("MMM YYYY"),
//           "Cumulative Invested": cumulativeInvested,
//           "Portfolio Value": totalValue,
//         };
//       })
//       .filter(Boolean); // remove null months

//     console.log("📈 Portfolio Growth Data:", monthlyData);
//     return monthlyData;
//   }, [transactions, selectedPortfolio, stockData]);

//   // 🔹 Compact number formatter (Rs 200k, Rs 1.2M, etc.)
//   const formatRs = (val) => {
//     if (val >= 1_000_000_000) return `Rs ${(val / 1_000_000_000).toFixed(1)}B`;
//     if (val >= 1_000_000) return `Rs ${(val / 1_000_000).toFixed(1)}M`;
//     if (val >= 1_000) return `Rs ${(val / 1_000).toFixed(0)}k`;
//     return `Rs ${val}`;
//   };

//   if (!chartData.length)
//     return (
//       <p className="text-gray-500 text-center">
//         No investment history to display
//       </p>
//     );

//   return (
//     <div className="bg-white rounded-2xl shadow p-6">
//       <h3 className="text-lg font-medium mb-4">
//         Portfolio Growth (Investment vs Value)
//       </h3>

//       <ResponsiveContainer width="100%" height={320}>
//         <AreaChart
//           data={chartData}
//           margin={{ top: 10, right: 25, left: 10, bottom: 20 }}
//         >
//           <defs>
//             <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//             </linearGradient>
//             <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
//             </linearGradient>
//           </defs>

//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis tickFormatter={formatRs} />
//           <Tooltip formatter={(val) => formatRs(val)} />
//           <Legend />

//           <Area
//             type="monotone"
//             dataKey="Cumulative Invested"
//             stroke="#6366f1"
//             strokeWidth={2}
//             fillOpacity={1}
//             fill="url(#colorInvested)"
//           />
//           <Area
//             type="monotone"
//             dataKey="Portfolio Value"
//             stroke="#10b981"
//             strokeWidth={2}
//             fillOpacity={1}
//             fill="url(#colorValue)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default InvestmentValueAreaChart;

// import React, { useMemo } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import dayjs from "dayjs";

// const InvestmentValueAreaChart = ({
//   transactions,
//   stockData,
//   selectedPortfolio,
// }) => {
//   const chartData = useMemo(() => {
//     if (!transactions?.length) return [];

//     // 🔹 Filter and sort transactions
//     const filtered = transactions
//       .filter((tx) => tx.portfolio === selectedPortfolio)
//       .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

//     if (!filtered.length) return [];

//     // 🔹 Group transactions by month
//     const txByMonth = {};
//     filtered.forEach((tx) => {
//       const monthKey = dayjs(tx.date).format("YYYY-MM");
//       if (!txByMonth[monthKey]) txByMonth[monthKey] = [];
//       txByMonth[monthKey].push(tx);
//     });

//     // 🔹 Simulate portfolio month by month
//     let holdings = {};
//     let cumulativeInvested = 0;
//     const sortedMonths = Object.keys(txByMonth).sort();

//     let monthsCount = 0; // For avg invested

//     const monthlyData = sortedMonths
//       .map((month) => {
//         const monthTx = txByMonth[month];
//         let monthHadInvestment = false;

//         monthTx.forEach((tx) => {
//           const symbol = tx.symbol?.trim();
//           const qty = parseFloat(tx.quantity) || 0;
//           const price = parseFloat(tx.price) || 0;
//           const type = tx.type?.toLowerCase();

//           if (type === "buy" || type === "sell") monthHadInvestment = true;

//           if (!symbol) return;

//           if (type === "buy") {
//             cumulativeInvested += qty * price;
//             holdings[symbol] = (holdings[symbol] || 0) + qty;
//           } else if (type === "sell") {
//             holdings[symbol] = (holdings[symbol] || 0) - qty;
//             if (holdings[symbol] < 0) holdings[symbol] = 0;
//           }
//         });

//         // Skip months with no buy/sell (only dividend)
//         if (!monthHadInvestment) return null;

//         monthsCount += 1;

//         let totalValue = 0;
//         Object.entries(holdings).forEach(([symbol, qty]) => {
//           const price =
//             parseFloat(stockData?.[symbol]?.currentPrice) ||
//             parseFloat(stockData?.[symbol]?.closingPrice) ||
//             0;
//           totalValue += qty * price;
//         });

//         return {
//           month: dayjs(month).format("MMM YYYY"),
//           "Cumulative Invested": cumulativeInvested,
//           "Portfolio Value": totalValue,
//           "Avg Invested": cumulativeInvested / monthsCount,
//         };
//       })
//       .filter(Boolean); // remove null months

//     console.log("📈 Portfolio Growth Data:", monthlyData);
//     return monthlyData;
//   }, [transactions, selectedPortfolio, stockData]);

//   // 🔹 Compact number formatter (Rs 200k, Rs 1.2M, etc.)
//   const formatRs = (val) => {
//     if (val >= 1_000_000_000) return `Rs ${(val / 1_000_000_000).toFixed(1)}B`;
//     if (val >= 1_000_000) return `Rs ${(val / 1_000_000).toFixed(1)}M`;
//     if (val >= 1_000) return `Rs ${(val / 1_000).toFixed(0)}k`;
//     return `Rs ${val}`;
//   };

//   if (!chartData.length)
//     return (
//       <p className="text-gray-500 text-center">
//         No investment history to display
//       </p>
//     );

//   return (
//     <div className="bg-white rounded-2xl shadow p-6">
//       <h3 className="text-lg font-medium mb-4">
//         Portfolio Growth (Investment vs Value vs Avg Invested)
//       </h3>

//       <ResponsiveContainer width="100%" height={320}>
//         <AreaChart
//           data={chartData}
//           margin={{ top: 10, right: 25, left: 10, bottom: 20 }}
//         >
//           <defs>
//             <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
//             </linearGradient>
//             <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
//             </linearGradient>
//             <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
//             </linearGradient>
//           </defs>

//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis tickFormatter={formatRs} />
//           <Tooltip formatter={(val) => formatRs(val)} />
//           <Legend />

//           <Area
//             type="monotone"
//             dataKey="Cumulative Invested"
//             stroke="#6366f1"
//             strokeWidth={2}
//             fillOpacity={1}
//             fill="url(#colorInvested)"
//           />
//           <Area
//             type="monotone"
//             dataKey="Portfolio Value"
//             stroke="#10b981"
//             strokeWidth={2}
//             fillOpacity={1}
//             fill="url(#colorValue)"
//           />
//           <Area
//             type="monotone"
//             dataKey="Avg Invested"
//             stroke="#f59e0b"
//             strokeWidth={2}
//             fillOpacity={1}
//             fill="url(#colorAvg)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default InvestmentValueAreaChart;


import React, { useMemo } from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import dayjs from "dayjs";

const InvestmentValueAreaChart = ({ transactions, stockData, selectedPortfolio }) => {
  const chartData = useMemo(() => {
    if (!transactions?.length) return [];

    // 🔹 Filter and sort transactions
    const filtered = transactions
      .filter((tx) => tx.portfolio === selectedPortfolio)
      .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

    if (!filtered.length) return [];

    // 🔹 Group transactions by month
    const txByMonth = {};
    filtered.forEach((tx) => {
      const monthKey = dayjs(tx.date).format("YYYY-MM");
      if (!txByMonth[monthKey]) txByMonth[monthKey] = [];
      txByMonth[monthKey].push(tx);
    });

    // 🔹 Simulate portfolio month by month
    let holdings = {};
    let cumulativeInvested = 0;
    const sortedMonths = Object.keys(txByMonth).sort();
    const monthlyData = [];

    let monthCount = 0;
    sortedMonths.forEach((month) => {
      const txsThisMonth = txByMonth[month];

      // Ignore months with only dividend transactions for plotting invested/value
      const hasBuySell = txsThisMonth.some((tx) => ["buy", "sell"].includes(tx.type?.toLowerCase()));
      if (!hasBuySell) return;

      monthCount += 1;

      txsThisMonth.forEach((tx) => {
        const symbol = tx.symbol?.trim();
        const qty = parseFloat(tx.quantity) || 0;
        const price = parseFloat(tx.price) || 0;
        const type = tx.type?.toLowerCase();

        if (!symbol) return;

        if (type === "buy") {
          cumulativeInvested += qty * price;
          holdings[symbol] = (holdings[symbol] || 0) + qty;
        } else if (type === "sell") {
          holdings[symbol] = (holdings[symbol] || 0) - qty;
          if (holdings[symbol] < 0) holdings[symbol] = 0;
        }
      });

      let totalValue = 0;
      Object.entries(holdings).forEach(([symbol, qty]) => {
        const price =
          parseFloat(stockData?.[symbol]?.currentPrice) ||
          parseFloat(stockData?.[symbol]?.closingPrice) ||
          0;
        totalValue += qty * price;
      });

      const avgInvested = monthCount > 0 ? cumulativeInvested / monthCount : 0;

      monthlyData.push({
        month: dayjs(month).format("MMM YYYY"),
        "Cumulative Invested": cumulativeInvested,
        "Portfolio Value": totalValue,
        "Avg Invested": avgInvested,
      });
    });

    console.log("📈 Portfolio Growth Data:", monthlyData);
    return monthlyData;
  }, [transactions, selectedPortfolio, stockData]);

  // 🔹 Compact number formatter (Rs 200k, Rs 1.2M, etc.)
  const formatRs = (val) => {
    if (val >= 1_000_000_000) return `Rs ${(val / 1_000_000_000).toFixed(1)}B`;
    if (val >= 1_000_000) return `Rs ${(val / 1_000_000).toFixed(1)}M`;
    if (val >= 1_000) return `Rs ${(val / 1_000).toFixed(0)}k`;
    return `Rs ${val}`;
  };

  if (!chartData.length)
    return (
      <p className="text-gray-500 text-center">
        No investment history to display
      </p>
    );

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-medium mb-4">
        Portfolio Growth (Investment vs Value)
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 25, left: 10, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatRs} />
          <Tooltip formatter={(val) => formatRs(val)} />
          <Legend />

          <Area
            type="monotone"
            dataKey="Cumulative Invested"
            stroke="#6366f1"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorInvested)"
          />
          <Area
            type="monotone"
            dataKey="Portfolio Value"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
          />

          {/* Line with points for Avg Invested */}
          <Line
            type="monotone"
            dataKey="Avg Invested"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#f59e0b", strokeWidth: 2, fill: "white" }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentValueAreaChart;

