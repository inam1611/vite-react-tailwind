// // import { useMemo } from "react";

// // export default function useSummary(holdings, stockData) {
// //   return useMemo(() => {
// //     let totalInvested = 0;
// //     let totalGainLoss = 0;

// //     holdings.forEach((h) => {
// //       const current = stockData[h.symbol]?.currentPrice || 0;
// //       const currentValue = h.quantity * current;
// //       const gainLoss = currentValue - h.totalCost;
// //       totalInvested += h.totalCost;
// //       totalGainLoss += gainLoss;
// //     });

// //     const returnPercent = totalInvested
// //       ? (totalGainLoss / totalInvested) * 100
// //       : 0;

// //     return {
// //       totalInvested,
// //       totalValue: totalInvested + totalGainLoss,
// //       gainLoss: totalGainLoss,
// //       returnPercent,
// //     };
// //   }, [holdings, stockData]);
// // }

// import { useMemo } from "react";

// export default function useSummary(holdings, stockData) {
//   return useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;

//     // Today's performance
//     let todayGainLoss = 0;
//     let totalOpenValue = 0;

//     holdings.forEach((h) => {
//       const data = stockData[h.symbol] || {};
//       const current = Number(data.currentPrice) || 0;
//       const open = Number(data.open) || 0; // Ensure open is present
//       const quantity = Number(h.quantity) || 0;
//       const totalCost = Number(h.totalCost) || 0;

//       // Calculate total gain/loss relative to purchase cost
//       const currentValue = quantity * current;
//       const gainLoss = currentValue - totalCost;
//       totalInvested += totalCost;
//       totalGainLoss += gainLoss;

//       // Calculate today's performance relative to open price
//       if (open > 0) {
//         todayGainLoss += quantity * (current - open);
//         totalOpenValue += quantity * open;
//       }
//     });

//     const returnPercent = totalInvested
//       ? (totalGainLoss / totalInvested) * 100
//       : 0;

//     const todayReturnPercent = totalOpenValue
//       ? (todayGainLoss / totalOpenValue) * 100
//       : 0;

//     const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

//     return {
//       totalInvested: round(totalInvested),
//       totalValue: round(totalInvested + totalGainLoss),
//       gainLoss: round(totalGainLoss),
//       returnPercent: round(returnPercent),
//       todayPerf: round(todayGainLoss),
//       todayReturn: round(todayReturnPercent),
//     };
//   }, [holdings, stockData]);
// }

// import { useMemo } from "react";

// export default function useSummary(holdings, stockData, transactions = []) {
//   return useMemo(() => {
//     let totalInvested = 0;
//     let totalGainLoss = 0;
//     let todayGainLoss = 0;
//     let totalOpenValue = 0;
//     let realizedGainLoss = 0; // ✅ NEW

//     // Group buy/sell transactions per symbol to compute realized gain
//     const txBySymbol = {};
//     transactions.forEach((tx) => {
//       const symbol = tx.symbol;
//       if (!txBySymbol[symbol]) txBySymbol[symbol] = [];
//       txBySymbol[symbol].push(tx);
//     });

//     // Compute realized gain per symbol
//     Object.keys(txBySymbol).forEach((symbol) => {
//       const txs = txBySymbol[symbol].sort(
//         (a, b) => new Date(a.date) - new Date(b.date)
//       );

//       let remainingQty = 0;
//       let totalCost = 0;

//       txs.forEach((tx) => {
//         const qty = parseFloat(tx.quantity) || 0;
//         const price = parseFloat(tx.price) || 0;
//         const type = (tx.type || "").toLowerCase();

//         if (type === "buy") {
//           // Add shares to inventory (FIFO logic)
//           totalCost += qty * price;
//           remainingQty += qty;
//         } else if (type === "sell" && remainingQty > 0) {
//           // Calculate avg buy price
//           const avgBuy = totalCost / remainingQty;
//           realizedGainLoss += (price - avgBuy) * qty;

//           // Reduce inventory
//           totalCost -= avgBuy * qty;
//           remainingQty -= qty;
//         }
//       });
//     });

//     // 🔹 Unrealized + today's performance (as before)
//     holdings.forEach((h) => {
//       const data = stockData[h.symbol] || {};
//       const current = Number(data.currentPrice) || 0;
//       const open = Number(data.open) || 0;
//       const quantity = Number(h.quantity) || 0;
//       const totalCost = Number(h.totalCost) || 0;

//       const currentValue = quantity * current;
//       const gainLoss = currentValue - totalCost;
//       totalInvested += totalCost;
//       totalGainLoss += gainLoss;

//       if (open > 0) {
//         todayGainLoss += quantity * (current - open);
//         totalOpenValue += quantity * open;
//       }
//     });

//     const returnPercent = totalInvested
//       ? (totalGainLoss / totalInvested) * 100
//       : 0;

//     const todayReturnPercent = totalOpenValue
//       ? (todayGainLoss / totalOpenValue) * 100
//       : 0;

