// import { useMemo } from "react";

// export default function useSummary(holdings, stockData) {
//   return useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     holdings.forEach((h) => {
//       const current = stockData[h.symbol]?.currentPrice || 0;
//       const currentValue = h.quantity * current;
//       const gainLoss = currentValue - h.totalCost;
//       totalInvested += h.totalCost;
//       totalGainLoss += gainLoss;
//     });

//     const returnPercent = totalInvested
//       ? (totalGainLoss / totalInvested) * 100
//       : 0;

//     return {
//       totalInvested,
//       totalValue: totalInvested + totalGainLoss,
//       gainLoss: totalGainLoss,
//       returnPercent,
//     };
//   }, [holdings, stockData]);
// }

import { useMemo } from "react";

export default function useSummary(holdings, stockData) {
  return useMemo(() => {
    let totalInvested = 0;
    let totalGainLoss = 0;

    // Today's performance
    let todayGainLoss = 0;
    let totalOpenValue = 0;

    holdings.forEach((h) => {
      const data = stockData[h.symbol] || {};
      const current = Number(data.currentPrice) || 0;
      const open = Number(data.open) || 0; // Ensure open is present
      const quantity = Number(h.quantity) || 0;
      const totalCost = Number(h.totalCost) || 0;

      // Calculate total gain/loss relative to purchase cost
      const currentValue = quantity * current;
      const gainLoss = currentValue - totalCost;
      totalInvested += totalCost;
      totalGainLoss += gainLoss;

      // Calculate today's performance relative to open price
      if (open > 0) {
        todayGainLoss += quantity * (current - open);
        totalOpenValue += quantity * open;
      }
    });

    const returnPercent = totalInvested
      ? (totalGainLoss / totalInvested) * 100
      : 0;

    const todayReturnPercent = totalOpenValue
      ? (todayGainLoss / totalOpenValue) * 100
      : 0;

    const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

    return {
      totalInvested: round(totalInvested),
      totalValue: round(totalInvested + totalGainLoss),
      gainLoss: round(totalGainLoss),
      returnPercent: round(returnPercent),
      todayPerf: round(todayGainLoss),
      todayReturn: round(todayReturnPercent),
    };
  }, [holdings, stockData]);
}
