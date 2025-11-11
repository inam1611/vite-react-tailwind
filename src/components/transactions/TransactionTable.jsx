// import React, { useState, useMemo } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable"; // correct import for modern setups
// import * as XLSX from "xlsx";

// const TransactionTable = ({ filteredTransactions, handleDeleteTransaction }) => {
//   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const transactionsPerPage = 10;

//   // Helper: Calculate Fees
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   // Helper: Price after tax
//   const priceAfterTax = (tx) => {
//     const price = parseFloat(tx.price) || 0;
//     const fees = calculateFees(tx);
//     const type = (tx.type || "").toLowerCase();
//     const units = parseFloat(tx.quantity) || 0;
//     if (type === "buy") return (price + fees / units) || 0;
//     if (type === "sell") return (price - fees / units) || 0;
//     if (type === "dividend") return (price - fees / units) || 0;
//     return price;
//   };

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
//         } else if (
//           sortConfig.key === "price" ||
//           sortConfig.key === "quantity" ||
//           sortConfig.key === "totalPriceAfterTax"
//         ) {
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
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

//   const totalSells = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "sell")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

//   const netValue = totalBuys - totalSells;

//   // Sort handler
//   const handleSort = (key) => {
//     setSortConfig((prev) => ({
//       key,
//       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//     }));
//   };

//   // Export PDF
//   const exportPDF = () => {
//   const doc = new jsPDF();

//   const headers = [
//     ["Date", "Symbol", "Type", "Quantity", "Price/Share", "Total Price", "Fees", "Price After Tax", "Total Price After Tax"]
//   ];

//   const rows = filtered.map(tx => {
//     const price = parseFloat(tx.price) || 0;
//     const quantity = parseFloat(tx.quantity) || 0;
//     const fees = calculateFees(tx);
//     const priceAT = priceAfterTax(tx);
//     const totalPrice = price * quantity;
//     const totalPriceAT = priceAT * quantity;

//     return [
//       tx.date || "-",
//       tx.symbol || "-",
//       (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
//       quantity,
//       `Rs. ${price.toFixed(2)}`,
//       `Rs. ${totalPrice.toFixed(2)}`,
//       `Rs. ${fees.toFixed(2)}`,
//       `Rs. ${priceAT.toFixed(2)}`,
//       `Rs. ${totalPriceAT.toFixed(2)}`
//     ];
//   });

//   autoTable(doc, {
//     head: headers,
//     body: rows,
//   });

//   doc.save("transactions.pdf");
// };


//   // Export Excel
//   const exportExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(
//       filtered.map(tx => {
//         const price = parseFloat(tx.price) || 0;
//         const quantity = parseFloat(tx.quantity) || 0;
//         const fees = calculateFees(tx);
//         const priceAT = priceAfterTax(tx);
//         const totalPrice = price * quantity;
//         const totalPriceAT = priceAT * quantity;

//         return {
//           Date: tx.date || "-",
//           Symbol: tx.symbol || "-",
//           Type: (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
//           Quantity: quantity,
//           "Price/Share": price,
//           "Total Price": totalPrice,
//           Fees: fees,
//           "Price/Share After Tax": priceAT,
//           "Total Price After Tax": totalPriceAT,
//         };
//       })
//     );
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Transactions");
//     XLSX.writeFile(wb, "transactions.xlsx");
//   };

//   return (
//     <div className="bg-white shadow-lg p-6 rounded-lg overflow-x-auto w-full">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Transactions</h2>

//       {/* Export Buttons */}
//       <div className="flex gap-2 mb-4">
//         <button
//           onClick={exportPDF}
//           className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//         >
//           Export PDF
//         </button>
//         <button
//           onClick={exportExcel}
//           className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
//         >
//           Export Excel
//         </button>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by Symbol or Type"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 w-full max-w-sm"
//       />

