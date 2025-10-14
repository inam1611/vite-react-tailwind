// import React, { useState } from "react";

// const Transactions = () => {
//   const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");

//   const [transactions, setTransactions] = useState([]);
//   const [newTransaction, setNewTransaction] = useState({
//     symbol: "",
//     type: "buy",
//     quantity: "",
//     price: "",
//     date: "",
//   });

//   const [newPortfolioName, setNewPortfolioName] = useState("");

//   const handleAddPortfolio = () => {
//     if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
//       setPortfolios([...portfolios, newPortfolioName]);
//       setSelectedPortfolio(newPortfolioName);
//       setNewPortfolioName("");
//     }
//   };

//   const handleAddTransaction = (e) => {
//     e.preventDefault();
//     if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price) return;

//     const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
//     setTransactions([...transactions, tx]);
//     setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
//   };

//   const filteredTransactions = transactions.filter(
//     (tx) => tx.portfolio === selectedPortfolio
//   );

//   return (
//     <div
//       className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300"
//       style={{ marginLeft: "0px" }} // sidebar (240px) + 20px spacing
//     >
//       <div className="space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

//         {/* === Portfolio Selector === */}
//         <div className="bg-white shadow p-6 rounded-lg space-y-4 w-full">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div>
//               <label className="font-medium text-gray-700">Active Portfolio:</label>
//               <select
//                 value={selectedPortfolio}
//                 onChange={(e) => setSelectedPortfolio(e.target.value)}
//                 className="ml-3 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200"
//               >
//                 {portfolios.map((p) => (
//                   <option key={p}>{p}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex gap-2 flex-wrap">
//               <input
//                 type="text"
//                 placeholder="New Portfolio Name"
//                 value={newPortfolioName}
//                 onChange={(e) => setNewPortfolioName(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 py-2"
//               />
//               <button
//                 onClick={handleAddPortfolio}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* === Add Transaction Form === */}
//         <form
//           onSubmit={handleAddTransaction}
//           className="bg-white shadow p-6 rounded-lg space-y-4 w-full overflow-x-auto"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//             <input
//               type="text"
//               placeholder="Symbol (e.g. PSO)"
//               value={newTransaction.symbol}
//               onChange={(e) => setNewTransaction({ ...newTransaction, symbol: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <select
//               value={newTransaction.type}
//               onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             >
//               <option value="buy">Buy</option>
//               <option value="sell">Sell</option>
//               <option value="dividend">Dividend</option>
//             </select>
//             <input
//               type="number"
//               placeholder="Quantity"
//               value={newTransaction.quantity}
//               onChange={(e) => setNewTransaction({ ...newTransaction, quantity: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               value={newTransaction.price}
//               onChange={(e) => setNewTransaction({ ...newTransaction, price: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <input
//               type="date"
//               value={newTransaction.date}
//               onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
//           >
//             Add Transaction
//           </button>
//         </form>

//         {/* === Transactions Table === */}
//         <div className="bg-white shadow p-6 rounded-lg overflow-x-auto w-full">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             {selectedPortfolio} Transactions
//           </h2>
//           {filteredTransactions.length > 0 ? (
//             <table className="w-full border-collapse min-w-[700px]">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-700">
//                   <th className="p-2 border">Date</th>
//                   <th className="p-2 border">Symbol</th>
//                   <th className="p-2 border">Type</th>
//                   <th className="p-2 border">Quantity</th>
//                   <th className="p-2 border">Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredTransactions.map((tx) => (
//                   <tr key={tx.id} className="text-center border-t">
//                     <td className="p-2 border">{tx.date || "-"}</td>
//                     <td className="p-2 border">{tx.symbol}</td>
//                     <td className="p-2 border capitalize">{tx.type}</td>
//                     <td className="p-2 border">{tx.quantity}</td>
//                     <td className="p-2 border">{tx.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-gray-500">No transactions for this portfolio yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transactions;

// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";

