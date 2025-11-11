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

// import { useState, useEffect, useCallback } from "react";

// const REFRESH_INTERVAL = 30 * 60 * 1000; 
// const CACHE_KEY = "stockDataCache";

// export default function useStockData(holdings, refreshInterval = REFRESH_INTERVAL) {
//   const [stockData, setStockData] = useState({});
//   const [lastUpdated, setLastUpdated] = useState(null);

//   // Load cache on mount
//   useEffect(() => {
//     const cached = localStorage.getItem(CACHE_KEY);
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setStockData(parsed.data || {});
//       setLastUpdated(parsed.lastUpdated ? new Date(parsed.lastUpdated) : null);
//     }
//   }, []);

//   const getMarketTimes = () => {
//     const now = new Date();
//     const day = now.getDay(); // 0=Sun, 6=Sat
//     if (day === 0 || day === 6) return null;

//     const marketStart = new Date(now);
//     marketStart.setHours(9, 31, 0, 0);

//     const marketEnd = new Date(now);
//     if (day >= 1 && day <= 4) marketEnd.setHours(15, 35, 0, 0);
//     else if (day === 5) marketEnd.setHours(16, 5, 0, 0);

//     return { marketStart, marketEnd };
//   };

//   const isMarketOpen = () => {
//     const times = getMarketTimes();
//     if (!times) return false;
//     const now = new Date();
//     return now >= times.marketStart && now <= times.marketEnd;
//   };

//   const fetchStockData = useCallback(async () => {
//     if (!holdings.length) return;

//     const results = {};
//     let fetchedAny = false;

//     await Promise.all(
//       holdings.map(async (h) => {
//         try {
//           const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`);
//           if (!res.ok) return;
//           const data = await res.json();
//           if (data && data.ticker) {
//             fetchedAny = true;
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

//     if (fetchedAny) {
//       setStockData(results);
//       const now = new Date();
//       setLastUpdated(now);
//       localStorage.setItem(CACHE_KEY, JSON.stringify({ data: results, lastUpdated: now }));
//     }
//   }, [holdings]);

//   useEffect(() => {
//     if (!holdings.length) return;

//     const cached = localStorage.getItem(CACHE_KEY);
//     const hasCache = cached && JSON.parse(cached).data;

//     // If cache exists, only fetch during market hours
//     // If cache is empty, fetch immediately even outside market hours
//     const shouldFetchNow = isMarketOpen() || !hasCache;

//     if (shouldFetchNow) {
//       fetchStockData();
//     }

//     let interval = null;
//     let timeout = null;

//     const scheduleFetch = () => {
//       const times = getMarketTimes();
//       if (!times) return; // weekend

//       const now = new Date();

//       if (now < times.marketStart) {
//         timeout = setTimeout(() => {
//           fetchStockData();
//           interval = setInterval(fetchStockData, refreshInterval);
//         }, times.marketStart - now);
//       } else if (now >= times.marketStart && now <= times.marketEnd) {
//         fetchStockData();
//         interval = setInterval(fetchStockData, refreshInterval);
//         timeout = setTimeout(() => clearInterval(interval), times.marketEnd - now);
//       }
//     };

//     scheduleFetch();

//     return () => {
//       if (interval) clearInterval(interval);
//       if (timeout) clearTimeout(timeout);
//     };
//   }, [fetchStockData, holdings, refreshInterval]);

//   return { stockData, lastUpdated };
// }

// import { useState, useEffect, useCallback } from "react";
// import { db } from "../../../firebase/firebase";
// import { doc, setDoc, getDoc } from "firebase/firestore";

// const REFRESH_INTERVAL = 30 * 60 * 1000; 
// const CACHE_KEY = "stockDataCache";

// export default function useStockData(holdings, refreshInterval = REFRESH_INTERVAL) {
//   const [stockData, setStockData] = useState({});
//   const [lastUpdated, setLastUpdated] = useState(null);

//   // Load cache on mount
//   useEffect(() => {
//     const cached = localStorage.getItem(CACHE_KEY);
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setStockData(parsed.data || {});
//       setLastUpdated(parsed.lastUpdated ? new Date(parsed.lastUpdated) : null);
//     }
//   }, []);