//       {currentTransactions.length > 0 ? (
//         <table className="w-full border-collapse min-w-[900px]">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               {[
//                 "date",
//                 "symbol",
//                 "type",
//                 "quantity",
//                 "pricePerShare",
//                 "totalPrice",
//                 "fees",
//                 "priceAfterTax",
//                 "totalPriceAfterTax",
//               ].map((col) => (
//                 <th
//                   key={col}
//                   className="p-2 border cursor-pointer hover:bg-gray-200"
//                   onClick={() =>
//                     col !== "totalPrice" &&
//                     col !== "fees" &&
//                     col !== "priceAfterTax" &&
//                     col !== "totalPriceAfterTax"
//                       ? handleSort(col === "pricePerShare" ? "price" : col)
//                       : null
//                   }
//                 >
//                   {col === "pricePerShare"
//                     ? "Price per Share"
//                     : col === "totalPrice"
//                     ? "Total Price"
//                     : col === "priceAfterTax"
//                     ? "Price/Share After Tax"
//                     : col === "totalPriceAfterTax"
//                     ? "Total Price After Tax"
//                     : col === "fees"
//                     ? "Fees"
//                     : col.charAt(0).toUpperCase() + col.slice(1)}
//                   {sortConfig.key === (col === "pricePerShare" ? "price" : col) &&
//                   !["totalPrice", "fees", "priceAfterTax", "totalPriceAfterTax"].includes(
//                     col
//                   )
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
//               const fees = calculateFees(tx);
//               const priceAT = priceAfterTax(tx);
//               const totalPrice = price * quantity;
//               const totalPriceAT = priceAT * quantity;

//               return (
//                 <tr
//                   key={tx.id}
//                   className={`text-center ${index % 2 ? "bg-gray-50" : "bg-white"} border-t hover:bg-gray-100 transition-colors`}
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
//                   <td className="p-2 border">Rs. {price.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalPrice.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {fees.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {priceAT.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalPriceAT.toFixed(2)}</td>
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
//               className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
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
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import * as XLSX from "xlsx";

// const TransactionTable = ({ filteredTransactions, handleDeleteTransaction }) => {
//   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const transactionsPerPage = 10;

//   // Helper: Calculate Fees
//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   // Helper: Price after tax
//   const priceAfterTax = (tx) => {
//     const price = parseFloat(tx.price) || 0;
//     const fees = calculateFees(tx);
//     const type = (tx.type || "").toLowerCase();
//     const units = parseFloat(tx.quantity) || 0;
//     if (type === "buy") return (price + fees / units) || 0;
//     if (type === "sell") return (price - fees / units) || 0;
//     if (type === "dividend") return (price - fees / units) || 0;
//     return price;
//   };

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
//         } else if (
//           sortConfig.key === "price" ||
//           sortConfig.key === "quantity" ||
//           sortConfig.key === "totalPriceAfterTax"
//         ) {
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
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

//   const totalSells = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "sell")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

//   const netValue = totalBuys - totalSells;

//   // Sort handler
//   const handleSort = (key) => {
//     setSortConfig((prev) => ({
//       key,
//       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//     }));
//   };

//   // Export PDF
//   const exportPDF = () => {
//     const doc = new jsPDF();

//     const headers = [
//       ["Date", "Symbol", "Type", "Quantity", "Price/Share", "Total Price", "Fees", "Price After Tax", "Total Price After Tax"]
//     ];

//     const rows = filtered.map(tx => {
//       const price = parseFloat(tx.price) || 0;
//       const quantity = parseFloat(tx.quantity) || 0;
//       const fees = calculateFees(tx);
//       const priceAT = priceAfterTax(tx);
//       const totalPrice = price * quantity;
//       const totalPriceAT = priceAT * quantity;

//       return [
//         tx.date || "-",
//         tx.symbol || "-",
//         (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
//         quantity,
//         `Rs. ${price.toFixed(2)}`,
//         `Rs. ${totalPrice.toFixed(2)}`,
//         `Rs. ${fees.toFixed(2)}`,
//         `Rs. ${priceAT.toFixed(2)}`,
//         `Rs. ${totalPriceAT.toFixed(2)}`
//       ];
//     });

