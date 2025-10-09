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

import React, { useState } from "react";

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

  const handleAddPortfolio = () => {
    if (newPortfolioName && !portfolios.includes(newPortfolioName)) {
      setPortfolios([...portfolios, newPortfolioName]);
      setSelectedPortfolio(newPortfolioName);
      setNewPortfolioName("");
    }
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransaction.symbol || !newTransaction.quantity || !newTransaction.price) return;

    const tx = { ...newTransaction, id: Date.now(), portfolio: selectedPortfolio };
    setTransactions([...transactions, tx]);
    setNewTransaction({ symbol: "", type: "buy", quantity: "", price: "", date: "" });
  };

  const filteredTransactions = transactions.filter(
    (tx) => tx.portfolio === selectedPortfolio
  );

  return (
    <div
      className="min-h-[calc(100vh-4rem)] bg-gray-100 p-8 overflow-y-auto transition-all duration-300"
      style={{ marginLeft: "0px" }} // sidebar (240px) + 20px spacing
    >
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

        {/* === Portfolio Selector === */}
        <div className="bg-white shadow p-6 rounded-lg space-y-4 w-full">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <label className="font-medium text-gray-700">Active Portfolio:</label>
              <select
                value={selectedPortfolio}
                onChange={(e) => setSelectedPortfolio(e.target.value)}
                className="ml-3 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-indigo-200"
              >
                {portfolios.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="New Portfolio Name"
                value={newPortfolioName}
                onChange={(e) => setNewPortfolioName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <button
                onClick={handleAddPortfolio}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* === Add Transaction Form === */}
        <form
          onSubmit={handleAddTransaction}
          className="bg-white shadow p-6 rounded-lg space-y-4 w-full overflow-x-auto"
        >
          <h2 className="text-xl font-semibold text-gray-700">Add Transaction</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="Symbol (e.g. PSO)"
              value={newTransaction.symbol}
              onChange={(e) => setNewTransaction({ ...newTransaction, symbol: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <select
              value={newTransaction.type}
              onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="dividend">Dividend</option>
            </select>
            <input
              type="number"
              placeholder="Quantity"
              value={newTransaction.quantity}
              onChange={(e) => setNewTransaction({ ...newTransaction, quantity: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={newTransaction.price}
              onChange={(e) => setNewTransaction({ ...newTransaction, price: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <input
              type="date"
              value={newTransaction.date}
              onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Add Transaction
          </button>
        </form>

        {/* === Transactions Table === */}
        <div className="bg-white shadow p-6 rounded-lg overflow-x-auto w-full">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {selectedPortfolio} Transactions
          </h2>
          {filteredTransactions.length > 0 ? (
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Symbol</th>
                  <th className="p-2 border">Type</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="text-center border-t">
                    <td className="p-2 border">{tx.date || "-"}</td>
                    <td className="p-2 border">{tx.symbol}</td>
                    <td className="p-2 border capitalize">{tx.type}</td>
                    <td className="p-2 border">{tx.quantity}</td>
                    <td className="p-2 border">{tx.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No transactions for this portfolio yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