//   const getMarketTimes = () => {
//     const now = new Date();
//     const day = now.getDay(); 
//     if (day === 0 || day === 6) return null;

//     const marketStart = new Date(now);
//     marketStart.setHours(9, 31, 0, 0);

//     const marketEnd = new Date(now);
//     if (day >= 1 && day <= 4) marketEnd.setHours(15, 35, 0, 0);
//     else if (day === 5) marketEnd.setHours(16, 5, 0, 0);

//     return { marketStart, marketEnd };
//   };

//   const isMarketOpen = () => {
//     const times = getMarketTimes();
//     if (!times) return false;
//     const now = new Date();
//     return now >= times.marketStart && now <= times.marketEnd;
//   };

//   const saveToFirebase = async (symbol, name, industry) => {
//     try {
//       const docRef = doc(db, "globalStockData", symbol);
//       const snap = await getDoc(docRef);

//       // Only set if doesn't exist or missing fields
//       if (!snap.exists() || !snap.data()?.name || !snap.data()?.industry) {
//         await setDoc(docRef, { name, industry }, { merge: true });
//       }
//     } catch (err) {
//       console.error("Firebase error for", symbol, err);
//     }
//   };

//   const fetchStockData = useCallback(async () => {
//     if (!Array.isArray(holdings) || holdings.length === 0) return;

//     const results = {};
//     let fetchedAny = false;

//     await Promise.all(
//       holdings.map(async (h) => {
//         try {
//           const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${h.symbol}`);
//           if (!res.ok) return;
//           const data = await res.json();
//           if (data && data.ticker) {
//             fetchedAny = true;

//             // Capitalize industry properly
//             const formattedIndustry = data.industry
//               ? data.industry
//                   .split(" ")
//                   .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
//                   .join(" ")
//               : "—";

//             results[h.symbol] = {
//               name: data.name || h.symbol,
//               industry: formattedIndustry,
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

//             // Save constant fields to Firebase
//             await saveToFirebase(h.symbol, data.name || h.symbol, formattedIndustry);
//           }
//         } catch (err) {
//           console.error(`Error fetching ${h.symbol}:`, err);
//         }
//       })
//     );

//     if (fetchedAny) {
//       setStockData(results);
//       const now = new Date();
//       setLastUpdated(now);
//       localStorage.setItem(CACHE_KEY, JSON.stringify({ data: results, lastUpdated: now }));
//     }
//   }, [holdings]);

//   useEffect(() => {
//     if (!Array.isArray(holdings) || holdings.length === 0) return;

//     const cached = localStorage.getItem(CACHE_KEY);
//     const hasCache = cached && JSON.parse(cached).data;

//     const shouldFetchNow = isMarketOpen() || !hasCache;

//     if (shouldFetchNow) {
//       fetchStockData();
//     }

//     let interval = null;
//     let timeout = null;

//     const scheduleFetch = () => {
//       const times = getMarketTimes();
//       if (!times) return;

//       const now = new Date();

//       if (now < times.marketStart) {
//         timeout = setTimeout(() => {
//           fetchStockData();
//           interval = setInterval(fetchStockData, refreshInterval);
//         }, times.marketStart - now);
//       } else if (now >= times.marketStart && now <= times.marketEnd) {
//         fetchStockData();
//         interval = setInterval(fetchStockData, refreshInterval);
//         timeout = setTimeout(() => clearInterval(interval), times.marketEnd - now);
//       }
//     };

//     scheduleFetch();

//     return () => {
//       if (interval) clearInterval(interval);
//       if (timeout) clearTimeout(timeout);
//     };
//   }, [fetchStockData, holdings, refreshInterval]);

//   return { stockData, lastUpdated };
// }

// import { useState, useEffect, useCallback } from "react";
// import { db } from "../../../firebase/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// const REFRESH_INTERVAL = 30 * 60 * 1000; 
// const CACHE_KEY = "stockDataCache";

