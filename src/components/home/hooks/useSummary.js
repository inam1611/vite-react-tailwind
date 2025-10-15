import { useMemo } from "react";

export default function useSummary(holdings, stockData) {
  return useMemo(() => {
    let totalInvested = 0;
    let totalGainLoss = 0;

    holdings.forEach((h) => {
      const current = stockData[h.symbol]?.currentPrice || 0;
      const currentValue = h.quantity * current;
      const gainLoss = currentValue - h.totalCost;
      totalInvested += h.totalCost;
      totalGainLoss += gainLoss;
    });

    const returnPercent = totalInvested
      ? (totalGainLoss / totalInvested) * 100
      : 0;

    return {
      totalInvested,
      totalValue: totalInvested + totalGainLoss,
      gainLoss: totalGainLoss,
      returnPercent,
    };
  }, [holdings, stockData]);
}