//     autoTable(doc, {
//       head: headers,
//       body: rows,
//     });

//     doc.save("transactions.pdf");
//   };

//   // Export Excel
//   const exportExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(
//       filtered.map(tx => {
//         const price = parseFloat(tx.price) || 0;
//         const quantity = parseFloat(tx.quantity) || 0;
//         const fees = calculateFees(tx);
//         const priceAT = priceAfterTax(tx);
//         const totalPrice = price * quantity;
//         const totalPriceAT = priceAT * quantity;

//         return {
//           Date: tx.date || "-",
//           Symbol: tx.symbol || "-",
//           Type: (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
//           Quantity: quantity,
//           "Price/Share": price,
//           "Total Price": totalPrice,
//           Fees: fees,
//           "Price/Share After Tax": priceAT,
//           "Total Price After Tax": totalPriceAT,
//         };
//       })
//     );
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Transactions");
//     XLSX.writeFile(wb, "transactions.xlsx");
//   };

//   return (
//     <div className="bg-white shadow-lg p-6 rounded-lg overflow-x-auto w-full">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Transactions</h2>

//       {/* Export Buttons */}
//       <div className="flex gap-2 mb-4">
//         <button
//           onClick={exportPDF}
//           className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//         >
//           Export PDF
//         </button>
//         <button
//           onClick={exportExcel}
//           className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
//         >
//           Export Excel
//         </button>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by Symbol or Type"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 w-full max-w-sm"
//       />

//       {currentTransactions.length > 0 ? (
//         <table className="w-full border-collapse min-w-[900px]">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               {[
//                 "date",
//                 "symbol",
//                 "type",
//                 "quantity",
//                 "pricePerShare",
//                 "totalPrice",
//                 "fees",
//                 "priceAfterTax",
//                 "totalPriceAfterTax",
//               ].map((col) => (
//                 <th
//                   key={col}
//                   className="p-2 border cursor-pointer hover:bg-gray-200"
//                   onClick={() =>
//                     col !== "totalPrice" &&
//                     col !== "fees" &&
//                     col !== "priceAfterTax" &&
//                     col !== "totalPriceAfterTax"
//                       ? handleSort(col === "pricePerShare" ? "price" : col)
//                       : null
//                   }
//                 >
//                   {col === "pricePerShare"
//                     ? "Price per Share"
//                     : col === "totalPrice"
//                     ? "Total Price"
//                     : col === "priceAfterTax"
//                     ? "Price/Share After Tax"
//                     : col === "totalPriceAfterTax"
//                     ? "Total Price After Tax"
//                     : col === "fees"
//                     ? "Fees"
//                     : col.charAt(0).toUpperCase() + col.slice(1)}
//                   {sortConfig.key === (col === "pricePerShare" ? "price" : col) &&
//                   !["totalPrice", "fees", "priceAfterTax", "totalPriceAfterTax"].includes(
//                     col
//                   )
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
//               const fees = calculateFees(tx);
//               const priceAT = priceAfterTax(tx);
//               const totalPrice = price * quantity;
//               const totalPriceAT = priceAT * quantity;

//               return (
//                 <tr
//                   key={tx.id}
//                   className={`text-center ${index % 2 ? "bg-gray-50" : "bg-white"} border-t hover:bg-gray-100 transition-colors`}
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
//                   <td className="p-2 border">Rs. {price.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalPrice.toFixed(2)}</td>

//                   {/* ✅ Fees in red (blue for dividends) */}
//                   <td
//                     className={`p-2 border font-medium ${
//                       (tx.type || "").toLowerCase() === "dividend"
//                         ? "text-blue-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     Rs. {fees.toFixed(2)}
//                   </td>

//                   <td className="p-2 border">Rs. {priceAT.toFixed(2)}</td>
//                   <td className="p-2 border">Rs. {totalPriceAT.toFixed(2)}</td>
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
//               className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
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
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import * as XLSX from "xlsx";