// const Transactions = () => {
//   const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");

//   const [transactions, setTransactions] = useState([]);
//   const [newTransaction, setNewTransaction] = useState({
//     symbol: "",
//     type: "buy",
//     quantity: "",
//     price: "",
//     date: "",
//   });

//   const [newPortfolioName, setNewPortfolioName] = useState("");

//   // ✅ Load from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem("transactionsData");
//     if (saved) {
//       const parsed = JSON.parse(saved);
//       setPortfolios(parsed.portfolios || ["Main Portfolio"]);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }
//   }, []);

//   // ✅ Save to localStorage whenever state changes
//   useEffect(() => {
//     localStorage.setItem(
//       "transactionsData",
//       JSON.stringify({ portfolios, transactions, selectedPortfolio })
//     );
//   }, [portfolios, transactions, selectedPortfolio]);

//   // === Portfolio Management ===
//   const handleAddPortfolio = () => {
//     if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
//       setPortfolios([...portfolios, newPortfolioName]);
//       setSelectedPortfolio(newPortfolioName);
//       setNewPortfolioName("");
//       toast.success("Portfolio added!");
//     } else {
//       toast.error("Portfolio already exists or invalid name!");
//     }
//   };

//   const handleDeletePortfolio = (name) => {
//     if (name === "Main Portfolio") {
//       toast.error("You cannot delete the default portfolio.");
//       return;
//     }
//     if (window.confirm(`Delete portfolio "${name}" and all its transactions?`)) {
//       setPortfolios(portfolios.filter((p) => p !== name));
//       setTransactions(transactions.filter((tx) => tx.portfolio !== name));
//       if (selectedPortfolio === name) setSelectedPortfolio("Main Portfolio");
//       toast.success("Portfolio deleted.");
//     }
//   };

//   // === Transaction Management ===
//   const handleAddTransaction = (e) => {
//     e.preventDefault();
//     if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price) {
//       toast.error("Please fill in all required fields!");
//       return;
//     }

//     const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
//     setTransactions([...transactions, tx]);
//     setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
//     toast.success("Transaction added!");
//   };

//   const handleDeleteTransaction = (id) => {
//     if (window.confirm("Are you sure you want to delete this transaction?")) {
//       setTransactions(transactions.filter((tx) => tx.id !== id));
//       toast.success("Transaction deleted.");
//     }
//   };

//   // === Derived Data ===
//   const filteredTransactions = transactions.filter(
//     (tx) => tx.portfolio === selectedPortfolio
//   );

//   const totalValue = filteredTransactions.reduce((sum, tx) => {
//     const value =
//       tx.type === "buy"
//         ? tx.quantity * tx.price
//         : tx.type === "sell"
//         ? -tx.quantity * tx.price
//         : 0;
//     return sum + value;
//   }, 0);

//   return (
//     <div
//       className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300"
//       style={{ marginLeft: "0px" }}
//     >
//       <Toaster position="top-right" />

//       <div className="space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

//         {/* === Portfolio Selector === */}
//         <div className="bg-white shadow p-6 rounded-lg space-y-4 w-full">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">Active Portfolio:</label>
//               <select
//                 value={selectedPortfolio}
//                 onChange={(e) => setSelectedPortfolio(e.target.value)}
//                 className="ml-2 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200"
//               >
//                 {portfolios.map((p) => (
//                   <option key={p}>{p}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex gap-2 flex-wrap items-center">
//               <input
//                 type="text"
//                 placeholder="New Portfolio Name"
//                 value={newPortfolioName}
//                 onChange={(e) => setNewPortfolioName(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 py-2"
//               />
//               <button
//                 onClick={handleAddPortfolio}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//               >
//                 Add
//               </button>

