// src/components/transactions/useTransactionsData.js
import { useEffect, useRef, useState } from "react";
import { db, auth } from "../../firebase/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

let inMemoryCache = null;

export const useTransactionsData = () => {
  const [user, setUser] = useState(null);
  const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  // Load cache
  useEffect(() => {
    if (inMemoryCache) {
      const data = inMemoryCache;
      setPortfolios(data.portfolios);
      setTransactions(data.transactions);
      setSelectedPortfolio(data.selectedPortfolio);
      setLoading(false);
      return;
    }

    const cached = localStorage.getItem("cachedTransactionsData");
    if (cached) {
      const parsed = JSON.parse(cached);
      setPortfolios(parsed.portfolios || ["Main Portfolio"]);
      setTransactions(parsed.transactions || []);
      setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
    }
  }, []);

  // Auth + Firestore sync
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);

      if (inMemoryCache && !isFirstLoad.current) {
        setLoading(false);
        return;
      }

      isFirstLoad.current = false;
      setLoading(true);

      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setPortfolios(data.portfolios || ["Main Portfolio"]);
          setTransactions(data.transactions || []);
          setSelectedPortfolio(data.selectedPortfolio || "Main Portfolio");
          inMemoryCache = data;
          localStorage.setItem("cachedTransactionsData", JSON.stringify(data));
        } else {
          const defaultData = {
            portfolios: ["Main Portfolio"],
            selectedPortfolio: "Main Portfolio",
            transactions: [],
            lastUpdated: serverTimestamp(),
          };
          await setDoc(userDocRef, defaultData);
          inMemoryCache = defaultData;
          localStorage.setItem("cachedTransactionsData", JSON.stringify(defaultData));
        }
      } catch (err) {
        console.error("Error loading data:", err);
        toast.error("Failed to load data.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Sync to Firestore + cache
  const syncToFirestore = async (updatedData) => {
    if (!user) return;
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        ...updatedData,
        lastUpdated: serverTimestamp(),
      });
      inMemoryCache = updatedData;
      localStorage.setItem("cachedTransactionsData", JSON.stringify(updatedData));
    } catch (err) {
      console.error("Error syncing:", err);
      toast.error("Failed to sync data.");
    }
  };

  // Clear caches on logout
  const clearCache = () => {
    inMemoryCache = null;
    localStorage.removeItem("cachedTransactionsData");
  };

  return {
    user,
    portfolios,
    setPortfolios,
    selectedPortfolio,
    setSelectedPortfolio,
    transactions,
    setTransactions,
    loading,
    syncToFirestore,
    clearCache,
  };
};