// export default function useStockData(holdings, refreshInterval = REFRESH_INTERVAL) {
//   const [stockData, setStockData] = useState({});
//   const [lastUpdated, setLastUpdated] = useState(null);

//   // Load cache on mount
//   useEffect(() => {
//     const cached = localStorage.getItem(CACHE_KEY);
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setStockData(parsed.data || {});
//       setLastUpdated(parsed.lastUpdated ? new Date(parsed.lastUpdated) : null);
//     }
//   }, []);

//   const getMarketTimes = () => {
//     const now = new Date();
//     const day = now.getDay(); // 0=Sun, 6=Sat
//     if (day === 0 || day === 6) return null;

//     const marketStart = new Date(now);
//     marketStart.setHours(9, 31, 0, 0);

//     const marketEnd = new Date(now);
//     if (day >= 1 && day <= 4) marketEnd.setHours(15, 35, 0, 0);
//     else if (day === 5) marketEnd.setHours(16, 5, 0, 0);

//     return { marketStart, marketEnd };
//   };

//   const isMarketOpen = () => {
//     const times = getMarketTimes();
//     if (!times) return false;
//     const now = new Date();
//     return now >= times.marketStart && now <= times.marketEnd;
//   };

//   const fetchStockData = useCallback(async () => {
//     if (!holdings || holdings.length === 0) return;

//     const results = { ...stockData }; // keep existing data
//     let fetchedAny = false;

//     await Promise.all(
//       holdings.map(async (h) => {
//         const symbol = h.symbol;
//         if (!symbol) return;

//         // Check if this symbol already exists in globalStock DB
//         const stockRef = doc(db, "globalStocks", symbol);
//         const stockSnap = await getDoc(stockRef);
//         let name = null, industry = null;

//         if (stockSnap.exists()) {
//           const stockDoc = stockSnap.data();
//           name = stockDoc.name;
//           industry = stockDoc.industry;
//         }

//         // If not in DB, fetch from API
//         if (!name || !industry) {
//           try {
//             const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${symbol}`);
//             if (!res.ok) return;
//             const data = await res.json();
//             if (!data || !data.ticker) return;

//             name = data.name || symbol;
//             industry = data.industry
//               ? data.industry
//                   .split(" ")
//                   .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
//                   .join(" ")
//               : "—";

//             // Save new symbol into Firebase without touching existing ones
//             await setDoc(stockRef, { name, industry }, { merge: true });

//             fetchedAny = true;
//           } catch (err) {
//             console.error(`Error fetching ${symbol}:`, err);
//             return;
//           }
//         }

//         // Always fetch live price/volume data from API
//         try {
//           const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${symbol}`);
//           if (!res.ok) return;
//           const data = await res.json();
//           if (!data || !data.ticker) return;

//           fetchedAny = true;

//           results[symbol] = {
//             name,
//             industry,
//             currentPrice: data.closingPrice || 0,
//             open: data.open || 0,
//             high: data.high || 0,
//             low: data.low || 0,
//             volume: data.volume || 0,
//             peRatio: data.peRatio || 0,
//             high52Week: data.high52Week || 0,
//             low52Week: data.low52Week || 0,
//             changeValue: data.changeValue || 0,
//             changePercent: data.changePercent || "(0%)",
//           };
//         } catch (err) {
//           console.error(`Error fetching price data for ${symbol}:`, err);
//         }
//       })
//     );

//     if (fetchedAny) {
//       setStockData(results);
//       const now = new Date();
//       setLastUpdated(now);
//       localStorage.setItem(CACHE_KEY, JSON.stringify({ data: results, lastUpdated: now }));
//     }
//   }, [holdings, stockData]);

//   useEffect(() => {
//     if (!holdings || holdings.length === 0) return;

//     const cached = localStorage.getItem(CACHE_KEY);
//     const hasCache = cached && JSON.parse(cached).data;

//     const shouldFetchNow = isMarketOpen() || !hasCache;

//     if (shouldFetchNow) {
//       fetchStockData();
//     }

//     let interval = null;
//     let timeout = null;

//     const scheduleFetch = () => {
//       const times = getMarketTimes();
//       if (!times) return;

