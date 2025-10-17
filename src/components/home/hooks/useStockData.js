// import { useState, useEffect, useCallback } from "react";

// const REFRESH_INTERVAL = 65 * 60 * 1000; // 3 minutes in milliseconds
// export default function useStockData(holdings, refreshInterval = REFRESH_INTERVAL)
//  {
//   const [stockData, setStockData] = useState({});
//   const [lastUpdated, setLastUpdated] = useState(null);

//   const fetchStockData = useCallback(async () => {
//     const results = {};
//     for (const h of holdings) {
//       try {
//         const res = await fetch(
//           `https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`
//         );
//         const data = await res.json();
//         if (data && data.ticker) {
//           results[h.symbol] = {
//             name: data.name || h.symbol,
//             industry: data.industry
//               ? data.industry
//                   .split(" ")
//                   .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
//                   .join(" ")
//               : "—",
//             currentPrice: data.closingPrice || 0,
//             open: data.open || 0,              // <--- add this
//             high: data.high || 0,              // optional
//             low: data.low || 0,                // optional
//             volume: data.volume || 0,          // optional
//             peRatio: data.peRatio || 0,        // optional
//             high52Week: data.high52Week || 0,  // optional
//             low52Week: data.low52Week || 0,    // optional
//             changeValue: data.changeValue || 0,
//             changePercent: data.changePercent || "(0%)",
//           };

//         }
//       } catch (err) {
//         console.error(`Error fetching ${h.symbol}:`, err);
//       }
//     }
//     setStockData(results);
//     setLastUpdated(new Date());
//   }, [holdings]);

//   useEffect(() => {
//     if (!holdings.length) return;
//     fetchStockData();
//     const timer = setInterval(fetchStockData, refreshInterval);
//     return () => clearInterval(timer);
//   }, [fetchStockData, holdings, refreshInterval]);

//   return { stockData, lastUpdated };
// }

// import { useState, useEffect, useCallback } from "react";

// const REFRESH_INTERVAL = 3 * 60 * 1000; // 3 minutes

// export default function useStockData(holdings, refreshInterval = REFRESH_INTERVAL) {
//   const [stockData, setStockData] = useState({});
//   const [lastUpdated, setLastUpdated] = useState(null);

//   const fetchStockData = useCallback(async () => {
//     if (!holdings.length) return;

//     const results = {};

//     await Promise.all(
//       holdings.map(async (h) => {
//         try {
//           const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`);
//           const data = await res.json();

//           if (data && data.ticker) {
//             results[h.symbol] = {
//               name: data.name || h.symbol,
//               industry: data.industry
//                 ? data.industry
//                     .split(" ")
//                     .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
//                     .join(" ")
//                 : "—",
//               currentPrice: data.closingPrice || 0,
//               open: data.open || 0,
//               high: data.high || 0,
//               low: data.low || 0,
//               volume: data.volume || 0,
//               peRatio: data.peRatio || 0,
//               high52Week: data.high52Week || 0,
//               low52Week: data.low52Week || 0,
//               changeValue: data.changeValue || 0,
//               changePercent: data.changePercent || "(0%)",
//             };
//           }
//         } catch (err) {
//           console.error(`Error fetching ${h.symbol}:`, err);
//         }
//       })
//     );

//     setStockData(results);
//     setLastUpdated(new Date());
//   }, [holdings]);

//   useEffect(() => {
//     if (!holdings.length) return;
//     fetchStockData();
//     const timer = setInterval(fetchStockData, refreshInterval);
//     return () => clearInterval(timer);
//   }, [fetchStockData, holdings, refreshInterval]);

//   return { stockData, lastUpdated };
// }

import { useState, useEffect, useCallback } from "react";

const REFRESH_INTERVAL = 30 * 60 * 1000; // 3 minutes
const CACHE_KEY = "stockDataCache";

export default function useStockData(holdings, refreshInterval = REFRESH_INTERVAL) {
  const [stockData, setStockData] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);

  // Load cache on mount
  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      setStockData(parsed.data || {});
      setLastUpdated(parsed.lastUpdated ? new Date(parsed.lastUpdated) : null);
    }
  }, []);

  const getMarketTimes = () => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 6=Sat
    if (day === 0 || day === 6) return null;

    const marketStart = new Date(now);
    marketStart.setHours(9, 31, 0, 0);

    const marketEnd = new Date(now);
    if (day >= 1 && day <= 4) marketEnd.setHours(15, 35, 0, 0);
    else if (day === 5) marketEnd.setHours(16, 5, 0, 0);

    return { marketStart, marketEnd };
  };

  const isMarketOpen = () => {
    const times = getMarketTimes();
    if (!times) return false;
    const now = new Date();
    return now >= times.marketStart && now <= times.marketEnd;
  };

  const fetchStockData = useCallback(async () => {
    if (!holdings.length) return;

    const results = {};
    let fetchedAny = false;

    await Promise.all(
      holdings.map(async (h) => {
        try {
          const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`);
          if (!res.ok) return;
          const data = await res.json();
          if (data && data.ticker) {
            fetchedAny = true;
            results[h.symbol] = {
              name: data.name || h.symbol,
              industry: data.industry
                ? data.industry
                    .split(" ")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                    .join(" ")
                : "—",
              currentPrice: data.closingPrice || 0,
              open: data.open || 0,
              high: data.high || 0,
              low: data.low || 0,
              volume: data.volume || 0,
              peRatio: data.peRatio || 0,
              high52Week: data.high52Week || 0,
              low52Week: data.low52Week || 0,
              changeValue: data.changeValue || 0,
              changePercent: data.changePercent || "(0%)",
            };
          }
        } catch (err) {
          console.error(`Error fetching ${h.symbol}:`, err);
        }
      })
    );

    if (fetchedAny) {
      setStockData(results);
      const now = new Date();
      setLastUpdated(now);
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: results, lastUpdated: now }));
    }
  }, [holdings]);

  useEffect(() => {
    if (!holdings.length) return;

    const cached = localStorage.getItem(CACHE_KEY);
    const hasCache = cached && JSON.parse(cached).data;

    // If cache exists, only fetch during market hours
    // If cache is empty, fetch immediately even outside market hours
    const shouldFetchNow = isMarketOpen() || !hasCache;

    if (shouldFetchNow) {
      fetchStockData();
    }

    let interval = null;
    let timeout = null;

    const scheduleFetch = () => {
      const times = getMarketTimes();
      if (!times) return; // weekend

      const now = new Date();

      if (now < times.marketStart) {
        timeout = setTimeout(() => {
          fetchStockData();
          interval = setInterval(fetchStockData, refreshInterval);
        }, times.marketStart - now);
      } else if (now >= times.marketStart && now <= times.marketEnd) {
        fetchStockData();
        interval = setInterval(fetchStockData, refreshInterval);
        timeout = setTimeout(() => clearInterval(interval), times.marketEnd - now);
      }
    };

    scheduleFetch();

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [fetchStockData, holdings, refreshInterval]);

  return { stockData, lastUpdated };
}
