// // src/components/main/index.jsx
// import React from "react";
// import { useAuth } from "../../contexts/authContext";
// import { doSignOut } from "../../firebase/auth";

// const Main = () => {
//   const { currentUser } = useAuth();

//   const handleLogout = async () => {
//     await doSignOut();
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
//       <div className="w-96 p-6 bg-white shadow-xl rounded-lg text-center space-y-4">
//         <h1 className="text-2xl font-bold text-gray-800">Welcome 👋</h1>
//         <p className="text-gray-600">
//           {currentUser?.email
//             ? `You are logged in as ${currentUser.email}`
//             : "User info not available."}
//         </p>

//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300"
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Main;

// // src/components/transactions/Transactions.jsx
// import React, { useState } from "react";

// const Transactions = () => {
//   // Example portfolios
//   const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");

//   // Example transactions
//   const [transactions, setTransactions] = useState([]);
//   const [newTransaction, setNewTransaction] = useState({
//     symbol: "",
//     type: "buy",
//     quantity: "",
//     price: "",
//   });

//   // Create new portfolio
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
//     setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "" });
//   };

//   const filteredTransactions = transactions.filter(
//     (tx) => tx.portfolio === selectedPortfolio
//   );

//   return (
//     <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto">
//       <div className="max-w-5xl mx-auto space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

//         {/* === Portfolio Selector === */}
//         <div className="bg-white shadow p-6 rounded-lg space-y-4">
//           <div className="flex items-center justify-between">
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

//             <div className="flex gap-2">
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
//           className="bg-white shadow p-6 rounded-lg space-y-4"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
//           </div>
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
//           >
//             Add Transaction
//           </button>
//         </form>

//         {/* === Transactions Table === */}
//         <div className="bg-white shadow p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             {selectedPortfolio} Transactions
//           </h2>
//           {filteredTransactions.length > 0 ? (
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-700">
//                   <th className="p-2 border">Symbol</th>
//                   <th className="p-2 border">Type</th>
//                   <th className="p-2 border">Quantity</th>
//                   <th className="p-2 border">Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredTransactions.map((tx) => (
//                   <tr key={tx.id} className="text-center border-t">
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

// import React, { useState } from "react";

// const Transactions = () => {
//   // Example portfolios
//   const [portfolios, setPortfolios] = useState(["Main Portfolio"]);
//   const [selectedPortfolio, setSelectedPortfolio] = useState("Main Portfolio");

//   // Example transactions
//   const [transactions, setTransactions] = useState([]);
//   const [newTransaction, setNewTransaction] = useState({
//     symbol: "",
//     type: "buy",
//     quantity: "",
//     price: "",
//     date: "",
//   });

//   // Create new portfolio
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
//     if (!newTransaction.symbol || !newTransaction.date) return;

//     const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
//     setTransactions([...transactions, tx]);
//     setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
//   };

//   const filteredTransactions = transactions.filter(
//     (tx) => tx.portfolio === selectedPortfolio
//   );

//   return (
//     <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto">
//       <div className="max-w-5xl mx-auto space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

//         {/* === Portfolio Selector === */}
//         <div className="bg-white shadow p-6 rounded-lg space-y-4">
//           <div className="flex items-center justify-between">
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

//             <div className="flex gap-2">
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
//           className="bg-white shadow p-6 rounded-lg space-y-4"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             <input
//               type="text"
//               placeholder="Symbol (e.g. PSO)"
//               value={newTransaction.symbol}
//               onChange={(e) =>
//                 setNewTransaction({ ...newTransaction, symbol: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <select
//               value={newTransaction.type}
//               onChange={(e) =>
//                 setNewTransaction({ ...newTransaction, type: e.target.value })
//               }
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
//               onChange={(e) =>
//                 setNewTransaction({ ...newTransaction, quantity: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               value={newTransaction.price}
//               onChange={(e) =>
//                 setNewTransaction({ ...newTransaction, price: e.target.value })
//               }
//               className="border border-gray-300 rounded-md px-3 py-2"
//             />
//             <input
//               type="date"
//               value={newTransaction.date}
//               onChange={(e) =>
//                 setNewTransaction({ ...newTransaction, date: e.target.value })
//               }
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
//         <div className="bg-white shadow p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             {selectedPortfolio} Transactions
//           </h2>
//           {filteredTransactions.length > 0 ? (
//             <table className="w-full border-collapse">
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
//                     <td className="p-2 border">{tx.date}</td>
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

import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";
import PortfolioManager from "./PortfolioManager";

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

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("transactionsData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setPortfolios(parsed.portfolios || ["Main Portfolio"]);
      setTransactions(parsed.transactions || []);
      setSelectedPortfolio(parsed.selectedPortfolio || "Main Portfolio");
    }
  }, []);

  // ✅ Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(
      "transactionsData",
      JSON.stringify({ portfolios, transactions, selectedPortfolio })
    );
  }, [portfolios, transactions, selectedPortfolio]);

  // === Portfolio Management ===
  const handleAddPortfolio = () => {
    if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
      setPortfolios([...portfolios, newPortfolioName]);
      setSelectedPortfolio(newPortfolioName);
      setNewPortfolioName("");
      toast.success("Portfolio added!");
    } else {
      toast.error("Portfolio already exists or invalid name!");
    }
  };

  const handleDeletePortfolio = (name) => {
    if (name === "Main Portfolio") {
      toast.error("You cannot delete the default portfolio.");
      return;
    }
    if (window.confirm(`Delete portfolio "${name}" and all its transactions?`)) {
      setPortfolios(portfolios.filter((p) => p !== name));
      setTransactions(transactions.filter((tx) => tx.portfolio !== name));
      if (selectedPortfolio === name) setSelectedPortfolio("Main Portfolio");
      toast.success("Portfolio deleted.");
    }
  };

  // === Transaction Management ===
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
    setTransactions([...transactions, tx]);
    setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
    toast.success("Transaction added!");
  };

  const handleDeleteTransaction = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      setTransactions(transactions.filter((tx) => tx.id !== id));
      toast.success("Transaction deleted.");
    }
  };

  const filteredTransactions = transactions.filter(
    (tx) => tx.portfolio === selectedPortfolio
  );

  const totalValue = filteredTransactions.reduce((sum, tx) => {
    const value =
      tx.type === "buy"
        ? tx.quantity * tx.price
        : tx.type === "sell"
        ? -tx.quantity * tx.price
        : 0;
    return sum + value;
  }, 0);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300">
      <Toaster position="top-right" />

      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

        {/* === Portfolio Section === */}
        <PortfolioManager
          portfolios={portfolios}
          selectedPortfolio={selectedPortfolio}
          setSelectedPortfolio={setSelectedPortfolio}
          newPortfolioName={newPortfolioName}
          setNewPortfolioName={setNewPortfolioName}
          handleAddPortfolio={handleAddPortfolio}
          handleDeletePortfolio={handleDeletePortfolio}
        />

        {/* === Add Transaction Form === */}
        <TransactionForm
          newTransaction={newTransaction}
          setNewTransaction={setNewTransaction}
          handleAddTransaction={handleAddTransaction}
        />

        {/* === Transactions Table === */}
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
