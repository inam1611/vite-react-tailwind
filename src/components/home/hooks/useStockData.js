import { useState, useEffect, useCallback } from "react";

const REFRESH_INTERVAL = 65 * 60 * 1000; // 3 minutes in milliseconds
export default function useStockData(holdings, refreshInterval = REFRESH_INTERVAL)
 {
  const [stockData, setStockData] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchStockData = useCallback(async () => {
    const results = {};
    for (const h of holdings) {
      try {
        const res = await fetch(
          `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
        );
        const data = await res.json();
        if (data && data.ticker) {
          results[h.symbol] = {
            name: data.name || h.symbol,
            industry: data.industry
              ? data.industry
                  .split(" ")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                  .join(" ")
              : "—",
            currentPrice: data.closingPrice || 0,
            open: data.open || 0,              // <--- add this
            high: data.high || 0,              // optional
            low: data.low || 0,                // optional
            volume: data.volume || 0,          // optional
            peRatio: data.peRatio || 0,        // optional
            high52Week: data.high52Week || 0,  // optional
            low52Week: data.low52Week || 0,    // optional
            changeValue: data.changeValue || 0,
            changePercent: data.changePercent || "(0%)",
          };

        }
      } catch (err) {
        console.error(`Error fetching ${h.symbol}:`, err);
      }
    }
    setStockData(results);
    setLastUpdated(new Date());
  }, [holdings]);

  useEffect(() => {
    if (!holdings.length) return;
    fetchStockData();
    const timer = setInterval(fetchStockData, refreshInterval);
    return () => clearInterval(timer);
  }, [fetchStockData, holdings, refreshInterval]);

  return { stockData, lastUpdated };
}