// const TransactionTable = ({ filteredTransactions, handleDeleteTransaction }) => {
//   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const transactionsPerPage = 10;

//   const calculateFees = (tx) => {
//     const units = parseFloat(tx.quantity) || 0;
//     const price = parseFloat(tx.price) || 0;
//     const type = (tx.type || "").toLowerCase();
//     let fees = 0;

//     if (type === "buy" || type === "sell") {
//       const commission = price < 20 ? units * 0.03 : units * price * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "dividend") {
//       fees = units * price * 0.15;
//     }
//     return fees;
//   };

//   const priceAfterTax = (tx) => {
//     const price = parseFloat(tx.price) || 0;
//     const fees = calculateFees(tx);
//     const type = (tx.type || "").toLowerCase();
//     const units = parseFloat(tx.quantity) || 0;
//     if (type === "buy") return (price + fees / units) || 0;
//     if (type === "sell") return (price - fees / units) || 0;
//     if (type === "dividend") return (price - fees / units) || 0;
//     return price;
//   };

//   const sortedTransactions = useMemo(() => {
//     let sortableTransactions = [...filteredTransactions];
//     if (sortConfig.key) {
//       sortableTransactions.sort((a, b) => {
//         let aValue = a[sortConfig.key];
//         let bValue = b[sortConfig.key];

//         if (["symbol", "type"].includes(sortConfig.key)) {
//           aValue = (aValue || "").toUpperCase();
//           bValue = (bValue || "").toUpperCase();
//         } else if (["price", "quantity", "totalPriceAfterTax"].includes(sortConfig.key)) {
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

//   const filtered = useMemo(() => {
//     return sortedTransactions.filter(
//       (tx) =>
//         (tx.symbol || "").toUpperCase().includes(search.toUpperCase()) ||
//         (tx.type || "").toUpperCase().includes(search.toUpperCase())
//     );
//   }, [search, sortedTransactions]);

//   const indexOfLast = currentPage * transactionsPerPage;
//   const indexOfFirst = indexOfLast - transactionsPerPage;
//   const currentTransactions = filtered.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filtered.length / transactionsPerPage);

//   const totalBuys = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "buy")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

//   const totalSells = filtered
//     .filter((tx) => (tx.type || "").toLowerCase() === "sell")
//     .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

//   const netValue = totalBuys - totalSells;

//   // const handleSort = (key) => {
//   //   setSortConfig((prev) => ({
//   //     key,
//   //     direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//   //   }));
//   // };

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     const headers = [["Date", "Symbol", "Type", "Quantity", "Price/Share", "Total Price", "Fees", "Price After Tax", "Total Price After Tax"]];
//     const rows = filtered.map((tx) => {
//       const price = parseFloat(tx.price) || 0;
//       const quantity = parseFloat(tx.quantity) || 0;
//       const fees = calculateFees(tx);
//       const priceAT = priceAfterTax(tx);
//       const totalPrice = price * quantity;
//       const totalPriceAT = priceAT * quantity;
//       return [
//         tx.date || "-",
//         tx.symbol || "-",
//         (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
//         quantity,
//         `Rs. ${price.toFixed(2)}`,
//         `Rs. ${totalPrice.toFixed(2)}`,
//         `Rs. ${fees.toFixed(2)}`,
//         `Rs. ${priceAT.toFixed(2)}`,
//         `Rs. ${totalPriceAT.toFixed(2)}`,
//       ];
//     });
//     autoTable(doc, { head: headers, body: rows });
//     doc.save("transactions.pdf");
//   };

//   const exportExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(
//       filtered.map((tx) => {
//         const price = parseFloat(tx.price) || 0;
//         const quantity = parseFloat(tx.quantity) || 0;
//         const fees = calculateFees(tx);
//         const priceAT = priceAfterTax(tx);
//         const totalPrice = price * quantity;
//         const totalPriceAT = priceAT * quantity;
//         return {
//           Date: tx.date || "-",
//           Symbol: tx.symbol || "-",
//           Type: (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
//           Quantity: quantity,
//           "Price/Share": price,
//           "Total Price": totalPrice,
//           Fees: fees,
//           "Price/Share After Tax": priceAT,
//           "Total Price After Tax": totalPriceAT,
//         };
//       })
//     );
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Transactions");
//     XLSX.writeFile(wb, "transactions.xlsx");
//   };