//               {selectedPortfolio !== "Main Portfolio" && (
//                 <button
//                   onClick={() => handleDeletePortfolio(selectedPortfolio)}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* === Add Transaction Form === */}
//         <form
//           onSubmit={handleAddTransaction}
//           className="bg-white shadow p-6 rounded-lg space-y-4 w-full overflow-x-auto"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//             <input
//               type="text"
//               placeholder="Symbol (e.g. PSO)"
//               value={newTransaction.symbol}
//               onChange={(e) => setNewTransaction({ ...newTransaction, symbol: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <select
//               value={newTransaction.type}
//               onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             >
//               <option value="buy">Buy</option>
//               <option value="sell">Sell</option>
//               <option value="dividend">Dividend</option>
//             </select>
//             <input
//               type="number"
//               placeholder="Quantity"
//               value={newTransaction.quantity}
//               onChange={(e) => setNewTransaction({ ...newTransaction, quantity: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               value={newTransaction.price}
//               onChange={(e) => setNewTransaction({ ...newTransaction, price: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <input
//               type="date"
//               value={newTransaction.date}
//               onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
//           >
//             Add Transaction
//           </button>
//         </form>

//         {/* === Transactions Table === */}
//         <div className="bg-white shadow p-6 rounded-lg overflow-x-auto w-full">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             {selectedPortfolio} Transactions
//           </h2>

//           {filteredTransactions.length > 0 ? (
//             <table className="w-full border-collapse min-w-[700px]">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-700">
//                   <th className="p-2 border">Date</th>
//                   <th className="p-2 border">Symbol</th>
//                   <th className="p-2 border">Type</th>
//                   <th className="p-2 border">Quantity</th>
//                   <th className="p-2 border">Price</th>
//                   <th className="p-2 border">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredTransactions.map((tx, index) => (
//                   <tr
//                     key={tx.id}
//                     className={`text-center ${index % 2 ? "bg-gray-50" : "bg-white"} border-t`}
//                   >
//                     <td className="p-2 border">{tx.date || "-"}</td>
//                     <td className="p-2 border font-medium">{tx.symbol}</td>
//                     <td
//                       className={`p-2 border font-medium ${
//                         tx.type === "buy"
//                           ? "text-green-600"
//                           : tx.type === "sell"
//                           ? "text-red-600"
//                           : "text-blue-600"
//                       }`}
//                     >
//                       {tx.type}
//                     </td>
//                     <td className="p-2 border">{tx.quantity}</td>
//                     <td className="p-2 border">{tx.price}</td>
//                     <td className="p-2 border">
//                       <button
//                         onClick={() => handleDeleteTransaction(tx.id)}
//                         className="text-red-600 hover:underline"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-gray-500">No transactions for this portfolio yet.</p>
//           )}

//           {/* === Portfolio Summary === */}
//           <div className="mt-6 text-gray-700 font-medium space-y-1">
//             <p>
//               Total Value:{" "}
//               <span className="text-indigo-600">
//                 Rs. {totalValue.toLocaleString()}
//               </span>
//             </p>
//             <p>Total Transactions: {filteredTransactions.length}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transactions;

// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import TransactionForm from "./TransactionForm";
// import TransactionTable from "./TransactionTable";
// import PortfolioManager from "./PortfolioManager";

// const Transactions = () => {
//   const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [transactions, setTransactions] = useState([]);
//   const [newTransaction, setNewTransaction] = useState({
//     symbol: "",
//     type: "buy",
//     quantity: "",
//     price: "",
//     date: "",
//   });
//   const [newPortfolioName, setNewPortfolioName] = useState("");

//   // ✅ Load from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("transactionsData");
//     if (saved) {
//       const parsed = JSON.parse(saved);
//       setPortfolios(parsed.portfolios || ["Main Portfolio"]);
//       setTransactions(parsed.transactions || []);
//       setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
//     }
//   }, []);

//   // ✅ Save to localStorage whenever state changes
//   useEffect(() => {
//     localStorage.setItem(
//       "transactionsData",
//       JSON.stringify({ portfolios, transactions, selectedPortfolio })
//     );
//   }, [portfolios, transactions, selectedPortfolio]);