//       const now = new Date();

//       if (now < times.marketStart) {
//         timeout = setTimeout(() => {
//           fetchStockData();
//           interval = setInterval(fetchStockData, refreshInterval);
//         }, times.marketStart - now);
//       } else if (now >= times.marketStart && now <= times.marketEnd) {
//         fetchStockData();
//         interval = setInterval(fetchStockData, refreshInterval);
//         timeout = setTimeout(() => clearInterval(interval), times.marketEnd - now);
//       }
//     };

//     scheduleFetch();

//     return () => {
//       if (interval) clearInterval(interval);
//       if (timeout) clearTimeout(timeout);
//     };
//   }, [fetchStockData, holdings, refreshInterval]);

//   return { stockData, lastUpdated };
// }

import { useState, useEffect, useCallback } from "react";
import { db } from "../../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const REFRESH_INTERVAL = 30 * 60 * 1000; 
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

  const getMarketTimes = useCallback(() => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 6=Sat
    if (day === 0 || day === 6) return null;

    const marketStart = new Date(now);
    marketStart.setHours(9, 31, 0, 0);

    const marketEnd = new Date(now);
    if (day >= 1 && day <= 4) marketEnd.setHours(15, 35, 0, 0);
    else if (day === 5) marketEnd.setHours(16, 5, 0, 0);

    return { marketStart, marketEnd };
  }, []);

  const isMarketOpen = useCallback(() => {
    const times = getMarketTimes();
    if (!times) return false;
    const now = new Date();
    return now >= times.marketStart && now <= times.marketEnd;
  }, [getMarketTimes]);

  const fetchStockData = useCallback(async () => {
    if (!holdings || holdings.length === 0) return;

    const results = { ...stockData }; // keep existing data
    let fetchedAny = false;

    await Promise.all(
      holdings.map(async (h) => {
        const symbol = h.symbol;
        if (!symbol) return;

        // Check if this symbol already exists in globalStocks DB
        const stockRef = doc(db, "globalStocks", symbol);
        const stockSnap = await getDoc(stockRef);
        let name = null, industry = null;

        if (stockSnap.exists()) {
          const stockDoc = stockSnap.data();
          name = stockDoc.name;
          industry = stockDoc.industry;
        }

        // If not in DB, fetch from API
        if (!name || !industry) {
          try {
            const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${symbol}`);
            if (!res.ok) return;
            const data = await res.json();
            if (!data || !data.ticker) return;

            name = data.name || symbol;
            industry = data.industry
              ? data.industry
                  .split(" ")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                  .join(" ")
              : "—";

            // Save new symbol into Firebase without touching existing ones
            await setDoc(stockRef, { name, industry }, { merge: true });

            fetchedAny = true;
          } catch (err) {
            console.error(`Error fetching ${symbol}:`, err);
            return;
          }
        }

        // Always fetch live price/volume data from API
        try {
          const res = await fetch(`https://psx-api-zxcv.onrender.com/api/stock-info/${symbol}`);
          if (!res.ok) return;
          const data = await res.json();
          if (!data || !data.ticker) return;

          fetchedAny = true;

          results[symbol] = {
            name,
            industry,
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
        } catch (err) {
          console.error(`Error fetching price data for ${symbol}:`, err);
        }
      })
    );

    if (fetchedAny) {
      setStockData(results);
      const now = new Date();
      setLastUpdated(now);
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: results, lastUpdated: now }));
    }
  }, [holdings, stockData]);

  useEffect(() => {
    if (!holdings || holdings.length === 0) return;

    const cached = localStorage.getItem(CACHE_KEY);
    const hasCache = cached && JSON.parse(cached).data;

    const shouldFetchNow = isMarketOpen() || !hasCache;

    if (shouldFetchNow) {
      fetchStockData();
    }

    let interval = null;
    let timeout = null;

    const scheduleFetch = () => {
      const times = getMarketTimes();
      if (!times) return;

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
  }, [fetchStockData, holdings, refreshInterval, isMarketOpen, getMarketTimes]);

  return { stockData, lastUpdated };
}