//   const formatNumber = (num, decimals = 2) =>
//     num?.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

//   return (
//     <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Transactions</h2>
//         <div className="flex gap-2">
//           <button onClick={exportPDF} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">Export PDF</button>
//           <button onClick={exportExcel} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">Export Excel</button>
//         </div>
//       </div>

//       <input
//         type="text"
//         placeholder="🔍 Search by Symbol or Type"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 w-full max-w-sm"
//       />

//       <div className="overflow-x-auto max-h-[70vh] rounded-xl shadow">
//   <table className="min-w-full border-collapse text-sm">
//     {/* Sticky Header */}
//     <thead className="sticky top-0 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider z-10 shadow-sm">
//       <tr>
//         <th className="px-4 py-3 text-center font-semibold">Date</th>
//         <th className="px-4 py-3 text-center font-semibold">Symbol</th>
//         <th className="px-4 py-3 text-center font-semibold">Type</th>
//         <th className="px-4 py-3 text-center font-semibold">Quantity</th>
//         <th className="px-4 py-3 text-center font-semibold">Price</th>
//         <th className="px-4 py-3 text-center font-semibold">Total Price</th>
//         <th className="px-4 py-3 text-center font-semibold">Fees</th>
//         <th className="px-4 py-3 text-center font-semibold">Price After Tax</th>
//         <th className="px-4 py-3 text-center font-semibold">Total Price After Tax</th>
//         <th className="px-4 py-3 text-center font-semibold">Actions</th>
//       </tr>
//     </thead>

//     {/* Table Body */}
//     <tbody className="divide-y divide-gray-100 bg-white">
//       {currentTransactions.length > 0 ? (
//         currentTransactions.map((tx, i) => {
//           const price = parseFloat(tx.price) || 0;
//           const quantity = parseFloat(tx.quantity) || 0;
//           const fees = calculateFees(tx);
//           const priceAT = priceAfterTax(tx);
//           const totalPrice = price * quantity;
//           const totalPriceAT = priceAT * quantity;

//           return (
//             <tr
//               key={i}
//               className="hover:bg-indigo-50 transition-colors duration-150 text-center"
//             >
//               <td className="px-4 py-3 text-gray-700">{tx.date || "-"}</td>
//               <td className="px-4 py-3 font-medium text-gray-800">{tx.symbol || "-"}</td>
//               <td
//                 className={`px-4 py-3 font-semibold ${
//                   tx.type?.toLowerCase() === "buy"
//                     ? "text-green-600"
//                     : tx.type?.toLowerCase() === "sell"
//                     ? "text-red-600"
//                     : "text-blue-600"
//                 }`}
//               >
//                 {tx.type?.charAt(0).toUpperCase() + tx.type?.slice(1)}
//               </td>
//               <td className="px-4 py-3">{quantity}</td>
//               <td className="px-4 py-3">Rs. {formatNumber(price)}</td>
//               <td className="px-4 py-3">Rs. {formatNumber(totalPrice)}</td>
//               <td className="px-4 py-3 text-red-600">Rs. {formatNumber(fees)}</td>
//               <td className="px-4 py-3">Rs. {formatNumber(priceAT)}</td>
//               <td className="px-4 py-3">Rs. {formatNumber(totalPriceAT)}</td>
//               <td className="px-4 py-3">
//                 <button
//                   onClick={() => handleDeleteTransaction(tx.id)}
//                   className="text-red-600 hover:text-red-800 font-medium text-sm"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           );
//         })
//       ) : (
//         <tr>
//           <td
//             colSpan="10"
//             className="p-6 text-center text-gray-500 font-medium italic"
//           >
//             No transactions yet for this portfolio.
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>
// </div>