//   // === Portfolio Management ===
//   const handleAddPortfolio = () => {
//     if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
//       setPortfolios([...portfolios, newPortfolioName]);
//       setSelectedPortfolio(newPortfolioName);
//       setNewPortfolioName("");
//       toast.success("Portfolio added!");
//     } else {
//       toast.error("Portfolio already exists or invalid name!");
//     }
//   };

//   const handleDeletePortfolio = (name) => {
//     if (name === "Main Portfolio") {
//       toast.error("You cannot delete the default portfolio.");
//       return;
//     }
//     if (window.confirm(`Delete portfolio "${name}" and all its transactions?`)) {
//       setPortfolios(portfolios.filter((p) => p !== name));
//       setTransactions(transactions.filter((tx) => tx.portfolio !== name));
//       if (selectedPortfolio === name) setSelectedPortfolio("Main Portfolio");
//       toast.success("Portfolio deleted.");
//     }
//   };

//   // === Transaction Management ===
//   const handleAddTransaction = (e) => {
//     e.preventDefault();
//     if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price) {
//       toast.error("Please fill in all required fields!");
//       return;
//     }

//     const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
//     setTransactions([...transactions, tx]);
//     setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
//     toast.success("Transaction added!");
//   };

//   const handleDeleteTransaction = (id) => {
//     if (window.confirm("Are you sure you want to delete this transaction?")) {
//       setTransactions(transactions.filter((tx) => tx.id !== id));
//       toast.success("Transaction deleted.");
//     }
//   };

//   const filteredTransactions = transactions.filter(
//     (tx) => tx.portfolio === selectedPortfolio
//   );

//   const totalValue = filteredTransactions.reduce((sum, tx) => {
//     const value =
//       tx.type === "buy"
//         ? tx.quantity * tx.price
//         : tx.type === "sell"
//         ? -tx.quantity * tx.price
//         : 0;
//     return sum + value;
//   }, 0);

//   return (
//     <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300">
//       <Toaster position="top-right" />

//       <div className="space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

//         {/* === Portfolio Section === */}
//         <PortfolioManager
//           portfolios={portfolios}
//           selectedPortfolio={selectedPortfolio}
//           setSelectedPortfolio={setSelectedPortfolio}
//           newPortfolioName={newPortfolioName}
//           setNewPortfolioName={setNewPortfolioName}
//           handleAddPortfolio={handleAddPortfolio}
//           handleDeletePortfolio={handleDeletePortfolio}
//         />

//         {/* === Add Transaction Form === */}
//         <TransactionForm
//           newTransaction={newTransaction}
//           setNewTransaction={setNewTransaction}
//           handleAddTransaction={handleAddTransaction}
//         />

//         {/* === Transactions Table === */}
//         <TransactionTable
//           filteredTransactions={filteredTransactions}
//           handleDeleteTransaction={handleDeleteTransaction}
//           totalValue={totalValue}
//         />
//       </div>
//     </div>
//   );
// };

// export default Transactions;


// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase";


// import TransactionForm from "./TransactionForm";
// import TransactionTable from "./TransactionTable";
// import PortfolioManager from "./PortfolioManager";

// const Transactions = () => {
//   const [userId, setUserId] = useState(null);
//   const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [transactions, setTransactions] = useState([]);
//   const [newTransaction, setNewTransaction] = useState({
//     symbol: "",
//     type: "buy",
//     quantity: "",
//     price: "",
//     date: "",
//   });
//   const [newPortfolioName, setNewPortfolioName] = useState("");
//   const [loading, setLoading] = useState(true);

//   // === Watch for user login state ===
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setUserId(user.uid);
//         const userRef = doc(db, "users", user.uid);
//         const snap = await getDoc(userRef);

