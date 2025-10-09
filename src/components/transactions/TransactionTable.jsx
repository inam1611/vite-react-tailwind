// import React from "react";

// const TransactionTable = ({ filteredTransactions, handleDeleteTransaction, totalValue }) => {
//   return (
//     <div className="bg-white shadow p-6 rounded-lg overflow-x-auto w-full">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Transactions</h2>

//       {filteredTransactions.length > 0 ? (
//         <table className="w-full border-collapse min-w-[700px]">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               <th className="p-2 border">Date</th>
//               <th className="p-2 border">Symbol</th>
//               <th className="p-2 border">Type</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">Price</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTransactions.map((tx, index) => (
//               <tr
//                 key={tx.id}
//                 className={`text-center ${index % 2 ? "bg-gray-50" : "bg-white"} border-t`}
//               >
//                 <td className="p-2 border">{tx.date || "-"}</td>
//                 <td className="p-2 border font-medium">{tx.symbol}</td>
//                 <td
//                   className={`p-2 border font-medium ${
//                     tx.type === "buy"
//                       ? "text-green-600"
//                       : tx.type === "sell"
//                       ? "text-red-600"
//                       : "text-blue-600"
//                   }`}
//                 >
//                   {tx.type}
//                 </td>
//                 <td className="p-2 border">{tx.quantity}</td>
//                 <td className="p-2 border">{tx.price}</td>
//                 <td className="p-2 border">
//                   <button
//                     onClick={() => handleDeleteTransaction(tx.id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-gray-500">No transactions for this portfolio yet.</p>
//       )}

//       <div className="mt-6 text-gray-700 font-medium space-y-1">
//         <p>
//           Total Value:{" "}
//           <span className="text-indigo-600">Rs. {totalValue.toLocaleString()}</span>
//         </p>
//         <p>Total Transactions: {filteredTransactions.length}</p>
//       </div>
//     </div>
//   );
// };

// export default TransactionTable;


// import React, { useState, useMemo } from "react";

// const TransactionTable = ({ filteredTransactions, handleDeleteTransaction }) => {
//   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const transactionsPerPage = 10;

//   // Sorting
//   const sortedTransactions = useMemo(() => {
//     let sortableTransactions = [...filteredTransactions];

//     if (sortConfig.key) {
//       sortableTransactions.sort((a, b) => {
//         let aValue = a[sortConfig.key];
//         let bValue = b[sortConfig.key];

//         if (sortConfig.key === "symbol" || sortConfig.key === "type") {
//           aValue = (aValue || "").toUpperCase();
//           bValue = (bValue || "").toUpperCase();
//         } else if (sortConfig.key === "price" || sortConfig.key === "quantity") {
//           aValue = parseFloat(aValue) || 0;
//           bValue = parseFloat(bValue) || 0;
//         } else if (sortConfig.key === "date") {
//           aValue = new Date(aValue);
//           bValue = new Date(bValue);
//         }

//         if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//         if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//         return 0;
//       });
//     }

//     return sortableTransactions;
//   }, [filteredTransactions, sortConfig]);

//   // Filtering
//   const filtered = useMemo(() => {
//     return sortedTransactions.filter(
//       (tx) =>
//         (tx.symbol || "").toUpperCase().includes(search.toUpperCase()) ||
//         (tx.type || "").toUpperCase().includes(search.toUpperCase())
//     );
//   }, [search, sortedTransactions]);

//   // Pagination
//   const indexOfLast = currentPage * transactionsPerPage;
//   const indexOfFirst = indexOfLast - transactionsPerPage;
//   const currentTransactions = filtered.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filtered.length / transactionsPerPage);

//   // Totals
//   const totalBuys = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "buy")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * (parseFloat(tx.price) || 0), 0);

//   const totalSells = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "sell")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * (parseFloat(tx.price) || 0), 0);

//   const netValue = totalBuys - totalSells;

//   // Sort handler
//   const handleSort = (key) => {
//     setSortConfig((prev) => ({
//       key,
//       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//     }));
//   };

//   return (
//     <div className="bg-white shadow-lg p-6 rounded-lg overflow-x-auto w-full">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Transactions</h2>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by Symbol or Type"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 w-full max-w-sm"
//       />

