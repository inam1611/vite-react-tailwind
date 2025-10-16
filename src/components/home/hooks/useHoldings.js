// import { useMemo } from "react";

// export default function useHoldings(transactions, selectedPortfolio) {
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   const filtered = useMemo(
//     () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
//     [transactions, selectedPortfolio]
//   );

//   return useMemo(() => {
//     const grouped = {};
//     filtered.forEach((tx) => {
//       const { symbol, type, quantity, price } = tx;
//       const qty = parseFloat(quantity) || 0;
//       const p = parseFloat(price) || 0;
//       const fees = calculateFees(tx);
//       const total = (p + fees / (qty || 1)) * qty;

//       if (!grouped[symbol]) grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

//       if (type.toLowerCase() === "buy") {
//         grouped[symbol].quantity += qty;
//         grouped[symbol].totalCost += total;
//       } else if (type.toLowerCase() === "sell") {
//         grouped[symbol].quantity -= qty;
//         grouped[symbol].totalCost -= total;
//       }
//     });
//     return Object.values(grouped);
//   }, [filtered]);
// }

import { useMemo } from "react";

export default function useHoldings(transactions, selectedPortfolio) {
  // -------------------------------
  // 🧾 Fee Calculation (same as before)
  // -------------------------------
  const calculateFees = (tx) => {
    const units = parseFloat(tx.quantity) || 0;
    const price = parseFloat(tx.price) || 0;
    const type = (tx.type || "").toLowerCase();
    let fees = 0;

    if (type === "buy" || type === "sell") {
      const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
      const salesTax = commission * 0.15;
      const cdcCharges = units * 0.005;
      fees = commission + salesTax + cdcCharges;
    } else if (type === "dividend") {
      // 15% WHT on dividend
      fees = units * price * 0.15;
    }
    return fees;
  };

  // -------------------------------
  // 🎯 Filter by selected portfolio
  // -------------------------------
  const filtered = useMemo(
    () => transactions.filter((tx) => tx.portfolio === selectedPortfolio),
    [transactions, selectedPortfolio]
  );

  // -------------------------------
  // 💼 Group Holdings
  // -------------------------------
  return useMemo(() => {
    const grouped = {};

    filtered.forEach((tx) => {
      const { symbol, type, quantity, price } = tx;
      const qty = parseFloat(quantity) || 0;
      const p = parseFloat(price) || 0;
      const fees = calculateFees(tx);
      const txType = (type || "").toLowerCase();

      if (!grouped[symbol])
        grouped[symbol] = { symbol, quantity: 0, totalCost: 0 };

      // -------------------------------
      // 🟢 BUY — Add quantity and include fees in cost
      // -------------------------------
      if (txType === "buy") {
        const total = qty * p + fees;
        grouped[symbol].quantity += qty;
        grouped[symbol].totalCost += total;
      }

      // -------------------------------
      // 🔴 SELL — Reduce quantity and adjust cost (excluding sell fees)
      // -------------------------------
      else if (txType === "sell") {
        const avgCost =
          grouped[symbol].quantity > 0
            ? grouped[symbol].totalCost / grouped[symbol].quantity
            : 0;

        const totalSellCost = avgCost * qty;
        grouped[symbol].quantity -= qty;
        grouped[symbol].totalCost -= totalSellCost;

        // Prevent negative cost due to rounding or full liquidation
        if (grouped[symbol].quantity <= 0) {
          grouped[symbol].quantity = 0;
          grouped[symbol].totalCost = 0;
        }
      }
    });

    return Object.values(grouped);
  }, [filtered]);
}