//         if (snap.exists()) {
//           const data = snap.data();
//           setPortfolios(data.portfolios || ["Main Portfolio"]);
//           setTransactions(data.transactions || []);
//           setSelectedPortfolio(data.selectedPortfolio || "Main Portfolio");
//         } else {
//           // First-time user — initialize document
//           await setDoc(userRef, {
//             portfolios: ["Main Portfolio"],
//             transactions: [],
//             selectedPortfolio: "Main Portfolio",
//           });
//         }
//       } else {
//         // Logged out
//         setUserId(null);
//         setPortfolios(["Main Portfolio"]);
//         setTransactions([]);
//         setSelectedPortfolio("Main Portfolio");
//       }
//       setLoading(false);
//     });

//     return () => unsub();
//   }, []);

//   // === Auto-sync state to Firestore when user is logged in ===
//   useEffect(() => {
//     if (!userId) return;
//     const saveData = async () => {
//       try {
//         const userRef = doc(db, "users", userId);
//         await setDoc(
//           userRef,
//           { portfolios, transactions, selectedPortfolio },
//           { merge: true }
//         );
//       } catch (error) {
//         console.error("Firestore sync error:", error);
//       }
//     };
//     saveData();
//   }, [userId, portfolios, transactions, selectedPortfolio]);

//   // === Portfolio Management ===
//   const handleAddPortfolio = () => {
//     if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
//       setPortfolios([...portfolios, newPortfolioName]);
//       setSelectedPortfolio(newPortfolioName);
//       setNewPortfolioName("");
//       toast.success("Portfolio added!");
//     } else {
//       toast.error("Portfolio already exists or invalid name!");
//     }
//   };

//   const handleDeletePortfolio = (name) => {
//     if (name === "Main Portfolio") {
//       toast.error("You cannot delete the default portfolio.");
//       return;
//     }
//     if (window.confirm(`Delete portfolio "${name}" and all its transactions?`)) {
//       setPortfolios(portfolios.filter((p) => p !== name));
//       setTransactions(transactions.filter((tx) => tx.portfolio !== name));
//       if (selectedPortfolio === name) setSelectedPortfolio("Main Portfolio");
//       toast.success("Portfolio deleted.");
//     }
//   };

//   // === Transaction Management ===
//   const handleAddTransaction = (e) => {
//     e.preventDefault();
//     if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price) {
//       toast.error("Please fill in all required fields!");
//       return;
//     }

//     const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
//     setTransactions([...transactions, tx]);
//     setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
//     toast.success("Transaction added!");
//   };

//   const handleDeleteTransaction = (id) => {
//     if (window.confirm("Are you sure you want to delete this transaction?")) {
//       setTransactions(transactions.filter((tx) => tx.id !== id));
//       toast.success("Transaction deleted.");
//     }
//   };

//   // === Derived Data ===
//   const filteredTransactions = transactions.filter(
//     (tx) => tx.portfolio === selectedPortfolio
//   );

//   const totalValue = filteredTransactions.reduce((sum, tx) => {
//     const value =
//       tx.type === "buy"
//         ? tx.quantity * tx.price
//         : tx.type === "sell"
//         ? -tx.quantity * tx.price
//         : 0;
//     return sum + value;
//   }, 0);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100 text-gray-600">
//         Loading your data...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300">
//       <Toaster position="top-right" />

//       <div className="space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

//         {!userId && (
//           <p className="text-red-600 font-medium">
//             Please log in to save your data.
//           </p>
//         )}

//         {/* === Portfolio Section === */}
//         <PortfolioManager
//           portfolios={portfolios}
//           selectedPortfolio={selectedPortfolio}
//           setSelectedPortfolio={setSelectedPortfolio}
//           newPortfolioName={newPortfolioName}
//           setNewPortfolioName={setNewPortfolioName}
//           handleAddPortfolio={handleAddPortfolio}
//           handleDeletePortfolio={handleDeletePortfolio}
//         />

//         {/* === Add Transaction Form === */}
//         <TransactionForm
//           newTransaction={newTransaction}
//           setNewTransaction={setNewTransaction}
//           handleAddTransaction={handleAddTransaction}
//         />

