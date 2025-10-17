import React, { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const DividendBarChart = ({ holdings, transactions, selectedPortfolio }) => {
  // Prepare dividend data per stock
  const data = useMemo(() => {
    const map = {};
    holdings.forEach((h) => {
      map[h.symbol] = 0; // default 0 even if no dividends
    });

    transactions
      .filter((tx) => tx.portfolio === selectedPortfolio)
      .forEach((tx) => {
        const type = (tx.type || "").toLowerCase();
        if (type === "dividend") {
          const qty = Number(tx.quantity) || 0;
          const price = Number(tx.price) || 0;
          map[tx.symbol] = (map[tx.symbol] || 0) + qty * price;
        }
      });

    return Object.entries(map).map(([symbol, dividend]) => ({
      symbol,
      dividend,
    }));
  }, [holdings, transactions, selectedPortfolio]);

  if (!data.length) return <p className="text-gray-500 text-center">No dividend data to display</p>;

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-medium mb-4">Dividends per Stock</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" />
          <YAxis />
          <Tooltip formatter={(value) => `Rs. ${value.toLocaleString("en-IN")}`} />
          <Legend />
          <Bar dataKey="dividend" fill="#10b981" name="Dividend (Rs.)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DividendBarChart;
