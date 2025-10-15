import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function useTransactions(currentUser) {
  const [transactions, setTransactions] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("homeData");
    if (cached) {
      const parsed = JSON.parse(cached);
      setTransactions(parsed.transactions || []);
      setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
    }

    const fetchUserData = async () => {
      if (!currentUser) return;
      try {
        const userRef = doc(db, "users", currentUser.uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          const data = snap.data();
          setTransactions(data.transactions || []);
          setSelectedPortfolio(data.selectedPortfolio || "Main Portfolio");
          localStorage.setItem(
            "homeData",
            JSON.stringify({
              transactions: data.transactions || [],
              selectedPortfolio: data.selectedPortfolio || "Main Portfolio",
            })
          );
        }
      } catch (err) {
        console.error("Error loading transactions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) localStorage.removeItem("homeData");
  }, [currentUser]);

  return { transactions, selectedPortfolio, loading };
}