//         {/* === Transactions Table === */}
//         <TransactionTable
//           filteredTransactions={filteredTransactions}
//           handleDeleteTransaction={handleDeleteTransaction}
//           totalValue={totalValue}
//         />
//       </div>
//     </div>
//   );
// };

// export default Transactions;

// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import TransactionForm from "./TransactionForm";
// import TransactionTable from "./TransactionTable";
// import PortfolioManager from "./PortfolioManager";
// import { db, auth } from "../../firebase/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";

// const Transactions = () => {
//   const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
//   const [transactions, setTransactions] = useState([]);
//   const [newTransaction, setNewTransaction] = useState({
//     symbol: "",
//     type: "buy",
//     quantity: "",
//     price: "",
//     date: "",
//   });
//   const [newPortfolioName, setNewPortfolioName] = useState("");
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Listen for Firebase Auth changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         setLoading(true);

//         try {
//           const userDocRef = doc(db, "users", currentUser.uid);
//           const userDoc = await getDoc(userDocRef);

//           if (userDoc.exists()) {
//             const data = userDoc.data();
//             setPortfolios(data.portfolios || ["Main Portfolio"]);
//             setTransactions(data.transactions || []);
//             setSelectedPortfolio(data.selectedPortfolio || "Main Portfolio");
//             console.log("✅ Loaded from Firestore:", data);
//           } else {
//             // 🆕 First-time user — create base document
//             await setDoc(userDocRef, {
//               portfolios: ["Main Portfolio"],
//               selectedPortfolio: "Main Portfolio",
//               transactions: [],
//             });
//             console.log("🆕 Created new Firestore document");
//           }
//         } catch (err) {
//           console.error("Error loading user data:", err);
//           toast.error("Failed to load data from Firestore.");
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setUser(null);
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // 🔹 Save to Firestore when state changes
//   useEffect(() => {
//     if (!user || loading) return; // avoid saving before data loads

//     const saveData = async () => {
//       try {
//         const userDocRef = doc(db, "users", user.uid);
//         await setDoc(userDocRef, {
//           portfolios,
//           selectedPortfolio,
//           transactions,
//         });
//         console.log("💾 Synced data to Firestore");
//       } catch (err) {
//         console.error("Error saving data:", err);
//         toast.error("Failed to sync data with Firestore.");
//       }
//     };

//     saveData();
//   }, [portfolios, selectedPortfolio, transactions, user, loading]);

//   // === Portfolio Management ===
//   const handleAddPortfolio = () => {
//     if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
//       setPortfolios([...portfolios, newPortfolioName]);
//       setSelectedPortfolio(newPortfolioName);
//       setNewPortfolioName("");
//       toast.success("Portfolio added!");
//     } else {
//       toast.error("Portfolio already exists or invalid name!");
//     }
//   };

//   const handleDeletePortfolio = (name) => {
//     if (name === "Main Portfolio") {
//       toast.error("You cannot delete the default portfolio.");
//       return;
//     }
//     if (window.confirm(`Delete portfolio "${name}" and all its transactions?`)) {
//       setPortfolios(portfolios.filter((p) => p !== name));
//       setTransactions(transactions.filter((tx) => tx.portfolio !== name));
//       if (selectedPortfolio === name) setSelectedPortfolio("Main Portfolio");
//       toast.success("Portfolio deleted.");
//     }
//   };

//   // === Transaction Management ===
//   const handleAddTransaction = (e) => {
//     e.preventDefault();
//     if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price) {
//       toast.error("Please fill in all required fields!");
//       return;
//     }

//     const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
//     setTransactions([...transactions, tx]);
//     setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
//     toast.success("Transaction added!");
//   };

//   const handleDeleteTransaction = (id) => {
//     if (window.confirm("Are you sure you want to delete this transaction?")) {
//       setTransactions(transactions.filter((tx) => tx.id !== id));
//       toast.success("Transaction deleted.");
//     }
//   };