//       {/* ✅ Pagination */}
//       {totalPages > 1 && (
//         <div className="mt-4 flex flex-wrap gap-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
//                 currentPage === i + 1
//                   ? "bg-indigo-600 text-white shadow"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* ✅ Totals */}
//       <div className="mt-6 text-gray-700 font-medium space-y-1 text-sm sm:text-base">
//         <p>
//           Total Buys: <span className="text-green-600 font-semibold">Rs. {totalBuys.toLocaleString()}</span>
//         </p>
//         <p>
//           Total Sells: <span className="text-red-600 font-semibold">Rs. {totalSells.toLocaleString()}</span>
//         </p>
//         <p>
//           Net Value: <span className="text-indigo-600 font-semibold">Rs. {netValue.toLocaleString()}</span>
//         </p>
//         <p>Total Transactions: {filtered.length}</p>
//       </div>
//     </div>
//   );
// };

// export default TransactionTable;

import React, { useState, useMemo } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

const TransactionTable = ({ filteredTransactions, handleDeleteTransaction }) => {
  const [sortConfig] = useState({ key: "date", direction: "desc" }); // setSortConfig removed
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

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

  const sortedTransactions = useMemo(() => {
    let sortableTransactions = [...filteredTransactions];
    if (sortConfig.key) {
      sortableTransactions.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (["symbol", "type"].includes(sortConfig.key)) {
          aValue = (aValue || "").toUpperCase();
          bValue = (bValue || "").toUpperCase();
        } else if (["price", "quantity", "totalPriceAfterTax"].includes(sortConfig.key)) {
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

  const filtered = useMemo(() => {
    return sortedTransactions.filter(
      (tx) =>
        (tx.symbol || "").toUpperCase().includes(search.toUpperCase()) ||
        (tx.type || "").toUpperCase().includes(search.toUpperCase())
    );
  }, [search, sortedTransactions]);

  const indexOfLast = currentPage * transactionsPerPage;
  const indexOfFirst = indexOfLast - transactionsPerPage;
  const currentTransactions = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / transactionsPerPage);

  const totalBuys = filtered
    .filter((tx) => (tx.type || "").toLowerCase() === "buy")
    .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

  const totalSells = filtered
    .filter((tx) => (tx.type || "").toLowerCase() === "sell")
    .reduce((acc, tx) => acc + (parseFloat(tx.quantity) || 0) * priceAfterTax(tx), 0);

  const netValue = totalBuys - totalSells;

  const exportPDF = () => {
    const doc = new jsPDF();
    const headers = [["Date", "Symbol", "Type", "Quantity", "Price/Share", "Total Price", "Fees", "Price After Tax", "Total Price After Tax"]];
    const rows = filtered.map((tx) => {
      const price = parseFloat(tx.price) || 0;
      const quantity = parseFloat(tx.quantity) || 0;
      const fees = calculateFees(tx);
      const priceAT = priceAfterTax(tx);
      const totalPrice = price * quantity;
      const totalPriceAT = priceAT * quantity;
      return [
        tx.date || "-",
        tx.symbol || "-",
        (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
        quantity,
        `Rs. ${price.toFixed(2)}`,
        `Rs. ${totalPrice.toFixed(2)}`,
        `Rs. ${fees.toFixed(2)}`,
        `Rs. ${priceAT.toFixed(2)}`,
        `Rs. ${totalPriceAT.toFixed(2)}`,
      ];
    });
    autoTable(doc, { head: headers, body: rows });
    doc.save("transactions.pdf");
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      filtered.map((tx) => {
        const price = parseFloat(tx.price) || 0;
        const quantity = parseFloat(tx.quantity) || 0;
        const fees = calculateFees(tx);
        const priceAT = priceAfterTax(tx);
        const totalPrice = price * quantity;
        const totalPriceAT = priceAT * quantity;
        return {
          Date: tx.date || "-",
          Symbol: tx.symbol || "-",
          Type: (tx.type || "").charAt(0).toUpperCase() + (tx.type || "").slice(1),
          Quantity: quantity,
          "Price/Share": price,
          "Total Price": totalPrice,
          Fees: fees,
          "Price/Share After Tax": priceAT,
          "Total Price After Tax": totalPriceAT,
        };
      })
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions");
    XLSX.writeFile(wb, "transactions.xlsx");
  };

  const formatNumber = (num, decimals = 2) =>
    num?.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Transactions</h2>
        <div className="flex gap-2">
          <button onClick={exportPDF} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">Export PDF</button>
          <button onClick={exportExcel} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">Export Excel</button>
        </div>
      </div>

      <input
        type="text"
        placeholder="🔍 Search by Symbol or Type"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 w-full max-w-sm"
      />

      <div className="overflow-x-auto max-h-[70vh] rounded-xl shadow">
        <table className="min-w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-indigo-50 text-indigo-700 text-xs uppercase tracking-wider z-10 shadow-sm">
            <tr>
              <th className="px-4 py-3 text-center font-semibold">Date</th>
              <th className="px-4 py-3 text-center font-semibold">Symbol</th>
              <th className="px-4 py-3 text-center font-semibold">Type</th>
              <th className="px-4 py-3 text-center font-semibold">Quantity</th>
              <th className="px-4 py-3 text-center font-semibold">Price</th>
              <th className="px-4 py-3 text-center font-semibold">Total Price</th>
              <th className="px-4 py-3 text-center font-semibold">Fees</th>
              <th className="px-4 py-3 text-center font-semibold">Price After Tax</th>
              <th className="px-4 py-3 text-center font-semibold">Total Price After Tax</th>
              <th className="px-4 py-3 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {currentTransactions.length > 0 ? (
              currentTransactions.map((tx, i) => {
                const price = parseFloat(tx.price) || 0;
                const quantity = parseFloat(tx.quantity) || 0;
                const fees = calculateFees(tx);
                const priceAT = priceAfterTax(tx);
                const totalPrice = price * quantity;
                const totalPriceAT = priceAT * quantity;

                return (
                  <tr key={i} className="hover:bg-indigo-50 transition-colors duration-150 text-center">
                    <td className="px-4 py-3 text-gray-700">{tx.date || "-"}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{tx.symbol || "-"}</td>
                    <td className={`px-4 py-3 font-semibold ${
                      tx.type?.toLowerCase() === "buy" ? "text-green-600" :
                      tx.type?.toLowerCase() === "sell" ? "text-red-600" : "text-blue-600"
                    }`}>
                      {tx.type?.charAt(0).toUpperCase() + tx.type?.slice(1)}
                    </td>
                    <td className="px-4 py-3">{quantity}</td>
                    <td className="px-4 py-3">Rs. {formatNumber(price)}</td>
                    <td className="px-4 py-3">Rs. {formatNumber(totalPrice)}</td>
                    <td className="px-4 py-3 text-red-600">Rs. {formatNumber(fees)}</td>
                    <td className="px-4 py-3">Rs. {formatNumber(priceAT)}</td>
                    <td className="px-4 py-3">Rs. {formatNumber(totalPriceAT)}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDeleteTransaction(tx.id)}
                        className="text-red-600 hover:text-red-800 font-medium text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="10" className="p-6 text-center text-gray-500 font-medium italic">
                  No transactions yet for this portfolio.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 text-gray-700 font-medium space-y-1 text-sm sm:text-base">
        <p>Total Buys: <span className="text-green-600 font-semibold">Rs. {totalBuys.toLocaleString()}</span></p>
        <p>Total Sells: <span className="text-red-600 font-semibold">Rs. {totalSells.toLocaleString()}</span></p>
        <p>Net Value: <span className="text-indigo-600 font-semibold">Rs. {netValue.toLocaleString()}</span></p>
        <p>Total Transactions: {filtered.length}</p>
      </div>
    </div>
  );
};

export default TransactionTable;