//     const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

//     return {
//       totalInvested: round(totalInvested),
//       totalValue: round(totalInvested + totalGainLoss),
//       gainLoss: round(totalGainLoss),          // Unrealized
//       returnPercent: round(returnPercent),
//       todayPerf: round(todayGainLoss),
//       todayReturn: round(todayReturnPercent),
//       realizedGain: round(realizedGainLoss),   // ✅ NEW FIELD
//     };
//   }, [holdings, stockData, transactions]);
// }


import { useMemo } from "react";

export default function useSummary(holdings, stockData, transactions = []) {
  return useMemo(() => {
    console.group("📊 useSummary Debug");
    console.log("🧾 Transactions received:", transactions);
    console.log("📦 Holdings received:", holdings);

    let totalInvested = 0;
    let totalGainLoss = 0;
    let todayGainLoss = 0;
    let totalOpenValue = 0;
    let realizedGainLoss = 0;

    // -------------------------------
    // 🧾 Fee Calculation (same logic as useHoldings)
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
        // 15% Withholding Tax on dividend
        fees = units * price * 0.15;
      }
      return fees;
    };

    // -------------------------------
    // 📁 Group transactions by symbol
    // -------------------------------
    const txBySymbol = {};
    transactions.forEach((tx) => {
      const symbol = tx.symbol?.trim();
      if (!symbol) return;
      if (!txBySymbol[symbol]) txBySymbol[symbol] = [];
      txBySymbol[symbol].push(tx);
    });

    console.log("📁 Grouped transactions by symbol:", txBySymbol);

    // -------------------------------
    // 💰 Compute Realized Gain/Loss (FIFO)
    // -------------------------------
    Object.keys(txBySymbol).forEach((symbol) => {
      const txs = txBySymbol[symbol].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      let remainingQty = 0;
      let totalCost = 0;

      txs.forEach((tx) => {
        const qty = parseFloat(tx.quantity) || 0;
        const price = parseFloat(tx.price) || 0;
        const type = (tx.type || "").trim().toLowerCase();
        const fees = calculateFees(tx);

        if (type === "buy") {
          // Add cost including buy-side fees
          totalCost += qty * price + fees;
          remainingQty += qty;
        } else if (type === "sell" && remainingQty > 0) {
          // Average cost per share (before sell)
          const avgBuy = totalCost / remainingQty;

          // Raw gain before fees/taxes
          let gain = (price - avgBuy) * qty;

          // Deduct sell-side fees
          const sellFees = fees;

          // Deduct 15% Withholding Tax on profit (only if gain > 0)
          const wht = gain > 0 ? gain * 0.15 : 0;

          const netGain = gain - sellFees - wht;
          realizedGainLoss += netGain;

          console.log(
            `💰 ${symbol} | Sold ${qty} @ ${price}, avgBuy ${avgBuy.toFixed(
              2
            )}, Gain: ${gain.toFixed(2)}, Fees: ${sellFees.toFixed(
              2
            )}, WHT: ${wht.toFixed(2)}, Net: ${netGain.toFixed(2)}`
          );

          // Reduce remaining quantity/cost
          totalCost -= avgBuy * qty;
          remainingQty -= qty;
        }
      });
    });

    console.log("✅ Realized Gain/Loss total:", realizedGainLoss.toFixed(2));

    // -------------------------------
    // 💼 Unrealized Gain/Loss + Today's Perf
    // -------------------------------
    holdings.forEach((h) => {
      const data = stockData[h.symbol] || {};
      const current = Number(data.currentPrice) || 0;
      const open = Number(data.open) || 0;
      const quantity = Number(h.quantity) || 0;
      const totalCost = Number(h.totalCost) || 0;

      const currentValue = quantity * current;
      const gainLoss = currentValue - totalCost;
      totalInvested += totalCost;
      totalGainLoss += gainLoss;

      if (open > 0) {
        todayGainLoss += quantity * (current - open);
        totalOpenValue += quantity * open;
      }
    });

    console.log("💼 Unrealized Gain/Loss total:", totalGainLoss.toFixed(2));

    // -------------------------------
    // 📊 Aggregate Summary
    // -------------------------------
    const returnPercent = totalInvested
      ? (totalGainLoss / totalInvested) * 100
      : 0;

    const todayReturnPercent = totalOpenValue
      ? (todayGainLoss / totalOpenValue) * 100
      : 0;

    const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

    const summary = {
      totalInvested: round(totalInvested),
      totalValue: round(totalInvested + totalGainLoss),
      gainLoss: round(totalGainLoss), // Unrealized
      returnPercent: round(returnPercent),
      todayPerf: round(todayGainLoss),
      todayReturn: round(todayReturnPercent),
      realizedGain: round(realizedGainLoss), // ✅ Net after fees + WHT
    };

    console.log("📈 Final summary result:", summary);
    console.groupEnd();

    return summary;
  }, [holdings, stockData, transactions]);
}