//   const filteredTransactions = transactions.filter(
//     (tx) => tx.portfolio === selectedPortfolio
//   );

//   const totalValue = filteredTransactions.reduce((sum, tx) => {
//     const value =
//       tx.type === "buy"
//         ? tx.quantity * tx.price
//         : tx.type === "sell"
//         ? -tx.quantity * tx.price
//         : 0;
//     return sum + value;
//   }, 0);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gray-100 text-gray-700 text-lg">
//         Loading your portfolios...
//       </div>
//     );

//   if (!user)
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gray-100 text-gray-700 text-lg">
//         Please log in to view your transactions.
//       </div>
//     );

//   return (
//     <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300">
//       <Toaster position="top-right" />

//       <div className="space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

//         {/* === Portfolio Section === */}
//         <PortfolioManager
//           portfolios={portfolios}
//           selectedPortfolio={selectedPortfolio}
//           setSelectedPortfolio={setSelectedPortfolio}
//           newPortfolioName={newPortfolioName}
//           setNewPortfolioName={setNewPortfolioName}
//           handleAddPortfolio={handleAddPortfolio}
//           handleDeletePortfolio={handleDeletePortfolio}
//         />

//         {/* === Add Transaction Form === */}
//         <TransactionForm
//           newTransaction={newTransaction}
//           setNewTransaction={setNewTransaction}
//           handleAddTransaction={handleAddTransaction}
//         />

//         {/* === Transactions Table === */}
//         <TransactionTable
//           filteredTransactions={filteredTransactions}
//           handleDeleteTransaction={handleDeleteTransaction}
//           totalValue={totalValue}
//         />
//       </div>
//     </div>
//   );
// };

// export default Transactions;

