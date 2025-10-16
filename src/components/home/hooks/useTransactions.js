// import { useEffect, useState } from "react";
// import { db } from "../../../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

// export default function useTransactions(currentUser) {
//   const [transactions, setTransactions] = useState([]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const cached = localStorage.getItem("homeData");
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }

//     const fetchUserData = async () => {
//       if (!currentUser) return;
//       try {
//         const userRef = doc(db, "users", currentUser.uid);
//         const snap = await getDoc(userRef);
//         if (snap.exists()) {
//           const data = snap.data();
//           setTransactions(data.transactions || []);
//           setSelectedPortfolio(data.selectedPortfolio || "Main Portfolio");
//           localStorage.setItem(
//             "homeData",
//             JSON.stringify({
//               transactions: data.transactions || [],
//               selectedPortfolio: data.selectedPortfolio || "Main Portfolio",
//             })
//           );
//         }
//       } catch (err) {
//         console.error("Error loading transactions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [currentUser]);

//   useEffect(() => {
//     if (!currentUser) localStorage.removeItem("homeData");
//   }, [currentUser]);

//   return { transactions, selectedPortfolio, loading };
// }

import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function useTransactions(currentUser) {
  const [transactions, setTransactions] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔄 useTransactions triggered — currentUser:", currentUser?.uid);

    const cached = localStorage.getItem("homeData");
    if (cached) {
      const parsed = JSON.parse(cached);
      console.log("💾 Loaded from cache:", parsed);
      setTransactions(parsed.transactions || []);
      setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
    }

    const fetchUserData = async () => {
      if (!currentUser) {
        console.log("⚠️ No user logged in — skipping Firestore fetch");
        setLoading(false);
        return;
      }

      try {
        console.log("📡 Fetching data from Firestore for UID:", currentUser.uid);
        const userRef = doc(db, "users", currentUser.uid);
        const snap = await getDoc(userRef);

        if (snap.exists()) {
          const data = snap.data();
          console.log("✅ Firestore data:", data);

          setTransactions(data.transactions || []);
          setSelectedPortfolio(data.selectedPortfolio || "Main Portfolio");

          // Cache for next time
          localStorage.setItem(
            "homeData",
            JSON.stringify({
              transactions: data.transactions || [],
              selectedPortfolio: data.selectedPortfolio || "Main Portfolio",
            })
          );
          console.log("💾 Updated cache successfully");
        } else {
          console.warn("⚠️ No Firestore document found for user:", currentUser.uid);
        }
      } catch (err) {
        console.error("❌ Error loading transactions:", err);
      } finally {
        setLoading(false);
        console.log("✅ Fetch complete");
      }
    };

    fetchUserData();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      console.log("🚪 User logged out — clearing local cache");
      localStorage.removeItem("homeData");
    }
  }, [currentUser]);

  console.log("📊 Returning from useTransactions —", {
    transactionsCount: transactions.length,
    selectedPortfolio,
    loading,
  });

  return { transactions, selectedPortfolio, loading };
}