//       {currentTransactions.length > 0 ? (
//         <table className="w-full border-collapse min-w-[700px]">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               {["date", "symbol", "type", "quantity", "price"].map((col) => (
//                 <th
//                   key={col}
//                   className="p-2 border cursor-pointer hover:bg-gray-200"
//                   onClick={() => handleSort(col)}
//                 >
//                   {col.charAt(0).toUpperCase() + col.slice(1)}
//                   {sortConfig.key === col ? (sortConfig.direction === "asc" ? " ▲" : " ▼") : ""}
//                 </th>
//               ))}
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentTransactions.map((tx, index) => (
//               <tr
//                 key={tx.id}
//                 className={`text-center ${index % 2 ? "bg-gray-50" : "bg-white"} border-t hover:bg-gray-100 transition-colors`}
//               >
//                 <td className="p-2 border">{tx.date || "-"}</td>
//                 <td className="p-2 border font-medium">{tx.symbol || "-"}</td>
//                 <td
//                   className={`p-2 border font-medium ${
//                     (tx.type || "").toLowerCase() === "buy"
//                       ? "text-green-600"
//                       : (tx.type || "").toLowerCase() === "sell"
//                       ? "text-red-600"
//                       : "text-blue-600"
//                   }`}
//                 >
//                   {(tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1)}
//                 </td>
//                 <td className="p-2 border">{tx.quantity || "-"}</td>
//                 <td className="p-2 border">
//                   {tx.price !== undefined && tx.price !== null
//                     ? Number(tx.price).toFixed(2)
//                     : "-"}
//                 </td>
//                 <td className="p-2 border">
//                   <button
//                     onClick={() => handleDeleteTransaction(tx.id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-gray-500">No transactions for this portfolio yet.</p>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="mt-4 flex gap-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-md ${
//                 currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Totals */}
//       <div className="mt-6 text-gray-700 font-medium space-y-1">
//         <p>
//           Total Buys: <span className="text-green-600">Rs. {totalBuys.toLocaleString()}</span>
//         </p>
//         <p>
//           Total Sells: <span className="text-red-600">Rs. {totalSells.toLocaleString()}</span>
//         </p>
//         <p>
//           Net Value: <span className="text-indigo-600">Rs. {netValue.toLocaleString()}</span>
//         </p>
//         <p>Total Transactions: {filtered.length}</p>
//       </div>
//     </div>
//   );
// };

// export default TransactionTable;


// import React, { useState, useMemo } from "react";

// const TransactionTable = ({ filteredTransactions, handleDeleteTransaction }) => {
//   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const transactionsPerPage = 10;

//   // Sorting
//   const sortedTransactions = useMemo(() => {
//     let sortableTransactions = [...filteredTransactions];

//     if (sortConfig.key) {
//       sortableTransactions.sort((a, b) => {
//         let aValue = a[sortConfig.key];
//         let bValue = b[sortConfig.key];

//         if (sortConfig.key === "symbol" || sortConfig.key === "type") {
//           aValue = (aValue || "").toUpperCase();
//           bValue = (bValue || "").toUpperCase();
//         } else if (sortConfig.key === "price" || sortConfig.key === "quantity") {
//           aValue = parseFloat(aValue) || 0;
//           bValue = parseFloat(bValue) || 0;
//         } else if (sortConfig.key === "date") {
//           aValue = new Date(aValue);
//           bValue = new Date(bValue);
//         }

//         if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//         if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//         return 0;
//       });
//     }

//     return sortableTransactions;
//   }, [filteredTransactions, sortConfig]);

//   // Filtering
//   const filtered = useMemo(() => {
//     return sortedTransactions.filter(
//       (tx) =>
//         (tx.symbol || "").toUpperCase().includes(search.toUpperCase()) ||
//         (tx.type || "").toUpperCase().includes(search.toUpperCase())
//     );
//   }, [search, sortedTransactions]);

//   // Pagination
//   const indexOfLast = currentPage * transactionsPerPage;
//   const indexOfFirst = indexOfLast - transactionsPerPage;
//   const currentTransactions = filtered.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filtered.length / transactionsPerPage);

//   // Totals
//   const totalBuys = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "buy")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * (parseFloat(tx.price) || 0), 0);

//   const totalSells = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "sell")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * (parseFloat(tx.price) || 0), 0);

//   const netValue = totalBuys - totalSells;

//   // Sort handler
//   const handleSort = (key) => {
//     setSortConfig((prev) => ({
//       key,
//       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//     }));
//   };

//   return (
//     <div className="bg-white shadow-lg p-6 rounded-lg overflow-x-auto w-full">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Transactions</h2>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by Symbol or Type"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 w-full max-w-sm"
//       />

//       {currentTransactions.length > 0 ? (
//         <table className="w-full border-collapse min-w-[800px]">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               {["date", "symbol", "type", "quantity", "pricePerShare", "totalPrice"].map((col) => (
//                 <th
//                   key={col}
//                   className="p-2 border cursor-pointer hover:bg-gray-200"
//                   onClick={() =>
//                     col !== "totalPrice" // totalPrice column is calculated, don't sort
//                       ? handleSort(col === "pricePerShare" ? "price" : col)
//                       : null
//                   }
//                 >
//                   {col === "pricePerShare"
//                     ? "Price per Share"
//                     : col === "totalPrice"
//                     ? "Total Price"
//                     : col.charAt(0).toUpperCase() + col.slice(1)}
//                   {sortConfig.key === (col === "pricePerShare" ? "price" : col) &&
//                   col !== "totalPrice"
//                     ? sortConfig.direction === "asc"
//                       ? " ▲"
//                       : " ▼"
//                     : ""}
//                 </th>
//               ))}
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentTransactions.map((tx, index) => {
//               const price = parseFloat(tx.price) || 0;
//               const quantity = parseFloat(tx.quantity) || 0;
//               const totalPrice = price * quantity;

//               return (
//                 <tr
//                   key={tx.id}
//                   className={`text-center ${
//                     index % 2 ? "bg-gray-50" : "bg-white"
//                   } border-t hover:bg-gray-100 transition-colors`}
//                 >
//                   <td className="p-2 border">{tx.date || "-"}</td>
//                   <td className="p-2 border font-medium">{tx.symbol || "-"}</td>
//                   <td
//                     className={`p-2 border font-medium ${
//                       (tx.type || "").toLowerCase() === "buy"
//                         ? "text-green-600"
//                         : (tx.type || "").toLowerCase() === "sell"
//                         ? "text-red-600"
//                         : "text-blue-600"
//                     }`}
//                   >
//                     {(tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1)}
//                   </td>
//                   <td className="p-2 border">{quantity}</td>
//                   <td className="p-2 border">{price.toFixed(2)}</td>
//                   <td className="p-2 border">{totalPrice.toFixed(2)}</td>
//                   <td className="p-2 border">
//                     <button
//                       onClick={() => handleDeleteTransaction(tx.id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-gray-500">No transactions for this portfolio yet.</p>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="mt-4 flex gap-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-md ${
//                 currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Totals */}
//       <div className="mt-6 text-gray-700 font-medium space-y-1">
//         <p>
//           Total Buys: <span className="text-green-600">Rs. {totalBuys.toLocaleString()}</span>
//         </p>
//         <p>
//           Total Sells: <span className="text-red-600">Rs. {totalSells.toLocaleString()}</span>
//         </p>
//         <p>
//           Net Value: <span className="text-indigo-600">Rs. {netValue.toLocaleString()}</span>
//         </p>
//         <p>Total Transactions: {filtered.length}</p>
//       </div>
//     </div>
//   );
// };

// export default TransactionTable;


import React, { useState, useMemo } from "react";

const TransactionTable = ({ filteredTransactions, handleDeleteTransaction }) => {
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Helper: Calculate Fees
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
      fees = units * price * 0.15;
    }
    return fees;
  };

  // Helper: Price after tax
  const priceAfterTax = (tx) => {
    const price = parseFloat(tx.price) || 0;
    const fees = calculateFees(tx);
    const type = (tx.type || "").toLowerCase();
    const units = parseFloat(tx.quantity) || 0;
    if (type === "buy") return (price + fees / units) || 0;
    if (type === "sell") return (price - fees / units) || 0;
    if (type === "dividend") return (price - fees / units) || 0;
    return price;
  };

  // Sorting
  const sortedTransactions = useMemo(() => {
    let sortableTransactions = [...filteredTransactions];

    if (sortConfig.key) {
      sortableTransactions.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === "symbol" || sortConfig.key === "type") {
          aValue = (aValue || "").toUpperCase();
          bValue = (bValue || "").toUpperCase();
        } else if (
          sortConfig.key === "price" ||
          sortConfig.key === "quantity" ||
          sortConfig.key === "totalPriceAfterTax"
        ) {
          aValue = parseFloat(aValue) || 0;
          bValue = parseFloat(bValue) || 0;
        } else if (sortConfig.key === "date") {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return sortableTransactions;
  }, [filteredTransactions, sortConfig]);

  // Filtering
  const filtered = useMemo(() => {
    return sortedTransactions.filter(
      (tx) =>
        (tx.symbol || "").toUpperCase().includes(search.toUpperCase()) ||
        (tx.type || "").toUpperCase().includes(search.toUpperCase())
    );
  }, [search, sortedTransactions]);

  // Pagination
  const indexOfLast = currentPage * transactionsPerPage;
  const indexOfFirst = indexOfLast - transactionsPerPage;
  const currentTransactions = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / transactionsPerPage);

  // Totals
  const totalBuys = filtered
    .filter((tx) => (tx.type || "").toLowerCase() === "buy")
    .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

  const totalSells = filtered
    .filter((tx) => (tx.type || "").toLowerCase() === "sell")
    .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

  const netValue = totalBuys - totalSells;

  // Sort handler
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg overflow-x-auto w-full">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Transactions</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Symbol or Type"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 w-full max-w-sm"
      />

      {currentTransactions.length > 0 ? (
        <table className="w-full border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              {[
                "date",
                "symbol",
                "type",
                "quantity",
                "pricePerShare",
                "totalPrice",
                "fees",
                "priceAfterTax",
                "totalPriceAfterTax",
              ].map((col) => (
                <th
                  key={col}
                  className="p-2 border cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    col !== "totalPrice" &&
                    col !== "fees" &&
                    col !== "priceAfterTax" &&
                    col !== "totalPriceAfterTax"
                      ? handleSort(col === "pricePerShare" ? "price" : col)
                      : null
                  }
                >
                  {col === "pricePerShare"
                    ? "Price per Share"
                    : col === "totalPrice"
                    ? "Total Price"
                    : col === "priceAfterTax"
                    ? "Price/Share After Tax"
                    : col === "totalPriceAfterTax"
                    ? "Total Price After Tax"
                    : col === "fees"
                    ? "Fees"
                    : col.charAt(0).toUpperCase() + col.slice(1)}
                  {sortConfig.key === (col === "pricePerShare" ? "price" : col) &&
                  !["totalPrice", "fees", "priceAfterTax", "totalPriceAfterTax"].includes(
                    col
                  )
                    ? sortConfig.direction === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </th>
              ))}
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((tx, index) => {
              const price = parseFloat(tx.price) || 0;
              const quantity = parseFloat(tx.quantity) || 0;
              const fees = calculateFees(tx);
              const priceAT = priceAfterTax(tx);
              const totalPrice = price * quantity;
              const totalPriceAT = priceAT * quantity;

              return (
                <tr
                  key={tx.id}
                  className={`text-center ${
                    index % 2 ? "bg-gray-50" : "bg-white"
                  } border-t hover:bg-gray-100 transition-colors`}
                >
                  <td className="p-2 border">{tx.date || "-"}</td>
                  <td className="p-2 border font-medium">{tx.symbol || "-"}</td>
                  <td
                    className={`p-2 border font-medium ${
                      (tx.type || "").toLowerCase() === "buy"
                        ? "text-green-600"
                        : (tx.type || "").toLowerCase() === "sell"
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                  >
                    {(tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1)}
                  </td>
                  <td className="p-2 border">{quantity}</td>
                  <td className="p-2 border">Rs. {price.toFixed(2)}</td>
                  <td className="p-2 border">Rs. {totalPrice.toFixed(2)}</td>
                  <td className="p-2 border">Rs. {fees.toFixed(2)}</td>
                  <td className="p-2 border">Rs. {priceAT.toFixed(2)}</td>
                  <td className="p-2 border">Rs. {totalPriceAT.toFixed(2)}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDeleteTransaction(tx.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No transactions for this portfolio yet.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Totals */}
      <div className="mt-6 text-gray-700 font-medium space-y-1">
        <p>
          Total Buys: <span className="text-green-600">Rs. {totalBuys.toLocaleString()}</span>
        </p>
        <p>
          Total Sells: <span className="text-red-600">Rs. {totalSells.toLocaleString()}</span>
        </p>
        <p>
          Net Value: <span className="text-indigo-600">Rs. {netValue.toLocaleString()}</span>
        </p>
        <p>Total Transactions: {filtered.length}</p>
      </div>
    </div>
  );
};

export default TransactionTable;