import React, { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";
import PortfolioManager from "./PortfolioManager";
import { db, auth } from "../../firebase/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// 🔹 Global in-memory cache
let inMemoryCache = null;

const Transactions = () => {
  const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    symbol: "",
    type: "buy",
    quantity: "",
    price: "",
    date: "",
  });
  const [newPortfolioName, setNewPortfolioName] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  // ✅ Load from in-memory cache or localStorage instantly
  useEffect(() => {
    if (inMemoryCache) {
      const data = inMemoryCache;
      setPortfolios(data.portfolios);
      setTransactions(data.transactions);
      setSelectedPortfolio(data.selectedPortfolio);
      setLoading(false);
      console.log("⚡ Loaded from in-memory cache");
      return;
    }

    const cached = localStorage.getItem("cachedTransactionsData");
    if (cached) {
      const parsed = JSON.parse(cached);
      setPortfolios(parsed.portfolios || ["Main Portfolio"]);
      setTransactions(parsed.transactions || []);
      setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
      console.log("⚡ Loaded from localStorage");
    }
  }, []);

  // ✅ Auth listener and Firestore sync
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        console.log("👋 User logged out, clearing cache...");

        // 🔥 Clear cache when logged out
        inMemoryCache = null;
        localStorage.removeItem("cachedTransactionsData");

        setUser(null);
        setPortfolios(["Main Portfolio"]);
        setSelectedPortfolio("Main Portfolio");
        setTransactions([]);
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

          // 🧠 Cache locally + in memory
          inMemoryCache = data;
          localStorage.setItem("cachedTransactionsData", JSON.stringify(data));

          console.log("✅ Loaded from Firestore");
        } else {
          // 🆕 New user
          const defaultData = {
            portfolios: ["Main Portfolio"],
            selectedPortfolio: "Main Portfolio",
            transactions: [],
            lastUpdated: serverTimestamp(),
          };
          await setDoc(userDocRef, defaultData);

          inMemoryCache = defaultData;
          localStorage.setItem("cachedTransactionsData", JSON.stringify(defaultData));

          console.log("🆕 Created new Firestore doc");
        }
      } catch (err) {
        console.error("❌ Error loading data:", err);
        toast.error("Failed to load data.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // === Firestore Sync + Cache Update ===
  const syncToFirestore = async (updatedData) => {
    if (!user) return;
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { ...updatedData, lastUpdated: serverTimestamp() });

      inMemoryCache = updatedData;
      localStorage.setItem("cachedTransactionsData", JSON.stringify(updatedData));
      console.log("💾 Synced with Firestore + updated cache");
    } catch (err) {
      console.error("Error syncing:", err);
      toast.error("Failed to sync data.");
    }
  };

  // === Portfolio Management ===
  const handleAddPortfolio = () => {
    if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
      const updatedPortfolios = [...portfolios, newPortfolioName];
      const updatedData = { portfolios: updatedPortfolios, selectedPortfolio: newPortfolioName, transactions };
      setPortfolios(updatedPortfolios);
      setSelectedPortfolio(newPortfolioName);
      setNewPortfolioName("");
      syncToFirestore(updatedData);
      toast.success("Portfolio added!");
    } else toast.error("Portfolio already exists or invalid name!");
  };

  const handleDeletePortfolio = (name) => {
    if (name === "Main Portfolio") return toast.error("Cannot delete default portfolio.");
    if (window.confirm(`Delete "${name}" and all its transactions?`)) {
      const updatedPortfolios = portfolios.filter((p) => p !== name);
      const updatedTransactions = transactions.filter((tx) => tx.portfolio !== name);
      const updatedData = {
        portfolios: updatedPortfolios,
        selectedPortfolio: selectedPortfolio === name ? "Main Portfolio" : selectedPortfolio,
        transactions: updatedTransactions,
      };
      setPortfolios(updatedPortfolios);
      setTransactions(updatedTransactions);
      setSelectedPortfolio(updatedData.selectedPortfolio);
      syncToFirestore(updatedData);
      toast.success("Portfolio deleted.");
    }
  };

  // === Transaction Management ===
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price)
      return toast.error("Please fill all fields!");

    const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
    const updatedTransactions = [...transactions, tx];
    const updatedData = { portfolios, selectedPortfolio, transactions: updatedTransactions };
    setTransactions(updatedTransactions);
    setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
    syncToFirestore(updatedData);
    toast.success("Transaction added!");
  };

  const handleDeleteTransaction = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      const updatedTransactions = transactions.filter((tx) => tx.id !== id);
      const updatedData = { portfolios, selectedPortfolio, transactions: updatedTransactions };
      setTransactions(updatedTransactions);
      syncToFirestore(updatedData);
      toast.success("Transaction deleted!");
    }
  };

  // === Derived Values ===
  const filteredTransactions = transactions.filter((tx) => tx.portfolio === selectedPortfolio);
  const totalValue = filteredTransactions.reduce((sum, tx) => {
    const value = tx.type === "buy" ? tx.quantity * tx.price : -tx.quantity * tx.price;
    return sum + value;
  }, 0);

  // === UI ===
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] text-gray-700 text-lg bg-gray-100">
        Loading your portfolios...
      </div>
    );

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] text-gray-700 text-lg bg-gray-100">
        Please log in to view your transactions.
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300">
      <Toaster position="top-right" />
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

        <PortfolioManager
          portfolios={portfolios}
          selectedPortfolio={selectedPortfolio}
          setSelectedPortfolio={setSelectedPortfolio}
          newPortfolioName={newPortfolioName}
          setNewPortfolioName={setNewPortfolioName}
          handleAddPortfolio={handleAddPortfolio}
          handleDeletePortfolio={handleDeletePortfolio}
        />

        <TransactionForm
          newTransaction={newTransaction}
          setNewTransaction={setNewTransaction}
          handleAddTransaction={handleAddTransaction}
        />

        <TransactionTable
          filteredTransactions={filteredTransactions}
          handleDeleteTransaction={handleDeleteTransaction}
          totalValue={totalValue}
        />
      </div>
    </div>
  );
};

export default Transactions;
